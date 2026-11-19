import { sim11Lines } from "@/lib/dsh/texts-11";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim11: DshSimulation = {
  id: "sim-11",
  number: 11,
  slug: "von-der-natur-lernen",
  title: "Von der Natur lernen",
  subtitle: "Bionik: Pflanzen als Vorbilder für Technik",
  topic: "Bionik",
  minutes: 90,
  text: { lines: sim11Lines, wordCount: 859 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 11",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s11-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel.",
      items: [
        {
          id: "s11-q1-klette",
          prompt:
            "Pflanze, deren Früchte mit winzigen Haken an Fell und Kleidung hängen bleiben",
          answer: "die Klette",
          example: true,
        },
        {
          id: "s11-q1-halm",
          prompt:
            "Abbildung: hohler Getreidehalm mit Verdickungen (Knoten) in regelmäßigen Abständen",
          answer: "der Halm",
          accepted: ["der Getreidehalm"],
        },
        {
          id: "s11-q1-beschichtung",
          prompt:
            "Schicht aus wachsartigen Kristallen auf Blättern, die Wasser abperlen lässt",
          answer: "die Beschichtung",
        },
        {
          id: "s11-q1-stabilitaet",
          prompt:
            "Fähigkeit eines Materials, Verformung standzuhalten und nicht zu brechen",
          answer: "die Stabilität",
        },
      ],
    },

    {
      kind: "open",
      id: "s11-q2",
      number: "2",
      skill: "verstehen",
      points: 3,
      prompt:
        "Erklären Sie, was Bionik ist und was sie vom bloßen Kopieren der Natur unterscheidet.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Bionik analysiert biologische Prinzipien und nutzt sie für technische Lösungen (Biologie + Technik).",
          keywords: ["bionik", "biologische prinzipien", "biologie", "technik", "analysiert"],
        },
        {
          id: "c2",
          label: "Es geht nicht darum, die Natur einfach zu kopieren.",
          keywords: ["nicht einfach kopieren", "nicht kopieren", "kein kopieren", "bloßen kopieren"],
        },
        {
          id: "c3",
          label:
            "Das zugrunde liegende Prinzip wird herausgearbeitet und in ein technisch herstellbares Material oder Verfahren übersetzt.",
          keywords: ["prinzip", "herausarbeiten", "übersetzen", "herstellbar", "verfahren"],
        },
      ],
      sampleAnswer:
        "Bionik ist eine Disziplin, die biologische Prinzipien analysiert und für technische Lösungen nutzt; der Name setzt sich aus Biologie und Technik zusammen. Es geht ihr nicht darum, die Natur einfach zu kopieren. Stattdessen wird das zugrunde liegende Prinzip herausgearbeitet und in ein Material oder Verfahren übersetzt, das sich technisch herstellen lässt.",
    },

    {
      kind: "open",
      id: "s11-q3",
      number: "3",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Zeichnung zeigt den Querschnitt durch eine Blattoberfläche mit einem Wassertropfen. Markierung A liegt auf dem kugelförmigen Tropfen, B auf kleinen Partikeln auf dem Blatt und C auf den winzigen Erhebungen der Oberfläche. Ordnen Sie A, B und C den Begriffen „Wassertropfen“, „Schmutzpartikel“ und „Noppe“ zu und erklären Sie, warum der Schmutz mit dem Tropfen abrollt.",
      minWords: 35,
      criteria: [
        {
          id: "c1",
          label: "A ist der Wassertropfen.",
          keywords: ["a ist der wassertropfen", "wassertropfen", "tropfen a"],
        },
        {
          id: "c2",
          label: "B sind die Schmutzpartikel.",
          keywords: ["b sind die schmutzpartikel", "schmutzpartikel", "schmutz b"],
        },
        {
          id: "c3",
          label: "C ist die Noppe.",
          keywords: ["c ist die noppe", "noppe", "noppen c"],
        },
        {
          id: "c4",
          label:
            "Begründung: Die Partikel haften stärker am Tropfen als am Blatt, deshalb nimmt der abrollende Tropfen sie mit.",
          keywords: ["haften", "stärker", "abrollen", "mitnehmen"],
        },
      ],
      sampleAnswer:
        "A ist der Wassertropfen, B sind die Schmutzpartikel und C ist eine Noppe. Der Tropfen berührt nur die Spitzen der Noppen und bleibt kugelförmig liegen. Beim Abrollen nimmt er die Schmutzpartikel mit, weil diese stärker am Tropfen haften als am Blatt.",
    },

    {
      kind: "open",
      id: "s11-q4",
      number: "4",
      skill: "verstehen",
      points: 4,
      prompt:
        "Beschreiben Sie, wie Kakteen und Wüstengräser zu Wasser kommen und wie dieses Prinzip genutzt wird. Nennen Sie auch eine Einschränkung.",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label:
            "Winzige Spitzen und Rillen auf der Oberfläche fangen feine Nebeltröpfchen ein.",
          keywords: ["spitzen", "rillen", "tröpfchen", "nebel", "einfangen"],
        },
        {
          id: "c2",
          label: "Die Tröpfchen vereinen sich zu größeren Tropfen, die zur Wurzel ablaufen.",
          keywords: ["größere tropfen", "vereinen", "wurzel", "ablaufen"],
        },
        {
          id: "c3",
          label:
            "Technische Nutzung: Netze und Folien fangen Nebel und liefern ohne Strom Trinkwasser.",
          keywords: ["netze", "folien", "ohne strom", "trinkwasser", "quadratmeter"],
        },
        {
          id: "c4",
          label: "Einschränkung: Der Ertrag hängt von der Häufigkeit des Nebels ab.",
          keywords: ["ertrag", "nebelhäufigkeit", "wie oft", "nebel bildet"],
        },
      ],
      sampleAnswer:
        "Kakteen und Wüstengräser fangen mit winzigen Spitzen und Rillen auf ihrer Oberfläche feine Tröpfchen aus dem Nebel ein. Diese vereinen sich zu größeren Tropfen, die zur Wurzel ablaufen. Forscher haben dieses Prinzip auf Netze und Folien übertragen, die in Küstenregionen ohne Strom mehrere Liter Trinkwasser pro Quadratmeter und Tag liefern. Die Einschränkung ist, dass der Ertrag stark davon abhängt, wie oft sich Nebel bildet.",
    },

    {
      kind: "open",
      id: "s11-q5a",
      number: "5a",
      skill: "verstehen",
      points: 1,
      prompt: "Wodurch entsteht die Stabilität eines Getreidehalms?",
      minWords: 8,
      criteria: [
        {
          id: "c1",
          label:
            "Durch die Knoten genannten Verdickungen in regelmäßigen Abständen und durch die Anordnung der Fasern, die Druck und Zug aufnehmen.",
          keywords: ["knoten", "verdickungen", "fasern", "versteifen", "druck und zug"],
        },
      ],
      sampleAnswer:
        "Die Stabilität entsteht durch die Knoten genannten Verdickungen, die den Halm in regelmäßigen Abständen versteifen, sowie durch die Fasern in der Wand, die Druck und Zug aufnehmen.",
    },

    {
      kind: "open",
      id: "s11-q5b",
      number: "5b",
      skill: "verstehen",
      points: 3,
      prompt:
        "Wie wurde das Prinzip des Halms auf Hochhäuser übertragen, und welche Vorteile hat das?",
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label: "Es werden röhrenförmige Tragwerke mit Querverbindungen gebaut.",
          keywords: ["röhrenförmig", "tragwerke", "querverbindungen"],
        },
        {
          id: "c2",
          label: "Sie kommen mit deutlich weniger Stahl aus als massive Stützen.",
          keywords: ["weniger stahl", "stahl", "massive stützen"],
        },
        {
          id: "c3",
          label: "Durch den geringeren Materialeinsatz sinkt der Energiebedarf bei der Herstellung.",
          keywords: ["energiebedarf", "herstellung", "materialeinsatz"],
        },
      ],
      sampleAnswer:
        "Das Prinzip wurde auf Hochhäuser übertragen, indem man röhrenförmige Tragwerke baut, die durch Querverbindungen verstärkt werden. Sie brauchen deutlich weniger Stahl als massive Stützen. Weil weniger Material eingesetzt wird, sinkt zugleich der Energiebedarf bei der Herstellung.",
    },

    {
      kind: "open",
      id: "s11-q6",
      number: "6",
      skill: "verstehen",
      points: 4,
      prompt:
        "Beschreiben Sie, wie sich Kiefernzapfen verhalten, und erklären Sie, wie Architekten dieses Prinzip für Fassaden nutzen.",
      minWords: 50,
      criteria: [
        {
          id: "c1",
          label: "Die Zapfen öffnen und schließen sich je nach Luftfeuchtigkeit.",
          keywords: ["luftfeuchtigkeit", "feuchtigkeit", "öffnen", "schließen"],
        },
        {
          id: "c2",
          label: "Ihre Schuppen bestehen aus zwei Schichten, die unterschiedlich stark aufquellen.",
          keywords: ["zwei schichten", "unterschiedlich", "aufquellen", "schuppen"],
        },
        {
          id: "c3",
          label:
            "Architekten übertragen das auf Fassadenelemente aus Holz oder Kunststoff, die sich bei Sonne von selbst öffnen und Schatten spenden.",
          keywords: ["fassadenelemente", "holz", "kunststoff", "sonne", "schatten"],
        },
        {
          id: "c4",
          label: "Dabei sind keine Motoren oder Sensoren nötig.",
          keywords: ["ohne motoren", "ohne sensoren", "motoren", "sensoren"],
        },
      ],
      sampleAnswer:
        "Kiefernzapfen öffnen und schließen sich je nach Luftfeuchtigkeit, weil ihre Schuppen aus zwei Schichten bestehen, die unterschiedlich stark aufquellen. Architekten haben dieses Prinzip auf Fassadenelemente aus Holz oder Kunststoff übertragen: Sie öffnen sich bei Sonne von selbst, spenden Schatten und kommen ohne Motoren und Sensoren aus.",
    },

    {
      kind: "open",
      id: "s11-q7",
      number: "7",
      skill: "transfer",
      points: 4,
      prompt:
        "Ein Unternehmen möchte ein neues bionisches Produkt vermarkten. Welche Hürden nennt der Text, und woran erkennt man laut Text seriöse Bionik?",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label:
            "Hürde: Viele natürliche Strukturen lassen sich nicht im industriellen Maßstab herstellen.",
          keywords: ["maßstab", "industriell", "herstellen", "noppen", "tausendstel"],
        },
        {
          id: "c2",
          label:
            "Hürde: Die Natur arbeitet unter anderen Bedingungen, und die Entwicklungszeit beträgt oft zehn bis zwanzig Jahre.",
          keywords: ["bedingungen", "lebensdauer", "saison", "jahrzehnte", "entwicklungszeit", "zwanzig jahre"],
        },
        {
          id: "c3",
          label:
            "Seriöse Bionik beginnt mit einer Frage der Technik und sucht erst danach in der Natur nach Lösungen.",
          keywords: ["frage der technik", "technische frage", "material sparen", "erst danach"],
        },
        {
          id: "c4",
          label:
            "Der Begriff darf nicht nur als Werbeargument dienen; entscheidend ist das zugrunde liegende Prinzip.",
          keywords: ["werbeargument", "werbung", "nur werb", "prinzip", "aussieht"],
        },
      ],
      sampleAnswer:
        "Der Text nennt mehrere Hürden: Viele natürliche Strukturen lassen sich nicht im industriellen Maßstab herstellen, die Natur arbeitet mit anderen Lebensdauern als die Technik, und von der Entdeckung bis zum Produkt vergehen oft zehn bis zwanzig Jahre. Außerdem wird „Bionik“ oft nur als Werbeargument benutzt. Seriöse Bionik beginnt dagegen mit einer technischen Frage, etwa wie sich Material sparen lässt, und sucht erst danach das passende Prinzip in der Natur.",
    },

    {
      kind: "truefalse",
      id: "s11-q8",
      number: "8",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind.",
      example: {
        text: "Der Klettverschluss wurde schon in den 1940er-Jahren fertig entwickelt.",
        correct: false,
        justification:
          "Zwar stammt die Beobachtung aus den 1940er-Jahren, doch nach Jahren der Entwicklung entstand daraus der Klettverschluss.",
      },
      statements: [
        {
          id: "s11-q8-1",
          text: "Wassertropfen berühren auf Lotusblättern nur die Spitzen der Noppen.",
          correct: true,
          justification: "Im Text: „Wassertropfen berühren daher nur die Spitzen der Noppen“. (1 P)",
        },
        {
          id: "s11-q8-2",
          text: "Die Venusfliegenfalle schnappt zu, sobald ein einziges Sinneshaar berührt wird.",
          correct: false,
          justification:
            "Im Text: Sie schnappt zu, wenn ein Insekt innerhalb weniger Sekunden zwei Sinneshaare berührt. (1 P)",
        },
        {
          id: "s11-q8-3",
          text: "Die Natur stellt ihre Materialien meist bei Umgebungstemperatur her.",
          correct: true,
          justification: "Im Text: Materialien, die bei Umgebungstemperatur entstehen. (1 P)",
        },
        {
          id: "s11-q8-4",
          text: "Zwischen Entdeckung eines Prinzips und fertigem Produkt vergehen meist nur wenige Monate.",
          correct: false,
          justification: "Im Text: oft zehn bis zwanzig Jahre. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s11-sa",
      label: "A",
      points: 2,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt:
        "Eine Fassade, die mit einer solchen Farbe gestrichen wurde, muss seltener gereinigt werden.",
      highlight: "die mit einer solchen Farbe gestrichen wurde",
      template: { before: "", after: " muss seltener gereinigt werden." },
      solutions: ["Eine mit einer solchen Farbe gestrichene Fassade"],
      explanation:
        "La relative « die … gestrichen wurde » devient un attribut participial au participe II placé devant le nom. Le groupe est au passif, donc on garde « gestrichene » avec la terminaison faible après l'article indéfini « eine » (nominatif singulier féminin).",
      modelAnswer:
        "Eine mit einer solchen Farbe gestrichene Fassade muss seltener gereinigt werden.",
    },
    {
      id: "s11-sb",
      label: "B",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Weil weniger Material eingesetzt wird, sinkt zugleich der Energiebedarf bei der Herstellung.",
      highlight: "Weil weniger Material eingesetzt wird",
      template: {
        before: "",
        after: ", sinkt zugleich der Energiebedarf bei der Herstellung.",
      },
      solutions: [
        "Wegen des geringeren Materialeinsatzes",
        "Aufgrund des geringeren Materialeinsatzes",
      ],
      explanation:
        "La subordonnée causale « weil … » devient un groupe prépositionnel au génitif : « wegen / aufgrund + génitif ». « weniger Material » se nominalise en « der geringere Materialeinsatz », dont le génitif est « des geringeren Materialeinsatzes ». La principale garde l'inversion.",
      modelAnswer:
        "Wegen des geringeren Materialeinsatzes sinkt zugleich der Energiebedarf bei der Herstellung.",
    },
    {
      id: "s11-sc",
      label: "C",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Elemente aus Holz oder Kunststoff öffnen sich bei Sonne von selbst, ohne dass Motoren oder Sensoren nötig wären.",
      highlight: "ohne dass Motoren oder Sensoren nötig wären",
      template: {
        before: "Elemente aus Holz oder Kunststoff öffnen sich bei Sonne von selbst, ",
        after: ".",
      },
      solutions: [
        "ohne Motoren oder Sensoren",
        "ohne den Einsatz von Motoren oder Sensoren",
      ],
      explanation:
        "La subordonnée « ohne dass … nötig wären » se verbalise en groupe prépositionnel : « ohne + accusatif » ou « ohne den Einsatz von + datif ». On supprime le verbe « sein » et le Konjunktiv II, sans changer le sens.",
      modelAnswer:
        "Elemente aus Holz oder Kunststoff öffnen sich bei Sonne von selbst, ohne Motoren oder Sensoren.",
    },
    {
      id: "s11-sd",
      label: "D",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt:
        "Viele natürliche Strukturen lassen sich nicht im industriellen Maßstab herstellen.",
      highlight: "lassen sich nicht im industriellen Maßstab herstellen",
      template: { before: "Viele natürliche Strukturen ", after: "." },
      solutions: [
        "können nicht im industriellen Maßstab hergestellt werden",
        "sind nicht im industriellen Maßstab herstellbar",
      ],
      explanation:
        "« sich lassen + infinitif » est un substitut de passif. On le rend soit par le passif avec « können » (« hergestellt werden »), soit par l'adjectif en « -bar » (« herstellbar »). Le sujet reste « viele natürliche Strukturen » (pluriel).",
      modelAnswer:
        "Viele natürliche Strukturen können nicht im industriellen Maßstab hergestellt werden.",
    },
    {
      id: "s11-se",
      label: "E",
      points: 1,
      type: "bezug",
      instruction: "Antworten Sie in einem vollständigen Satz.",
      prompt:
        "Worauf bezieht sich „sie“ in dem Satz „Wenn sie abrollen, nehmen sie Schmutzpartikel mit“ (jeweils das erste und das zweite „sie“)?",
      criteria: [
        {
          id: "c1",
          label: "Beide Male bezieht sich „sie“ auf die Wassertropfen.",
          keywords: ["wassertropfen", "tropfen"],
        },
      ],
      explanation:
        "Les deux pronoms « sie » reprennent le même antécédent : les gouttes d'eau (« Wassertropfen ») qui roulent sur la feuille et emportent les particules de saleté.",
      modelAnswer:
        "Sowohl das erste als auch das zweite „sie“ beziehen sich auf die Wassertropfen.",
    },
    {
      id: "s11-sf",
      label: "F",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Wenn die Oberfläche zerkratzt oder verschmutzt ist, verlieren Fassadenfarben ihren Effekt.",
      highlight: "Wenn die Oberfläche zerkratzt oder verschmutzt ist",
      template: { before: "", after: ", verlieren Fassadenfarben ihren Effekt." },
      solutions: [
        "Bei zerkratzter oder verschmutzter Oberfläche",
        "Bei einer Zerkratzung oder Verschmutzung der Oberfläche",
      ],
      explanation:
        "La condition avec « wenn … ist » devient « bei + datif ». On peut employer l'adjectif participial (« zerkratzter oder verschmutzter Oberfläche ») ou le nom verbal (« einer Zerkratzung oder Verschmutzung der Oberfläche »). Les terminaisons du datif singulier féminin sont essentielles.",
      modelAnswer:
        "Bei zerkratzter oder verschmutzter Oberfläche verlieren Fassadenfarben ihren Effekt.",
    },
    {
      id: "s11-sg",
      label: "G",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Statt die Natur einfach zu kopieren, arbeiten Forscher das zugrunde liegende Prinzip heraus.",
      highlight: "Statt die Natur einfach zu kopieren",
      template: {
        before: "",
        after: ", arbeiten Forscher das zugrunde liegende Prinzip heraus.",
      },
      solutions: [
        "Anstelle des einfachen Kopierens der Natur",
        "Anstatt dass sie die Natur einfach kopieren",
      ],
      explanation:
        "« statt + infinitif » peut être nominalisé avec « anstelle + génitif » (« des einfachen Kopierens der Natur ») ou transformé en subordonnée avec « anstatt dass ». Le complément nominal reste au génitif.",
      modelAnswer:
        "Anstelle des einfachen Kopierens der Natur arbeiten Forscher das zugrunde liegende Prinzip heraus.",
    },
  ],
};
