import { sim13Lines } from "@/lib/dsh/texts-13";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim13: DshSimulation = {
  id: "sim-13",
  number: 13,
  slug: "zweites-leben-fuer-akkus",
  title: "Zweites Leben für Akkus",
  subtitle: "Batterierecycling und Rohstoffkreisläufe",
  topic: "Recycling",
  minutes: 90,
  text: { lines: sim13Lines, wordCount: 889 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 13",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s13-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel.",
      items: [
        {
          id: "s13-q1-schlacke",
          prompt:
            "Rückstand, der beim Einschmelzen von Metallen entsteht und nicht weiterverwertet wird",
          answer: "die Schlacke",
          example: true,
        },
        {
          id: "s13-q1-deponie",
          prompt: "Ort, an dem Abfall dauerhaft gelagert wird",
          answer: "die Deponie",
        },
        {
          id: "s13-q1-ladesaeule",
          prompt:
            "Abbildung: Vorrichtung mit einem Stecker, an der Elektrofahrzeuge mit Strom geladen werden",
          answer: "die Ladesäule",
        },
        {
          id: "s13-q1-gefahrgut",
          prompt:
            "Waren oder Stoffe, die beim Transport wegen ihrer Gefährlichkeit besonders gesichert werden müssen",
          answer: "das Gefahrgut",
        },
      ],
    },

    {
      kind: "open",
      id: "s13-q2",
      number: "2",
      skill: "verstehen",
      points: 3,
      prompt:
        "Nennen Sie die Vorteile, die sich aus der Zweitnutzung gebrauchter Fahrzeugakkus in stationären Großspeichern ergeben.",
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label:
            "Die Lebensdauer der Akkus verlängert sich um zehn Jahre und mehr; das Recycling wird zeitlich verschoben.",
          keywords: ["lebensdauer", "zehn jahre", "recycling", "verschoben"],
        },
        {
          id: "c2",
          label: "Der Großspeicher nimmt überschüssigen Solarstrom auf.",
          keywords: ["überschüssigen solarstrom", "solarstrom", "aufnimmt", "speicher"],
        },
        {
          id: "c3",
          label: "Er fängt Lastspitzen an einer Schnellladesäule ab.",
          keywords: ["lastspitzen", "schnellladesäule", "abfängt", "strom versorgen"],
        },
      ],
      sampleAnswer:
        "Durch die Zweitnutzung in einem stationären Großspeicher verlängert sich die Lebensdauer der Akkus um zehn Jahre und mehr, und das Recycling wird entsprechend nach hinten verschoben. Der Speicher nimmt überschüssigen Solarstrom auf und fängt Lastspitzen an einer Schnellladesäule ab; seine Leistung genügt, um mehrere tausend Haushalte einige Stunden zu versorgen.",
    },

    {
      kind: "open",
      id: "s13-q3",
      number: "3",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Abbildung zeigt schematisch zwei Recyclingverfahren für Fahrzeugbatterien. Bei Verfahren A werden die Batterien in einem Ofen bei sehr hoher Temperatur eingeschmolzen; bei Verfahren B werden sie zerkleinert, zu Schwarzmasse verarbeitet und mit Säuren behandelt. Ordnen Sie jedem Verfahren den im Text verwendeten Fachbegriff zu und beschreiben Sie, worin sich die beiden Verfahren hinsichtlich Energiebedarf und Verbleib des Lithiums unterscheiden.",
      minWords: 50,
      criteria: [
        {
          id: "c1",
          label: "Verfahren A ist das pyrometallurgische Verfahren (Einschmelzen).",
          keywords: ["pyrometallurgisch", "einschmelzen", "verfahren a"],
        },
        {
          id: "c2",
          label:
            "Verfahren B ist das hydrometallurgische Verfahren (Zerkleinern, Schwarzmasse, Säure).",
          keywords: ["hydrometallurgisch", "schwarzmasse", "säuren", "verfahren b"],
        },
        {
          id: "c3",
          label:
            "A braucht wegen der Temperaturen über 1.400 Grad viel Energie, B kommt mit deutlich weniger Energie aus.",
          keywords: ["1400", "1.400", "energiebedarf", "energie", "temperatur"],
        },
        {
          id: "c4",
          label:
            "Bei A geht Lithium größtenteils in der Schlacke verloren, bei B wird es mit höherer Quote zurückgewonnen.",
          keywords: ["lithium", "schlacke", "rückgewinnungsquote", "zurückgewonnen"],
        },
      ],
      sampleAnswer:
        "Verfahren A ist das pyrometallurgische Verfahren: Die Batterien werden bei über 1.400 Grad eingeschmolzen, was viel Energie braucht; Lithium und Aluminium gehen größtenteils in der Schlacke verloren. Verfahren B ist das hydrometallurgische Verfahren: Die Batterien werden zerkleinert, zu Schwarzmasse verarbeitet und mit Säuren gelöst. Es braucht deutlich weniger Energie und erreicht höhere Rückgewinnungsquoten für Lithium, reagiert aber empfindlicher auf Verunreinigungen.",
    },

    {
      kind: "open",
      id: "s13-q4",
      number: "4",
      skill: "verstehen",
      points: 4,
      prompt:
        "Erklären Sie den Begriff „Rückgewinnungsquote“ und beschreiben Sie, worin sich die neue europäische Regelung von den bisherigen Vorschriften unterscheidet.",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label:
            "Die Rückgewinnungsquote gibt an, welcher Anteil eines Rohstoffs aus Altmaterial tatsächlich in den Kreislauf zurückkehrt.",
          keywords: ["rückgewinnungsquote", "anteil", "rohstoff", "kreislauf", "zurück"],
        },
        {
          id: "c2",
          label:
            "Früher musste nur die Hälfte des Batteriegewichts verwertet werden, auch durch Verbrennen von Kunststoff und Elektrolyt.",
          keywords: ["hälfte", "batteriegewicht", "gewichts", "verbrennen", "elektrolyt"],
        },
        {
          id: "c3",
          label:
            "Neu sind Mindestquoten für einzelne Metalle: bis 2031 95 Prozent bei Kobalt, Kupfer und Nickel sowie 80 Prozent bei Lithium.",
          keywords: ["95 prozent", "80 prozent", "2031", "kobalt", "kupfer", "nickel", "lithium"],
        },
        {
          id: "c4",
          label:
            "Entscheidend ist nicht mehr die Masse des Abfalls, sondern die Menge der wiedergewonnenen wertvollen Metalle.",
          keywords: ["masse", "metalle", "wert", "nicht mehr", "menge"],
        },
      ],
      sampleAnswer:
        "Die Rückgewinnungsquote bezeichnet den Anteil eines Rohstoffs, der aus dem Altmaterial tatsächlich wieder in den Stoffkreislauf gelangt. Bisher musste lediglich die Hälfte des Batteriegewichts verwertet werden, was auch durch Verbrennen von Kunststoff und Elektrolyt möglich war. Die neue Verordnung legt dagegen Mindestquoten für einzelne Metalle fest: Bis 2031 sollen 95 Prozent des Kobalts, Kupfers und Nickels sowie 80 Prozent des Lithiums zurückgewonnen werden. Damit zählt nicht mehr die Masse des Abfalls, sondern der Wert der wiedergewonnenen Metalle.",
    },

    {
      kind: "open",
      id: "s13-q5",
      number: "5",
      skill: "verstehen",
      points: 3,
      prompt:
        "Beschreiben Sie, warum das Recycling heute häufig am Design der Batterien scheitert und wie ein Forschungsteam in Skandinavien dieses Problem angeht.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "In vielen Akkupaketen sind die Zellen verklebt oder vergossen und lassen sich nur mit großem Aufwand trennen.",
          keywords: ["verklebt", "vergossen", "zellen", "trennen", "aufwand"],
        },
        {
          id: "c2",
          label:
            "Das Team entwickelte einen Prototyp, dessen Module verschraubt statt verklebt sind.",
          keywords: ["prototyp", "verschraubt", "module", "skandinavien"],
        },
        {
          id: "c3",
          label: "Das Zerlegen dauert nur noch etwa 20 Minuten statt mehrerer Stunden.",
          keywords: ["20 minuten", "stunden", "zerlegen"],
        },
      ],
      sampleAnswer:
        "Das Recycling scheitert oft daran, dass die Zellen in vielen Akkupaketen miteinander verklebt oder vergossen sind und sich deshalb nur mit hohem Aufwand voneinander trennen lassen. Ein skandinavisches Forschungsteam hat deshalb einen Prototyp mit verschraubten statt verklebten Modulen entwickelt. Dadurch dauert das Zerlegen nur noch etwa 20 Minuten statt mehrerer Stunden.",
    },

    {
      kind: "open",
      id: "s13-q6",
      number: "6",
      skill: "transfer",
      points: 4,
      prompt:
        "Ein Recyclingbetrieb in Norddeutschland erhält jede Woche Akkus unterschiedlicher Hersteller und Bauarten. Erklären Sie möglichst genau, auf welche Weise der digitale Batteriepass für diesen Betrieb und für eine Werkstatt nützlich sein könnte.",
      minWords: 60,
      criteria: [
        {
          id: "c1",
          label: "Die Daten sind über einen QR-Code am Akku abrufbar.",
          keywords: ["qr-code", "qr code", "abrufbar", "batteriepass"],
        },
        {
          id: "c2",
          label:
            "Vor dem Zerlegen sind Zellchemie, Materialherkunft, CO₂-Fußabdruck und die zu erwartenden Metallmengen bekannt.",
          keywords: ["zellchemie", "materialherkunft", "metalle", "mengen", "hersteller"],
        },
        {
          id: "c3",
          label: "Der Betrieb kann seine Anlagen darauf einstellen und die Verfahren besser planen.",
          keywords: ["anlagen", "einstellen", "planen", "verfahren"],
        },
        {
          id: "c4",
          label:
            "Eine Werkstatt erkennt am Gesundheitszustand, ob der Akku noch für die Zweitnutzung taugt oder ins Recycling muss.",
          keywords: ["werkstatt", "gesundheitszustand", "zweitnutzung", "recycling"],
        },
      ],
      sampleAnswer:
        "Der digitale Batteriepass ist über einen QR-Code am Akku abrufbar. Der Betrieb erfährt dadurch schon vor dem Zerlegen, welche Zellchemie vorliegt, woher die Materialien stammen und welche Metalle in welchen Mengen zu erwarten sind; er kann seine Anlagen entsprechend einstellen und die Verfahren planen. Eine Werkstatt kann anhand des Gesundheitszustands erkennen, ob ein Akku noch für die Zweitnutzung geeignet ist oder gleich ins Recycling gehört. Voraussetzung sind vollständige und manipulationssichere Daten.",
    },

    {
      kind: "open",
      id: "s13-q7a",
      number: "7a",
      skill: "verstehen",
      points: 1,
      prompt:
        "Ab wann ist der digitale Batteriepass in der Europäischen Union für große Batterien vorgeschrieben?",
      minWords: 3,
      criteria: [
        {
          id: "c1",
          label: "Ab dem Jahr 2027.",
          numeric: [2027, 2027],
        },
      ],
      sampleAnswer: "Ab dem Jahr 2027.",
    },

    {
      kind: "open",
      id: "s13-q7b",
      number: "7b",
      skill: "verstehen",
      points: 2,
      prompt:
        "Welche Voraussetzungen müssen erfüllt sein, damit der Batteriepass seinen Nutzen entfalten kann?",
      minWords: 30,
      criteria: [
        {
          id: "c1",
          label: "Die Daten müssen vollständig und manipulationssicher gespeichert werden.",
          keywords: ["vollständig", "manipulationssicher", "gespeichert"],
        },
        {
          id: "c2",
          label:
            "Die Hersteller dürfen Informationen nicht unter Berufung auf Betriebsgeheimnisse zurückhalten.",
          keywords: ["betriebsgeheimnisse", "informationen", "zurückhalten", "hersteller"],
        },
      ],
      sampleAnswer:
        "Die Daten müssen vollständig und manipulationssicher gespeichert sein. Außerdem dürfen die Hersteller sich nicht auf Betriebsgeheimnisse berufen, um Informationen zurückzuhalten.",
    },

    {
      kind: "open",
      id: "s13-q8",
      number: "8",
      skill: "verstehen",
      points: 2,
      prompt: "Warum bleibt der Bergbau trotz Recycling vorerst unverzichtbar?",
      minWords: 30,
      criteria: [
        {
          id: "c1",
          label:
            "Der Rohstoffbedarf wächst rasch, weil die Zahl neu zugelassener Fahrzeuge die Zahl ausgedienter Akkus bei Weitem übersteigt.",
          keywords: ["bedarf", "wächst", "neue fahrzeuge", "zugelassenen", "ausgediente"],
        },
        {
          id: "c2",
          label:
            "Selbst 2040 könnte Recycling nur etwa ein Viertel des Bedarfs an Kobalt und Nickel decken.",
          keywords: ["2040", "ein viertel", "recycling", "decken", "kobalt"],
        },
      ],
      sampleAnswer:
        "Der Bedarf an Rohstoffen wächst rasch, weil weit mehr neue Fahrzeuge zugelassen werden, als Altakkus anfallen. Selbst im Jahr 2040 könnte Recycling nur etwa ein Viertel des Bedarfs an Kobalt und Nickel decken, sodass der Bergbau vorerst unverzichtbar bleibt.",
    },

    {
      kind: "truefalse",
      id: "s13-q9",
      number: "9",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind.",
      example: {
        text: "Beim hydrometallurgischen Verfahren werden die Batterien zuerst eingeschmolzen.",
        correct: false,
        justification:
          "Eingeschmolzen wird beim pyrometallurgischen Verfahren; beim hydrometallurgischen werden die Batterien zerkleinert.",
      },
      statements: [
        {
          id: "s13-q9-1",
          text:
            "Ein Fahrzeugakku wird in der Regel als ausgedient angesehen, wenn seine Kapazität auf etwa 70 bis 80 Prozent gesunken ist.",
          correct: true,
          justification: "Genau so steht es im zweiten Absatz. (1 P)",
        },
        {
          id: "s13-q9-2",
          text: "Beim Einschmelzen der Batterien geht das Lithium vollständig verloren.",
          correct: false,
          justification:
            "Lithium und Aluminium gehen größtenteils, nicht vollständig, in der Schlacke verloren. (1 P)",
        },
        {
          id: "s13-q9-3",
          text:
            "Akkus aus Lithium-Eisenphosphat speichern pro Kilogramm mehr Energie als kobaltreiche Akkus.",
          correct: false,
          justification: "Sie speichern weniger Energie pro Kilogramm. (1 P)",
        },
        {
          id: "s13-q9-4",
          text: "Der Transport beschädigter Akkus kann teurer sein als der gewöhnlicher Fracht.",
          correct: true,
          justification:
            "Gefahrgut in speziellen Behältern kann die Kosten gegenüber normaler Fracht verdoppeln. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s13-sa",
      label: "A",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt:
        "Diese wird mit Säuren gelöst, sodass sich die einzelnen Metalle nacheinander chemisch herausfiltern lassen.",
      highlight: "herausfiltern lassen",
      template: {
        before:
          "Diese wird mit Säuren gelöst, sodass die einzelnen Metalle nacheinander chemisch ",
        after: ".",
      },
      solutions: ["herausgefiltert werden können"],
      explanation:
        "« sich + lassen + infinitif » est un substitut de passif. On le rend par le passif avec verbe modal : « herausgefiltert werden können ». La virgule et la position du verbemodal en fin de subordonnée sont à respecter.",
      modelAnswer:
        "Diese wird mit Säuren gelöst, sodass die einzelnen Metalle nacheinander chemisch herausgefiltert werden können.",
    },
    {
      id: "s13-sb",
      label: "B",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Da die Preise für Rohstoffe schwanken, ist die Wirtschaftlichkeit außerdem nicht garantiert.",
      highlight: "Da die Preise für Rohstoffe schwanken",
      template: { before: "", after: ", ist die Wirtschaftlichkeit außerdem nicht garantiert." },
      solutions: [
        "Aufgrund der schwankenden Rohstoffpreise",
        "Wegen der Schwankungen der Rohstoffpreise",
        "Infolge der schwankenden Preise für Rohstoffe",
      ],
      explanation:
        "La subordonnée causale « da … » devient un groupe prépositionnel au génitif : « aufgrund / wegen / infolge + génitif ». Le verbe « schwanken » se transforme en participe I attribut (« schwankende Rohstoffpreise ») ou en nom (« Schwankungen der Rohstoffpreise »).",
      modelAnswer:
        "Aufgrund der schwankenden Rohstoffpreise ist die Wirtschaftlichkeit außerdem nicht garantiert.",
    },
    {
      id: "s13-sc",
      label: "C",
      points: 2,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt:
        "Es stellt sich die Frage, was mit den Akkus geschehen soll, die Lithium, Kobalt, Nickel und Graphit enthalten.",
      highlight: "die Lithium, Kobalt, Nickel und Graphit enthalten",
      template: {
        before: "Es stellt sich die Frage, was mit den ",
        after: " Akkus geschehen soll.",
      },
      solutions: ["Lithium, Kobalt, Nickel und Graphit enthaltenden"],
      explanation:
        "La relative « die … enthalten » devient un attribut participial au participe I placé devant le nom : « enthaltenden ». Comme le complément suit « mit » (datif pluriel), on obtient « mit den … enthaltenden Akkus ».",
      modelAnswer:
        "Es stellt sich die Frage, was mit den Lithium, Kobalt, Nickel und Graphit enthaltenden Akkus geschehen soll.",
    },
    {
      id: "s13-sd",
      label: "D",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Ein Forschungsteam in Skandinavien hat deshalb einen Prototyp entwickelt, dessen Module verschraubt statt verklebt sind.",
      highlight: "dessen Module verschraubt statt verklebt sind",
      template: {
        before: "Ein Forschungsteam in Skandinavien hat deshalb einen Prototyp ",
        after: " entwickelt.",
      },
      solutions: ["mit verschraubten statt verklebten Modulen"],
      explanation:
        "La relative possessive « dessen Module verschraubt statt verklebt sind » se transforme en groupe prépositionnel : « mit + datif pluriel ». Les adjectifs prennent la terminaison « -en » : « mit verschraubten statt verklebten Modulen ».",
      modelAnswer:
        "Ein Forschungsteam in Skandinavien hat deshalb einen Prototyp mit verschraubten statt verklebten Modulen entwickelt.",
    },
    {
      id: "s13-se",
      label: "E",
      points: 1,
      type: "konjunktiv",
      instruction: "Beantworten Sie die Frage in ein bis zwei vollständigen Sätzen.",
      prompt:
        "„Recyclingbetriebe wüssten damit schon vor dem Zerlegen, welche Metalle in welchen Mengen zu erwarten sind.“ Warum steht in diesem Satz „wüssten“ und nicht „wissen“?",
      criteria: [
        {
          id: "c1",
          label:
            "Der Konjunktiv II drückt eine Möglichkeit bzw. ein Zukunftsszenario aus: Der Batteriepass ist noch nicht überall eingeführt.",
          keywords: ["konjunktiv", "möglichkeit", "hypothese", "szenario", "noch nicht"],
        },
      ],
      explanation:
        "Le Konjunktiv II (« wüssten ») présente une situation hypothétique : le passeport numérique n'est pas encore généralisé, les entreprises ne disposeraient de ces informations que s'il était introduit. L'indicatif « wissen » affirmerait un fait déjà réel.",
      modelAnswer:
        "Der Konjunktiv II drückt aus, dass es sich um eine Möglichkeit bzw. ein Zukunftsszenario handelt: Der Batteriepass ist noch nicht überall eingeführt, deshalb würde man erst mit ihm so informiert sein.",
    },
    {
      id: "s13-sf",
      label: "F",
      points: 3,
      type: "konnektor",
      instruction: REWRITE,
      prompt:
        "Solche Akkus sind billiger und hinsichtlich der Rohstoffe weniger kritisch, speichern aber weniger Energie pro Kilogramm, sodass die Fahrzeuge bei gleicher Reichweite schwerer werden.",
      highlight: "sodass die Fahrzeuge bei gleicher Reichweite schwerer werden",
      template: {
        before:
          "Solche Akkus sind billiger und hinsichtlich der Rohstoffe weniger kritisch, speichern aber weniger Energie pro Kilogramm, ",
        after: ".",
      },
      solutions: [
        "weshalb die Fahrzeuge bei gleicher Reichweite schwerer werden",
        "was zur Folge hat, dass die Fahrzeuge bei gleicher Reichweite schwerer werden",
      ],
      explanation:
        "La subordonnée consécutive « sodass … » peut être reformulée par « weshalb … » ou « was zur Folge hat, dass … ». Le verbe reste à la fin de la subordonnée et le contenu doit être conservé intégralement.",
      modelAnswer:
        "Solche Akkus sind billiger und hinsichtlich der Rohstoffe weniger kritisch, speichern aber weniger Energie pro Kilogramm, weshalb die Fahrzeuge bei gleicher Reichweite schwerer werden.",
    },
    {
      id: "s13-sg",
      label: "G",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt: "Wer Altbatterien nutzt, schont außerdem die Landschaft.",
      highlight: "Wer Altbatterien nutzt",
      template: { before: "", after: " wird außerdem die Landschaft geschont." },
      solutions: [
        "Durch die Nutzung von Altbatterien",
        "Durch die Verwendung von Altbatterien",
      ],
      explanation:
        "Le pronom relatif indéfini « wer … » se nominalise avec « durch + nom verbal » : « durch die Nutzung / Verwendung von Altbatterien ». Le complément est introduit par « von + datif ».",
      modelAnswer:
        "Durch die Nutzung von Altbatterien wird außerdem die Landschaft geschont.",
    },
  ],
};
