"""Capture public reference assets. Run explicitly; normal builds use checked-in files."""
import concurrent.futures, hashlib, json, pathlib, re, urllib.parse, urllib.request
root = pathlib.Path(__file__).resolve().parent.parent
public = root / 'public'
seen = set()
manifest = []
def references(text, base='/'):
    refs = set(re.findall(r'''(?:/_next/)?static/immutable/[\w./-]+\.(?:js|css|woff2|png|jpg|webp|svg)''', text))
    refs |= set(re.findall(r'/operate-og\.png', text))
    refs |= set(re.findall(r'''/home/[\w./-]+\.(?:svg|mp4|png|jpg|webp)''',text))
    refs = {('/_next/' + p if p.startswith('static/') else p) for p in refs}
    for p in re.findall(r'url\(["\']?([^\)"\']+)',text):
        if p.startswith('../'):
            refs.add(urllib.parse.urljoin(base,p))
    return refs

def fetch(path):
    source = root / 'docs/research/reference-assets' / path.lstrip('/')
    target = public / path.lstrip('/')
    if source.is_file(): data = source.read_bytes()
    elif target.is_file(): data = target.read_bytes()
    else:
        with urllib.request.urlopen('https://operate.so' + path, timeout=45) as response: data = response.read()
    target.parent.mkdir(parents=True,exist_ok=True)
    target.write_bytes(data)
    return path, data
pending = references((root/'docs/research/operate.html').read_text())
while pending:
    batch = sorted(pending - seen)
    if not batch: break
    seen.update(batch)
    pending = set()
    with concurrent.futures.ThreadPoolExecutor(6) as pool:
        for path, data in pool.map(fetch,batch):
            manifest.append({'path':path,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
            if path.endswith(('.js','.css','.svg')):
                pending.update(references(data.decode('utf8'),path))
print(f'Captured {len(manifest)} files, {sum(x["bytes"] for x in manifest):,} bytes')
(root/'docs/research/assets.json').write_text(json.dumps(manifest,indent=2))
