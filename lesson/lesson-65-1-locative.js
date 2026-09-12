registerLesson({
  id: "lesson-65-1",
  number: 65.1,
  title: "Locative case after у and на",
  titleUk: "Місцевий відмінок після прийменників у (в) та на",
  source: "Lesson 65 deck, exercise «Заповніть пропуски»",
  rule: [
    "After the prepositions у (в) and на, a noun that answers де? goes into the locative case. This is the only case in Ukrainian that never appears without a preposition, which is why it is called місцевий.",
    "Noun endings. Masculine and neuter normally take -і: на вікні, на балконі, на стільці. But when the stem ends in к, г or х, the ending is -у: у будинку, на ліжку, на столику. Feminine takes -і, and the stem consonant alternates: к becomes ц, г becomes з, х becomes с, so подушка becomes на подушці. Plural takes -ах or -ях: у шафах.",
    "Adjective endings. Masculine and neuter take -ому (the short variant -ім is also correct): у великому будинку, на зручному ліжку. Feminine takes -ій: у великій шафі. Plural takes -их: у кухонних шафах. The adjective and the noun must both be in the locative, never one and not the other.",
    "The position verbs in this exercise agree with the subject, not with the place: висить and висять, лежить and лежать, стоїть and стоять, сидить and сидять. Note стоїть with the ї, and сплю for the first person of спати."
  ],
  example: {
    uk: "У великій шафі висить одяг.",
    en: "The clothes are hanging in the big wardrobe.",
    note: "велика шафа goes to великій шафі: the preposition у forces the locative, feminine -а becomes -і, and the adjective takes the feminine locative -ій. The verb висить is third person singular because одяг is singular."
  },
  questions: [
    {
      prompt: "У ______ висить одяг.",
      base: "велика шафа",
      tag: "ending",
      options: [
        { text: "великій шафі", correct: true, why: "Correct. Feminine locative: the noun takes -і and the adjective takes -ій." },
        { text: "велику шафу", why: "This is the accusative, the case for a direct object. After у answering де? you need the locative." },
        { text: "великої шафи", why: "This is the genitive, which would say of the big wardrobe rather than in it." },
        { text: "великою шафою", why: "This is the instrumental, used for з великою шафою or за великою шафою, not after у." }
      ]
    },
    {
      prompt: "На ______ лежить кіт.",
      base: "маленька подушка",
      tag: "alternation",
      options: [
        { text: "маленькій подушці", correct: true, why: "Correct. Feminine -ка becomes -ці in the locative: к alternates to ц." },
        { text: "маленькій подушкі", why: "The alternation was skipped. к never stands before the locative -і in a feminine noun, so подушкі is not a possible Ukrainian form." },
        { text: "маленькій подусі", why: "Wrong alternation. с comes from х, as in муха and на мусі. к gives ц." },
        { text: "маленьку подушку", why: "Accusative. The cat is lying on something, so на answers де? and takes the locative." }
      ]
    },
    {
      prompt: "На ______ стоїть чайник.",
      base: "кухонна плита",
      tag: "agreement",
      options: [
        { text: "кухонній плиті", correct: true, why: "Correct. Both words are feminine locative: -ій on the adjective, -і on the noun." },
        { text: "кухонний плиті", why: "The noun is right but the adjective is masculine nominative. Both words must carry the feminine locative." },
        { text: "кухонній плити", why: "The adjective is right but -и is the genitive ending. The feminine locative is -і." },
        { text: "кухонну плиту", why: "Accusative, which would answer куди? or що?, not де?." }
      ]
    },
    {
      prompt: "На ______ сидить дитина.",
      base: "високий стілець",
      tag: "ending",
      options: [
        { text: "високому стільці", correct: true, why: "Correct. The fleeting е in стілець drops, giving стільці, and the masculine adjective takes -ому." },
        { text: "високому стільцю", why: "The adjective is right but -ю is wrong here. стілець takes -і in the locative." },
        { text: "високому стілеці", why: "The fleeting е was kept. It disappears in every case but the nominative singular: стільця, стільцю, стільці." },
        { text: "високого стільця", why: "Genitive. This would be the case after немає or біля, not after на answering де?." }
      ]
    },
    {
      prompt: "Я сплю на ______.",
      base: "зручне ліжко",
      tag: "ending",
      options: [
        { text: "зручному ліжку", correct: true, why: "Correct. The stem ends in к, so the neuter locative is -у, and the adjective takes -ому." },
        { text: "зручному ліжкі", why: "к cannot stand before -і here. A stem in к, г or х takes the locative -у instead." },
        { text: "зручне ліжко", why: "Nominative, the dictionary form. After на you must decline it." },
        { text: "зручним ліжком", why: "Instrumental. This would follow з or під, not на answering де?." }
      ]
    },
    {
      prompt: "Мій брат живе у ______.",
      base: "великий будинок",
      tag: "ending",
      options: [
        { text: "великому будинку", correct: true, why: "Correct. The stem of будинок ends in к, so the locative is -у, and the adjective takes -ому." },
        { text: "великому будинкі", why: "The adjective is right, but a stem in к takes -у in the locative, not -і." },
        { text: "великий будинок", why: "Nominative. The preposition у answering де? requires the locative." },
        { text: "великого будинку", why: "The noun form looks right but the adjective is genitive. Genitive would follow біля великого будинку." }
      ]
    },
    {
      prompt: "Посуд стоїть у ______.",
      base: "кухонні шафи",
      tag: "ending",
      options: [
        { text: "кухонних шафах", correct: true, why: "Correct. The locative plural is -ах on the noun and -их on the adjective." },
        { text: "кухонні шафи", why: "Nominative plural, the form given in the prompt. It has to be declined after у." },
        { text: "кухонними шафами", why: "Instrumental plural, used after з or над." },
        { text: "кухонних шаф", why: "Genitive plural. The adjective happens to match the locative form, but the noun does not." }
      ]
    },
    {
      prompt: "Гарні штори висять на ______.",
      base: "велике вікно",
      tag: "ending",
      options: [
        { text: "великому вікні", correct: true, why: "Correct. вікно has no к, г or х in the stem, so the neuter locative is -і." },
        { text: "великому вікну", why: "-у belongs to stems in к, г, х, as in ліжку. вікно takes -і." },
        { text: "велике вікно", why: "Nominative. The curtains hang somewhere, so на answers де? and takes the locative." },
        { text: "великим вікном", why: "Instrumental, the case for за великим вікном or перед великим вікном." }
      ]
    },
    {
      prompt: "Мій улюблений вазон стоїть на ______.",
      base: "малий балкон",
      tag: "ending",
      options: [
        { text: "малому балконі", correct: true, why: "Correct. Masculine locative -і on the noun, -ому on the adjective." },
        { text: "малому балкону", why: "балкон has no к, г or х in the stem, so the locative is -і, not -у." },
        { text: "малий балкон", why: "Nominative. After на answering де? the phrase must be in the locative." },
        { text: "малого балкона", why: "Genitive. This would answer звідки? or follow біля." }
      ]
    },
    {
      prompt: "На ______ лежить свіжа газета.",
      base: "журнальний столик",
      tag: "ending",
      options: [
        { text: "журнальному столику", correct: true, why: "Correct. The stem of столик ends in к, so the locative is -у, with -ому on the adjective." },
        { text: "журнальному столикі", why: "A stem in к takes -у. Compare ліжко and на ліжку, будинок and у будинку." },
        { text: "журнальний столик", why: "Nominative. The newspaper is lying on it, so this needs the locative." },
        { text: "журнального столика", why: "Genitive, which would follow біля or не бачу." }
      ]
    },
    {
      prompt: "У великій шафі ______ одяг. (висіти)",
      base: "висіти",
      tag: "verb-form",
      options: [
        { text: "висить", correct: true, why: "Correct. одяг is singular, so the verb is third person singular." },
        { text: "висять", why: "Third person plural. одяг is a singular collective noun in Ukrainian even though it means many items." },
        { text: "висіло", why: "Past tense neuter. одяг is masculine, and the exercise calls for the present." },
        { text: "висіти", why: "The infinitive, which is the form given in the prompt. It has to be conjugated." }
      ]
    },
    {
      prompt: "На маленькій подушці ______ кіт. (лежати)",
      base: "лежати",
      tag: "verb-form",
      options: [
        { text: "лежить", correct: true, why: "Correct. Third person singular to agree with кіт." },
        { text: "лежать", why: "Third person plural. There is one cat, so the verb is singular." },
        { text: "лежає", why: "Not a Ukrainian form. лежати is a second conjugation verb: лежу, лежиш, лежить." },
        { text: "лежали", why: "Past tense plural, wrong in both tense and number." }
      ]
    },
    {
      prompt: "На кухонній плиті ______ чайник. (стояти, теперішній час)",
      base: "стояти",
      tag: "verb-form",
      options: [
        { text: "стоїть", correct: true, why: "Correct. Note the ї: стою, стоїш, стоїть, стоять." },
        { text: "стоять", why: "Third person plural. чайник is singular." },
        { text: "стоє", why: "Not a Ukrainian form. The stem takes ї before the ending." },
        { text: "стоїш", why: "Second person singular, which would mean you are standing on the stove." }
      ]
    },
    {
      prompt: "На високому стільці ______ дитина. (сидіти)",
      base: "сидіти",
      tag: "verb-form",
      options: [
        { text: "сидить", correct: true, why: "Correct. Third person singular agreeing with дитина." },
        { text: "сидять", why: "Third person plural. дитина is singular, even though it is a neuter-looking word it declines as feminine and takes a singular verb." },
        { text: "сидю", why: "Not a Ukrainian form. The first person is сиджу, with the д to дж alternation." },
        { text: "сидіє", why: "Not a Ukrainian form. сидіти conjugates сиджу, сидиш, сидить." }
      ]
    },
    {
      prompt: "Я ______ на зручному ліжку. (спати)",
      base: "спати",
      tag: "verb-form",
      options: [
        { text: "сплю", correct: true, why: "Correct. спати inserts an л in the first person singular: сплю, спиш, спить." },
        { text: "спю", why: "The л is missing. Labial stems like спати, любити and робити insert л in the first person singular." },
        { text: "спаю", why: "Not a Ukrainian form. The а of the infinitive does not survive into the present stem." },
        { text: "спить", why: "Third person singular. The subject here is я." }
      ]
    },
    {
      prompt: "Мій брат ______ у великому будинку. (жити)",
      base: "жити",
      tag: "verb-form",
      options: [
        { text: "живе", correct: true, why: "Correct. жити has the present stem жив-: живу, живеш, живе." },
        { text: "живуть", why: "Third person plural. The subject мій брат is singular." },
        { text: "жиє", why: "Not a Ukrainian form. The stem is жив-, so the third person is живе." },
        { text: "живить", why: "This belongs to живити, meaning to nourish, a different verb." }
      ]
    },
    {
      prompt: "Посуд ______ у кухонних шафах. (стояти)",
      base: "стояти",
      tag: "verb-form",
      options: [
        { text: "стоїть", correct: true, why: "Correct. посуд is a singular collective noun, so the verb stays singular even though the dishes are many." },
        { text: "стоять", why: "The plural is tempting because посуд means many dishes, but the noun itself is grammatically singular." },
        { text: "стоїмо", why: "First person plural, which would mean we are standing in the cupboards." },
        { text: "стояти", why: "The infinitive given in the prompt. It needs to be conjugated." }
      ]
    },
    {
      prompt: "Гарні штори ______ на великому вікні. (висіти)",
      base: "висіти",
      tag: "verb-form",
      options: [
        { text: "висять", correct: true, why: "Correct. штори is plural, so the verb is third person plural." },
        { text: "висить", why: "Singular. Compare одяг висить, which is singular, with штори висять, which is plural." },
        { text: "висіють", why: "Not a Ukrainian form. висіти conjugates вишу, висиш, висить, висять." },
        { text: "висимо", why: "First person plural, which would mean we are hanging on the window." }
      ]
    },
    {
      prompt: "Одяг висить ______ шафі, а не зверху.",
      base: "у / на",
      tag: "preposition",
      options: [
        { text: "у", correct: true, why: "Correct. у places the clothes inside the wardrobe. Both prepositions take the locative, so the choice is about meaning, not form." },
        { text: "на", why: "Grammatically possible but it changes the meaning to on top of the wardrobe, which the sentence rules out." },
        { text: "до", why: "до takes the genitive and answers куди?, as in іду до шафи." },
        { text: "з", why: "з takes the genitive here and answers звідки?, as in беру одяг з шафи." }
      ]
    },
    {
      prompt: "Яке речення правильне?",
      base: "підсумкове питання",
      tag: "rule",
      options: [
        { text: "На журнальному столику лежить свіжа газета.", correct: true, why: "Correct. The adjective and noun are both locative, the к stem gives -у, and the verb agrees with the singular газета." },
        { text: "На журнальний столик лежить свіжа газета.", why: "The phrase is accusative. на answering де? requires the locative." },
        { text: "На журнальному столикі лежить свіжа газета.", why: "The ending is wrong. A stem in к takes -у in the locative." },
        { text: "На журнальному столику лежать свіжа газета.", why: "The verb is plural but газета is singular." }
      ]
    }
  ]
});
