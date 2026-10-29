// NutriMesh content panels are outside the preserved reference React tree.
(() => {
  let dialog;
  let opener;
  const sections = new Set(['problem', 'simulator', 'features', 'catalogue', 'stories', 'faq']);
  function openDetails(section, trigger) {
    opener = trigger;
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.className = 'nutrimesh-dialog';
      dialog.setAttribute('aria-labelledby', 'nutrimesh-dialog-title');
      dialog.innerHTML = '<header><span id="nutrimesh-dialog-title">NUTRIMESH / HOUSEHOLD FLOW</span><button type="button" aria-label="Close NutriMesh details">Close ×</button></header><iframe title="NutriMesh simulator, catalogue and household guide"></iframe>';
      dialog.querySelector('button').addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
      dialog.addEventListener('close', () => { document.documentElement.classList.remove('nutrimesh-details-open'); opener?.focus(); });
      document.body.append(dialog);
    }
    dialog.querySelector('iframe').src = '/details.html#' + section;
    document.documentElement.classList.add('nutrimesh-details-open');
    dialog.showModal();
  }
  document.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    const url = new URL(link.href, location.href);
    const section = url.hash.slice(1);
    if (sections.has(section) && url.origin === location.origin) {
      event.preventDefault();
      event.stopImmediatePropagation();
      openDetails(section, link);
    }
  }, true);
})();
