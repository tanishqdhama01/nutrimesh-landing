import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { build } from './build.mjs';
const directory = await build();
const port = Number(process.env.PORT || 3000);
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.mp4': 'video/mp4', '.ico': 'image/x-icon', '.json': 'application/json' };
createServer(async (request, response) => {
  try {
    const url = new URL(request.url, 'http://localhost');
    const pathname = decodeURIComponent(url.pathname);
    const file = path.resolve(directory, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(directory + path.sep)) { response.writeHead(403).end(); return; }
    if (pathname.startsWith('/op/')) { response.writeHead(204).end(); return; }
    const info = await stat(file);
    if (!info.isFile()) { response.writeHead(404).end(); return; }
    const data = await readFile(file);
    response.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream');
    response.setHeader('Cache-Control', 'no-cache');
    if (request.headers.range) {
      const range = /^bytes=(\d+)-(\d*)$/.exec(request.headers.range);
      if (!range) { response.writeHead(416).end(); return; }
      const start = Number(range[1]);
      const end = Math.min(range[2] ? Number(range[2]) : data.length - 1, data.length - 1);
      if (start > end) { response.writeHead(416).end(); return; }
      response.writeHead(206, { 'Content-Range': `bytes ${start}-${end}/${data.length}`, 'Accept-Ranges': 'bytes', 'Content-Length': end - start + 1 });
      response.end(data.subarray(start, end + 1));
    } else {
      response.writeHead(200, { 'Content-Length': data.length, 'Accept-Ranges': 'bytes' });
      response.end(data);
    }
  } catch { response.writeHead(404).end('Not found'); }
}).listen(port, '0.0.0.0', () => console.log(`NutriMesh ready at http://localhost:${port}`));
