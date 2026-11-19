import { sim14Lines } from "@/lib/dsh/texts-14";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim14: DshSimulation = {
  id: "sim-14",
  number: 14,
  slug: "lernen-auf-distanz",
  title: "Lernen auf Distanz",
  subtitle: "Digitale Bildung an Hochschulen",
  topic: "Digitale Bildung",
  minutes: 90,
  text: { lines: sim14Lines, wordCount: 857 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 14",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s14-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel.",
      items: [
        {
          id: "s14-q1-kommilitone",
          prompt: "Person, die an derselben Hochschule studiert wie man selbst",
          answer: "der Kommilitone",
          example: true,
        },
        {
          id: "s14-q1-videokonferenz",
          prompt:
            "Abbildung: Bildschirm mit mehreren Personen, die über das Internet miteinander sprechen",
          answer: "die Videokonferenz",
        },
        {
          id: "s14-q1-mitschrift",
          prompt: "Notizen, die man während einer Vorlesung oder eines Vortrags schreibt",
          answer: "die Mitschrift",
        },
        {
          id: "s14-q1-nebentaetigkeit",
          prompt:
            "Arbeit, die man zusätzlich zum Studium ausübt, um Geld zu verdienen",
          answer: "die Nebentätigkeit",
        },
      ],
    },

    {
      kind: "open",
      id: "s14-q2",
      number: "2",
      skill: "verstehen",
      points: 2,
      prompt:
        "Beschreiben Sie, wie Lehrende die Daten einer Lernplattform nutzen können und welche Befürchtung Kritiker damit verbinden.",
      minWords: 35,
      criteria: [
        {
          id: "c1",
          label:
            "Anhand der Daten erkennen die Lehrenden, bei welchen Aufgaben viele Studierende Schwierigkeiten haben, und können die Materialien gezielt verbessern.",
          keywords: ["schwierigkeiten", "aufgaben", "nachbessern", "materialien", "verbessern"],
        },
        {
          id: "c2",
          label:
            "Kritiker fürchten, dass die Daten zur Kontrolle der Studierenden missbraucht werden könnten.",
          keywords: ["kontrolle", "missbrauch", "datenschutz", "überwachung"],
        },
      ],
      sampleAnswer:
        "Die Plattform wertet automatisch aus, wer welche Inhalte aufgerufen hat. So sehen die Lehrenden, an welchen Stellen viele Studierende Schwierigkeiten haben, und können ihre Materialien gezielt nachbessern. Kritiker befürchten dagegen, dass die gesammelten Daten zur Kontrolle der Studierenden missbraucht werden könnten; Datenschutzbeauftragte verlangen deshalb klare Regeln.",
    },

    {
      kind: "open",
      id: "s14-q3",
      number: "3",
      skill: "verstehen",
      points: 3,
      prompt:
        "Nennen Sie die Gründe, aus denen viele Studierende digitale Angebote als Gewinn an Flexibilität empfinden.",
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label:
            "Aufzeichnungen lassen sich zu beliebiger Zeit ansehen, anhalten und wiederholen, sodass sich das Studium besser mit Nebentätigkeit oder Kinderbetreuung vereinbaren lässt.",
          keywords: ["beliebiger zeit", "anhalten", "wiederholen", "nebentätigkeit", "kinderbetreuung", "vereinbaren"],
        },
        {
          id: "c2",
          label:
            "Wer weit entfernt wohnt, spart durch Übertragung per Videokonferenz einen langen täglichen Weg.",
          keywords: ["weit entfernt", "täglicher weg", "zwei stunden", "videokonferenz", "übertragung"],
        },
        {
          id: "c3",
          label:
            "Studierende mit Behinderung müssen nicht jede Veranstaltung vor Ort besuchen.",
          keywords: ["behinderung", "vor ort", "veranstaltung", "besuchen"],
        },
      ],
      sampleAnswer:
        "Die Aufzeichnungen kann man zu jeder beliebigen Zeit ansehen, anhalten und wiederholen; dadurch lässt sich das Studium besser mit einer Nebentätigkeit oder der Betreuung von Kindern vereinbaren. Wer weit vom Hochschulort entfernt wohnt, spart den täglichen Weg von bis zu zwei Stunden, wenn Seminare als Videokonferenz übertragen werden. Auch Studierende mit Behinderung profitieren, weil sie nicht jede Veranstaltung vor Ort besuchen müssen.",
    },

    {
      kind: "open",
      id: "s14-q4",
      number: "4",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Grafik zeigt Ergebnisse der im Text erwähnten Befragung unter rund 2.000 Studierenden. Welcher der vier Balken beschreibt einen Vorteil, welche beschreiben Probleme der digitalen Lehre? Erklären Sie außerdem, wie die Hochschule bzw. der Studiengang auf die Probleme reagiert hat und mit welchem Ergebnis.",
      chart: {
        kind: "bars",
        caption: "Ergebnisse einer Befragung unter rund 2.000 Studierenden (Angaben in Prozent)",
        unit: "Prozent",
        bars: [
          {
            label: "Bessere Vereinbarkeit von Studium und Beruf/Familie",
            value: 72,
          },
          { label: "Zeitweise Isolation", value: 41 },
          { label: "Keine stabile Internetverbindung", value: 18 },
          { label: "Kein geeignetes Gerät", value: 12 },
        ],
      },
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label:
            "Der Balken mit 72 Prozent (bessere Vereinbarkeit) ist der Vorteil; die Balken 41, 18 und 12 Prozent (Isolation, Internet, Gerät) sind Probleme.",
          keywords: ["72", "vereinbarkeit", "vorteil", "isolation", "probleme", "41", "18", "12"],
        },
        {
          id: "c2",
          label:
            "Gegen die technische Ungleichheit verleiht die Hochschule rund 400 Laptops und mobile Router und lässt Lernräume geöffnet.",
          keywords: ["laptops", "router", "lernräume", "verleihprogramm", "400"],
        },
        {
          id: "c3",
          label:
            "Gegen die Isolation hat ein Studiengang virtuelle Lerngruppen mit fünf bis sechs Personen eingerichtet.",
          keywords: ["lerngruppen", "virtuell", "fünf bis sechs", "isolation"],
        },
        {
          id: "c4",
          label:
            "Ergebnis: Nach einem Semester fühlten sich nur noch rund 20 Prozent isoliert; die technischen Unterschiede wurden nur abgemildert, nicht beseitigt.",
          keywords: ["20 prozent", "abgemildert", "nicht beseitigt", "verschwinden nicht"],
        },
      ],
      sampleAnswer:
        "Der Balken mit 72 Prozent beschreibt einen Vorteil: die bessere Vereinbarkeit des Studiums mit Beruf und Familie. Die Balken mit 41 Prozent (Isolation), 18 Prozent (keine stabile Internetverbindung) und 12 Prozent (kein geeignetes Gerät) beschreiben Probleme. Gegen die technische Ungleichheit verleiht die Hochschule rund 400 Laptops und mobile Router für ein Semester und hält Lernräume offen. Gegen die Isolation wurden virtuelle Lerngruppen mit fünf bis sechs Personen eingerichtet; danach fühlten sich nur noch rund 20 Prozent isoliert. Die technischen Unterschiede verschwinden dadurch aber nicht, sie werden nur abgemildert.",
    },

    {
      kind: "open",
      id: "s14-q5",
      number: "5",
      skill: "verstehen",
      points: 3,
      prompt:
        "Erklären Sie den Begriff „Flipped Classroom“ (umgekehrter Unterricht) und nennen Sie die im Text genannten Ergebnisse eines Pilotprojekts.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Die Studierenden erarbeiten sich den Stoff vorab selbstständig mit kurzen Videos von zehn bis fünfzehn Minuten.",
          keywords: ["vorab", "selbstständig", "videos", "zehn bis fünfzehn", "selbststudium"],
        },
        {
          id: "c2",
          label:
            "Die Präsenzzeit dient dazu, Fragen zu klären und Aufgaben gemeinsam zu lösen.",
          keywords: ["präsenzzeit", "fragen", "gemeinsam", "aufgaben"],
        },
        {
          id: "c3",
          label:
            "Im Pilotprojekt der Ingenieurwissenschaften verbesserte sich die Klausurnote um etwa eine halbe Note, und die Wiederholerquote sank von 30 auf 22 Prozent.",
          keywords: ["halbe note", "30 auf 22", "wiederholerquote", "ingenieurwissenschaften"],
        },
      ],
      sampleAnswer:
        "Beim Flipped Classroom erarbeiten sich die Studierenden den Stoff zu Hause selbstständig anhand kurzer Videos von zehn bis fünfzehn Minuten. Die Präsenzzeit wird genutzt, um Fragen zu klären und Aufgaben gemeinsam zu lösen. In einem Pilotprojekt der Ingenieurwissenschaften verbesserte sich die Durchschnittsnote in der Klausur um etwa eine halbe Note, und die Wiederholerquote sank von 30 auf 22 Prozent.",
    },

    {
      kind: "open",
      id: "s14-q6",
      number: "6",
      skill: "verstehen",
      points: 3,
      prompt:
        "Erklären Sie, warum rein asynchrone Kurse besonders für Studierende im ersten Semester ein Problem sein können, und beschreiben Sie, wie manche Fachbereiche gegensteuern.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Ohne feste Termine fällt es schwer, kontinuierlich zu lernen; die Studierenden müssen sich selbst organisieren.",
          keywords: ["feste termine", "selbstorganisation", "selbstständigkeit", "kontinuierlich"],
        },
        {
          id: "c2",
          label:
            "Erstsemester haben noch keine Lernstrategien entwickelt; die Bearbeitungsquote sank von rund 85 auf etwa 55 Prozent.",
          keywords: ["lernstrategien", "85", "55", "erstsemester", "bearbeitungsquote"],
        },
        {
          id: "c3",
          label:
            "Manche Fachbereiche führen wöchentliche Zwischentests und kurze Rückmeldungen ein, um das Lernen in kleine Abschnitte zu gliedern.",
          keywords: ["zwischentests", "rückmeldungen", "wöchentlich", "abschnitte"],
        },
      ],
      sampleAnswer:
        "In rein asynchronen Kursen gibt es keine festen Termine, deshalb müssen die Studierenden selbst für kontinuierliches Lernen sorgen. Besonders Erstsemester haben noch keine Lernstrategien entwickelt; die Bearbeitungsquote der Übungen sank von rund 85 auf etwa 55 Prozent. Manche Fachbereiche setzen deshalb wöchentliche Zwischentests und kurze Rückmeldungen ein, die das Lernen in kleine, überschaubare Abschnitte gliedern.",
    },

    {
      kind: "open",
      id: "s14-q7a",
      number: "7a",
      skill: "verstehen",
      points: 1,
      prompt:
        "Wie viele Laptops und mobile Router verleiht die Hochschule an ihre Studierenden?",
      minWords: 3,
      criteria: [
        {
          id: "c1",
          label: "Rund 400.",
          numeric: [400, 400],
        },
      ],
      sampleAnswer: "Rund 400 Laptops und mobile Router.",
    },

    {
      kind: "open",
      id: "s14-q7b",
      number: "7b",
      skill: "verstehen",
      points: 2,
      prompt:
        "Warum kehren viele Hochschulen für Abschlussprüfungen zur Präsenz zurück?",
      minWords: 30,
      criteria: [
        {
          id: "c1",
          label:
            "Online-Klausuren lassen sich nur mit großem Aufwand gegen Täuschung absichern.",
          keywords: ["täuschung", "aufwand", "absichern", "abschreiben"],
        },
        {
          id: "c2",
          label:
            "Die nötige Kameraüberwachung berührt Datenschutz und Privatsphäre und benachteiligt Studierende mit schlechter Internetverbindung.",
          keywords: ["kameraüberwachung", "datenschutz", "privatsphäre", "internetverbindung"],
        },
      ],
      sampleAnswer:
        "Online-Klausuren lassen sich nur mit großem Aufwand gegen Täuschung absichern. Die dafür nötige Kameraüberwachung berührt Datenschutz und Privatsphäre und benachteiligt außerdem Studierende mit schlechter Internetverbindung. Deshalb kehren viele Hochschulen für Abschlussprüfungen zur Präsenz zurück.",
    },

    {
      kind: "open",
      id: "s14-q8",
      number: "8",
      skill: "transfer",
      points: 5,
      prompt:
        "Eine Fachhochschule in einer ländlichen Region möchte ihre Lehre teilweise digital anbieten. Viele ihrer Studierenden wohnen weit entfernt, einige haben nur eine schwache Internetverbindung, und die Dozierenden befürchten, dass sich Erstsemester allein gelassen fühlen. Erklären Sie möglichst genau, auf welche Weise die im Text dargestellten Erfahrungen und Konzepte der Fachhochschule nützlich sein können.",
      minWords: 75,
      criteria: [
        {
          id: "c1",
          label:
            "Aufgezeichnete Vorlesungen und übertragene Seminare ersparen den weit entfernt Wohnenden lange Wege.",
          keywords: ["aufzeichnungen", "übertragung", "wege", "entfernt", "videokonferenz"],
        },
        {
          id: "c2",
          label:
            "Gegen die schwache Internetverbindung hilft ein Verleih von Laptops und mobilen Routern sowie das Offenhalten von Lernräumen auf dem Campus.",
          keywords: ["laptops", "router", "lernräume", "verleih", "campus"],
        },
        {
          id: "c3",
          label:
            "Gegen die Isolation können virtuelle Lerngruppen mit fünf bis sechs Personen eingerichtet werden, die sich wöchentlich treffen.",
          keywords: ["lerngruppen", "fünf bis sechs", "isolation", "wöchentlich"],
        },
        {
          id: "c4",
          label:
            "Gegen mangelnde Selbstorganisation bei Erstsemestern helfen wöchentliche Zwischentests und kurze Rückmeldungen.",
          keywords: ["zwischentests", "rückmeldungen", "selbstorganisation", "erstsemester"],
        },
        {
          id: "c5",
          label:
            "Didaktisch bietet sich ein Mischmodell (Blended Learning) bzw. Flipped Classroom an: Grundlagen online mit kurzen Videos, Fragen, Diskussionen und Prüfungen vor Ort.",
          keywords: ["blended learning", "mischmodell", "flipped classroom", "präsenz", "videos", "vor ort"],
        },
      ],
      sampleAnswer:
        "Aufgezeichnete Vorlesungen und als Videokonferenz übertragene Seminare ersparen den weit entfernt wohnenden Studierenden die langen täglichen Wege. Gegen die schwache Internetverbindung kann die Hochschule wie im Beispiel Laptops und mobile Router verleihen und Lernräume auf dem Campus geöffnet halten. Damit sich Erstsemester nicht isoliert fühlen, können virtuelle Lerngruppen mit fünf bis sechs Personen eingerichtet werden, die sich einmal pro Woche treffen. Gegen mangelnde Selbstorganisation helfen wöchentliche Zwischentests und kurze Rückmeldungen. Didaktisch bietet sich ein Mischmodell an: Grundlagen werden online mit kurzen Videos erarbeitet, während Fragen, Diskussionen und Prüfungen vor Ort stattfinden.",
    },

    {
      kind: "truefalse",
      id: "s14-q9",
      number: "9",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind.",
      example: {
        text: "An der genannten Universität werden alle Vorlesungen aufgezeichnet.",
        correct: false,
        justification:
          "Im Text: rund 60 Prozent aller Vorlesungen werden aufgezeichnet, nicht alle.",
      },
      statements: [
        {
          id: "s14-q9-1",
          text:
            "In rein asynchronen Kursen sank die Bearbeitungsquote der Übungsaufgaben von rund 85 auf etwa 55 Prozent.",
          correct: true,
          justification: "Im vierten Absatz genannt. (1 P)",
        },
        {
          id: "s14-q9-2",
          text:
            "Das Verleihprogramm der Hochschule hat die technischen Unterschiede zwischen den Studierenden beseitigt.",
          correct: false,
          justification:
            "Die Unterschiede verschwinden nicht, sie werden nur abgemildert. (1 P)",
        },
        {
          id: "s14-q9-3",
          text:
            "In den virtuellen Lerngruppen fühlten sich nach einem Semester nur noch rund 20 Prozent der Studierenden isoliert.",
          correct: true,
          justification: "Im sechsten Absatz genannt. (1 P)",
        },
        {
          id: "s14-q9-4",
          text:
            "Im Pilotprojekt der Ingenieurwissenschaften stieg die Wiederholerquote von 22 auf 30 Prozent.",
          correct: false,
          justification: "Zahlendreher: Die Quote sank von 30 auf 22 Prozent. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s14-sa",
      label: "A",
      points: 3,
      type: "passiversatz",
      instruction: REWRITE,
      prompt:
        "Laborpraktika und künstlerische Fächer schließlich sind nur begrenzt digital vermittelbar, da sich praktische Handgriffe und Material nicht über den Bildschirm erlernen lassen.",
      highlight:
        "da sich praktische Handgriffe und Material nicht über den Bildschirm erlernen lassen",
      template: {
        before:
          "Laborpraktika und künstlerische Fächer schließlich sind nur begrenzt digital vermittelbar, da ",
        after: ".",
      },
      solutions: [
        "praktische Handgriffe und Material nicht über den Bildschirm erlernbar sind",
        "praktische Handgriffe und Material nicht über den Bildschirm erlernt werden können",
      ],
      explanation:
        "« sich + lassen + infinitif » est un substitut de passif. On le rend par l'adjectif en « -bar » (« erlernbar sind ») ou par le passif avec « können » (« erlernt werden können »). Le verbe reste en fin de subordonnée introduite par « da ».",
      modelAnswer:
        "Laborpraktika und künstlerische Fächer schließlich sind nur begrenzt digital vermittelbar, da praktische Handgriffe und Material nicht über den Bildschirm erlernbar sind.",
    },
    {
      id: "s14-sb",
      label: "B",
      points: 2,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt:
        "Eine Vorlesung von 90 Minuten, die lediglich ins Netz gestellt wird, überfordert die Aufmerksamkeit der meisten Studierenden.",
      highlight: "die lediglich ins Netz gestellt wird",
      template: {
        before: "Eine ",
        after:
          " Vorlesung von 90 Minuten überfordert die Aufmerksamkeit der meisten Studierenden.",
      },
      solutions: ["lediglich ins Netz gestellte"],
      explanation:
        "La relative « die … gestellt wird » devient un attribut participial au participe II placé devant le nom : « lediglich ins Netz gestellte ». L'adjectif prend la terminaison faible « -e » après l'article indéfini « Eine » (nominatif singulier féminin).",
      modelAnswer:
        "Eine lediglich ins Netz gestellte Vorlesung von 90 Minuten überfordert die Aufmerksamkeit der meisten Studierenden.",
    },
    {
      id: "s14-sc",
      label: "C",
      points: 1,
      type: "bezug",
      instruction: "Antworten Sie in einem vollständigen Satz.",
      prompt:
        "„Die Unterschiede verschwinden dadurch zwar nicht, werden aber abgemildert.“ Worauf bezieht sich „dadurch“?",
      criteria: [
        {
          id: "c1",
          label:
            "„Dadurch“ bezieht sich auf das Verleihprogramm der Hochschule (Laptops und mobile Router) und die geöffneten Lernräume auf dem Campus.",
          keywords: ["verleihprogramm", "laptops", "router", "lernräume", "campus"],
        },
      ],
      explanation:
        "« Dadurch » reprend les mesures mentionnées juste avant : le prêt de 400 ordinateurs portables et de routeurs mobiles, ainsi que l'ouverture des salles d'étude sur le campus. Ces mesures n'éliminent pas les différences, elles les atténuent seulement.",
      modelAnswer:
        "„Dadurch“ bezieht sich auf das Verleihprogramm mit Laptops und mobilen Routern und auf die geöffneten Lernräume auf dem Campus.",
    },
    {
      id: "s14-sd",
      label: "D",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Wer eine Vorlesung versäumte, musste sich die Mitschrift eines Kommilitonen besorgen.",
      highlight: "Wer eine Vorlesung versäumte",
      template: {
        before: "",
        after: " musste man sich die Mitschrift eines Kommilitonen besorgen.",
      },
      solutions: [
        "Bei einem Versäumnis einer Vorlesung",
        "Im Falle eines Versäumnisses einer Vorlesung",
        "Beim Versäumen einer Vorlesung",
      ],
      explanation:
        "Le pronom « wer … » avec le verbe au passé se nominalise en « bei / im Falle + génitif » : « eines Versäumnisses / Versäumens einer Vorlesung ». Le sujet indéfini devient « man » dans la principale.",
      modelAnswer:
        "Bei einem Versäumnis einer Vorlesung musste man sich die Mitschrift eines Kommilitonen besorgen.",
    },
    {
      id: "s14-se",
      label: "E",
      points: 3,
      type: "konnektor",
      instruction: REWRITE,
      prompt:
        "Kritiker befürchten allerdings, dass die gesammelten Daten zur Kontrolle der Studierenden missbraucht werden könnten, weshalb Datenschutzbeauftragte klare Regeln verlangen.",
      highlight: "weshalb Datenschutzbeauftragte klare Regeln verlangen",
      template: {
        before:
          "Kritiker befürchten allerdings, dass die gesammelten Daten zur Kontrolle der Studierenden missbraucht werden könnten, ",
        after: ".",
      },
      solutions: [
        "und deshalb verlangen Datenschutzbeauftragte klare Regeln",
        "daher verlangen Datenschutzbeauftragte klare Regeln",
        "und aus diesem Grund verlangen Datenschutzbeauftragte klare Regeln",
      ],
      explanation:
        "La subordonnée causale « weshalb … » devient un adverbe de liaison coordonné : « deshalb / daher / aus diesem Grund ». Dans une coordination, le verbe se place en deuxième position (« verlangen Datenschutzbeauftragte … »).",
      modelAnswer:
        "Kritiker befürchten allerdings, dass die gesammelten Daten zur Kontrolle der Studierenden missbraucht werden könnten, deshalb verlangen Datenschutzbeauftragte klare Regeln.",
    },
    {
      id: "s14-sf",
      label: "F",
      points: 1,
      type: "konjunktiv",
      instruction: "Beantworten Sie die Frage in ein bis zwei vollständigen Sätzen.",
      prompt:
        "„Künstliche Intelligenz könnte zusätzlich individuelle Übungsaufgaben erzeugen und Rückmeldungen geben, würde jedoch neue Fragen der Fairness aufwerfen.“ Warum stehen hier „könnte“ und „würde“ im Konjunktiv II?",
      criteria: [
        {
          id: "c1",
          label:
            "Es geht um eine Möglichkeit in der Zukunft, um eine Hypothese bzw. Prognose, nicht um eine bereits gegebene Tatsache.",
          keywords: ["möglichkeit", "hypothese", "prognose", "zukunft", "konjunktiv", "nicht wirklich"],
        },
      ],
      explanation:
        "Le Konjunktiv II (« könnte », « würde ») marque une éventualité future et hypothétique : l'usage de l'IA dans l'enseignement est envisagé comme une possibilité, pas comme un fait avéré. C'est aussi une prise de position prudente face à une prévision.",
      modelAnswer:
        "Der Konjunktiv II drückt aus, dass es sich um eine mögliche Entwicklung in der Zukunft handelt, also um eine Hypothese oder Prognose und nicht um eine bereits verwirklichte Tatsache.",
    },
    {
      id: "s14-sg",
      label: "G",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Obwohl die Aufzeichnungen jederzeit abrufbar sind, besuchen viele Studierende weiterhin die Präsenztermine.",
      highlight: "Obwohl die Aufzeichnungen jederzeit abrufbar sind",
      template: { before: "", after: " besuchen viele Studierende weiterhin die Präsenztermine." },
      solutions: [
        "Trotz der jederzeitigen Abrufbarkeit der Aufzeichnungen",
        "Trotz der jederzeit möglichen Abrufbarkeit der Aufzeichnungen",
      ],
      explanation:
        "La concession « obwohl … » devient « trotz + génitif ». L'adjectif « abrufbar » se nominalise en « Abrufbarkeit » (féminin) ; le génitif est « der jederzeitigen Abrufbarkeit der Aufzeichnungen ». La principale garde l'inversion après la virgule.",
      modelAnswer:
        "Trotz der jederzeitigen Abrufbarkeit der Aufzeichnungen besuchen viele Studierende weiterhin die Präsenztermine.",
    },
  ],
};
