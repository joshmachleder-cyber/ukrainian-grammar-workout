registerLesson({
  id: "lesson-64",
  number: 64,
  title: "Superlative adjectives",
  titleUk: "Найвищий ступінь порівняння прикметників",
  source: "Lesson 64 deck",
  rule: [
    "The superlative is <b>най-</b> attached to the <b>comparative</b> form, never to the base adjective. The chain always runs base → comparative → superlative: розумний → розумніший → найрозумніший.",
    "The comparative is built with <b>-іш-</b> or <b>-ш-</b>. Where <b>-ш-</b> meets certain consonants they merge: г, ж, з + ш → <b>жч</b> (дорогий → дорожчий, низький → нижчий); с + ш → <b>щ</b> (високий → вищий). The suffixes -к-, -ок-, -ьк- usually drop: тонкий → тонший, глибокий → глибший.",
    "Four adjectives are suppletive and change stem completely: великий → більший → найбільший; малий → менший → найменший; добрий → кращий → найкращий; поганий → гірший → найгірший.",
    "The superlative still agrees in gender, number and case with its noun: найкращ<b>ий</b> хлопець, найкращ<b>а</b> дівчина, найкращ<b>е</b> волосся, найкращ<b>і</b> очі.",
    "<b>самий високий</b> is a calque from Russian, not standard Ukrainian. Use найвищий.",
    "Use the comparative, not the superlative, when two things are compared with <b>ніж</b>: Мадонна вища, ніж Брітні Спірс. Use the superlative with <b>серед усіх</b>, <b>з них усіх</b>, <b>у світі</b>."
  ],
  example: {
    uk: "Моя найдорожча Наталю! Адже ти – найкраща у світі дівчина.",
    en: "My dearest Natalia! After all, you are the best girl in the world.",
    note: "дорога → дорожча → найдорожча. The г merges with -ш- into жч, and the ending -а agrees with Наталя."
  },
  questions: [
    {
      prompt: "Моя ___ Наталю!", base: "дорога", tag: "alternation",
      options: [
        { text: "найдорога", why: "Най- glued straight onto the base adjective. The comparative step is missing: дорогий → дорожчий." },
        { text: "найдорожча", correct: true, why: "The г merges with -ш- into жч, and -а agrees with Наталя. This is the form used in the valentine." },
        { text: "найдорогіша", why: "Wrong suffix. Дорогий takes -ш-, which forces the г to change to жч." },
        { text: "сама дорога", why: "A calque from Russian. Ukrainian marks the superlative with най-, not with самий." }
      ]
    },
    {
      prompt: "Мені здається, що в тебе ___ очі.", base: "великі", tag: "irregular",
      options: [
        { text: "найвеликі", why: "Великий never builds its comparative from its own stem." },
        { text: "найвеликіші", why: "Same problem with a suffix added. There is no such form in Ukrainian." },
        { text: "найбільші", correct: true, why: "Великий is suppletive: більший → найбільший, plural найбільші to match очі." },
        { text: "самі великі", why: "Russian calque, and великий still needs its suppletive stem." }
      ]
    },
    {
      prompt: "Остап ___ хлопець у класі.", base: "розумний", tag: "suffix",
      options: [
        { text: "найрозумніший", correct: true, why: "Stem plus -іш-, then най-, masculine to match хлопець." },
        { text: "найрозумній", why: "The adjective ending is missing. A Ukrainian adjective must carry -ий, -а, -е or -і." },
        { text: "найрозумший", why: "-ш- alone does not attach to this stem. Розумний takes -іш-." },
        { text: "найрозумніщий", why: "щ appears only where с and ш merge, as in вищий. There is no с here." }
      ]
    },
    {
      prompt: "В Оксани ___ волосся серед усіх дівчат у школі.", base: "довге", tag: "agreement",
      options: [
        { text: "найдовгіше", why: "The г drops before -ш- in довший. There is no -гіш- form." },
        { text: "найдовший", why: "Right adjective, wrong gender. Волосся is neuter." },
        { text: "найдовше", correct: true, why: "довгий → довший → найдовший, neuter найдовше to match волосся." },
        { text: "найдовжче", why: "жч belongs to дорожчий, where the г survives as part of the cluster. Довший simply drops it." }
      ]
    },
    {
      prompt: "У жирафи ___ шия.", base: "довга", tag: "agreement",
      options: [
        { text: "найдовга", why: "The comparative step is missing." },
        { text: "найдовша", correct: true, why: "Feminine -а to match шия." },
        { text: "найдовже", why: "Neuter ending, but шия is feminine." },
        { text: "найдовжа", why: "No such form. The comparative stem is довш-, not довж-." }
      ]
    },
    {
      prompt: "У слона ___ вуха серед усіх тварин.", base: "великі", tag: "agreement",
      options: [
        { text: "найбільша", why: "Feminine singular, but вуха is neuter plural." },
        { text: "найбільше", why: "Neuter singular. Вуха is plural." },
        { text: "найвеликі", why: "Великий does not build its comparative from its own stem." },
        { text: "найбільші", correct: true, why: "Plural -і to match вуха, from the suppletive stem більш-." }
      ]
    },
    {
      prompt: "Який ___ птах на Землі?", base: "малий", tag: "irregular",
      options: [
        { text: "наймалий", why: "Малий is suppletive. The stem itself changes." },
        { text: "найменший", correct: true, why: "малий → менший → найменший, masculine to match птах." },
        { text: "наймаліший", why: "There is no -іш- form of малий." },
        { text: "найменьший", why: "Ukrainian writes no soft sign here. That spelling is Russian." }
      ]
    },
    {
      prompt: "Яка ___ тварина на Землі?", base: "швидка", tag: "alternation",
      options: [
        { text: "найшвидка", why: "The comparative step is missing." },
        { text: "найшвидкіша", why: "The -к- drops and -ш- attaches directly: швидший." },
        { text: "найшвидша", correct: true, why: "швидкий → швидший → найшвидший, feminine найшвидша for тварина." },
        { text: "найшвидший", why: "Right form, wrong gender. Тварина is feminine." }
      ]
    },
    {
      prompt: "У тебе ___ волосся.", base: "м'яке", tag: "agreement",
      options: [
        { text: "найм'яке", why: "No comparative step." },
        { text: "найм'якіше", why: "М'який takes -ш-, giving м'якший." },
        { text: "найм'якше", correct: true, why: "Neuter to match волосся, exactly as in the valentine." },
        { text: "наймягше", why: "Russian spelling. Ukrainian needs the apostrophe: м'як-." }
      ]
    },
    {
      prompt: "У неї ___ фігура серед усіх дівчат.", base: "струнка", tag: "suffix",
      options: [
        { text: "найструнка", why: "No comparative step." },
        { text: "найструнша", why: "This stem takes -іш-, not bare -ш-." },
        { text: "найстрункійша", why: "No such suffix exists in Ukrainian." },
        { text: "найстрункіша", correct: true, why: "струнка → стрункіша → найстрункіша." }
      ]
    },
    {
      prompt: "Ти ___ дівчина у світі.", base: "ніжна", tag: "suffix",
      options: [
        { text: "найніжна", why: "No comparative step." },
        { text: "найніжніша", correct: true, why: "ніжна → ніжніша → найніжніша, one of the forms in the valentine." },
        { text: "найніжша", why: "-ш- alone does not attach to this stem." },
        { text: "найніжніш", why: "A stem with no ending. The adjective must agree with дівчина." }
      ]
    },
    {
      prompt: "Вона ___ жінка в місті.", base: "вродлива", tag: "suffix",
      options: [
        { text: "найвродлива", why: "No comparative step." },
        { text: "найвродлівіша", why: "The stem vowel is и, not і: вродлив-." },
        { text: "найвродливша", why: "This stem takes -іш-, not bare -ш-." },
        { text: "найвродливіша", correct: true, why: "вродлива → вродливіша → найвродливіша." }
      ]
    },
    {
      prompt: "У тебе ___ губи.", base: "гарні", tag: "agreement",
      options: [
        { text: "найгарні", why: "No comparative step." },
        { text: "найгарніша", why: "Feminine singular. Губи is plural." },
        { text: "найгарніші", correct: true, why: "Plural -і to match губи, from гарніший." },
        { text: "найгарнійші", why: "No such suffix. The plural form is -іші." }
      ]
    },
    {
      prompt: "Ірина ___ дівчина в групі.", base: "висока", tag: "alternation",
      options: [
        { text: "найвисока", why: "No comparative step." },
        { text: "найвисочіша", why: "There is no -оч- form. The с and ш merge into щ and the -ок- drops." },
        { text: "найвища", correct: true, why: "високий → вищий → найвищий. с plus ш gives щ, feminine найвища for дівчина." },
        { text: "найвижча", why: "жч comes from г or з, not from с." }
      ]
    },
    {
      prompt: "Шакіра ___ з них усіх.", base: "низька", tag: "alternation",
      options: [
        { text: "найнизька", why: "No comparative step." },
        { text: "найнижа", why: "The merged cluster is жч, not ж alone." },
        { text: "найнижча", correct: true, why: "низький → нижчий → найнижчий. з plus ш gives жч and the -ьк- drops." },
        { text: "найнизча", why: "The з must change to ж before ч." }
      ]
    },
    {
      prompt: "Мадонна ___, ніж Брітні Спірс.", base: "висока", tag: "comparative-vs-superlative",
      options: [
        { text: "найвища", why: "ніж compares exactly two people, so the superlative cannot stand here." },
        { text: "вища", correct: true, why: "Comparative with ніж, as in the model sentence on your slide." },
        { text: "висока", why: "The plain adjective states a fact but makes no comparison, and ніж is left dangling." },
        { text: "вищий", why: "Right degree, wrong gender. Мадонна is feminine." }
      ]
    },
    {
      prompt: "Стівен Спілберг ___ з них усіх.", base: "багатий", tag: "comparative-vs-superlative",
      options: [
        { text: "багатший", why: "Comparative, but he tops the whole table, and з них усіх calls for the superlative." },
        { text: "найбагатіший", why: "Багатий takes -ш-, giving багатший, exactly as printed on your slide." },
        { text: "самий багатий", why: "Russian calque." },
        { text: "найбагатший", correct: true, why: "3.1 млрд is the highest figure in the table, and з них усіх marks the whole group." }
      ]
    },
    {
      prompt: "Джек Ніколсон ___, ніж Пол МакКартні.", base: "бідний", tag: "comparative-vs-superlative",
      options: [
        { text: "бідний", why: "No comparison made, and ніж is left dangling." },
        { text: "бідніший", correct: true, why: "The model sentence on your slide uses this exact form: бідніший, ніж Мел Гібсон." },
        { text: "найбідніший", why: "ніж blocks the superlative. Only two people are being compared." },
        { text: "бідніша", why: "Feminine ending. Джек Ніколсон is masculine." }
      ]
    },
    {
      prompt: "Which sentence is correct?", base: "", tag: "comparative-vs-superlative",
      options: [
        { text: "Шерон Стоун вища з них усіх.", why: "З них усіх covers the whole group, so the adjective needs най-." },
        { text: "Шерон Стоун найвища з них усіх.", correct: true, why: "Superlative plus з них усіх, the standard way to single one out of a set." },
        { text: "Шерон Стоун сама висока з них усіх.", why: "Russian calque for the superlative." },
        { text: "Шерон Стоун найвища ніж них усіх.", why: "ніж cannot follow a superlative, and it does not govern a genitive phrase." }
      ]
    },
    {
      prompt: "Як утворюється найвищий ступінь порівняння прикметників?", base: "", tag: "rule",
      options: [
        { text: "додаємо суфікс -іш- до основи прикметника", why: "That builds the comparative, and only for some adjectives. The superlative is one step further." },
        { text: "ставимо слово \"самий\" перед прикметником", why: "That is the Russian pattern. Ukrainian uses the prefix най-." },
        { text: "додаємо префікс най- до форми вищого ступеня", correct: true, why: "Base → comparative → най-. The adjective still agrees in gender, number and case." },
        { text: "додаємо закінчення -ший до форми найвищого ступеня", why: "Circular. The superlative is the end of the chain, not the starting point." }
      ]
    }
  ]
});
