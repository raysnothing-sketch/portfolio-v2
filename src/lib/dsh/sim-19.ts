import { sim19Lines } from "@/lib/dsh/texts-19";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim19: DshSimulation = {
  id: "sim-19",
  number: 19,
  slug: "das-meer-rueckt-naeher",
  title: "Das Meer rückt näher",
  subtitle: "Küstenschutz im Zeichen des steigenden Meeresspiegels",
  topic: "Küstenschutz",
  minutes: 90,
  text: { lines: sim19Lines, wordCount: 848 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 19",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s19-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel, zu den jeweiligen Erklärungen / Abbildungen. Beachten Sie das angegebene Beispiel.",
      items: [
        {
          id: "s19-q1-sturmflut",
          prompt:
            "außergewöhnlich hoher Wasserstand an der Küste, den starker Wind verursacht",
          answer: "die Sturmflut",
          example: true,
        },
        {
          id: "s19-q1-salzwiese",
          prompt:
            "Küstenstreifen, der regelmäßig von Salzwasser überflutet wird und mit salzverträglichen Pflanzen bewachsen ist",
          answer: "die Salzwiese",
        },
        {
          id: "s19-q1-sandvorspuelung",
          prompt:
            "Maßnahme, bei der Sand aus dem Meeresboden gesaugt und an den Strand gepumpt wird",
          answer: "die Sandvorspülung",
          accepted: ["die Vorspülung"],
        },
      ],
    },

    {
      kind: "open",
      id: "s19-q2",
      number: "2",
      skill: "verstehen",
      points: 3,
      prompt:
        "Nennen Sie die beiden Hauptursachen für den Anstieg des Meeresspiegels und erklären Sie, warum schmelzendes Meereis kaum eine Rolle spielt.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label: "Die Wassermassen im Meer erwärmen sich und dehnen sich dabei aus.",
          keywords: ["erwärmung", "ausdehnung", "erwärmen", "ausdehnen", "wassermassen"],
        },
        {
          id: "c2",
          label:
            "Gletscher und die Eisschilde auf Grönland und der Antarktis schmelzen, sodass zusätzliches Wasser vom Land ins Meer gelangt.",
          keywords: ["gletscher", "eisschilde", "grönland", "antarktis", "vom land"],
        },
        {
          id: "c3",
          label:
            "Meereis schwimmt bereits im Wasser und erhöht den Pegel kaum – wie ein schmelzender Eiswürfel ein volles Glas nicht überlaufen lässt.",
          keywords: ["meereis", "schwimmt", "eiswürfel", "kaum", "überlaufen"],
        },
      ],
      sampleAnswer:
        "Erstens erwärmen sich die Wassermassen im Meer und dehnen sich aus, sodass der Pegel auch ohne zusätzliches Wasser steigt. Zweitens schmelzen Gletscher sowie die Eisschilde auf Grönland und der Antarktis, wodurch mehr Wasser vom Land ins Meer gelangt. Schmelzendes Meereis dagegen erhöht den Meeresspiegel kaum, weil es schon im Wasser schwimmt – so wie ein schmelzender Eiswürfel ein volles Glas nicht überlaufen lässt.",
    },

    {
      kind: "open",
      id: "s19-q3",
      number: "3",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Grafik zeigt drei Szenarien für den Anstieg des Meeresspiegels bis zum Jahr 2100. Ordnen Sie die Balken A, B und C den Szenarien „starker Klimaschutz“, „mittlere Emissionen“ und „ungebremster Ausstoß“ zu und erklären Sie, warum die obere Grenze besonders unsicher ist.",
      chart: {
        kind: "bars",
        caption: "Anstieg des Meeresspiegels bis 2100 in drei Szenarien (in Metern)",
        unit: "Meter",
        bars: [
          { label: "A", value: 1.1 },
          { label: "B", value: 0.4 },
          { label: "C", value: 0.7 },
        ],
      },
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label: "Balken A (1,1 m) steht für ungebremsten Ausstoß.",
          keywords: ["a", "ungebremst", "1,1"],
        },
        {
          id: "c2",
          label: "Balken B (0,4 m) steht für starken Klimaschutz.",
          keywords: ["b", "klimaschutz", "0,4"],
        },
        {
          id: "c3",
          label: "Balken C (0,7 m) steht für mittlere Emissionen.",
          keywords: ["c", "mittlere emissionen", "0,7"],
        },
        {
          id: "c4",
          label:
            "Die obere Grenze ist besonders unsicher, weil niemand genau weiß, wie schnell die Eisschilde zerfallen.",
          keywords: ["eisschilde", "zerfall", "unsicher", "obere grenze"],
        },
      ],
      sampleAnswer:
        "Balken A mit 1,1 Meter gehört zum ungebremsten Ausstoß, Balken B mit 0,4 Meter zum starken Klimaschutz und Balken C mit 0,7 Meter zu mittleren Emissionen. Die obere Grenze ist besonders unsicher, weil niemand genau weiß, wie schnell die Eisschilde zerfallen.",
    },

    {
      kind: "open",
      id: "s19-q4",
      number: "4",
      skill: "verstehen",
      points: 4,
      prompt:
        "Beschreiben Sie, wie ein Deich aufgebaut ist und warum er Wellen standhält. Nennen Sie auch einen Nachteil des klassischen Küstenschutzes.",
      minWords: 50,
      criteria: [
        {
          id: "c1",
          label: "Ein Sandkern ist mit einer dicken Schicht Klei (festem Lehmboden) bedeckt.",
          keywords: ["sandkern", "klei", "sand", "lehmboden", "schicht"],
        },
        {
          id: "c2",
          label: "Ein mit Gras bewachsener Deich hält Wellen besser stand, weil die Wurzeln den Boden zusammenhalten.",
          keywords: ["gras", "wurzeln", "bewachsen", "zusammenhalten"],
        },
        {
          id: "c3",
          label: "Die flach geneigte Außenseite lässt die Wellen ihre Kraft verlieren, bevor sie die Krone erreichen.",
          keywords: ["flach", "außenseite", "geneigt", "kraft verlieren", "krone"],
        },
        {
          id: "c4",
          label:
            "Nachteil: Die Bauwerke müssen regelmäßig erhöht und verstärkt werden, was pro Kilometer mehrere Millionen Euro kostet.",
          keywords: ["erhöht", "verstärkt", "millionen euro", "kosten", "regelmäßig"],
        },
      ],
      sampleAnswer:
        "Ein Deich besteht meist aus einem Sandkern, der mit einer dicken Schicht Klei, einem festen Lehmboden, bedeckt ist. Ist er mit Gras bewachsen, halten die Wurzeln den Boden zusammen; außerdem ist die Außenseite flach geneigt, damit die Wellen ihre Kraft verlieren, bevor sie die Krone erreichen. Der Nachteil ist, dass solche Bauwerke regelmäßig erhöht und verstärkt werden müssen, was pro Kilometer mehrere Millionen Euro kostet.",
    },

    {
      kind: "open",
      id: "s19-q5a",
      number: "5a",
      skill: "verstehen",
      points: 1,
      prompt: "Wie schnell steigt der Meeresspiegel zurzeit im weltweiten Durchschnitt?",
      minWords: 3,
      criteria: [
        {
          id: "c1",
          label: "Um rund vier Millimeter pro Jahr.",
          keywords: ["vier millimeter", "4 millimeter", "millimeter pro jahr"],
          numeric: [4, 4],
        },
      ],
      sampleAnswer: "Um rund vier Millimeter pro Jahr.",
    },

    {
      kind: "open",
      id: "s19-q5b",
      number: "5b",
      skill: "verstehen",
      points: 3,
      prompt:
        "Erklären Sie, welchen Nutzen Salzwiesen für den Küstenschutz haben und warum sie als alleiniger Schutz nicht genügen.",
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label: "Salzwiesen dämpfen die Wellen: Nach 200 Metern sind sie nur noch ein Drittel so hoch.",
          keywords: ["wellen", "dämpfen", "200 meter", "drittel"],
        },
        {
          id: "c2",
          label:
            "Dadurch wird der Deich dahinter weniger belastet und kann niedriger und billiger gebaut werden.",
          keywords: ["deich", "belastung", "niedriger", "billiger"],
        },
        {
          id: "c3",
          label: "Als alleiniger Schutz reichen Salzwiesen meist nicht aus.",
          keywords: ["allein", "nicht aus", "meist nicht", "alleiniger schutz"],
        },
      ],
      sampleAnswer:
        "Salzwiesen dämpfen die Kraft der Wellen: Nach 200 Metern Salzwiese sind die Wellen nur noch ein Drittel so hoch wie am Rand des Wassers. Dadurch wird der Deich dahinter weniger belastet und kann niedriger und billiger gebaut werden. Als alleiniger Schutz reichen die Salzwiesen aber meist nicht aus, außerdem speichern sie Kohlenstoff und bieten seltenen Pflanzen und Vögeln einen Lebensraum.",
    },

    {
      kind: "open",
      id: "s19-q6",
      number: "6",
      skill: "verstehen",
      points: 4,
      prompt:
        "Erklären Sie, warum der steigende Meeresspiegel ärmere Länder und manche Städte besonders hart trifft. Nennen Sie zwei Beispiele aus dem Text.",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label:
            "Die finanziellen Möglichkeiten sind sehr unterschiedlich: Die Niederlande investieren seit Jahrzehnten Milliarden in Deiche, Sperrwerke und Sturmflutwehre.",
          keywords: ["niederlande", "milliarden", "geld", "finanziell", "sperrwerke"],
        },
        {
          id: "c2",
          label:
            "Ärmere Länder wie Bangladesch oder Inselstaaten können sich solche Bauwerke kaum leisten, obwohl dort Millionen Menschen in flachen Küstenregionen leben.",
          keywords: ["bangladesch", "inselstaaten", "kaum leisten", "flache küstenregionen"],
        },
        {
          id: "c3",
          label:
            "Manche Städte sinken zusätzlich: Jakarta sinkt um mehrere Zentimeter pro Jahr, weil große Mengen Grundwasser gepumpt werden.",
          keywords: ["jakarta", "grundwasser", "absinken", "sinkt", "zentimeter"],
        },
        {
          id: "c4",
          label: "Folge: Indonesien plant den Umzug der Hauptstadt.",
          keywords: ["umzug", "hauptstadt", "indonesien"],
        },
      ],
      sampleAnswer:
        "Reiche Länder wie die Niederlande können Milliarden in ein Schutzsystem aus Deichen, Sperrwerken und Sturmflutwehren investieren. Ärmere Länder wie Bangladesch, wo viele Millionen Menschen in flachen Küstenregionen leben, oder Inselstaaten, die nur wenige Meter über dem Meer liegen, können sich solche Bauwerke kaum leisten. Manche Städte sinken zusätzlich: In Jakarta werden große Mengen Grundwasser gepumpt, sodass einige Stadtteile pro Jahr mehrere Zentimeter absinken. Deshalb plant Indonesien den Umzug der Hauptstadt.",
    },

    {
      kind: "open",
      id: "s19-q7",
      number: "7",
      skill: "transfer",
      points: 4,
      prompt:
        "Eine Küstengemeinde überlegt, ob sie ihren alten Deich erhöhen, rückverlegen oder die Siedlung teilweise aufgeben soll. Welche Vor- und Nachteile nennt der Text für diese Möglichkeiten?",
      minWords: 60,
      criteria: [
        {
          id: "c1",
          label:
            "Erhöhung: technisch bewährt, aber pro Kilometer mehrere Millionen Euro teuer und muss regelmäßig wiederholt werden.",
          keywords: ["erhöhung", "bewährt", "millionen", "regelmäßig", "kosten"],
        },
        {
          id: "c2",
          label:
            "Rückverlegung: schafft Überflutungsflächen, die bei Sturmflut Wasser aufnehmen und den Wasserstand senken; dafür geht Land oft für immer an die Landwirtschaft verloren.",
          keywords: ["rückverlegung", "überflutungsflächen", "landwirtschaft", "land", "verloren"],
        },
        {
          id: "c3",
          label:
            "Bei der Rückverlegung dauern Planung und Einigung oft zehn Jahre und länger, auch wegen Eigentumsfragen und Entschädigungen.",
          keywords: ["zehn jahre", "eigentum", "entschädigung", "einigung", "planung"],
        },
        {
          id: "c4",
          label:
            "Aufgabe der Siedlung / Umsiedlung: Verlust von Heimat, sozialen Netzen und Lebensgrundlage; braucht Zeit, Geld für Entschädigungen und Mitsprache, sonst entsteht Widerstand.",
          keywords: ["umsiedlung", "heimat", "soziale netze", "lebensgrundlage", "mitsprache", "widerstand"],
        },
      ],
      sampleAnswer:
        "Die Erhöhung des Deichs ist technisch bewährt, kostet aber pro Kilometer mehrere Millionen Euro und muss regelmäßig wiederholt werden. Die Rückverlegung schafft Überflutungsflächen, die bei Sturmflut Wasser aufnehmen und den Wasserstand an den übrigen Deichen senken; dafür geht das Land oft für immer der Landwirtschaft verloren, und Planung sowie Einigung dauern wegen Eigentumsfragen und Entschädigungen häufig zehn Jahre oder länger. Wird die Siedlung teilweise aufgegeben, verlieren die Menschen Heimat, soziale Netze und ihre Lebensgrundlage; eine Umsiedlung braucht Zeit, Geld und Mitsprache, sonst entstehen Misstrauen und Widerstand.",
    },

    {
      kind: "truefalse",
      id: "s19-q8",
      number: "8",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind. Beachten Sie als Muster das angegebene Beispiel.",
      example: {
        text: "Der Meeresspiegel steigt seit einigen Jahren langsamer als früher.",
        correct: false,
        justification:
          "Im Text heißt es, dass sich der Anstieg seit einigen Jahren beschleunigt.",
      },
      statements: [
        {
          id: "s19-q8-1",
          text: "Sturmfluten reichen bei steigendem Meeresspiegel immer weiter ins Land.",
          correct: true,
          justification: "Im Text wörtlich genannt. (1 P)",
        },
        {
          id: "s19-q8-2",
          text: "Sandvorspülungen schützen eine Küste dauerhaft, ohne dass sie wiederholt werden müssen.",
          correct: false,
          justification:
            "Der aufgespülte Sand wird nach einigen Jahren wieder abgetragen; das macht die Maßnahme dauerhaft teuer. (1 P)",
        },
        {
          id: "s19-q8-3",
          text: "Salzwiesen speichern Kohlenstoff und bieten seltenen Pflanzen und Vögeln einen Lebensraum.",
          correct: true,
          justification: "Im Text genau so genannt. (1 P)",
        },
        {
          id: "s19-q8-4",
          text: "Indonesien plant den Umzug der Hauptstadt, weil der Meeresspiegel zu langsam steigt.",
          correct: false,
          justification:
            "Jakarta sinkt zusätzlich, weil Grundwasser gepumpt wird; der Anstieg ist nicht zu langsam. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s19-sa",
      label: "A",
      points: 2,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt: "Ein Deich, der mit Gras bewachsen ist, hält Wellen besser stand als ein kahler Wall.",
      highlight: "der mit Gras bewachsen ist",
      template: { before: "", after: " hält Wellen besser stand als ein kahler Wall." },
      solutions: ["Ein mit Gras bewachsener Deich"],
      explanation:
        "La relative « der … bewachsen ist » devient un attribut participial au participe II devant le nom : « ein mit Gras bewachsener Deich ». L'adjectif faible prend la terminaison -er après l'article indéfini « ein » au nominatif singulier.",
      modelAnswer: "Ein mit Gras bewachsener Deich hält Wellen besser stand als ein kahler Wall.",
    },
    {
      id: "s19-sb",
      label: "B",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Weil sich die Wassermassen im Meer erwärmen und dabei ausdehnen, steigt der Meeresspiegel auch ohne zusätzliches Wasser.",
      highlight: "Weil sich die Wassermassen im Meer erwärmen und dabei ausdehnen",
      template: { before: "", after: ", steigt der Meeresspiegel auch ohne zusätzliches Wasser." },
      solutions: [
        "Wegen der Erwärmung und Ausdehnung der Wassermassen im Meer",
        "Aufgrund der Erwärmung und Ausdehnung der Wassermassen im Meer",
      ],
      explanation:
        "La causale « weil … » devient « wegen / aufgrund + génitif ». Les deux verbes sont nominalisés en « Erwärmung und Ausdehnung », et le génitif « der Wassermassen im Meer » est conservé.",
      modelAnswer:
        "Wegen der Erwärmung und Ausdehnung der Wassermassen im Meer steigt der Meeresspiegel auch ohne zusätzliches Wasser.",
    },
    {
      id: "s19-sc",
      label: "C",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Um den Küstenschutz zu verbessern, werden zudem Karten erstellt, die zeigen, welche Gebiete bei Sturmflut überflutet werden.",
      highlight: "Um den Küstenschutz zu verbessern",
      template: {
        before: "",
        after: ", werden zudem Karten erstellt, die zeigen, welche Gebiete bei Sturmflut überflutet werden.",
      },
      solutions: ["Zur Verbesserung des Küstenschutzes"],
      explanation:
        "La finale « um … zu » devient « zur + nominalisation » : « zur Verbesserung des Küstenschutzes ». L'ancien complément d'objet accusatif passe au génitif après la nominalisation.",
      modelAnswer:
        "Zur Verbesserung des Küstenschutzes werden zudem Karten erstellt, die zeigen, welche Gebiete bei Sturmflut überflutet werden.",
    },
    {
      id: "s19-sd",
      label: "D",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt: "Die Kosten für Sandvorspülungen lassen sich kaum senken.",
      highlight: "lassen sich kaum senken",
      template: { before: "Die Kosten für Sandvorspülungen ", after: "." },
      solutions: ["können kaum gesenkt werden", "sind kaum senkbar"],
      explanation:
        "« sich lassen + infinitif » est un substitut de passif. Deux équivalents : le passif avec « können » (« können kaum gesenkt werden ») ou l'adjectif en -bar (« sind kaum senkbar »).",
      modelAnswer: "Die Kosten für Sandvorspülungen können kaum gesenkt werden.",
    },
    {
      id: "s19-se",
      label: "E",
      points: 1,
      type: "bezug",
      instruction: "Antworten Sie in einem vollständigen Satz.",
      prompt: "Worauf bezieht sich „Das“ in dem Satz „Das macht die Maßnahme dauerhaft teuer“?",
      criteria: [
        {
          id: "c1",
          label:
            "„Das“ bezieht sich darauf, dass der aufgespülte Sand vom Meer nach einigen Jahren wieder abgetragen wird.",
          keywords: ["abgetragen", "sand", "meer", "nach einigen jahren", "aufgespülte"],
        },
      ],
      explanation:
        "« Das » reprend le fait énoncé juste avant : le sable apporté par le beach-nourishment est à nouveau érodé par la mer après quelques années, ce qui rend la mesure durablement coûteuse.",
      modelAnswer:
        "„Das“ bezieht sich darauf, dass der aufgespülte Sand vom Meer nach einigen Jahren wieder abgetragen wird.",
    },
    {
      id: "s19-sf",
      label: "F",
      points: 3,
      type: "konnektor",
      instruction: REWRITE,
      prompt:
        "Obwohl Salzwiesen die Wellen deutlich dämpfen, reichen sie allein als Schutz meist nicht aus.",
      highlight: "Obwohl Salzwiesen die Wellen deutlich dämpfen",
      template: { before: "", after: ", reichen sie allein als Schutz meist nicht aus." },
      solutions: ["Trotz der deutlichen Dämpfung der Wellen durch Salzwiesen"],
      explanation:
        "La concession « obwohl » devient « trotz + génitif ». Le verbe « dämpfen » se nominalise en « Dämpfung » avec l'adjectif « deutlich » ; l'agent est introduit par « durch Salzwiesen » et le complément reste au génitif « der Wellen ».",
      modelAnswer:
        "Trotz der deutlichen Dämpfung der Wellen durch Salzwiesen reichen sie allein als Schutz meist nicht aus.",
    },
    {
      id: "s19-sg",
      label: "G",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Indem man den Deich landeinwärts verlegt, schafft man Überflutungsflächen, die bei Sturmflut Wasser aufnehmen.",
      highlight: "Indem man den Deich landeinwärts verlegt",
      template: {
        before: "",
        after: ", schafft man Überflutungsflächen, die bei Sturmflut Wasser aufnehmen.",
      },
      solutions: [
        "Durch die Verlegung des Deiches landeinwärts",
        "Durch die Verlegung des Deiches ins Landesinnere",
      ],
      explanation:
        "Le mode « indem man … verlegt » se nominalise en « durch die Verlegung des Deiches ». L'adverbe « landeinwärts » (ou « ins Landesinnere ») et le génitif « des Deiches » sont conservés.",
      modelAnswer:
        "Durch die Verlegung des Deiches landeinwärts schafft man Überflutungsflächen, die bei Sturmflut Wasser aufnehmen.",
    },
  ],
};
