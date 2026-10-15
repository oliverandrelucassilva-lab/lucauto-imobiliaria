# Prompt para o ChatGPT gerar a imagem da capa

Estilo da referência: foto cinematográfica de casa de alto padrão ao entardecer, luz quente dourada, espaço escuro e limpo à esquerda para o título.

## Capa, computador (peça formato paisagem)

```
Crie uma imagem fotorrealista, em formato paisagem (proporção 3:2), para a capa de um site de imobiliária de alto padrão.

Cena: uma casa contemporânea de luxo ao pôr do sol, com grandes vãos de vidro, varanda ampla com forro de madeira, piscina de borda infinita refletindo o céu e móveis de lounge elegantes. Interior aceso com luz quente dourada. Ao fundo, colinas suaves e horizonte aberto, sem mar e sem prédios altos. Céu em degradê de azul-marinho profundo no topo para laranja e dourado perto do horizonte, com algumas nuvens finas iluminadas.

Composição: a casa e a piscina ocupam o lado direito (cerca de 55% da imagem). O lado esquerdo (cerca de 45%) deve ficar mais escuro e limpo, com céu e sombra suave, sem objetos, para receber um título em texto por cima.

Estilo: fotografia de arquitetura de revista, lente 24 mm, alto contraste suave, cores quentes (dourado e âmbar) contra azul-marinho, nitidez alta, reflexos realistas na água, sensação de luxo e tranquilidade.

Regras: sem pessoas, sem carros, sem texto, sem logotipos, sem marca d'água, sem molduras.
```

Depois de gerar, se precisar ajustar, peça no mesmo chat:
- "Escureça e esvazie o lado esquerdo, para eu colocar texto."
- "Deixe o céu mais azul-marinho no topo e mais dourado no horizonte."
- "Remova qualquer texto, logotipo ou marca d'água."

## Capa, celular (peça formato retrato)

```
Mesma cena e mesmo estilo, agora em formato retrato (proporção 2:3). A casa com a piscina ocupa a metade de baixo. A metade de cima é céu em degradê de azul-marinho para dourado, limpo, sem objetos, para receber um título. Sem pessoas, sem texto, sem logotipos, sem marca d'água.
```

## Imagem de interior (opcional, formato paisagem)

```
Sala de estar contemporânea de alto padrão ao entardecer, grandes janelas de vidro, luz dourada quente, madeira e pedra, decoração minimalista, fotografia de arquitetura fotorrealista, sem pessoas, sem texto, sem logotipos.
```

## Atenção

- A cena da referência tem mar e cidade litorânea. Como a Lucauto atende em **Euclides da Cunha, BA** (interior), pedi colinas e horizonte aberto, para a imagem não sugerir um lugar que a imobiliária não atende.
- Essas imagens são **ambientação**. Não use imagem de IA como foto de um imóvel real anunciado.
- O rodapé do site já diz "Imagens ilustrativas".

## Como colocar no site

Gere a imagem, baixe e me mande aqui. Eu otimizo (WebP) e coloco na capa. Se preferir fazer sozinho: salve em `assets/img/capa.webp` e preencha `capaImagem` no `CONFIG` do `fonte/lucauto-v2.template.html`, depois rode `node scripts/montar-v2.mjs`.

---

# Galeria de fachadas (efeito de expandir ao rolar)

A galeria usa uma imagem por bloco, que ocupa a tela inteira no fim da rolagem. Por isso:
- Gere em **paisagem, de 2000 px de largura ou mais** (16:9 ou 3:2). Imagem pequena fica borrada em tela cheia.
- Edite a lista `GALERIA` no topo do script do `fonte/lucauto-v2.template.html` (título, tipo, bairro e o caminho da imagem).
- Salve as imagens em `assets/img/` (formato WebP, qualidade 85) e aponte em `imagem:`.

## Prompt (ChatGPT), fachada no estilo do interior do Nordeste

