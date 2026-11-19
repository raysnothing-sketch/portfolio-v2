import { sim10Lines } from "@/lib/dsh/texts-10";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim10: DshSimulation = {
  id: "sim-10",
  number: 10,
  slug: "ohne-fahrer-unterwegs",
  title: "Ohne Fahrer unterwegs",
  subtitle: "Autonome Fahrzeuge im öffentlichen Nahverkehr",
  topic: "Mobilität",
  minutes: 90,
  text: { lines: sim10Lines, wordCount: 861 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 10",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s10-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel.",
      items: [
        {
          id: "s10-q1-laserscanner",
          prompt:
            "Gerät auf dem Dach, das ein dreidimensionales Bild der Umgebung erzeugt",
          answer: "der Laserscanner",
          example: true,
        },
        {
          id: "s10-q1-kleinbus",
          prompt: "Abbildung:kleines Fahrzeug ohne Fahrer im Straßenverkehr",
          answer: "der Kleinbus",
        },
        {
          id: "s10-q1-sensorfusion",
          prompt:
            "Verknüpfung der Daten mehrerer Sensoren zu einem Modell der Umgebung",
          answer: "die Sensorfusion",
        },
        {
          id: "s10-q1-begleitperson",
          prompt: "Person im Fahrzeug, die im Notfall eingreifen kann",
          answer: "die Begleitperson",
        },
      ],
    },

    {
      kind: "open",
      id: "s10-q2",
      number: "2",
      skill: "verstehen",
      points: 3,
      prompt:
        "Nennen Sie die drei Sensoren, die ein autonomes Fahrzeug nutzt, und erklären Sie, warum eine Sensorfusion nötig ist.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Kameras erkennen Ampeln und Verkehrsschilder, Radarsensoren messen Abstände und Geschwindigkeiten (auch bei Nebel und Regen), ein Laserscanner erzeugt ein dreidimensionales Bild.",
          keywords: ["kamera", "radar", "laserscanner"],
        },
        {
          id: "c2",
          label:
            "Keine dieser Techniken ist für sich allein zuverlässig genug.",
          keywords: ["keine", "allein", "zuverlässig"],
        },
        {
          id: "c3",
          label:
            "Erst die Verknüpfung der Daten durch einen Computer (Sensorfusion) ergibt ein Modell als Entscheidungsgrundlage.",
          keywords: ["sensorfusion", "verknüpf", "modell", "entscheidungsgrundlage"],
        },
      ],
      sampleAnswer:
        "Das Fahrzeug nutzt Kameras, die Ampeln und Verkehrsschilder erkennen, Radarsensoren, die Abstände und Geschwindigkeiten selbst bei Nebel und Regen messen, sowie einen rotierenden Laserscanner, der ein dreidimensionales Bild der Umgebung erzeugt. Eine Sensorfusion ist nötig, weil keine dieser Techniken für sich allein zuverlässig genug ist; erst wenn ein Computer die Daten verknüpft, entsteht ein Modell als Grundlage für Entscheidungen.",
    },

    {
      kind: "open",
      id: "s10-q3",
      number: "3",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Grafik zeigt, an wie vielen von 100 Tagen ein Kleinbus bei unterschiedlichem Wetter planmäßig fuhr. Ordnen Sie die Balken A, B und C den Wetterlagen „klar“, „Regen“ und „Schnee“ zu und nennen Sie zwei Gründe, warum Schnee das System besonders stört.",
      chart: {
        kind: "bars",
        caption: "Planmäßige Fahrten an 100 Tagen je nach Wetter",
        unit: "Tage",
        bars: [
          { label: "A · (?)", value: 52 },
          { label: "B · (?)", value: 96 },
          { label: "C · (?)", value: 81 },
        ],
      },
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label: "Balken A (52 Tage) steht für Schnee.",
          keywords: ["schnee", "52"],
          numeric: [50, 54],
        },
        {
          id: "c2",
          label: "Balken B (96 Tage) steht für klares Wetter.",
          keywords: ["klar", "96"],
          numeric: [94, 98],
        },
        {
          id: "c3",
          label: "Balken C (81 Tage) steht für Regen.",
          keywords: ["regen", "81"],
          numeric: [79, 83],
        },
        {
          id: "c4",
          label:
            "Zwei Gründe: Dichter Schneefall verdeckt die Fahrbahnmarkierungen, und Laserstrahlen werden gestreut, sodass das System die Umgebung schlechter erkennt und im Zweifel anhält.",
          keywords: [
            "markierungen",
            "verdeckt",
            "laserstrahlen",
            "gestreut",
            "anhält",
          ],
        },
      ],
      sampleAnswer:
        "Balken A mit 52 Tagen steht für Schnee, Balken B mit 96 Tagen für klares Wetter und Balken C mit 81 Tagen für Regen. Schnee stört das System besonders, weil dichter Schneefall die Fahrbahnmarkierungen verdeckt und weil – wie bei Regen – die Laserstrahlen gestreut werden. Dadurch erkennt das System die Umgebung schlechter und hält im Zweifel lieber an.",
    },

    {
      kind: "open",
      id: "s10-q4",
      number: "4",
      skill: "verstehen",
      points: 4,
      prompt:
        "Erklären Sie den Unterschied zwischen Stufe 3 und Stufe 4 der Automatisierung und begründen Sie, warum auch die meisten Pilotbusse noch keine höhere Stufe erreichen.",
      minWords: 50,
      criteria: [
        {
          id: "c1",
          label:
            "Auf Stufe 3 übernimmt das Fahrzeug nur zeitweise die Steuerung; der Mensch muss jederzeit eingreifen können.",
          keywords: ["stufe 3", "zeitweise", "eingreifen"],
        },
        {
          id: "c2",
          label:
            "Ab Stufe 4 fährt das Fahrzeug in einem festgelegten Gebiet vollständig selbstständig.",
          keywords: ["stufe 4", "festgelegten gebiet", "selbstständig"],
        },
        {
          id: "c3",
          label:
            "Die meisten Pilotbusse erreichen nur Stufe 4 und das nur auf genau vermessenen Strecken; eine Stufe 5 gibt es bislang nicht.",
          keywords: ["vermessenen strecken", "stufe 5", "pilotbusse"],
        },
        {
          id: "c4",
          label:
            "Begründung: Das System kann Randfälle und schlechtes Wetter nicht sicher beherrschen (Grenzen der Technik).",
          keywords: ["randfälle", "wetter", "grenzen der technik", "sicher"],
        },
      ],
      sampleAnswer:
        "Auf Stufe 3 übernimmt das Fahrzeug zeitweise die Steuerung, aber der Mensch muss jederzeit eingreifen können. Erst ab Stufe 4 fährt es in einem festgelegten Gebiet vollständig selbstständig. Die meisten Pilotbusse erreichen nur diese Stufe und auch nur auf genau vermessenen Strecken, weil es Stufe 5 – überall und unter allen Bedingungen – bislang nicht gibt. Der Grund sind die Grenzen der Technik: Randfälle und schlechtes Wetter lassen sich nicht sicher beherrschen.",
    },

    {
      kind: "open",
      id: "s10-q5a",
      number: "5a",
      skill: "verstehen",
      points: 1,
      prompt:
        "Welcher Anteil der Unfälle geht nach dem Text auf menschliches Versagen zurück?",
      minWords: 4,
      criteria: [
        {
          id: "c1",
          label: "Rund neunzig Prozent.",
          keywords: ["neunzig", "90 prozent", "rund 90"],
          numeric: [88, 92],
        },
      ],
      sampleAnswer: "Rund neunzig Prozent aller Unfälle.",
    },

    {
      kind: "open",
      id: "s10-q5b",
      number: "5b",
      skill: "verstehen",
      points: 3,
      prompt:
        "Warum könnten kleine autonome Fahrzeuge besonders auf dem Land sinnvoll sein?",
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label:
            "Auf dem Land fahren Busse oft nur zweimal am Tag; kleine Fahrzeuge können diese Lücken im Angebot schließen.",
          keywords: ["zweimal am tag", "lücken", "land"],
        },
        {
          id: "c2",
          label:
            "Da keine Fahrer bezahlt werden müssen, entfallen die Personalkosten, die einen großen Teil der Betriebskosten ausmachen.",
          keywords: ["personalkosten", "entfallen", "betriebskosten"],
        },
        {
          id: "c3",
          label:
            "Sie können auch nachts fahren, ohne dass zusätzliche Fahrer gefunden werden müssen – wichtig bei Personalmangel.",
          keywords: ["nachts", "personalmangel", "zusätzliche fahrer"],
        },
      ],
      sampleAnswer:
        "Auf dem Land fahren Busse oft nur zweimal am Tag, sodass kleine autonome Fahrzeuge die Lücken schließen könnten. Weil keine Fahrer bezahlt werden müssen, entfallen die Personalkosten, die einen großen Teil der Betriebskosten ausmachen. Außerdem könnten die Fahrzeuge auch nachts verkehren, ohne dass zusätzliche Fahrer gefunden werden müssen – ein wichtiger Punkt, da vielen Verkehrsunternehmen das Personal fehlt.",
    },

    {
      kind: "open",
      id: "s10-q6",
      number: "6",
      skill: "verstehen",
      points: 4,
      prompt:
        "Beschreiben Sie zwei rechtliche oder ethische Probleme, die sich beim Einsatz autonomer Fahrzeuge stellen, und erklären Sie, warum die technische Aufsicht das Problem nicht vollständig löst.",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label:
            "Rechtliche Frage der Haftung bei einem Unfall: Hersteller, Betreiber oder Halter?",
          keywords: ["haftung", "hersteller", "betreiber", "halter"],
        },
        {
          id: "c2",
          label:
            "Ethische Dilemmasituationen: Das System darf Menschen nicht nach Alter oder Geschlecht gewichten und muss Sachschäden dem Personenschaden vorziehen.",
          keywords: [
            "dilemma",
            "alter",
            "geschlecht",
            "sachschaden",
            "personenschaden",
          ],
        },
        {
          id: "c3",
          label:
            "Die technische Aufsicht überwacht das Fahrzeug aus der Ferne.",
          keywords: ["aufsicht", "ferne", "überwacht"],
        },
        {
          id: "c4",
          label:
            "Sie betreut aber mehrere Fahrzeuge gleichzeitig und kann nicht bei jedem eingreifen; damit löst sie das Problem nicht vollständig.",
          keywords: [
            "mehrere fahrzeuge",
            "gleichzeitig",
            "nicht bei jedem",
            "eingreifen",
          ],
        },
      ],
      sampleAnswer:
        "Rechtlich ist unklar, wer bei einem Unfall haftet: der Hersteller, der Betreiber oder der Halter. Ethische Probleme entstehen in Dilemmasituationen, in denen ein Unfall unvermeidbar ist; nach den deutschen Leitlinien darf das System Menschen nicht nach Alter oder Geschlecht gewichten und muss Sachschäden stets dem Personenschaden vorziehen. Die technische Aufsicht beobachtet die Fahrzeuge zwar aus der Ferne, betreut aber mehrere gleichzeitig und kann daher nicht bei jedem eingreifen. Sie löst das Problem also nicht vollständig.",
    },

    {
      kind: "open",
      id: "s10-q7",
      number: "7",
      skill: "transfer",
      points: 4,
      prompt:
        "Ein Landkreis überlegt, im Winter nachts einen autonomen Kleinbus zwischen zwei Dörfern und dem Bahnhof einzusetzen. Welche Argumente aus dem Text sprechen dafür, welche dagegen?",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label:
            "Pro: Die Personalkosten entfallen, und der Bus kann auch nachts fahren, ohne dass zusätzliche Fahrer gefunden werden müssen (Personalmangel).",
          keywords: ["personalkosten", "nachts", "personalmangel"],
        },
        {
          id: "c2",
          label:
            "Pro: Sicherheit, da rund 90 Prozent der Unfälle auf menschliches Versagen zurückgehen und ein Computer nicht müde wird; geeignet als Zubringer zum Bahnhof.",
          keywords: [
            "sicherheit",
            "menschliches versagen",
            "müde",
            "zubringer",
          ],
        },
        {
          id: "c3",
          label:
            "Contra: Wetterprobleme – bei Schnee fuhr der Bus nur an 52 von 100 Tagen planmäßig, weil Markierungen verdeckt werden und Laserstrahlen gestreut werden.",
          keywords: ["schnee", "52", "markierungen", "wetter"],
        },
        {
          id: "c4",
          label:
            "Contra: Kosten für Infrastruktur und hochgenaue digitale Karten, mögliches Misstrauen der Bevölkerung und ungeklärte Haftung.",
          keywords: [
            "infrastruktur",
            "digitale karten",
            "misstrauen",
            "haftung",
          ],
        },
      ],
      sampleAnswer:
        "Dafür sprechen die entfallenden Personalkosten und die Möglichkeit, auch nachts zu fahren, ohne zusätzliche Fahrer zu finden – gerade bei Personalmangel. Außerdem ist die Sicherheit ein Argument, weil rund neunzig Prozent der Unfälle auf menschliches Versagen zurückgehen und ein Computer nicht müde wird; der Bus könnte als Zubringer zum Bahnhof dienen. Dagegen sprechen die Wetterprobleme: Bei Schnee fuhr der Bus nur an 52 von 100 Tagen planmäßig, weil Markierungen verdeckt und Laserstrahlen gestreut werden. Hinzu kommen die Kosten für Infrastruktur und digitale Karten, das mögliche Misstrauen der Bevölkerung und die ungeklärte Haftung.",
    },

    {
      kind: "truefalse",
      id: "s10-q8",
      number: "8",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind.",
      example: {
        text: "Alle Pilotbusse haben bereits die Stufe 5 der Automatisierung erreicht.",
        correct: false,
        justification:
          "Die meisten Pilotbusse erreichen Stufe 4; eine Stufe 5 gibt es bislang nicht.",
      },
      statements: [
        {
          id: "s10-q8-1",
          text: "Auf Stufe 4 fährt das Fahrzeug überall und unter allen Bedingungen selbstständig.",
          correct: false,
          justification:
            "Stufe 4 gilt nur in einem festgelegten Gebiet; überall und unter allen Bedingungen wäre Stufe 5. (1 P)",
        },
        {
          id: "s10-q8-2",
          text: "Die technische Aufsicht überwacht in der Regel mehrere Fahrzeuge gleichzeitig.",
          correct: true,
          justification:
            "Im Text: „Diese Person betreut jedoch mehrere Fahrzeuge gleichzeitig“. (1 P)",
        },
        {
          id: "s10-q8-3",
          text: "Menschen, die schon einmal in einem Pilotbus gefahren sind, bewerten die Technik meist schlechter.",
          correct: false,
          justification:
            "Im Text: Wer einmal in einem Pilotbus gefahren ist, bewertet die Technik meist deutlich besser. (1 P)",
        },
        {
          id: "s10-q8-4",
          text: "Radarsensoren können auch bei Nebel und Regen Abstände messen.",
          correct: true,
          justification:
            "Im Text: Radarsensoren messen Abstände und Geschwindigkeiten, selbst bei Nebel und Regen. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s10-sa",
      label: "A",
      points: 2,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt:
        "Ein Laserscanner, der sich auf dem Dach dreht, erzeugt ein dreidimensionales Bild der Umgebung.",
      highlight: "der sich auf dem Dach dreht",
      template: { before: "", after: " erzeugt ein dreidimensionales Bild der Umgebung." },
      solutions: ["Ein sich auf dem Dach drehender Laserscanner"],
      explanation:
        "La relative « der sich … dreht » devient un attribut participial au participe I placé devant le nom : « ein sich auf dem Dach drehender Laserscanner ». Le pronom réfléchi « sich » reste devant le participe et la terminaison forte -er s'accorde avec « Laserscanner ».",
      modelAnswer:
        "Ein sich auf dem Dach drehender Laserscanner erzeugt ein dreidimensionales Bild der Umgebung.",
    },
    {
      id: "s10-sb",
      label: "B",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Da dichter Schneefall die Fahrbahnmarkierungen verdeckt, stoppen die Fahrzeuge häufig.",
      highlight: "Da dichter Schneefall die Fahrbahnmarkierungen verdeckt",
      template: { before: "", after: ", stoppen die Fahrzeuge häufig." },
      solutions: [
        "Wegen der Verdeckung der Fahrbahnmarkierungen durch dichten Schneefall",
        "Aufgrund der Verdeckung der Fahrbahnmarkierungen durch dichten Schneefall",
      ],
      explanation:
        "La subordonnée causale devient « wegen / aufgrund + génitif ». Le verbe « verdecken » se nominalise en « Verdeckung », « die Fahrbahnmarkierungen » reste au génitif pluriel et l'agent est introduit par « durch + accusatif ».",
      modelAnswer:
        "Wegen der Verdeckung der Fahrbahnmarkierungen durch dichten Schneefall stoppen die Fahrzeuge häufig.",
    },
    {
      id: "s10-sc",
      label: "C",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Um Fahrgäste auch nachts befördern zu können, setzen manche Betreiber deshalb auf kleine autonome Fahrzeuge.",
      highlight: "Um Fahrgäste auch nachts befördern zu können",
      template: {
        before: "",
        after: ", setzen manche Betreiber deshalb auf kleine autonome Fahrzeuge.",
      },
      solutions: [
        "Zur Beförderung von Fahrgästen auch nachts",
        "Zur nächtlichen Beförderung von Fahrgästen",
      ],
      explanation:
        "La finale « um … zu befördern » se nominalise avec « zur Beförderung von + datif ». La précision temporelle « auch nachts » peut être intégrée comme adjectif « nächtlich ».",
      modelAnswer:
        "Zur Beförderung von Fahrgästen auch nachts setzen manche Betreiber deshalb auf kleine autonome Fahrzeuge.",
    },
    {
      id: "s10-sd",
      label: "D",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt: "Solche Randfälle lassen sich kaum vollständig vorhersehen.",
      highlight: "lassen sich kaum vollständig vorhersehen",
      template: { before: "Solche Randfälle ", after: "." },
      solutions: [
        "können kaum vollständig vorhergesehen werden",
        "sind kaum vollständig vorhersehbar",
      ],
      explanation:
        "« sich + lassen + infinitif » est un substitut de passif. On le rend soit par le passif avec « können » et le participe II (« vorhergesehen werden »), soit par l'adjectif en -bar (« vorhersehbar »).",
      modelAnswer:
        "Solche Randfälle können kaum vollständig vorhergesehen werden.",
    },
    {
      id: "s10-se",
      label: "E",
      points: 1,
      type: "bezug",
      instruction: "Antworten Sie in einem vollständigen Satz.",
      prompt:
        "Worauf bezieht sich „Diese Verknüpfung“ in dem Satz „Diese Verknüpfung, die man Sensorfusion nennt, ist rechenintensiv“?",
      criteria: [
        {
          id: "c1",
          label:
            "Auf das Zusammenführen bzw. Verknüpfen der Daten der verschiedenen Sensoren durch einen Computer.",
          keywords: [
            "sensordaten",
            "verknüpfung der daten",
            "daten",
            "computer",
            "sensoren",
          ],
        },
      ],
      explanation:
        "« Diese Verknüpfung » reprend l'action décrite juste avant : le computer combine les données des différents capteurs pour en faire un modèle de l'environnement.",
      modelAnswer:
        "„Diese Verknüpfung“ bezieht sich auf das Zusammenführen der Daten der verschiedenen Sensoren durch einen Computer.",
    },
    {
      id: "s10-sf",
      label: "F",
      points: 3,
      type: "konnektor",
      instruction: REWRITE,
      prompt:
        "Obwohl autonome Fahrzeuge statistisch seltener Unfälle verursachen, misstrauen ihnen viele Menschen.",
      highlight: "Obwohl autonome Fahrzeuge statistisch seltener Unfälle verursachen",
      template: { before: "", after: ", misstrauen ihnen viele Menschen." },
      solutions: [
        "Trotz der statistisch selteneren Unfälle autonomer Fahrzeuge",
        "Trotz der geringeren Unfallhäufigkeit autonomer Fahrzeuge",
      ],
      explanation:
        "La concession « obwohl » devient « trotz + génitif ». « Seltener Unfälle verursachen » se nominalise en « seltenere Unfälle / geringere Unfallhäufigkeit » avec le génitif pluriel « autonomer Fahrzeuge ».",
      modelAnswer:
        "Trotz der statistisch selteneren Unfälle autonomer Fahrzeuge misstrauen ihnen viele Menschen.",
    },
    {
      id: "s10-sg",
      label: "G",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Wenn Fahrzeuge von mehreren Fahrgästen gemeinsam genutzt werden, sinkt die Zahl der privaten Pkw.",
      highlight: "Wenn Fahrzeuge von mehreren Fahrgästen gemeinsam genutzt werden",
      template: { before: "", after: ", sinkt die Zahl der privaten Pkw." },
      solutions: [
        "Bei gemeinsamer Nutzung der Fahrzeuge durch mehrere Fahrgäste",
      ],
      explanation:
        "La condition « wenn … gemeinsam genutzt werden » se transforme en « bei + Nominalisierung » : « bei gemeinsamer Nutzung der Fahrzeuge durch mehrere Fahrgäste », avec le génitif et l'agent introduit par « durch ».",
      modelAnswer:
        "Bei gemeinsamer Nutzung der Fahrzeuge durch mehrere Fahrgäste sinkt die Zahl der privaten Pkw.",
    },
  ],
};
