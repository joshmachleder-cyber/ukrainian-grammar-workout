registerLesson({
  id: "lesson-00",
  number: 0,
  title: "Short English name of the rule",
  titleUk: "Назва правила українською",
  source: "Lesson 00 deck",

  rule: [
    "One paragraph per idea. Basic HTML is allowed, so <b>bold</b> works for the forms being taught.",
    "Keep it to five or six paragraphs. Anything longer is a lecture, not a rule card."
  ],

  example: {
    uk: "One sentence in Ukrainian, taken from the lesson itself.",
    en: "Plain English rendering.",
    note: "Why this sentence shows the rule working."
  },

  questions: [
    {
      prompt: "Sentence with ___ where the answer goes.",
      base: "base form shown in brackets, or empty string",
      tag: "alternation",
      options: [
        { text: "wrong form", why: "Which specific mistake this is." },
        { text: "right form", correct: true, why: "Why this one works." },
        { text: "wrong form", why: "A different mistake, not a repeat of the first." },
        { text: "wrong form", why: "A fourth failure mode." }
      ]
    }
  ]
});

/*
  Tags in use so far. Add a new one only when a lesson genuinely needs it.

    alternation                consonant changes at the suffix boundary
    agreement                  gender, number, case matching the noun
    suffix                     choosing the right suffix
    irregular                  suppletive or otherwise unpredictable forms
    comparative-vs-superlative choosing the right degree for the sentence
    russianism                 calques that learners import from Russian
    rule                       stating the rule itself

  Distractor design. Aim for four different failure modes in one question
  rather than four spellings of the same mistake. That is what makes a
  missed question diagnostic.
*/