```
Crie uma imagem fotorrealista em formato paisagem (proporção 16:9) da fachada de uma casa residencial típica do interior do Nordeste brasileiro, no sertão da Bahia, ao entardecer.

Arquitetura: casa térrea com varanda coberta, telhado de cerâmica aparente ou platibanda, paredes em tons terrosos e pastel, portas e janelas de madeira ou ferro, calçada de pedra ou cimento, muro baixo com portão. Vegetação local, como árvores de pequeno porte e plantas resistentes à seca. Céu limpo em degradê de azul para laranja, luz quente de fim de tarde.

Câmera: fotografia de arquitetura de revista, lente 24 mm, nível dos olhos, nitidez alta.

Regras: sem pessoas, sem carros, sem placas, sem texto, sem logotipos, sem marca d'água.
```

Variações: peça "casa com garagem e fachada contemporânea simples", "sobrado com sacada", "casa de esquina com muro e jardim", "terreno plano com cerca e vegetação rasteira" (sempre com as mesmas regras).

**Atenção:** são imagens **ilustrativas**. Não use como foto de um imóvel real anunciado e deixe a legenda "Imagem ilustrativa" ligada (campo `provisorio:true`). Confira se o estilo realmente parece com as casas da região.

---

# Tratar as fotos reais dos imóveis (ChatGPT)

Use **só em fotos reais** do imóvel. O objetivo é limpar e melhorar a qualidade, sem mudar o imóvel.

```
Esta é uma foto real de um imóvel que será anunciado. Faça apenas retoques de limpeza e qualidade:
- Remova pessoas, reflexos de pessoas em espelhos e vidros, carros, motos e objetos soltos que distraem na frente do imóvel.
- Melhore nitidez, exposição e cores, com aparência natural e profissional, em alta resolução.
- NÃO altere a arquitetura, o tamanho, as cores das paredes, os acabamentos, o piso, as janelas, o terreno, a vegetação, o entorno nem o estado de conservação do imóvel.
- NÃO adicione móveis, piscina, jardim, decoração ou qualquer elemento que não exista na foto.
- Mantenha o enquadramento original.
```

Confira a imagem final lado a lado com a original. Se algo do imóvel mudou, descarte e peça de novo.

## O que NÃO fazer

- **Não gere com IA imagens de um imóvel ou terreno real e apresente como se fossem dele.** Isso engana quem procura e pode ser propaganda enganosa (Código de Defesa do Consumidor). Em terreno, por exemplo, mostrar casas ou construções que não existem é perigoso.
- Se quiser mostrar uma ideia do que pode ser construído, use imagem claramente identificada como **"Projeto ilustrativo / imagem meramente ilustrativa"**, separada das fotos reais do terreno.
- Para a galeria, use no máximo 5 fotos reais por imóvel. As extras são ignoradas.

---

# Outros prompts (Higgsfield ou outros geradores)

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

## Imagens extras (seletor "O que você procura?" e passo a passo)

Formato 4:3 para o seletor (1200 x 900) e 4:5 para os passos (1200 x 1500). Sem pessoas e sem texto. Use `CONFIG.fotos` no script.

- **Alugar:** `Warm cozy modern apartment living room at golden hour, soft light through large windows, navy and gold accents, minimal, photorealistic interior photography, no people, no text.`
- **Comprar:** `Modern house facade at dusk with warm window lights, deep blue sky, clean landscaping, photorealistic real estate photography, no people, no text.`
- **Vender:** `Close-up of a golden house key resting on a dark navy surface, shallow depth of field, soft warm light, premium minimal product photography, no text.`
- **Avaliar:** `Architectural blueprint and a small model house on a desk, warm lamp light, navy and gold tones, shallow depth of field, no people, no text.`
- **Passos 1, 2 e 3:** use três variações da mesma atmosfera de entardecer (fachada, interior e chaves), em formato vertical 4:5.

Lembrete: essas imagens são só ambientação. Imóveis reais anunciados precisam de foto real.
