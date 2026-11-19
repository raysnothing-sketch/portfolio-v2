import { sim07Lines } from "@/lib/dsh/texts-07";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim07: DshSimulation = {
  id: "sim-07",
  number: 7,
  slug: "beton-neu-gedacht",
  title: "Beton neu gedacht",
  subtitle: "Wege zu einem klimafreundlicheren Baustoff",
  topic: "Bauen & Klima",
  minutes: 90,
  text: { lines: sim07Lines, wordCount: 877 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 07",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s7-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel.",
      items: [
        {
          id: "s7-q1-gesteinskoernung",
          prompt:
            "Sand und Kies, die zusammen mit Zement und Wasser den Beton bilden",
          answer: "die Gesteinskörnung",
          example: true,
        },
        {
          id: "s7-q1-betonmischer",
          prompt:
            "Abbildung:drehende Trommel, in der Sand, Kies, Zement und Wasser zu einem Brei vermischt werden",
          answer: "der Betonmischer",
        },
        {
          id: "s7-q1-huetstensand",
          prompt:
            "Schlacke aus dem Hochofen, die fein gemahlen als Bindemittel im Beton verwendet wird",
          answer: "der Hüttensand",
        },
        {
          id: "s7-q1-bewehrung",
          prompt: "Stahlverstärkung im Beton, die Zugkräfte aufnimmt",
          answer: "die Bewehrung",
        },
      ],
    },

    {
      kind: "open",
      id: "s7-q2",
      number: "2",
      skill: "verstehen",
      points: 3,
      prompt:
        "Erklären Sie, aus welchen zwei Quellen das CO2 bei der Zementherstellung stammt, und warum sich ein Teil der Emissionen nicht durch Ökostrom vermeiden lässt.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Rund 40 Prozent stammen aus den Brennstoffen, die den Ofen beheizen (Kohle, Gas, Abfall).",
          keywords: ["brennstoff", "kohle", "gas", "abfall", "40 prozent"],
        },
        {
          id: "c2",
          label:
            "Die übrigen 60 Prozent sind prozessbedingt: Beim Brennen zerfällt der Kalkstein chemisch in Kalziumoxid und Kohlendioxid.",
          keywords: ["prozessbedingt", "kalkstein", "kalziumoxid", "60 prozent"],
        },
        {
          id: "c3",
          label:
            "Dieser Anteil entsteht durch die chemische Reaktion selbst und lässt sich auch mit Ökostrom nicht vermeiden.",
          keywords: ["chemisch", "reaktion", "ökostrom", "unabhängig vom strom"],
        },
      ],
      sampleAnswer:
        "Bei der Zementherstellung fällt CO2 aus zwei Quellen an. Rund 40 Prozent stammen aus den Brennstoffen wie Kohle, Gas oder Abfall, mit denen der Ofen beheizt wird. Die übrigen 60 Prozent sind prozessbedingt: Beim Brennen zerfällt der Kalkstein chemisch in Kalziumoxid und Kohlendioxid. Dieser Anteil entsteht durch die chemische Reaktion selbst und lässt sich deshalb auch mit Ökostrom nicht vermeiden.",
    },

    {
      kind: "open",
      id: "s7-q3",
      number: "3",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Grafik zeigt die CO2-Emissionen pro Kubikmeter Beton für vier Rezepturen. Ordnen Sie die Balken B, C und D nach den Informationen aus dem Text den passenden Betonsorten zu (Beton mit Hüttensand, Recyclingbeton, Beton mit kalziniertem Ton) und erklären Sie, warum Balken B nur wenig niedriger ist als Balken A (Standardbeton).",
      chart: {
        kind: "bars",
        caption:
          "CO2-Emissionen verschiedener Betonrezepturen (kg CO2 pro m³, gerundet)",
        unit: "kg CO2/m³",
        bars: [
          { label: "A · Standardbeton", value: 300 },
          { label: "B · (?)", value: null },
          { label: "C · (?)", value: null },
          { label: "D · (?)", value: null },
        ],
      },
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label: "Balken B (280 kg) ist Recyclingbeton.",
          keywords: ["recyclingbeton", "recycling"],
        },
        {
          id: "c2",
          label: "Balken C (210 kg) ist Beton mit kalziniertem Ton (LC3).",
          keywords: ["kalziniert", "lc3", "ton"],
        },
        {
          id: "c3",
          label: "Balken D (180 kg) ist Beton mit 50 Prozent Hüttensand.",
          keywords: ["hüttensand", "50 prozent"],
        },
        {
          id: "c4",
          label:
            "Balken B ist nur wenig niedriger als A, weil beim Recyclingbeton nur die Gesteinskörnung ersetzt wird, die kaum CO2 verursacht; der Zement bleibt gleich und der Zementstein im Altbeton lässt sich nicht erneut verwenden.",
          keywords: [
            "gesteinskörnung",
            "kaum co2",
            "zement bleibt",
            "zementstein",
          ],
        },
      ],
      sampleAnswer:
        "Balken B mit etwa 280 Kilogramm ist Recyclingbeton, Balken C mit etwa 210 Kilogramm ist Beton mit kalziniertem Ton (LC3) und Balken D mit etwa 180 Kilogramm ist Beton mit 50 Prozent Hüttensand. Balken B liegt nur wenig unter Balken A, weil beim Recyclingbeton lediglich die Gesteinskörnung ersetzt wird, die kaum CO2 verursacht. Der Zement, der die Emissionen verursacht, bleibt unverändert, und der Zementstein im Altbeton lässt sich nicht erneut verwenden.",
    },

    {
      kind: "open",
      id: "s7-q4",
      number: "4",
      skill: "verstehen",
      points: 4,
      prompt:
        "Nennen Sie zwei Stoffe, mit denen sich ein Teil des Zements ersetzen lässt, und erklären Sie, warum bei einem davon die Verfügbarkeit in Zukunft sinken könnte.",
      minWords: 50,
      criteria: [
        {
          id: "c1",
          label: "Hüttensand, eine Schlacke aus dem Hochofen, ersetzt Zement.",
          keywords: ["hüttensand", "schlacke", "hochofen"],
        },
        {
          id: "c2",
          label: "Flugasche aus Kohlekraftwerken oder kalzinierter Ton.",
          keywords: ["flugasche", "kohlekraftwerk", "kalziniert", "ton"],
        },
        {
          id: "c3",
          label:
            "Hüttensand und Flugasche sind Nebenprodukte, die nur anfallen, solange Hochöfen und Kohlekraftwerke laufen.",
          keywords: ["nebenprodukt", "hochöfen", "kohlekraftwerke", "anfallen"],
        },
        {
          id: "c4",
          label:
            "Bei der Umstellung der Stahlwerke auf Wasserstoff und dem Kohleausstieg steht kaum noch Hüttensand oder Flugasche zur Verfügung; kalzinierter Ton gibt es dagegen fast überall.",
          keywords: [
            "wasserstoff",
            "kohleausstieg",
            "abgeschaltet",
            "verfügung",
            "ton",
          ],
        },
      ],
      sampleAnswer:
        "Ein Teil des Zements lässt sich durch Hüttensand, eine fein gemahlene Schlacke aus dem Hochofen, oder durch Flugasche aus Kohlekraftwerken ersetzen; auch kalzinierter Ton ist möglich. Hüttensand und Flugasche sind jedoch Nebenprodukte, die nur anfallen, solange Hochöfen und Kohlekraftwerke laufen. Stellen die Stahlwerke auf wasserstoffbasierte Verfahren um und werden die Kohlekraftwerke abgeschaltet, steht davon kaum noch etwas zur Verfügung. Kalzinierter Ton dagegen gibt es nahezu überall in ausreichender Menge.",
    },

    {
      kind: "open",
      id: "s7-q5a",
      number: "5a",
      skill: "verstehen",
      points: 1,
      prompt:
        "Wie viel Prozent der weltweiten CO2-Emissionen stammen aus der Zementherstellung?",
      minWords: 3,
      criteria: [
        {
          id: "c1",
          label: "Etwa acht Prozent.",
          keywords: ["acht", "acht prozent", "8 prozent"],
          numeric: [7, 9],
        },
      ],
      sampleAnswer: "Etwa acht Prozent.",
    },

    {
      kind: "open",
      id: "s7-q5b",
      number: "5b",
      skill: "verstehen",
      points: 3,
      prompt:
        "Wie wird Recyclingbeton hergestellt, welche Vorteile hat er, und warum ist seine Klimawirkung trotzdem begrenzt?",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Beton aus abgerissenen Gebäuden wird gebrochen und ersetzt als Gesteinskörnung den frisch abgebauten Kies.",
          keywords: ["abgerissenen", "gebrochen", "gesteinskörnung", "kies"],
        },
        {
          id: "c2",
          label:
            "Vorteile: Kies- und Sandabbau werden geschont, Deponien entlastet (Ressourcenschutz).",
          keywords: ["kiesabbau", "sandabbau", "deponien", "ressourcenschutz"],
        },
        {
          id: "c3",
          label:
            "Die Klimawirkung bleibt begrenzt, weil der Zementstein im Altbeton nicht erneut verwendet werden kann und die Gesteinskörnung kaum CO2 verursacht; die Emissionen sinken nur um rund sieben Prozent.",
          keywords: ["zementstein", "kaum co2", "sieben prozent", "begrenzt"],
        },
      ],
      sampleAnswer:
        "Für Recyclingbeton wird Beton aus abgerissenen Gebäuden gebrochen und ersetzt als Gesteinskörnung den frisch abgebauten Kies. Dadurch werden Kies- und Sandabbau geschont und Deponien entlastet. Die Klimawirkung ist jedoch gering, weil sich der Zementstein im Altbeton nicht erneut verwenden lässt und die Gesteinskörnung kaum CO2 verursacht; die Emissionen sinken nur um rund sieben Prozent.",
    },

    {
      kind: "open",
      id: "s7-q6",
      number: "6",
      skill: "verstehen",
      points: 4,
      prompt:
        "Beschreiben Sie, warum Stahlbeton nach Jahrzehnten Schäden zeigen kann, wie Carbonbeton dieses Problem löst, und nennen Sie eine Schwäche des Carbonbetons.",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label:
            "Der Beton schützt den Stahl zunächst durch seine alkalische Umgebung; durch die Karbonatisierung (Reaktion mit dem CO2 der Luft) sinkt dieser Schutz.",
          keywords: ["alkalisch", "karbonatisierung", "co2 der luft"],
        },
        {
          id: "c2",
          label:
            "Bei Feuchtigkeit rostet der Bewehrungsstahl, und der Beton platzt nach Jahrzehnten ab.",
          keywords: ["feuchtigkeit", "rostet", "platzt", "jahrzehnten"],
        },
        {
          id: "c3",
          label:
            "Carbonbeton verwendet Kohlenstofffasern, die nicht rosten und kaum Überdeckung benötigen; Bauteile werden bis zu 50 Prozent dünner und halten länger.",
          keywords: [
            "kohlenstoff",
            "carbonfaser",
            "rosten nicht",
            "überdeckung",
            "dünner",
          ],
        },
        {
          id: "c4",
          label:
            "Schwäche: Die Herstellung der Carbonfasern ist energieaufwendig und teuer, Langzeiterfahrungen fehlen und das Recycling ist schwierig.",
          keywords: [
            "energieaufwendig",
            "teuer",
            "langzeiterfahrung",
            "recycling",
          ],
        },
      ],
      sampleAnswer:
        "Zunächst schützt die alkalische Umgebung des Betons den Bewehrungsstahl. Durch die Karbonatisierung, die Reaktion mit dem CO2 der Luft, sinkt dieser Schutz jedoch allmählich. Bei Feuchtigkeit rostet der Stahl, und der Beton platzt nach Jahrzehnten ab, weshalb eine dicke Betonschicht nötig ist. Carbonbeton verwendet Fasern aus Kohlenstoff, die nicht rosten und kaum Überdeckung brauchen; dadurch lassen sich Bauteile bis zu 50 Prozent dünner bauen, was Zement spart und die Haltbarkeit erhöht. Die Schwäche: Die Herstellung der Carbonfasern ist energieaufwendig und teuer, Langzeiterfahrungen fehlen und das Recycling der Fasern ist bislang schwierig.",
    },

    {
      kind: "open",
      id: "s7-q7",
      number: "7",
      skill: "transfer",
      points: 4,
      prompt:
        "Eine Stadt plant den Neubau einer Fußgängerbrücke und eines Parkhauses und möchte die CO2-Emissionen so weit wie möglich senken. Welche Maßnahmen aus dem Text kann sie ergreifen, und welche Grenzen sollte sie dabei beachten?",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label:
            "Maßnahme: Bei öffentlichen Bauten höchstzulässige CO2-Werte pro Kubikmeter vorschreiben und Zementersatz verlangen.",
          keywords: ["co2-werte", "grenzwert", "ausschreibung", "zementersatz"],
        },
        {
          id: "c2",
          label:
            "Maßnahme: Beton mit Hüttensand oder kalziniertem Ton verwenden; für die Fußgängerbrücke bietet sich Carbonbeton an (dünnere, leichtere Bauteile), außerdem lange Nutzungsdauer.",
          keywords: [
            "hüttensand",
            "kalziniert",
            "carbonbeton",
            "nutzungsdauer",
          ],
        },
        {
          id: "c3",
          label:
            "Grenze: Hüttensand und Flugasche könnten künftig knapp werden, und Recyclingbeton verringert die Emissionen nur um rund sieben Prozent.",
          keywords: ["knapp", "verfügbarkeit", "sieben prozent", "recyclingbeton"],
        },
        {
          id: "c4",
          label:
            "Grenze: Neue Mischungen brauchen lange Zulassungsverfahren, und Carbonbeton ist teuer und ohne Langzeiterfahrung.",
          keywords: ["zulassungsverfahren", "teuer", "langzeitdaten", "normen"],
        },
      ],
      sampleAnswer:
        "Die Stadt kann bei öffentlichen Bauten höchstzulässige CO2-Werte pro Kubikmeter vorschreiben und damit Beton mit Hüttensand oder kalziniertem Ton nachfragen. Für die Fußgängerbrücke bietet sich Carbonbeton an, weil er dünnere und leichtere Bauteile erlaubt; außerdem sollte sie auf eine lange Nutzungsdauer achten. Grenzen sind die künftige Knappheit von Hüttensand und Flugasche, die geringe Wirkung von Recyclingbeton (nur rund sieben Prozent), die hohen Kosten und fehlenden Langzeiterfahrungen beim Carbonbeton sowie die langen Zulassungsverfahren für neue Mischungen.",
    },

    {
      kind: "truefalse",
      id: "s7-q8",
      number: "8",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind.",
      example: {
        text: "Der Zement macht den größten Teil des Betons aus.",
        correct: false,
        justification:
          "Zement macht nur etwa 10 bis 15 Prozent des Betons aus; Sand und Kies bilden den größten Teil.",
      },
      statements: [
        {
          id: "s7-q8-1",
          text: "Der prozessbedingte Anteil des CO2 beim Zementbrennen beträgt etwa 60 Prozent der Emissionen.",
          correct: true,
          justification:
            "Im Text: „Die übrigen 60 Prozent sind prozessbedingt“. (1 P)",
        },
        {
          id: "s7-q8-2",
          text: "Beton verursacht pro Tonne mehr CO2 als Stahl, weshalb seine Gesamtbilanz ungünstig ist.",
          correct: false,
          justification:
            "Pro Tonne verursacht Beton nur etwa ein Zehntel des CO2 von Stahl; die Gesamtbilanz ist wegen der riesigen Mengen ungünstig. (1 P)",
        },
        {
          id: "s7-q8-3",
          text: "Beton nimmt im Laufe seines Lebens wieder einen Teil des CO2 aus der Luft auf.",
          correct: true,
          justification:
            "Im Text: Schätzungen zufolge bindet er etwa ein Viertel des prozessbedingten CO2 zurück. (1 P)",
        },
        {
          id: "s7-q8-4",
          text: "Kalzinierter Ton wird auf höhere Temperaturen erhitzt als der Kalkstein im herkömmlichen Zement.",
          correct: false,
          justification:
            "Ton wird nur auf etwa 800 Grad erhitzt, Zement aus Kalkstein und Ton dagegen bei 1.450 Grad gebrannt. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s7-sa",
      label: "A",
      points: 2,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt:
        "Zement, der aus Kalkstein und Ton bei 1.450 Grad gebrannt wird, ist für den größten Teil der Emissionen verantwortlich.",
      highlight: "der aus Kalkstein und Ton bei 1.450 Grad gebrannt wird",
      template: {
        before: "",
        after: " ist für den größten Teil der Emissionen verantwortlich.",
      },
      solutions: ["Der aus Kalkstein und Ton bei 1.450 Grad gebrannte Zement"],
      explanation:
        "Le relatif « der … gebrannt wird » devient un attribut participial au participe II placé devant le nom : « der gebrannte Zement ». Le groupe est au passif, donc on garde le participe « gebrannte » avec la terminaison forte après l'article défini « Der ».",
      modelAnswer:
        "Der aus Kalkstein und Ton bei 1.450 Grad gebrannte Zement ist für den größten Teil der Emissionen verantwortlich.",
    },
    {
      id: "s7-sb",
      label: "B",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Da der Bewehrungsstahl bei Feuchtigkeit rostet, platzt der Beton nach Jahrzehnten ab.",
      highlight: "Da der Bewehrungsstahl bei Feuchtigkeit rostet",
      template: { before: "", after: ", platzt der Beton nach Jahrzehnten ab." },
      solutions: [
        "Wegen des Rostens des Bewehrungsstahls bei Feuchtigkeit",
        "Aufgrund des Rostens des Bewehrungsstahls bei Feuchtigkeit",
        "Wegen der Korrosion des Bewehrungsstahls bei Feuchtigkeit",
      ],
      explanation:
        "La subordonnée causale « da … rostet » devient un groupe prépositionnel au génitif : « wegen / aufgrund + génitif ». Le verbe « rosten » se nominalise en « Rosten » (ou « Korrosion »), et « der Bewehrungsstahl » passe au génitif « des Bewehrungsstahls ».",
      modelAnswer:
        "Wegen des Rostens des Bewehrungsstahls bei Feuchtigkeit platzt der Beton nach Jahrzehnten ab.",
    },
    {
      id: "s7-sc",
      label: "C",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt: "Um den Zementanteil zu senken, mischen Hersteller Hüttensand bei.",
      highlight: "Um den Zementanteil zu senken",
      template: { before: "", after: ", mischen Hersteller Hüttensand bei." },
      solutions: [
        "Zur Senkung des Zementanteils",
        "Zur Verringerung des Zementanteils",
      ],
      explanation:
        "La finale « um … zu » se nominalise avec « zu + nom » : « zur Senkung / Verringerung des Zementanteils ». Le complément est au génitif.",
      modelAnswer:
        "Zur Senkung des Zementanteils mischen Hersteller Hüttensand bei.",
    },
    {
      id: "s7-sd",
      label: "D",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt: "Der Zementstein im Altbeton lässt sich nicht erneut verwenden.",
      highlight: "lässt sich nicht erneut verwenden",
      template: { before: "Der Zementstein im Altbeton ", after: "." },
      solutions: [
        "kann nicht erneut verwendet werden",
        "ist nicht erneut verwendbar",
      ],
      explanation:
        "« sich + lassen + infinitif » est un substitut de passif. Deux équivalents : le passif avec verbe modal (« kann … verwendet werden ») ou l'adjectif en -bar (« ist … verwendbar »).",
      modelAnswer: "Der Zementstein im Altbeton kann nicht erneut verwendet werden.",
    },
    {
      id: "s7-se",
      label: "E",
      points: 1,
      type: "konnektor",
      instruction: "Antworten Sie in einem vollständigen Satz.",
      prompt:
        "Welche Funktion hat „allerdings“ in dem Satz „Das Verfahren funktioniert; allerdings verteuert es die Zementherstellung deutlich“?",
      criteria: [
        {
          id: "c1",
          label:
            "„Allerdings“ schränkt die positive Aussage ein bzw. stellt einen Gegensatz dar: Das Verfahren funktioniert, hat aber einen Nachteil.",
          keywords: [
            "einschränkung",
            "schränkt",
            "gegensatz",
            "nachteil",
            "aber",
          ],
        },
      ],
      explanation:
        "« Allerdings » marque une restriction ou un contraste : le procédé fonctionne, mais il présente un inconvénient (il renchérit la fabrication du ciment).",
      modelAnswer:
        "„Allerdings“ schränkt die vorangehende positive Aussage ein: Das Verfahren funktioniert zwar, hat aber den Nachteil, dass es die Zementherstellung deutlich verteuert.",
    },
    {
      id: "s7-sf",
      label: "F",
      points: 3,
      type: "konnektor",
      instruction: REWRITE,
      prompt:
        "Obwohl Beton pro Tonne weniger CO2 verursacht als Stahl, fällt seine Gesamtbilanz wegen der riesigen Mengen ungünstig aus.",
      highlight: "Obwohl Beton pro Tonne weniger CO2 verursacht als Stahl",
      template: {
        before: "",
        after: ", fällt seine Gesamtbilanz wegen der riesigen Mengen ungünstig aus.",
      },
      solutions: [
        "Trotz der geringeren CO2-Emissionen pro Tonne im Vergleich zu Stahl",
        "Trotz des geringeren CO2-Ausstoßes von Beton pro Tonne gegenüber Stahl",
      ],
      explanation:
        "La concession « obwohl » devient « trotz + génitif ». Le verbe « verursachen » se nominalise en « Emissionen / Ausstoß » avec un comparatif (« geringer »), et le complément de comparaison reste correct (« im Vergleich zu Stahl / gegenüber Stahl »).",
      modelAnswer:
        "Trotz der geringeren CO2-Emissionen pro Tonne im Vergleich zu Stahl fällt seine Gesamtbilanz wegen der riesigen Mengen ungünstig aus.",
    },
    {
      id: "s7-sg",
      label: "G",
      points: 2,
      type: "konnektor",
      instruction: REWRITE,
      prompt:
        "Durch den Einsatz von Carbonbewehrung lassen sich Bauteile bis zu 50 Prozent dünner bauen.",
      highlight: "Durch den Einsatz von Carbonbewehrung",
      template: {
        before: "",
        after: " lassen sich Bauteile bis zu 50 Prozent dünner bauen.",
      },
      solutions: [
        "Indem man Carbonbewehrung einsetzt,",
        "Wenn man Carbonbewehrung einsetzt,",
      ],
      explanation:
        "Le groupe nominal « durch den Einsatz von … » se verbalise en subordonnée avec « indem / wenn ». Le sujet est « man », le verbe « einsetzen » se place à la fin de la subordonnée et la virgule est nécessaire.",
      modelAnswer:
        "Indem man Carbonbewehrung einsetzt, lassen sich Bauteile bis zu 50 Prozent dünner bauen.",
    },
  ],
};
