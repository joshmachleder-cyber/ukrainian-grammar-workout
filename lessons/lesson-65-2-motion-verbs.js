registerLesson({
  id: "lesson-65-2",
  number: 65.2,
  title: "Motion verbs: піти, ходити, поїхати, їздити",
  titleUk: "Дієслова руху: піти / ходити, поїхати / їздити",
  source: "Lesson 65 deck, exercise «Заповніть пропуски словами піти/ходити або поїхати/їздити в правильній формі»",
  rule: [
    "Two choices have to be made at once, and they are independent of each other.",
    "First, how did the person travel. піти and ходити are on foot or within walking distance: до магазину, на прогулянку, у ресторан across the street. поїхати and їздити are by vehicle or over a distance: на море, в Америку, до Львова.",
    "Second, is the person back. пішов and поїхав say the person set off and is still there. That is why they explain an absence: Вона пішла на прогулянку means she is out right now. ходив and їздив say the trip is finished and the person returned, which is why they go with вчора, минулого року and a comment on how it went: Вчора ми ходили в ресторан. Було дуже весело.",
    "ходити and їздити also carry repeated trips (щосуботи ми ходимо на ринок) and lifetime experience, including the negative one: Я ніколи не їздив в Америку. пішов and поїхав cannot do either of those jobs, because they describe one single departure.",
    "In the past tense all four agree with the subject in gender and number: пішов, пішла, пішли; поїхав, поїхала, поїхали; ходив, ходила, ходили; їздив, їздила, їздили."
  ],
  example: {
    uk: "Назар не буде сьогодні вечеряти вдома, бо він щойно пішов у ресторан.",
    en: "Nazar is not having dinner at home today, because he has just gone off to a restaurant.",
    note: "пішов, not ходив, because he is still there, which is exactly why he will not be eating at home. пішов and not поїхав because the restaurant is close enough to walk to. And пішов and not пішла because Назар is masculine."
  },
  questions: [
    {
      prompt: "Назар не буде сьогодні вечеряти вдома, бо він щойно ______ у ресторан.",
      base: "піти / ходити",
      tag: "round-trip",
      options: [
        { text: "пішов", correct: true, why: "Correct. He set off and is still there, which is why he will not be home for dinner." },
        { text: "ходив", why: "ходив says the trip is over and he is back, so it cannot explain why he is missing from dinner." },
        { text: "поїхав", why: "The direction is right but the mode is wrong. A restaurant in town is a пішов situation unless a vehicle is mentioned." },
        { text: "ходить", why: "Present tense, which would mean he goes to restaurants habitually rather than that he left just now." }
      ]
    },
    {
      prompt: "Вчора ми ______ в ресторан. Було дуже весело.",
      base: "піти / ходити",
      tag: "round-trip",
      options: [
        { text: "ходили", correct: true, why: "Correct. The trip is finished and they are back, and the second sentence comments on how it went." },
        { text: "пішли", why: "пішли would leave them still at the restaurant, which contradicts вчора and the finished evening." },
        { text: "їздили", why: "Right on the round trip but wrong on the mode. Nothing says they drove." },
        { text: "підемо", why: "Future tense. Вчора places this firmly in the past." }
      ]
    },
    {
      prompt: "Хлопці ______ вчора на футбол. Матч був дуже цікавий.",
      base: "піти / ходити",
      tag: "round-trip",
      options: [
        { text: "ходили", correct: true, why: "Correct. They went and came back, and they can now report on the match." },
        { text: "пішли", why: "That would mean they are at the stadium now, but вчора and the past tense був close the trip off." },
        { text: "поїхали", why: "The mode is not supported by the sentence, and пішли or ходили is the default for a local match." },
        { text: "ідуть", why: "Present tense, which conflicts with вчора." }
      ]
    },
    {
      prompt: "Хлопці не можуть зараз зустрітися з другом. Вони ______ на футбол.",
      base: "піти / ходити",
      tag: "round-trip",
      options: [
        { text: "пішли", correct: true, why: "Correct. They are away right now, which is exactly why they cannot meet their friend." },
        { text: "ходили", why: "ходили means they are already back, so it would not explain зараз не можуть." },
        { text: "ходять", why: "Present tense, meaning they attend football regularly. That is not an explanation for today." },
        { text: "підуть", why: "Future tense. The sentence needs a departure that has already happened." }
      ]
    },
    {
      prompt: "Наші сусіди вчора ______ на море і попросили доглянути їхнього собаку.",
      base: "поїхати / їздити",
      tag: "round-trip",
      options: [
        { text: "поїхали", correct: true, why: "Correct. They are away now, which is why someone has to look after the dog." },
        { text: "їздили", why: "їздили means they are back, and then there would be nobody to ask for a favour." },
        { text: "пішли", why: "The round trip is right but you do not walk to the sea. Distance means поїхати." },
        { text: "ходили", why: "Wrong on both counts: on foot, and back already." }
      ]
    },
    {
      prompt: "Минулого року ми ______ на море. Це була чудова подорож.",
      base: "поїхати / їздити",
      tag: "round-trip",
      options: [
        { text: "їздили", correct: true, why: "Correct. The trip is finished and being looked back on, and подорож confirms it is over." },
        { text: "поїхали", why: "That would leave them at the sea since last year. The comment Це була чудова подорож says they came home." },
        { text: "ходили", why: "Wrong mode. на море is a vehicle trip." },
        { text: "їдемо", why: "Present tense, which does not fit минулого року." }
      ]
    },
    {
      prompt: "Вчора ми ______ на прогулянку, а сьогодні ні, бо падає дощ.",
      base: "піти / ходити",
      tag: "round-trip",
      options: [
        { text: "ходили", correct: true, why: "Correct. Yesterday's walk is finished, and it is being contrasted with today." },
        { text: "пішли", why: "That would put them on the walk still, which the contrast with сьогодні rules out." },
        { text: "їздили", why: "You go on a прогулянка on foot, so ходили is the pair to use." },
        { text: "ходимо", why: "Present tense. Вчора requires the past." }
      ]
    },
    {
      prompt: "Нашої дочки зараз немає вдома. Вона ______ на прогулянку.",
      base: "піти / ходити",
      tag: "round-trip",
      options: [
        { text: "пішла", correct: true, why: "Correct. She is out at this moment, which is what explains немає вдома, and пішла is feminine." },
        { text: "ходила", why: "ходила means the walk is over and she is home, contradicting немає вдома." },
        { text: "пішов", why: "Right verb, wrong gender. дочка is feminine, so пішла." },
        { text: "поїхала", why: "The tense and gender work but прогулянка is on foot." }
      ]
    },
    {
      prompt: "Я ніколи не ______ в Америку.",
      base: "поїхати / їздити",
      tag: "habitual",
      options: [
        { text: "їздив", correct: true, why: "Correct. Lifetime experience, positive or negative, uses ходити and їздити." },
        { text: "поїхав", why: "поїхав describes one single departure, so it cannot combine with ніколи." },
        { text: "ходив", why: "The experience reading is right but you do not walk to America." },
        { text: "їду", why: "Present tense. ніколи не with a life experience takes the past." }
      ]
    },
    {
      prompt: "Наші студенти вже закінчили курс української мови в Україні і ______ в Америку.",
      base: "поїхати / їздити",
      tag: "round-trip",
      options: [
        { text: "поїхали", correct: true, why: "Correct. They left for America and are there now. The course is over and they did not come back." },
        { text: "їздили", why: "їздили would mean they went to America and returned to Ukraine, which reverses the story." },
        { text: "пішли", why: "Wrong mode for a transatlantic trip." },
        { text: "ходили", why: "Wrong on both counts: on foot, and a completed round trip." }
      ]
    },
    {
      prompt: "Марія ______ до магазину і ще не повернулася.",
      base: "піти / ходити",
      tag: "agreement",
      options: [
        { text: "пішла", correct: true, why: "Correct. She is still out, and the feminine past of піти is пішла." },
        { text: "пішов", why: "Masculine. The subject Марія takes пішла." },
        { text: "пішли", why: "Plural. There is one person here." },
        { text: "ходила", why: "The gender is right but ходила means she is back, which ще не повернулася contradicts." }
      ]
    },
    {
      prompt: "Хлопці ______ на стадіон і ще не повернулися.",
      base: "піти / ходити",
      tag: "agreement",
      options: [
        { text: "пішли", correct: true, why: "Correct. Plural subject, and they are still away." },
        { text: "пішов", why: "Masculine singular. Хлопці is plural, so пішли." },
        { text: "пішла", why: "Feminine singular, wrong in both gender and number." },
        { text: "ходили", why: "The number is right but ходили says they came back." }
      ]
    },
    {
      prompt: "Щоб дістатися з Києва до Львова, ми ______ потягом.",
      base: "поїхати / їздити",
      tag: "transport",
      options: [
        { text: "поїхали", correct: true, why: "Correct. потягом names the vehicle, so the їхати pair is required." },
        { text: "пішли", why: "піти is for on foot. A train journey between cities cannot use it." },
        { text: "ходили", why: "Wrong mode, and it would also say the round trip is finished." },
        { text: "йшли", why: "Wrong mode, and this is the imperfective process of walking." }
      ]
    },
    {
      prompt: "Щосуботи ми ______ на ринок.",
      base: "піти / ходити",
      tag: "habitual",
      options: [
        { text: "ходимо", correct: true, why: "Correct. Щосуботи marks a repeated trip, which is what ходити exists for." },
        { text: "йдемо", why: "йдемо is one trip in progress, as in Зараз ми йдемо на ринок. It does not express a habit." },
        { text: "підемо", why: "Future, one occasion. Щосуботи needs the habitual present." },
        { text: "поїдемо", why: "Wrong mode and wrong tense for a weekly walk to the market." }
      ]
    },
    {
      prompt: "Де Назар? Він ______ до лікаря.",
      base: "піти / ходити",
      tag: "round-trip",
      options: [
        { text: "пішов", correct: true, why: "Correct. The question asks where he is now, and пішов says he is at the doctor's." },
        { text: "ходив", why: "ходив answers a different question, namely what he did earlier, and implies he is back." },
        { text: "ходить", why: "Present habitual, meaning he sees the doctor regularly. It does not say where he is." },
        { text: "піде", why: "Future. Де Назар? asks about now." }
      ]
    },
    {
      prompt: "Учора я ______ до лікаря, а тепер знову вдома.",
      base: "піти / ходити",
      tag: "round-trip",
      options: [
        { text: "ходив", correct: true, why: "Correct. The trip is complete and the speaker has returned, which is stated outright." },
        { text: "пішов", why: "пішов would leave the speaker at the doctor's, contradicting тепер знову вдома." },
        { text: "поїхав", why: "Wrong on the return, and nothing indicates a vehicle." },
        { text: "іду", why: "Present tense, which conflicts with учора." }
      ]
    },
    {
      prompt: "Минулого літа вони ______ до Італії.",
      base: "поїхати / їздити",
      tag: "transport",
      options: [
        { text: "їздили", correct: true, why: "Correct. A completed trip abroad: vehicle mode, round trip, past tense." },
        { text: "ходили", why: "Right on the round trip, wrong mode. Another country means їздити." },
        { text: "пішли", why: "Wrong on both counts." },
        { text: "йшли", why: "Wrong mode, and this describes walking in progress." }
      ]
    },
    {
      prompt: "Ти коли-небудь ______ в Америку?",
      base: "поїхати / їздити",
      tag: "habitual",
      options: [
        { text: "їздив", correct: true, why: "Correct. коли-небудь asks about lifetime experience, which takes їздити." },
        { text: "поїхав", why: "поїхав is a single departure and cannot answer a have you ever question." },
        { text: "ходив", why: "The experience reading is right but the mode is not." },
        { text: "їдеш", why: "Present tense, which would ask whether you are on your way there now." }
      ]
    },
    {
      prompt: "Яка форма означає, що людина поїхала і вже повернулася?",
      base: "правило",
      tag: "rule",
      options: [
        { text: "їздила", correct: true, why: "Correct. ходити and їздити describe the complete there and back trip." },
        { text: "поїхала", why: "поїхала says she set off and is still away." },
        { text: "їде", why: "Present tense, the journey in progress." },
        { text: "поїде", why: "Future, a departure that has not happened yet." }
      ]
    },
    {
      prompt: "Яке речення правильне?",
      base: "підсумкове питання",
      tag: "rule",
      options: [
        { text: "Наші сусіди вчора поїхали на море і попросили доглянути їхнього собаку.", correct: true, why: "Correct. Vehicle mode for на море, and поїхали because they are away, which is why the dog needs looking after." },
        { text: "Наші сусіди вчора пішли на море і попросили доглянути їхнього собаку.", why: "Wrong mode. на море takes поїхати." },
        { text: "Наші сусіди вчора їздили на море і попросили доглянути їхнього собаку.", why: "The mode is right but їздили puts them back home, so the favour makes no sense." },
        { text: "Наші сусіди вчора поїхав на море і попросили доглянути їхнього собаку.", why: "The verb does not agree. Сусіди is plural, so поїхали." }
      ]
    }
  ]
});
