import { sim12Lines } from "@/lib/dsh/texts-12";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim12: DshSimulation = {
  id: "sim-12",
  number: 12,
  slug: "waelder-fuer-ein-waermeres-klima",
  title: "Wälder für ein wärmeres Klima",
  subtitle: "Forstwirtschaft · Anpassung unter Unsicherheit",
  topic: "Forstwirtschaft",
  minutes: 90,
  text: { lines: sim12Lines, wordCount: 905 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 12",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s12-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel.",
      items: [
        {
          id: "s12-q1-borkenkaefer",
          prompt:
            "wenige Millimeter großes Insekt, das sich unter der Rinde von Bäumen vermehrt und diese schädigen kann",
          answer: "der Borkenkäfer",
          example: true,
        },
        {
          id: "s12-q1-pfahlwurzel",
          prompt:
            "Abbildung: tief reichende Hauptwurzel eines Baumes, die bis in untere Bodenschichten vordringt",
          answer: "die Pfahlwurzel",
        },
        {
          id: "s12-q1-naturverjuengung",
          prompt:
            "Erneuerung eines Waldes aus den Samen bereits vorhandener Bäume, ohne dass gepflanzt wird",
          answer: "die Naturverjüngung",
        },
        {
          id: "s12-q1-wildverbiss",
          prompt:
            "Verhindern, dass Rehe oder Hirsche junge Triebe und Knospen von Bäumen abfressen, ist das Ziel eines Schutzes vor …",
          answer: "der Wildverbiss",
          accepted: ["Wildverbiss"],
        },
      ],
    },

    {
      kind: "open",
      id: "s12-q2",
      number: "2",
      skill: "verstehen",
      points: 3,
      prompt: "Erklären Sie den Begriff „Resilienz“ am Beispiel eines Mischwaldes.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Resilienz ist die Fähigkeit eines Ökosystems, nach einer Störung wie Dürre oder Sturm seine Funktionen zu behalten oder rasch wiederzuerlangen.",
          keywords: ["resilienz", "fähigkeit", "funktionen", "störung", "wiederzuerlangen"],
        },
        {
          id: "c2",
          label:
            "Beispiel: Wurzeln unterschiedlicher Tiefe erschließen verschiedene Bodenschichten und überbrücken Trockenperioden besser.",
          keywords: ["wurzeln", "bodenschichten", "trocken", "unterschiedlicher tiefe"],
        },
        {
          id: "c3",
          label:
            "Beispiel: Ein auf eine Baumart spezialisierter Schädling kann nicht den gesamten Bestand vernichten.",
          keywords: ["schädling", "eine baumart", "gesamten bestand", "spezialisiert"],
        },
      ],
      sampleAnswer:
        "Resilienz bezeichnet die Fähigkeit eines Ökosystems, nach einer Störung wie Dürre oder Sturm seine Funktionen zu behalten oder schnell wiederzuerlangen. Ein Mischwald ist dafür ein Beispiel: Wurzeln unterschiedlicher Tiefe erschließen verschiedene Bodenschichten, sodass Trockenperioden besser überbrückt werden. Außerdem kann ein Schädling, der nur eine Baumart befällt, nicht den ganzen Bestand vernichten.",
    },

    {
      kind: "open",
      id: "s12-q3",
      number: "3",
      skill: "verstehen",
      points: 3,
      prompt:
        "Nennen Sie drei Gründe, weshalb Fichten-Reinbestände unter dem Klimawandel besonders stark leiden.",
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label: "Die Fichte bildet nur flache Wurzeln aus.",
          keywords: ["flache wurzeln", "flach", "wurzeln"],
        },
        {
          id: "c2",
          label: "Sie kommt mit Trockenheit schlecht zurecht.",
          keywords: ["trockenheit", "trocken", "dürre"],
        },
        {
          id: "c3",
          label:
            "Im Reinbestand finden Schädlinge wie der Borkenkäfer ein ideales Nahrungsangebot und vermehren sich in warmen Sommern stark.",
          keywords: ["schädlinge", "borkenkäfer", "reinbestand", "nahrungsangebot", "generationen"],
        },
      ],
      sampleAnswer:
        "Die Fichte hat nur flache Wurzeln und kommt deshalb mit Trockenheit schlecht zurecht. Im Reinbestand bietet sie außerdem Schädlingen wie dem Borkenkäfer ein ideales Nahrungsangebot; in warmen Sommern können mehrere Generationen mit Tausenden Nachkommen entstehen.",
    },

    {
      kind: "open",
      id: "s12-q4",
      number: "4",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Grafik zeigt zwei Waldflächen A und B in der Draufsicht nach einem Jahr mit starkem Borkenkäferbefall; rot gekennzeichnete Bäume sind befallene Fichten. Auf Fläche A sind fast alle Bäume rot, auf Fläche B nur einzelne, zwischen ihnen stehen weitere Baumarten. Erklären Sie anhand der Grafik und des Textes, warum der Schaden auf Fläche A so viel größer ist als auf Fläche B, und nennen Sie einen weiteren Vorteil der Fläche B bei Trockenheit.",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label: "Fläche A ist ein Reinbestand mit ausschließlich Fichten.",
          keywords: ["fläche a", "reinbestand", "nur fichten", "eine baumart"],
        },
        {
          id: "c2",
          label:
            "Der auf die Fichte spezialisierte Borkenkäfer findet überall Nahrung und breitet sich aus, sodass fast der ganze Bestand verloren geht.",
          keywords: ["überall nahrung", "ausbreiten", "fast alle", "gesamte bestand", "vernichten"],
        },
        {
          id: "c3",
          label:
            "Auf Fläche B können nur die Fichten befallen werden, die anderen Baumarten bleiben verschont.",
          keywords: ["fläche b", "andere arten", "übrigen arten", "verschont", "nur die fichten"],
        },
        {
          id: "c4",
          label:
            "Weiterer Vorteil bei Trockenheit: Wurzeln unterschiedlicher Tiefe erschließen verschiedene Bodenschichten; die Verluste sind etwa ein Drittel geringer.",
          keywords: ["wurzeln", "unterschiedlich tief", "bodenschichten", "ein drittel"],
        },
      ],
      sampleAnswer:
        "Fläche A ist ein Reinbestand, in dem alle Bäume Fichten sind. Der Borkenkäfer findet dort überall Nahrung und kann sich von Baum zu Baum ausbreiten, sodass fast der gesamte Bestand verloren geht. Auf Fläche B stehen mehrere Baumarten; nur die Fichten sind befallbar, die übrigen Arten bleiben unberührt. Bei Trockenheit kommt hinzu, dass die Wurzeln der verschiedenen Arten unterschiedlich tief reichen und damit verschiedene Bodenschichten erschließen; die Verluste sind deshalb nach einem Dürrejahr etwa ein Drittel geringer.",
    },

    {
      kind: "open",
      id: "s12-q5a",
      number: "5a",
      skill: "verstehen",
      points: 1,
      prompt:
        "Wie hoch war der Anteil der Fichten, die in dem beschriebenen Revier innerhalb von vier Jahren gefällt werden mussten?",
      minWords: 3,
      criteria: [
        {
          id: "c1",
          label: "Rund 60 Prozent.",
          numeric: [58, 62],
        },
      ],
      sampleAnswer: "Rund 60 Prozent der Fichten mussten gefällt werden.",
    },

    {
      kind: "open",
      id: "s12-q5b",
      number: "5b",
      skill: "verstehen",
      points: 2,
      prompt:
        "Nennen Sie einen Vorteil der Naturverjüngung und eine Voraussetzung dafür, dass sie funktioniert.",
      minWords: 30,
      criteria: [
        {
          id: "c1",
          label:
            "Vorteil: Sie spart die Pflanzkosten von 8.000 bis 15.000 Euro pro Hektar, und die jungen Bäume bilden von Anfang an ein standortangepasstes Wurzelwerk.",
          keywords: ["pflanzkosten", "kosten", "wurzelwerk", "angepasst"],
        },
        {
          id: "c2",
          label:
            "Voraussetzung: Rehe und Hirsche dürfen die Keimlinge nicht fressen; daher muss die Jagd verstärkt oder die Fläche eingezäunt werden.",
          keywords: ["wildverbiss", "rehe", "hirsche", "jagd", "eingezäunt"],
        },
      ],
      sampleAnswer:
        "Die Naturverjüngung spart die Pflanzkosten, die bei einer Neupflanzung zwischen 8.000 und 15.000 Euro pro Hektar liegen, und die jungen Bäume entwickeln von Anfang an ein an den Standort angepasstes Wurzelwerk. Voraussetzung ist, dass Rehe und Hirsche die Keimlinge nicht abfressen; dazu muss die Jagd verstärkt oder die Fläche eingezäunt werden.",
    },

    {
      kind: "open",
      id: "s12-q6",
      number: "6",
      skill: "verstehen",
      points: 3,
      prompt:
        "Beschreiben Sie einen Zielkonflikt beim Umgang mit Totholz und erklären Sie, warum absterbende Wälder dem Klima sogar schaden können.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Belässt man Totholz im Wald, fördert man die Artenvielfalt, verzichtet aber auf Erlöse.",
          keywords: ["totholz", "artenvielfalt", "erlöse", "belässt"],
        },
        {
          id: "c2",
          label:
            "Räumt man rasch auf, sinkt das Brandrisiko, doch Boden und Waldinnenklima werden gestört.",
          keywords: ["brandrisiko", "boden", "waldinnenklima", "aufräumt"],
        },
        {
          id: "c3",
          label:
            "Absterbende Wälder können zur Kohlenstoffquelle werden, weil das Totholz zersetzt wird und der gespeicherte Kohlenstoff freigesetzt wird.",
          keywords: ["kohlenstoffquelle", "kohlenstoffsenke", "zersetzung", "freigesetzt"],
        },
      ],
      sampleAnswer:
        "Wer Totholz im Wald belässt, fördert die Artenvielfalt, verzichtet aber auf Erlöse; wer rasch aufräumt, senkt das Brandrisiko, stört aber Boden und Waldinnenklima. Wenn Bestände großflächig absterben, wird das Totholz zersetzt und der gespeicherte Kohlenstoff wieder freigesetzt; der Wald kann dadurch von einer Kohlenstoffsenke zu einer Kohlenstoffquelle werden.",
    },

    {
      kind: "open",
      id: "s12-q7",
      number: "7",
      skill: "verstehen",
      points: 2,
      prompt:
        "Nennen Sie zwei Gründe, weshalb sich die Wahl zukunftsfähiger Baumarten nicht sicher treffen lässt.",
      minWords: 30,
      criteria: [
        {
          id: "c1",
          label:
            "Die Klimaentwicklung ist ungewiss: je nach Szenario 1,5 bis 3 Grad Erwärmung, auch die Niederschlagsverteilung ist unsicher.",
          keywords: ["klima", "niederschlag", "erwärmung", "ungewiss", "szenario"],
        },
        {
          id: "c2",
          label:
            "Die Wechselwirkungen eingeführter Arten mit heimischen Insekten und Pilzen sind kaum bekannt; Frost, lange Standzeiten oder die Buche zeigen weitere Risiken.",
          keywords: ["wechselwirkungen", "frost", "buche", "150 jahre", "eingeführte arten"],
        },
      ],
      sampleAnswer:
        "Zum einen ist die künftige Klimaentwicklung ungewiss: Die Modelle sagen je nach Szenario 1,5 bis 3 Grad Erwärmung voraus, und auch die Niederschläge sind unsicher. Zum anderen sind die Wechselwirkungen eingeführter Arten mit heimischen Insekten und Pilzen kaum bekannt; später Frost kann Bäume treffen, und selbst die Buche litt in den Dürrejahren erheblich.",
    },

    {
      kind: "open",
      id: "s12-q8",
      number: "8",
      skill: "transfer",
      points: 5,
      prompt:
        "Eine Frau erbt eine Waldparzelle von acht Hektar, auf der die Fichten abgestorben sind. Sie besitzt kaum Rücklagen. Erklären Sie möglichst genau, welche Wege ihr nach den Informationen des Textes für den Wiederaufbau offenstehen und worauf sie dabei achten müsste.",
      minWords: 70,
      criteria: [
        {
          id: "c1",
          label:
            "Ein Förderprogramm übernimmt einen Teil der Kosten, sofern Kriterien wie ein Mindestanteil standortgerechter Laubbäume und der Verzicht auf Kahlschlag erfüllt werden.",
          keywords: ["förderprogramm", "kriterien", "mindestanteil", "laubbäume", "kahlschlag"],
        },
        {
          id: "c2",
          label:
            "Hürde: Das Geld wird oft erst nach Abschluss der Maßnahmen ausgezahlt, und die Anträge sind aufwendig.",
          keywords: ["auszahlung", "antrag", "nach abschluss", "vorstrecken", "aufwendig"],
        },
        {
          id: "c3",
          label:
            "Eine Forstbetriebsgemeinschaft bündelt Beratung, Pflanzgut und Verwaltung und senkt so die Hürden.",
          keywords: ["forstbetriebsgemeinschaft", "beratung", "pflanzgut", "verwaltung"],
        },
        {
          id: "c4",
          label: "Die Naturverjüngung spart die hohen Pflanzkosten einer Neupflanzung.",
          keywords: ["naturverjüngung", "pflanzkosten", "kosten sparen"],
        },
        {
          id: "c5",
          label:
            "Dabei muss sie Wild fernhalten und mit 20 bis 30 Jahren Dauer rechnen; bei Neupflanzung sollte sie vier bis sechs Arten zur Risikostreuung mischen.",
          keywords: ["wild", "jagd", "zaun", "20 bis 30", "artenmischung", "risikostreuung", "vier bis sechs"],
        },
      ],
      sampleAnswer:
        "Sie kann ein Förderprogramm nutzen, das einen Teil der Kosten übernimmt, wenn sie etwa einen Mindestanteil standortgerechter Laubbäume pflanzt und auf Kahlschlag verzichtet. Allerdings wird das Geld oft erst nach Abschluss der Maßnahmen ausgezahlt, sodass sie die Kosten zunächst vorstrecken muss; auch die Anträge sind aufwendig. Der Beitritt zu einer Forstbetriebsgemeinschaft kann helfen, weil sie Beratung, Pflanzgut und Verwaltung bündelt. Zur Kostensenkung bietet sich die Naturverjüngung an, die die Pflanzkosten spart; dann muss sie aber Wild durch Jagd oder Zaun fernhalten und akzeptieren, dass es 20 bis 30 Jahre bis zum geschlossenen Bestand dauert. Bei einer Neupflanzung sollte sie vier bis sechs Baumarten mischen, um das Risiko zu streuen.",
    },

    {
      kind: "truefalse",
      id: "s12-q9",
      number: "9",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind.",
      example: {
        text: "Die Fichte bildet besonders tiefe Wurzeln aus und übersteht Dürren deshalb gut.",
        correct: false,
        justification: "Im Text: Die Fichte bildet nur flache Wurzeln aus und kommt mit Trockenheit schlecht zurecht.",
      },
      statements: [
        {
          id: "s12-q9-1",
          text: "Die Buche blieb von den Dürrejahren weitgehend unberührt.",
          correct: false,
          justification:
            "Im Text: Selbst die Buche, lange als Gewinnerin angesehen, litt erheblich. (1 P)",
        },
        {
          id: "s12-q9-2",
          text:
            "In Mischbeständen fielen die Verluste nach einem Dürrejahr um etwa ein Drittel geringer aus als in Reinbeständen.",
          correct: true,
          justification: "Im Text unter Bezug auf Messungen auf Versuchsflächen genannt. (1 P)",
        },
        {
          id: "s12-q9-3",
          text:
            "Der kommunale Forstbetrieb hat auf einer Kahlfläche von 120 Hektar vier verschiedene Baumarten gepflanzt.",
          correct: true,
          justification: "Eiche, Hainbuche, Douglasie und Weißtanne auf 120 Hektar. (1 P)",
        },
        {
          id: "s12-q9-4",
          text:
            "Die Douglasie wird von allen Fachleuten als unproblematisch angesehen, weil sie heimisch ist.",
          correct: false,
          justification:
            "Sie stammt aus Nordamerika und ist wegen ihres Einflusses auf heimische Lebensgemeinschaften umstritten. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s12-sa",
      label: "A",
      points: 2,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt:
        "Zwar gelten Eichen, die mit ihren tiefen Pfahlwurzeln Trockenheit gut verkraften, als aussichtsreich; zudem werden Arten, die aus wärmeren Regionen stammen, wie die Zerr-Eiche oder die Esskastanie, erprobt.",
      highlight: "die aus wärmeren Regionen stammen",
      template: {
        before:
          "Zwar gelten Eichen, die mit ihren tiefen Pfahlwurzeln Trockenheit gut verkraften, als aussichtsreich; zudem werden ",
        after: ", wie die Zerr-Eiche oder die Esskastanie, erprobt.",
      },
      solutions: ["aus wärmeren Regionen stammende Arten"],
      explanation:
        "La relative « die aus wärmeren Regionen stammen » devient un attribut participial au participe I placé devant le nom : « aus wärmeren Regionen stammende Arten ». Au nominatif pluriel sans article, l'adjectif prend la terminaison -e.",
      modelAnswer:
        "Zwar gelten Eichen, die mit ihren tiefen Pfahlwurzeln Trockenheit gut verkraften, als aussichtsreich; zudem werden aus wärmeren Regionen stammende Arten, wie die Zerr-Eiche oder die Esskastanie, erprobt.",
    },
    {
      id: "s12-sb",
      label: "B",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt:
        "Sie wächst schnell, liefert gerades Holz und lässt sich auf großen Flächen gleichaltrig anpflanzen.",
      highlight: "lässt sich auf großen Flächen gleichaltrig anpflanzen",
      template: { before: "Sie wächst schnell, liefert gerades Holz und ", after: "." },
      solutions: [
        "kann auf großen Flächen gleichaltrig angepflanzt werden",
        "ist auf großen Flächen gleichaltrig anzupflanzen",
      ],
      explanation:
        "« sich lassen + infinitif » est un substitut de passif. Deux équivalents : le passif avec verbe modal (« angepflanzt werden ») ou la construction « sein + zu + infinitif » (« anzupflanzen »). Le sujet « sie » (la Fichte) reste identique.",
      modelAnswer:
        "Sie wächst schnell, liefert gerades Holz und kann auf großen Flächen gleichaltrig angepflanzt werden.",
    },
    {
      id: "s12-sc",
      label: "C",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Der Wald kann sogar von einer Kohlenstoffsenke zu einer Kohlenstoffquelle werden, weil das Totholz zersetzt wird.",
      highlight: "weil das Totholz zersetzt wird",
      template: {
        before: "Der Wald kann sogar von einer Kohlenstoffsenke zu einer Kohlenstoffquelle werden, ",
        after: ".",
      },
      solutions: [
        "wegen der Zersetzung des Totholzes",
        "aufgrund der Zersetzung des Totholzes",
        "infolge der Zersetzung des Totholzes",
      ],
      explanation:
        "La subordonnée causale « weil … zersetzt wird » devient un groupe prépositionnel au génitif : « wegen / aufgrund / infolge + génitif ». Le verbe est nominalisé en « Zersetzung », et « das Totholz » passe au génitif « des Totholzes ».",
      modelAnswer:
        "Der Wald kann sogar von einer Kohlenstoffsenke zu einer Kohlenstoffquelle werden, wegen der Zersetzung des Totholzes.",
    },
    {
      id: "s12-sd",
      label: "D",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Wurzeln unterschiedlicher Tiefe erschließen verschiedene Bodenschichten, sodass Trockenperioden besser überbrückt werden.",
      highlight: "unterschiedlicher Tiefe",
      template: {
        before: "",
        after:
          " erschließen verschiedene Bodenschichten, sodass Trockenperioden besser überbrückt werden.",
      },
      solutions: [
        "Wurzeln, die unterschiedlich tief reichen",
        "Wurzeln, die unterschiedlich tief in den Boden reichen",
      ],
      explanation:
        "Le génitif attribut « unterschiedlicher Tiefe » se verbalise en relative : « die unterschiedlich tief reichen ». Le pronom relatif « die » renvoie à « Wurzeln » (pluriel), et le verbe se place en fin de subordonnée, entre virgules.",
      modelAnswer:
        "Wurzeln, die unterschiedlich tief reichen, erschließen verschiedene Bodenschichten, sodass Trockenperioden besser überbrückt werden.",
    },
    {
      id: "s12-se",
      label: "E",
      points: 1,
      type: "konjunktiv",
      instruction: "Beantworten Sie die Frage in ein bis zwei vollständigen Sätzen.",
      prompt:
        "„Forstbetriebsgemeinschaften, in denen sich Eigentümer zusammenschließen, könnten diese Hürden senken.“ Warum steht in diesem Satz „könnten“ und nicht „können“?",
      criteria: [
        {
          id: "c1",
          label:
            "Der Konjunktiv II drückt eine Möglichkeit aus, die nicht sicher eintritt bzw. noch nicht verwirklicht ist.",
          keywords: ["konjunktiv", "möglichkeit", "nicht sicher", "noch nicht", "hypothetisch"],
        },
      ],
      explanation:
        "Le Konjunktiv II (« könnten ») marque une éventualité : la création de telles communautés est envisagée comme une solution possible, mais elle n'est pas encore une réalité. L'indicatif « können » affirmerait le fait comme certain.",
      modelAnswer:
        "Der Konjunktiv II zeigt an, dass es sich nur um eine Möglichkeit handelt, die noch nicht verwirklicht ist und nicht mit Sicherheit eintritt.",
    },
    {
      id: "s12-sf",
      label: "F",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Forstleute verringern das Risiko deshalb, indem sie auf einer Fläche vier bis sechs Baumarten mischen, von denen jede unterschiedlich auf Hitze, Frost und Schädlinge reagiert.",
      highlight: "indem sie auf einer Fläche vier bis sechs Baumarten mischen",
      template: {
        before: "Forstleute verringern das Risiko deshalb ",
        after: ", von denen jede unterschiedlich auf Hitze, Frost und Schädlinge reagiert.",
      },
      solutions: [
        "durch das Mischen von vier bis sechs Baumarten auf einer Fläche",
        "durch die Mischung von vier bis sechs Baumarten auf einer Fläche",
      ],
      explanation:
        "La subordonnée « indem sie … mischen » se nominalise avec « durch + nom verbal » : « durch das Mischen / die Mischung von … ». Le complément est introduit par « von + datif » et la phrase reste complète sans deuxième subordonnée.",
      modelAnswer:
        "Forstleute verringern das Risiko deshalb durch das Mischen von vier bis sechs Baumarten auf einer Fläche, von denen jede unterschiedlich auf Hitze, Frost und Schädlinge reagiert.",
    },
    {
      id: "s12-sg",
      label: "G",
      points: 2,
      type: "bezug",
      instruction: "Antworten Sie in einem oder zwei vollständigen Sätzen.",
      prompt:
        "„Dieser Vorteil kehrt sich jedoch um, sobald sich das Klima verändert.“ Worauf bezieht sich „Dieser Vorteil“? Nennen Sie die zugehörigen Eigenschaften.",
      criteria: [
        {
          id: "c1",
          label:
            "„Dieser Vorteil“ bezieht sich auf die Fichte und ihre Eigenschaften aus den vorangehenden Sätzen.",
          keywords: ["fichte", "eigenschaften", "vorteil der fichte"],
        },
        {
          id: "c2",
          label:
            "Genannt werden: schnelles Wachstum, gerades Holz und gleichaltriger Anbau auf großen Flächen.",
          keywords: ["schnell", "gerades holz", "gleichaltrig", "großen flächen"],
        },
      ],
      explanation:
        "« Dieser Vorteil » reprend l'avantage de l'épicéa décrit juste avant : il pousse vite, fournit du bois droit et peut être planté de manière uniforme sur de grandes surfaces. C'est précisément cet avantage qui se transforme en inconvénient lorsque le climat change.",
      modelAnswer:
        "„Dieser Vorteil“ bezieht sich auf die Fichte: Sie wächst schnell, liefert gerades Holz und lässt sich auf großen Flächen gleichaltrig anpflanzen. Genau diese Eigenschaften werden bei verändertem Klima zum Nachteil.",
    },
  ],
};
