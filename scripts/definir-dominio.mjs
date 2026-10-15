// Uso: node scripts/definir-dominio.mjs www.seudominio.com.br
// Troca DOMINIO-A-DEFINIR pelo domínio real em index.html, sitemap.xml e robots.txt.
import { readFileSync, writeFileSync } from 'node:fs';

const dominio = (process.argv[2] || '').replace(/^https?:\/\//, '').replace(/\/$/, '');
if (!dominio) {
  console.error('Informe o domínio. Ex.: node scripts/definir-dominio.mjs www.seudominio.com.br');
  process.exit(1);
}
for (const arquivo of ['index.html', 'index-v1.html', 'sitemap.xml', 'robots.txt']) {
  const texto = readFileSync(arquivo, 'utf8');
  writeFileSync(arquivo, texto.replaceAll('DOMINIO-A-DEFINIR', dominio));
  console.log('Atualizado:', arquivo);
}
