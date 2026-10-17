(function () {
  "use strict";

  // ---------- хранилище ----------
  function load(key, fallback) {
    try {
      var v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* без сохранения */ }
  }

  var prefs = load("tek.prefs", { dir: "en-ru", extras: true });
  var known = load("tek.known", {}); // id карточки -> true

  // ---------- данные ----------
  SETS.forEach(function (set) {
    set.cards.forEach(function (c, i) { c.id = set.id + ":" + i; });
  });
  var ALL = {
    id: "all",
    title: "Все слова",
    subtitle: "три набора вместе",
    cards: SETS.reduce(function (acc, s) { return acc.concat(s.cards); }, [])
  };
  function findSet(id) {
    if (id === "all") return ALL;
    for (var i = 0; i < SETS.length; i++) if (SETS[i].id === id) return SETS[i];
    return null;
  }
  function cardsOf(set) {
    return set.cards.filter(function (c) { return prefs.extras || !c.extra; });
  }

  // Что показывать спереди/сзади в зависимости от направления.
  function front(c) { return prefs.dir === "en-ru" ? c.term : c.ru; }
  function back(c) { return prefs.dir === "en-ru" ? c.ru : c.term; }

  // ---------- утилиты ----------
  var app = document.getElementById("app");
  var dirBtn = document.getElementById("dirBtn");
  var cleanup = null; // снимает обработчики текущего экрана

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function norm(s) {
    return s.toLowerCase().replace(/ё/g, "е").replace(/[’']/g, "'")
      .replace(/[^a-zа-я0-9' -]/g, " ").replace(/\s+/g, " ").trim();
  }
  // Варианты правильного ответа: целиком и по частям ("1) мера; 2) измерять" -> "мера", "измерять").
  function variants(answer) {
    var out = [norm(answer)];
    var noParens = answer.replace(/\([^)]*\)/g, " ");
    out.push(norm(noParens));
    noParens.split(/[,;]|\d\)/).forEach(function (p) {
      var n = norm(p);
      if (n) out.push(n);
      // "to spin" == "spin"
      if (n.indexOf("to ") === 0) out.push(n.slice(3));
    });
    return out.filter(Boolean);
  }
  function isCorrect(input, answer) {
    var n = norm(input);
    if (!n) return false;
    if (n.indexOf("to ") === 0 && prefs.dir === "ru-en") n = n.slice(3);
    return variants(answer).indexOf(n) !== -1;
  }
  function speak(text) {
    try {
      if (!window.speechSynthesis) return;
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text.replace(/\(.*?\)/g, ""));
      u.lang = "en-GB";
      u.rate = 0.9;
      speechSynthesis.speak(u);
    } catch (e) { /* озвучка недоступна */ }
  }
  function onKey(handler) {
    function h(e) {
      if (e.target.tagName === "INPUT") return;
      handler(e);
    }
    document.addEventListener("keydown", h);
    return function () { document.removeEventListener("keydown", h); };
  }
  function knownCount(cards) {
    return cards.filter(function (c) { return known[c.id]; }).length;
  }
  function updateDirBtn() {
    dirBtn.textContent = prefs.dir === "en-ru" ? "EN → RU" : "RU → EN";
  }

  dirBtn.addEventListener("click", function () {
    prefs.dir = prefs.dir === "en-ru" ? "ru-en" : "en-ru";
    save("tek.prefs", prefs);
    updateDirBtn();
    route();
  });

  // ---------- главная ----------
  function renderHome() {
    var all = [ALL].concat(SETS);
    app.innerHTML =
      "<h1>Технический английский</h1>" +
      '<p class="muted">Карточки «слово — перевод» для подготовки к экзамену. Выберите набор.</p>' +
      '<div class="sets">' +
      all.map(function (s) {
        var cards = cardsOf(s);
        var k = knownCount(cards);
        var pct = cards.length ? Math.round(k / cards.length * 100) : 0;
        return '<a class="set-card" href="#/set/' + s.id + '/cards">' +
          "<h2>" + esc(s.title) + "</h2>" +
          '<div class="muted">' + cards.length + " слов · " + esc(s.subtitle) + "</div>" +
          '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
          '<div class="muted" style="font-size:.85rem;margin-top:6px">Выучено: ' + k + " из " + cards.length + "</div>" +
          "</a>";
      }).join("") +
      "</div>";
  }

  // ---------- шапка набора ----------
  var MODES = [
    ["cards", "Карточки"],
    ["learn", "Тест"],
    ["write", "Письмо"],
    ["match", "Подбор"],
    ["list", "Список"]
  ];
  function header(set, mode) {
    return '<a href="#/">← Все наборы</a>' +
      "<h1>" + esc(set.title) + "</h1>" +
      '<div class="modes">' +
      MODES.map(function (m) {
        return '<a class="mode' + (m[0] === mode ? " on" : "") + '" href="#/set/' + set.id + "/" + m[0] + '">' + m[1] + "</a>";
      }).join("") +
      "</div>" +
      '<div class="opts">' +
      '<button class="chip' + (prefs.extras ? " on" : "") + '" data-opt="extras" type="button">Доп. слова из глоссария</button>' +
      "</div>";
  }
  function bindOpts() {
    var b = app.querySelector('[data-opt="extras"]');
    if (b) b.addEventListener("click", function () {
      prefs.extras = !prefs.extras;
      save("tek.prefs", prefs);
      route();
    });
  }

  // ---------- карточки ----------
  function renderCards(set) {
    var deck = cardsOf(set);
    var onlyUnknown = false;
    var order = deck.slice();
    var i = 0;
    var flipped = false;

    function rebuild(shuffled) {
      var base = onlyUnknown ? deck.filter(function (c) { return !known[c.id]; }) : deck;
      order = shuffled ? shuffle(base) : base.slice();
      i = 0; flipped = false;
      draw();
    }

    function draw() {
      var k = knownCount(deck);
      var html = header(set, "cards") +
        '<div class="opts">' +
        '<button class="chip" data-a="shuffle" type="button">Перемешать</button>' +
        '<button class="chip' + (onlyUnknown ? " on" : "") + '" data-a="unknown" type="button">Только невыученные</button>' +
        '<button class="chip" data-a="reset" type="button">Сбросить прогресс</button>' +
        "</div>";

      if (!order.length) {
        html += '<div class="panel done"><div class="score">🎉</div><p>Все слова в этом наборе отмечены как выученные.</p>' +
          '<button class="btn" data-a="unknown" type="button">Показать все карточки</button></div>';
        app.innerHTML = html;
        bind();
        return;
      }

      var c = order[i];
      html +=
        '<div class="stats"><span class="l">Учу: ' + (deck.length - k) + '</span><span class="k">Знаю: ' + k + "</span></div>" +
        '<div class="scene"><button class="flash' + (flipped ? " flipped" : "") + '" data-a="flip" type="button" aria-label="Перевернуть карточку">' +
        '<div class="face front"><div class="big">' + esc(front(c)) + "</div></div>" +
        '<div class="face back"><div class="big">' + esc(back(c)) + "</div></div>" +
        "</button></div>" +
        '<div class="controls">' +
        '<button class="round" data-a="prev" type="button" aria-label="Назад">←</button>' +
        '<span class="counter">' + (i + 1) + " / " + order.length + "</span>" +
        '<button class="round" data-a="next" type="button" aria-label="Вперёд">→</button>' +
        '<button class="round" data-a="speak" type="button" aria-label="Озвучить">🔊</button>' +
        "</div>" +
        '<div class="controls">' +
        '<button class="btn bad" data-a="learning" type="button">✗ Ещё учу</button>' +
        '<button class="btn good" data-a="know" type="button">✓ Знаю</button>' +
        "</div>";
      app.innerHTML = html;
      bind();
    }

    function go(d) {
      i = (i + d + order.length) % order.length;
      flipped = false;
      draw();
    }
    function mark(isKnown) {
      var c = order[i];
      if (isKnown) known[c.id] = true; else delete known[c.id];
      save("tek.known", known);
      if (onlyUnknown && isKnown) {
        order.splice(i, 1);
        if (i >= order.length) i = 0;
        flipped = false;
        draw();
      } else {
        go(1);
      }
    }
    function act(a) {
      if (a === "flip") { flipped = !flipped; app.querySelector(".flash").classList.toggle("flipped", flipped); }
      else if (a === "prev") go(-1);
      else if (a === "next") go(1);
      else if (a === "speak") speak(order[i].term);
      else if (a === "know") mark(true);
      else if (a === "learning") mark(false);
      else if (a === "shuffle") rebuild(true);
      else if (a === "unknown") { onlyUnknown = !onlyUnknown; rebuild(false); }
      else if (a === "reset") {
        if (confirm("Сбросить отметки «Знаю» для этого набора?")) {
          deck.forEach(function (c) { delete known[c.id]; });
          save("tek.known", known);
          rebuild(false);
        }
      }
    }
    function bind() {
      bindOpts();
      app.querySelectorAll("[data-a]").forEach(function (el) {
        el.addEventListener("click", function () { act(el.getAttribute("data-a")); });
      });
    }

    draw();
    return onKey(function (e) {
      if (!order.length) return;
      if (e.key === " " || e.key === "ArrowUp" || e.key === "ArrowDown") { e.preventDefault(); act("flip"); }
      else if (e.key === "ArrowLeft") act("prev");
      else if (e.key === "ArrowRight") act("next");
      else if (e.key === "1") act("learning");
      else if (e.key === "2") act("know");
    });
  }

  // ---------- тест (выбор ответа) ----------
  function renderLearn(set) {
    var deck = cardsOf(set);
    var queue, idx, score, mistakes, answered;

    function start() {
      queue = shuffle(deck); idx = 0; score = 0; mistakes = []; answered = false;
      draw();
    }
    function optionsFor(c) {
      var pool = shuffle(deck.filter(function (x) { return x !== c && back(x) !== back(c); })).slice(0, 3);
      return shuffle(pool.concat([c]));
    }
    function draw() {
      if (idx >= queue.length) return finish();
      var c = queue[idx];
      var opts = optionsFor(c);
      app.innerHTML = header(set, "learn") +
        '<div class="progress"><i style="width:' + (idx / queue.length * 100) + '%"></i></div>' +
        '<div class="panel"><div class="muted">Вопрос ' + (idx + 1) + " из " + queue.length + " · выберите перевод</div>" +
        '<div class="q">' + esc(front(c)) + "</div>" +
        '<div class="choices">' +
        opts.map(function (o, n) {
          return '<button class="choice" data-n="' + n + '" type="button"><b>' + (n + 1) + ".</b> " + esc(back(o)) + "</button>";
        }).join("") +
        '</div><div class="feedback"></div><div class="row" id="nextRow"></div></div>';
      bindOpts();
      answered = false;
      var buttons = app.querySelectorAll(".choice");
      buttons.forEach(function (b) {
        b.addEventListener("click", function () { choose(+b.getAttribute("data-n")); });
      });

      function choose(n) {
        if (answered) return;
        answered = true;
        var ok = opts[n] === c;
        buttons.forEach(function (b, m) {
          b.disabled = true;
          if (opts[m] === c) b.classList.add("right");
          else if (m === n) b.classList.add("wrong");
        });
        var fb = app.querySelector(".feedback");
        if (ok) { score++; fb.className = "feedback right"; fb.textContent = "Верно!"; }
        else { mistakes.push(c); fb.className = "feedback wrong"; fb.textContent = "Правильно: " + back(c); }
        app.querySelector("#nextRow").innerHTML = '<button class="btn" type="button">Дальше →</button>';
        app.querySelector("#nextRow button").addEventListener("click", next);
        if (ok) setTimeout(function () { if (current === c) next(); }, 700);
      }
      current = c;
      choose_ = choose;
    }
    var current = null, choose_ = null;
    function next() { current = null; idx++; draw(); }
    function finish() {
      app.innerHTML = header(set, "learn") +
        '<div class="panel done"><div class="score">' + score + " / " + queue.length + "</div>" +
        "<p>" + (mistakes.length ? "Ошибки:" : "Без ошибок!") + "</p>" +
        (mistakes.length ? '<div class="list" style="text-align:left">' + mistakes.map(function (c) {
          return '<div class="item"><span class="t">' + esc(c.term) + "</span><span>" + esc(c.ru) + "</span></div>";
        }).join("") + "</div>" : "") +
        '<div class="row" style="justify-content:center"><button class="btn" type="button">Ещё раз</button></div></div>';
      bindOpts();
      app.querySelector(".done .btn").addEventListener("click", start);
    }

    start();
    return onKey(function (e) {
      if (current && !answered && /^[1-4]$/.test(e.key)) choose_(+e.key - 1);
      else if (answered && e.key === "Enter") next();
    });
  }

  // ---------- письмо (ввод ответа) ----------
  function renderWrite(set) {
    var deck = cardsOf(set);
    var queue, idx, score, mistakes;

    function start() {
      queue = shuffle(deck); idx = 0; score = 0; mistakes = [];
      draw();
    }
    function draw() {
      if (idx >= queue.length) return finish();
      var c = queue[idx];
      app.innerHTML = header(set, "write") +
        '<div class="progress"><i style="width:' + (idx / queue.length * 100) + '%"></i></div>' +
        '<div class="panel"><div class="muted">' + (idx + 1) + " из " + queue.length + " · напишите перевод" +
        (prefs.dir === "en-ru" ? " (достаточно одного из значений)" : "") + "</div>" +
        '<div class="q">' + esc(front(c)) + "</div>" +
        '<form id="wf"><input class="answer" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Ваш ответ" lang="' + (prefs.dir === "en-ru" ? "ru" : "en") + '">' +
        '<div class="row"><button class="btn" type="submit">Проверить</button>' +
        '<button class="btn ghost" type="button" id="skip">Не знаю</button></div></form>' +
        '<div class="feedback"></div></div>';
      bindOpts();
      var form = app.querySelector("#wf");
      var input = form.querySelector("input");
      var fb = app.querySelector(".feedback");
      var checked = false;
      input.focus();

      function reveal(ok, overridable) {
        checked = true;
        input.disabled = true;
        fb.className = "feedback " + (ok ? "right" : "wrong");
        fb.innerHTML = ok ? "Верно! " + (norm(input.value) !== norm(back(c)) ? '<span class="muted">Полностью: ' + esc(back(c)) + "</span>" : "")
          : "Правильный ответ: " + esc(back(c));
        var row = form.querySelector(".row");
        row.innerHTML = '<button class="btn" type="submit">Дальше →</button>' +
          (overridable ? '<button class="btn ghost" type="button" id="override">Я ответил правильно</button>' : "");
        var ov = row.querySelector("#override");
        if (ov) ov.addEventListener("click", function () { mistakes.pop(); score++; next(); });
        row.querySelector(".btn").focus();
      }
      function next() { idx++; draw(); }

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (checked) return next();
        if (!input.value.trim()) return;
        var ok = isCorrect(input.value, back(c));
        if (ok) score++; else mistakes.push(c);
        reveal(ok, !ok);
      });
      form.querySelector("#skip").addEventListener("click", function () {
        mistakes.push(c);
        reveal(false, false);
      });
    }
    function finish() {
      app.innerHTML = header(set, "write") +
        '<div class="panel done"><div class="score">' + score + " / " + queue.length + "</div>" +
        "<p>" + (mistakes.length ? "Повторите эти слова:" : "Без ошибок!") + "</p>" +
        (mistakes.length ? '<div class="list" style="text-align:left">' + mistakes.map(function (c) {
          return '<div class="item"><span class="t">' + esc(c.term) + "</span><span>" + esc(c.ru) + "</span></div>";
        }).join("") + "</div>" : "") +
        '<div class="row" style="justify-content:center"><button class="btn" type="button">Ещё раз</button></div></div>';
      bindOpts();
      app.querySelector(".done .btn").addEventListener("click", start);
    }
    start();
    return null;
  }

  // ---------- подбор ----------
  function renderMatch(set) {
    var timer = null;

    function start() {
      clearInterval(timer);
      var picked = shuffle(cardsOf(set)).slice(0, 6);
      var tiles = shuffle(picked.reduce(function (acc, c) {
        return acc.concat([{ c: c, text: c.term }, { c: c, text: c.ru }]);
      }, []));
      var left = picked.length;
      var t0 = Date.now();
      var penalty = 0;
      var sel = null;

      app.innerHTML = header(set, "match") +
        '<div class="stats"><span class="muted">Соедините слово и перевод</span><span class="timer">0.0 с</span></div>' +
        '<div class="match">' + tiles.map(function (t, n) {
          return '<button class="tile" data-n="' + n + '" type="button">' + esc(t.text) + "</button>";
        }).join("") + "</div>";
      bindOpts();
      var timerEl = app.querySelector(".timer");
      timer = setInterval(function () {
        timerEl.textContent = ((Date.now() - t0) / 1000 + penalty).toFixed(1) + " с";
      }, 100);

      var els = app.querySelectorAll(".tile");
      els.forEach(function (el) {
        el.addEventListener("click", function () {
          var n = +el.getAttribute("data-n");
          if (sel === null) { sel = n; el.classList.add("sel"); return; }
          if (sel === n) { el.classList.remove("sel"); sel = null; return; }
          var a = els[sel], b = el;
          if (tiles[sel].c === tiles[n].c) {
            a.classList.add("gone"); b.classList.add("gone");
            a.classList.remove("sel");
            left--;
            if (!left) finish(((Date.now() - t0) / 1000 + penalty).toFixed(1));
          } else {
            penalty += 1;
            a.classList.remove("sel");
            a.classList.add("wrong"); b.classList.add("wrong");
            setTimeout(function () { a.classList.remove("wrong"); b.classList.remove("wrong"); }, 400);
          }
          sel = null;
        });
      });
    }
    function finish(time) {
      clearInterval(timer);
      var key = "tek.best." + set.id;
      var best = load(key, null);
      var isBest = best === null || +time < best;
      if (isBest) save(key, +time);
      setTimeout(function () {
        app.innerHTML = header(set, "match") +
          '<div class="panel done"><div class="score">' + time + " с</div>" +
          "<p>" + (isBest ? "Новый рекорд!" : "Рекорд: " + best + " с") + '</p><p class="muted">За каждую ошибку +1 секунда.</p>' +
          '<div class="row" style="justify-content:center"><button class="btn" type="button">Ещё раз</button></div></div>';
        bindOpts();
        app.querySelector(".done .btn").addEventListener("click", start);
      }, 350);
    }
    start();
    return function () { clearInterval(timer); };
  }

  // ---------- список ----------
  function renderList(set) {
    var deck = cardsOf(set);
    app.innerHTML = header(set, "list") +
      '<div class="list">' + deck.map(function (c) {
        return '<div class="item"><span class="t"><span class="dot' + (known[c.id] ? " k" : "") + '"></span>' + esc(c.term) + "</span>" +
          "<span>" + esc(c.ru) + "</span></div>";
      }).join("") + "</div>";
    bindOpts();
    return null;
  }

  // ---------- маршрутизация ----------
  var RENDER = { cards: renderCards, learn: renderLearn, write: renderWrite, match: renderMatch, list: renderList };

  function route() {
    if (cleanup) { cleanup(); cleanup = null; }
    var m = location.hash.match(/^#\/set\/([\w-]+)\/(\w+)/);
    var set = m && findSet(m[1]);
    if (set && RENDER[m[2]]) {
      document.title = set.title + " — Technical English";
      cleanup = RENDER[m[2]](set);
    } else {
      document.title = "Technical English — карточки";
      renderHome();
    }
    window.scrollTo(0, 0);
  }

  updateDirBtn();
  window.addEventListener("hashchange", route);
  route();
})();
