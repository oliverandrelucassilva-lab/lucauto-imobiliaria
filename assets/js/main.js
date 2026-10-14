(function () {
  var doc = document.documentElement;
  var numero = document.body.getAttribute('data-whatsapp') || '5575999421482';
  var reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Lista de imóveis (vem de dados/imoveis.js)
  function renderImoveis() {
    var lista = document.getElementById('lista-imoveis');
    var aviso = document.getElementById('aviso-provisorio');
    var imoveis = Array.isArray(window.IMOVEIS) ? window.IMOVEIS : [];

    if (!imoveis.length) {
      var vazio = document.createElement('p');
      vazio.className = 'vazio';
      vazio.textContent = 'Em breve, novos imóveis por aqui. Fale com a Lucauto pelo WhatsApp para saber o que está disponível.';
      lista.appendChild(vazio);
      return;
    }

    if (imoveis.some(function (i) { return i.provisorio; })) aviso.hidden = false;

    imoveis.forEach(function (i, n) {
      var card = document.createElement('article');
      card.className = 'card reveal';
      card.style.setProperty('--d', (n % 3) * 0.1 + 's');

      var media = document.createElement('div');
      media.className = 'card__media';
      var img = document.createElement('img');
      img.src = i.foto;
      img.alt = i.alt || (i.tipo + ' em ' + i.local);
      img.width = 960;
      img.height = 720;
      img.loading = 'lazy';
      img.decoding = 'async';
      media.appendChild(img);

      var tags = document.createElement('div');
      tags.className = 'tags';
      if (i.finalidade) tags.appendChild(tag(i.finalidade));
      if (i.provisorio) tags.appendChild(tag('Provisório', true));
      media.appendChild(tags);

      var tipo = el('p', 'card__tipo', i.tipo);
      var titulo = el('h3', '', i.titulo);
      var local = el('p', 'card__local', i.local);

      var msg = 'Olá! Tenho interesse no imóvel: ' + i.titulo + (i.local ? ' (' + i.local + ')' : '') + '. Pode me passar mais informações?';
      var btn = el('a', 'btn', 'Quero saber mais');
      btn.href = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(msg);
      btn.target = '_blank';
      btn.rel = 'noopener';

      card.appendChild(media);
      card.appendChild(tipo);
      card.appendChild(titulo);
      card.appendChild(local);
      if (i.preco) card.appendChild(el('p', 'card__preco', i.preco));
      card.appendChild(btn);
      lista.appendChild(card);
    });
  }

  function el(tagName, cls, text) {
    var e = document.createElement(tagName);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }
  function tag(text, warn) {
    return el('span', 'tag' + (warn ? ' tag--warn' : ''), text);
  }

  renderImoveis();
  doc.classList.add('js');

  // Entrada ao rolar
  var itens = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduzMovimento) {
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    itens.forEach(function (i) { io.observe(i); });
  } else {
    itens.forEach(function (i) { i.classList.add('is-in'); });
  }

  // Barra de progresso e cabeçalho
  var barra = document.getElementById('progress');
  var header = document.querySelector('.header');
  var tick = false;
  function aoRolar() {
    var max = doc.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    barra.style.transform = 'scaleX(' + p + ')';
    header.classList.toggle('is-stuck', window.scrollY > 10);
    tick = false;
  }
  window.addEventListener('scroll', function () {
    if (!tick) { tick = true; requestAnimationFrame(aoRolar); }
  }, { passive: true });
  aoRolar();

  // Brilho que acompanha o mouse no início
  var hero = document.getElementById('inicio');
  var glow = document.getElementById('glow');
  if (!reduzMovimento) {
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      glow.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      glow.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  }

  // Menu no celular
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  function alternarMenu(abrir) {
    menu.classList.toggle('is-open', abrir);
    burger.setAttribute('aria-expanded', String(abrir));
    burger.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
  }
  burger.addEventListener('click', function () {
    alternarMenu(burger.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) alternarMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') alternarMenu(false); });

  // Link ativo no menu
  var links = Array.prototype.slice.call(menu.querySelectorAll('a[href^="#"]'));
  if ('IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { so.observe(s); });
  }

  document.getElementById('ano').textContent = new Date().getFullYear();
})();
