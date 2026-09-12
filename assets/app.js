const LESSONS = [];
function registerLesson(lesson) { LESSONS.push(lesson); }

const STORE = "ugw:v1";

function load() {
  try { return JSON.parse(localStorage.getItem(STORE)) || { lessons: {}, tags: {} }; }
  catch (e) { return { lessons: {}, tags: {} }; }
}
function save(data) {
  try { localStorage.setItem(STORE, JSON.stringify(data)); } catch (e) {}
}
function lessonRecord(id) {
  const d = load();
  return d.lessons[id] || { best: null, runs: 0, missed: [] };
}

function qid(lesson, i) { return lesson.id + "#" + i; }

function recordRun(items, results, bestFor) {
  const d = load();
  items.forEach((it, n) => {
    const rec = d.lessons[it.lesson.id] || { best: null, runs: 0, missed: [] };
    const missed = new Set(rec.missed);
    if (results[n].firstTry) missed.delete(it.key); else missed.add(it.key);
    rec.missed = Array.from(missed);
    d.lessons[it.lesson.id] = rec;
    const t = d.tags[it.q.tag] || { seen: 0, right: 0 };
    t.seen += 1;
    if (results[n].firstTry) t.right += 1;
    d.tags[it.q.tag] = t;
  });
  if (bestFor) {
    const rec = d.lessons[bestFor.id] || { best: null, runs: 0, missed: [] };
    const firstTry = results.filter(r => r.firstTry).length;
    const pct = Math.round((firstTry / items.length) * 100);
    rec.runs += 1;
    if (rec.best === null || pct > rec.best) rec.best = pct;
    d.lessons[bestFor.id] = rec;
  }
  save(d);
}

const app = document.getElementById("app");
const esc = s => String(s).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

function home() {
  const bits = [
    '<div class="masthead"><h1>Ukrainian Grammar Workout</h1>',
    '<p>One rule, one example, twenty drills.</p></div>'
  ];
  if (!LESSONS.length) {
    bits.push('<p class="empty">No modules loaded yet. Add a lesson file in <code>lessons/</code> and a matching script tag in <code>index.html</code>.</p>');
  }
  LESSONS.slice().sort((a, b) => a.number - b.number).forEach(l => {
    const rec = lessonRecord(l.id);
    const stat = rec.best === null
      ? "Not started"
      : "Best " + rec.best + "% first try, " + rec.runs + (rec.runs === 1 ? " run" : " runs")
        + (rec.missed.length ? ", " + rec.missed.length + " to review" : "");
    bits.push(
      '<button class="module" data-lesson="' + l.id + '">' +
      '<div class="n">Module ' + l.number + '</div>' +
      '<div class="t">' + esc(l.title) + '</div>' +
      '<div class="uk">' + esc(l.titleUk) + '</div>' +
      '<div class="bar"><span style="width:' + (rec.best || 0) + '%"></span></div>' +
      '<div class="stat">' + stat + '</div></button>'
    );
  });
  app.innerHTML = bits.join("");
  app.querySelectorAll("[data-lesson]").forEach(b => {
    b.onclick = () => lessonView(LESSONS.find(l => l.id === b.dataset.lesson));
  });
  window.scrollTo(0, 0);
}

function lessonView(lesson) {
  const rec = lessonRecord(lesson.id);
  app.innerHTML =
    '<button class="crumb" id="back">All modules</button>' +
    '<div class="rulecard">' +
    '<h2>' + esc(lesson.title) + '</h2>' +
    '<p class="uk">' + esc(lesson.titleUk) + '</p>' +
    lesson.rule.map(r => '<p class="r">' + r + '</p>').join("") +
    '<div class="example">' +
    '<p class="uk">' + esc(lesson.example.uk) + '</p>' +
    '<p class="en">' + esc(lesson.example.en) + '</p>' +
    '<p class="note">' + esc(lesson.example.note) + '</p>' +
    '</div>' +
    '<div class="modes">' +
    '<button class="go" id="full">Start the drill (' + lesson.questions.length + ' questions)</button>' +
    '<button class="go alt" id="review"' + (rec.missed.length ? "" : " disabled") + '>' +
    'Review what you missed (' + rec.missed.length + ')</button>' +
    '<button class="go alt" id="mixed">Mixed drill across all modules</button>' +
    '</div></div>';
  document.getElementById("back").onclick = home;
  document.getElementById("full").onclick = () => runDrill(lesson, buildItems(lesson));
  document.getElementById("review").onclick = () => runDrill(lesson, buildItems(lesson).filter(it => rec.missed.indexOf(it.key) > -1), "Review");
  document.getElementById("mixed").onclick = () => {
    const pool = [];
    LESSONS.forEach(l => buildItems(l).forEach(it => pool.push(it)));
    shuffle(pool);
    runDrill(lesson, pool.slice(0, Math.min(10, pool.length)), "Mixed");
  };
  window.scrollTo(0, 0);
}

function buildItems(lesson) {
  return lesson.questions.map((q, i) => ({
    key: qid(lesson, i),
    q: withShuffledOptions(q),
    lesson: lesson
  }));
}

