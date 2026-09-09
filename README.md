# Ukrainian Grammar Workout

A drilling tool for Ukrainian grammar. Each module states one rule, shows one worked example, then runs twenty multiple choice questions on it. Every answer gets an explanation, right or wrong, and a wrong answer offers a second try before the answer is shown.

No build step, no dependencies, no server. It is plain HTML, CSS and JavaScript.

## Running it

Open `index.html` in a browser. That is all.

To put it online, push the repo to GitHub, then go to Settings, Pages, and set the source to the `main` branch, root folder. It will be served at `https://<your-username>.github.io/<repo-name>/`.

## Structure

```
index.html                        the shell, plus one script tag per module
assets/styles.css
assets/app.js                     drill runner, scoring, saved progress
lessons/_template.js              copy this to start a new module
lessons/lesson-64-superlative-adjectives.js
```

## Adding a module

1. Copy `lessons/_template.js` to `lessons/lesson-NN-short-name.js`.
2. Fill in the rule, the example and the questions.
3. Add one line to `index.html`, next to the existing module script tag.

Nothing else changes. Modules are sorted by their `number` field on the home screen.

## The data format

```js
registerLesson({
  id: "lesson-64",
  number: 64,
  title: "Superlative adjectives",
  titleUk: "Найвищий ступінь порівняння прикметників",
  source: "Lesson 64 deck",
  rule: ["paragraph", "paragraph"],
  example: { uk: "", en: "", note: "" },
  questions: [{
    prompt: "Sentence with ___ in it.",
    base: "дорога",
    tag: "alternation",
    options: [
      { text: "найдорожча", correct: true, why: "why it works" },
      { text: "найдорога",  why: "which mistake this is" }
    ]
  }]
});
```

Exactly one option per question carries `correct: true`. Every option carries a `why`, because the explanation shown depends on what was chosen, not on whether the answer was right.

## Tags

Every question carries one tag naming the sub-concept it tests. Tags are what make a missed question useful later: the results screen breaks your score down by tag, and progress is stored by tag across all modules.

| Tag | Tests |
| --- | --- |
| `alternation` | consonant changes at the suffix boundary |
| `agreement` | gender, number and case matching the noun |
| `suffix` | choosing the right suffix |
| `irregular` | suppletive or otherwise unpredictable forms |
| `comparative-vs-superlative` | choosing the right degree for the sentence |
| `russianism` | calques imported from Russian |
| `rule` | stating the rule itself |

Add a tag only when a module genuinely needs one that does not exist. Forcing a question into a tag that nearly fits is worse than adding an eighth tag.

## Writing good distractors

Aim for four different failure modes in a question rather than four spellings of the same mistake. For the superlative module those were: no comparative step, wrong suffix, wrong or missing consonant alternation, wrong gender or number, and Russian calque. When a question is missed, the explanation should name which of those the learner fell into.

## Progress

Scores live in the browser's `localStorage` under the key `ugw:v1`. They stay on the device, so a phone and a laptop keep separate records, and clearing site data resets them.

Three drill modes: the full module, a review of only the questions missed on earlier runs, and a mixed drill pulling ten questions at random across every module. Only a full run updates the best score.

## Source material

Module content is derived from Ukrainian language lesson decks. Example sentences are taken from the lessons themselves rather than invented, so the drills stay tied to the vocabulary being learned.
