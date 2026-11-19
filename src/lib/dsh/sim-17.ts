import { sim17Lines } from "@/lib/dsh/texts-17";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim17: DshSimulation = {
  id: "sim-17",
  number: 17,
  slug: "dem-eis-auf-der-spur",
  title: "Dem Eis auf der Spur",
  subtitle: "Forschung in der Antarktis",
  topic: "Antarktisforschung",
  minutes: 90,
  text: { lines: sim17Lines, wordCount: 916 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 17",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s17-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel.",
      items: [
        {
          id: "s17-q1-kontinent",
          prompt:
            "sehr große zusammenhängende Landmasse der Erde, z. B. Europa oder Afrika",
          answer: "der Kontinent",
          example: true,
        },
        {
          id: "s17-q1-bohrkern",
          prompt:
            "Abbildung: zylinderförmiges Stück Eis, das mit einem Hohlbohrer aus großer Tiefe geholt wird",
          answer: "der Bohrkern",
        },
        {
          id: "s17-q1-konservieren",
          prompt: "etwas über sehr lange Zeit unverändert erhalten",
          answer: "konservieren",
        },
        {
          id: "s17-q1-prognose",
          prompt:
            "begründete Aussage darüber, wie sich etwas in Zukunft entwickeln wird, auf der Grundlage von Daten und Berechnungen",
          answer: "die Prognose",
        },
      ],
    },

    {
      kind: "open",
      id: "s17-q2",
      number: "2",
      skill: "verstehen",
      points: 4,
      prompt:
        "Nennen Sie vier Verfahren, mit denen die Veränderung der Eismasse der Antarktis erfasst wird, und geben Sie jeweils an, was dabei gemessen wird oder welche Besonderheit das Verfahren hat.",
      minWords: 65,
      criteria: [
        {
          id: "c1",
          label:
            "Radarhöhenmesser auf Satelliten messen die Höhenänderung der Eisoberfläche.",
          keywords: ["radarhöhenmesser", "höhenänderung", "eisoberfläche"],
        },
        {
          id: "c2",
          label:
            "Laserinstrumente messen die Höhe sehr genau (wenige Zentimeter), liefern aber bei Bewölkung keine verlässlichen Daten.",
          keywords: ["laser", "zentimeter", "bewölkung", "verlässlich"],
        },
        {
          id: "c3",
          label:
            "Ein Satellitenpaar misst das Schwerefeld: Bei Eisverlust nimmt die Anziehungskraft ab, und der Abstand zwischen den Satelliten verändert sich.",
          keywords: ["schwerefeld", "anziehungskraft", "abstand", "satellitenpaar"],
        },
        {
          id: "c4",
          label:
            "Am Boden bzw. vom Flugzeug aus: GPS-Stationen und Eisradar machen Eisschichten und den Felsuntergrund sichtbar.",
          keywords: ["gps", "eisradar", "felsuntergrund", "eisschichten"],
        },
      ],
      sampleAnswer:
        "Radarhöhenmesser auf Satelliten erfassen, wie sich die Höhe der Eisoberfläche verändert. Laserinstrumente messen die Höhe mit einer Genauigkeit von wenigen Zentimetern, liefern bei Bewölkung aber keine verlässlichen Daten. Ein Satellitenpaar im Abstand von rund 200 Kilometern misst das Schwerefeld: Verliert eine Region Eis, nimmt die Anziehungskraft ab und der Abstand der Satelliten verändert sich geringfügig. Am Boden ergänzen GPS-Stationen und Eisradar die Daten; ein Flugzeug mit Radar kann sogar Eisschichten und den Felsuntergrund darunter sichtbar machen.",
    },

    {
      kind: "open",
      id: "s17-q3",
      number: "3",
      skill: "verstehen",
      points: 4,
      prompt:
        "Beschreiben Sie, auf welche Weise Eisbohrkerne Aufschluss über das Klima früherer Zeiten geben.",
      minWords: 65,
      criteria: [
        {
          id: "c1",
          label:
            "Ein Bohrteam holt zylinderförmige Eisstücke herauf; das Eis entstand aus zusammengepresstem Schnee, in dem winzige Luftbläschen die damalige Atmosphäre konservieren.",
          keywords: ["bohrkern", "luftbläschen", "schnee", "atmosphäre", "gepresst"],
        },
        {
          id: "c2",
          label:
            "Man misst den Kohlendioxidgehalt und vergleicht ihn mit heute: Kaltzeit etwa 180 ppm, Warmzeit etwa 280 ppm, heute über 420 ppm.",
          keywords: ["kohlendioxid", "ppm", "180", "280", "420"],
        },
        {
          id: "c3",
          label:
            "Aus dem Verhältnis zweier Sauerstoffvarianten lässt sich die Temperatur zur Zeit des Schneefalls rekonstruieren.",
          keywords: ["sauerstoffvarianten", "temperatur", "schneefall"],
        },
        {
          id: "c4",
          label: "Staubschichten verraten, wann Vulkane ausgebrochen sind.",
          keywords: ["staubschichten", "vulkane", "vulkanausbrüche"],
        },
      ],
      sampleAnswer:
        "Ein Bohrteam holt zylinderförmige Eisstücke aus der Tiefe herauf. Das Eis entstand aus Schnee, der unter neuen Schichten zusammengepresst wurde; dabei blieben winzige Luftbläschen eingeschlossen, die die Zusammensetzung der damaligen Atmosphäre bewahren. Darin misst man etwa den Kohlendioxidgehalt: In Kaltzeiten der letzten 800.000 Jahre lag er bei rund 180 ppm, in Warmzeiten bei 280 ppm, heute bei über 420 ppm. Aus dem Verhältnis zweier Sauerstoffvarianten lässt sich die Temperatur zur Zeit des Schneefalls ableiten, und Staubschichten zeigen Vulkanausbrüche an.",
    },

    {
      kind: "open",
      id: "s17-q4",
      number: "4",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Grafik zeigt schematisch den Rand des Eisschildes im Querschnitt: Eine mehrere hundert Meter dicke Eisplatte schwimmt auf dem Meer und geht landeinwärts in einen Gletscher über; ein Pfeil markiert die Linie, an der der Gletscher den Felsuntergrund verlässt. Wie heißt die mit dem Pfeil markierte Linie, und was kennzeichnet sie? Erklären Sie außerdem, warum es für die Stabilität des Eisschildes problematisch ist, wenn sich diese Linie landeinwärts verlagert.",
      minWords: 60,
      criteria: [
        {
          id: "c1",
          label: "Die markierte Linie ist die Aufsetzlinie.",
          keywords: ["aufsetzlinie"],
        },
        {
          id: "c2",
          label:
            "Dort verlässt der Gletscher den Felsuntergrund und beginnt zu schwimmen; er geht in das Schelfeis über.",
          keywords: ["felsuntergrund", "schwimmen", "schelfeis", "verlässt"],
        },
        {
          id: "c3",
          label:
            "Warmes Tiefenwasser dringt unter das Schelfeis, das von unten schmilzt und dünner wird; es stützt die Gletscher dann immer schlechter.",
          keywords: ["tiefenwasser", "schmilzt", "dünner", "stützt", "schlechter"],
        },
        {
          id: "c4",
          label:
            "Die Gletscher fließen anschließend schneller, sodass mehr Eis ins Meer gelangt.",
          keywords: ["schneller", "mehr eis", "ins meer", "abfluss"],
        },
      ],
      sampleAnswer:
        "Die markierte Linie ist die Aufsetzlinie. Dort verlässt der Gletscher den Felsuntergrund und beginnt, auf dem Meer zu schwimmen, also in das Schelfeis überzugehen. Dringt warmes Tiefenwasser unter das Schelfeis, schmilzt dieses von unten, wird dünner und stützt die Gletscher immer schlechter, sodass sich die Aufsetzlinie landeinwärts verlagert. Die Gletscher fließen dann schneller und mehr Eis gelangt ins Meer, was den Eisschild destabilisiert.",
    },

    {
      kind: "open",
      id: "s17-q5a",
      number: "5a",
      skill: "verstehen",
      points: 1,
      prompt: "Was verbietet das Umweltschutzprotokoll von 1991?",
      minWords: 6,
      criteria: [
        {
          id: "c1",
          label: "Es verbietet jede Gewinnung von Rohstoffen (Rohstoffabbau) in der Antarktis.",
          keywords: ["rohstoffgewinnung", "gewinnung von rohstoffen", "rohstoffabbau", "rohstoffe"],
        },
      ],
      sampleAnswer:
        "Es verbietet jede Gewinnung von Rohstoffen in der Antarktis.",
    },

    {
      kind: "open",
      id: "s17-q5b",
      number: "5b",
      skill: "verstehen",
      points: 2,
      prompt:
        "Welche Vorteile hat es für die Forschung, dass Teams verschiedener Länder in der Antarktis zusammenarbeiten?",
      minWords: 30,
      criteria: [
        {
          id: "c1",
          label:
            "Weil die Teams Flugzeuge, Treibstofflager und Messdaten gemeinsam nutzen, lassen sich Kosten sparen.",
          keywords: ["kosten sparen", "kostenersparnis", "gemeinsam nutzen", "flugzeuge"],
        },
        {
          id: "c2",
          label: "Messlücken können schneller geschlossen werden.",
          keywords: ["messlücken", "schneller schließen", "geschlossen"],
        },
      ],
      sampleAnswer:
        "Weil Forschungsteams verschiedener Länder Flugzeuge, Treibstofflager und Messdaten gemeinsam nutzen, lassen sich Kosten sparen. Außerdem können Messlücken schneller geschlossen werden.",
    },

    {
      kind: "open",
      id: "s17-q6",
      number: "6",
      skill: "verstehen",
      points: 3,
      prompt:
        "Erklären Sie den Begriff „räumliche Auflösung“ am Beispiel der Klimamodelle der Antarktis.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Die räumliche Auflösung gibt die Kantenlänge einer einzelnen Gitterzelle an, in die das Modell Atmosphäre, Ozean und Eis einteilt.",
          keywords: ["gitterzelle", "kantenlänge", "auflösung", "einteilt"],
        },
        {
          id: "c2",
          label:
            "Früher betrug sie etwa 100 Kilometer, in regionalen Modellen heute teilweise nur noch zehn Kilometer.",
          keywords: ["100 kilometer", "zehn kilometer", "10 kilometer"],
        },
        {
          id: "c3",
          label:
            "Je feiner die Auflösung, desto besser lässt sich die schmale Zone der Aufsetzlinie erfassen, aber der Rechenaufwand steigt auf das Tausendfache, sodass Hochleistungsrechner nötig sind.",
          keywords: ["aufsetzlinie", "rechenaufwand", "tausendfache", "hochleistungsrechner"],
        },
      ],
      sampleAnswer:
        "Die räumliche Auflösung ist die Kantenlänge einer Gitterzelle, in die ein Klimamodell Atmosphäre, Ozean und Eis einteilt. Früher lag sie bei etwa 100 Kilometern, in regionalen Modellen heute teilweise bei nur noch zehn Kilometern. Eine feinere Auflösung erlaubt es, die schmale Zone der Aufsetzlinie besser zu erfassen, doch der Rechenaufwand steigt auf das Tausendfache, sodass nur Hochleistungsrechner die Berechnungen bewältigen.",
    },

    {
      kind: "open",
      id: "s17-q7",
      number: "7",
      skill: "transfer",
      points: 5,
      prompt:
        "Ein internationales Forschungsteam will klären, ob ein bisher kaum untersuchter Küstengletscher in der Antarktis an Masse verliert und wie sich das Gebiet in früheren Warmzeiten verhalten hat. Erklären Sie möglichst genau, auf welche Weise die im Text dargestellten Verfahren und Regelungen dem Team nützlich sein können.",
      minWords: 80,
      criteria: [
        {
          id: "c1",
          label:
            "Mit Radar- und Laserhöhenmessung sowie Schwerefelddaten von Satelliten erkennt das Team, ob die Eisoberfläche sinkt und Masse verloren geht.",
          keywords: ["radar", "laser", "schwerefeld", "höhenmessung", "massenverlust"],
        },
        {
          id: "c2",
          label:
            "GPS-Stationen und Eisradar am Boden oder vom Flugzeug zeigen Eisschichten, Felsuntergrund und die Lage der Aufsetzlinie.",
          keywords: ["gps", "eisradar", "felsuntergrund", "aufsetzlinie"],
        },
        {
          id: "c3",
          label:
            "Unterwasserroboter können unter dem Schelfeis messen, wo bisher kaum Daten vorliegen.",
          keywords: ["unterwasserroboter", "schelfeis", "datenlücke", "messen"],
        },
        {
          id: "c4",
          label:
            "Ein Eisbohrkern zeigt mit Luftbläschen, Sauerstoffvarianten und Staubschichten, wie Kohlendioxid und Temperatur in früheren Warmzeiten waren.",
          keywords: ["bohrkern", "luftbläschen", "sauerstoffvarianten", "staubschichten", "warmzeiten"],
        },
        {
          id: "c5",
          label:
            "Nach dem Antarktisvertrag kann das Team frei forschen, Logistik und Daten mit anderen Ländern teilen; die Ergebnisse fließen in Klimamodelle ein.",
          keywords: ["antarktisvertrag", "freie forschung", "messdaten", "klimamodelle", "datenaustausch"],
        },
      ],
      sampleAnswer:
        "Mit Radar- und Laserhöhenmessung sowie Schwerefelddaten von Satelliten kann das Team feststellen, ob die Eisoberfläche sinkt und der Gletscher Masse verliert. GPS-Stationen und Eisradar vom Boden oder Flugzeug zeigen Eisschichten, Felsuntergrund und die Lage der Aufsetzlinie; Unterwasserroboter könnten unter dem Schelfeis messen, wo bisher kaum Daten vorliegen. Ein Eisbohrkern würde mit eingeschlossenen Luftbläschen, Sauerstoffvarianten und Staubschichten zeigen, wie hoch Kohlendioxidgehalt und Temperatur in früheren Warmzeiten waren. Nach dem Antarktisvertrag darf das Team frei forschen, kann Flugzeuge und Lager mit anderen Ländern teilen und auf deren Messdaten zugreifen; die Ergebnisse können schließlich in Klimamodelle eingehen und die Prognosen verbessern.",
    },

    {
      kind: "truefalse",
      id: "s17-q8",
      number: "8",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind.",
      example: {
        text: "Der Antarktisvertrag trat im Jahr 1959 in Kraft.",
        correct: false,
        justification:
          "Er wurde 1959 unterzeichnet, trat aber erst 1961 in Kraft.",
      },
      statements: [
        {
          id: "s17-q8-1",
          text: "Laserinstrumente auf Satelliten liefern auch bei Bewölkung verlässliche Messungen.",
          correct: false,
          justification:
            "Laserinstrumente sind genau, liefern bei Bewölkung aber keine verlässlichen Daten. (1 P)",
        },
        {
          id: "s17-q8-2",
          text: "Der Kohlendioxidgehalt der Luft lag in den letzten 800.000 Jahren nach den ältesten Bohrkernen nie bei 420 ppm oder darüber.",
          correct: true,
          justification:
            "Warmzeiten ca. 280 ppm; der heutige Wert von über 420 ppm liegt weit außerhalb der Bohrkerndaten. (1 P)",
        },
        {
          id: "s17-q8-3",
          text: "Je kleiner die Gitterzellen eines Klimamodells sind, desto geringer ist der Rechenaufwand.",
          correct: false,
          justification:
            "Bei kleineren Zellen steigt der Rechenaufwand auf das Tausendfache. (1 P)",
        },
        {
          id: "s17-q8-4",
          text: "Eine Überprüfung des Verbots der Rohstoffgewinnung ist frühestens im Jahr 2048 möglich.",
          correct: true,
          justification: "Im Text: Überprüfung frühestens im Jahr 2048. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s17-sa",
      label: "A",
      points: 3,
      type: "passiversatz",
      instruction: REWRITE,
      prompt:
        "Wie viel Eis die Antarktis verliert, lässt sich nur durch die Kombination mehrerer Messmethoden bestimmen.",
      highlight: "lässt sich nur durch die Kombination mehrerer Messmethoden bestimmen",
      template: {
        before: "Wie viel Eis die Antarktis verliert, ",
        after: ".",
      },
      solutions: [
        "kann nur durch die Kombination mehrerer Messmethoden bestimmt werden",
        "ist nur durch die Kombination mehrerer Messmethoden zu bestimmen",
      ],
      explanation:
        "« sich + lassen + infinitif » est un substitut de passif. On le rend soit par le passif avec modal (« kann … bestimmt werden »), soit par « sein + zu + infinitif » (« ist … zu bestimmen »). L'adverbe « nur » et le complément « durch die Kombination mehrerer Messmethoden » sont conservés.",
      modelAnswer:
        "Wie viel Eis die Antarktis verliert, kann nur durch die Kombination mehrerer Messmethoden bestimmt werden.",
    },
    {
      id: "s17-sb",
      label: "B",
      points: 3,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt:
        "Ein Satellitenpaar, das sich in rund 200 Kilometern Abstand um die Erde bewegt, misst dagegen das Schwerefeld.",
      highlight: "das sich in rund 200 Kilometern Abstand um die Erde bewegt",
      template: { before: "Ein ", after: " Satellitenpaar misst dagegen das Schwerefeld." },
      solutions: [
        "sich in rund 200 Kilometern Abstand um die Erde bewegendes",
      ],
      explanation:
        "Le relatif « das sich … bewegt » devient un attribut participial au participe I placé devant le nom : « ein sich … bewegendes Satellitenpaar ». Après l'article indéfini « ein » (neutre), l'adjectif prend la terminaison forte -es ; le pronom réfléchi « sich » reste devant le participe.",
      modelAnswer:
        "Ein sich in rund 200 Kilometern Abstand um die Erde bewegendes Satellitenpaar misst dagegen das Schwerefeld.",
    },
    {
      id: "s17-sc",
      label: "C",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Weil Forschungsteams verschiedener Länder Flugzeuge, Treibstofflager und Messdaten gemeinsam nutzen, lassen sich Kosten sparen und Messlücken schneller schließen.",
      highlight:
        "Weil Forschungsteams verschiedener Länder Flugzeuge, Treibstofflager und Messdaten gemeinsam nutzen",
      template: {
        before: "",
        after: " lassen sich Kosten sparen und Messlücken schneller schließen.",
      },
      solutions: [
        "Aufgrund der gemeinsamen Nutzung von Flugzeugen, Treibstofflagern und Messdaten durch Forschungsteams verschiedener Länder",
        "Wegen der gemeinsamen Nutzung von Flugzeugen, Treibstofflagern und Messdaten durch Forschungsteams verschiedener Länder",
        "Dank der gemeinsamen Nutzung von Flugzeugen, Treibstofflagern und Messdaten durch Forschungsteams verschiedener Länder",
      ],
      explanation:
        "La subordonnée causale « weil … nutzen » se transforme en « aufgrund / wegen / dank + génitif ». Le verbe « nutzen » devient le nom « Nutzung » ; les objets passent au génitif (« von Flugzeugen, Treibstofflagern und Messdaten ») et l'agent est introduit par « durch ».",
      modelAnswer:
        "Aufgrund der gemeinsamen Nutzung von Flugzeugen, Treibstofflagern und Messdaten durch Forschungsteams verschiedener Länder lassen sich Kosten sparen und Messlücken schneller schließen.",
    },
    {
      id: "s17-sd",
      label: "D",
      points: 2,
      type: "konjunktiv",
      instruction: REWRITE,
      prompt:
        "Unterwasserroboter, die sich autonom unter das Eis bewegen, könnten diese Lücke schließen.",
      highlight: "könnten diese Lücke schließen",
      template: {
        before: "Unterwasserroboter, die sich autonom unter das Eis bewegen, ",
        after: ".",
      },
      solutions: [
        "wären in der Lage, diese Lücke zu schließen",
        "wären dazu in der Lage, diese Lücke zu schließen",
      ],
      explanation:
        "« können » au Konjunktiv II est remplacé par la périphrase « in der Lage sein + zu + infinitif », elle-même au Konjunktiv II (« wären in der Lage, … zu schließen »). Le sens potentiel reste identique.",
      modelAnswer:
        "Unterwasserroboter, die sich autonom unter das Eis bewegen, wären in der Lage, diese Lücke zu schließen.",
    },
    {
      id: "s17-se",
      label: "E",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Fest steht nur, dass die Berechnungen umso genauer werden, je dichter das Messnetz wird.",
      highlight: "umso genauer werden, je dichter das Messnetz wird",
      template: {
        before: "Fest steht nur, dass die Berechnungen ",
        after: ".",
      },
      solutions: [
        "mit zunehmender Dichte des Messnetzes genauer werden",
        "bei einem dichter werdenden Messnetz genauer werden",
      ],
      explanation:
        "La corrélation « umso … je … » est remplacée par un groupe nominal prépositionnel : « mit + zunehmender Dichte + génitif » ou « bei + adjectif participial + datif ». L'adjectif « dicht » se nominalise en « Dichte » ou reste sous forme de participe I (« dichter werdend »).",
      modelAnswer:
        "Fest steht nur, dass die Berechnungen mit zunehmender Dichte des Messnetzes genauer werden.",
    },
    {
      id: "s17-sf",
      label: "F",
      points: 1,
      type: "bezug",
      instruction: "Antworten Sie in einem vollständigen Satz.",
      prompt:
        "Worauf bezieht sich das Wort „dies“ in dem Satz „Laserinstrumente leisten dies mit einer Genauigkeit von wenigen Zentimetern“?",
      criteria: [
        {
          id: "c1",
          label:
            "„Dies“ bezieht sich auf das Erfassen der Höhenveränderung der Eisoberfläche (wie durch die Radarhöhenmesser).",
          keywords: ["höhenveränderung", "eisoberfläche", "erfassen", "radarhöhenmesser"],
        },
      ],
      explanation:
        "« Dies » reprend l'action décrite dans la phrase précédente : « erfassen, wie sich die Höhe der Eisoberfläche verändert ». Les instruments laser font la même chose, mais avec une précision de quelques centimètres.",
      modelAnswer:
        "„Dies“ bezieht sich auf das Erfassen der Höhenveränderung der Eisoberfläche.",
    },
    {
      id: "s17-sg",
      label: "G",
      points: 1,
      type: "konjunktiv",
      instruction:
        "Beantworten Sie die Frage in ein bis zwei vollständigen Sätzen.",
      prompt:
        "Warum steht in dem Satz „Besonders umstritten ist, ob nach dem Zerfall von Schelfeis bis zu 100 Meter hohe Eisklippen entstehen würden“ der Konjunktiv II („würden“)?",
      criteria: [
        {
          id: "c1",
          label:
            "Es geht um ein mögliches, nicht gesichertes Zukunftsszenario, dessen Eintritt unter Fachleuten umstritten ist.",
          keywords: [
            "möglichkeit",
            "mögliche",
            "unsicher",
            "hypothese",
            "szenario",
            "nicht gesichert",
            "umstritten",
          ],
        },
      ],
      explanation:
        "Le Konjunktiv II (« würden ») marque une hypothèse : la formation de falaises de glace de 100 mètres est envisagée comme possibilité, mais les spécialistes ne s'accordent pas sur le fait qu'elle se produise. C'est un scénario futur incertain.",
      modelAnswer:
        "Der Konjunktiv II drückt aus, dass es sich um ein mögliches, nicht gesichertes Zukunftsszenario handelt, über das unter Fachleuten keine Einigkeit besteht.",
    },
  ],
};
