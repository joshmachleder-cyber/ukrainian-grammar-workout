registerLesson({
  id: "lesson-63",
  number: 63,
  title: "Comparative adjectives",
  titleUk: "Вищий ступінь порівняння прикметників",
  source: "Lesson 63 deck",
  rule: [
    "The comparative is built by adding <b>-ш-</b> or <b>-іш-</b> to the stem, then the normal adjective ending: дешевий → дешев<b>ш</b>ий, зручний → зручн<b>іш</b>ий.",
    "Where <b>-ш-</b> meets certain consonants they merge. г, ж, з + ш → <b>жч</b>: дорогий → доро<b>жч</b>ий, близький → бли<b>жч</b>ий. с + ш → <b>щ</b>: високий → ви<b>щ</b>ий. The suffixes -к-, -ок-, -ьк- drop out first: близь<b>к</b>ий → ближчий, глибо<b>к</b>ий → глибший.",
    "Four adjectives change stem completely: добрий, хороший → <b>кращий</b>; поганий → <b>гірший</b>; великий → <b>більший</b>; малий → <b>менший</b>.",
    "There is also an analytic form, <b>більш</b> or <b>менш</b> plus the plain adjective: більш зручний, менш вигідний. Never combine the two. <b>більш зручніший</b> marks the comparative twice and is wrong.",
    "Three ways to attach what you are comparing to: <b>ніж</b> plus the nominative (кращий, ніж готель «Хвиля»), <b>за</b> plus the accusative (кращий за готель «Хвиля»), or <b>від</b> plus the genitive (кращий від готелю «Хвиля»). The lesson uses ніж throughout.",
    "The comparative agrees with its noun like any adjective: дорожч<b>ий</b> зад, дорожч<b>а</b> усмішка, дорожч<b>е</b> волосся, дорожч<b>і</b> ноги."
  ],
  example: {
    uk: "Готель «Наталі» кращий, ніж готель «Світанок», але гірший, ніж готель «Хвиля».",
    en: "The Natali hotel is better than the Svitanok hotel, but worse than the Khvylia hotel.",
    note: "Both adjectives are suppletive: добрий gives кращий, поганий gives гірший. Neither builds its comparative from its own stem, and ніж is followed by the nominative готель."
  },
  questions: [
    {
      prompt: "Готель «Наталі» ___, ніж готель «Світанок».", base: "добрий", tag: "irregular",
      options: [
        { text: "кращий", correct: true, why: "добрий is suppletive in this sense. The comparative is кращий, exactly as in the model sentence." },
        { text: "добріший", why: "This form exists, but it means kinder. It describes character, not quality." },
        { text: "найкращий", why: "Superlative. ніж compares two hotels, so the comparative is what you need." },
        { text: "краще", why: "Adverb. It modifies a verb, not the noun готель." }
      ]
    },
    {
      prompt: "Готель «Наталі» ___, ніж готель «Хвиля».", base: "поганий", tag: "irregular",
      options: [
        { text: "поганіший", why: "поганий does not build its comparative from its own stem." },
        { text: "гірший", correct: true, why: "поганий is suppletive: гірший. The model sentence on your slide uses this form." },
        { text: "найгірший", why: "Superlative, blocked by ніж." },
        { text: "гірше", why: "Adverb. The sentence needs an adjective agreeing with готель." }
      ]
    },
    {
      prompt: "Готель «Хвиля» ___ до моря, ніж готель «Наталі».", base: "близький", tag: "alternation",
      options: [
        { text: "близькіший", why: "The -ьк- has to drop before the ending, and the з must change." },
        { text: "ближший", why: "The з and ш merge into жч, not ш alone." },
        { text: "ближчий", correct: true, why: "близький → ближчий. The -ьк- drops and з plus ш gives жч. Хвиля is 100 m from the sea, Наталі 250 m." },
        { text: "найближчий", why: "Superlative, blocked by ніж." }
      ]
    },
    {
      prompt: "Готель «Світанок» ___, ніж готель «Хвиля».", base: "дешевий", tag: "suffix",
      options: [
        { text: "дешевший", correct: true, why: "Stem plus -ш-. Світанок is 500 грн a night against 1500 грн." },
        { text: "дешевіший", why: "Wrong suffix. This stem takes bare -ш-." },
        { text: "найдешевший", why: "Superlative, blocked by ніж." },
        { text: "дешевше", why: "Adverb or neuter. It does not agree with готель." }
      ]
    },
    {
      prompt: "Готель «Хвиля» ___, ніж готель «Наталі».", base: "дорогий", tag: "alternation",
      options: [
        { text: "дорогіший", why: "дорогий takes -ш-, which forces the г to change." },
        { text: "дорожчий", correct: true, why: "г plus ш merges into жч. 1500 грн against 840 грн." },
        { text: "дорожчіший", why: "The comparative is marked twice, once in жч and again in -іш-." },
        { text: "дорожче", why: "Adverb or neuter. It cannot agree with готель." }
      ]
    },
    {
      prompt: "Готель «Наталі» ___, ніж готель «Світанок».", base: "великий", tag: "irregular",
      options: [
        { text: "більший", correct: true, why: "великий is suppletive: більший. Наталі has 150 rooms against 50." },
        { text: "великіший", why: "великий never builds its comparative from its own stem." },
        { text: "більш великий", why: "The analytic form does not work with suppletive adjectives. Use більший." },
        { text: "найбільший", why: "Superlative, blocked by ніж." }
      ]
    },
    {
      prompt: "Готель «Світанок» ___, ніж готель «Наталі».", base: "малий", tag: "irregular",
      options: [
        { text: "маліший", why: "малий is suppletive. The stem itself changes." },
        { text: "більш малий", why: "The analytic form does not work here. Use менший." },
        { text: "менший", correct: true, why: "малий → менший. Світанок has 50 rooms against 150." },
        { text: "найменший", why: "Superlative, blocked by ніж." }
      ]
    },
    {
      prompt: "Усмішка Джулії Робертс ___, ніж усмішка Америки Феррери.", base: "дорога", tag: "agreement",
      options: [
        { text: "дорожчий", why: "Masculine. Усмішка is feminine." },
        { text: "дорожча", correct: true, why: "Feminine to match усмішка. 30 млн against 10 млн." },
        { text: "дорожче", why: "Neuter or adverb, not feminine." },
        { text: "дорожчі", why: "Plural. Усмішка is singular." }
      ]
    },
    {
      prompt: "Груди Мадонни ___, ніж груди Доллі Партон.", base: "дешеві", tag: "agreement",
      options: [
        { text: "дешевша", why: "Feminine singular. Груди is plural." },
        { text: "дешевший", why: "Masculine singular. Груди is plural." },
        { text: "дешевші", correct: true, why: "Plural to match груди. 2 млн against 3 млн 800 тис." },
        { text: "дешевше", why: "Neuter singular or adverb." }
      ]
    },
    {
      prompt: "Зад Дженіфер Лопес ___, ніж зад Кайлі Міноуг.", base: "дорогий", tag: "agreement",
      options: [
        { text: "дорожча", why: "Feminine, but зад is masculine. The gender follows the body part, not the person." },
        { text: "дорожчі", why: "Plural, but зад is singular." },
        { text: "дорожчий", correct: true, why: "Masculine to match зад. 300 млн against 5 млн." },
        { text: "дорожче", why: "Neuter or adverb." }
      ]
    },
    {
      prompt: "Ноги Девіда Бекгема ___, ніж ноги Гайді Клум.", base: "дорогі", tag: "agreement",
      options: [
        { text: "дорожчий", why: "Masculine singular, although the subject is ноги. Do not agree with Бекгем." },
        { text: "дорожчі", correct: true, why: "Plural to match ноги. 70 млн against 2 млн 200 тис." },
        { text: "дорожча", why: "Feminine singular. Ноги is plural." },
        { text: "дорожче", why: "Neuter singular or adverb." }
      ]
    },
    {
      prompt: "Which sentence is correct?", base: "", tag: "comparison-structure",
      options: [
        { text: "Готель «Хвиля» кращий, ніж готель «Наталі».", correct: true, why: "ніж takes the nominative, so готель stays unchanged. This is the pattern the whole lesson uses." },
        { text: "Готель «Хвиля» кращий від готель «Наталі».", why: "від takes the genitive: від готелю «Наталі»." },
        { text: "Готель «Хвиля» більш кращий, ніж готель «Наталі».", why: "The comparative is marked twice, by більш and by кращий." },
        { text: "Готель «Хвиля» кращіший, ніж готель «Наталі».", why: "кращий is already comparative. Adding -іш- marks it a second time." }
      ]
    },
    {
      prompt: "Готель «Хвиля» ___ зручний, ніж готель «Світанок».", base: "зручний", tag: "comparison-structure",
      options: [
        { text: "більше", why: "That is the adverb, used with verbs and quantities. The adjective form is більш." },
        { text: "більш", correct: true, why: "The analytic comparative: більш plus the plain adjective." },
        { text: "самий", why: "A Russian calque, and it points at the superlative rather than the comparative." },
        { text: "найбільш", why: "That builds the superlative, which ніж blocks." }
      ]
    },
    {
      prompt: "Цей готель ___, ніж той.", base: "зручний", tag: "comparison-structure",
      options: [
        { text: "більш зручніший", why: "Marked twice. Choose either більш зручний or зручніший, never both." },
        { text: "зручніший", correct: true, why: "Stem plus -іш-. Більш зручний would also be correct here, but only one of the two." },
        { text: "найзручніший", why: "Superlative, blocked by ніж." },
        { text: "зручніше", why: "Adverb or neuter. It does not agree with готель." }
      ]
    },
    {
      prompt: "Тут краєвид ___, ніж там.", base: "гарний", tag: "suffix",
      options: [
        { text: "гарніший", correct: true, why: "Stem plus -іш-, masculine to match краєвид." },
        { text: "гарший", why: "-ш- alone does not attach to this stem." },
        { text: "найгарніший", why: "Superlative, blocked by ніж." },
        { text: "гарніша", why: "Feminine. Краєвид is masculine." }
      ]
    },
    {
      prompt: "Вода в морі ___, ніж у річці.", base: "чиста", tag: "suffix",
      options: [
        { text: "чистша", why: "This stem needs -іш-, not bare -ш-." },
        { text: "чистіший", why: "Masculine. Вода is feminine." },
        { text: "чистіша", correct: true, why: "чиста → чистіша, feminine to match вода." },
        { text: "найчистіша", why: "Superlative, blocked by ніж." }
      ]
    },
    {
      prompt: "Ця страва ___, ніж та.", base: "смачна", tag: "suffix",
      options: [
        { text: "смачніша", correct: true, why: "смачна → смачніша, feminine to match страва." },
        { text: "смачша", why: "-ш- alone does not attach to this stem." },
        { text: "смачніше", why: "Neuter or adverb. Страва is feminine." },
        { text: "більш смачніша", why: "Marked twice, by більш and by -іш-." }
      ]
    },
    {
      prompt: "Сьогодні погода ___, ніж учора.", base: "сонячна", tag: "suffix",
      options: [
        { text: "сонячна", why: "The plain adjective. It makes no comparison, and ніж is left dangling." },
        { text: "сонячніша", correct: true, why: "сонячна → сонячніша, feminine to match погода." },
        { text: "сонячніший", why: "Masculine. Погода is feminine." },
        { text: "найсонячніша", why: "Superlative, blocked by ніж." }
      ]
    },
    {
      prompt: "Готель «Хвиля» ___ з трьох готелів.", base: "дорогий", tag: "comparative-vs-superlative",
      options: [
        { text: "дорожчий", why: "The comparative singles out one of two. Here the whole set of three is in view." },
        { text: "найдорожчий", correct: true, why: "З трьох готелів covers the whole group, so the superlative is required." },
        { text: "більш дорогий", why: "Still a comparative, just built the analytic way." },
        { text: "дорожче", why: "Adverb or neuter, and still a comparative." }
      ]
    },
    {
      prompt: "Як утворюється вищий ступінь порівняння прикметників?", base: "", tag: "rule",
      options: [
        { text: "додаємо префікс най- до основи", why: "That builds the superlative, which is one step further along." },
        { text: "додаємо суфікс -ш- або -іш- до основи, або ставимо більш перед прикметником", correct: true, why: "Two routes, the simple form and the analytic form, and never both at once." },
        { text: "ставимо слово \"самий\" перед прикметником", why: "A Russian calque, and it aims at the superlative rather than the comparative." },
        { text: "ставимо більш перед формою вищого ступеня", why: "That marks the comparative twice, as in більш кращий." }
      ]
    }
  ]
});
