(function () {
  var doc = document.documentElement;
  var numero = document.body.getAttribute('data-whatsapp') || '5575999421482';
  var reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fino = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  function el(t, cls, text) {
    var e = document.createElement(t);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  /* ---------- Título em palavras ---------- */
  document.querySelectorAll('.split').forEach(function (s) {
    var palavras = s.textContent.trim().split(/\s+/);
    s.textContent = '';
    s.setAttribute('aria-label', palavras.join(' '));
    palavras.forEach(function (p, i) {
      var w = el('span', 'wd');
      w.setAttribute('aria-hidden', 'true');
      var inner = el('i', '', p);
      inner.style.setProperty('--i', i);
      w.appendChild(inner);
      s.appendChild(w);
      if (i < palavras.length - 1) s.appendChild(document.createTextNode(' '));
    });
  });

  /* ---------- Imóveis ---------- */
  function renderImoveis() {
    var lista = document.getElementById('lista-imoveis');
    var aviso = document.getElementById('aviso-provisorio');
    var filtros = document.getElementById('filtros');
    var imoveis = Array.isArray(window.IMOVEIS) ? window.IMOVEIS : [];

    if (!imoveis.length) {
      lista.appendChild(el('p', 'vazio', 'Em breve, novos imóveis por aqui. Fale com a Lucauto pelo WhatsApp para saber o que está disponível.'));
      return;
    }
    if (imoveis.some(function (i) { return i.provisorio; })) aviso.hidden = false;

    imoveis.forEach(function (i, n) {
      var card = el('article', 'card spot reveal');
      card.style.setProperty('--d', (n % 3) * 0.1 + 's');
      card.setAttribute('data-fin', i.finalidade || '');

      var media = el('div', 'card__media');
      var img = el('img');
      img.src = i.foto;
      img.alt = i.alt || (i.tipo + ' em ' + i.local);
      img.width = 960; img.height = 720;
      img.loading = 'lazy'; img.decoding = 'async';
      media.appendChild(img);
      var tags = el('div', 'tags');
      if (i.finalidade) tags.appendChild(el('span', 'tag', i.finalidade));
      if (i.provisorio) tags.appendChild(el('span', 'tag tag--warn', 'Provisório'));
      media.appendChild(tags);

      var corpo = el('div', 'card__body');
      corpo.appendChild(el('p', 'card__tipo', i.tipo));
      corpo.appendChild(el('h3', '', i.titulo));
      corpo.appendChild(el('p', 'card__local', i.local));
      if (i.preco) corpo.appendChild(el('p', 'card__preco', i.preco));

      var meta = [];
      if (i.quartos) meta.push(i.quartos + (i.quartos > 1 ? ' quartos' : ' quarto'));
      if (i.banheiros) meta.push(i.banheiros + (i.banheiros > 1 ? ' banheiros' : ' banheiro'));
      if (i.vagas) meta.push(i.vagas + (i.vagas > 1 ? ' vagas' : ' vaga'));
      if (i.area) meta.push(i.area + ' m²');
      if (meta.length) {
        var m = el('div', 'card__meta');
        meta.forEach(function (t) { m.appendChild(el('span', '', t)); });
        corpo.appendChild(m);
      }

      var msg = 'Olá! Tenho interesse no imóvel: ' + i.titulo + (i.local ? ' (' + i.local + ')' : '') + '. Pode me passar mais informações?';
      var btn = el('a', 'btn', 'Quero saber mais');
      btn.href = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(msg);
      btn.target = '_blank'; btn.rel = 'noopener';
      corpo.appendChild(btn);

      card.appendChild(media);
      card.appendChild(corpo);
      lista.appendChild(card);
    });

    // Filtros por finalidade (só se houver mais de uma)
    var fins = [];
    imoveis.forEach(function (i) { if (i.finalidade && fins.indexOf(i.finalidade) < 0) fins.push(i.finalidade); });
    if (fins.length > 1) {
      filtros.hidden = false;
      ['Todos'].concat(fins).forEach(function (f, k) {
        var b = el('button', 'chip', f);
        b.type = 'button';
        b.setAttribute('aria-pressed', k === 0 ? 'true' : 'false');
        b.addEventListener('click', function () {
          filtros.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', String(c === b)); });
          lista.querySelectorAll('.card').forEach(function (c) {
            var ok = f === 'Todos' || c.getAttribute('data-fin') === f;
            c.classList.toggle('is-hidden', !ok);
            if (ok) c.classList.add('is-in');
          });
        });
        filtros.appendChild(b);
      });
    }
  }
  renderImoveis();
  doc.classList.add('js');

  /* ---------- Entrada ao rolar ---------- */
  var itens = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduz) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    itens.forEach(function (i) { io.observe(i); });
  } else {
    itens.forEach(function (i) { i.classList.add('is-in'); });
  }

  /* ---------- Barra de progresso, cabeçalho, linha das etapas, parallax ---------- */
  var barra = document.getElementById('progress');
  var header = document.querySelector('.header');
  var steps = document.getElementById('steps');
  var sky = document.getElementById('skyline');
  var hero = document.getElementById('inicio');
  var tick = false;
  function aoRolar() {
    var max = doc.scrollHeight - window.innerHeight;
    barra.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, window.scrollY / max) : 0) + ')';
    header.classList.toggle('is-stuck', window.scrollY > 10);
    if (steps) {
      var r = steps.getBoundingClientRect();
      var p = (window.innerHeight * 0.75 - r.top) / (r.height + window.innerHeight * 0.1);
      steps.style.setProperty('--p', Math.max(0, Math.min(1, p)) * 100 + '%');
    }
    if (sky && !reduz && window.scrollY < window.innerHeight * 1.2) {
      sky.style.setProperty('--sy', (window.scrollY * 0.12) + 'px');
    }
    tick = false;
  }
  window.addEventListener('scroll', function () { if (!tick) { tick = true; requestAnimationFrame(aoRolar); } }, { passive: true });
  aoRolar();

  /* ---------- Brilho do mouse + parallax do prédio ---------- */
  var glow = document.getElementById('glow');
  var pos = { x: -9999, y: -9999, on: false };
  if (!reduz) {
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      pos.x = e.clientX - r.left; pos.y = e.clientY - r.top; pos.on = true;
      glow.style.setProperty('--mx', pos.x + 'px');
      glow.style.setProperty('--my', pos.y + 'px');
      if (sky) {
        var dx = (e.clientX / r.width - 0.5) * -26, dy = (e.clientY / r.height - 0.5) * -14;
        sky.style.transform = 'translate3d(' + dx + 'px,' + (dy + (parseFloat(sky.style.getPropertyValue('--sy')) || 0)) + 'px,0)';
      }
    });
    hero.addEventListener('pointerleave', function () { pos.on = false; });
  }

  /* ---------- Prédio em linhas douradas (SVG) ---------- */
  if (sky) {
    var NS = 'http://www.w3.org/2000/svg';
    function s(tag, attrs, parent) {
      var n = document.createElementNS(NS, tag);
      for (var k in attrs) n.setAttribute(k, attrs[k]);
      (parent || sky).appendChild(n);
      return n;
    }
    var base = 500;
    // [x, largura, altura, atraso]
    var preds = [[40, 70, 150, .2], [118, 64, 220, .5], [210, 120, 340, .9], [350, 80, 190, .6], [440, 70, 260, .35], [520, 80, 140, .15]];
    var seed = 7;
    function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    preds.forEach(function (b, bi) {
      var x = b[0], w = b[1], h = b[2], t = b[3];
      var top = base - h, main = bi === 2;
      var d = 'M' + x + ' ' + base + 'V' + top + (main ? 'H' + (x + 18) + 'V' + (top - 26) + 'H' + (x + w - 18) + 'V' + top : '') + 'H' + (x + w) + 'V' + base;
      var p = s('path', { d: d, pathLength: 1, class: 'o' });
      p.style.setProperty('--t', t + 's');
      if (main) {
        var ant = s('path', { d: 'M' + (x + w / 2) + ' ' + (top - 26) + 'V' + (top - 80), pathLength: 1, class: 'o' });
        ant.style.setProperty('--t', '2s');
        var luz = s('circle', { cx: x + w / 2, cy: top - 84, r: 3, class: 'w' });
        luz.style.setProperty('--t', '3s');
      }
      for (var y = top + 22; y < base - 10; y += 22) {
        var f = s('path', { d: 'M' + x + ' ' + y + 'H' + (x + w), pathLength: 1, class: 'f' });
        f.style.setProperty('--t', (t + 0.6 + (base - y) / 500) + 's');
      }
      for (var yy = top + 8; yy < base - 20; yy += 22) {
        for (var xx = x + 10; xx < x + w - 8; xx += 16) {
          if (rnd() < 0.34) {
            var win = s('rect', { x: xx, y: yy, width: 5, height: 7, rx: 1, class: 'w' });
            win.style.setProperty('--t', (2.4 + rnd() * 5) + 's');
          }
        }
      }
    });
    s('path', { d: 'M0 ' + base + 'H640', class: 'g' });
  }

  /* ---------- Rede de pontos (canvas) ---------- */
  var cv = document.getElementById('net');
  if (cv && cv.getContext && !reduz) {
    var cx = cv.getContext('2d'), W = 0, H = 0, pts = [], vis = true, raf = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    function medir() {
      var r = hero.getBoundingClientRect();
      W = r.width; H = r.height;
      cv.width = W * dpr; cv.height = H * dpr;
      cx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(70, Math.max(28, W * H / 16000)));
      pts = [];
      for (var i = 0; i < n; i++) pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25, r: Math.random() * 1.4 + .6 });
    }
    function frame() {
      cx.clearRect(0, 0, W, H);
      for (var i = 0; i < pts.length; i++) {
        var a = pts[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > W) a.vx *= -1;
        if (a.y < 0 || a.y > H) a.vy *= -1;
        if (pos.on) {
          var mx = pos.x - a.x, my = pos.y - a.y, dd = mx * mx + my * my;
          if (dd < 22000) { a.x += mx * 0.004; a.y += my * 0.004; }
        }
        cx.fillStyle = 'rgba(240,203,106,.7)';
        cx.beginPath(); cx.arc(a.x, a.y, a.r, 0, 6.2832); cx.fill();
        for (var j = i + 1; j < pts.length; j++) {
          var b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
          if (d2 < 11000) {
            cx.strokeStyle = 'rgba(212,166,42,' + (0.2 * (1 - d2 / 11000)) + ')';
            cx.lineWidth = 1;
            cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(b.x, b.y); cx.stroke();
          }
        }
        if (pos.on) {
          var px = pos.x - a.x, py = pos.y - a.y, pd = px * px + py * py;
          if (pd < 22000) {
            cx.strokeStyle = 'rgba(240,203,106,' + (0.35 * (1 - pd / 22000)) + ')';
            cx.beginPath(); cx.moveTo(a.x, a.y); cx.lineTo(pos.x, pos.y); cx.stroke();
          }
        }
      }
      raf = vis ? requestAnimationFrame(frame) : 0;
    }
    medir();
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(medir, 200); });
    new IntersectionObserver(function (es) {
      vis = es[0].isIntersecting;
      if (vis && !raf) raf = requestAnimationFrame(frame);
    }).observe(hero);
    raf = requestAnimationFrame(frame);
  }

  /* ---------- Vídeo de capa opcional (dados/capa.js) ---------- */
  var capa = window.CAPA || {};
  var vid = document.getElementById('capa-video');
  if (vid && capa.video && !reduz) {
    if (capa.poster) vid.poster = capa.poster;
    vid.src = capa.video;
    vid.addEventListener('canplay', function () { vid.classList.add('is-on'); vid.play().catch(function () {}); }, { once: true });
    vid.load();
  }

  /* ---------- Spotlight dos cards e inclinação leve ---------- */
  if (fino && !reduz) {
    document.addEventListener('pointermove', function (e) {
      var c = e.target.closest && e.target.closest('.spot');
      if (!c) return;
      var r = c.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      c.style.setProperty('--x', x + 'px');
      c.style.setProperty('--y', y + 'px');
      if (c.classList.contains('card')) {
        c.style.transform = 'perspective(900px) rotateX(' + ((y / r.height - .5) * -5) + 'deg) rotateY(' + ((x / r.width - .5) * 6) + 'deg) translateY(-4px)';
      }
    });
    document.addEventListener('pointerout', function (e) {
      var c = e.target.closest && e.target.closest('.card');
      if (c && !c.contains(e.relatedTarget)) c.style.transform = '';
    });
  }

  /* ---------- Menu ---------- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  function alternar(abrir) {
    menu.classList.toggle('is-open', abrir);
    burger.setAttribute('aria-expanded', String(abrir));
    burger.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
  }
  burger.addEventListener('click', function () { alternar(burger.getAttribute('aria-expanded') !== 'true'); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) alternar(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') alternar(false); });

  var links = Array.prototype.slice.call(menu.querySelectorAll('a[href^="#"]'));
  if ('IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) links.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (x) { so.observe(x); });
  }

  document.getElementById('ano').textContent = new Date().getFullYear();
})();
