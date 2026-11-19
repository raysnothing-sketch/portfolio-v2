import { sim08Lines } from "@/lib/dsh/texts-08";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim08: DshSimulation = {
  id: "sim-08",
  number: 8,
  slug: "quantencomputer-und-ihre-grenzen",
  title: "Quantencomputer und ihre Grenzen",
  subtitle: "Informatik · Physik und Datensicherheit",
  topic: "Quantencomputing",
  minutes: 90,
  text: { lines: sim08Lines, wordCount: 883 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 08",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s8-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel.",
      items: [
        {
          id: "s8-q1-qubit",
          prompt:
            "Grundeinheit der Quanteninformation, das Gegenstück zum klassischen Bit",
          answer: "das Qubit",
          example: true,
        },
        {
          id: "s8-q1-dekohaerenz",
          prompt:
            "Verlust der Quanteneigenschaften eines Qubits durch Störungen aus der Umgebung",
          answer: "die Dekohärenz",
        },
        {
          id: "s8-q1-schluessel",
          prompt: "Abbildung:.code-Symbol für ein Verschlüsselungsverfahren",
          answer: "der Schlüssel",
        },
        {
          id: "s8-q1-verschraenkung",
          prompt:
            "Quantenphysikalische Kopplung mehrerer Qubits, sodass ihre Zustände nicht mehr unabhängig voneinander beschrieben werden können",
          answer: "die Verschränkung",
        },
      ],
    },

    {
      kind: "open",
      id: "s8-q2",
      number: "2",
      skill: "verstehen",
      points: 3,
      prompt:
        "Erklären Sie den Begriff „Überlagerung“ und beschreiben Sie, was bei der Messung eines Qubits geschieht.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Ein Qubit kann beide Zustände (0 und 1) zugleich annehmen – im Unterschied zum klassischen Bit.",
          keywords: ["beide zustände", "überlagerung", "zugleich", "0 und 1"],
        },
        {
          id: "c2",
          label:
            "Erst bei der Messung wird es zu 0 oder 1; man erhält stets nur ein einziges Ergebnis.",
          keywords: ["messung", "ein einziges ergebnis", "0 oder 1"],
        },
        {
          id: "c3",
          label:
            "Die Wahrscheinlichkeiten für beide Ergebnisse stehen vorher fest.",
          keywords: ["wahrscheinlichkeit", "vorher fest", "festgelegt"],
        },
      ],
      sampleAnswer:
        "Eine Überlagerung bedeutet, dass ein Qubit – anders als ein klassisches Bit – nicht nur 0 oder 1 ist, sondern beide Zustände zugleich annehmen kann. Erst bei der Messung wird das Qubit zu 0 oder 1, und man erhält stets nur ein einziges Ergebnis. Die Wahrscheinlichkeiten für beide Ergebnisse sind dabei schon vorher festgelegt.",
    },

    {
      kind: "open",
      id: "s8-q3",
      number: "3",
      skill: "verstehen",
      points: 3,
      prompt:
        "Warum lässt sich die Fehlerkorrektur klassischer Computer nicht einfach auf Quantencomputer übertragen, und wie geht man stattdessen vor?",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Klassische Computer speichern Daten mehrfach und lassen im Zweifel die Mehrheit entscheiden.",
          keywords: ["mehrfach", "mehrheit", "mehrmals speichern"],
        },
        {
          id: "c2",
          label:
            "Bei Qubits geht das nicht, weil sich unbekannte Quantenzustände nicht kopieren lassen.",
          keywords: ["nicht kopieren", "kopierbar", "quantenzustände"],
        },
        {
          id: "c3",
          label:
            "Die Information eines logischen Qubits wird auf viele physische Qubits verteilt und laufend auf Fehler geprüft, ohne den Zustand selbst zu messen.",
          keywords: ["logisch", "physisch", "fehler", "ohne den zustand", "prüf"],
        },
      ],
      sampleAnswer:
        "Klassische Computer begegnen Fehlern, indem sie Daten mehrfach speichern und im Zweifel die Mehrheit entscheiden lassen. Bei Qubits ist dieser Weg versperrt, weil sich unbekannte Quantenzustände nicht kopieren lassen. Stattdessen verteilt man die Information eines logischen Qubits auf viele physische Qubits und prüft laufend, ob sich ein Fehler eingeschlichen hat, ohne den Zustand selbst zu messen.",
    },

    {
      kind: "open",
      id: "s8-q4",
      number: "4",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Grafik zeigt (mit logarithmischer Achse) die Zahl der Qubits für das Faktorisieren einer 2048 Bit langen Zahl. Der Balken C ist nicht ausgefüllt. Geben Sie nach den Informationen aus dem Text die ungefähre Höhe von Balken C an, erklären Sie, wie sie zustande kommt, und vergleichen Sie sie mit Balken A.",
      chart: {
        kind: "bars",
        caption:
          "Qubit-Bedarf für das Faktorisieren einer 2048 Bit langen Zahl (schematisch, logarithmische Skala)",
        unit: "Qubits",
        bars: [
          { label: "A · physische Qubits heutiger Prozessoren", value: 1000 },
          { label: "B · erforderliche logische Qubits", value: 4000 },
          { label: "C · benötigte physische Qubits (?)", value: null },
        ],
      },
      minWords: 50,
      criteria: [
        {
          id: "c1",
          label: "Balken C liegt bei etwa vier Millionen physischen Qubits.",
          keywords: [
            "vier millionen",
            "4 millionen",
            "4000000",
            "4.000.000",
          ],
          numeric: [3000000, 5000000],
        },
        {
          id: "c2",
          label:
            "Die Höhe ergibt sich aus rund 4000 erforderlichen logischen Qubits.",
          keywords: ["4000 logische", "logische qubits", "4000", "vier tausend"],
        },
        {
          id: "c3",
          label:
            "Für jedes logische Qubit werden etwa 1000 physische Qubits veranschlagt (Fehlerkorrektur): 4000 mal 1000.",
          keywords: [
            "1000 physische",
            "tausend physische",
            "fehlerkorrektur",
            "4000 mal 1000",
          ],
        },
        {
          id: "c4",
          label:
            "Vergleich mit Balken A: etwa 4000-mal so viel wie die gut tausend physischen Qubits heutiger Prozessoren.",
          keywords: [
            "4000-mal",
            "4000 mal",
            "viertausendmal",
            "heutige prozessoren",
          ],
        },
      ],
      sampleAnswer:
        "Balken C liegt bei etwa vier Millionen physischen Qubits. Nach gängigen Schätzungen sind für eine 2048 Bit lange Zahl rund 4000 logische Qubits nötig, und für jedes logische Qubit werden bei der Fehlerkorrektur etwa 1000 physische Qubits veranschlagt, also 4000 mal 1000. Das ist ungefähr 4000-mal so viel wie die gut tausend physischen Qubits heutiger Prozessoren in Balken A.",
    },

    {
      kind: "open",
      id: "s8-q5a",
      number: "5a",
      skill: "verstehen",
      points: 1,
      prompt:
        "Welche Aufgabe würde ein hinreichend großer Quantencomputer mit dem Shor-Algorithmus beherrschen?",
      minWords: 5,
      criteria: [
        {
          id: "c1",
          label:
            "Das Zerlegen sehr großer Zahlen (des Produkts zweier Primzahlen) in ihre Primfaktoren.",
          keywords: ["zerlegen", "primfaktoren", "primzahlen", "faktorisieren"],
        },
      ],
      sampleAnswer:
        "Das Zerlegen sehr großer Zahlen in ihre Primfaktoren (die Faktorisierung des Produkts zweier Primzahlen).",
    },

    {
      kind: "open",
      id: "s8-q5b",
      number: "5b",
      skill: "verstehen",
      points: 2,
      prompt:
        "Weshalb ist das Verschlüsselungsverfahren RSA durch Quantencomputer stärker bedroht als symmetrische Verfahren?",
      minWords: 30,
      criteria: [
        {
          id: "c1",
          label:
            "RSA beruht darauf, dass sich das Produkt zweier großer Primzahlen kaum wieder zerlegen lässt; genau das könnte ein Quantencomputer leisten.",
          keywords: ["rsa", "primzahlen", "zerlegen", "shor"],
        },
        {
          id: "c2",
          label:
            "Bei symmetrischen Verfahren halbiert sich nur die effektive Schlüssellänge, sodass ein längerer Schlüssel genügt.",
          keywords: [
            "symmetrisch",
            "schlüssellänge",
            "längerer schlüssel",
            "halbiert",
          ],
        },
      ],
      sampleAnswer:
        "RSA beruht darauf, dass sich das Produkt zweier sehr großer Primzahlen zwar leicht bilden, aber kaum wieder zerlegen lässt; genau diese Zerlegung würde ein hinreichend großer Quantencomputer mit dem Shor-Algorithmus beherrschen. Bei symmetrischen Verfahren halbiert sich dagegen nur die effektive Schlüssellänge, sodass ein längerer Schlüssel ausreicht.",
    },

    {
      kind: "open",
      id: "s8-q6",
      number: "6",
      skill: "transfer",
      points: 4,
      prompt:
        "Ein Krankenhaus muss Patientendaten 30 Jahre lang geheim halten. Erklären Sie möglichst genau, warum es sich schon heute mit Quantencomputern befassen sollte, obwohl diese noch nicht einsatzfähig sind, und welche Maßnahme sinnvoll wäre.",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label:
            "Schon heute können verschlüsselte Daten abgefangen und gespeichert werden, um sie später mit einem Quantencomputer zu entschlüsseln.",
          keywords: ["abfangen", "speichern", "später", "entschlüsseln"],
        },
        {
          id: "c2",
          label:
            "Gesundheitsakten müssen jahrzehntelang geheim bleiben und sind daher besonders betroffen.",
          keywords: ["gesundheitsakten", "jahrzehntelang", "geheim", "30 jahre"],
        },
        {
          id: "c3",
          label:
            "Sinnvoll ist die Post-Quanten-Kryptografie, die auf anderen mathematischen Problemen beruht und auf gewöhnlichen Computern läuft.",
          keywords: [
            "post-quanten",
            "gewöhnlichen computern",
            "mathematischen probleme",
          ],
        },
        {
          id: "c4",
          label:
            "Die Einführung ist aufwendig, weil Software und Geräte ausgetauscht werden müssen; daher früh beginnen (Übergang bis etwa 2035).",
          keywords: ["aufwendig", "austauschen", "früh", "2035"],
        },
      ],
      sampleAnswer:
        "Gefährlich ist schon heute die Strategie, verschlüsselte Daten abzufangen und zu speichern, um sie später zu entschlüsseln, sobald leistungsfähige Quantencomputer verfügbar sind. Gesundheitsakten müssen jahrzehntelang – im Beispiel 30 Jahre – vertraulich bleiben und sind daher besonders betroffen. Sinnvoll ist der Umstieg auf Post-Quanten-Kryptografie, die auf anderen mathematischen Problemen beruht und auf gewöhnlichen Computern läuft. Da die Einführung aufwendig ist und Software, Chipkarten und Netzwerkgeräte ausgetauscht werden müssen, sollte früh begonnen werden; Fachbehörden empfehlen den Übergang bis etwa 2035.",
    },

    {
      kind: "open",
      id: "s8-q7",
      number: "7",
      skill: "verstehen",
      points: 3,
      prompt:
        "Nennen Sie drei Gründe, warum Quantencomputer klassische Computer nicht ersetzen werden.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Ein Quantenvorteil ist nur für wenige Problemklassen nachweisbar; für Büroanwendungen oder Videostreaming bringt er nichts.",
          keywords: [
            "wenige problemklassen",
            "büroanwendungen",
            "videostreaming",
            "kein nutzen",
          ],
        },
        {
          id: "c2",
          label:
            "Qubits sind durch Dekohärenz und hohe Fehlerraten störanfällig und benötigen eine aufwendige Fehlerkorrektur mit sehr vielen physischen Qubits.",
          keywords: [
            "dekohärenz",
            "fehlerrate",
            "fehlerkorrektur",
            "störanfällig",
          ],
        },
        {
          id: "c3",
          label:
            "Das Einlesen großer Datenmengen ist ein Flaschenhals, sodass Quantenprozessoren nur als Beschleuniger neben klassischen Rechenzentren arbeiten werden.",
          keywords: [
            "flaschenhals",
            "einlesen",
            "beschleuniger",
            "klassischen rechenzentren",
          ],
        },
      ],
      sampleAnswer:
        "Erstens lässt sich ein Quantenvorteil nur für wenige Problemklassen nachweisen; für Textverarbeitung, Videostreaming oder die meisten Büroanwendungen bringt ein Quantencomputer keinerlei Nutzen. Zweitens sind Qubits durch Dekohärenz und hohe Fehlerraten störanfällig und brauchen eine aufwendige Fehlerkorrektur mit sehr vielen physischen Qubits. Drittens ist das Einlesen großer Datenmengen ein Flaschenhals, sodass Quantenprozessoren wohl nur als Beschleuniger neben klassischen Rechenzentren arbeiten werden.",
    },

    {
      kind: "open",
      id: "s8-q8",
      number: "8",
      skill: "verstehen",
      points: 3,
      prompt:
        "Beschreiben Sie, wie ein Quantencomputer helfen könnte, bei der Herstellung von Düngemitteln Energie zu sparen.",
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label:
            "Das Haber-Bosch-Verfahren benötigt hohe Temperaturen und Drücke und verbraucht deshalb ein bis zwei Prozent der weltweiten Energie.",
          keywords: [
            "haber-bosch",
            "temperatur",
            "druck",
            "ein bis zwei prozent",
          ],
        },
        {
          id: "c2",
          label:
            "Mikroorganismen führen denselben Schritt bei Raumtemperatur aus.",
          keywords: ["mikroorganismen", "raumtemperatur"],
        },
        {
          id: "c3",
          label:
            "Ein Quantencomputer könnte die Wirkung der Katalysatoren berechnen und so Hinweise auf sparsamere Verfahren liefern.",
          keywords: ["katalysator", "berechnen", "sparsamere verfahren"],
        },
      ],
      sampleAnswer:
        "Die Herstellung von Düngemitteln verbraucht rund ein bis zwei Prozent der weltweit eingesetzten Energie, weil das Haber-Bosch-Verfahren hohe Temperaturen und Drücke benötigt. Mikroorganismen führen denselben Schritt dagegen bei Raumtemperatur aus. Ein Quantencomputer könnte die Wirkung der Katalysatoren in diesen Mikroorganismen berechnen und damit Hinweise auf sparsamere Verfahren liefern.",
    },

    {
      kind: "truefalse",
      id: "s8-q9",
      number: "9",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind.",
      example: {
        text: "Ein Qubit nimmt stets genau den Wert 0 oder den Wert 1 an.",
        correct: false,
        justification:
          "Ein Qubit kann sich in einer Überlagerung beider Zustände befinden; erst die Messung liefert 0 oder 1.",
      },
      statements: [
        {
          id: "s8-q9-1",
          text: "Bei der Messung eines Qubits erhält man stets nur ein einziges Ergebnis.",
          correct: true,
          justification: "Im Text wörtlich genannt. (1 P)",
        },
        {
          id: "s8-q9-2",
          text: "Die Kohärenzzeit supraleitender Qubits hat sich in den letzten fünfzehn Jahren kaum verändert.",
          correct: false,
          justification:
            "Sie stieg von wenigen Mikrosekunden auf heute rund 100 Mikrosekunden bis eine Millisekunde. (1 P)",
        },
        {
          id: "s8-q9-3",
          text: "Die Post-Quanten-Kryptografie läuft auf gewöhnlichen Computern.",
          correct: true,
          justification:
            "Im Text: Verfahren, „die auf gewöhnlichen Computern laufen“. (1 P)",
        },
        {
          id: "s8-q9-4",
          text: "Die Quantenschlüsselverteilung eignet sich wegen ihres geringen technischen Aufwands für den breiten Einsatz.",
          correct: false,
          justification:
            "Sie gilt zwar als abhörsicher, erfordert aber spezielle Glasfaserverbindungen und eignet sich deshalb kaum für den breiten Einsatz. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s8-sa",
      label: "A",
      points: 3,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt:
        "Betroffen sind vor allem Informationen, die jahrzehntelang vertraulich behandelt werden müssen, etwa Gesundheitsakten.",
      highlight: "die jahrzehntelang vertraulich behandelt werden müssen",
      template: { before: "", after: ", etwa Gesundheitsakten." },
      solutions: ["jahrzehntelang vertraulich zu behandelnde Informationen"],
      explanation:
        "Le relatif avec « behandelt werden müssen » devient un attribut au gérondif (Gerundivum) : « zu behandelnde Informationen ». L'adverbe et l'adjectif se placent devant le participe, et l'accusatif pluriel est marqué par la terminaison -en.",
      modelAnswer:
        "Betroffen sind vor allem jahrzehntelang vertraulich zu behandelnde Informationen, etwa Gesundheitsakten.",
    },
    {
      id: "s8-sb",
      label: "B",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt:
        "Bei Qubits ist dieser Weg versperrt, weil sich unbekannte Quantenzustände nicht kopieren lassen.",
      highlight: "weil sich unbekannte Quantenzustände nicht kopieren lassen",
      template: {
        before:
          "Bei Qubits ist dieser Weg versperrt, weil sich unbekannte Quantenzustände ",
        after: ".",
      },
      solutions: ["nicht kopiert werden können", "nicht kopierbar sind"],
      explanation:
        "« sich + lassen + infinitif » est un substitut de passif. On le rend soit par le passif avec « können » (« nicht kopiert werden können »), soit par l'adjectif en -bar (« nicht kopierbar sind »).",
      modelAnswer:
        "Bei Qubits ist dieser Weg versperrt, weil sich unbekannte Quantenzustände nicht kopiert werden können.",
    },
    {
      id: "s8-sc",
      label: "C",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Da ein einzelner Rechenschritt ungefähr 50 Nanosekunden dauert, bleiben nur einige tausend Operationen, bevor die Information zerfällt.",
      highlight: "Da ein einzelner Rechenschritt ungefähr 50 Nanosekunden dauert",
      template: {
        before: "",
        after:
          ", bleiben nur einige tausend Operationen, bevor die Information zerfällt.",
      },
      solutions: [
        "Aufgrund der Dauer von ungefähr 50 Nanosekunden pro Rechenschritt",
        "Wegen der Dauer eines einzelnen Rechenschritts von ungefähr 50 Nanosekunden",
      ],
      explanation:
        "La subordonnée causale « da … dauert » devient « aufgrund / wegen + génitif ». Le verbe « dauern » se nominalise en « Dauer » ; la précision « pro Rechenschritt » peut aussi être exprimée par un génitif « eines einzelnen Rechenschritts ».",
      modelAnswer:
        "Aufgrund der Dauer von ungefähr 50 Nanosekunden pro Rechenschritt bleiben nur einige tausend Operationen, bevor die Information zerfällt.",
    },
    {
      id: "s8-sd",
      label: "D",
      points: 2,
      type: "konnektor",
      instruction: REWRITE,
      prompt:
        "Während ein klassisches Bit stets entweder den Wert 0 oder den Wert 1 annimmt, kann sich ein Qubit in einer Überlagerung beider Zustände befinden.",
      highlight:
        "Während ein klassisches Bit stets entweder den Wert 0 oder den Wert 1 annimmt, kann sich ein Qubit in einer Überlagerung beider Zustände befinden.",
      template: { before: "", after: "" },
      solutions: [
        "ein Qubit kann sich dagegen in einer Überlagerung beider Zustände befinden",
        "ein Qubit kann sich hingegen in einer Überlagerung beider Zustände befinden",
      ],
      explanation:
        "La confrontation introduite par « während » se rend par deux coordonnées avec « dagegen / hingegen ». Le verbe reste en deuxième position après le sujet « ein Qubit ».",
      modelAnswer:
        "Ein klassisches Bit nimmt stets entweder den Wert 0 oder den Wert 1 an; ein Qubit kann sich dagegen in einer Überlagerung beider Zustände befinden.",
    },
    {
      id: "s8-se",
      label: "E",
      points: 1,
      type: "bezug",
      instruction: "Antworten Sie in einem vollständigen Satz.",
      prompt:
        "„Genau diese Zerlegung würde ein hinreichend großer Quantencomputer mit dem Shor-Algorithmus beherrschen.“ Worauf bezieht sich „diese Zerlegung“?",
      criteria: [
        {
          id: "c1",
          label:
            "Auf das Zerlegen des Produkts zweier sehr großer Primzahlen in seine Faktoren.",
          keywords: ["primzahlen", "produkt", "zerlegen", "faktoren"],
        },
      ],
      explanation:
        "« Diese Zerlegung » reprend l'opération mentionnée juste avant : décomposer le produit de deux très grands nombres premiers, tâche que le Shor-Algorithmus saurait effectuer.",
      modelAnswer:
        "„Diese Zerlegung“ bezieht sich auf das Zerlegen des Produkts zweier sehr großer Primzahlen in seine Primfaktoren.",
    },
    {
      id: "s8-sf",
      label: "F",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Ein Forschungsteam konnte kürzlich zeigen, dass die Fehlerrate tatsächlich sinkt, wenn man das Qubit-Gitter vergrößert.",
      highlight: "wenn man das Qubit-Gitter vergrößert",
      template: { before: "", after: "." },
      solutions: [
        "bei einer Vergrößerung des Qubit-Gitters",
        "bei Vergrößerung des Qubit-Gitters",
        "im Falle einer Vergrößerung des Qubit-Gitters",
      ],
      explanation:
        "La condition « wenn man … vergrößert » se nominalise avec « bei / im Falle + Nominalisierung » : « bei einer Vergrößerung des Qubit-Gitters » avec le génitif.",
      modelAnswer:
        "Ein Forschungsteam konnte kürzlich zeigen, dass die Fehlerrate bei einer Vergrößerung des Qubit-Gitters tatsächlich sinkt.",
    },
    {
      id: "s8-sg",
      label: "G",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Um eine 2048 Bit lange Zahl zu faktorisieren, wären nach gängigen Schätzungen rund 4000 logische Qubits erforderlich, also etwa vier Millionen physische.",
      highlight: "Um eine 2048 Bit lange Zahl zu faktorisieren",
      template: {
        before: "",
        after:
          ", wären nach gängigen Schätzungen rund 4000 logische Qubits erforderlich, also etwa vier Millionen physische.",
      },
      solutions: [
        "Zur Faktorisierung einer 2048 Bit langen Zahl",
        "Für die Faktorisierung einer 2048 Bit langen Zahl",
      ],
      explanation:
        "La finale « um … zu faktorisieren » se nominalise en « zur / für die Faktorisierung + génitif » : « einer 2048 Bit langen Zahl ».",
      modelAnswer:
        "Zur Faktorisierung einer 2048 Bit langen Zahl wären nach gängigen Schätzungen rund 4000 logische Qubits erforderlich, also etwa vier Millionen physische.",
    },
  ],
};
