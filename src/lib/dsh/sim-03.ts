import { sim03Lines } from "@/lib/dsh/texts";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim03: DshSimulation = {
  id: "sim-03",
  number: 3,
  slug: "der-unsichtbare-muell",
  title: "Der unsichtbare Müll",
  subtitle: "Mikroplastik in Flüssen und Meeren",
  topic: "Umwelt",
  minutes: 90,
  text: { lines: sim03Lines, wordCount: 864 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 03",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s3-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel.",
      items: [
        {
          id: "s3-q1-sediment",
          prompt: "Ablagerung von Material am Boden eines Gewässers",
          answer: "das Sediment",
          example: true,
        },
        {
          id: "s3-q1-waschmaschine",
          prompt: "Abbildung: Haushaltsgerät, in dem synthetische Kleidung gewaschen wird",
          answer: "die Waschmaschine",
        },
        {
          id: "s3-q1-granulat",
          prompt:
            "Kunststoff in Form kleiner Körnchen, der als Rohstoff für andere Produkte dient",
          answer: "das Granulat",
        },
        {
          id: "s3-q1-biofilm",
          prompt: "dünner Belag aus Algen und Bakterien auf einer Oberfläche",
          answer: "der Biofilm",
        },
      ],
    },

    {
      kind: "open",
      id: "s3-q2",
      number: "2",
      skill: "grafik",
      points: 3,
      prompt:
        "Die Grafik zeigt die geschätzten Anteile verschiedener Quellen am Mikroplastik in der Umwelt. Ordnen Sie den Balken A, B und C nach den Informationen aus dem Text jeweils die passende Quelle zu.",
      chart: {
        kind: "bars",
        caption: "Geschätzte Anteile verschiedener Quellen am Mikroplastik in der Umwelt",
        unit: "Prozent",
        bars: [
          { label: "A", value: 30 },
          { label: "B", value: 20 },
          { label: "C", value: 10 },
          { label: "D · Kunstrasen und Granulat", value: 5 },
        ],
      },
      minWords: 15,
      criteria: [
        {
          id: "c1",
          label: "Balken A (30 %) stammt vom Abrieb der Autoreifen.",
          keywords: ["reifen", "reifenabrieb"],
        },
        {
          id: "c2",
          label: "Balken B (20 %) sind textile Fasern aus synthetischer Kleidung.",
          keywords: ["fasern", "textil", "kleidung"],
        },
        {
          id: "c3",
          label: "Balken C (10 %) stammt vom Abrieb von Farben und Lacken.",
          keywords: ["farben", "lacke"],
        },
      ],
      sampleAnswer:
        "A (30 Prozent): Abrieb von Autoreifen. B (20 Prozent): textile Fasern, die beim Waschen synthetischer Kleidung freigesetzt werden. C (10 Prozent): Abrieb von Farben und Lacken. Balken D mit fünf Prozent entfällt auf Kunstrasenplätze und Granulat.",
    },

    {
      kind: "open",
      id: "s3-q3",
      number: "3",
      skill: "verstehen",
      points: 4,
      prompt:
        "Erklären Sie den Unterschied zwischen primärem und sekundärem Mikroplastik und nennen Sie jeweils ein Beispiel.",
      minWords: 50,
      criteria: [
        {
          id: "c1",
          label: "Primäres Mikroplastik wird schon in dieser kleinen Größe hergestellt.",
          keywords: ["primär", "schon in dieser größe", "bereits in dieser größe", "hergestellt"],
        },
        {
          id: "c2",
          label: "Beispiel primär: Granulat oder Perlen in Peelings.",
          keywords: ["granulat", "peeling"],
        },
        {
          id: "c3",
          label: "Sekundäres Mikroplastik entsteht später durch Zerfall größerer Kunststoffteile.",
          keywords: ["sekundär", "zerfall", "größere kunststoffteile"],
        },
        {
          id: "c4",
          label: "Beispiel sekundär: zerfallende Verpackungen oder Reifenabrieb.",
          keywords: ["verpackung", "reifenabrieb", "sonnenlicht", "wellen"],
        },
      ],
      sampleAnswer:
        "Primäres Mikroplastik wird bereits in der kleinen Größe von unter fünf Millimetern hergestellt, etwa als Granulat, das als Rohstoff dient, oder als Perlen in Peelings. Sekundäres Mikroplastik entsteht erst später, wenn größere Kunststoffteile wie Verpackungen durch Sonnenlicht, Wellen und Reibung zerfallen; auch der Abrieb von Reifen gehört dazu.",
    },

    {
      kind: "open",
      id: "s3-q4",
      number: "4",
      skill: "verstehen",
      points: 3,
      prompt: "Beschreiben Sie den Weg, den Reifenabrieb von der Straße bis ins Meer nehmen kann.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label: "Regen spült den Abrieb in die Kanalisation und weiter zur Kläranlage.",
          keywords: ["regen", "kanalisation", "kläranlage"],
        },
        {
          id: "c2",
          label: "Ein Teil passiert die Filter, oder bei starkem Regen läuft die Kanalisation über.",
          keywords: ["filter", "überlauf", "über", "ungeklärt"],
        },
        {
          id: "c3",
          label: "Über den Fluss gelangt das Mikroplastik ins Meer und sinkt ins Sediment ab.",
          keywords: ["fluss", "meer", "sediment", "absinken"],
        },
      ],
      sampleAnswer:
        "Der Reifenabrieb wird vom Regen von der Straße in die Kanalisation gespült, die das Wasser zur Kläranlage leitet. Dort bleibt ein Teil zurück, ein anderer passiert die Filter oder gelangt bei starkem Regen über den Überlauf ungeklärt in den Fluss. Über den Fluss erreicht das Mikroplastik schließlich das Meer, wo es nach einiger Zeit absinkt und sich im Sediment ablagert.",
    },

    {
      kind: "open",
      id: "s3-q5",
      number: "5",
      skill: "verstehen",
      points: 3,
      prompt:
        "Welche Folgen hat Mikroplastik für Meerestiere, und was ist über die Folgen für den Menschen bekannt?",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Meerestiere verwechseln die Teilchen mit Nahrung; ein falsches Sättigungsgefühl entsteht.",
          keywords: ["nahrung", "plankton", "sättigungsgefühl", "weniger fressen"],
        },
        {
          id: "c2",
          label: "Zusatzstoffe und angelagerte Schadstoffe gelangen in die Nahrungskette.",
          keywords: ["weichmacher", "schadstoffe", "zusatzstoffe", "nahrungskette"],
        },
        {
          id: "c3",
          label: "Beim Menschen wurden Partikel nachgewiesen, die Folgen sind noch ungeklärt.",
          keywords: ["blut", "gewebe", "nachgewiesen", "ungeklärt", "krankheiten"],
        },
      ],
      sampleAnswer:
        "Fische und Seevögel verwechseln die Teilchen mit Plankton, und im Magen erzeugen sie ein falsches Sättigungsgefühl, sodass die Tiere weniger fressen. Außerdem gelangen Weichmacher und an der Oberfläche angelagerte Schadstoffe in die Nahrungskette. Beim Menschen sind Partikel im Blut und im Gewebe nachgewiesen worden; ob sie Krankheiten auslösen, ist bislang nicht geklärt.",
    },

    {
      kind: "open",
      id: "s3-q6a",
      number: "6a",
      skill: "verstehen",
      points: 1,
      prompt: "Wie viel Prozent der Teilchen halten Kläranlagen zurück?",
      minWords: 3,
      criteria: [
        {
          id: "c1",
          label: "90 bis 99 Prozent.",
          numeric: [90, 99],
        },
      ],
      sampleAnswer: "90 bis 99 Prozent.",
    },

    {
      kind: "open",
      id: "s3-q6b",
      number: "6b",
      skill: "verstehen",
      points: 2,
      prompt:
        "Warum gelangen trotz dieser Leistung weiterhin große Mengen Mikroplastik in die Flüsse? Nennen Sie zwei Gründe.",
      minWords: 30,
      criteria: [
        {
          id: "c1",
          label: "Ein Teil der winzigen Teilchen passiert die Filter.",
          keywords: ["passiert", "filter"],
        },
        {
          id: "c2",
          label: "Bei starkem Regen läuft die Kanalisation über, sodass ungeklärtes Wasser in den Fluss gelangt.",
          keywords: ["überlauf", "starkem regen", "ungeklärt"],
        },
        {
          id: "c3",
          label: "Klärschlamm mit Plastik wird als Dünger auf Felder ausgebracht und vom Regen weggespült.",
          keywords: ["klärschlamm", "dünger", "felder"],
        },
      ],
      sampleAnswer:
        "Ein Teil der sehr kleinen Teilchen passiert die Filter der Kläranlage. Außerdem läuft die Kanalisation bei starkem Regen über, sodass ungeklärtes Wasser direkt in den Fluss gelangt. Zusätzlich kann belasteter Klärschlamm als Dünger auf Felder gelangen, von wo der Regen das Plastik wieder in die Gewässer spült.",
    },

    {
      kind: "open",
      id: "s3-q7",
      number: "7",
      skill: "verstehen",
      points: 3,
      prompt:
        "Beschreiben Sie, wie sich die Messung von Mikroplastik verändert hat, und nennen Sie zwei Probleme, die die Zuverlässigkeit bzw. Vergleichbarkeit der Ergebnisse beeinträchtigen.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Früher feine Netze ab etwa 0,3 Millimetern; heute Filter, Salzlösung und Infrarotspektroskopie bis zu wenigen Mikrometern.",
          keywords: ["netze", "0,3", "filter", "salzlösung", "infrarotspektroskopie", "mikrometern"],
        },
        {
          id: "c2",
          label: "Die Labore verwenden unterschiedliche Methoden und Einheiten.",
          keywords: ["unterschiedliche methoden", "einheiten", "vergleichbar"],
        },
        {
          id: "c3",
          label: "Fasern aus der Kleidung der Laborangestellten können die Proben verunreinigen.",
          keywords: ["verunreinigung", "kleidung", "fasern", "proben"],
        },
      ],
      sampleAnswer:
        "Früher wurden Proben mit feinen Netzen genommen, die erst Teilchen ab etwa 0,3 Millimetern erfassten. Heute filtert man das Wasser, trennt das Plastik in Salzlösung vom Sand und bestimmt die Kunststoffart per Infrarotspektroskopie, sodass Teilchen von wenigen Mikrometern erkannt werden. Probleme sind die unterschiedlichen Methoden und Einheiten der Labore, die die Ergebnisse kaum vergleichbar machen, sowie Fasern aus der Kleidung des Laborpersonals, die die Proben verunreinigen können.",
    },

    {
      kind: "open",
      id: "s3-q8",
      number: "8",
      skill: "transfer",
      points: 4,
      prompt:
        "Eine Stadt an einem Fluss will die Mikroplastik-Belastung des Wassers verringern, hat aber nur ein begrenztes Budget. Welche Maßnahmen aus dem Text kann sie ergreifen, und welche Grenzen müssen die Verantwortlichen dabei berücksichtigen?",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label: "Zusätzliche Filterstufe in der Kläranlage senkt die Belastung deutlich (40 auf 12 Teilchen).",
          keywords: ["filterstufe", "kläranlage", "12 teilchen"],
        },
        {
          id: "c2",
          label: "Filtersysteme an Straßenabflüssen oder Filter in Waschmaschinen (bis zu 80 Prozent).",
          keywords: ["straßenabflüssen", "waschmaschinen", "80 prozent"],
        },
        {
          id: "c3",
          label: "Grenze: die Filterstufe kostet Millionen und verbraucht zusätzlich Energie.",
          keywords: ["millionen", "kosten", "energie"],
        },
        {
          id: "c4",
          label: "Grenze: einsammeln im Meer kaum möglich, da feine Netze auch Plankton fangen.",
          keywords: ["einsammeln", "plankton", "meer", "wirkt nur teilweise"],
        },
      ],
      sampleAnswer:
        "Die Stadt kann die Kläranlage um eine zusätzliche Filterstufe erweitern; im Beispiel sank die Belastung von 40 auf zwölf Teilchen pro Kubikmeter. Billiger sind Filter an Straßenabflüssen, weil der Reifenabrieb die wichtigste Quelle ist, oder die Förderung von Waschmaschinenfiltern, die bis zu 80 Prozent der Fasern zurückhalten. Grenzen sind die hohen Kosten und der Energieverbrauch der Filterstufe sowie die Tatsache, dass ein Teil der Teilchen weiter über Regen und Wind in den Fluss gelangt. Das Plastik aus dem Meer einzusammeln ist keine Lösung, weil feine Netze auch Plankton fangen würden.",
    },

    {
      kind: "truefalse",
      id: "s3-q9",
      number: "9",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind.",
      example: {
        text: "Als Mikroplastik bezeichnet man Kunststoffteilchen, die größer als fünf Millimeter sind.",
        correct: false,
        justification: "Im Text: Mikroplastikteilchen sind kleiner als fünf Millimeter.",
      },
      statements: [
        {
          id: "s3-q9-1",
          text: "Peelings mit Mikroperlen sind in vielen Ländern inzwischen verboten.",
          correct: true,
          justification: "Im Text: „in vielen Ländern inzwischen verboten“. (1 P)",
        },
        {
          id: "s3-q9-2",
          text: "Der Biofilm macht die Teilchen leichter, sodass sie an der Meeresoberfläche bleiben.",
          correct: false,
          justification: "Der Biofilm macht die Teilchen schwerer, sodass sie absinken. (1 P)",
        },
        {
          id: "s3-q9-3",
          text: "Die Ergebnisse verschiedener Studien sind schwer zu vergleichen, weil die Labore unterschiedliche Methoden und Einheiten benutzen.",
          correct: true,
          justification: "Im Text genau so erklärt. (1 P)",
        },
        {
          id: "s3-q9-4",
          text: "Das Einsammeln von Mikroplastik aus dem Meer mit feinen Netzen ist unproblematisch.",
          correct: false,
          justification:
            "Feine Netze würden auch große Mengen Plankton fangen; Mikroplastik lässt sich kaum einsammeln. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s3-sa",
      label: "A",
      points: 2,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt:
        "Die Fasern, die beim Waschen synthetischer Kleidung freigesetzt werden, gelangen ins Abwasser.",
      highlight: "die beim Waschen synthetischer Kleidung freigesetzt werden",
      template: { before: "", after: " gelangen ins Abwasser." },
      solutions: ["Die beim Waschen synthetischer Kleidung freigesetzten Fasern"],
      explanation:
        "La relative « die … freigesetzt werden » devient un attribut participial au participe II placé devant le nom. Le groupe est au passif, donc on garde le participe « freigesetzten » avec la terminaison faible -en après l'article défini « Die ».",
      modelAnswer:
        "Die beim Waschen synthetischer Kleidung freigesetzten Fasern gelangen ins Abwasser.",
    },
    {
      id: "s3-sb",
      label: "B",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Da es so klein ist, würden Netze mit der nötigen Feinheit auch Plankton in großen Mengen fangen.",
      highlight: "Da es so klein ist",
      template: {
        before: "",
        after: ", würden Netze mit der nötigen Feinheit auch Plankton in großen Mengen fangen.",
      },
      solutions: ["Wegen seiner geringen Größe", "Aufgrund seiner geringen Größe"],
      explanation:
        "La subordonnée causale devient un groupe prépositionnel au génitif : « wegen / aufgrund + génitif ». L'adjectif « klein » se nominalise en « Größe » avec « gering », et le pronom « es » devient le déterminant possessif « seiner ».",
      modelAnswer:
        "Wegen seiner geringen Größe würden Netze mit der nötigen Feinheit auch Plankton in großen Mengen fangen.",
    },
    {
      id: "s3-sc",
      label: "C",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt: "Um die Fasern zurückzuhalten, werden Filter in Waschmaschinen eingebaut.",
      highlight: "Um die Fasern zurückzuhalten",
      template: { before: "", after: ", werden Filter in Waschmaschinen eingebaut." },
      solutions: ["Zum Zurückhalten der Fasern", "Zur Rückhaltung der Fasern"],
      explanation:
        "La finale « um … zu » se nominalise avec « zu + nom » : « zum Zurückhalten der Fasern » ou « zur Rückhaltung der Fasern ». Le complément est au génitif.",
      modelAnswer: "Zum Zurückhalten der Fasern werden Filter in Waschmaschinen eingebaut.",
    },
    {
      id: "s3-sd",
      label: "D",
      points: 3,
      type: "konnektor",
      instruction: REWRITE,
      prompt:
        "Obwohl Kläranlagen 90 bis 99 Prozent der Teilchen zurückhalten, gelangen weiterhin große Mengen in die Flüsse.",
      highlight: "Obwohl Kläranlagen 90 bis 99 Prozent der Teilchen zurückhalten",
      template: { before: "", after: ", gelangen weiterhin große Mengen in die Flüsse." },
      solutions: [
        "Trotz des Rückhalts von 90 bis 99 Prozent der Teilchen durch Kläranlagen",
        "Trotz der Rückhaltung von 90 bis 99 Prozent der Teilchen durch Kläranlagen",
      ],
      explanation:
        "La concession « obwohl » devient « trotz + génitif ». Le verbe « zurückhalten » se nominalise en « Rückhalt / Rückhaltung » ; l'agent est introduit par « durch » et le complément reste au génitif.",
      modelAnswer:
        "Trotz des Rückhalts von 90 bis 99 Prozent der Teilchen durch Kläranlagen gelangen weiterhin große Mengen in die Flüsse.",
    },
    {
      id: "s3-se",
      label: "E",
      points: 1,
      type: "bezug",
      instruction: "Antworten Sie in einem vollständigen Satz.",
      prompt:
        "Worauf bezieht sich „Daraus“ in dem Satz „Daraus schließen die Forschenden, dass Siedlungen und Straßen die wichtigsten Eintragswege sind“?",
      criteria: [
        {
          id: "c1",
          label:
            "„Daraus“ bezieht sich auf die Messergebnisse im Fluss (fünf Teilchen oberhalb, 40 unterhalb der Stadt).",
          keywords: ["messergebnisse", "fluss", "fünf", "40", "teilchen pro kubikmeter"],
        },
      ],
      explanation:
        "« Daraus » reprend les résultats de la mesure dans la rivière : cinq particules par mètre cube en amont de la ville, quarante en aval. C'est sur cette différence que les chercheurs fondent leur conclusion.",
      modelAnswer:
        "„Daraus“ bezieht sich auf die Messergebnisse in dem Fluss: oberhalb der Großstadt durchschnittlich fünf Teilchen pro Kubikmeter, unterhalb 40.",
    },
    {
      id: "s3-sf",
      label: "F",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt: "Ist das Plastik dagegen erst einmal im Meer, lässt es sich kaum noch einsammeln.",
      highlight: "lässt es sich kaum noch einsammeln",
      template: {
        before: "Ist das Plastik dagegen erst einmal im Meer, ",
        after: ".",
      },
      solutions: ["kann es kaum noch eingesammelt werden", "ist es kaum noch einzusammeln"],
      explanation:
        "« sich lassen + infinitif » est un substitut de passif. On le rend soit par le passif avec modal « kann … eingesammelt werden », soit par la construction « sein + zu + infinitif ».",
      modelAnswer:
        "Ist das Plastik dagegen erst einmal im Meer, kann es kaum noch eingesammelt werden.",
    },
    {
      id: "s3-sg",
      label: "G",
      points: 3,
      type: "konnektor",
      instruction: REWRITE,
      prompt:
        "Durch den Einbau von Filtern in Waschmaschinen lässt sich die Freisetzung der Fasern um bis zu 80 Prozent verringern.",
      highlight: "Durch den Einbau von Filtern in Waschmaschinen",
      template: {
        before: "",
        after: " lässt sich die Freisetzung der Fasern um bis zu 80 Prozent verringern.",
      },
      solutions: [
        "Indem man Filter in Waschmaschinen einbaut,",
        "Wenn man Filter in Waschmaschinen einbaut,",
      ],
      explanation:
        "Le groupe nominal « durch den Einbau von … » se verbalise en subordonnée avec « indem / wenn ». Le sujet est « man », le verbe « einbauen » se place à la fin de la subordonnée et la virgule est nécessaire.",
      modelAnswer:
        "Indem man Filter in Waschmaschinen einbaut, lässt sich die Freisetzung der Fasern um bis zu 80 Prozent verringern.",
    },
  ],
};
