import { sim05Lines } from "@/lib/dsh/texts";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim05: DshSimulation = {
  id: "sim-05",
  number: 5,
  slug: "waerme-aus-der-tiefe",
  title: "Wärme aus der Tiefe",
  subtitle: "Geothermie als Energiequelle für Wärmenetze",
  topic: "Geothermie",
  minutes: 90,
  text: { lines: sim05Lines, wordCount: 855 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 05",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s5-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel.",
      items: [
        {
          id: "s5-q1-dublette",
          prompt: "Paar aus einer Förder- und einer Injektionsbohrung",
          answer: "die Dublette",
          example: true,
        },
        {
          id: "s5-q1-fernwaermenetz",
          prompt:
            "System aus gedämmten Rohrleitungen, das Wärme von einer zentralen Anlage zu vielen Gebäuden transportiert",
          answer: "das Fernwärmenetz",
        },
        {
          id: "s5-q1-bohrturm",
          prompt: "Abbildung: hoher Turm über einer Bohrung für eine Tiefbohrung",
          answer: "der Bohrturm",
        },
        {
          id: "s5-q1-waermetauscher",
          prompt:
            "Bauteil, das Wärme von einer Flüssigkeit auf eine andere überträgt, ohne dass sich beide vermischen",
          answer: "der Wärmetauscher",
        },
      ],
    },

    {
      kind: "open",
      id: "s5-q2",
      number: "2",
      skill: "verstehen",
      points: 3,
      prompt: "Worin unterscheiden sich oberflächennahe und tiefe Geothermie? Nennen Sie drei Unterschiede.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label: "Tiefe: oberflächennah bis etwa 400 Meter, tief 2.000 bis 5.000 Meter.",
          keywords: ["400", "2.000", "5.000", "meter"],
        },
        {
          id: "c2",
          label: "Temperatur: oben etwa zehn Grad mit Wärmepumpe, unten 60 bis 150 Grad.",
          keywords: ["zehn grad", "wärmepumpe", "60", "150"],
        },
        {
          id: "c3",
          label: "Nutzung: einzelne Gebäude versus ganze Stadtteile über Leitungen.",
          keywords: ["einzelne gebäude", "stadtteile", "leitungen"],
        },
      ],
      sampleAnswer:
        "Die oberflächennahe Geothermie reicht nur bis etwa 400 Meter Tiefe, die tiefe Geothermie erschließt Schichten in 2.000 bis 5.000 Metern. Im Boden herrschen oberflächennah nur etwa zehn Grad, sodass eine Wärmepumpe nötig ist, während in der Tiefe 60 bis 150 Grad erreicht werden. Außerdem versorgt die oberflächennahe Technik meist einzelne Gebäude, die tiefe dagegen über Leitungen ganze Stadtteile.",
    },

    {
      kind: "open",
      id: "s5-q3",
      number: "3",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Grafik zeigt schematisch eine Geothermieanlage mit Dublette. Benennen Sie die mit A bis D gekennzeichneten Teile und beschreiben Sie, wie das Wasser durch die Anlage zirkuliert. A: Förderbohrung, B: Wärmetauscher, C: Injektionsbohrung, D: heiße, wasserführende Gesteinsschicht (Thermalwasser-Reservoir).",
      minWords: 50,
      criteria: [
        {
          id: "c1",
          label: "A ist die Förderbohrung, B der Wärmetauscher.",
          keywords: ["förderbohrung", "wärmetauscher"],
        },
        {
          id: "c2",
          label: "C ist die Injektionsbohrung, D die heiße wasserführende Gesteinsschicht.",
          keywords: ["injektionsbohrung", "gesteinsschicht", "reservoir"],
        },
        {
          id: "c3",
          label: "Das heiße Thermalwasser wird über die Förderbohrung nach oben gepumpt und gibt im Wärmetauscher Wärme an das Fernwärmenetz ab.",
          keywords: ["nach oben", "gepumpt", "wärme ab", "fernwärmenetz"],
        },
        {
          id: "c4",
          label: "Das abgekühlte Wasser wird über die Injektionsbohrung in dieselbe Schicht zurückgeleitet.",
          keywords: ["abgekühlt", "zurückgeleitet", "dieselbe schicht"],
        },
      ],
      sampleAnswer:
        "A ist die Förderbohrung, B der Wärmetauscher, C die Injektionsbohrung und D die heiße, wasserführende Gesteinsschicht. Das heiße Thermalwasser wird über die Förderbohrung nach oben gepumpt, gibt im Wärmetauscher seine Wärme an das Wasser des Fernwärmenetzes ab und wird anschließend abgekühlt über die Injektionsbohrung in dieselbe Schicht zurückgeleitet.",
    },

    {
      kind: "open",
      id: "s5-q4",
      number: "4",
      skill: "verstehen",
      points: 3,
      prompt:
        "Erklären Sie, warum das abgekühlte Wasser wieder in dieselbe Schicht zurückgeleitet wird und warum die beiden Bohrungen weit auseinander liegen.",
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label: "Durch die Rückleitung bleiben Druck und Fördermenge im Reservoir erhalten.",
          keywords: ["druck", "fördermenge", "erhalten"],
        },
        {
          id: "c2",
          label: "Das stark salzhaltige Wasser darf nicht in Flüsse geleitet werden, daher geschlossener Kreislauf.",
          keywords: ["salzhaltig", "flüsse", "geschlossenen kreislauf"],
        },
        {
          id: "c3",
          label: "Die Bohrungen liegen etwa 1.500 Meter auseinander, damit das kalte Wasser nicht zu früh zur Förderbohrung gelangt.",
          keywords: ["1.500", "auseinander", "kaltes wasser", "zu früh"],
        },
      ],
      sampleAnswer:
        "Durch die Rückleitung bleiben Druck und Fördermenge im Reservoir erhalten; außerdem darf das stark salzhaltige Thermalwasser nicht in Flüsse geleitet werden, weshalb es in einem geschlossenen Kreislauf zirkuliert. Die Bohrungen enden etwa 1.500 Meter voneinander entfernt, damit sich das kalte Wasser nicht zu früh bis zur Förderbohrung ausbreitet und das geförderte Wasser abkühlt.",
    },

    {
      kind: "open",
      id: "s5-q5a",
      number: "5a",
      skill: "verstehen",
      points: 1,
      prompt: "Wie viel kostet eine Tiefbohrung?",
      minWords: 5,
      criteria: [
        {
          id: "c1",
          label: "Zwischen fünf und zehn Millionen Euro.",
          numeric: [5, 10],
        },
      ],
      sampleAnswer: "Zwischen fünf und zehn Millionen Euro.",
    },

    {
      kind: "open",
      id: "s5-q5b",
      number: "5b",
      skill: "verstehen",
      points: 2,
      prompt:
        "Was versteht man unter dem „Fündigkeitsrisiko“, und wie lässt es sich verringern?",
      minWords: 30,
      criteria: [
        {
          id: "c1",
          label:
            "Man weiß vor der Bohrung nicht sicher, ob das Wasser heiß und ergiebig genug ist.",
          keywords: ["nicht sicher", "heiße", "ergiebig", "unsicherheit"],
        },
        {
          id: "c2",
          label: "Verringerung durch seismische Messungen, aber nicht völlig beseitigt.",
          keywords: ["seismische", "schallwellen", "verringern", "nicht beseitigen"],
        },
      ],
      sampleAnswer:
        "Das Fündigkeitsrisiko besteht darin, dass man vor der Bohrung nicht sicher weiß, ob das Wasser heiß und ergiebig genug ist. Es lässt sich durch seismische Messungen verringern, bei denen Schallwellen den Untergrund durchleuchten, aber nicht ganz beseitigen.",
    },

    {
      kind: "open",
      id: "s5-q6",
      number: "6",
      skill: "verstehen",
      points: 4,
      prompt:
        "Beschreiben Sie, warum das petrothermale Verfahren umstritten ist: Wie funktioniert es, welches Risiko besteht, welches Beispiel nennt der Text, und wie versuchen Betreiber das Risiko zu begrenzen?",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label:
            "Kaltes Wasser wird mit hohem Druck in trockenes, heißes Gestein gepresst, um Risse zu erzeugen.",
          keywords: ["einpress", "druck", "risse", "trockenes gestein"],
        },
        {
          id: "c2",
          label: "Dabei kann es zu kleinen Erdbeben kommen.",
          keywords: ["erdbeben", "beben"],
        },
        {
          id: "c3",
          label: "Beispiel: Beben der Stärke 3,4 in Basel 2006, Gebäudeschäden und Abbruch des Projekts.",
          keywords: ["basel", "2006", "3,4", "schäden", "abbruch"],
        },
        {
          id: "c4",
          label: "Ampelsystem: bei Überschreiten eines Schwellenwerts wird die Einpressung gedrosselt.",
          keywords: ["ampelsystem", "schwellenwert", "gedrosselt", "messstation"],
        },
      ],
      sampleAnswer:
        "Beim petrothermalen Verfahren wird kaltes Wasser mit hohem Druck in trockenes, heißes Gestein gepresst, um Risse zu erzeugen, in denen sich das Wasser erhitzt. Dabei kann es zu kleinen Erdbeben kommen; 2006 löste ein Projekt in Basel ein Beben der Stärke 3,4 aus, das Gebäudeschäden verursachte und zum Abbruch führte. Betreiber arbeiten heute mit einem Ampelsystem: Überschreitet der Druck an einer Messstation einen Schwellenwert, wird die Einpressung gedrosselt.",
    },

    {
      kind: "open",
      id: "s5-q7",
      number: "7",
      skill: "verstehen",
      points: 2,
      prompt:
        "Unter welchen Voraussetzungen ist die Wärmeversorgung eines Wohngebiets mit tiefer Geothermie wirtschaftlich?",
      minWords: 30,
      criteria: [
        {
          id: "c1",
          label: "Viele Abnehmer müssen dicht beieinander wohnen, weil das Wärmenetz teuer ist.",
          keywords: ["abnehmer", "dicht", "wärmenetz", "teuer"],
        },
        {
          id: "c2",
          label: "Förderung durch den Bund (bis zu 40 Prozent) und später kaum Brennstoffkosten.",
          keywords: ["bund", "40 prozent", "förderung", "brennstoffkosten"],
        },
      ],
      sampleAnswer:
        "Es müssen viele Abnehmer dicht beieinander wohnen, weil das Wärmenetz pro Kilometer teuer ist und sich sonst nicht lohnt. Außerdem helfen die Förderung durch den Bund von bis zu 40 Prozent der Investition und die stabilen Kosten, da später kaum Brennstoffkosten anfallen.",
    },

    {
      kind: "open",
      id: "s5-q8",
      number: "8",
      skill: "transfer",
      points: 4,
      prompt:
        "Eine Gemeinde im norddeutschen Tiefland mit 3.000 Einwohnern und locker verteilter Einfamilienhausbebauung überlegt, ihr Wohngebiet mit tiefer Geothermie zu beheizen. Erklären Sie, welche Faktoren aus dem Text die Gemeinde prüfen muss und welche Alternative sich anbietet.",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label: "Gestein muss durchlässig und Wasser heiß genug sein; in Norddeutschland ist Erkundung schwieriger.",
          keywords: ["durchlässig", "heiße", "norddeutschland", "fündigkeitsrisiko"],
        },
        {
          id: "c2",
          label: "Kosten der Tiefbohrung von fünf bis zehn Millionen Euro und mögliche Versicherungen.",
          keywords: ["fünf", "zehn", "millionen", "versicher"],
        },
        {
          id: "c3",
          label: "Bei lockerer Bebauung ist das Wärmenetz pro Haushalt teuer, das Projekt lohnt sich kaum.",
          keywords: ["locker", "wärmenetz", "haushalt", "teuer"],
        },
        {
          id: "c4",
          label: "Alternative: Erdwärmesonden mit Wärmepumpe für einzelne Gebäude (oberflächennahe Geothermie).",
          keywords: ["erdwärmesonden", "wärmepumpe", "oberflächennah", "einzelne gebäude"],
        },
      ],
      sampleAnswer:
        "Die Gemeinde muss prüfen, ob das Gestein ausreichend durchlässig und das Wasser heiß genug ist, denn in Norddeutschland ist die Erkundung schwieriger und das Fündigkeitsrisiko höher. Sie muss die Kosten einer Tiefbohrung von fünf bis zehn Millionen Euro und mögliche Versicherungen tragen können. Wegen der lockeren Bebauung ist das Wärmenetz pro Haushalt teuer, sodass sich das Projekt kaum lohnt. Als Alternative bieten sich Erdwärmesonden mit Wärmepumpen für einzelne Gebäude an.",
    },

    {
      kind: "truefalse",
      id: "s5-q9",
      number: "9",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind.",
      example: {
        text: "Erdwärmesonden reichen in der Regel mehrere tausend Meter tief.",
        correct: false,
        justification: "Im Text: Erdwärmesonden reichen nur bis etwa 400 Meter Tiefe.",
      },
      statements: [
        {
          id: "s5-q9-1",
          text: "Bei einer Dublette wird das abgekühlte Wasser in dieselbe Gesteinsschicht zurückgeleitet.",
          correct: true,
          justification:
            "Im Text: Das abgekühlte Wasser wird durch die Injektionsbohrung in dieselbe Schicht zurückgeleitet. (1 P)",
        },
        {
          id: "s5-q9-2",
          text: "Das Beben von Basel im Jahr 2006 ereignete sich bei einer hydrothermalen Anlage.",
          correct: false,
          justification:
            "Es wurde durch ein petrothermales Projekt ausgelöst, bei dem Wasser in trockenes Gestein gepresst wurde. (1 P)",
        },
        {
          id: "s5-q9-3",
          text: "Geothermie liefert nur dann Wärme, wenn Wind weht oder die Sonne scheint.",
          correct: false,
          justification:
            "Die Erdwärme steht rund um die Uhr und unabhängig vom Wetter zur Verfügung. (1 P)",
        },
        {
          id: "s5-q9-4",
          text: "Für die Stromerzeugung sind höhere Temperaturen nötig als für die Fernwärmeversorgung.",
          correct: true,
          justification:
            "Fernwärme genügt mit 60 bis 100 Grad, ein Kraftwerk benötigt mindestens etwa 100 bis 120 Grad. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s5-sa",
      label: "A",
      points: 2,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt:
        "Eine Tiefbohrung, die zwischen fünf und zehn Millionen Euro kostet, ist ein erhebliches finanzielles Wagnis, da man vorher nicht sicher weiß, ob das Wasser heiß und ergiebig genug ist.",
      highlight: "die zwischen fünf und zehn Millionen Euro kostet",
      template: {
        before: "",
        after:
          ", ist ein erhebliches finanzielles Wagnis, da man vorher nicht sicher weiß, ob das Wasser heiß und ergiebig genug ist.",
      },
      solutions: ["Eine zwischen fünf und zehn Millionen Euro kostende Tiefbohrung"],
      explanation:
        "La relative active « die … kostet » devient un attribut participial au participe I « kostende », placé entre l'article et le nom. Le complément « zwischen fünf und zehn Millionen Euro » reste devant le participe.",
      modelAnswer:
        "Eine zwischen fünf und zehn Millionen Euro kostende Tiefbohrung ist ein erhebliches finanzielles Wagnis, da man vorher nicht sicher weiß, ob das Wasser heiß und ergiebig genug ist.",
    },
    {
      id: "s5-sb",
      label: "B",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Wenn der Druck an einer Messstation einen Schwellenwert überschreitet, wird die Einpressung gedrosselt.",
      highlight: "Wenn der Druck an einer Messstation einen Schwellenwert überschreitet",
      template: { before: "", after: ", wird die Einpressung gedrosselt." },
      solutions: [
        "Bei Überschreitung eines Schwellenwerts durch den Druck an einer Messstation",
        "Im Falle der Überschreitung eines Schwellenwerts durch den Druck an einer Messstation",
      ],
      explanation:
        "La condition avec « wenn » devient « bei / im Falle + nom ». Le verbe se nominalise en « Überschreitung » au génitif ; l'agent est introduit par « durch ».",
      modelAnswer:
        "Bei Überschreitung eines Schwellenwerts durch den Druck an einer Messstation wird die Einpressung gedrosselt.",
    },
    {
      id: "s5-sc",
      label: "C",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Damit Druck und Fördermenge erhalten bleiben, wird das abgekühlte Wasser in dieselbe Schicht zurückgeleitet.",
      highlight: "Damit Druck und Fördermenge erhalten bleiben",
      template: {
        before: "",
        after: ", wird das abgekühlte Wasser in dieselbe Schicht zurückgeleitet.",
      },
      solutions: ["Zum Erhalt von Druck und Fördermenge", "Zur Erhaltung von Druck und Fördermenge"],
      explanation:
        "La finale « damit … bleiben » se nominalise avec « zu + nom » : « zum Erhalt / zur Erhaltung von Druck und Fördermenge ». La préposition « von » introduit le complément.",
      modelAnswer:
        "Zum Erhalt von Druck und Fördermenge wird das abgekühlte Wasser in dieselbe Schicht zurückgeleitet.",
    },
    {
      id: "s5-sd",
      label: "D",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt:
        "Über die Förderbohrung wird das Thermalwasser mit bis zu 100 Litern pro Sekunde nach oben gepumpt.",
      highlight: "wird das Thermalwasser über die Förderbohrung mit bis zu 100 Litern pro Sekunde nach oben gepumpt",
      template: { before: "Man ", after: "." },
      solutions: [
        "pumpt das Thermalwasser über die Förderbohrung mit bis zu 100 Litern pro Sekunde nach oben",
      ],
      explanation:
        "Le passif est remplacé par un actif avec le sujet indéfini « man ». L'objet « das Thermalwasser » passe à l'accusatif et le participe « gepumpt » devient l'infinitif « pumpt … nach oben ».",
      modelAnswer:
        "Man pumpt das Thermalwasser über die Förderbohrung mit bis zu 100 Litern pro Sekunde nach oben.",
    },
    {
      id: "s5-se",
      label: "E",
      points: 1,
      type: "konnektor",
      instruction: "Beantworten Sie die Frage in einem vollständigen Satz.",
      prompt:
        "Welche Beziehung zwischen den beiden Satzteilen drückt „dagegen“ aus: „Bei hydrothermalen Anlagen sind spürbare Beben selten; bei petrothermalen Verfahren dagegen müssen sie ernsthaft einkalkuliert werden“?",
      criteria: [
        {
          id: "c1",
          label: "„dagegen“ drückt einen Gegensatz bzw. Kontrast zwischen den beiden Verfahren aus.",
          keywords: ["gegensatz", "kontrast", "unterschied"],
        },
      ],
      explanation:
        "« dagegen » marque une opposition entre les deux procédés : les séismes sont rares pour les installations hydrothermales, alors qu'ils doivent être pris en compte pour les procédés pétrothermaux.",
      modelAnswer:
        "„dagegen“ drückt einen Gegensatz zwischen den beiden Verfahren aus: Bei hydrothermalen Anlagen sind Beben selten, bei petrothermalen müssen sie ernsthaft einkalkuliert werden.",
    },
    {
      id: "s5-sf",
      label: "F",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Für die Beheizung eines Wohngebiets mit Erdwärme ist der Bau eines Wärmenetzes erforderlich.",
      highlight: "Für die Beheizung eines Wohngebiets mit Erdwärme",
      template: { before: "", after: ", muss ein Wärmenetz gebaut werden." },
      solutions: [
        "Damit ein Wohngebiet mit Erdwärme beheizt werden kann",
        "Um ein Wohngebiet mit Erdwärme zu beheizen",
      ],
      explanation:
        "Le groupe nominal « für die Beheizung … » se verbalise en subordonnée finale avec « damit » ou en infinitif avec « um … zu ». L'agent n'est pas nommé, donc le verbe est au passif « beheizt werden kann ».",
      modelAnswer:
        "Damit ein Wohngebiet mit Erdwärme beheizt werden kann, muss ein Wärmenetz gebaut werden.",
    },
    {
      id: "s5-sg",
      label: "G",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt: "Ein Restrisiko lässt sich allerdings nie ganz ausschließen.",
      highlight: "lässt sich allerdings nie ganz ausschließen",
      template: { before: "Ein Restrisiko ", after: "." },
      solutions: [
        "ist allerdings nie ganz auszuschließen",
        "kann allerdings nie ganz ausgeschlossen werden",
      ],
      explanation:
        "Le substitut de passif « sich lassen + infinitif » est rendu par « sein + zu + infinitif » ou par le passif avec modal. Les deux formes gardent le sens d'une impossibilité d'exclusion totale.",
      modelAnswer: "Ein Restrisiko ist allerdings nie ganz auszuschließen.",
    },
  ],
};
