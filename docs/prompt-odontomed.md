# Prompt para o Odontomed (só a parte visual)

Cole o texto abaixo na ferramenta que vai montar o site do Odontomed. Anexe junto as suas referências visuais (prints, vídeos, fotos) e o conteúdo real da clínica. Tudo que está entre [colchetes] você troca pelo que for do Odontomed.

---

Quero melhorar a PARTE VISUAL do site do Odontomed. Não mude os textos, os dados nem a estrutura de conteúdo que eu já tenho: só o visual, a animação e a sensação de qualidade. Siga as referências visuais que estou anexando.

## 1. Base técnica
- HTML, CSS e JavaScript puros, sem bibliotecas externas e sem React. Se eu mandar um componente em React (por exemplo do React Bits), recrie o efeito em JavaScript puro.
- Mobile primeiro: coluna única, botões com no mínimo 48 px de altura, nenhuma rolagem horizontal, fonte de corpo com no mínimo 16 px.
- Rápido: imagens em WebP, `loading="lazy"` abaixo da primeira dobra, fontes embutidas ou com `font-display: swap`.
- Acessível: HTML semântico, `alt` descritivo em toda imagem, foco visível, navegação por teclado, contraste mínimo AA, e respeitar `prefers-reduced-motion` (sem animação para quem pediu).
- Teste em 390 px (celular), 820 px (tablet) e 1366 px ou mais (computador) e confira que não há rolagem lateral nem erro no console.

## 2. Identidade visual
- Cores: [cor principal escura, ex.: azul profundo ou verde petróleo], [cor de destaque, ex.: dourado ou turquesa], mais um tom claro (creme ou off-white) para seções claras. Não deixe o site inteiro de uma cor só: alterne seções escuras e claras para dar ritmo.
- Tipografia: um sans-serif geométrico e limpo para títulos e texto, e uma serifada em itálico só para UMA palavra de destaque por título, na cor de destaque.
- Seções largas, com muito espaço, títulos grandes e hierarquia clara. Evite o aspecto de "caixinhas" empilhadas. Sombras suaves e arredondadas, nada pesado.
- Botão principal na cor de destaque com texto escuro, verbo no texto ("Agendar avaliação", "Falar no WhatsApp"), elevação de 2 px e sombra suave ao passar o mouse.

## 3. Capa (hero)
- Foto grande em tela cheia, ao entardecer ou com luz quente e acolhedora, com o lado esquerdo mais escuro e limpo para o título. Foto nítida (no mínimo 2000 px de largura), com degradê suave só o necessário para o texto ficar legível. Sem retângulo de sombra visível atrás do texto.
- Título grande, com UMA palavra em itálico na cor de destaque. Subtítulo curto, um botão principal e um microtexto ("Atendimento sem compromisso").
- Menu fixo que vira uma "pílula" flutuante ao rolar, no computador. No celular, menu hambúrguer. Ao DESCER a página, a barra encolhe para um botão redondo pequeno no canto (só o ícone da logo) para não tapar títulos e informações. Ao clicar nele, a barra completa volta, e encolhe de novo depois de rolar mais um pouco. No topo da página ela fica sempre completa.
- Embaixo da capa: ícones dos serviços, um cartão pequeno "Em destaque" e a indicação "Role para descobrir".
- Animação da capa: uma rede de pontos de luz bem discreta ligados por linhas finas, que se aproximam do ponteiro do mouse. NÃO usar bolhas brilhantes, nem brilho que segue o mouse, nem desenho em linhas por cima da foto.
- Logo oficial usada como está, sem redesenhar.

