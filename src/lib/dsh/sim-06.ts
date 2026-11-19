import { sim06Lines } from "@/lib/dsh/texts";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim06: DshSimulation = {
  id: "sim-06",
  number: 6,
  slug: "das-digitale-ebenbild",
  title: "Das digitale Ebenbild",
  subtitle: "Digitale Zwillinge in der Industrie",
  topic: "Digitalisierung",
  minutes: 90,
  text: { lines: sim06Lines, wordCount: 863 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 06",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s6-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel.",
      items: [
        {
          id: "s6-q1-sensor",
          prompt:
            "Messgerät, das z. B. Temperatur oder Schwingungen erfasst und in elektrische Signale umwandelt",
          answer: "der Sensor",
          example: true,
        },
        {
          id: "s6-q1-windkraftanlage",
          prompt: "Abbildung: Anlage mit langem Rotorblatt zur Erzeugung von Windstrom",
          answer: "die Windkraftanlage",
        },
        {
          id: "s6-q1-wartung",
          prompt: "regelmäßige Überprüfung und Instandhaltung einer Maschine, damit sie zuverlässig funktioniert",
          answer: "die Wartung",
        },
        {
          id: "s6-q1-retrofit",
          prompt:
            "Vorgang, bei dem eine ältere Maschine nachträglich mit neuer Technik, z. B. Sensoren, ausgestattet wird",
          answer: "das Retrofit",
          accepted: ["die Nachrüstung"],
        },
      ],
    },

    {
      kind: "open",
      id: "s6-q2",
      number: "2",
      skill: "verstehen",
      points: 3,
      prompt:
        "Erklären Sie den Begriff „digitaler Zwilling“ und beschreiben Sie, worin er sich von einer klassischen Simulation unterscheidet.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label: "Ein digitaler Zwilling ist ein virtuelles Abbild einer realen Maschine, Anlage oder Fabrik.",
          keywords: ["virtuelles abbild", "reale maschine", "anlage", "fabrik"],
        },
        {
          id: "c2",
          label: "Er wird ständig mit Daten aus dem realen Betrieb bzw. von Sensoren versorgt.",
          keywords: ["ständig", "laufend", "daten", "sensoren", "messdaten"],
        },
        {
          id: "c3",
          label: "Klassische Simulation rechnet einmal mit festen Annahmen; der Zwilling wird laufend aktualisiert.",
          keywords: ["einmal", "feste annahmen", "aktualisiert", "unterschied"],
        },
      ],
      sampleAnswer:
        "Ein digitaler Zwilling ist ein virtuelles Abbild einer realen Maschine, einer Anlage oder sogar einer ganzen Fabrik, das ständig mit Daten aus dem realen Betrieb versorgt wird. Eine klassische Simulation rechnet nur einmal mit festen Annahmen; der digitale Zwilling wird dagegen laufend mit Messdaten von Sensoren aktualisiert und spiegelt so jederzeit den aktuellen Zustand des Originals wider.",
    },

    {
      kind: "open",
      id: "s6-q3",
      number: "3",
      skill: "verstehen",
      points: 4,
      prompt:
        "Beschreiben Sie, wie digitale Zwillinge bei der Planung einer neuen Montagelinie helfen und welche Vorteile sich daraus ergeben.",
      minWords: 50,
      criteria: [
        {
          id: "c1",
          label: "Die Montagelinie wird im Computer aufgebaut; Roboterbewegungen werden virtuell getestet, um Kollisionen zu vermeiden.",
          keywords: ["computer", "roboterbewegung", "kollision", "virtuell"],
        },
        {
          id: "c2",
          label: "Engpässe im Materialfluss zeigen sich vor der Investition in Maschinen.",
          keywords: ["engpässe", "materialfluss", "investiert", "geld"],
        },
        {
          id: "c3",
          label: "Die virtuelle Inbetriebnahme verkürzt den Produktionsanlauf um etwa ein Drittel.",
          keywords: ["inbetriebnahme", "drittel", "anlauf"],
        },
        {
          id: "c4",
          label: "Änderungen lassen sich ohne Stillstand erproben; eine Stillstandsminute kostet mehrere tausend Euro.",
          keywords: ["stillgelegt", "stillstand", "tausend euro", "änderungen"],
        },
      ],
      sampleAnswer:
        "Die Montagelinie wird vollständig im Computer aufgebaut, und jede Roboterbewegung wird zunächst virtuell getestet, um Kollisionen zu vermeiden. Engpässe im Materialfluss zeigen sich, bevor Geld in Maschinen investiert wurde. Durch diese virtuelle Inbetriebnahme verkürzt sich der Produktionsanlauf um etwa ein Drittel. Auch Änderungen an laufenden Anlagen lassen sich im Zwilling erproben, ohne die Produktion stillzulegen, was bei mehreren tausend Euro Kosten pro Stillstandsminute viel Geld spart.",
    },

    {
      kind: "open",
      id: "s6-q4",
      number: "4",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Grafik zeigt den Verschleiß einer Maschine im Lauf der Zeit. Ordnen Sie den markierten Zeitpunkten 1, 2 und 3 jeweils die Wartungsstrategie zu (vorbeugende Wartung nach festen Intervallen, vorausschauende Wartung, reaktive Wartung nach dem Ausfall) und erklären Sie, warum die Strategie bei Zeitpunkt 2 vorteilhaft ist.",
      chart: {
        kind: "curve",
        caption: "Verschleiß einer Maschine und mögliche Zeitpunkte der Wartung (schematisch)",
        xLabel: "Betriebszeit",
        yLabel: "Verschleiß",
        points: [
          { label: "Start", value: 0 },
          { label: "Zeitpunkt 1 · 5.000 h", value: 25 },
          { label: "Zeitpunkt 2 · kurz vor Ausfall", value: 80 },
          { label: "Zeitpunkt 3 · Ausfall", value: 100 },
        ],
      },
      minWords: 50,
      criteria: [
        {
          id: "c1",
          label: "Zeitpunkt 1: vorbeugende Wartung nach festen Intervallen.",
          keywords: ["zeitpunkt 1", "vorbeugend", "intervall"],
        },
        {
          id: "c2",
          label: "Zeitpunkt 2: vorausschauende Wartung mit Alarm des Zwillings.",
          keywords: ["zeitpunkt 2", "vorauss", "zwilling", "alarm"],
        },
        {
          id: "c3",
          label: "Zeitpunkt 3: reaktive Wartung erst nach dem Ausfall.",
          keywords: ["zeitpunkt 3", "reaktiv", "ausfall"],
        },
        {
          id: "c4",
          label:
            "Vorteil bei Zeitpunkt 2: kein zu frühes Tauschen, keine ungeplanten Stillstände, Stillstände sinken um 20 bis 30 Prozent.",
          keywords: ["zu früh", "ungeplant", "stillstand", "20 bis 30", "ersatzteil"],
        },
      ],
      sampleAnswer:
        "Zeitpunkt 1 entspricht der vorbeugenden Wartung nach festen Intervallen, bei der Teile getauscht werden, die noch Wochen gehalten hätten. Zeitpunkt 2 ist die vorausschauende Wartung: Der Zwilling schlägt kurz vor dem Erreichen der Ausfallgrenze Alarm. Zeitpunkt 3 ist die reaktive Wartung, bei der erst nach dem Ausfall repariert wird. Bei Zeitpunkt 2 werden Teile weder zu früh getauscht, noch kommt es zu einem ungeplanten Stillstand; die ungeplanten Stillstände sinken um 20 bis 30 Prozent, und das Team kommt mit dem passenden Ersatzteil.",
    },

    {
      kind: "open",
      id: "s6-q5a",
      number: "5a",
      skill: "verstehen",
      points: 1,
      prompt: "Um wie viel Prozent sinken die ungeplanten Stillstände durch vorausschauende Wartung je nach Branche?",
      minWords: 4,
      criteria: [
        {
          id: "c1",
          label: "Um 20 bis 30 Prozent.",
          numeric: [20, 30],
        },
      ],
      sampleAnswer: "Um 20 bis 30 Prozent.",
    },

    {
      kind: "open",
      id: "s6-q5b",
      number: "5b",
      skill: "verstehen",
      points: 3,
      prompt:
        "Warum ist die Datenqualität für einen digitalen Zwilling so wichtig, und wie versuchen Betreiber, sie zu sichern? Nennen Sie zwei Probleme und eine Gegenmaßnahme.",
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label: "Der Zwilling ist nur so gut wie seine Daten; Sensoren driften, Messwerte weichen ab.",
          keywords: ["nur so gut", "driften", "abweichen", "messwerte"],
        },
        {
          id: "c2",
          label: "Daten können lückenhaft sein oder ein Sensor liefert unbemerkt falsche Werte.",
          keywords: ["lückenhaft", "funkausfall", "falsche werte"],
        },
        {
          id: "c3",
          label: "Gegenmaßnahmen: regelmäßige Kalibrierung und Abgleich mit der Realität bzw. Nachjustierung ab fünf Prozent.",
          keywords: ["kalibriert", "verglichen", "nachjustiert", "fünf prozent"],
        },
      ],
      sampleAnswer:
        "Der Zwilling ist nur so gut wie die Daten, mit denen er arbeitet. Probleme sind driftende Sensoren, deren Messwerte mit der Zeit abweichen, sowie lückenhafte Daten nach einem Funkausfall oder stillschweigend falsche Werte. Als Gegenmaßnahmen werden die Sensoren regelmäßig kalibriert und das Modell mit der Realität verglichen; weicht die Vorhersage um mehr als fünf Prozent ab, wird es nachjustiert.",
    },

    {
      kind: "open",
      id: "s6-q6",
      number: "6",
      skill: "verstehen",
      points: 4,
      prompt:
        "Nennen Sie zwei Hindernisse, die dem breiten Einsatz digitaler Zwillinge im Weg stehen, und erklären Sie, wie man ihnen begegnet. Gehen Sie dabei auch auf die Sicherheit ein.",
      minWords: 50,
      criteria: [
        {
          id: "c1",
          label: "Maschinen verschiedener Hersteller sprechen unterschiedliche Datensprachen; jede Schnittstelle muss einzeln programmiert werden.",
          keywords: ["datensprachen", "schnittstelle", "hersteller"],
        },
        {
          id: "c2",
          label: "Lösung: einheitliche Standards wie die Verwaltungsschale mit demselben Format für jedes Bauteil.",
          keywords: ["standards", "verwaltungsschale", "format", "bauteil"],
        },
        {
          id: "c3",
          label: "Sicherheitsrisiko: Betriebsgeheimnisse und manipulierte Zwillinge können falsche Empfehlungen geben.",
          keywords: ["betriebsgeheimnisse", "manipuliert", "angreifer", "falsche empfehlungen"],
        },
        {
          id: "c4",
          label: "Gegenmaßnahmen: Verschlüsselung, klare Zugriffsrechte, keine Cloud.",
          keywords: ["verschlüsselung", "zugriffsrechte", "cloud"],
        },
      ],
      sampleAnswer:
        "Ein Hindernis ist die mangelnde Verträglichkeit: Maschinen verschiedener Hersteller sprechen unterschiedliche Datensprachen, sodass jede Schnittstelle einzeln programmiert werden muss. Als Lösung gelten einheitliche Standards wie die Verwaltungsschale, die für jedes Bauteil dieselben Informationen im selben Format bereitstellt. Ein zweites Hindernis ist die Sicherheit, denn der Zwilling enthält Betriebsgeheimnisse und ein manipulierter Zwilling könnte falsche Empfehlungen geben. Deshalb setzen Unternehmen auf Verschlüsselung und klare Zugriffsrechte; manche übertragen ihre Daten gar nicht erst in eine Cloud.",
    },

    {
      kind: "open",
      id: "s6-q7",
      number: "7",
      skill: "transfer",
      points: 4,
      prompt:
        "Ein mittelständisches Unternehmen betreibt eine 25 Jahre alte Fräsmaschine ohne Sensoren und überlegt, einen digitalen Zwilling einzuführen. Welche Argumente aus dem Text sprechen dafür, welche dagegen?",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label: "Dafür: vorausschauende Wartung senkt ungeplante Stillstände um 20 bis 30 Prozent.",
          keywords: ["stillstände", "20 bis 30", "vorauss"],
        },
        {
          id: "c2",
          label: "Dafür: trotz hoher Investitionskosten rechnet sich der Zwilling oft nach wenigen Jahren.",
          keywords: ["investitionskosten", "wenigen jahren", "rechnet sich", "amortisation"],
        },
        {
          id: "c3",
          label: "Dagegen: die alte Maschine muss aufwendig mit Sensoren nachgerüstet werden (Retrofit).",
          keywords: ["retrofit", "nachgerüstet", "sensoren", "aufwendig"],
        },
        {
          id: "c4",
          label: "Dagegen: mittelständische Betriebe finden kaum Fachleute; bei einfachen Maschinen lohnt es sich nicht.",
          keywords: ["fachleute", "mittelständische", "einfachen", "billigen", "lohnt"],
        },
      ],
      sampleAnswer:
        "Dafür spricht, dass vorausschauende Wartung die ungeplanten Stillstände um 20 bis 30 Prozent senken kann und sich ein digitaler Zwilling trotz hoher Investitionskosten oft schon nach wenigen Jahren rechnet. Dagegen spricht, dass die 25 Jahre alte Maschine zunächst aufwendig mit Sensoren nachgerüstet werden müsste, dass mittelständische Betriebe kaum Fachleute für Maschinen und Datenanalyse finden und dass sich der Aufwand bei einfachen, billigen Maschinen in der Regel nicht lohnt.",
    },

    {
      kind: "truefalse",
      id: "s6-q8",
      number: "8",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind.",
      example: {
        text: "Bei der reaktiven Wartung wird die Maschine schon repariert, bevor sie ausfällt.",
        correct: false,
        justification: "Im Text: Bei der reaktiven Wartung wird erst repariert, wenn die Maschine ausgefallen ist.",
      },
      statements: [
        {
          id: "s6-q8-1",
          text: "Bei der vorbeugenden Wartung werden Teile nach festen Intervallen getauscht, auch wenn sie noch länger gehalten hätten.",
          correct: true,
          justification:
            "Im Text: Teile werden z. B. nach 5.000 Betriebsstunden getauscht, häufig auch wenn sie noch Wochen gehalten hätten. (1 P)",
        },
        {
          id: "s6-q8-2",
          text: "Der Zwilling wird nachjustiert, wenn seine Vorhersage um mehr als zehn Prozent von der Realität abweicht.",
          correct: false,
          justification: "Im Text liegt die Grenze bei mehr als fünf Prozent. (1 P)",
        },
        {
          id: "s6-q8-3",
          text: "Die Wartungskosten des beschriebenen Windparks sanken durch den Einsatz von Zwillingen.",
          correct: true,
          justification: "Im Text: Die Wartungskosten sanken um etwa 15 Prozent. (1 P)",
        },
        {
          id: "s6-q8-4",
          text: "Ein Zwilling lohnt sich dem Text zufolge vor allem bei einfachen, billigen Maschinen.",
          correct: false,
          justification:
            "Bei einfachen, billigen Maschinen lohnt sich der Aufwand in der Regel nicht. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s6-sa",
      label: "A",
      points: 2,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt:
        "Daten, die von Sensoren erfasst werden, fließen laufend in das Modell ein, sodass es jederzeit den aktuellen Zustand des Originals widerspiegelt.",
      highlight: "die von Sensoren erfasst werden",
      template: {
        before: "",
        after:
          " fließen laufend in das Modell ein, sodass es jederzeit den aktuellen Zustand des Originals widerspiegelt.",
      },
      solutions: ["Von Sensoren erfasste Daten"],
      explanation:
        "La relative au passif « die … erfasst werden » devient un attribut participial au participe II « erfasste » placé devant le nom. En début de phrase, le premier mot prend la majuscule.",
      modelAnswer:
        "Von Sensoren erfasste Daten fließen laufend in das Modell ein, sodass es jederzeit den aktuellen Zustand des Originals widerspiegelt.",
    },
    {
      id: "s6-sb",
      label: "B",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Da die Messwerte der Sensoren mit der Zeit abweichen, müssen die Sensoren regelmäßig kalibriert werden.",
      highlight: "Da die Messwerte der Sensoren mit der Zeit abweichen",
      template: { before: "", after: ", müssen die Sensoren regelmäßig kalibriert werden." },
      solutions: [
        "Wegen der Abweichung der Messwerte der Sensoren im Lauf der Zeit",
        "Aufgrund der mit der Zeit zunehmenden Abweichung der Messwerte der Sensoren",
      ],
      explanation:
        "La cause avec « da » devient un groupe au génitif avec « wegen / aufgrund ». Le verbe « abweichen » se nominalise en « Abweichung » ; les compléments « der Messwerte der Sensoren » restent au génitif.",
      modelAnswer:
        "Wegen der Abweichung der Messwerte der Sensoren im Lauf der Zeit müssen die Sensoren regelmäßig kalibriert werden.",
    },
    {
      id: "s6-sc",
      label: "C",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt: "Viele Ausfälle lassen sich Wochen im Voraus vorhersagen.",
      highlight: "lassen sich Wochen im Voraus vorhersagen",
      template: { before: "Viele Ausfälle ", after: "." },
      solutions: [
        "können Wochen im Voraus vorhergesagt werden",
        "sind Wochen im Voraus vorhersagbar",
      ],
      explanation:
        "« sich lassen + infinitif » est un substitut de passif. Équivalents : passif avec modal « können … vorhergesagt werden » ou adjectif en -bar « sind … vorhersagbar ».",
      modelAnswer: "Viele Ausfälle können Wochen im Voraus vorhergesagt werden.",
    },
    {
      id: "s6-sd",
      label: "D",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt: "Um Kollisionen zu vermeiden, wird jede Roboterbewegung zunächst virtuell getestet.",
      highlight: "Um Kollisionen zu vermeiden",
      template: { before: "", after: ", wird jede Roboterbewegung zunächst virtuell getestet." },
      solutions: ["Zur Vermeidung von Kollisionen"],
      explanation:
        "La finale en « um … zu » se nominalise avec « zu + nom » : « zur Vermeidung von Kollisionen ». Le complément est introduit par « von ».",
      modelAnswer:
        "Zur Vermeidung von Kollisionen wird jede Roboterbewegung zunächst virtuell getestet.",
    },
    {
      id: "s6-se",
      label: "E",
      points: 1,
      type: "konjunktiv",
      instruction: "Beantworten Sie die Frage in einem vollständigen Satz.",
      prompt:
        "Warum steht in dem Satz „Ohne den Zwilling müsste die Anlage für den Test stillgelegt werden“ der Konjunktiv II („müsste“)?",
      criteria: [
        {
          id: "c1",
          label:
            "Konjunktiv II, weil ein hypothetischer bzw. irrealer Fall beschrieben wird, der nicht der Wirklichkeit entspricht.",
          keywords: ["hypothetisch", "irreal", "nicht der wirklichkeit", "nicht verwirklicht", "nicht eingetreten"],
        },
      ],
      explanation:
        "« müsste » est un Konjunktiv II : il exprime une condition irréelle. Le Zwilling existe, donc la mise à l'arrêt pour le test n'est pas nécessaire en réalité.",
      modelAnswer:
        "Der Konjunktiv II steht, weil der Satz einen hypothetischen Fall beschreibt: Der Zwilling existiert ja, die Stilllegung ist also nicht notwendig.",
    },
    {
      id: "s6-sf",
      label: "F",
      points: 3,
      type: "konnektor",
      instruction: REWRITE,
      prompt:
        "Trotz hoher Investitionskosten rechnet sich ein digitaler Zwilling oft schon nach wenigen Jahren.",
      highlight: "Trotz hoher Investitionskosten",
      template: { before: "", after: " rechnet sich ein digitaler Zwilling oft schon nach wenigen Jahren." },
      solutions: [
        "Obwohl die Investitionskosten hoch sind,",
        "Obwohl die Investitionen hohe Kosten verursachen,",
      ],
      explanation:
        "La concession « trotz + génitif » se verbalise en subordonnée avec « obwohl ». L'adjectif nominalisé « hohe Investitionskosten » redevient le prédicat « die Kosten sind hoch », avec le verbe à la fin et une virgule.",
      modelAnswer:
        "Obwohl die Investitionskosten hoch sind, rechnet sich ein digitaler Zwilling oft schon nach wenigen Jahren.",
    },
    {
      id: "s6-sg",
      label: "G",
      points: 2,
      type: "konnektor",
      instruction: REWRITE,
      prompt:
        "Klassische Simulationen rechnen nur einmal mit festen Annahmen; der digitale Zwilling wird dagegen laufend mit Messdaten aktualisiert.",
      highlight: "Klassische Simulationen rechnen nur einmal mit festen Annahmen; der digitale Zwilling wird dagegen laufend mit Messdaten aktualisiert.",
      template: { before: "", after: "." },
      solutions: [
        "Der digitale Zwilling wird laufend mit Messdaten aktualisiert, während klassische Simulationen nur einmal mit festen Annahmen rechnen",
      ],
      explanation:
        "L'opposition marquée par « dagegen » est reformulée avec « während ». La subordonnée en « während » place le verbe à la fin ; l'ordre des deux propositions est inversé par rapport à l'original.",
      modelAnswer:
        "Der digitale Zwilling wird laufend mit Messdaten aktualisiert, während klassische Simulationen nur einmal mit festen Annahmen rechnen.",
    },
  ],
};
