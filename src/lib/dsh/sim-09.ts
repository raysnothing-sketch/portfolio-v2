import { sim09Lines } from "@/lib/dsh/texts-09";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim09: DshSimulation = {
  id: "sim-09",
  number: 9,
  slug: "trinkwasser-aus-dem-meer",
  title: "Trinkwasser aus dem Meer",
  subtitle: "Wasserknappheit · Technik und Umwelt der Entsalzung",
  topic: "Wasser",
  minutes: 90,
  text: { lines: sim09Lines, wordCount: 868 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 09",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s9-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel.",
      items: [
        {
          id: "s9-q1-membran",
          prompt:
            "hauchdünne Schicht mit winzigen Poren, die nur bestimmte Stoffe hindurchlässt",
          answer: "die Membran",
          example: true,
        },
        {
          id: "s9-q1-kubikmeter",
          prompt:
            "Abbildung:Würfel mit einem Meter Kantenlänge, also 1.000 Litern",
          answer: "der Kubikmeter",
        },
        {
          id: "s9-q1-sole",
          prompt:
            "stark salzhaltiges Wasser, das bei der Entsalzung übrig bleibt",
          answer: "die Sole",
        },
        {
          id: "s9-q1-destillation",
          prompt:
            "Verfahren, bei dem eine Flüssigkeit erhitzt wird, der Dampf aufgefangen wird und wieder abkühlt",
          answer: "die Destillation",
        },
      ],
    },

    {
      kind: "open",
      id: "s9-q2",
      number: "2",
      skill: "verstehen",
      points: 4,
      prompt:
        "Erklären Sie, wie die Umkehrosmose funktioniert, und worin sie sich von der natürlichen Osmose unterscheidet.",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label:
            "Meerwasser wird mit einem Druck von 55 bis 70 bar durch eine Membran gepresst.",
          keywords: ["55 bis 70 bar", "druck", "membran", "gepresst"],
          numeric: [55, 70],
        },
        {
          id: "c2",
          label:
            "Die hauchdünne Membran mit winzigen Poren lässt Wassermoleküle durch, hält aber Salze zurück.",
          keywords: [
            "wassermoleküle",
            "salze",
            "zurückhält",
            "poren",
            "hauchdünn",
          ],
        },
        {
          id: "c3",
          label:
            "Bei der natürlichen Osmose wandert das Wasser von der verdünnten zur konzentrierten Lösung.",
          keywords: ["natürlich", "verdünnten", "konzentrierten", "wandert"],
        },
        {
          id: "c4",
          label:
            "Erst der hohe Druck kehrt diese Richtung um, sodass salzfreies Wasser entsteht.",
          keywords: ["druck kehrt", "richtung um", "umgekehrt", "salzfreies"],
        },
      ],
      sampleAnswer:
        "Bei der Umkehrosmose wird Meerwasser mit einem Druck von 55 bis 70 bar durch eine hauchdünne Membran mit winzigen Poren gepresst. Diese lässt Wassermoleküle durch, hält aber die Salze zurück. In der Natur verläuft die Osmose genau andersherum: Das Wasser wandert von der verdünnten zur konzentrierten Lösung. Erst der hohe Druck kehrt diese Richtung um, sodass salzfreies Trinkwasser entsteht.",
    },

    {
      kind: "open",
      id: "s9-q3",
      number: "3",
      skill: "verstehen",
      points: 3,
      prompt:
        "Der Energiebedarf der Entsalzung ist in den letzten Jahrzehnten deutlich gesunken. Beschreiben Sie die Entwicklung und nennen Sie zwei Gründe dafür.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Früher wurden bis zu 15 Kilowattstunden pro Kubikmeter benötigt, moderne Umkehrosmoseanlagen kommen mit drei bis vier Kilowattstunden aus (theoretisches Minimum etwa eine).",
          keywords: [
            "15 kilowattstunden",
            "drei bis vier",
            "kubikmeter",
            "minimum",
          ],
        },
        {
          id: "c2",
          label:
            "Die energiesparendere Umkehrosmose hat die Destillation weitgehend verdrängt.",
          keywords: ["umkehrosmose", "destillation", "verdrängt", "effizienter"],
        },
        {
          id: "c3",
          label:
            "Druckaustauscher gewinnen bis zu 95 Prozent der Druckenergie der abfließenden Sole zurück.",
          keywords: ["druckaustauscher", "95 prozent", "rückgewinn", "sole"],
        },
      ],
      sampleAnswer:
        "Früher wurden pro Kubikmeter Trinkwasser bei der Destillation bis zu 15 Kilowattstunden benötigt; heute kommen moderne Umkehrosmoseanlagen mit drei bis vier Kilowattstunden aus, während das theoretische Minimum bei etwa einer Kilowattstunde liegt. Zwei Gründe sind zum einen, dass die energiesparendere Umkehrosmose die Destillation weitgehend verdrängt hat, und zum anderen der Einsatz von Druckaustauschern, die bis zu 95 Prozent der Druckenergie der abfließenden Sole zurückgewinnen.",
    },

    {
      kind: "open",
      id: "s9-q4",
      number: "4",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Abbildung zeigt zwei Möglichkeiten, die Sole ins Meer einzuleiten: Variante A ist eine kurze Leitung von etwa 50 Metern, über die die Sole unmittelbar vor der Küste abgegeben wird; Variante B ist eine etwa 800 Meter lange Leitung mit mehreren Düsen (Diffusoren). Beschreiben Sie die beiden Varianten, erklären Sie, welche die Umwelt weniger belastet, und nennen Sie einen Nachteil dieser Variante.",
      minWords: 50,
      criteria: [
        {
          id: "c1",
          label:
            "Variante A: kurze Leitung von etwa 50 Metern; die Sole sammelt sich als konzentrierte Wolke am Meeresboden.",
          keywords: [
            "50 metern",
            "kurze leitung",
            "konzentrierte wolke",
            "meeresboden",
          ],
        },
        {
          id: "c2",
          label:
            "Variante B: etwa 800 Meter lange Leitung mit mehreren Düsen (Diffusoren); die Sole wird verteilt und mit Meerwasser verwirbelt.",
          keywords: [
            "800 meter",
            "diffusoren",
            "düsen",
            "verteilt",
            "verwirbelt",
          ],
        },
        {
          id: "c3",
          label:
            "Variante B belastet die Umwelt weniger, weil Muscheln, Seegras und andere Bodenbewohner nicht der hohen Salzkonzentration ausgesetzt sind.",
          keywords: [
            "seegras",
            "muscheln",
            "bodenbewohner",
            "weniger belastet",
            "salzkonzentration",
          ],
        },
        {
          id: "c4",
          label:
            "Nachteil: Die aufwendigere Variante verteuert den Bau um etwa ein Fünftel.",
          keywords: ["fünftel", "teurer", "baukosten", "verteuert"],
        },
      ],
      sampleAnswer:
        "Bei Variante A wird die Sole über eine kurze Leitung von etwa 50 Metern unmittelbar vor der Küste abgegeben und sammelt sich in einer konzentrierten Wolke am Meeresboden. Bei Variante B sorgt eine etwa 800 Meter lange Leitung mit mehreren Düsen, sogenannten Diffusoren, dafür, dass die Sole weit verteilt und mit Meerwasser verwirbelt wird. Variante B ist umweltfreundlicher, weil Seegras, Muscheln und andere Bodenbewohner nicht der hohen Salzkonzentration ausgesetzt sind. Ihr Nachteil ist, dass der Bau dadurch um etwa ein Fünftel teurer wird.",
    },

    {
      kind: "open",
      id: "s9-q5a",
      number: "5a",
      skill: "verstehen",
      points: 1,
      prompt:
        "Wie viele Liter Trinkwasser entstehen in einer Umkehrosmoseanlage aus 100 Litern Meerwasser?",
      minWords: 4,
      criteria: [
        {
          id: "c1",
          label: "40 bis 50 Liter.",
          keywords: ["40 bis 50", "vierzig", "50 liter"],
          numeric: [40, 50],
        },
      ],
      sampleAnswer: "40 bis 50 Liter Trinkwasser.",
    },

    {
      kind: "open",
      id: "s9-q5b",
      number: "5b",
      skill: "verstehen",
      points: 3,
      prompt:
        "Welche Folgen hat die Sole für das Leben im Meer? Nennen Sie die Folgen und ihre Ursachen.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Die Sole ist mit rund 70 Gramm Salz pro Liter etwa doppelt so salzig wie Meerwasser und schwerer; sie sinkt zum Meeresboden ab und bildet eine Wolke.",
          keywords: [
            "doppelt so salzig",
            "70 gramm",
            "schwerer",
            "wolke",
            "meeresboden",
          ],
        },
        {
          id: "c2",
          label:
            "Muscheln, Seegras und andere Bodenbewohner vertragen die hohe Salzkonzentration schlecht.",
          keywords: [
            "muscheln",
            "seegras",
            "bodenbewohner",
            "salzkonzentration",
          ],
        },
        {
          id: "c3",
          label:
            "Zusätzlich enthält die Sole Reste der Reinigungs- und Vorbehandlungschemikalien sowie Spuren von Kupfer aus den Rohrleitungen.",
          keywords: ["chemikalien", "kupfer", "rohrleitungen", "spuren"],
        },
      ],
      sampleAnswer:
        "Die Sole ist mit rund 70 Gramm Salz pro Liter etwa doppelt so salzig wie normales Meerwasser und zugleich schwerer. Deshalb sinkt sie zum Meeresboden ab und bildet dort eine Wolke, die sich nur langsam auflöst. Muscheln, Seegras und andere Bodenbewohner vertragen die hohe Salzkonzentration schlecht. Zusätzlich enthält die Sole Reste von Reinigungs- und Vorbehandlungschemikalien sowie Spuren von Kupfer aus den Rohrleitungen.",
    },

    {
      kind: "open",
      id: "s9-q6",
      number: "6",
      skill: "verstehen",
      points: 3,
      prompt:
        "Fachleute warnen davor, die Entsalzung als „Allheilmittel“ gegen Wasserknappheit zu betrachten. Nennen Sie drei Argumente aus dem Text.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Entsalztes Wasser ist die teuerste Quelle und für die Landwirtschaft, die rund 70 Prozent des Süßwassers verbraucht, meist zu teuer.",
          keywords: ["teuerste", "landwirtschaft", "zu teuer", "70 prozent"],
        },
        {
          id: "c2",
          label:
            "Der Strombedarf ist erheblich; bei fossilem Strom entstehen pro Kubikmeter ein bis zwei Kilogramm CO2, und Anlagen sind bei Ausfall kaum zu ersetzen.",
          keywords: ["strombedarf", "fossil", "co2", "ausfall"],
        },
        {
          id: "c3",
          label:
            "Zuerst sollte man Verluste im Leitungsnetz verringern (20 bis 30 Prozent) und gereinigtes Abwasser wiederverwenden; hinzu kommt die Belastung durch die Sole.",
          keywords: [
            "leitungen",
            "20 bis 30",
            "abwasser",
            "wiederverwenden",
            "sole",
          ],
        },
      ],
      sampleAnswer:
        "Die Entsalzung ist die teuerste Quelle von Trinkwasser; für die Landwirtschaft ist das Wasser meist zu teuer. Außerdem ist der Strombedarf erheblich und verursacht bei fossilem Strom CO2, und bei einem Ausfall – etwa durch eine Algenblüte – sind die Anlagen kaum zu ersetzen. Schließlich sollte man zuerst die Verluste im Leitungsnetz verringern, wo in vielen Städten 20 bis 30 Prozent versickern, und gereinigtes Abwasser wiederverwenden, statt Meerwasser zu entsalzen.",
    },

    {
      kind: "open",
      id: "s9-q7",
      number: "7",
      skill: "transfer",
      points: 5,
      prompt:
        "Eine Küstenstadt will eine Entsalzungsanlage bauen. Vor der Küste liegt eine empfindliche Seegraswiese, und die Stadt möchte möglichst wenig Strom aus fossilen Quellen verwenden. Erklären Sie möglichst genau, welche Maßnahmen aus dem Text die Stadt ergreifen kann, um die Belastung zu verringern.",
      minWords: 65,
      criteria: [
        {
          id: "c1",
          label:
            "Die Sole sollte über eine lange Leitung mit Diffusoren eingeleitet werden, damit sie sich verteilt und verdünnt und die Seegraswiese geschont wird.",
          keywords: ["diffusoren", "lange leitung", "verdünnt", "seegras"],
        },
        {
          id: "c2",
          label:
            "Für die Wasseraufnahme kommen unterirdische Strandbrunnen in Betracht, die das Wasser durch den Sand filtern, Meerestiere schonen und die Vorbehandlung erleichtern – sofern der Untergrund geeignet ist.",
          keywords: [
            "strandbrunnen",
            "sand",
            "meerestiere",
            "vorbehandlung",
            "untergrund",
          ],
        },
        {
          id: "c3",
          label:
            "Mit Druckaustauschern lässt sich die Druckenergie der Sole zurückgewinnen und der Strombedarf verringern.",
          keywords: ["druckaustauscher", "strombedarf", "druckenergie", "zurückgewinnen"],
        },
        {
          id: "c4",
          label:
            "Die Anlage kann mit Solar- oder Windstrom bzw. eigenen Photovoltaikfeldern betrieben werden, um fossilen Strom zu vermeiden.",
          keywords: ["solarstrom", "windstrom", "photovoltaik", "erneuerbar"],
        },
        {
          id: "c5",
          label:
            "Zuerst sollte die Stadt Leitungsverluste verringern und Abwasser wiederverwenden, damit weniger entsalzt werden muss.",
          keywords: ["leitungsverluste", "abwasser", "wiederverwenden"],
        },
      ],
      sampleAnswer:
        "Um die Seegraswiese zu schützen, sollte die Stadt die Sole über eine lange Leitung mit Diffusoren einleiten, damit sie verteilt und verdünnt wird. Für die Wasseraufnahme bieten sich unterirdische Strandbrunnen an, die das Wasser durch den Sand filtern, Meerestiere schonen und die Vorbehandlung erleichtern, sofern der Untergrund geeignet ist. Druckaustauscher verringern den Strombedarf, und die Anlage sollte mit Solar- oder Windstrom oder eigenen Photovoltaikfeldern betrieben werden. Zusätzlich sollte sie zuerst die Leitungsverluste senken und gereinigtes Abwasser wiederverwenden, damit insgesamt weniger Wasser entsalzt werden muss.",
    },

    {
      kind: "truefalse",
      id: "s9-q8",
      number: "8",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind.",
      example: {
        text: "Bei der Umkehrosmose wird das Meerwasser erhitzt, bis es verdampft.",
        correct: false,
        justification:
          "Das Erhitzen und Verdampfen beschreibt die Destillation; bei der Umkehrosmose wird Druck eingesetzt.",
      },
      statements: [
        {
          id: "s9-q8-1",
          text: "Die Sole ist etwa doppelt so salzig wie normales Meerwasser.",
          correct: true,
          justification:
            "Im Text: rund 70 Gramm Salz pro Liter, etwa doppelt so salzig wie Meerwasser. (1 P)",
        },
        {
          id: "s9-q8-2",
          text: "Eine lange Leitung mit mehreren Düsen führt dazu, dass sich die Sole stark am Meeresboden konzentriert.",
          correct: false,
          justification:
            "Im Gegenteil: Die Sole wird verteilt und verwirbelt und weicht nach wenigen Dutzend Metern kaum noch vom Umgebungswasser ab. (1 P)",
        },
        {
          id: "s9-q8-3",
          text: "Für die Landwirtschaft ist entsalztes Wasser in der Regel zu teuer.",
          correct: true,
          justification:
            "Im Text: „Für die Landwirtschaft … ist entsalztes Wasser meist zu teuer.“ (1 P)",
        },
        {
          id: "s9-q8-4",
          text: "In vielen Städten gehen weniger als fünf Prozent des Wassers durch undichte Leitungen verloren.",
          correct: false,
          justification:
            "Im Text: 20 bis 30 Prozent versickern durch undichte Leitungen. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s9-sa",
      label: "A",
      points: 2,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt: "Als Problem gilt vor allem die Sole, die bei der Entsalzung zurückbleibt.",
      highlight: "die bei der Entsalzung zurückbleibt",
      template: { before: "", after: "." },
      solutions: ["die bei der Entsalzung zurückbleibende Sole"],
      explanation:
        "La relative « die … zurückbleibt » devient un attribut participial au participe I placé devant le nom : « die zurückbleibende Sole ». Le complément « bei der Entsalzung » reste devant le participe.",
      modelAnswer:
        "Als Problem gilt vor allem die bei der Entsalzung zurückbleibende Sole.",
    },
    {
      id: "s9-sb",
      label: "B",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Da die Sole schwerer ist als Meerwasser, sinkt sie zum Meeresboden ab und bildet dort eine Wolke.",
      highlight: "Da die Sole schwerer ist als Meerwasser",
      template: {
        before: "",
        after: ", sinkt sie zum Meeresboden ab und bildet dort eine Wolke.",
      },
      solutions: [
        "Wegen des höheren Gewichts der Sole gegenüber Meerwasser",
        "Aufgrund des höheren Gewichts der Sole im Vergleich zu Meerwasser",
      ],
      explanation:
        "La subordonnée causale avec comparatif devient « wegen / aufgrund + génitif ». « schwerer » se nominalise en « höheres Gewicht » ; la comparaison se rend par « gegenüber + datif » ou « im Vergleich zu + datif ».",
      modelAnswer:
        "Wegen des höheren Gewichts der Sole gegenüber Meerwasser sinkt sie zum Meeresboden ab und bildet dort eine Wolke.",
    },
    {
      id: "s9-sc",
      label: "C",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt: "Die Membranen müssen alle fünf bis sieben Jahre ersetzt werden.",
      highlight: "müssen alle fünf bis sieben Jahre ersetzt werden",
      template: { before: "", after: "." },
      solutions: [
        "Man muss die Membranen alle fünf bis sieben Jahre ersetzen",
        "muss man die Membranen alle fünf bis sieben Jahre ersetzen",
      ],
      explanation:
        "Le passif avec modal (« müssen … ersetzt werden ») se transforme en activité avec « man » : « Man muss die Membranen … ersetzen ». Le complément « die Membranen » passe à l'accusatif et l'infinitif reste en fin de phrase.",
      modelAnswer: "Man muss die Membranen alle fünf bis sieben Jahre ersetzen.",
    },
    {
      id: "s9-sd",
      label: "D",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Der Energiebedarf sinkt deutlich, indem man die Druckenergie der Sole zurückgewinnt.",
      highlight: "indem man die Druckenergie der Sole zurückgewinnt",
      template: { before: "Der Energiebedarf sinkt deutlich ", after: "." },
      solutions: ["durch die Rückgewinnung der Druckenergie der Sole"],
      explanation:
        "La subordonnée « indem man … zurückgewinnt » se nominalise avec « durch + Nominalisierung » : « durch die Rückgewinnung der Druckenergie der Sole », avec le génitif.",
      modelAnswer:
        "Der Energiebedarf sinkt deutlich durch die Rückgewinnung der Druckenergie der Sole.",
    },
    {
      id: "s9-se",
      label: "E",
      points: 1,
      type: "bezug",
      instruction: "Antworten Sie in einem vollständigen Satz.",
      prompt:
        "Auf welches Wort bezieht sich „sie“ in dem Satz „Da die Sole schwerer ist als Meerwasser, sinkt sie zum Meeresboden ab und bildet dort eine Wolke“?",
      criteria: [
        {
          id: "c1",
          label: "„Sie“ bezieht sich auf „die Sole“.",
          keywords: ["sole", "die sole"],
        },
      ],
      explanation:
        "Le pronom « sie » reprend le sujet de la subordonnée précédente, c'est-à-dire « die Sole » (la saumure).",
      modelAnswer:
        "„Sie“ bezieht sich auf „die Sole“, also auf das stark salzhaltige Wasser, das bei der Entsalzung zurückbleibt.",
    },
    {
      id: "s9-sf",
      label: "F",
      points: 3,
      type: "konnektor",
      instruction: REWRITE,
      prompt:
        "Obwohl die Umkehrosmose weniger Energie benötigt als die Destillation, bleibt der Strombedarf erheblich.",
      highlight: "Obwohl die Umkehrosmose weniger Energie benötigt als die Destillation",
      template: { before: "", after: ", bleibt der Strombedarf erheblich." },
      solutions: [
        "Trotz des geringeren Energiebedarfs der Umkehrosmose im Vergleich zur Destillation",
        "Trotz des geringeren Energiebedarfs der Umkehrosmose gegenüber der Destillation",
      ],
      explanation:
        "La concession « obwohl » devient « trotz + génitif ». « weniger Energie benötigen » se nominalise en « geringerer Energiebedarf » ; la comparaison se rend par « im Vergleich zur / gegenüber der Destillation » (datif).",
      modelAnswer:
        "Trotz des geringeren Energiebedarfs der Umkehrosmose im Vergleich zur Destillation bleibt der Strombedarf erheblich.",
    },
    {
      id: "s9-sg",
      label: "G",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Wenn der Strom aus fossilen Quellen stammt, entstehen pro Kubikmeter Trinkwasser etwa ein bis zwei Kilogramm CO2.",
      highlight: "Wenn der Strom aus fossilen Quellen stammt",
      template: {
        before: "",
        after:
          ", entstehen pro Kubikmeter Trinkwasser etwa ein bis zwei Kilogramm CO2.",
      },
      solutions: [
        "Bei Strom aus fossilen Quellen",
        "Im Falle fossil erzeugten Stroms",
        "Bei fossil erzeugtem Strom",
      ],
      explanation:
        "La condition « wenn … stammt » se transforme en groupe prépositionnel : « bei + nom » ou « im Falle + génitif ». Le participe « fossil erzeugt » s'accorde dans le groupe nominal.",
      modelAnswer:
        "Bei Strom aus fossilen Quellen entstehen pro Kubikmeter Trinkwasser etwa ein bis zwei Kilogramm CO2.",
    },
  ],
};
