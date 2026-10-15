# Lucauto Empreendimentos Imobiliários, landing page

Site estático (HTML, CSS e JS puros), sem etapa de build. Deploy na Vercel.

## Estrutura

- `index.html`: **página principal (v2)**, arquivo único gerado. Não edite direto: edite `fonte/lucauto-v2.template.html` e rode `node scripts/montar-v2.mjs`.
- `index-v1.html`: primeiro protótipo, guardado para comparação (acessível em /index-v1).
- `fonte/`, `scripts/`, `docs/`: modelo do site, scripts de montagem e prompts de imagem.
- `dados/imoveis.js`: **lista de imóveis**. É o único arquivo a editar para trocar imóveis, fotos e preços. As instruções estão no topo dele.
- `assets/img/`: logo (recortada da arte oficial, sem alterações), favicons e imagens. Fotos de imóveis vão em `assets/img/imoveis/` (formato `.webp`, até 1200 px de largura).
- `dados/capa.js`: vídeo ou imagem opcional para o fundo da capa (por exemplo gerado no Higgsfield). Vazio, a capa usa a animação própria.
- `assets/css/style.css`, `assets/js/main.js`: visual e interações.

## Pendências do cliente

- **E-mail**: descomentar o bloco em `#contato` no `index.html` e incluir `"email"` no JSON-LD (topo do `index.html`).
- **Horário de atendimento**: hoje aparece "Consulte pelo WhatsApp". Trocar em `#contato`.
- **Imóveis e fotos reais**: substituir os exemplos provisórios em `dados/imoveis.js`.
- **Texto "Sobre"**: ampliar somente com o que o cliente informar.
- **Domínio**: quando registrado, rodar `node scripts/definir-dominio.mjs www.seudominio.com.br` (ajusta canonical, Open Graph, JSON-LD, sitemap e robots).

## Testar localmente

```
python3 -m http.server 8000
```

Abrir http://localhost:8000.

## Publicar na Vercel

1. Em vercel.com, **Add New > Project** e importar este repositório privado (conectar a conta do GitHub se pedido).
2. Framework Preset: **Other**. Deixar build command e output directory em branco.
3. **Deploy**. Cada push na branch principal publica de novo.
4. Quando o domínio for registrado: **Settings > Domains**, adicionar o domínio e seguir as instruções de DNS. Depois rodar o script de domínio acima e fazer o commit.
