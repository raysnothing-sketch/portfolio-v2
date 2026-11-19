import type { DshStructureType } from "@/lib/dsh/types";

export type DshDrill = {
  id: string;
  type: DshStructureType;
  level: "B2" | "C1";
  /** Consigne affichée au-dessus de la phrase. */
  prompt: string;
  /** Phrase source complète. */
  source: string;
  highlight?: string;
  template: { before: string; after: string };
  solutions: string[];
  explanation: string;
  modelAnswer: string;
};

const REWRITE = "Formulieren Sie um, ohne den Inhalt zu verändern.";

export const drillCategories: { type: DshStructureType; count: number }[] = [
  { type: "passiversatz", count: 0 },
  { type: "partizipialattribut", count: 0 },
  { type: "nominalisierung", count: 0 },
  { type: "konnektor", count: 0 },
  { type: "konjunktiv", count: 0 },
];

export const drills: DshDrill[] = [
  {
    id: "pv-1",
    type: "passiversatz",
    level: "B2",
    prompt: REWRITE,
    source: "Man muss die Proben täglich kontrollieren.",
    highlight: "Man muss die Proben täglich kontrollieren",
    template: { before: "Die Proben ", after: "." },
    solutions: ["sind täglich zu kontrollieren"],
    explanation:
      "sein + zu + Infinitiv = Passiv mit « müssen ». Das Agens (man) entfällt, das Objekt wird Subjekt.",
    modelAnswer: "Die Proben sind täglich zu kontrollieren.",
  },
  {
    id: "pv-2",
    type: "passiversatz",
    level: "B2",
    prompt: REWRITE,
    source: "Man kann den Fehler leicht beheben.",
    highlight: "Man kann den Fehler leicht beheben",
    template: { before: "Der Fehler ", after: "." },
    solutions: ["lässt sich leicht beheben"],
    explanation:
      "sich lassen + Infinitiv = Passiv mit « können ». Das Subjekt steht im Nominativ, « sich » bleibt unverändert.",
    modelAnswer: "Der Fehler lässt sich leicht beheben.",
  },
  {
    id: "pv-3",
    type: "passiversatz",
    level: "B2",
    prompt: REWRITE,
    source: "Man kann diese Daten nicht vergleichen.",
    highlight: "Man kann diese Daten nicht vergleichen",
    template: { before: "Diese Daten ", after: "." },
    solutions: ["sind nicht vergleichbar"],
    explanation:
      "Adjektiv auf -bar = Passiversatz: « vergleichbar » heißt « kann verglichen werden ».",
    modelAnswer: "Diese Daten sind nicht vergleichbar.",
  },
  {
    id: "pv-4",
    type: "passiversatz",
    level: "C1",
    prompt: REWRITE,
    source: "Man kann den Verbrauch deutlich senken.",
    highlight: "Man kann den Verbrauch deutlich senken",
    template: { before: "Der Verbrauch ", after: "." },
    solutions: ["kann deutlich gesenkt werden", "lässt sich deutlich senken"],
    explanation:
      "Drei Wege zum selben Inhalt: Passiv mit Modalverb, « sich lassen » oder Adjektiv auf -bar.",
    modelAnswer: "Der Verbrauch kann deutlich gesenkt werden.",
  },
  {
    id: "pv-5",
    type: "passiversatz",
    level: "C1",
    prompt: REWRITE,
    source: "Man kann die Methode nicht auf andere Fälle übertragen.",
    highlight: "Man kann die Methode nicht auf andere Fälle übertragen",
    template: { before: "Die Methode ", after: "." },
    solutions: [
      "ist nicht auf andere Fälle übertragbar",
      "lässt sich nicht auf andere Fälle übertragen",
      "kann nicht auf andere Fälle übertragen werden",
    ],
    explanation:
      "Bei mehrteiligen Prädikaten bleibt die Wortstellung entscheidend: Infinitiv am Ende, Partizip II vor « werden ».",
    modelAnswer: "Die Methode ist nicht auf andere Fälle übertragbar.",
  },

  {
    id: "pa-1",
    type: "partizipialattribut",
    level: "B2",
    prompt: REWRITE,
    source:
      "Die Studie, die von der EU gefördert wird, untersucht den Einfluss des Klimas.",
    highlight: "die von der EU gefördert wird",
    template: {
      before: "Die ",
      after: " Studie untersucht den Einfluss des Klimas.",
    },
    solutions: ["von der EU geförderte"],
    explanation:
      "Relativsatz im Passiv → Partizip II als Attribut: « gefördert » + Adjektivendung. Die Präpositionalgruppe rückt vor das Partizip.",
    modelAnswer:
      "Die von der EU geförderte Studie untersucht den Einfluss des Klimas.",
  },
  {
    id: "pa-2",
    type: "partizipialattribut",
    level: "B2",
    prompt: REWRITE,
    source: "Die Ergebnisse, die bereits veröffentlicht wurden, widersprechen der These.",
    highlight: "die bereits veröffentlicht wurden",
    template: { before: "Die ", after: " Ergebnisse widersprechen der These." },
    solutions: ["bereits veröffentlichten"],
    explanation:
      "Partizip II mit Adjektivendung: Nominativ Plural → « veröffentlichten ». Das Adverb « bereits » bleibt vor dem Partizip.",
    modelAnswer: "Die bereits veröffentlichten Ergebnisse widersprechen der These.",
  },
  {
    id: "pa-3",
    type: "partizipialattribut",
    level: "C1",
    prompt: REWRITE,
    source: "Die Kosten, die durch den Umbau entstehen, trägt die Stadt.",
    highlight: "die durch den Umbau entstehen",
    template: { before: "Die ", after: " Kosten trägt die Stadt." },
    solutions: ["durch den Umbau entstehenden"],
    explanation:
      "Aktiver Relativsatz → Partizip I: « entstehenden » (gleichzeitig, aktiv). Der Kasus des Bezugsworts bestimmt die Endung: Akkusativ Plural.",
    modelAnswer: "Die durch den Umbau entstehenden Kosten trägt die Stadt.",
  },
  {
    id: "pa-4",
    type: "partizipialattribut",
    level: "C1",
    prompt: REWRITE,
    source: "Der Anteil, der stetig steigt, bereitet Fachleuten Sorgen.",
    highlight: "der stetig steigt",
    template: { before: "Der ", after: " Anteil bereitet Fachleuten Sorgen." },
    solutions: ["stetig steigende"],
    explanation:
      "Partizip I als Attribut: « steigend » + Endung -e (Nominativ Singular Maskulinum).",
    modelAnswer: "Der stetig steigende Anteil bereitet Fachleuten Sorgen.",
  },
  {
    id: "pa-5",
    type: "partizipialattribut",
    level: "C1",
    prompt: REWRITE,
    source:
      "Die Teilnehmer, die nach dem Zufallsprinzip ausgewählt wurden, erhielten eine Schulung.",
    highlight: "die nach dem Zufallsprinzip ausgewählt wurden",
    template: {
      before: "Die ",
      after: " Teilnehmer erhielten eine Schulung.",
    },
    solutions: ["nach dem Zufallsprinzip ausgewählten"],
    explanation:
      "Passivischer Relativsatz → Partizip II. Achtung: Das Partizip steht direkt vor dem Nomen, die Präpositionalgruppe davor.",
    modelAnswer:
      "Die nach dem Zufallsprinzip ausgewählten Teilnehmer erhielten eine Schulung.",
  },

  {
    id: "no-1",
    type: "nominalisierung",
    level: "B2",
    prompt: REWRITE,
    source:
      "Weil die Daten unsicher sind, sind die Ergebnisse vorsichtig zu interpretieren.",
    highlight: "Weil die Daten unsicher sind",
    template: {
      before: "",
      after: ", sind die Ergebnisse vorsichtig zu interpretieren.",
    },
    solutions: ["wegen der unsicheren daten", "aufgrund der unsicheren daten"],
    explanation:
      "Kausalsatz → Präpositionalgruppe: « wegen / aufgrund + Genitiv ». Adjektiv « unsicher » bleibt als Attribut erhalten.",
    modelAnswer:
      "Wegen der unsicheren Daten sind die Ergebnisse vorsichtig zu interpretieren.",
  },
  {
    id: "no-2",
    type: "nominalisierung",
    level: "C1",
    prompt: REWRITE,
    source:
      "Nachdem die Anlage geprüft worden war, nahm das Werk den Betrieb auf.",
    highlight: "Nachdem die Anlage geprüft worden war",
    template: { before: "", after: " nahm das Werk den Betrieb auf." },
    solutions: ["nach der prüfung der anlage", "nach prüfung der anlage"],
    explanation:
      "Temporalsatz → « nach + Genitiv ». Das Verb « prüfen » wird zum Nomen « Prüfung », das Agens zum Genitivattribut.",
    modelAnswer: "Nach der Prüfung der Anlage nahm das Werk den Betrieb auf.",
  },
  {
    id: "no-3",
    type: "nominalisierung",
    level: "B2",
    prompt: REWRITE,
    source: "Obwohl die Kosten hoch sind, wird die Technik eingesetzt.",
    highlight: "Obwohl die Kosten hoch sind",
    template: { before: "", after: " wird die Technik eingesetzt." },
    solutions: ["trotz der hohen kosten"],
    explanation:
      "Konzessivsatz → « trotz + Genitiv ». « hoch » wird flektiert: « der hohen Kosten ».",
    modelAnswer: "Trotz der hohen Kosten wird die Technik eingesetzt.",
  },
  {
    id: "no-4",
    type: "nominalisierung",
    level: "C1",
    prompt: REWRITE,
    source: "Um die Emissionen zu senken, werden neue Filter eingebaut.",
    highlight: "Um die Emissionen zu senken",
    template: { before: "", after: " werden neue Filter eingebaut." },
    solutions: ["zur senkung der emissionen", "zum senken der emissionen"],
    explanation:
      "Finalsatz → « zu + Nominalisierung »: « zur Senkung der Emissionen ». Das Objekt wird zum Genitivattribut.",
    modelAnswer: "Zur Senkung der Emissionen werden neue Filter eingebaut.",
  },
  {
    id: "no-5",
    type: "nominalisierung",
    level: "C1",
    prompt: REWRITE,
    source: "Dadurch, dass man Filter einbaut, sinkt die Belastung.",
    highlight: "Dadurch, dass man Filter einbaut",
    template: { before: "", after: " sinkt die Belastung." },
    solutions: ["durch den einbau von filtern", "durch das einbauen von filtern"],
    explanation:
      "Modalsatz → « durch + Nominalisierung ». Aus « einbauen » wird « der Einbau », das Objekt folgt mit « von ».",
    modelAnswer: "Durch den Einbau von Filtern sinkt die Belastung.",
  },

  {
    id: "ko-1",
    type: "konnektor",
    level: "B2",
    prompt: REWRITE,
    source: "Die Preise sinken. Gleichzeitig steigt die Nachfrage.",
    highlight: "Die Preise sinken. Gleichzeitig steigt die Nachfrage.",
    template: { before: "", after: ", steigt die Nachfrage." },
    solutions: ["während die preise sinken"],
    explanation:
      "Gegensätzliche Entwicklung → « während » + Nebensatz. Das Verb des Nebensatzes steht am Ende.",
    modelAnswer: "Während die Preise sinken, steigt die Nachfrage.",
  },
  {
    id: "ko-2",
    type: "konnektor",
    level: "B2",
    prompt: REWRITE,
    source: "Es regnet stark. Deshalb werden die Straßen gesperrt.",
    highlight: "Es regnet stark. Deshalb werden die Straßen gesperrt.",
    template: { before: "", after: ", werden die Straßen gesperrt." },
    solutions: ["weil es stark regnet", "da es stark regnet"],
    explanation:
      "« deshalb » (Hauptsatz) → « weil / da » (Nebensatz). Die Wirkung bleibt im Hauptsatz.",
    modelAnswer: "Weil es stark regnet, werden die Straßen gesperrt.",
  },
  {
    id: "ko-3",
    type: "konnektor",
    level: "C1",
    prompt: REWRITE,
    source: "Man verlängert die Laufzeit. Dadurch sinken die Kosten pro Jahr.",
    highlight: "Man verlängert die Laufzeit. Dadurch sinken die Kosten pro Jahr.",
    template: { before: "", after: ", sinken die Kosten pro Jahr." },
    solutions: [
      "indem man die laufzeit verlaengert",
      "dadurch dass man die laufzeit verlaengert",
    ],
    explanation:
      "Mittel-Zweck → « indem » + Nebensatz (modale Bedeutung) oder « dadurch, dass ».",
    modelAnswer: "Indem man die Laufzeit verlängert, sinken die Kosten pro Jahr.",
  },
  {
    id: "ko-4",
    type: "konnektor",
    level: "C1",
    prompt: REWRITE,
    source: "Die Datenlage ist dünn. Dennoch empfiehlt das Gremium die Zulassung.",
    highlight: "Die Datenlage ist dünn. Dennoch empfiehlt das Gremium die Zulassung.",
    template: { before: "", after: ", empfiehlt das Gremium die Zulassung." },
    solutions: ["obwohl die datenlage duenn ist"],
    explanation:
      "Konzession: « dennoch » (Hauptsatz) → « obwohl » (Nebensatz). Der Kontrast bleibt inhaltlich gleich.",
    modelAnswer:
      "Obwohl die Datenlage dünn ist, empfiehlt das Gremium die Zulassung.",
  },
  {
    id: "ko-5",
    type: "konnektor",
    level: "C1",
    prompt: REWRITE,
    source: "Man will die Wartezeit verkürzen. Dazu werden Aufnahmen priorisiert.",
    highlight: "Man will die Wartezeit verkürzen. Dazu werden Aufnahmen priorisiert.",
    template: { before: "", after: ", werden Aufnahmen priorisiert." },
    solutions: ["um die wartezeit zu verkuerzen"],
    explanation:
      "Ziel → « um … zu + Infinitiv ». Das Subjekt des Hauptsatzes muss mit dem impliziten Agens übereinstimmen.",
    modelAnswer: "Um die Wartezeit zu verkürzen, werden Aufnahmen priorisiert.",
  },

  {
    id: "kj-1",
    type: "konjunktiv",
    level: "C1",
    prompt: REWRITE,
    source: "Weil die Heatmap fehlte, blieb der Fehler unentdeckt.",
    highlight: "Weil die Heatmap fehlte, blieb der Fehler unentdeckt.",
    template: { before: "Ohne die Heatmap ", after: "." },
    solutions: ["waere der fehler unentdeckt geblieben"],
    explanation:
      "Irreale Bedingung in der Vergangenheit: « ohne … » + Konjunktiv II der Vergangenheit (wäre … geblieben).",
    modelAnswer: "Ohne die Heatmap wäre der Fehler unentdeckt geblieben.",
  },
  {
    id: "kj-2",
    type: "konjunktiv",
    level: "C1",
    prompt: REWRITE,
    source: "Vermutlich lässt sich ein Teil der Leitungen umrüsten.",
    highlight: "lässt sich",
    template: { before: "Studien zufolge ", after: " ein Teil der Leitungen umrüsten." },
    solutions: ["liesse sich"],
    explanation:
      "Konjunktiv II von « lassen » = « ließe ». Er markiert eine Möglichkeit, die noch nicht Realität ist.",
    modelAnswer: "Studien zufolge ließe sich ein Teil der Leitungen umrüsten.",
  },
  {
    id: "kj-3",
    type: "konjunktiv",
    level: "C1",
    prompt: REWRITE,
    source: "Es ist denkbar, dass die Preise weiter sinken.",
    highlight: "Es ist denkbar, dass die Preise weiter sinken.",
    template: { before: "Die Preise ", after: " weiter sinken." },
    solutions: ["koennten"],
    explanation:
      "« es ist denkbar » → Konjunktiv II « könnten »: Möglichkeit, nicht Tatsache.",
    modelAnswer: "Die Preise könnten weiter sinken.",
  },
  {
    id: "kj-4",
    type: "konjunktiv",
    level: "B2",
    prompt: REWRITE,
    source: "Ich empfehle, zuerst ein eigenes Urteil zu bilden.",
    highlight: "Ich empfehle",
    template: { before: "Man ", after: " zuerst ein eigenes Urteil bilden." },
    solutions: ["sollte"],
    explanation:
      "Empfehlung → « sollte » (Konjunktiv II von « sollen »), höflicher und unpersönlicher als « muss ».",
    modelAnswer: "Man sollte zuerst ein eigenes Urteil bilden.",
  },
];

for (const category of drillCategories) {
  category.count = drills.filter((drill) => drill.type === category.type).length;
}
