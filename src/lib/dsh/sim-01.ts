import { sim01Lines } from "@/lib/dsh/texts";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim01: DshSimulation = {
  id: "sim-01",
  number: 1,
  slug: "wasserstoff-aus-wind-und-sonne",
  title: "Wasserstoff aus Wind und Sonne",
  subtitle: "Energiewende · Speicherung und Industrie",
  topic: "Energiewende",
  minutes: 90,
  text: { lines: sim01Lines, wordCount: 893 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 01",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s1-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel.",
      items: [
        {
          id: "s1-q1-kaverne",
          prompt:
            "künstlich geschaffener Hohlraum im Gestein, in dem z. B. Gas gelagert werden kann",
          answer: "die Kaverne",
          accepted: ["die Salzkaverne"],
          example: true,
        },
        {
          id: "s1-q1-elektrolyseur",
          prompt: "Abbildung: zwei Elektroden in Wasser, getrennt durch eine Membran",
          answer: "der Elektrolyseur",
          accepted: ["die Elektrolysezelle"],
          illustration: "electrolyseur",
        },
        {
          id: "s1-q1-wirkungsgrad",
          prompt:
            "Verhältnis zwischen der nutzbaren Energie und der eingesetzten Energie bei einem Prozess",
          answer: "der Wirkungsgrad",
        },
        {
          id: "s1-q1-abwaerme",
          prompt: "Wärme, die bei einem Prozess entsteht und nicht weiter genutzt wird",
          answer: "die Abwärme",
        },
      ],
    },

    {
      kind: "open",
      id: "s1-q2",
      number: "2",
      skill: "verstehen",
      points: 3,
      prompt: "Erklären Sie den Unterschied zwischen „grauem“ und „grünem“ Wasserstoff.",
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label: "Grauer Wasserstoff wird aus Erdgas per Dampfreformierung gewonnen.",
          keywords: ["erdgas", "dampfreformierung"],
        },
        {
          id: "c2",
          label: "Dabei entsteht Kohlendioxid, das in die Atmosphäre entweicht.",
          keywords: ["kohlendioxid", "co2"],
        },
        {
          id: "c3",
          label: "Grüner Wasserstoff entsteht per Elektrolyse mit Strom aus erneuerbaren Quellen.",
          keywords: ["elektrolyse", "erneuerbar", "windstrom", "solarstrom", "sonnenstrom"],
        },
      ],
      sampleAnswer:
        "Grauer Wasserstoff wird heute meist aus Erdgas gewonnen: Bei der Dampfreformierung reagiert Methan mit Wasserdampf, und das dabei entstehende Kohlendioxid entweicht normalerweise in die Atmosphäre. Grüner Wasserstoff wird dagegen durch Elektrolyse hergestellt, wobei der Strom aus erneuerbaren Quellen wie Wind und Sonne stammt, sodass kein CO₂ anfällt.",
    },

    {
      kind: "open",
      id: "s1-q3",
      number: "3",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Grafik zeigt, was mit 100 Einheiten Windstrom geschieht, die über Wasserstoff gespeichert und später wieder in Strom zurückverwandelt werden. Die Balken B und C sind nicht ausgefüllt. Geben Sie nach den Informationen aus dem Text jeweils die ungefähre Höhe des Balkens an und begründen Sie, warum er niedriger ist als der vorherige.",
      chart: {
        kind: "bars",
        caption:
          "Energiebilanz von Strom über Wasserstoff zurück zu Strom (schematisch)",
        unit: "Einheiten",
        bars: [
          { label: "A · Windstrom", value: 100 },
          { label: "B · im Wasserstoff", value: null },
          { label: "C · nach Rückverstromung", value: null },
        ],
      },
      minWords: 50,
      criteria: [
        {
          id: "c1",
          label: "Balken B liegt bei etwa 60 bis 70 Einheiten.",
          numeric: [58, 72],
        },
        {
          id: "c2",
          label: "Begründung B: Wirkungsgrad von 60–70 %, der Rest geht als Abwärme verloren.",
          keywords: ["wirkungsgrad", "abwärme", "verlust"],
        },
        {
          id: "c3",
          label: "Balken C liegt bei etwa 30 bis 40 Einheiten.",
          numeric: [28, 42],
        },
        {
          id: "c4",
          label: "Begründung C: bei der Rückverstromung geht erneut Energie verloren.",
          keywords: ["rückverstromung", "erneut", "kraftwerk", "brennstoffzelle"],
        },
      ],
      sampleAnswer:
        "Balken B: Nach der Elektrolyse stecken nur noch etwa 60 bis 70 Einheiten im Wasserstoff, weil der Wirkungsgrad der Elektrolyse bei 60 bis 70 Prozent liegt und der Rest als Abwärme verloren geht. Balken C: Nach der Rückverstromung bleiben nur noch etwa 30 bis 40 Einheiten übrig, weil bei der Umwandlung des Gases in Strom (Kraftwerk oder Brennstoffzelle) erneut Energie verloren geht.",
    },

    {
      kind: "open",
      id: "s1-q4",
      number: "4",
      skill: "verstehen",
      points: 3,
      prompt:
        "Nennen Sie drei Gründe, weshalb Wasserstoff als Speicher für überschüssigen Wind- und Solarstrom in Betracht kommt.",
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label: "Überschüsse bleiben nutzbar, Windräder müssen nicht abgeschaltet werden.",
          keywords: ["abschalten", "überschuss", "netz nicht aufnehmen", "abgeregelt"],
        },
        {
          id: "c2",
          label: "Speicherung über Wochen oder Monate, etwa in Salzkavernen.",
          keywords: ["wochen", "monate", "salzkaverne", "kaverne", "langfristig"],
        },
        {
          id: "c3",
          label: "Eine Kaverne speichert ein Vielfaches heutiger Batteriespeicher.",
          keywords: ["batteriespeicher", "vielfaches", "gigawattstunden"],
        },
      ],
      sampleAnswer:
        "(1) Überschüsse, die das Netz nicht aufnehmen kann, gehen nicht verloren, weil man Windräder nicht abschalten muss. (2) Wasserstoff lässt sich über Wochen oder Monate lagern, etwa in Salzkavernen. (3) Eine große Kaverne kann ein Vielfaches der Energie speichern, die heutige Batteriespeicher aufnehmen.",
    },

    {
      kind: "open",
      id: "s1-q5",
      number: "5",
      skill: "verstehen",
      points: 4,
      prompt:
        "Wasserstoff muss für den Transport über größere Strecken aufbereitet werden. Beschreiben Sie, auf welche Weisen das geschehen kann, und erklären Sie, warum Pipelines trotzdem Vorteile bieten.",
      minWords: 50,
      criteria: [
        {
          id: "c1",
          label: "Verdichten unter hohem Druck.",
          keywords: ["verdicht", "druck"],
        },
        {
          id: "c2",
          label: "Verflüssigen bei minus 253 Grad Celsius.",
          keywords: ["verflüssig", "253"],
        },
        {
          id: "c3",
          label: "Chemische Umwandlung in einen Trägerstoff wie Ammoniak.",
          keywords: ["trägerstoff", "ammoniak", "umgewandelt"],
        },
        {
          id: "c4",
          label: "Pipeline: bestehende Erdgasleitungen umrüsten, 60–70 % günstiger als Neubau.",
          keywords: ["pipeline", "umrüst", "leitungen", "neubau"],
        },
      ],
      sampleAnswer:
        "Der Wasserstoff kann unter hohem Druck verdichtet, bei minus 253 Grad Celsius verflüssigt oder chemisch in einen Trägerstoff wie Ammoniak umgewandelt werden; alle drei Verfahren brauchen zusätzliche Energie. Der Transport per Pipeline ist wirtschaftlicher, weil sich ein großer Teil der bestehenden Erdgasleitungen umrüsten ließe und die Kosten dadurch gegenüber einem Neubau um 60 bis 70 Prozent sinken würden.",
    },

    {
      kind: "open",
      id: "s1-q6a",
      number: "6a",
      skill: "verstehen",
      points: 1,
      prompt:
        "Welcher Kostenfaktor macht den größten Anteil an den Produktionskosten von grünem Wasserstoff aus?",
      minWords: 3,
      criteria: [
        {
          id: "c1",
          label: "Der Strom bzw. der Strompreis (rund zwei Drittel der Kosten).",
          keywords: ["strompreis", "stromkosten", "preis für strom", "strom"],
        },
      ],
      sampleAnswer: "Der Strom bzw. der Strompreis (rund zwei Drittel der Kosten).",
    },

    {
      kind: "open",
      id: "s1-q6b",
      number: "6b",
      skill: "transfer",
      points: 2,
      prompt:
        "Warum gelten Regionen wie Patagonien, Nordafrika oder Australien als künftige Exportländer, und welche Gefahr sehen Kritiker darin?",
      minWords: 35,
      criteria: [
        {
          id: "c1",
          label: "Dort gibt es sehr günstigen Wind- und Solarstrom, also niedrigere Produktionskosten.",
          keywords: ["günstig", "billig", "solarstrom", "windstrom", "produktionskosten"],
        },
        {
          id: "c2",
          label: "Kritiker befürchten neue Abhängigkeiten ähnlich wie beim Erdgas.",
          keywords: ["abhängigkeit", "abhängigkeiten"],
        },
      ],
      sampleAnswer:
        "Dort gibt es sehr günstigen Wind- und Solarstrom; da der Strompreis die Herstellungskosten bestimmt, lässt sich der Wasserstoff dort billiger erzeugen. Kritiker befürchten, dass dadurch neue Abhängigkeiten entstehen, die den bisherigen vom Erdgas ähneln.",
    },

    {
      kind: "open",
      id: "s1-q7",
      number: "7",
      skill: "verstehen",
      points: 3,
      prompt:
        "Erklären Sie den Begriff „Zusätzlichkeit“ am Beispiel der Wasserstoffproduktion.",
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label: "Nur Strom aus neu gebauten Wind- und Solaranlagen soll verwendet werden.",
          keywords: ["neu gebaut", "neue anlagen", "neugebaut", "zusätzlich"],
        },
        {
          id: "c2",
          label: "Sonst wird bestehender Ökostrom dem Netz entzogen.",
          keywords: ["ökostrom", "abgezogen", "bestehende anlagen"],
        },
        {
          id: "c3",
          label: "Folge: Kohlestrom müsste länger im Netz bleiben.",
          keywords: ["kohlestrom", "kohle"],
        },
      ],
      sampleAnswer:
        "Zusätzlichkeit bedeutet, dass für die Wasserstoffherstellung nur Strom aus neu gebauten Wind- und Solaranlagen verwendet werden soll. Würde man dagegen Strom aus bereits bestehenden Anlagen nutzen, ginge dieser Ökostrom dem Netz verloren, und Kohlestrom müsste länger im Netz bleiben, sodass dem Klima nicht geholfen wäre.",
    },

    {
      kind: "open",
      id: "s1-q8",
      number: "8",
      skill: "transfer",
      points: 3,
      prompt:
        "Ein Stadtwerk plant, ein Wohnviertel mit Wasserstoffheizungen auszustatten, statt Wärmepumpen zu installieren. Welche Argumente aus dem Text sprechen gegen diesen Plan?",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Eine Wärmepumpe nutzt die eingesetzte Strommenge drei- bis fünfmal besser.",
          keywords: ["wärmepumpe", "drei- bis fünfmal", "effizienter"],
        },
        {
          id: "c2",
          label: "Herstellung und Rückverstromung sind mit hohen Verlusten verbunden.",
          keywords: ["verlust", "wirkungsgrad", "abwärme"],
        },
        {
          id: "c3",
          label:
            "Wasserstoff ist teuer (4–8 €/kg) und die Gebäudeheizung gilt als umstrittene Anwendung.",
          keywords: ["teuer", "kosten", "wasserstoffleiter", "umstritten"],
        },
      ],
      sampleAnswer:
        "Eine Wärmepumpe nutzt die eingesetzte Strommenge drei- bis fünfmal besser als eine Wasserstoffheizung. Wasserstoff entsteht nur mit Verlusten (Wirkungsgrad der Elektrolyse 60 bis 70 Prozent) und ist mit vier bis acht Euro pro Kilogramm teuer. Außerdem gilt die Gebäudeheizung als besonders umstrittene Anwendung und steht in der „Wasserstoffleiter“ am unteren Ende.",
    },

    {
      kind: "truefalse",
      id: "s1-q9",
      number: "9",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind.",
      example: {
        text: "Grüner Wasserstoff wird ausschließlich aus Erdgas gewonnen.",
        correct: false,
        justification: "Im Text wird grüner Wasserstoff gerade der Elektrolyse zugeordnet.",
      },
      statements: [
        {
          id: "s1-q9-1",
          text: "Bei der Dampfreformierung entsteht Kohlendioxid als Nebenprodukt.",
          correct: true,
          justification:
            "Im Text: „als Nebenprodukt entsteht Kohlendioxid“. (1 P)",
        },
        {
          id: "s1-q9-2",
          text: "Der größte Teil der Produktionskosten von grünem Wasserstoff entfällt auf die Elektrolyseure.",
          correct: false,
          justification:
            "Rund zwei Drittel der Kosten entfallen auf den Strom, nicht auf die Elektrolyseure. (1 P)",
        },
        {
          id: "s1-q9-3",
          text: "Theoretisch werden für ein Kilogramm Wasserstoff neun Liter Wasser benötigt.",
          correct: true,
          justification:
            "Im Text genau so genannt; in der Praxis ist der Bedarf höher. (1 P)",
        },
        {
          id: "s1-q9-4",
          text: "Umweltverbände lehnen es ab, dass für die Wasserstoffherstellung neu gebaute Wind- und Solaranlagen genutzt werden.",
          correct: false,
          justification:
            "Sie fordern im Gegenteil, dass ausschließlich neu gebaute Anlagen genutzt werden (Zusätzlichkeit). (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s1-sa",
      label: "A",
      points: 2,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt:
        "Als „grün“ bezeichnet man dagegen Wasserstoff, der durch Elektrolyse mit Strom aus erneuerbaren Quellen gewonnen wird.",
      highlight: "der durch Elektrolyse mit Strom aus erneuerbaren Quellen gewonnen wird",
      template: { before: "Als „grün“ bezeichnet man dagegen ", after: "." },
      solutions: [
        "den durch Elektrolyse mit Strom aus erneuerbaren Quellen gewonnenen Wasserstoff",
      ],
      explanation:
        "Le relatif « der … gewonnen wird » devient un attribut participial au participe II placé devant le nom : « der gewonnene Wasserstoff ». Comme le groupe est au passif et qu'il complète « Wasserstoff » à l'accusatif, l'article devient « den » et l'adjectif prend la terminaison -en.",
      modelAnswer:
        "Als „grün“ bezeichnet man dagegen den durch Elektrolyse mit Strom aus erneuerbaren Quellen gewonnenen Wasserstoff.",
    },
    {
      id: "s1-sb",
      label: "B",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt: "Ein weiterer Vorzug des Wasserstoffs besteht darin, dass er sich speichern lässt.",
      highlight: "er sich speichern lässt",
      template: {
        before: "Ein weiterer Vorzug des Wasserstoffs besteht darin, dass er ",
        after: ".",
      },
      solutions: ["gespeichert werden kann", "speicherbar ist"],
      explanation:
        "« sich + lassen + infinitif » est un substitut de passif. Deux équivalents : le passif avec verbe modal (« gespeichert werden kann ») ou l'adjectif en -bar (« speicherbar ist »). Le sujet « er » reste sujet dans les deux cas.",
      modelAnswer:
        "Ein weiterer Vorzug des Wasserstoffs besteht darin, dass er gespeichert werden kann.",
    },
    {
      id: "s1-sc",
      label: "C",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Da Wasserstoffmoleküle sehr klein sind, müssen jedoch Dichtungen und Verdichter angepasst und einige Stahlsorten ersetzt werden.",
      highlight: "Da Wasserstoffmoleküle sehr klein sind",
      template: {
        before: "",
        after:
          ", müssen jedoch Dichtungen und Verdichter angepasst und einige Stahlsorten ersetzt werden.",
      },
      solutions: [
        "Aufgrund der geringen Größe der Wasserstoffmoleküle",
        "Wegen der geringen Größe der Wasserstoffmoleküle",
        "Infolge der geringen Größe der Wasserstoffmoleküle",
      ],
      explanation:
        "La subordonnée causale « da … » se transforme en groupe prépositionnel au génitif : « aufgrund / wegen / infolge + génitif ». L'adjectif « klein » devient le nom « Größe » avec l'adjectif « gering ». Le génitif pluriel « der Wasserstoffmoleküle » reste inchangé.",
      modelAnswer:
        "Aufgrund der geringen Größe der Wasserstoffmoleküle müssen jedoch Dichtungen und Verdichter angepasst und einige Stahlsorten ersetzt werden.",
    },
    {
      id: "s1-sd",
      label: "D",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Statt Windräder abzuschalten, könnte man mit dem überschüssigen Strom Wasserstoff erzeugen.",
      highlight: "Statt Windräder abzuschalten",
      template: {
        before: "",
        after: ", könnte man mit dem überschüssigen Strom Wasserstoff erzeugen.",
      },
      solutions: [
        "Anstelle des Abschaltens von Windrädern",
        "Anstatt dass Windräder abgeschaltet werden",
        "Statt dass Windräder abgeschaltet werden",
        "Anstelle eines Abschaltens der Windräder",
      ],
      explanation:
        "« statt + infinitif » peut être nominalisé (« anstelle des Abschaltens von Windrädern ») ou transformé en subordonnée avec « anstatt dass / statt dass » + passif. Le sens reste identique : on évite d'arrêter les éoliennes.",
      modelAnswer:
        "Anstelle des Abschaltens von Windrädern könnte man mit dem überschüssigen Strom Wasserstoff erzeugen.",
    },
    {
      id: "s1-se",
      label: "E",
      points: 1,
      type: "konjunktiv",
      instruction:
        "Beantworten Sie die Frage in ein bis zwei vollständigen Sätzen.",
      prompt:
        "„Studien zufolge ließe sich ein großer Teil der bestehenden Erdgasleitungen umrüsten.“ Warum steht in diesem Satz „ließe“ und nicht „lässt“?",
      criteria: [
        {
          id: "c1",
          label:
            "Konjunktiv II : il s'agit d'une possibilité envisagée, pas encore réalisée.",
          keywords: [
            "konjunktiv",
            "möglichkeit",
            "denkbar",
            "nicht verwirklicht",
            "nicht umgesetzt",
            "hypothetisch",
          ],
        },
      ],
      explanation:
        "Le Konjunktiv II (« ließe ») marque une possibilité théorique : selon les études, la conversion serait faisable, mais elle n'est pas encore une réalité. Il peut aussi marquer la reprise prudente d'une source.",
      modelAnswer:
        "Der Konjunktiv II drückt aus, dass die Umrüstung nur eine Möglichkeit ist, die laut Studien denkbar, aber noch nicht verwirklicht ist.",
    },
    {
      id: "s1-sf",
      label: "F",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt:
        "Was dabei entsteht, gilt vielen Fachleuten als Schlüssel für die Dekarbonisierung von Branchen, die sich nicht ohne Weiteres elektrifizieren lassen.",
      highlight: "die sich nicht ohne Weiteres elektrifizieren lassen",
      template: {
        before:
          "Was dabei entsteht, gilt vielen Fachleuten als Schlüssel für die Dekarbonisierung von Branchen, die ",
        after: ".",
      },
      solutions: [
        "nicht ohne Weiteres elektrifizierbar sind",
        "nicht ohne Weiteres elektrifiziert werden können",
      ],
      explanation:
        "Encore « sich lassen + infinitif » : substitut de passif. On peut le rendre par l'adjectif en -bar (« elektrifizierbar ») ou par le passif avec « können ». Attention à l'accord au pluriel : « Branchen, die … sind / werden können ».",
      modelAnswer:
        "Was dabei entsteht, gilt vielen Fachleuten als Schlüssel für die Dekarbonisierung von Branchen, die nicht ohne Weiteres elektrifizierbar sind.",
    },
    {
      id: "s1-sg",
      label: "G",
      points: 3,
      type: "konnektor",
      instruction: REWRITE,
      prompt: "Zwar sinken die Preise für Elektrolyseure, doch entscheidend ist der Strompreis.",
      highlight: "Zwar sinken die Preise für Elektrolyseure, doch entscheidend ist der Strompreis.",
      template: { before: "Trotz ", after: "." },
      solutions: [
        "sinkender Preise für Elektrolyseure ist der Strompreis entscheidend",
        "sinkender Preise für Elektrolyseure bleibt der Strompreis entscheidend",
      ],
      explanation:
        "La concession « zwar … doch » devient « trotz + génitif ». Le verbe « sinken » se transforme en participe I attribut : « sinkende Preise » → au génitif « sinkender Preise ». La principale garde l'inversion verbe-sujet.",
      modelAnswer:
        "Trotz sinkender Preise für Elektrolyseure bleibt der Strompreis entscheidend.",
    },
  ],
};
