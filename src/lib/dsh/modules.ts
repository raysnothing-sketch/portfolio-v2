/**
 * Inhalte der drei weiteren DSH-Teile.
 *
 * Das Begleitheft deckt nur „Leseverstehen und wissenschaftssprachliche
 * Strukturen“ ab. Hören, Sprechen und Schreiben sind deshalb originale
 * Übungsaufgaben im formatnahen Stil – keine offiziellen Prüfungen.
 */

export type DshModuleKey = "hoeren" | "sprechen" | "schreiben";

export type Criterion = { id: string; label: string; points: number };

export type ListeningQuestion = {
  id: string;
  number: string;
  prompt: string;
  kind: "choice" | "open";
  options?: { id: string; text: string }[];
  correct?: string;
  sampleAnswer?: string;
  criteria?: Criterion[];
  points: number;
  /** Ungefähre Stelle im Hörtext, als Navigationshilfe. */
  hint?: string;
};

export type ListeningModule = {
  key: "hoeren";
  id: string;
  title: string;
  subtitle: string;
  topic: string;
  minutes: number;
  maxPoints: number;
  transcript: string[];
  questions: ListeningQuestion[];
};

export type SpeakingTask = {
  id: string;
  number: string;
  title: string;
  prompt: string;
  prepSeconds: number;
  speakSeconds: number;
  criteria: Criterion[];
  sampleAnswer: string;
};

export type SpeakingModule = {
  key: "sprechen";
  id: string;
  title: string;
  subtitle: string;
  topic: string;
  minutes: number;
  maxPoints: number;
  tasks: SpeakingTask[];
};

export type WritingTask = {
  id: string;
  number: string;
  title: string;
  prompt: string;
  material?: string[];
  minWords: number;
  guide: string[];
  criteria: Criterion[];
  sampleOutline: string;
};

export type WritingModule = {
  key: "schreiben";
  id: string;
  title: string;
  subtitle: string;
  topic: string;
  minutes: number;
  maxPoints: number;
  tasks: WritingTask[];
};

const listenCriteria = (ids: string[]): Criterion[] =>
  ids.map((id, index) => ({
    id: `c${index + 1}`,
    label: id,
    points: 1,
  }));

