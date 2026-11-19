import { sim15Lines } from "@/lib/dsh/texts-15";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim15: DshSimulation = {
  id: "sim-15",
  number: 15,
  slug: "die-nacht-wird-hell",
  title: "Die Nacht wird hell",
  subtitle: "Lichtverschmutzung und ihre Folgen für Insekten",
  topic: "Lichtverschmutzung",
  minutes: 90,
  text: { lines: sim15Lines, wordCount: 851 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 15",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s15-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel.",
      items: [
        {
          id: "s15-q1-blendung",
          prompt:
            "Störung des Sehens, weil eine Lichtquelle so hell ist, dass sich das Auge nicht anpassen kann",
          answer: "die Blendung",
          example: true,
        },
        {
          id: "s15-q1-strassenlaterne",
          prompt: "Abbildung: Laterne an einer Straße, die nachts den Weg beleuchtet",
          answer: "die Straßenlaterne",
        },
        {
          id: "s15-q1-bestaubung",
          prompt:
            "Übertragung von Blütenstaub von einer Pflanze auf die andere, sodass Früchte entstehen",
          answer: "die Bestäubung",
        },
        {
          id: "s15-q1-abschirmung",
          prompt:
            "Vorrichtung an einer Lampe, die verhindert, dass das Licht in alle Richtungen strahlt",
          answer: "die Abschirmung",
        },
      ],
    },

    {
      kind: "open",
      id: "s15-q2",
      number: "2",
      skill: "verstehen",
      points: 3,
      prompt:
        "Erklären Sie, was man unter Lichtverschmutzung versteht, und nennen Sie die drei Formen, die Fachleute unterscheiden.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Lichtverschmutzung ist die künstliche Aufhellung der Nacht durch Straßenlaternen, Werbetafeln, Fassaden und Sportanlagen.",
          keywords: ["künstliche aufhellung", "aufhellung der nacht", "künstlich"],
        },
        {
          id: "c2",
          label: "Himmelsleuchten: Aufhellung des Himmels durch an Luftteilchen gestreutes Licht.",
          keywords: ["himmelsleuchten", "himmelsaufhellung", "gestreut"],
        },
        {
          id: "c3",
          label:
            "Blendung (zu helles Licht) und Lichtübergriff (Licht fällt dorthin, wo es niemand braucht).",
          keywords: ["blendung", "lichtübergriff"],
        },
      ],
      sampleAnswer:
        "Als Lichtverschmutzung bezeichnet man die künstliche Aufhellung der Nacht durch Straßenlaternen, Werbetafeln, beleuchtete Fassaden und Sportanlagen. Fachleute unterscheiden drei Formen: das Himmelsleuchten, also die Aufhellung des Himmels durch gestreutes Licht, die Blendung, wenn eine Lampe so hell ist, dass sich das Auge nicht anpassen kann, und den Lichtübergriff, bei dem Licht dorthin fällt, wo es niemand braucht.",
    },

    {
      kind: "open",
      id: "s15-q3",
      number: "3",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Grafik zeigt, wie viele Insekten pro Nacht und Lampe gezählt wurden. Ordnen Sie die Balken A, B und C den Lichtfarben „warmweiß“, „neutralweiß“ und „kaltweiß“ zu und erklären Sie das Ergebnis.",
      chart: {
        kind: "bars",
        caption: "Insekten pro Nacht und Lampe bei verschiedenen Lichtfarben",
        unit: "Insekten",
        bars: [
          { label: "A", value: 150 },
          { label: "B", value: 40 },
          { label: "C", value: 90 },
        ],
      },
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label: "Balken A (150 Insekten) gehört zu kaltweißem Licht.",
          keywords: ["kaltweiß"],
        },
        {
          id: "c2",
          label: "Balken B (40 Insekten) gehört zu warmweißem Licht.",
          keywords: ["warmweiß"],
        },
        {
          id: "c3",
          label: "Balken C (90 Insekten) gehört zu neutralweißem Licht.",
          keywords: ["neutralweiß"],
        },
        {
          id: "c4",
          label:
            "Erklärung: Insekten reagieren besonders auf kurzwelliges, blauanteilreiches Licht; kaltweiß lockt am meisten an, gelbliches warmweißes Licht am wenigsten.",
          keywords: ["kurzwellig", "blauanteilreich", "kaltweiß", "gelblich"],
        },
      ],
      sampleAnswer:
        "A (150 Insekten) ist kaltweiß, C (90 Insekten) ist neutralweiß und B (40 Insekten) ist warmweiß. Insekten reagieren besonders auf kurzwelliges, blauanteilreiches Licht, wie es weiße LED-Lampen abgeben; kaltweißes Licht enthält davon am meisten und lockt daher die meisten Tiere an, während gelbliches warmweißes Licht deutlich weniger anzieht.",
    },

    {
      kind: "open",
      id: "s15-q4",
      number: "4",
      skill: "verstehen",
      points: 4,
      prompt:
        "Erklären Sie, warum Insekten um Lampen kreisen, und beschreiben Sie, was mit ihnen geschieht.",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label:
            "Viele Insekten orientieren sich nachts am Mond und halten einen festen Winkel zur Lichtquelle.",
          keywords: ["mond", "fester winkel", "orientieren"],
        },
        {
          id: "c2",
          label:
            "Bei einer nahen Lampe ändert sich der Winkel ständig, sodass die Tiere auf eine Spiralbahn geraten.",
          keywords: ["lampe", "winkel", "spiralbahn", "spiral"],
        },
        {
          id: "c3",
          label: "Die Insekten erschöpfen sich irgendwann.",
          keywords: ["erschöpf"],
        },
        {
          id: "c4",
          label:
            "Sie werden zur leichten Beute für Fledermäuse oder Spinnen; an einer Laterne verenden in einer Sommernacht mehr als hundert Insekten.",
          keywords: ["beute", "fledermaus", "spinnen", "hundert", "verenden"],
        },
      ],
      sampleAnswer:
        "Viele Insekten orientieren sich nachts am Mond, indem sie einen festen Winkel zur Lichtquelle halten und so geradeaus fliegen; das funktioniert, weil der Mond unendlich weit entfernt ist. Bei einer nahen Lampe ändert sich der Winkel ständig, und das Tier gerät auf eine Spiralbahn immer näher zur Lichtquelle. Dort erschöpft es sich und wird zur leichten Beute für Fledermäuse oder Spinnen; nach Schätzungen verenden an einer einzigen Straßenlaterne in einer Sommernacht mehr als hundert Insekten.",
    },

    {
      kind: "open",
      id: "s15-q5a",
      number: "5a",
      skill: "verstehen",
      points: 1,
      prompt:
        "Wie viel Prozent der Menschen in Europa leben unter einem künstlich aufgehellten Himmel?",
      minWords: 3,
      criteria: [
        {
          id: "c1",
          label: "Fast 99 Prozent.",
          numeric: [98, 99],
        },
      ],
      sampleAnswer: "Fast 99 Prozent.",
    },

    {
      kind: "open",
      id: "s15-q5b",
      number: "5b",
      skill: "verstehen",
      points: 3,
      prompt:
        "Welche Folgen hat das Licht für die Bestäubung von Pflanzen? Beschreiben Sie die Kette der Folgen.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Blüten unter Laternen werden seltener von Nachtfaltern besucht (in einer Studie um rund 60 Prozent).",
          keywords: ["nachtfalter", "seltener", "60 prozent", "laternen"],
        },
        {
          id: "c2",
          label: "Dadurch sinkt die Zahl der Bestäubungen.",
          keywords: ["bestäubung", "weniger bestäubungen"],
        },
        {
          id: "c3",
          label: "Die Pflanzen setzen weniger Früchte an.",
          keywords: ["früchte", "weniger früchte"],
        },
      ],
      sampleAnswer:
        "Untersuchungen zeigen, dass Blüten unter Laternen deutlich seltener von Nachtfaltern besucht werden – in einer Studie um rund 60 Prozent. Dadurch sinkt die Zahl der Bestäubungen, und die Pflanzen setzen weniger Früchte an. Da viele Vögel, Fledermäuse und Frösche von Insekten leben, setzt sich die Störung durch die Nahrungskette fort.",
    },

    {
      kind: "open",
      id: "s15-q6",
      number: "6",
      skill: "verstehen",
      points: 4,
      prompt:
        "Erklären Sie den Rebound-Effekt am Beispiel der LED-Beleuchtung und nennen Sie ein weiteres Argument, das gegen eine Verdunkelung der Straßen vorgebracht wird.",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label: "LED-Lampen verbrauchen weniger Strom als herkömmliche Leuchten.",
          keywords: ["led", "weniger strom", "sparen"],
        },
        {
          id: "c2",
          label:
            "Weil Licht günstiger geworden ist, werden mehr Lampen aufgestellt und Fassaden länger angestrahlt.",
          keywords: ["günstiger", "mehr lampen", "fassaden", "länger"],
        },
        {
          id: "c3",
          label: "Die Einsparung wird teilweise aufgezehrt, der Gesamtverbrauch sinkt kaum.",
          keywords: ["aufgezehrt", "gesamtverbrauch", "kaum gesunken"],
        },
        {
          id: "c4",
          label:
            "Weiteres Argument: Viele Menschen verbinden Licht mit Sicherheit; das subjektive Sicherheitsgefühl leidet bei gedimmtem Licht.",
          keywords: ["sicherheit", "sicherheitsgefühl", "gedimmt"],
        },
      ],
      sampleAnswer:
        "Der Rebound-Effekt bedeutet: Obwohl LED-Lampen pro Stück weniger Strom verbrauchen, ist der Gesamtverbrauch vieler Städte kaum gesunken, weil Licht günstiger geworden ist. Dadurch werden mehr Lampen aufgestellt und Fassaden länger angestrahlt, sodass die Einsparung teilweise wieder aufgezehrt wird. Ein weiteres Argument gegen die Verdunkelung ist, dass viele Menschen Licht mit Sicherheit verbinden und sich bei gedimmtem Licht unsicher fühlen, auch wenn die Zahl der Straftaten kaum steigt.",
    },

    {
      kind: "open",
      id: "s15-q7",
      number: "7",
      skill: "transfer",
      points: 4,
      prompt:
        "Eine Stadt will ihre Straßenbeleuchtung erneuern und dabei Menschen und Natur berücksichtigen. Welche Maßnahmen aus dem Text empfehlen Sie, und mit welchen Widerständen ist zu rechnen?",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label: " warmweißes bzw. gelbliches Licht wählen.",
          keywords: ["warmweiß", "gelblich"],
        },
        {
          id: "c2",
          label:
            "Abschirmung nach oben und zur Seite, Dimmen, Bewegungsmelder oder Abschalten in der zweiten Nachthälfte.",
          keywords: ["abschirmung", "dimmen", "bewegungsmelder", "abschalten"],
        },
        {
          id: "c3",
          label:
            "Widerstand: Viele Menschen verbinden Licht mit Sicherheit und fühlen sich bei Dunkelheit unsicher; Bürgerinitiativen fordern teils hellere Beleuchtung.",
          keywords: ["sicherheit", "sicherheitsgefühl", "hellere beleuchtung", "bürgerinitiative"],
        },
        {
          id: "c4",
          label:
            "Widerstand: Günstigere Beleuchtung verleitet dazu, mehr Lampen aufzustellen (Rebound-Effekt).",
          keywords: ["rebound", "mehr lampen", "günstiger"],
        },
      ],
      sampleAnswer:
        "Die Stadt sollte warmweißes oder gelbliches Licht verwenden, die Leuchten nach oben und zur Seite abschirmen, sodass sie nur nach unten strahlen, und die Beleuchtung dimmen oder mit Bewegungsmeldern steuern; denkbar ist auch das Abschalten in der zweiten Nachthälfte. Mit Widerstand ist zu rechnen, weil viele Menschen Licht mit Sicherheit verbinden, sich bei Dunkelheit unsicher fühlen und Bürgerinitiativen teilweise sogar eine hellere Beleuchtung fordern. Außerdem verleitet günstigeres Licht dazu, mehr Lampen aufzustellen, sodass Einsparungen durch den Rebound-Effekt wieder verloren gehen.",
    },

    {
      kind: "truefalse",
      id: "s15-q8",
      number: "8",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind.",
      example: {
        text: "Die Helligkeit der Nachtlandschaft nimmt weltweit ab.",
        correct: false,
        justification:
          "Im Text: Die Helligkeit nimmt weiter zu, im Durchschnitt um etwa zwei Prozent pro Jahr.",
      },
      statements: [
        {
          id: "s15-q8-1",
          text: "Beim Lichtübergriff fällt Licht dorthin, wo es niemand braucht.",
          correct: true,
          justification: "Im Text: „Licht fällt dorthin, wo es niemand braucht“. (1 P)",
        },
        {
          id: "s15-q8-2",
          text: "Alle Tierarten leiden unter dem künstlichen Licht.",
          correct: false,
          justification:
            "Im Text: Manche Fledermäuse und Spinnen profitieren von dem Insektenreichtum an den Lampen. (1 P)",
        },
        {
          id: "s15-q8-3",
          text: "Glühwürmchen finden ihre Partner nicht mehr, weil das künstliche Licht ihre Signale überstrahlt.",
          correct: true,
          justification: "Im Text wörtlich genannt. (1 P)",
        },
        {
          id: "s15-q8-4",
          text: "Die Zahl der Straftaten steigt in Gebieten mit gedimmtem Licht stark an.",
          correct: false,
          justification:
            "Im Text: Die Zahl der Straftaten steigt kaum; nur das subjektive Sicherheitsgefühl leidet. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s15-sa",
      label: "A",
      points: 2,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt:
        "Insekten, die in Schwärmen um die Lampen kreisen, erschöpfen irgendwann und werden eine leichte Beute.",
      highlight: "die in Schwärmen um die Lampen kreisen",
      template: { before: "", after: " erschöpfen irgendwann und werden eine leichte Beute." },
      solutions: ["Die in Schwärmen um die Lampen kreisenden Insekten"],
      explanation:
        "Le relatif « die … kreisen » devient un attribut participial au participe I placé devant le nom : « die kreisenden Insekten ». Le participe présent exprime une action simultanée ; après l'article défini « Die », l'adjectif prend la terminaison faible -en.",
      modelAnswer:
        "Die in Schwärmen um die Lampen kreisenden Insekten erschöpfen irgendwann und werden eine leichte Beute.",
    },
    {
      id: "s15-sb",
      label: "B",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Weil Insekten besonders auf kurzwelliges Licht reagieren, werden kaltweiße Lampen zum Problem.",
      highlight: "Weil Insekten besonders auf kurzwelliges Licht reagieren",
      template: { before: "", after: ", werden kaltweiße Lampen zum Problem." },
      solutions: [
        "Wegen der besonderen Reaktion der Insekten auf kurzwelliges Licht",
        "Aufgrund der besonderen Reaktion der Insekten auf kurzwelliges Licht",
      ],
      explanation:
        "La subordonnée causale « weil … » se transforme en groupe prépositionnel au génitif : « wegen / aufgrund + génitif ». Le verbe « reagieren » devient le nom « Reaktion » avec l'adjectif « besonderen » ; l'agent est au génitif (« der Insekten ») et la préposition « auf » est conservée (« auf kurzwelliges Licht »).",
      modelAnswer:
        "Wegen der besonderen Reaktion der Insekten auf kurzwelliges Licht werden kaltweiße Lampen zum Problem.",
    },
    {
      id: "s15-sc",
      label: "C",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Um Insekten zu schützen, schirmen Kommunen die Leuchten außerdem nach oben ab.",
      highlight: "Um Insekten zu schützen",
      template: {
        before: "",
        after: ", schirmen Kommunen die Leuchten außerdem nach oben ab.",
      },
      solutions: ["Zum Schutz der Insekten"],
      explanation:
        "La finale « um … zu » se nominalise avec « zum + nom » : « zum Schutz der Insekten ». Le verbe « schützen » devient le nom « Schutz » et le complément est au génitif (« der Insekten »).",
      modelAnswer:
        "Zum Schutz der Insekten schirmen Kommunen die Leuchten außerdem nach oben ab.",
    },
    {
      id: "s15-sd",
      label: "D",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt: "Der Lichtübergriff lässt sich durch Abschirmung leicht vermeiden.",
      highlight: "lässt sich durch Abschirmung leicht vermeiden",
      template: { before: "Der Lichtübergriff ", after: "." },
      solutions: [
        "kann durch Abschirmung leicht vermieden werden",
        "ist durch Abschirmung leicht vermeidbar",
      ],
      explanation:
        "« sich + lassen + infinitif » est un substitut de passif. Deux équivalents : le passif avec verbe modal (« kann … vermieden werden ») ou l'adjectif en -bar (« ist … vermeidbar »). Le sujet « Der Lichtübergriff » reste sujet dans les deux cas.",
      modelAnswer: "Der Lichtübergriff kann durch Abschirmung leicht vermieden werden.",
    },
    {
      id: "s15-se",
      label: "E",
      points: 1,
      type: "bezug",
      instruction: "Antworten Sie in einem vollständigen Satz.",
      prompt:
        "Worauf bezieht sich „Dadurch“ in dem Satz „Dadurch sinkt die Zahl der Bestäubungen“?",
      criteria: [
        {
          id: "c1",
          label:
            "„Dadurch“ bezieht sich darauf, dass Blüten unter Laternen seltener von Nachtfaltern besucht werden.",
          keywords: ["blüten", "nachtfalter", "seltener", "laternen"],
        },
      ],
      explanation:
        "« Dadurch » reprend la phrase précédente : les fleurs sous les lampes sont moins souvent visitées par les papillons nocturnes (d'environ 60 % dans une étude). C'est cette diminution qui entraîne moins de pollinisation.",
      modelAnswer:
        "„Dadurch“ bezieht sich darauf, dass Blüten unter Laternen seltener von Nachtfaltern besucht werden.",
    },
    {
      id: "s15-sf",
      label: "F",
      points: 3,
      type: "konnektor",
      instruction: REWRITE,
      prompt:
        "Obwohl LED-Lampen weniger Strom verbrauchen als herkömmliche Leuchten, ist der Gesamtverbrauch vieler Städte kaum gesunken.",
      highlight: "Obwohl LED-Lampen weniger Strom verbrauchen als herkömmliche Leuchten",
      template: {
        before: "",
        after: ", ist der Gesamtverbrauch vieler Städte kaum gesunken.",
      },
      solutions: [
        "Trotz des geringeren Stromverbrauchs von LED-Lampen im Vergleich zu herkömmlichen Leuchten",
      ],
      explanation:
        "La concession « obwohl » devient « trotz + génitif ». Le verbe « verbrauchen » se nominalise en « Stromverbrauch » avec le comparatif « geringeren » ; le complément de comparaison est rendu par « im Vergleich zu + datif ». La principale garde l'inversion verbe-sujet.",
      modelAnswer:
        "Trotz des geringeren Stromverbrauchs von LED-Lampen im Vergleich zu herkömmlichen Leuchten ist der Gesamtverbrauch vieler Städte kaum gesunken.",
    },
    {
      id: "s15-sg",
      label: "G",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Indem Kommunen die Lampen nachts dimmen, sparen sie Energie und schonen Tiere.",
      highlight: "Indem Kommunen die Lampen nachts dimmen",
      template: { before: "", after: ", sparen sie Energie und schonen Tiere." },
      solutions: [
        "Durch das nächtliche Dimmen der Lampen",
        "Durch nächtliches Dimmen der Lampen",
      ],
      explanation:
        "La subordonnée « indem … » se verbalise en groupe nominal avec « durch + acc. ». Le verbe « dimmen » devient le nom « Dimmen » ou « nächtliches Dimmen » ; le complément « der Lampen » est au génitif.",
      modelAnswer:
        "Durch das nächtliche Dimmen der Lampen sparen sie Energie und schonen Tiere.",
    },
  ],
};