// Returns a copy of the question whose options are in random order. The copy
// matters: the array in the lesson file is never touched, so a module can be
// written with the correct answer anywhere and it makes no difference.
function withShuffledOptions(q) {
  const copy = {};
  for (const k in q) copy[k] = q[k];
  copy.options = shuffle(q.options.slice());
  return copy;
}

// Re-randomises an existing set of items, used by "Run it again" so a repeat
// run does not present the same option order as the run before it.
function reshuffleItems(items) {
  items.forEach(it => { it.q = withShuffledOptions(it.q); });
  return items;
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function runDrill(lesson, items, label) {
  if (!items.length) return lessonView(lesson);
  const results = items.map(() => ({ firstTry: true, done: false }));
  let n = 0;

  function draw() {
    const it = items[n];
    const q = it.q;
    app.innerHTML =
      '<button class="crumb" id="back">Leave the drill</button>' +
      '<p class="progress">' + (label ? label + ", " : "") + 'question ' + (n + 1) + ' of ' + items.length + '</p>' +
      '<div class="q"><p class="prompt">' + esc(q.prompt) + '</p>' +
      (q.base ? '<p class="base">' + esc(q.base) + '</p>' : "") +
      '<div id="opts">' +
      q.options.map((o, j) =>
        '<button class="opt" data-j="' + j + '"><span class="bub"></span><span>' + esc(o.text) + '</span></button>'
      ).join("") +
      '</div><div id="feedback"></div></div>';
    document.getElementById("back").onclick = () => lessonView(lesson);
    document.querySelectorAll(".opt").forEach(b => { b.onclick = () => answer(parseInt(b.dataset.j, 10)); });
    window.scrollTo(0, 0);
  }

  // A retry re-randomises the options, so a second attempt cannot be won by
  // remembering which position you already ruled out.
  function retry() {
    items[n].q = withShuffledOptions(items[n].q);
    draw();
  }

  function answer(j) {
    const it = items[n];
    const q = it.q;
    const chosen = q.options[j];
    const isRight = !!chosen.correct;
    const correctIndex = q.options.findIndex(o => o.correct);
    const opts = document.querySelectorAll(".opt");
    opts.forEach((b, k) => {
      b.disabled = true;
      if (k === j) b.classList.add(isRight ? "right" : "wrong");
      else b.classList.add("dim");
    });
    if (!isRight) results[n].firstTry = false;

    let html = '<p class="verdict"><b class="' + (isRight ? "right" : "wrong") + '">' +
      (isRight ? "Correct." : "Not that one.") + '</b> ' + esc(chosen.why) + '</p>';

    if (isRight) {
      html += '<div class="acts"><button class="go" id="next">' +
        (n === items.length - 1 ? "See your results" : "Next question") + '</button></div>';
    } else {
      html += '<div class="acts">' +
        '<button class="go" id="retry">Try again</button>' +
        '<button class="go alt" id="reveal">Show the answer</button></div>';
    }
    document.getElementById("feedback").innerHTML = html;
    if (isRight) document.getElementById("next").onclick = advance;
    else {
      document.getElementById("retry").onclick = retry;
      document.getElementById("reveal").onclick = () => reveal(correctIndex);
    }
  }

  function reveal(correctIndex) {
    const q = items[n].q;
    const opts = document.querySelectorAll(".opt");
    opts[correctIndex].classList.remove("dim");
    opts[correctIndex].classList.add("right");
    document.getElementById("feedback").innerHTML =
      '<p class="verdict"><b class="right">' + esc(q.options[correctIndex].text) + '</b> is the form you want. ' +
      esc(q.options[correctIndex].why) + '</p>' +
      '<div class="acts"><button class="go" id="next">' +
      (n === items.length - 1 ? "See your results" : "Next question") + '</button></div>';
    document.getElementById("next").onclick = advance;
  }

  function advance() {
    results[n].done = true;
    if (n === items.length - 1) return finish();
    n += 1;
    draw();
  }

  function finish() {
    recordRun(items, results, label ? null : lesson);
    const firstTry = results.filter(r => r.firstTry).length;
    const byTag = {};
    items.forEach((it, i) => {
      const t = byTag[it.q.tag] || { seen: 0, right: 0 };
      t.seen += 1; if (results[i].firstTry) t.right += 1;
      byTag[it.q.tag] = t;
    });
    const rows = Object.keys(byTag).sort().map(t =>
      '<tr><td>' + esc(t.replace(/-/g, " ")) + '</td><td>' + byTag[t].right + " of " + byTag[t].seen + '</td></tr>'
    ).join("");
    app.innerHTML =
      '<div class="tally"><h2>' + (label || lesson.title) + '</h2>' +
      '<p class="score">' + firstTry + " / " + items.length + '</p>' +
      '<p class="empty">Right on the first try. Retries do not count against you here, but they are not counted as correct either.</p>' +
      '<table>' + rows + '</table>' +
      '<div class="modes">' +
      '<button class="go" id="again">Run it again</button>' +
      '<button class="go alt" id="back2">Back to the module</button></div></div>';
    document.getElementById("again").onclick = () => runDrill(lesson, reshuffleItems(items), label);
    document.getElementById("back2").onclick = () => lessonView(lesson);
    window.scrollTo(0, 0);
  }

  draw();
}

function render() { home(); }
