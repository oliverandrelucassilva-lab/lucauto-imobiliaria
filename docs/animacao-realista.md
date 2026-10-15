# Animação realista da planta à casa pronta (que acompanha a rolagem)

O vídeo de referência (o do TikTok) faz isto: **planta em linhas, maquete colorida vista de cima e fachada ao entardecer**, uma virando a outra. Dá para fazer igual para a Lucauto, com imagens geradas por IA. Não use o vídeo de referência no site (é de outra pessoa).

O site já está pronto para receber o material. Falta só você gerar as imagens ou o vídeo. Sem eles, a seção usa a casa desenhada.

## Caminho 1: 3 imagens (mais simples, leve e funciona bem)

As imagens entram uma sobre a outra conforme a rolagem, com um zoom leve. Pelo que vi, já dá um resultado muito bom.

1. **Gere a fachada** (você já tem uma, em `assets/img/fachada-1.webp`).
2. **No mesmo chat do ChatGPT, anexe essa fachada** e peça as outras duas, para a casa ser a mesma:

   Planta (imagem 1):
   ```
   Usando esta casa como referência, crie a planta baixa dela vista de cima, em desenho técnico de arquitetura: linhas brancas finas sobre fundo azul marinho escuro (#07142A), paredes, portas, janelas, varanda, piscina e muro, sem cores além do branco e um toque de dourado. Proporção 16:10. Sem texto, sem cotas escritas, sem logotipo.
   ```
   Maquete vista de cima (imagem 2):
   ```
   Usando esta casa e a planta como referência, crie uma vista aérea em 3D (maquete de arquitetura renderizada) da mesma casa, vista de cima em 45 graus, com telhado de cerâmica, varanda, muro com portão, jardim com plantas locais e a calçada, luz quente de fim de tarde, estilo de render fotorrealista. Proporção 16:10. Sem pessoas, sem texto, sem logotipo.
   ```
   Fachada (imagem 3): a que você já tem, em 16:10.
3. Converta as 3 para WebP (2000 px de largura, qualidade 85) e salve em `assets/img/`: `planta-1.webp`, `planta-2.webp`, `planta-3.webp`.
4. No `fonte/lucauto-v2.template.html`, em `CONFIG`:
   ```js
   plantaImagens: ['assets/img/planta-1.webp','assets/img/planta-2.webp','assets/img/planta-3.webp'],
   ```
5. Rode `node scripts/montar-v2.mjs`.

## Caminho 2: vídeo de transição (mais realista, mais trabalho)

Parece o vídeo de referência: a câmera sobe e a planta "vira" a maquete e depois a fachada.

1. Tenha as 3 imagens do Caminho 1.
2. Em um gerador de vídeo com **primeiro e último quadro** (Kling, Veo, Runway ou Seedance, que está no Higgsfield), crie dois clipes de 5 a 8 segundos: planta para maquete e maquete para fachada. Prompt de exemplo:
   ```
   Transição suave e contínua entre o primeiro e o último quadro. A câmera sobe devagar e gira levemente. As linhas da planta se enchem de volume e cor, a casa se ergue até ficar pronta. Sem cortes, sem pessoas, sem texto. Movimento lento e elegante.
   ```
3. Junte os dois clipes em um só (um editor de vídeo qualquer) e exporte em MP4.
4. Prepare o vídeo para a rolagem (deixa o "arrastar" suave):
   ```
   bash scripts/otimizar-video-scroll.sh seu-video.mp4
   ```
   Ele cria `assets/video/planta.mp4` (1280 px, sem áudio, todos os quadros como pontos de parada).
5. No `CONFIG`: `plantaVideo: 'assets/video/planta.mp4',` e rode `node scripts/montar-v2.mjs`.

**Cuidados:** o vídeo fica pesado (alguns MB). Mantenha com 6 a 10 segundos. No iPhone, o vídeo só começa a responder depois do primeiro toque na tela.

## Custos e limites

- O Caminho 1 usa só o ChatGPT. O Caminho 2 usa créditos de uma ferramenta de vídeo. No Higgsfield, o plano gratuito (10 créditos) provavelmente não cobre vídeo. Eu consulto o custo antes de gastar qualquer crédito e só gero com o seu OK.
- São imagens **ilustrativas**: a legenda "Imagem ilustrativa" aparece sozinha. Não use como foto de um imóvel real anunciado.
