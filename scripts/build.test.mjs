import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { adaptContent, localImages, build, root } from './build.mjs';
import path from 'node:path';
import { createHash } from 'node:crypto';
import vm from 'node:vm';
test('short content tokens cannot corrupt CSS, SVG, or identifiers', () => {
  const source = '<span>X</span><path d="MX 0"/>"X" iconX \\"X\\"';
  assert.equal(adaptContent(source, { X: 'FAQ' }), '<span>FAQ</span><path d="MX 0"/>"FAQ" iconX \\"FAQ\\"');
});
test('local image URLs work in HTML and React hydration data', () => {
  assert.equal(localImages('/_next/image?url=%2F_next%2Fa.jpg&amp;w=640&amp;q=75'), '/_next/a.jpg');
  assert.equal(localImages('/_next/image?url=%2F_next%2Fa.jpg&w=640&q=75'), '/_next/a.jpg');
});
test('build preserves runtime/media and removes reference acquisition + analytics', async () => {
  const dist = await build();
  const html = await readFile(path.join(dist, 'index.html'), 'utf8');
  assert.ok(html.includes('One Shared Pot. Individual Nourishment.'));
  assert.ok(html.includes('https://nutri-mesh-flow.base44.app/'));
  assert.ok(!html.includes('href="/sign-up"'));
  assert.ok(!html.includes('/_next/image?'));
  assert.ok(html.includes('/home/footer-video-loop.mp4'));
  const video = await readFile(path.join(dist, 'home/footer-video-loop.mp4'));
  assert.equal(video.toString('ascii', 4, 8), 'ftyp');
  const manifest = JSON.parse(await readFile(path.join(root, 'docs/research/assets.json'), 'utf8'));
  for (const asset of manifest) {
    assert.ok((await stat(path.join(dist, asset.path))).isFile(), asset.path);
    if (!asset.path.endsWith('.js')) {
      const hash = createHash('sha256').update(await readFile(path.join(dist, asset.path))).digest('hex');
      assert.equal(hash, asset.sha256, `Unchanged media: ${asset.path}`);
    }
  }
  const chunks = path.join(dist, '_next/static/immutable/chunks');
  for (const filename of [...(await readdir(chunks)).filter(x => x.endsWith('.js'))]) {
    const file = path.join(chunks, filename);
    assert.equal(spawnSync(process.execPath, ['--check', file]).status, 0, filename);
    const js = await readFile(file, 'utf8');
    assert.ok(!js.includes('s.default.init("phc_'), 'Original analytics initializer removed');
  }
});

test('simulator updates portion totals and enforces serving limits', async () => {
  const stats = Object.fromEntries(['pot-total-weight', 'pot-total-cal', 'pot-total-pro'].map(id => [id, {}]));
  const context = vm.createContext({ window: {}, document: { addEventListener() {}, getElementById(id) { return stats[id] || null; } } });
  vm.runInContext(await readFile(path.join(root, 'public/details.js'), 'utf8'), context);
  vm.runInContext('renderSimulator()', context);
  assert.equal(stats['pot-total-cal'].textContent, '1008 kcal');
  context.window.updatePortion(0, 0.5);
  assert.equal(stats['pot-total-cal'].textContent, '1120 kcal');
  assert.equal(stats['pot-total-weight'].textContent, '800g (approx 5.0 katoris)');
  assert.equal(stats['pot-total-pro'].textContent, '61 g');
  context.window.updatePortion(0, 100);
  assert.equal(vm.runInContext('currentMembers[0].katoris', context), 3.5);
  context.window.updatePortion(0, -100);
  assert.equal(vm.runInContext('currentMembers[0].katoris', context), 0.5);
});