## 4. Seções e componentes
- Faixa em movimento (marquee) logo abaixo da capa, na cor de destaque, com os serviços. Tem que rodar em loop contínuo, sem nunca deixar espaço vazio, em qualquer largura de tela.
- Barra de confiança (registro profissional, endereço, WhatsApp) com ícones.
- Cartões de serviços com ícone, hover suave e brilho dourado discreto que segue o ponteiro SOMENTE dentro do cartão.
- Seção "O que você procura?" com 4 cartões grandes que abrem o WhatsApp já com a mensagem pronta para aquele interesse.
- Cartões de profissionais ou tratamentos em carrossel: foto, nome, uma linha de descrição, botão. Tópicos pequenos com ícone. Sombra suave e inteira (sem ser cortada pelo carrossel) que cresce no hover.
- Ao clicar num cartão, ele "voa" do lugar até o centro da tela e abre uma janela de galeria com até 5 fotos (miniaturas, setas, teclado e arrastar com o dedo). Depois da 5ª foto, mostra a última foto borrada com um cartão cinza translúcido convidando a falar no WhatsApp. A janela tem SEMPRE o mesmo tamanho em todas as telas e, no celular, fica pequena e centralizada, com margem e fundo escurecido, nunca cobrindo a tela inteira.
- "Passo a passo" em 3 etapas: no computador, um painel grande fixo à esquerda troca de imagem conforme a rolagem, com o número grande e uma legenda curta sobre a foto. Para a troca ser instantânea, deixe as 3 imagens carregadas e sobrepostas e troque só a opacidade (cross-fade), escolhendo o passo mais perto do centro da tela. Não troque o `src` da imagem a cada passo. No celular, cada etapa tem a foto no topo com número e legenda sobre ela.
- Localização com mapa e botão "Como chegar". Perguntas frequentes em sanfona (um item aberto por vez, o aberto vira cartão claro). Chamada final para o WhatsApp. Rodapé com registro profissional, endereço e links.
- Botão flutuante do WhatsApp (só um botão fixo, não dois).

## 5. Animações (todas sutis)
- Títulos: cada palavra entra desfocada e sobe, uma depois da outra, quando o título aparece na tela (efeito BlurText). Como alternativa, dobra em 3D a partir de uma dobradiça (efeito FoldText). Deixe configurável para eu escolher.
- Parágrafos de texto entram um de cada vez, desfocando e subindo.
- Linha fina na cor de destaque que cresce embaixo dos títulos de seção.
- Barra de progresso de leitura no topo da página.
- Entrada ao rolar para os blocos (sobem e aparecem), com pequeno atraso entre eles.
- Hover suave em cartões, botões e links. Inclinação 3D leve nos cartões de imóvel/profissional só no computador.
- Nada de excesso: se a página parecer carregada de movimento, tire efeitos em vez de acrescentar.

## 6. Texto
- Alinhar os parágrafos nas duas bordas no computador, com hifenização, e alinhados à esquerda em cartões estreitos no celular (para não abrir buracos entre as palavras).
- Nomes próprios e expressões que não podem quebrar (ex.: nome da clínica) em negrito e juntos na mesma linha.
- Títulos com quebra equilibrada.
- Não usar travessão nem hífen longo nos textos.

## 7. Imagens
- Gero as imagens no ChatGPT e te envio. Peça-me imagens com estas regras: fotorrealistas, luz quente, paleta combinando com o site, sem texto, sem logotipo, sem marca d'água, com espaço vazio onde vai o título.
- Para ilustrar etapas com pessoas, prefira só mãos e braços (sem rostos), para não parecerem a equipe real nem pacientes reais.
- Imagens geradas por IA são só ambientação e devem ter a legenda "Imagem ilustrativa". Nunca usar IA para mostrar resultado de tratamento, antes e depois, ou a equipe e os pacientes reais. Fotos reais da clínica, da equipe (com autorização) e dos casos reais substituem as ilustrações.
- Confira a publicidade para a área da saúde: [confirmar as regras do conselho profissional (CFO/CRO) sobre antes e depois, preços e promessas de resultado] e não inclua nada que elas proíbam.
- Otimize tudo em WebP e dê `alt` descritivo.

## 8. Não invente
- Nada de depoimentos, números, anos de atuação, prêmios, preços ou resultados que eu não tenha informado. Onde faltar informação, deixe o espaço e avise, com o texto neutro.

## 9. Como trabalhar
- Faça em etapas, e a cada etapa me mostre capturas de tela do celular e do computador antes de seguir.
- Deixe tudo que eu vou editar num bloco de configuração no topo do script: textos de contato, horários, lista de profissionais ou tratamentos, caminhos das imagens, escolha do efeito dos títulos.
- Se algo na referência visual não puder ser feito sem biblioteca externa, me diga e proponha a alternativa mais leve.
