import { sim04Lines } from "@/lib/dsh/texts";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim04: DshSimulation = {
  id: "sim-04",
  number: 4,
  slug: "wenn-die-stadt-zur-waermeinsel-wird",
  title: "Wenn die Stadt zur Wärmeinsel wird",
  subtitle: "Stadtklima · Ursachen, Anpassung und soziale Gerechtigkeit",
  topic: "Stadtklima",
  minutes: 90,
  text: { lines: sim04Lines, wordCount: 930 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 04",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s4-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel.",
      items: [
        {
          id: "s4-q1-waermeinsel",
          prompt:
            "bebautes Gebiet, in dem die Lufttemperatur deutlich höher ist als im unbebauten Umland",
          answer: "die Wärmeinsel",
          example: true,
        },
        {
          id: "s4-q1-strassenschlucht",
          prompt: "Abbildung: enge Straße, die von hohen Gebäuden gesäumt wird",
          answer: "die Straßenschlucht",
        },
        {
          id: "s4-q1-tropennacht",
          prompt: "Nacht, in der die Temperatur nicht unter 20 Grad sinkt",
          answer: "die Tropennacht",
        },
        {
          id: "s4-q1-versiegelung",
          prompt:
            "Abdeckung des Bodens mit wasserundurchlässigem Material, sodass Regen nicht versickern kann",
          answer: "die Versiegelung",
        },
      ],
    },

    {
      kind: "open",
      id: "s4-q2",
      number: "2",
      skill: "verstehen",
      points: 3,
      prompt: "Nennen Sie drei Ursachen dafür, dass es in Städten wärmer ist als im Umland.",
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label: "Asphalt, Beton und Stein speichern tagsüber Wärme und geben sie nachts ab.",
          keywords: ["asphalt", "beton", "stein", "speichern", "wärme"],
        },
        {
          id: "c2",
          label: "Dunkle Flächen haben eine geringe Albedo und werfen wenig Sonnenstrahlung zurück.",
          keywords: ["albedo", "dunkl", "reflekt", "zurückwerf"],
        },
        {
          id: "c3",
          label: "Durch Versiegelung versickert kein Regen, sodass weniger Wasser verdunstet.",
          keywords: ["versiegel", "versicker", "verdunst"],
        },
        {
          id: "c4",
          label: "Abwärme von Verkehr, Industrie und Klimaanlagen bzw. mehrfache Reflexion in Straßenschluchten.",
          keywords: ["abwärme", "klimaanlagen", "reflexion", "luftaustausch"],
        },
      ],
      sampleAnswer:
        "(1) Straßen, Gebäude und Plätze aus Asphalt, Beton und Stein speichern tagsüber viel Wärme und geben sie nachts wieder ab. (2) Dunkle Flächen haben eine geringe Albedo und werfen nur wenig Sonnenstrahlung zurück. (3) Durch die Versiegelung versickert kein Regen, sodass weniger Wasser verdunstet und weniger Kühlung entsteht. Zusätzlich setzen Verkehr, Industrie und Klimaanlagen Abwärme frei.",
    },

    {
      kind: "open",
      id: "s4-q3",
      number: "3",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Grafik zeigt den Temperaturverlauf an einem Hochsommertag an zwei Orten: in der Innenstadt und im Umland. Welche der beiden Kurven (A oder B) gehört zur Innenstadt? Begründen Sie Ihre Antwort mit Zahlen aus dem Text. Sagen Sie außerdem, zu welcher Tageszeit der Unterschied am größten ist, und nennen Sie einen Grund dafür.",
      chart: {
        kind: "curve",
        caption: "Lufttemperatur an einem Hochsommertag (schematisch)",
        xLabel: "Tageszeit",
        yLabel: "Temperatur in °C",
        points: [
          { label: "15 Uhr · Umland", value: 30 },
          { label: "15 Uhr · Innenstadt", value: 32 },
          { label: "4 Uhr · Umland", value: 16 },
          { label: "4 Uhr · Innenstadt", value: 22 },
        ],
      },
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label: "Kurve B gehört zur Innenstadt.",
          keywords: ["kurve b", "b gehört"],
        },
        {
          id: "c2",
          label: "Begründung mit Zahlen: 32 und 22 Grad in der Stadt gegenüber 30 und 16 Grad im Umland.",
          keywords: ["32", "22", "30", "16"],
        },
        {
          id: "c3",
          label: "Der Unterschied ist nachts bzw. am frühen Morgen am größten.",
          keywords: ["nacht", "morgen", "vier uhr", "früh"],
        },
        {
          id: "c4",
          label: "Grund: gespeicherte Wärme wird nachts abgegeben, Abstrahlung behindert, wenig Luftaustausch.",
          keywords: ["wärmespeicher", "abstrahlung", "luftaustausch", "gebäude", "wind"],
        },
      ],
      sampleAnswer:
        "Kurve B gehört zur Innenstadt: Dort erreicht die Temperatur um 15 Uhr 32 Grad (Umland 30 Grad) und sinkt bis vier Uhr morgens nur auf 22 Grad, während sie im Umland auf 16 Grad zurückgeht. Der Unterschied ist nachts am größten, weil die Gebäude die tagsüber gespeicherte Wärme wieder abgeben, die Wärmeabstrahlung zum Himmel behindern und der Wind die erwärmte Luft in den Straßen kaum austauschen kann.",
    },

    {
      kind: "open",
      id: "s4-q4",
      number: "4",
      skill: "verstehen",
      points: 3,
      prompt: "Erklären Sie den Begriff „Verdunstungskälte“ am Beispiel eines Stadtbaumes.",
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label: "Wasser geht vom flüssigen in den gasförmigen Zustand über.",
          keywords: ["flüssig", "gasförmig", "verdunst"],
        },
        {
          id: "c2",
          label: "Dabei wird der Umgebung Wärme entzogen.",
          keywords: ["wärme entzogen", "entzieht", "kühlt"],
        },
        {
          id: "c3",
          label: "Ein großer Laubbaum verdunstet mehrere hundert Liter und kühlt wie mehrere Klimageräte.",
          keywords: ["laubbaum", "hundert liter", "klimageräte", "klimaanlagen"],
        },
      ],
      sampleAnswer:
        "Verdunstungskälte entsteht, wenn Wasser vom flüssigen in den gasförmigen Zustand übergeht und dabei der Umgebung Wärme entzieht. Ein großer Laubbaum verdunstet an einem heißen Tag mehrere hundert Liter Wasser und kühlt die Umgebung dadurch ähnlich stark wie mehrere Klimageräte.",
    },

    {
      kind: "open",
      id: "s4-q5a",
      number: "5a",
      skill: "verstehen",
      points: 1,
      prompt: "Wie hat sich die Zahl der Tropennächte in der erwähnten Großstadt verändert?",
      minWords: 8,
      criteria: [
        {
          id: "c1",
          label: "Von durchschnittlich drei pro Jahr in den 1990er-Jahren auf etwa zwölf gestiegen.",
          keywords: ["drei", "zwölf", "1990er", "vierfache"],
        },
      ],
      sampleAnswer:
        "Sie ist von durchschnittlich drei pro Jahr in den 1990er-Jahren auf etwa zwölf gestiegen, also auf das Vierfache.",
    },

    {
      kind: "open",
      id: "s4-q5b",
      number: "5b",
      skill: "verstehen",
      points: 3,
      prompt:
        "Beschreiben Sie, welche Folgen die hohen Nachttemperaturen für die Gesundheit der Menschen und für den Energieverbrauch haben.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Schlafmangel und Hitzestress belasten das Herz-Kreislauf-System; bei langen Hitzewellen steigt die Sterblichkeit.",
          keywords: ["schlafmangel", "hitzestress", "herz-kreislauf", "sterblichkeit"],
        },
        {
          id: "c2",
          label: "Mehr Klimaanlagen laufen, sodass der Stromverbrauch steigt.",
          keywords: ["klimaanlagen", "stromverbrauch", "strom"],
        },
        {
          id: "c3",
          label: "Teufelskreis: die Abwärme der Klimaanlagen erhitzt den Straßenraum zusätzlich.",
          keywords: ["teufelskreis", "abwärme", "zusätzlich"],
        },
      ],
      sampleAnswer:
        "Der Körper kann sich nachts nicht erholen; Schlafmangel und Hitzestress belasten vor allem das Herz-Kreislauf-System, und bei langen Hitzewellen steigt die Sterblichkeit älterer Menschen. Zugleich laufen mehr Klimaanlagen, sodass der Stromverbrauch steigt. Deren Abwärme erhitzt den Straßenraum zusätzlich, was wiederum noch mehr Kühlung erfordert – ein Teufelskreis.",
    },

    {
      kind: "open",
      id: "s4-q6",
      number: "6",
      skill: "transfer",
      points: 4,
      prompt:
        "Ein Supermarkt am Stadtrand besitzt einen großen Parkplatz aus dunklem Asphalt und ein flaches, dunkles Dach; Bäume gibt es kaum. Erklären Sie möglichst genau, auf welche Weise sich die Hitzebelastung an diesem Standort nach den Informationen aus dem Text senken ließe.",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label: "Bäume auf dem Parkplatz spenden Schatten und kühlen durch Verdunstung.",
          keywords: ["bäume", "schatten", "verdunst"],
        },
        {
          id: "c2",
          label: "Dachbegrünung: begrüntes Dach bleibt bei etwa 35 Grad, dunkles erreicht über 70 Grad.",
          keywords: ["dach", "begrün", "35", "70"],
        },
        {
          id: "c3",
          label: "Helle Beläge und Anstriche erhöhen die Albedo und werfen mehr Sonnenstrahlung zurück.",
          keywords: ["hell", "albedo", "beläge", "anstriche"],
        },
        {
          id: "c4",
          label: "Teilweise Entsiegelung lässt Regenwasser versickern und später verdunsten.",
          keywords: ["entsiegel", "versicker", "regenwasser", "verdunst"],
        },
      ],
      sampleAnswer:
        "Auf dem Parkplatz könnten Bäume gepflanzt werden, die Schatten spenden und durch Verdunstung kühlen. Das Dach ließe sich begrünen: Ein begrüntes Dach bleibt bei etwa 35 Grad, ein dunkles kann über 70 Grad erreichen, sodass das Gebäude weniger Wärme aufnimmt. Helle Beläge und Anstriche würden die Albedo erhöhen, also mehr Sonnenstrahlung zurückwerfen. Wird der Boden teilweise entsiegelt, kann Regenwasser versickern und später verdunsten, was ebenfalls kühlt.",
    },

    {
      kind: "open",
      id: "s4-q7",
      number: "7",
      skill: "verstehen",
      points: 3,
      prompt: "Nennen Sie drei Grenzen bzw. Probleme der Begrünung als Mittel gegen die städtische Hitze.",
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label: "In dicht bebauten Vierteln fehlt der Platz, zumal unter den Straßen Leitungen verlaufen.",
          keywords: ["platz", "leitungen", "dicht bebaut"],
        },
        {
          id: "c2",
          label: "Stadtbäume leiden unter Hitze und Trockenheit und müssen bewässert werden.",
          keywords: ["bewässer", "trockenheit", "dürre", "hitze"],
        },
        {
          id: "c3",
          label: "Dachbegrünung braucht Tragfähigkeit und ist bei Altbauten teuer; die Wirkung eines Parks reicht nur einige hundert Meter.",
          keywords: ["tragfähigkeit", "altbauten", "teuer", "hundert meter", "reichweite"],
        },
        {
          id: "c4",
          label: "Zielkonflikt mit dem Wohnungsbau um Freiflächen.",
          keywords: ["wohnungsbau", "freiflächen", "zielkonflikt"],
        },
      ],
      sampleAnswer:
        "In dicht bebauten Vierteln fehlt oft der Platz für neue Bäume, auch weil unter den Straßen Leitungen verlaufen. Stadtbäume leiden selbst unter Hitze und Trockenheit und müssen in Dürreperioden bewässert werden. Dachbegrünungen setzen eine ausreichende Tragfähigkeit voraus und sind bei Altbauten teuer; zudem reicht die Wirkung eines Parks nur einige hundert Meter weit, und der Wohnungsbau konkurriert um die Freiflächen.",
    },

    {
      kind: "open",
      id: "s4-q8",
      number: "8",
      skill: "verstehen",
      points: 2,
      prompt: "Nennen Sie zwei Gründe, weshalb Bewohner ärmerer Stadtviertel stärker unter Hitze leiden.",
      minWords: 25,
      criteria: [
        {
          id: "c1",
          label: "Dichte Bebauung und viel weniger Grünfläche pro Einwohner.",
          keywords: ["dicht", "grünfläche", "bebauung", "quadratmeter"],
        },
        {
          id: "c2",
          label: "Schlecht gedämmte Dachgeschosswohnungen und keine Klimaanlage.",
          keywords: ["gedämmt", "dachgeschoss", "klimaanlage", "einkommen"],
        },
      ],
      sampleAnswer:
        "Die Viertel sind meist dichter bebaut und haben viel weniger Grünflächen pro Einwohner (drei statt vierzig Quadratmeter). Außerdem wohnen Menschen mit geringem Einkommen häufiger in schlecht gedämmten Dachgeschosswohnungen und können sich keine Klimaanlage leisten.",
    },

    {
      kind: "truefalse",
      id: "s4-q9",
      number: "9",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind.",
      example: {
        text: "Der Temperaturunterschied zwischen Stadt und Umland ist zu jeder Tageszeit gleich groß.",
        correct: false,
        justification: "Im Text: Der Unterschied ist nachts am größten.",
      },
      statements: [
        {
          id: "s4-q9-1",
          text: "Ein begrüntes Dach bleibt an einem Sommertag deutlich kühler als ein dunkles Dach.",
          correct: true,
          justification: "Im Text: etwa 35 Grad gegenüber über 70 Grad. (1 P)",
        },
        {
          id: "s4-q9-2",
          text: "Kaltluftschneisen verstärken die Wärmeinsel, weil sie kalte Luft in die Stadt leiten.",
          correct: false,
          justification:
            "Sie wirken wie natürliche Klimaanlagen und entlasten die Stadt; Neubauten, die sie blockieren, verschlechtern die Lage. (1 P)",
        },
        {
          id: "s4-q9-3",
          text: "In der erwähnten Auswertung standen den Einwohnern des Arbeiterviertels mehr Grünflächen zur Verfügung als denen des Villenviertels.",
          correct: false,
          justification:
            "Es waren drei Quadratmeter im Arbeiterviertel gegenüber vierzig im Villenviertel. (1 P)",
        },
        {
          id: "s4-q9-4",
          text: "Die Wirkung eines Parks reicht nur einige hundert Meter weit.",
          correct: true,
          justification: "Im Text: Seine Wirkung reicht nur einige hundert Meter weit. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s4-sa",
      label: "A",
      points: 2,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt:
        "In engen Straßenschluchten, die von hohen Gebäuden gesäumt werden, wird die Sonnenstrahlung zwischen den Fassaden mehrfach reflektiert und bleibt so im Straßenraum gefangen.",
      highlight: "die von hohen Gebäuden gesäumt werden",
      template: {
        before: "In engen, ",
        after:
          " wird die Sonnenstrahlung zwischen den Fassaden mehrfach reflektiert und bleibt so im Straßenraum gefangen.",
      },
      solutions: ["von hohen Gebäuden gesäumten Straßenschluchten"],
      explanation:
        "La relative au passif « die … gesäumt werden » devient un attribut participial au participe II devant le nom. Le groupe est au datif pluriel après la préposition « in », d'où la terminaison -en : « von hohen Gebäuden gesäumten Straßenschluchten ».",
      modelAnswer:
        "In engen, von hohen Gebäuden gesäumten Straßenschluchten wird die Sonnenstrahlung zwischen den Fassaden mehrfach reflektiert und bleibt so im Straßenraum gefangen.",
    },
    {
      id: "s4-sb",
      label: "B",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt: "Wenn Freiflächen für Neubauten verdichtet werden, verschärft sich die Hitzebelastung.",
      highlight: "Wenn Freiflächen für Neubauten verdichtet werden",
      template: { before: "", after: ", verschärft sich die Hitzebelastung." },
      solutions: [
        "Bei der Verdichtung von Freiflächen für Neubauten",
        "Im Falle einer Verdichtung von Freiflächen für Neubauten",
      ],
      explanation:
        "La subordonnée de condition « wenn … » se transforme en groupe prépositionnel : « bei / im Falle + nom ». Le verbe « verdichten » devient le nom « Verdichtung », avec un complément en « von » au génitif.",
      modelAnswer:
        "Bei der Verdichtung von Freiflächen für Neubauten verschärft sich die Hitzebelastung.",
    },
    {
      id: "s4-sc",
      label: "C",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt: "Auch Dächer lassen sich begrünen.",
      highlight: "lassen sich begrünen",
      template: { before: "Auch Dächer ", after: "." },
      solutions: ["können begrünt werden", "sind begrünbar"],
      explanation:
        "« sich lassen + infinitif » est un substitut de passif. Équivalents : le passif avec modal « können begrünt werden » ou l'adjectif en -bar « sind begrünbar ».",
      modelAnswer: "Auch Dächer können begrünt werden.",
    },
    {
      id: "s4-sd",
      label: "D",
      points: 3,
      type: "passiversatz",
      instruction: REWRITE,
      prompt:
        "Stadtbäume leiden selbst unter Hitze und Trockenheit und müssen in Dürreperioden bewässert werden, was Personal und Wasser bindet.",
      highlight: "müssen in Dürreperioden bewässert werden",
      template: {
        before: "Stadtbäume leiden selbst unter Hitze und Trockenheit und ",
        after: ", was Personal und Wasser bindet.",
      },
      solutions: ["man muss sie in Dürreperioden bewässern"],
      explanation:
        "Le passif avec modal est remplacé par un actif avec un sujet indéfini « man ». L'ancien sujet devient l'objet accusatif « sie », et l'infinitif « bewässern » se place à la fin après le verbe modal.",
      modelAnswer:
        "Stadtbäume leiden selbst unter Hitze und Trockenheit und man muss sie in Dürreperioden bewässern, was Personal und Wasser bindet.",
    },
    {
      id: "s4-se",
      label: "E",
      points: 1,
      type: "bezug",
      instruction: "Antworten Sie in einem vollständigen Satz.",
      prompt:
        "„Je heißer es wird, desto mehr Klimaanlagen laufen, und diese erhöhen durch ihre Abwärme die Temperatur im Straßenraum weiter.“ Worauf bezieht sich „diese“?",
      criteria: [
        {
          id: "c1",
          label: "„diese“ bezieht sich auf die Klimaanlagen.",
          keywords: ["klimaanlagen"],
        },
      ],
      explanation:
        "Le pronom démonstratif « diese » reprend le nom pluriel « Klimaanlagen » de la première partie de la phrase.",
      modelAnswer: "„diese“ bezieht sich auf die Klimaanlagen.",
    },
    {
      id: "s4-sf",
      label: "F",
      points: 1,
      type: "konjunktiv",
      instruction: "Beantworten Sie die Frage in ein bis zwei vollständigen Sätzen.",
      prompt:
        "„Wird ein Viertel aufgewertet, können die Mieten steigen, sodass gerade jene Bewohner verdrängt würden, denen die Begrünung nützen sollte.“ Warum steht hier „würden“ und nicht „werden“?",
      criteria: [
        {
          id: "c1",
          label:
            "Konjunktiv II : la verdrängung n'est qu'une conséquence possible, pas encore réalisée.",
          keywords: ["konjunktiv", "möglichkeit", "nicht verwirklicht", "hypothetisch", "nicht wirklichkeit"],
        },
      ],
      explanation:
        "Le Konjunktiv II « würden » marque une éventualité : la hausse des loyers pourrait chasser les habitants, mais ce n'est pas une certitude ni un fait déjà accompli.",
      modelAnswer:
        "Der Konjunktiv II drückt aus, dass die Verdrängung nur eine mögliche Folge ist, die eintreten könnte, aber noch nicht verwirklicht ist.",
    },
    {
      id: "s4-sg",
      label: "G",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt: "Da kalte Luft schwerer ist, fließt sie über Hänge und Täler als Kaltluft in die Stadt.",
      highlight: "Da kalte Luft schwerer ist",
      template: { before: "", after: ", fließt sie über Hänge und Täler als Kaltluft in die Stadt." },
      solutions: [
        "Aufgrund des höheren Gewichts kalter Luft",
        "Wegen des höheren Gewichts kalter Luft",
        "Infolge des höheren Gewichts kalter Luft",
      ],
      explanation:
        "La cause avec « da » devient un groupe au génitif avec « aufgrund / wegen / infolge ». Le comparatif « schwerer » est nominalisé en « das höhere Gewicht », suivi du génitif « kalter Luft ».",
      modelAnswer:
        "Aufgrund des höheren Gewichts kalter Luft fließt sie über Hänge und Täler als Kaltluft in die Stadt.",
    },
  ],
};
