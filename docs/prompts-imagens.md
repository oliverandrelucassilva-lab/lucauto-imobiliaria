# Prompts de imagem e vídeo para a capa da Lucauto

Use em qualquer gerador (Higgsfield, Midjourney, Flux, GPT Image etc.). Os prompts estão em inglês porque os modelos costumam acertar mais, com a explicação em português.

## Regras

- **Sem pessoas, sem texto, sem logotipo, sem marca d'água.** O texto e a logo vão por cima, pelo site.
- **Deixe espaço vazio à esquerda** (cerca de 45% da imagem). É onde fica o título.
- Cores da marca: azul marinho `#07142A` a `#0B1F3A`, dourado `#C9A24A`.
- **Nunca use imagem de IA como foto de imóvel à venda ou para alugar.** Isso engana quem procura. Para imóveis e para a fachada do prédio, use fotos reais. IA só para fundo e decoração.

## 1. Capa, computador (16:9, 2560 x 1440)

```
Cinematic wide shot of a modern premium residential and commercial tower at blue hour, dusk, in a Brazilian mid-size city. Deep navy blue sky (#07142A) fading to midnight blue, the building lit with warm golden window lights (#C9A24A). Elegant glass and concrete architecture, subtle reflections, clean minimal composition. The building sits on the right third of the frame, left 45% of the image is calm dark navy negative space for text. Soft golden rim light, very light atmospheric haze, shallow depth of field in the foreground. Photorealistic, high-end real estate advertising photography, 35mm, sharp, no people, no cars, no text, no logos, no watermark.
```

## 2. Capa, celular (9:16 ou 4:5, 1440 x 2560)

```
Vertical cinematic shot looking up at a modern premium tower at blue hour, deep navy blue sky (#07142A), warm golden window lights (#C9A24A), clean minimal composition. Lower 55% of the image is the building, upper 45% is calm dark navy sky with soft gradient, empty for text. Soft golden rim light, light haze, photorealistic high-end real estate photography, no people, no text, no logos, no watermark.
```

## 3. Vídeo em loop (5 a 8 segundos, sem áudio)

Gere a partir da imagem 1 (image-to-video):

```
Very slow cinematic push-in toward the tower, almost imperceptible camera movement. Golden window lights gently flicker on one by one, soft haze drifts slowly across the sky, subtle light shimmer on the glass. Smooth, elegant, premium mood. No people, no text, no cuts, seamless loop.
```

Dicas: peça 16:9, 720p ou 1080p, sem áudio. Depois comprima para até uns 4 MB (MP4, H.264).

## 4. Textura decorativa (opcional, 16:9)

```
Abstract architectural blueprint pattern, thin golden lines (#C9A24A) on deep navy background (#07142A), isometric building outlines and grid, very subtle, low contrast, lots of empty space, minimal, no text.
```

## Como colocar no site

1. Salve a imagem em `assets/img/capa.webp` (WebP, largura de 2000 px, qualidade 80, idealmente abaixo de 250 KB).
2. Salve o vídeo (se houver) em `assets/video/capa.mp4`.
3. No arquivo `fonte/lucauto-v2.template.html`, no topo do script, em `CONFIG`:
   ```js
   capaImagem: 'assets/img/capa.webp',
   capaVideo: 'assets/video/capa.mp4',
   ```
4. Rode `node scripts/montar-v2.mjs`.

Com imagem ou vídeo definidos, o fundo animado (prédio em linhas e pontos) fica mais discreto por cima. Sem eles, a capa usa só a animação.

A foto real da fachada do prédio entra em `fotoPredio`, e aparece na seção Localização.

## O que mais pode entrar no site (precisa de conteúdo do cliente)

O site só mostra o que for real. Para deixar a página mais completa, mande:

- Fotos reais dos imóveis (e dados: tipo, bairro, quartos, vagas, valor).
- Foto da fachada do prédio e da equipe, se quiserem mostrar pessoas.
- Depoimentos de clientes que autorizem a publicação.
- Números verdadeiros (anos de atuação, imóveis atendidos), se quiserem usar.
- Horário de atendimento e e-mail.