export const listeningModule: ListeningModule = {
  key: "hoeren",
  id: "hoeren-01",
  title: "Wie man wissenschaftliche Texte liest",
  subtitle: "Ein Gespräch am Sprachenzentrum – Aussagen verstehen, Standpunkte zuordnen.",
  topic: "Studienkommunikation",
  minutes: 30,
  maxPoints: 12,
  transcript: [
    "Guten Tag. Wir sprechen heute mit Dr. Katrin Berger vom Sprachenzentrum der Universität. Frau Berger, viele Studierende glauben, sie müssten in einem wissenschaftlichen Text jedes Wort verstehen. Ist das richtig?",
    "Nein, das ist ein häufiger Irrglaube. Wer jedes Wort übersetzen will, verliert den roten Faden. Entscheidend ist, dass man die Struktur erkennt: Was ist die Frage, was ist die These, und welche Argumente werden angeführt? Einzelne Fachbegriffe darf man zunächst offen lassen.",
    "Wie sollte man einen Text denn angehen?",
    "Ich empfehle drei Schritte. Zuerst liest man die Überschrift und die ersten und letzten Sätze jedes Absatzes. Danach markiert man die Konnektoren – also Wörter wie „allerdings“, „folglich“ oder „hingegen“. Die zeigen, wie die Argumente zusammenhängen. Erst im dritten Schritt liest man die Details und schlägt Begriffe nach.",
    "Und was ist mit langen Nominalkonstruktionen, zum Beispiel „die Durchführung der Messung“?",
    "Solche Nominalisierungen sind typisch für die Wissenschaftssprache. Man kann sie probeweise in ein Verb zurückübersetzen: „die Messung durchführen“. Das macht den Satz oft verständlicher. Wichtig ist außerdem, dass man nicht nur Wörter, sondern ganze Aussagen markiert – otherwise man später nicht mehr weiß, worauf sich eine Frage bezieht.",
    "Haben Sie einen letzten Tipp für die Prüfung?",
    "Ja. Lesen Sie die Fragen vor dem Hören. Dann wissen Sie, auf welche Informationen Sie achten müssen. Und wenn Sie eine Antwort nicht finden: Bleiben Sie nicht zu lange an einer Stelle hängen. Die nächste Frage bringt oft den fehlenden Hinweis.",
  ],
  questions: [
    {
      id: "hv-1",
      number: "1",
      kind: "choice",
      prompt: "Was ist laut Dr. Berger ein häufiger Irrglaube beim Lesen?",
      options: [
        { id: "a", text: "Man dürfe Fachbegriffe nicht nachschlagen." },
        { id: "b", text: "Man müsse jedes Wort verstehen." },
        { id: "c", text: "Man solle zuerst die Grafiken lesen." },
      ],
      correct: "b",
      points: 1,
      hint: "00:12",
    },
    {
      id: "hv-2",
      number: "2",
      kind: "open",
      prompt: "Nennen Sie die drei Bestandteile, die Dr. Berger zuerst erkennen möchte.",
      sampleAnswer: "Die Frage, die These und die Argumente des Textes.",
      criteria: listenCriteria(["These und Frage", "Argumente"]),
      points: 2,
      hint: "00:25",
    },
    {
      id: "hv-3",
      number: "3",
      kind: "choice",
      prompt: "Welcher Schritt kommt bei der empfohlenen Methode zuerst?",
      options: [
        { id: "a", text: "Begriffe im Wörterbuch nachschlagen" },
        { id: "b", text: "Konnektoren markieren" },
        { id: "c", text: "Überschrift und Randabsätze lesen" },
      ],
      correct: "c",
      points: 1,
      hint: "00:48",
    },
    {
      id: "hv-4",
      number: "4",
      kind: "open",
      prompt: "Warum sollte man Konnektoren markieren?",
      sampleAnswer:
        "Weil sie zeigen, wie die Argumente zusammenhängen – etwa was einen Gegensatz oder eine Folge einleitet.",
      criteria: listenCriteria(["Zusammenhang der Argumente", "Beispiel/Konnektor"]),
      points: 2,
      hint: "01:02",
    },
    {
      id: "hv-5",
      number: "5",
      kind: "choice",
      prompt: "Wie kann man eine Nominalisierung probeweise verständlicher machen?",
      options: [
        { id: "a", text: "Indem man sie in ein Verb zurückübersetzt." },
        { id: "b", text: "Indem man sie durch ein Adjektiv ersetzt." },
        { id: "c", text: "Indem man den Satz verkürzt." },
      ],
      correct: "a",
      points: 1,
      hint: "01:25",
    },
    {
      id: "hv-6",
      number: "6",
      kind: "choice",
      prompt: "Was empfiehlt Dr. Berger, wenn man eine Information nicht findet?",
      options: [
        { id: "a", text: "Die Aufnahme sofort stoppen." },
        { id: "b", text: "Nicht zu lange hängen bleiben und weiterhören." },
        { id: "c", text: "Die Frage überspringen." },
      ],
      correct: "b",
      points: 1,
      hint: "01:55",
    },
    {
      id: "hv-7",
      number: "7",
      kind: "open",
      prompt: "Welchen Rat gibt die Sprecherin für die Vorbereitung auf die Prüfung?",
      sampleAnswer: "Die Fragen vor dem Hören lesen, um zu wissen, worauf man achten muss.",
      criteria: listenCriteria(["Fragen vorher lesen", "Ziel der Information"]),
      points: 2,
      hint: "02:05",
    },
    {
      id: "hv-8",
      number: "8",
      kind: "open",
      prompt: "Warum sollte man ganze Aussagen statt einzelner Wörter markieren?",
      sampleAnswer: "Sonst weiß man später nicht mehr, worauf sich die Frage bezieht.",
      criteria: listenCriteria(["Zuordnung zur Frage", "Zusammenhang"]),
      points: 2,
      hint: "01:40",
    },
  ],
};

const speakingCriteria = (): Criterion[] => [
  { id: "Inhalt und Aufgabenbezug", label: "Inhalt und Aufgabenbezug", points: 3 },
  { id: "Struktur und Kohärenz", label: "Struktur und Kohärenz", points: 2 },
  { id: "Sprachliche Korrektheit", label: "Sprachliche Korrektheit", points: 2 },
  { id: "Wortschatz und Varianz", label: "Wortschatz und Varianz", points: 1 },
  { id: "Fluenz und Aussprache", label: "Fluenz und Aussprache (Selbsteinschätzung)", points: 2 },
];

