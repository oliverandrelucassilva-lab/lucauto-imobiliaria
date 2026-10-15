// Gera o arquivo único index.html (página principal) a partir de fonte/lucauto-v2.template.html.
// Cada {{b64:caminho}} do modelo vira um data URI com o arquivo (fontes, logo, imagens).
// Uso: node scripts/montar-v2.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { extname } from 'node:path';

const tipos = { '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2' };
const modelo = readFileSync('fonte/lucauto-v2.template.html', 'utf8');
const saida = modelo.replace(/\{\{b64:([^}]+)\}\}/g, (_, caminho) => {
  const tipo = tipos[extname(caminho)];
  if (!tipo) throw new Error('Tipo não suportado: ' + caminho);
  return `data:${tipo};base64,${readFileSync(caminho).toString('base64')}`;
});
writeFileSync('index.html', saida);
console.log('index.html gerado:', (Buffer.byteLength(saida) / 1024).toFixed(0), 'KB');
