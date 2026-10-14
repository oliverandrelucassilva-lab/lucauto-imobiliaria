/*
  LISTA DE IMÓVEIS EM DESTAQUE

  Para editar, basta mexer neste arquivo. Cada imóvel é um bloco { ... } separado por vírgula.

  Campos:
    titulo      Nome do imóvel (vai escrito na mensagem do WhatsApp)
    tipo        Ex.: "Casa", "Apartamento", "Terreno", "Sala comercial"
    finalidade  "Venda" ou "Aluguel"
    local       Bairro ou cidade
    foto        Caminho da foto, ex.: "assets/img/imoveis/casa-centro.webp"
                (coloque a foto na pasta assets/img/imoveis, de preferência em .webp, até 1200 px de largura)
    alt         Descrição da foto, para acessibilidade e Google
    quartos, banheiros, vagas, area   Opcionais (números). Só aparecem se preenchidos. area em m².
    preco       Opcional. Só preencha quando o cliente informar, ex.: "R$ 250.000".
                Deixe vazio ("") para não mostrar preço.
    provisorio  true para marcar como exemplo provisório. Remova a linha (ou use false) nos imóveis reais.

  Para tirar um imóvel do site, apague o bloco dele. Se a lista ficar vazia, o site mostra
  uma mensagem convidando a falar pelo WhatsApp.
*/
window.IMOVEIS = [
  {
    titulo: "Casa (exemplo provisório)",
    tipo: "Casa",
    finalidade: "Venda",
    local: "Euclides da Cunha, BA",
    quartos: 3, banheiros: 2, vagas: 1, area: 120,
    foto: "assets/img/imovel-provisorio.webp",
    alt: "Imagem ilustrativa provisória, silhuetas de prédios em linhas douradas sobre fundo azul marinho",
    preco: "",
    provisorio: true
  },
  {
    titulo: "Apartamento (exemplo provisório)",
    tipo: "Apartamento",
    finalidade: "Aluguel",
    local: "Euclides da Cunha, BA",
    foto: "assets/img/imovel-provisorio.webp",
    alt: "Imagem ilustrativa provisória, silhuetas de prédios em linhas douradas sobre fundo azul marinho",
    preco: "",
    provisorio: true
  },
  {
    titulo: "Terreno (exemplo provisório)",
    tipo: "Terreno",
    finalidade: "Venda",
    local: "Euclides da Cunha, BA",
    foto: "assets/img/imovel-provisorio.webp",
    alt: "Imagem ilustrativa provisória, silhuetas de prédios em linhas douradas sobre fundo azul marinho",
    preco: "",
    provisorio: true
  }
];