export const speakingModule: SpeakingModule = {
  key: "sprechen",
  id: "sprechen-01",
  title: "Standpunkt vertreten und begründen",
  subtitle: "Drei Sprechaufgaben mit Vorbereitungszeit, Reaktionen und Selbstbeobachtung.",
  topic: "Mündliche Prüfung",
  minutes: 20,
  maxPoints: 30,
  tasks: [
    {
      id: "sp-1",
      number: "01",
      title: "Studienwahl",
      prompt:
        "Sie haben ein Beratungsgespräch an der Universität. Erzählen Sie in etwa zwei Minuten, warum Sie sich für Ihr Studium entschieden haben, und nennen Sie zwei Erwartungen.",
      prepSeconds: 60,
      speakSeconds: 120,
      criteria: speakingCriteria(),
      sampleAnswer:
        "Ich habe mich für dieses Studium entschieden, weil mich die Verbindung von Theorie und Anwendung interessiert. Besonders reizt mich, dass man Ergebnisse direkt überprüfen kann. Gleichzeitig erwarte ich, dass wir früh Projektarbeit machen und nicht nur Vorlesungen besuchen. Ein zweiter Grund ist die internationale Zusammensetzung der Kohorte …",
    },
    {
      id: "sp-2",
      number: "02",
      title: "Stellungnahme zu einer These",
      prompt:
        "Eine Kommilitonin sagt: „Künstliche Intelligenz wird bald alle Übersetzungsberufe ersetzen.“ Nehmen Sie Stellung: Stimmen Sie zu? Begründen Sie Ihre Position mit zwei Argumenten und einem Beispiel.",
      prepSeconds: 90,
      speakSeconds: 150,
      criteria: speakingCriteria(),
      sampleAnswer:
        "Ich würde nur teilweise zustimmen. KI-Systeme werden einfache Texte schneller und günstiger übersetzen – das sehe ich an automatischen Untertiteln. Aber bei juristischen oder literarischen Texten braucht es jemanden, der Nuancen und Kontext bewertet. Mein Beispiel ist ein Vertrag: Ein falsch übersetzter Begriff kann rechtliche Folgen haben. Deshalb wird sich das Berufsbild eher verändern als verschwinden …",
    },
    {
      id: "sp-3",
      number: "03",
      title: "Ergebnisse beschreiben",
      prompt:
        "Beschreiben Sie die folgende Entwicklung und deuten Sie sie: Der Anteil der Studierenden mit ausländischem Abschluss ist an einer Universität von 12 % auf 21 % gestiegen, während die Zahl der Bewerbungen insgesamt gleich blieb.",
      prepSeconds: 90,
      speakSeconds: 150,
      criteria: speakingCriteria(),
      sampleAnswer:
        "Die Grafik zeigt einen deutlichen Anstieg des Auslandsanteils von zwölf auf einundzwanzig Prozent. Auffällig ist, dass die Gesamtzahl der Bewerbungen konstant blieb. Das spricht dafür, dass sich die Zusammensetzung der Bewerber verändert hat, nicht ihr Umfang. Mögliche Gründe sind eine veränderte Strategie der internationalen Rekrutierung oder neue Partnerschaften im Ausland …",
    },
  ],
};

const writingCriteria = (): Criterion[] => [
  { id: "Inhalt und Argumentation", label: "Inhalt und Argumentation", points: 5 },
  { id: "Textsortengerechte Struktur", label: "Textsortengerechte Struktur", points: 4 },
  { id: "Sprachliche Richtigkeit", label: "Sprachliche Richtigkeit", points: 4 },
  { id: "Wortschatz und Stil", label: "Wortschatz und Stil", points: 2 },
];

export const writingModule: WritingModule = {
  key: "schreiben",
  id: "schreiben-01",
  title: "Stellungnahme und Bericht",
  subtitle: "Zwei Schreibaufgaben mit Gliederungshilfe, Wortzahl und Kriterienrückmeldung.",
  topic: "Schriftliche Prüfung",
  minutes: 50,
  maxPoints: 30,
  tasks: [
    {
      id: "sc-1",
      number: "01",
      title: "Stellungnahme",
      prompt:
        "Schreiben Sie eine Stellungnahme zum Thema: „Sollten KI-Werkzeuge in universitären Prüfungen erlaubt sein?“ Nennen Sie zwei Argumente für und eines gegen Ihre Position und kommen Sie zu einem eigenen Urteil.",
      minWords: 220,
      guide: [
        "Einleitung: Thema und eigene Position nennen",
        "Zwei Argumentsätze mit Beleg oder Beispiel",
        "Ein Gegenargument benennen und entkräften",
        "Fazit: eigenes Urteil wiederholen",
      ],
      criteria: writingCriteria(),
      sampleOutline:
        "Einleitung mit These → Argument 1 (Transparenz) → Argument 2 (Arbeitswelt) → Gegenargument (Betrug) mit Entkräftung → Fazit mit differenzierter Empfehlung.",
    },
    {
      id: "sc-2",
      number: "02",
      title: "Bericht",
      prompt:
        "Verfassen Sie einen kurzen Bericht über eine Umfrage unter 400 Studierenden: 68 % nutzen wissenschaftliche Videos zur Vorbereitung, 41 % lesen ausschließlich Fachartikel, 23 % nutzen beide Formen. Erläutern Sie die Zahlen und nennen Sie zwei mögliche Gründe.",
      material: [
        "Videos zur Vorbereitung: 68 %",
        "Ausschließlich Fachartikel: 41 %",
        "Beide Formen: 23 %",
        "Befragte: 400 Studierende",
      ],
      minWords: 200,
      guide: [
        "Einleitung: Gegenstand und Stichprobe der Umfrage",
        "Zahlen geordnet wiedergeben",
        "Zwei Erklärungsansätze anführen",
        "Abschluss: Einordnung der Ergebnisse",
      ],
      criteria: writingCriteria(),
      sampleOutline:
        "Gegenstand und Stichprobe → Hauptbefund (Videos) → Vergleich mit Fachartikeln → zwei Gründe (Zugänglichkeit, Dauer) → vorsichtiges Fazit.",
    },
  ],
};

export const modules = {
  hoeren: listeningModule,
  sprechen: speakingModule,
  schreiben: writingModule,
} as const;

export function getModule(key: "hoeren"): ListeningModule;
export function getModule(key: "sprechen"): SpeakingModule;
export function getModule(key: "schreiben"): WritingModule;
export function getModule(key: DshModuleKey): ListeningModule | SpeakingModule | WritingModule;
export function getModule(
  key: DshModuleKey,
): ListeningModule | SpeakingModule | WritingModule {
  return modules[key];
}
