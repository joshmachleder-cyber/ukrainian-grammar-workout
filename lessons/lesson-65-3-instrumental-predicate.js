registerLesson({
  id: "lesson-65-3",
  number: 65.3,
  title: "Instrumental as predicate after є, бути, стати, здаватися",
  titleUk: "Орудний відмінок у складеному присудку",
  source: "Lesson 65 deck, reading «Рекордсмени світу» and «Цей цікавий світ»",
  rule: [
    "When a noun or adjective is linked to the subject by є, бути, стати, ставати, здаватися, вважатися or називатися, it goes into the instrumental case. The subject itself stays in the nominative: Найбільшою твариною у світі є синій кит. The whale is the subject in the nominative, and the thing said about it is in the instrumental.",
    "Instrumental endings. Feminine -ою or -ею: твариною, причиною, стрункою, довшою. Masculine and neuter -ом or -ем: слоном, китом, ссавцем, явищем. Plural -ами or -ями: тваринами. Adjectives take -им for masculine and neuter, -ою for feminine, -ими for plural.",
    "But when there is no linking verb at all, and the sentence uses це or a dash instead, both halves stay in the nominative: Найвища тварина на Землі — жирафа. Найбільша тварина, яка живе на суші, — це африканський слон. This is the trap, because the English is identical in both patterns.",
    "After ніж and як in a comparison, the second item takes the same case as the first, which is usually the nominative: слонихи набагато менші, ніж самці. Do not put the instrumental there just because a comparison feels like a linking verb."
  ],
  example: {
    uk: "Найбільшою твариною у світі є синій кит.",
    en: "The largest animal in the world is the blue whale.",
    note: "The linking verb є pulls найбільша тварина into the instrumental, giving найбільшою твариною, while синій кит stays nominative as the subject. Take є away and write it with a dash and both halves go back to the nominative: Найбільша тварина у світі — синій кит."
  },
  questions: [
    {
      prompt: "______ у світі є синій кит.",
      base: "найбільша тварина",
      tag: "case-choice",
      options: [
        { text: "Найбільшою твариною", correct: true, why: "Correct. є takes the instrumental, and синій кит stays nominative as the subject." },
        { text: "Найбільша тварина", why: "Nominative. It would be right with a dash and no verb, but є is present here." },
        { text: "Найбільшої тварини", why: "Genitive, which would follow немає or serve as a possessive." },
        { text: "Найбільшу тварину", why: "Accusative, the case for a direct object. є does not take an object." }
      ]
    },
    {
      prompt: "Хоч жирафа і здається ______, її вага немаленька.",
      base: "струнка",
      tag: "case-choice",
      options: [
        { text: "стрункою", correct: true, why: "Correct. здаватися takes the instrumental, and the feminine ending is -ою." },
        { text: "струнка", why: "Nominative. здаватися is a linking verb and pulls the adjective into the instrumental." },
        { text: "стрункій", why: "This is the dative or locative feminine ending. The instrumental is -ою." },
        { text: "стрункої", why: "Genitive feminine, which has no role after здаватися." }
      ]
    },
    {
      prompt: "Така довжина шиї є ______ найвищого кров'яного тиску.",
      base: "причина",
      tag: "ending",
      options: [
        { text: "причиною", correct: true, why: "Correct. Feminine instrumental -ою after є." },
        { text: "причина", why: "Nominative. The subject is довжина, so the predicate noun must move to the instrumental." },
        { text: "причини", why: "Genitive singular or nominative plural, neither of which follows є." },
        { text: "причину", why: "Accusative. є never takes an accusative complement." }
      ]
    },
    {
      prompt: "Шия жирафи може бути навіть ______ ніж 2 метри.",
      base: "довша",
      tag: "case-choice",
      options: [
        { text: "довшою", correct: true, why: "Correct. бути takes the instrumental, and the comparative adjective declines like any other." },
        { text: "довша", why: "Nominative. The infinitive бути counts as a linking verb, so the instrumental is required." },
        { text: "довшій", why: "Dative or locative feminine. The instrumental is -ою." },
        { text: "довшу", why: "Accusative feminine, which бути does not govern." }
      ]
    },
    {
      prompt: "Найбільша тварина, яка живе на суші, — це ______.",
      base: "африканський слон",
      tag: "case-choice",
      options: [
        { text: "африканський слон", correct: true, why: "Correct. With це and no linking verb, both halves stay in the nominative." },
        { text: "африканським слоном", why: "This is the instrumental, right after є but wrong after це." },
        { text: "африканського слона", why: "Genitive or animate accusative, neither of which fits this pattern." },
        { text: "африканському слону", why: "Dative, the case for giving something to the elephant." }
      ]
    },
    {
      prompt: "Найвища тварина на Землі — ______.",
      base: "жирафа",
      tag: "case-choice",
      options: [
        { text: "жирафа", correct: true, why: "Correct. The dash replaces the linking verb in the present tense, so the nominative stays." },
        { text: "жирафою", why: "Instrumental. Use it when є or бути is written out, not when a dash stands in for it." },
        { text: "жирафи", why: "Genitive singular or nominative plural." },
        { text: "жирафу", why: "Accusative, which has no place in this pattern." }
      ]
    },
    {
      prompt: "Синій кит вважається ______ твариною на Землі.",
      base: "найбільша",
      tag: "agreement",
      options: [
        { text: "найбільшою", correct: true, why: "Correct. вважатися takes the instrumental, and the adjective matches твариною in gender, number and case." },
        { text: "найбільша", why: "Nominative. The adjective has to follow твариною into the instrumental." },
        { text: "найбільшим", why: "Masculine or neuter instrumental. тварина is feminine, so -ою." },
        { text: "найбільшої", why: "Genitive feminine, which does not follow вважатися." }
      ]
    },
    {
      prompt: "Африканський слон є ______ ссавцем на суші.",
      base: "найбільший",
      tag: "agreement",
      options: [
        { text: "найбільшим", correct: true, why: "Correct. ссавець is masculine, so the instrumental adjective is -им." },
        { text: "найбільший", why: "Nominative. є pulls the whole phrase into the instrumental, adjective included." },
        { text: "найбільшою", why: "Feminine instrumental. ссавець is masculine." },
        { text: "найбільшого", why: "Genitive or animate accusative masculine." }
      ]
    },
    {
      prompt: "Довга шия є ______ явищем серед тварин.",
      base: "рідкісне",
      tag: "agreement",
      options: [
        { text: "рідкісним", correct: true, why: "Correct. явище is neuter, and the neuter instrumental adjective ends in -им." },
        { text: "рідкісне", why: "Nominative neuter. After є both the noun and its adjective take the instrumental." },
        { text: "рідкісною", why: "Feminine. The adjective agrees with явищем, not with шия." },
        { text: "рідкісного", why: "Genitive neuter, which does not follow є." }
      ]
    },
    {
      prompt: "Кити і слони є ______ тваринами нашої планети.",
      base: "великі",
      tag: "agreement",
      options: [
        { text: "великими", correct: true, why: "Correct. Instrumental plural: -ими on the adjective, -ами on the noun." },
        { text: "великі", why: "Nominative plural. є requires the instrumental." },
        { text: "великих", why: "Genitive or locative plural." },
        { text: "великим", why: "Singular instrumental. The noun тваринами is plural." }
      ]
    },
    {
      prompt: "Жирафа стала ______ моєї доповіді.",
      base: "тема",
      tag: "case-choice",
      options: [
        { text: "темою", correct: true, why: "Correct. стати is a linking verb, so the predicate noun goes into the instrumental." },
        { text: "тема", why: "Nominative. стати behaves like є here and takes the instrumental." },
        { text: "теми", why: "Genitive singular or nominative plural." },
        { text: "тему", why: "Accusative. стати takes no direct object." }
      ]
    },
    {
      prompt: "Мій брат хоче стати ______.",
      base: "біолог",
      tag: "ending",
      options: [
        { text: "біологом", correct: true, why: "Correct. Masculine instrumental -ом after стати." },
        { text: "біолог", why: "Nominative, the dictionary form. Professions after стати, бути and працювати take the instrumental." },
        { text: "біолога", why: "Genitive or animate accusative." },
        { text: "біологу", why: "Dative, the case for giving something to the biologist." }
      ]
    },
    {
      prompt: "Слонихи набагато менші, ніж ______.",
      base: "самці",
      tag: "comparative",
      options: [
        { text: "самці", correct: true, why: "Correct. After ніж the second item takes the same case as the first, and слонихи is nominative." },
        { text: "самцями", why: "Instrumental. A comparison with ніж is not a linking verb and does not trigger it." },
        { text: "самців", why: "Genitive or animate accusative plural. That would work after менші за, not after ніж." },
        { text: "самцям", why: "Dative plural, which has no role in this comparison." }
      ]
    },
    {
      prompt: "Серце кита за розміром таке ж, як ______.",
      base: "автомобіль",
      tag: "comparative",
      options: [
        { text: "автомобіль", correct: true, why: "Correct. як introduces a comparison with the nominative, matching серце." },
        { text: "автомобілем", why: "Instrumental. Nothing links the two halves with a verb here, so no instrumental." },
        { text: "автомобіля", why: "Genitive, which would follow більший від автомобіля." },
        { text: "автомобілю", why: "Dative or locative, neither of which follows як in a comparison." }
      ]
    },
    {
      prompt: "Синій кит важить більше, ніж ______.",
      base: "слон",
      tag: "comparative",
      options: [
        { text: "слон", correct: true, why: "Correct. ніж keeps the nominative, matching кит." },
        { text: "слоном", why: "Instrumental, which belongs after є or бути, not after ніж." },
        { text: "слона", why: "This is right after більше за слона but not after ніж." },
        { text: "слону", why: "Dative, which does not appear in comparisons." }
      ]
    },
    {
      prompt: "Ця тварина здається ______, але вона дуже швидка.",
      base: "повільна",
      tag: "ending",
      options: [
        { text: "повільною", correct: true, why: "Correct. Feminine instrumental -ою after здаватися." },
        { text: "повільна", why: "Nominative. здаватися takes the instrumental even though English says seems slow." },
        { text: "повільній", why: "Dative or locative feminine." },
        { text: "повільної", why: "Genitive feminine." }
      ]
    },
    {
      prompt: "Синій кит — ______ тварина у світі.",
      base: "найбільша",
      tag: "case-choice",
      options: [
        { text: "найбільша", correct: true, why: "Correct. The dash stands in for the missing verb, so both halves stay nominative." },
        { text: "найбільшою", why: "Instrumental, which needs є written out: Синій кит є найбільшою твариною." },
        { text: "найбільшої", why: "Genitive feminine." },
        { text: "найбільшу", why: "Accusative feminine." }
      ]
    },
    {
      prompt: "Яке речення правильне?",
      base: "є або тире",
      tag: "rule",
      options: [
        { text: "Він є лікарем.", correct: true, why: "Correct. With є the profession goes into the instrumental." },
        { text: "Він є лікар.", why: "The linking verb is there, so the predicate noun cannot stay in the nominative." },
        { text: "Він — лікарем.", why: "With a dash and no verb the nominative is required: Він — лікар." },
        { text: "Він є лікаря.", why: "Genitive, which є never governs." }
      ]
    },
    {
      prompt: "У якому відмінку стоїть присудок після дієслів є, стати, здаватися?",
      base: "правило",
      tag: "rule",
      options: [
        { text: "В орудному", correct: true, why: "Correct. These linking verbs all take the instrumental, while the subject stays nominative." },
        { text: "У називному", why: "The nominative belongs to the subject, and to sentences built with це or a dash instead of a verb." },
        { text: "У родовому", why: "The genitive follows немає, багато and prepositions like біля." },
        { text: "У знахідному", why: "The accusative is for direct objects, and linking verbs do not take one." }
      ]
    },
    {
      prompt: "Яке речення правильне?",
      base: "підсумкове питання",
      tag: "rule",
      options: [
        { text: "Найвищою твариною на Землі є жирафа.", correct: true, why: "Correct. є takes the instrumental for найвищою твариною, and жирафа stays nominative as the subject." },
        { text: "Найвища тварина на Землі є жирафа.", why: "The predicate phrase is still nominative. With є it has to be найвищою твариною." },
        { text: "Найвищою твариною на Землі є жирафою.", why: "Both halves are in the instrumental. Only the predicate takes it, and the subject stays nominative." },
        { text: "Найвищою твариною на Землі — жирафа.", why: "With a dash and no verb, both halves stay nominative: Найвища тварина на Землі — жирафа." }
      ]
    }
  ]
});
