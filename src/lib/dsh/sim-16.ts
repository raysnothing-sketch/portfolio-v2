import { sim16Lines } from "@/lib/dsh/texts-16";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim16: DshSimulation = {
  id: "sim-16",
  number: 16,
  slug: "waermepumpen-im-altbau",
  title: "Wärmepumpen im Altbau",
  subtitle: "Gebäudesektor · Effizienz, Sanierung und Stromnetz",
  topic: "Gebäudesektor",
  minutes: 90,
  text: { lines: sim16Lines, wordCount: 1005 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 16",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s16-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel.",
      items: [
        {
          id: "s16-q1-vorlauftemperatur",
          prompt:
            "Temperatur des Heizwassers, das vom Wärmeerzeuger zu den Heizflächen strömt",
          answer: "die Vorlauftemperatur",
          example: true,
        },
        {
          id: "s16-q1-pufferspeicher",
          prompt: "Abbildung: isolierter Wassertank, in dem Wärme zwischengelagert wird",
          answer: "der Pufferspeicher",
        },
        {
          id: "s16-q1-kaeltemittel",
          prompt:
            "Stoff, der im Kreislauf einer Wärmepumpe schon bei sehr niedrigen Temperaturen verdampft",
          answer: "das Kältemittel",
        },
        {
          id: "s16-q1-heizlast",
          prompt:
            "Wärmemenge pro Zeit, die ein Gebäude benötigt, um warm gehalten zu werden",
          answer: "die Heizlast",
        },
      ],
    },

    {
      kind: "open",
      id: "s16-q2",
      number: "2",
      skill: "verstehen",
      points: 3,
      prompt:
        "Beschreiben Sie in eigenen Worten, wie eine Wärmepumpe aus Umweltwärme Heizwärme für ein Gebäude erzeugt.",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label:
            "Das Kältemittel verdampft schon bei niedrigen Temperaturen und nimmt im Verdampfer Wärme aus Luft, Erdreich oder Grundwasser auf.",
          keywords: ["kältemittel", "verdampf", "umweltwärme", "außenluft", "erdreich"],
        },
        {
          id: "c2",
          label:
            "Der Verdichter presst das gasförmige Kältemittel zusammen, sodass Druck und Temperatur stark ansteigen.",
          keywords: ["verdichter", "zusammen", "druck", "temperatur"],
        },
        {
          id: "c3",
          label:
            "Im Verflüssiger gibt das heiße Gas Wärme an das Heizwasser ab und wird wieder flüssig; nach der Entspannung im Expansionsventil beginnt der Kreislauf erneut.",
          keywords: ["verflüssiger", "heizwasser", "expansionsventil", "kreislauf"],
        },
      ],
      sampleAnswer:
        "Im Verdampfer nimmt ein Kältemittel, das schon bei sehr niedrigen Temperaturen verdampft, Wärme aus der Außenluft, dem Erdreich oder dem Grundwasser auf. Der Verdichter presst das gasförmige Kältemittel anschließend zusammen, wodurch Druck und Temperatur stark ansteigen. Im Verflüssiger gibt das heiße Gas seine Wärme an das Heizwasser ab und wird wieder flüssig; ein Expansionsventil entspannt es, sodass der Kreislauf von vorn beginnt.",
    },

    {
      kind: "open",
      id: "s16-q3",
      number: "3",
      skill: "verstehen",
      points: 3,
      prompt:
        "Erklären Sie den Begriff „Jahresarbeitszahl“ am Beispiel des Reihenhauses aus dem Text.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Die Jahresarbeitszahl ist das Verhältnis zwischen der über ein ganzes Jahr abgegebenen Heizwärme und dem dafür eingesetzten Strom.",
          keywords: ["verhältnis", "heizwärme", "strom", "jahr"],
        },
        {
          id: "c2",
          label:
            "Beispiel Reihenhaus: rund 18.000 Kilowattstunden Wärme stehen etwa 6.000 Kilowattstunden Strom gegenüber, also JAZ = 3.",
          keywords: ["18000", "6000", "18.000", "6.000", "3"],
        },
        {
          id: "c3",
          label:
            "Bedeutung: Aus einer Kilowattstunde Strom entstehen drei Kilowattstunden Wärme, zwei Drittel davon stammen aus der Umwelt.",
          keywords: ["drei kilowattstunden", "zwei drittel", "umwelt"],
        },
      ],
      sampleAnswer:
        "Die Jahresarbeitszahl (JAZ) beschreibt das Verhältnis zwischen der über ein ganzes Jahr abgegebenen Heizwärme und dem dafür eingesetzten Strom. Im beschriebenen Reihenhaus werden etwa 18.000 Kilowattstunden Wärme mit rund 6.000 Kilowattstunden Strom erzeugt, die JAZ beträgt also 3. Das heißt: Aus einer Kilowattstunde Strom entstehen drei Kilowattstunden Wärme, wobei zwei Drittel aus der Umwelt stammen.",
    },

    {
      kind: "open",
      id: "s16-q4a",
      number: "4a",
      skill: "verstehen",
      points: 1,
      prompt: "Welche Temperatur hat das Erdreich im Winter ungefähr?",
      minWords: 3,
      criteria: [
        {
          id: "c1",
          label: "Etwa 8 bis 10 Grad Celsius (nahezu konstant).",
          numeric: [8, 10],
        },
      ],
      sampleAnswer: "Etwa 8 bis 10 Grad Celsius.",
    },

    {
      kind: "open",
      id: "s16-q4b",
      number: "4b",
      skill: "verstehen",
      points: 2,
      prompt:
        "Warum erreichen Erdwärmepumpen eine höhere Jahresarbeitszahl als Luft-Wasser-Anlagen, und welcher Nachteil steht dem gegenüber?",
      minWords: 35,
      criteria: [
        {
          id: "c1",
          label:
            "Das Erdreich hat auch im Winter eine nahezu konstante, vergleichsweise hohe Temperatur, sodass der Verdichter weniger Arbeit leisten muss.",
          keywords: ["konstante temperatur", "im winter", "verdichter", "weniger arbeit"],
        },
        {
          id: "c2",
          label:
            "Nachteil: hohe Bohrkosten, die oft 10.000 Euro und mehr betragen.",
          keywords: ["bohrkosten", "10.000", "teuer"],
        },
      ],
      sampleAnswer:
        "Erdwärmepumpen nutzen das Erdreich, das auch im Winter eine nahezu konstante Temperatur von etwa 8 bis 10 Grad hat. Dadurch muss der Verdichter weniger Arbeit leisten, und die JAZ liegt bei 4 bis 4,5. Der Nachteil sind die hohen Bohrkosten, die oft 10.000 Euro und mehr betragen.",
    },

    {
      kind: "open",
      id: "s16-q5",
      number: "5",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Grafik zeigt die Jahresarbeitszahl einer Luft-Wasser-Wärmepumpe in Abhängigkeit von der Vorlauftemperatur. Die Werte bei 45 und 55 Grad fehlen. Geben Sie diese Werte nach dem Text an, erklären Sie, warum die Kurve mit steigender Vorlauftemperatur fällt, und berechnen Sie, wie viel Strom (gerundet) ein Haus mit 9.600 Kilowattstunden Wärmebedarf bei 55 Grad benötigt.",
      chart: {
        kind: "curve",
        caption: "Jahresarbeitszahl in Abhängigkeit von der Vorlauftemperatur (schematisch)",
        xLabel: "Vorlauftemperatur in °C",
        yLabel: "Jahresarbeitszahl (JAZ)",
        points: [
          { label: "35 °C", value: 4.2 },
          { label: "45 °C", value: null },
          { label: "55 °C", value: null },
          { label: "65 °C", value: 2.4 },
        ],
      },
      minWords: 60,
      criteria: [
        {
          id: "c1",
          label: "Bei 45 Grad beträgt die JAZ etwa 3,5.",
          keywords: ["3,5", "45 grad"],
        },
        {
          id: "c2",
          label: "Bei 55 Grad beträgt die JAZ etwa 2,9.",
          keywords: ["2,9", "55 grad"],
        },
        {
          id: "c3",
          label:
            "Die Kurve fällt, weil der Verdichter bei größerem Temperaturabstand zwischen Wärmequelle und Heizwasser mehr Arbeit leisten muss; für dieselbe Wärme wird mehr Strom gebraucht.",
          keywords: ["temperaturabstand", "verdichter", "mehr arbeit", "mehr strom"],
        },
        {
          id: "c4",
          label:
            "Rechnung: 9.600 : 2,9 ergibt rund 3.300 Kilowattstunden Strom.",
          keywords: ["9600", "9.600", "3300", "3.300", "2,9"],
        },
      ],
      sampleAnswer:
        "Bei 45 Grad liegt die JAZ bei etwa 3,5, bei 55 Grad bei etwa 2,9. Die Kurve fällt, weil der Verdichter umso mehr Arbeit leisten muss, je größer der Abstand zwischen der Temperatur der Wärmequelle und der des Heizwassers ist; für die gleiche Heizwärme wird dann mehr Strom benötigt. Bei 55 Grad braucht das Haus 9.600 : 2,9, also rund 3.300 Kilowattstunden Strom.",
    },

    {
      kind: "open",
      id: "s16-q6",
      number: "6",
      skill: "verstehen",
      points: 4,
      prompt:
        "Nennen Sie Maßnahmen, mit denen sich die Vorlauftemperatur in einem Altbau senken lässt, ohne das Gebäude vollständig zu sanieren, und erklären Sie, was beim hydraulischen Abgleich geschieht.",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label: "Der hydraulische Abgleich wird genannt.",
          keywords: ["hydraulische abgleich", "hydraulischen abgleich"],
        },
        {
          id: "c2",
          label:
            "Weitere Maßnahmen: Austausch einzelner Heizkörper in kalten Räumen, Dämmung der obersten Geschossdecke, neue Fenster.",
          keywords: ["heizkörper", "geschossdecke", "fenster", "dämmung"],
        },
        {
          id: "c3",
          label:
            "Beim hydraulischen Abgleich wird die Wassermenge so auf die Heizkörper verteilt, dass alle gleichmäßig durchströmt werden.",
          keywords: ["wassermenge", "verteilt", "gleichmäßig", "durchströmt"],
        },
        {
          id: "c4",
          label:
            "Die Maßnahmen senken die Heizlast und damit die nötige Vorlauftemperatur (im Beispiel von 12 auf 8 kW bzw. von 60 auf 48 Grad).",
          keywords: ["heizlast", "vorlauftemperatur", "48", "12 auf 8"],
        },
      ],
      sampleAnswer:
        "Ohne vollständige Sanierung helfen der hydraulische Abgleich, der Austausch einzelner Heizkörper in besonders kalten Räumen, die Dämmung der obersten Geschossdecke und neue Fenster; dadurch sinkt die Heizlast. Beim hydraulischen Abgleich wird die Wassermenge so auf die einzelnen Heizkörper verteilt, dass alle gleichmäßig durchströmt werden. In einem Gebäude sank die benötigte Heizleistung dadurch von 12 auf 8 Kilowatt und die Vorlauftemperatur von 60 auf 48 Grad.",
    },

    {
      kind: "open",
      id: "s16-q7",
      number: "7",
      skill: "verstehen",
      points: 2,
      prompt:
        "Weshalb kann sich eine Wärmepumpe trotz höherer Anschaffungskosten wirtschaftlich lohnen?",
      minWords: 30,
      criteria: [
        {
          id: "c1",
          label:
            "Die laufenden Kosten sind niedriger: eine Kilowattstunde Wärme kostet bei JAZ 3 nur rund 8 Cent statt etwa 10 Cent bei Gas.",
          keywords: ["8 cent", "10 cent", "laufende kosten", "betriebskosten", "günstiger"],
        },
        {
          id: "c2",
          label:
            "Weiterer Grund: Gas wird durch die CO2-Bepreisung voraussichtlich teurer, und Zuschüsse können einen Teil der Mehrkosten decken.",
          keywords: ["co2-bepreisung", "teurer", "zuschüsse", "förderung"],
        },
      ],
      sampleAnswer:
        "Zwar kostet eine Luft-Wasser-Anlage mit 25.000 bis 35.000 Euro mehr als eine Gasheizung, doch die laufenden Kosten sind niedriger: Bei einer JAZ von 3 kostet eine Kilowattstunde Wärme nur rund 8 Cent statt etwa 10 Cent bei Gas. Außerdem wird Gas durch die CO2-Bepreisung voraussichtlich teurer, und je nach Förderprogramm decken Zuschüsse einen erheblichen Teil der Mehrkosten.",
    },

    {
      kind: "open",
      id: "s16-q8",
      number: "8",
      skill: "transfer",
      points: 4,
      prompt:
        "In einem Neubaugebiet sollen 2.000 Haushalte gleichzeitig mit Wärmepumpen ausgestattet werden. Der örtliche Netzbetreiber befürchtet Überlastungen. Erklären Sie möglichst genau, auf welche Weise Pufferspeicher und weitere Maßnahmen aus dem Text helfen können.",
      minWords: 60,
      criteria: [
        {
          id: "c1",
          label:
            "Problem: An kalten Abenden laufen alle Geräte gleichzeitig, sodass die Spitzenlast im örtlichen Verteilnetz um mehrere Gigawatt steigen kann.",
          keywords: ["gleichzeitig", "spitzenlast", "verteilnetz", "gigawatt"],
        },
        {
          id: "c2",
          label:
            "Ein Pufferspeicher mit etwa 500 Litern Wasser nimmt so viel Wärme auf, dass die Wärmepumpe zwei bis drei Stunden abgeschaltet werden kann, ohne dass die Bewohner es bemerken.",
          keywords: ["pufferspeicher", "500 liter", "zwei bis drei stunden", "abgeschaltet"],
        },
        {
          id: "c3",
          label:
            "Der Netzbetreiber darf die Leistung in Spitzenzeiten kurzzeitig drosseln; dafür erhalten die Kunden ein reduziertes Netzentgelt.",
          keywords: ["drosseln", "kurzzeitig", "netzentgelt", "netzbetreiber"],
        },
        {
          id: "c4",
          label:
            "Die Geräte können mittags verstärkt laufen, wenn viel Solarstrom im Überfluss vorhanden ist.",
          keywords: ["mittags", "solarstrom", "überfluss"],
        },
      ],
      sampleAnswer:
        "An einem kalten Januarabend könnten Millionen von Geräten gleichzeitig laufen und die Spitzenlast im örtlichen Verteilnetz stark erhöhen. Ein Pufferspeicher mit rund 500 Litern Wasser nimmt so viel Wärme auf, dass die Wärmepumpe zwei bis drei Stunden abgeschaltet werden kann, ohne dass die Bewohner es merken; der Strombedarf wird so in Zeiten geringerer Belastung verschoben. Außerdem darf der Netzbetreiber die Leistung kurzzeitig drosseln, wofür die Kunden ein reduziertes Netzentgelt erhalten, und die Anlagen können mittags verstärkt laufen, wenn reichlich Solarstrom vorhanden ist.",
    },

    {
      kind: "truefalse",
      id: "s16-q9",
      number: "9",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind.",
      example: {
        text: "Eine Wärmepumpe erzeugt Wärme durch die Verbrennung des Kältemittels.",
        correct: false,
        justification:
          "Im Text: Eine Wärmepumpe transportiert Wärme, sie erzeugt sie nicht durch Verbrennung.",
      },
      statements: [
        {
          id: "s16-q9-1",
          text: "Bei einer Jahresarbeitszahl von 3 stammen zwei Drittel der abgegebenen Wärme aus der Umwelt.",
          correct: true,
          justification: "Im Text genau so genannt. (1 P)",
        },
        {
          id: "s16-q9-2",
          text: "Ein elektrischer Heizstab erzeugt aus einer Kilowattstunde Strom etwa drei Kilowattstunden Wärme.",
          correct: false,
          justification:
            "Sein Wirkungsgrad liegt bei eins: eine kWh Strom ergibt nur eine kWh Wärme. (1 P)",
        },
        {
          id: "s16-q9-3",
          text: "Der Netzbetreiber darf die Leistung der Wärmepumpen in Zeiten hoher Belastung dauerhaft drosseln.",
          correct: false,
          justification: "Im Text darf er sie nur kurzzeitig drosseln. (1 P)",
        },
        {
          id: "s16-q9-4",
          text: "Ein ausreichend großer Pufferspeicher kann die Abschaltung der Wärmepumpe für einige Stunden überbrücken, ohne dass die Bewohner es bemerken.",
          correct: true,
          justification:
            "Ein Speicher mit 500 Litern überbrückt zwei bis drei Stunden. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s16-sa",
      label: "A",
      points: 2,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt:
        "Im Inneren des Geräts zirkuliert ein Kältemittel, das schon bei sehr niedrigen Temperaturen verdampft.",
      highlight: "das schon bei sehr niedrigen Temperaturen verdampft",
      template: { before: "Im Inneren des Geräts zirkuliert ", after: "." },
      solutions: ["ein schon bei sehr niedrigen Temperaturen verdampfendes Kältemittel"],
      explanation:
        "Le relatif « das … verdampft » devient un attribut participial au participe I placé devant le nom : « ein … verdampfendes Kältemittel ». Après l'article indéfini « ein » (neutre), l'adjectif prend la terminaison forte -es.",
      modelAnswer:
        "Im Inneren des Geräts zirkuliert ein schon bei sehr niedrigen Temperaturen verdampfendes Kältemittel.",
    },
    {
      id: "s16-sb",
      label: "B",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt:
        "Je nach Förderprogramm kann ein erheblicher Teil der Mehrkosten durch Zuschüsse gedeckt werden.",
      highlight: "kann ein erheblicher Teil der Mehrkosten durch Zuschüsse gedeckt werden",
      template: { before: "Je nach Förderprogramm ", after: "." },
      solutions: ["können Zuschüsse einen erheblichen Teil der Mehrkosten decken"],
      explanation:
        "Le passif avec « können » est transformé en active : « Zuschüsse » devient le sujet et l'ancien sujet (« ein erheblicher Teil der Mehrkosten ») passe à l'accusatif. La forme verbale s'accorde au pluriel : « können ».",
      modelAnswer:
        "Je nach Förderprogramm können Zuschüsse einen erheblichen Teil der Mehrkosten decken.",
    },
    {
      id: "s16-sc",
      label: "C",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Luft-Wasser-Anlagen kommen im Bestand typischerweise auf 2,8 bis 3,5, Erdwärmepumpen mit Sonden dagegen auf 4 bis 4,5, weil das Erdreich auch im Winter eine nahezu konstante Temperatur von etwa 8 bis 10 Grad Celsius aufweist.",
      highlight:
        "weil das Erdreich auch im Winter eine nahezu konstante Temperatur von etwa 8 bis 10 Grad Celsius aufweist",
      template: {
        before:
          "Luft-Wasser-Anlagen kommen im Bestand typischerweise auf 2,8 bis 3,5, Erdwärmepumpen mit Sonden dagegen auf 4 bis 4,5 ",
        after: ".",
      },
      solutions: [
        "aufgrund der auch im Winter nahezu konstanten Temperatur des Erdreichs von etwa 8 bis 10 Grad Celsius",
        "wegen der auch im Winter nahezu konstanten Temperatur des Erdreichs von etwa 8 bis 10 Grad Celsius",
      ],
      explanation:
        "La subordonnée causale « weil … aufweist » devient un groupe prépositionnel au génitif : « aufgrund / wegen + génitif ». Le verbe « aufweisen » se nominalise en « Temperatur » avec l'adjectif « nahezu konstanten », et « das Erdreich » passe au génitif « des Erdreichs ».",
      modelAnswer:
        "Luft-Wasser-Anlagen kommen im Bestand typischerweise auf 2,8 bis 3,5, Erdwärmepumpen mit Sonden dagegen auf 4 bis 4,5 aufgrund der auch im Winter nahezu konstanten Temperatur des Erdreichs von etwa 8 bis 10 Grad Celsius.",
    },
    {
      id: "s16-sd",
      label: "D",
      points: 2,
      type: "konnektor",
      instruction: REWRITE,
      prompt: "Trotz dieser Vorteile stößt die Technik an Grenzen.",
      highlight: "Trotz dieser Vorteile",
      template: { before: "", after: ", stößt die Technik an Grenzen." },
      solutions: [
        "Obwohl sie diese Vorteile bietet",
        "Obwohl die Technik diese Vorteile bietet",
        "Auch wenn sie diese Vorteile bietet",
      ],
      explanation:
        "Le groupe prépositionnel « trotz + génitif » devient une concession avec « obwohl / auch wenn ». Le verbe « bieten » se place à la fin de la subordonnée et une virgule sépare les deux propositions.",
      modelAnswer: "Obwohl sie diese Vorteile bietet, stößt die Technik an Grenzen.",
    },
    {
      id: "s16-se",
      label: "E",
      points: 1,
      type: "konjunktiv",
      instruction:
        "Beantworten Sie die Frage in ein bis zwei vollständigen Sätzen.",
      prompt:
        "„Wenn an einem kalten Januarabend Millionen Geräte gleichzeitig laufen, könnte die Spitzenlast um mehrere Gigawatt steigen.“ Warum steht in diesem Satz „könnte“ und nicht „kann“?",
      criteria: [
        {
          id: "c1",
          label:
            "Der Konjunktiv II drückt ein mögliches, noch nicht eingetretenes Szenario aus.",
          keywords: [
            "konjunktiv",
            "möglichkeit",
            "szenario",
            "noch nicht eingetreten",
            "noch nicht wirklichkeit",
            "hypothetisch",
          ],
        },
      ],
      explanation:
        "Le Konjunktiv II (« könnte ») marque une éventualité : la hausse de la pointe de charge est envisagée comme scénario possible, mais elle n'est pas certaine ni déjà réalisée. Le « wenn » introduit une condition irréelle ou hypothétique.",
      modelAnswer:
        "Der Konjunktiv II zeigt an, dass es sich um ein mögliches Szenario handelt, das noch nicht eingetreten ist und nicht sicher eintreten muss.",
    },
    {
      id: "s16-sf",
      label: "F",
      points: 2,
      type: "bezug",
      instruction: "Antworten Sie in einem vollständigen Satz.",
      prompt:
        "„In einem Gebäude sank die benötigte Heizleistung dadurch von 12 auf 8 Kilowatt.“ Worauf bezieht sich „dadurch“? Nennen Sie die gemeinten Maßnahmen.",
      criteria: [
        {
          id: "c1",
          label:
            "„Dadurch“ bezieht sich auf die zuvor genannten kleinen Maßnahmen: hydraulischer Abgleich, Austausch einzelner Heizkörper, Dämmung der obersten Geschossdecke und neue Fenster.",
          keywords: [
            "maßnahmen",
            "hydraulische abgleich",
            "heizkörper",
            "geschossdecke",
            "fenster",
          ],
        },
      ],
      explanation:
        "« Dadurch » reprend l'ensemble des mesures mentionnées juste avant : l'équilibrage hydraulique, le remplacement de quelques radiateurs, l'isolation du plafond supérieur et les nouvelles fenêtres. C'est grâce à elles que la puissance de chauffe passe de 12 à 8 kW.",
      modelAnswer:
        "„Dadurch“ bezieht sich auf die zuvor genannten Maßnahmen: den hydraulischen Abgleich, den Austausch einzelner Heizkörper, die Dämmung der obersten Geschossdecke und neue Fenster.",
    },
    {
      id: "s16-sg",
      label: "G",
      points: 3,
      type: "konnektor",
      instruction: REWRITE,
      prompt:
        "Eine Kilowattstunde Wärme aus Gas kostet derzeit etwa 10 Cent, während eine Kilowattstunde Wärme aus der Wärmepumpe bei einer JAZ von 3 und einem speziellen Wärmepumpenstrompreis von 25 Cent nur rund 8 Cent kostet.",
      highlight: "während eine Kilowattstunde Wärme aus der Wärmepumpe",
      template: {
        before: "Eine Kilowattstunde Wärme aus Gas kostet derzeit etwa 10 Cent, ",
        after: " bei einer JAZ von 3 und einem speziellen Wärmepumpenstrompreis von 25 Cent nur rund 8 Cent kostet.",
      },
      solutions: [
        "eine Kilowattstunde Wärme aus der Wärmepumpe kostet dagegen",
        "eine Kilowattstunde Wärme aus der Wärmepumpe kostet hingegen",
        "eine Kilowattstunde Wärme aus der Wärmepumpe kostet jedoch",
      ],
      explanation:
        "La conjonction de contraste « während » est remplacée par un adverbe de contraste (« dagegen / hingegen / jedoch ») placé en deuxième position du verbe dans la principale. L'information reste identique.",
      modelAnswer:
        "Eine Kilowattstunde Wärme aus Gas kostet derzeit etwa 10 Cent, eine Kilowattstunde Wärme aus der Wärmepumpe kostet dagegen bei einer JAZ von 3 und einem speziellen Wärmepumpenstrompreis von 25 Cent nur rund 8 Cent.",
    },
  ],
};
