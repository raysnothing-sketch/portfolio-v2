import type { Locale } from "@/lib/i18n/config";
import type { DshLevelKey } from "@/lib/dsh/types";

/**
 * Textes d'interface du module DSH.
 * Le contenu des exercices reste en allemand (langue de l'examen) ; seule
 * l'enveloppe est traduite, comme sur une plateforme d'entraînement bilingue.
 */

export type DshCopy = {
  nav: {
    trainer: string;
    simulations: string;
    structures: string;
    guide: string;
    portfolio: string;
  };
  hub: {
    kicker: string;
    title: string;
    lead: string;
    start: string;
    secondary: string;
    stats: { points: string; minutes: string; split: string; levels: string };
    simTitle: string;
    simLead: string;
    open: string;
    available: string;
    tasksLabel: string;
    wordsLabel: string;
    structuresTitle: string;
    structuresLead: string;
    structuresCta: string;
    howTitle: string;
    steps: { title: string; body: string }[];
    scaleTitle: string;
    scaleLead: string;
    scaleHead: { points: string; percent: string; level: string; note: string };
    footnote: string;
  };
  sim: {
    back: string;
    intro: string;
    reading: string;
    tasks: string;
    readingSearch: string;
    readingMarks: string;
    readingReset: string;
    part1: string;
    part2: string;
    part2Note: string;
    openPoints: string;
    words: string;
    start: string;
    pause: string;
    resume: string;
    resumeHint: string;
    timeUp: string;
    answered: string;
    submit: string;
    confirmIncomplete: string;
    results: string;
    total: string;
    leseverstehen: string;
    strukturen: string;
    restart: string;
    aiRequest: string;
    aiLoading: string;
    aiUnavailable: string;
    aiError: string;
    aiNoteDone: string;
    localNote: string;
    model: string;
    criteria: string;
    yourAnswer: string;
    copyWarn: string;
    empty: string;
    question: string;
    solution: string;
    example: string;
    correct: string;
    incorrect: string;
    marked: string;
    timerOff: string;
    timerOn: string;
    toHub: string;
  };
  drills: {
    kicker: string;
    title: string;
    lead: string;
    all: string;
    check: string;
    show: string;
    next: string;
    again: string;
    correct: string;
    partial: string;
    wrong: string;
    streak: string;
    rule: string;
    yourAnswer: string;
    solution: string;
    empty: string;
    done: string;
    restart: string;
  };
  modules: {
    nav: { listening: string; speaking: string; writing: string };
    hub: {
      kicker: string;
      title: string;
      lead: string;
      open: string;
      points: string;
      minutes: string;
    };
    common: {
      back: string;
      start: string;
      results: string;
      restart: string;
      total: string;
      criteria: string;
      yourAnswer: string;
      model: string;
      aiRequest: string;
      aiLoading: string;
      aiUnavailable: string;
      aiError: string;
      timeUp: string;
      submit: string;
      confirmIncomplete: string;
      answers: string;
      lastAttempt: string;
    };
    listen: {
      kicker: string;
      title: string;
      lead: string;
      play: string;
      pause: string;
      stop: string;
      replay: string;
      speed: string;
      transcript: string;
      hideTranscript: string;
      audioNote: string;
      choice: string;
      open: string;
    };
    speak: {
      kicker: string;
      title: string;
      lead: string;
      prepare: string;
      start: string;
      stop: string;
      unsupported: string;
      typed: string;
      prepOver: string;
      next: string;
      selfCheck: string;
    };
    write: {
      kicker: string;
      title: string;
      lead: string;
      draft: string;
      outline: string;
      hideOutline: string;
      words: string;
      minWords: string;
      guide: string;
    };
  };
  learn: {
    nav: string;
    kicker: string;
    title: string;
    lead: string;
    lessons: string;
    tips: string;
    example: string;
    takeaway: string;
    back: string;
    open: string;
    lessonLabel: string;
    tipLabel: string;
  };
  types: Record<string, string>;
  levels: Record<DshLevelKey, { label: string; note: string }>;
};

const de: DshCopy = {
  nav: {
    trainer: "DSH-Trainer",
    simulations: "Simulationen",
    structures: "Strukturen",
    guide: "Leitfaden",
    portfolio: "Portfolio",
  },
  hub: {
    kicker: "DSH · Leseverstehen & Strukturen",
    title: "Der Text. Die Aufgaben. Der Timer.",
    lead:
      "Ein Prüfungssimulator im Format der DSH: 90 Minuten, 45 Punkte, geteilte Ansicht mit Lesetext und Aufgaben. Auswertung nach Lösungsschlüssel – mit KI-Feedback für freie Antworten.",
    start: "Simulation starten",
    secondary: "Strukturen trainieren",
    stats: {
      points: "Punkte",
      minutes: "Minuten",
      split: "Leseverstehen + Strukturen",
      levels: "DSH-1 bis DSH-3",
    },
    simTitle: "Simulationen",
    simLead:
      "Jede Simulation enthält einen wissenschaftsnahen Lesetext, neun bis elf Verständnisaufgaben und fünf bis sieben Umformungen.",
    open: "Öffnen",
    available: "verfügbar",
    tasksLabel: "Aufgaben",
    wordsLabel: "Wörter",
    structuresTitle: "Wissenschaftssprachliche Strukturen",
    structuresLead:
      "Passiversatz, Partizipialattribute, Nominalisierung, Konnektoren und Konjunktiv II – die 15 Punkte, die über DSH-1 oder DSH-2 entscheiden.",
    structuresCta: "Training öffnen",
    howTitle: "So läuft eine Simulation",
    steps: [
      {
        title: "Lesen & markieren",
        body:
          "15 Minuten: Text lesen, Zeilen markieren, Schlüsselbegriffe suchen. Die Zeilennummerierung entspricht dem Prüfungsheft.",
      },
      {
        title: "Aufgaben bearbeiten",
        body:
          "50 Minuten: Antworten mit eigenen Worten, Grafiken auswerten, Strukturen umformen. Der Timer läuft im Hintergrund.",
      },
      {
        title: "Auswerten & vergleichen",
        body:
          "Punkte pro Aufgabe, Musterlösung und Kriterien. Auf Wunsch prüft ein KI-Korrektor die freien Antworten.",
      },
    ],
    scaleTitle: "Auswertungsschlüssel",
    scaleLead:
      "Orientierungswerte für 45 Punkte. Die tatsächlichen Anforderungen legt die Hochschule fest.",
    scaleHead: { points: "Punkte", percent: "Prozent", level: "Niveau", note: "Bedeutung" },
    footnote:
      "Inhaltliche Grundlage: Begleitheft „20 Prüfungssimulationen“ im Format der RPTU-Beispielprüfungen. Keine offiziellen Prüfungen.",
  },
  sim: {
    back: "Zurück zur Übersicht",
    intro:
      "Beantworten Sie alle Fragen ausschließlich nach den Informationen aus dem Text und schreiben Sie mit eigenen Worten. Direktes Abschreiben führt zu Punktabzug.",
    reading: "Lesetext",
    tasks: "Aufgaben",
    readingSearch: "Im Text suchen",
    readingMarks: "Marker",
    readingReset: "Zurücksetzen",
    part1: "Teil 1 · Leseverstehen",
    part2: "Teil 2 · Wissenschaftssprachliche Strukturen",
    part2Note: "15 Punkte · Formulieren Sie um, ohne den Inhalt zu verändern.",
    openPoints: "Punkte offene Antworten",
    words: "Wörter",
    start: "Prüfung starten",
    pause: "Pause",
    resume: "Weiter",
    resumeHint: "Timer läuft",
    timeUp: "Zeit abgelaufen",
    answered: "beantwortet",
    submit: "Auswerten",
    confirmIncomplete: "Noch nicht alle Aufgaben beantwortet. Trotzdem auswerten?",
    results: "Auswertung",
    total: "Gesamt",
    leseverstehen: "Leseverstehen",
    strukturen: "Strukturen",
    restart: "Neuer Versuch",
    aiRequest: "KI-Feedback anfordern",
    aiLoading: "Der Korrektor liest deine Antworten …",
    aiUnavailable:
      "Die KI-Korrektur ist auf diesem Server nicht konfiguriert. Die lokale Auswertung bleibt gültig.",
    aiError: "Die KI-Korrektur ist fehlgeschlagen. Die lokale Auswertung bleibt gültig.",
    aiNoteDone:
      "Die KI-Bewertung ersetzt für die freien Antworten die lokale Punkteverteilung. Prüfe die Kriterien trotzdem selbst nach.",
    localNote:
      "Die lokale Auswertung prüft die im Lösungsschlüssel genannten Kernpunkte. Stil, Nuancen und Alternativlösungen bewertet der KI-Korrektor genauer.",
    model: "Musterlösung",
    criteria: "Kriterien",
    yourAnswer: "Deine Antwort",
    copyWarn: "Textnähe",
    empty: "Keine Antwort",
    question: "Aufgabe",
    solution: "Lösung",
    example: "Beispiel",
    correct: "richtig",
    incorrect: "nicht korrekt",
    marked: "markiert",
    timerOff: "Ohne Timer üben",
    timerOn: "Mit Timer",
    toHub: "Alle Simulationen",
  },
  drills: {
    kicker: "Training · Wissenschaftssprache",
    title: "Strukturen, bis sie sitzen.",
    lead:
      "Kurze Umformungen mit sofortiger Rückmeldung. Jede Aufgabe zeigt die Regel, die Lösung und eine zweite Formulierung.",
    all: "Alle",
    check: "Prüfen",
    show: "Lösung zeigen",
    next: "Nächste Aufgabe",
    again: "Noch einmal",
    correct: "Richtig",
    partial: "Fast – Form prüfen",
    wrong: "Noch nicht",
    streak: "Serie",
    rule: "Regel",
    yourAnswer: "Deine Antwort",
    solution: "Lösung",
    empty: "Schreibe zuerst eine Antwort.",
    done: "Alle Aufgaben dieser Kategorie bearbeitet.",
    restart: "Serie zurücksetzen",
  },
  modules: {
    nav: { listening: "Hörverstehen", speaking: "Sprechen", writing: "Schreiben" },
    hub: {
      kicker: "DSH · Die weiteren Prüfungsteile",
      title: "Vier Teile. Eine Prüfung.",
      lead: "Neben Leseverstehen und Strukturen trainierst du hier Hören, Sprechen und Schreiben – mit Timer, Kriterien und Rückmeldung.",
      open: "Öffnen",
      points: "Punkte",
      minutes: "Minuten",
    },
    common: {
      back: "Zurück zur Übersicht",
      start: "Übung starten",
      results: "Auswertung",
      restart: "Neuer Versuch",
      total: "Gesamt",
      criteria: "Bewertungskriterien",
      yourAnswer: "Deine Antwort",
      model: "Musterlösung",
      aiRequest: "KI-Feedback anfordern",
      aiLoading: "Der Korrektor liest deine Antwort …",
      aiUnavailable: "KI-Korrektur ist nicht konfiguriert. Die lokale Auswertung bleibt gültig.",
      aiError: "KI-Korrektur fehlgeschlagen. Die lokale Auswertung bleibt gültig.",
      timeUp: "Zeit abgelaufen",
      submit: "Auswerten",
      confirmIncomplete: "Noch nicht alles bearbeitet. Trotzdem auswerten?",
      answers: "bearbeitet",
      lastAttempt: "Letzter Versuch",
    },
    listen: {
      kicker: "Prüfungsteil 02 · Hörverstehen",
      title: "Genau hinhören.",
      lead: "Ein Gespräch, acht Fragen. Der Text wird vorgelesen; das Skript siehst du erst nach der Auswertung.",
      play: "Abspielen",
      pause: "Pause",
      stop: "Stopp",
      replay: "Absatz wiederholen",
      speed: "Tempo",
      transcript: "Skript anzeigen",
      hideTranscript: "Skript ausblenden",
      audioNote:
        "Die Audioversion wird mit der Sprachausgabe deines Browsers erzeugt. Funktioniert sie nicht, nutze das Skript.",
      choice: "Wähle eine Antwort",
      open: "Eigene Antwort",
    },
    speak: {
      kicker: "Prüfungsteil 03 · Sprechen",
      title: "Klar und zusammenhängend.",
      lead: "Drei Aufgaben mit Vorbereitungs- und Sprechzeit. Sprich laut – dein Browser übernimmt die Transkription, wenn möglich.",
      prepare: "Vorbereitung",
      start: "Antwort aufnehmen",
      stop: "Aufnahme beenden",
      unsupported: "Spracherkennung nicht verfügbar – schreibe deine Antwort stattdessen auf.",
      typed: "Antwort eingeben",
      prepOver: "Vorbereitungszeit vorbei",
      next: "Nächste Aufgabe",
      selfCheck: "Selbsteinschätzung Fluenz",
    },
    write: {
      kicker: "Prüfungsteil 04 · Schreiben",
      title: "Ein Text, der trägt.",
      lead: "Zwei Aufgaben mit Gliederungshilfe und Wortzahl. Kriterien und KI-Feedback zeigen, wo du nachbessern kannst.",
      draft: "Dein Text",
      outline: "Gliederungshilfe",
      hideOutline: "Gliederung ausblenden",
      words: "Wörter",
      minWords: "Mindestens",
      guide: "Hinweise",
    },
  },
  learn: {
    nav: "Lernen",
    kicker: "DSH · Lernbereich",
    title: "Wissen, das trägt.",
    lead: "Kurze Lektionen, konkrete Beispiele und Prüfungstipps für jeden Teil der DSH – zum Nachlesen oder vor der nächsten Simulation.",
    lessons: "Lektionen",
    tips: "Tipps",
    example: "Beispiel",
    takeaway: "Merksatz",
    back: "Zurück zum Lernbereich",
    open: "Lernen",
    lessonLabel: "Lektion",
    tipLabel: "Tipp",
  },
  types: {
    passiversatz: "Passiversatz",
    partizipialattribut: "Partizipialattribut",
    nominalisierung: "Nominalisierung",
    konnektor: "Konnektoren",
    konjunktiv: "Konjunktiv II",
    bezug: "Bezüge",
  },
  levels: {
    none: { label: "Nicht bestanden", note: "Unter 57 % – für die Zulassung reicht das nicht." },
    dsh1: { label: "DSH-1", note: "57–66 % – Zulassung nur in einzelnen Fächern." },
    dsh2: { label: "DSH-2", note: "67–81 % – der Standard für die meisten Studiengänge." },
    dsh3: { label: "DSH-3", note: "82–100 % – höchste Stufe, z. B. für Medizin und Jura." },
  },
};

const fr: DshCopy = {
  nav: {
    trainer: "Entraîneur DSH",
    simulations: "Simulations",
    structures: "Structures",
    guide: "Guide",
    portfolio: "Portfolio",
  },
  hub: {
    kicker: "DSH · Compréhension écrite & structures",
    title: "Le texte. Les tâches. Le chrono.",
    lead:
      "Un simulateur au format du DSH : 90 minutes, 45 points, écran partagé entre le texte et les questions. Correction selon le corrigé officiel, avec un retour IA sur les réponses libres.",
    start: "Lancer une simulation",
    secondary: "Entraîner les structures",
    stats: {
      points: "points",
      minutes: "minutes",
      split: "Compréhension + structures",
      levels: "DSH-1 à DSH-3",
    },
    simTitle: "Simulations",
    simLead:
      "Chaque simulation contient un texte scientifique, neuf à onze questions de compréhension et cinq à sept transformations.",
    open: "Ouvrir",
    available: "disponibles",
    tasksLabel: "tâches",
    wordsLabel: "mots",
    structuresTitle: "Structures de la langue scientifique",
    structuresLead:
      "Substituts du passif, attributs participiaux, nominalisation, connecteurs et Konjunktiv II : les 15 points qui font la différence entre DSH-1 et DSH-2.",
    structuresCta: "Ouvrir l’entraînement",
    howTitle: "Le déroulé d’une simulation",
    steps: [
      {
        title: "Lire & annoter",
        body:
          "15 minutes : lire, surligner, repérer les mots-clés. La numérotation des lignes reprend celle du cahier d’examen.",
      },
      {
        title: "Traiter les tâches",
        body:
          "50 minutes : répondre avec ses propres mots, lire les graphiques, transformer les structures. Le chrono tourne en arrière-plan.",
      },
      {
        title: "Corriger & comparer",
        body:
          "Points par tâche, corrigé et critères. Un correcteur IA peut relire les réponses libres à la demande.",
      },
    ],
    scaleTitle: "Barème d’évaluation",
    scaleLead:
      "Repères pour 45 points. Les exigences réelles sont fixées par chaque université.",
    scaleHead: { points: "Points", percent: "Pour cent", level: "Niveau", note: "Signification" },
    footnote:
      "Contenu fondé sur le cahier « 20 Prüfungssimulationen » au format des épreuves RPTU. Exercices non officiels.",
  },
  sim: {
    back: "Retour à la vue d’ensemble",
    intro:
      "Répondez uniquement à partir des informations du texte et avec vos propres mots. Recopier des passages entraîne un retrait de points.",
    reading: "Texte",
    tasks: "Tâches",
    readingSearch: "Chercher dans le texte",
    readingMarks: "Surligneurs",
    readingReset: "Réinitialiser",
    part1: "Partie 1 · Compréhension écrite",
    part2: "Partie 2 · Structures de la langue scientifique",
    part2Note: "15 points · Reformulez sans modifier le contenu.",
    openPoints: "points en réponses libres",
    words: "mots",
    start: "Démarrer l’épreuve",
    pause: "Pause",
    resume: "Reprendre",
    resumeHint: "Chrono en cours",
    timeUp: "Temps écoulé",
    answered: "répondues",
    submit: "Corriger",
    confirmIncomplete: "Toutes les tâches ne sont pas traitées. Corriger quand même ?",
    results: "Correction",
    total: "Total",
    leseverstehen: "Compréhension écrite",
    strukturen: "Structures",
    restart: "Nouvelle tentative",
    aiRequest: "Demander le retour IA",
    aiLoading: "Le correcteur lit vos réponses…",
    aiUnavailable:
      "La correction IA n’est pas configurée sur ce serveur. La correction locale reste valable.",
    aiError: "La correction IA a échoué. La correction locale reste valable.",
    aiNoteDone:
      "L’évaluation IA remplace, pour les réponses libres, la répartition locale des points. Vérifiez tout de même les critères.",
    localNote:
      "La correction locale vérifie les points clés du corrigé. Le style, les nuances et les formulations alternatives sont mieux évalués par le correcteur IA.",
    model: "Corrigé",
    criteria: "Critères",
    yourAnswer: "Votre réponse",
    copyWarn: "Proche du texte",
    empty: "Sans réponse",
    question: "Tâche",
    solution: "Solution",
    example: "Exemple",
    correct: "correct",
    incorrect: "incorrect",
    marked: "marquée",
    timerOff: "S’entraîner sans chrono",
    timerOn: "Avec chrono",
    toHub: "Toutes les simulations",
  },
  drills: {
    kicker: "Entraînement · Langue scientifique",
    title: "Des structures, jusqu’à l’automatisme.",
    lead:
      "Des transformations courtes avec retour immédiat. Chaque item affiche la règle, la solution et une deuxième formulation.",
    all: "Toutes",
    check: "Vérifier",
    show: "Voir la solution",
    next: "Tâche suivante",
    again: "Recommencer",
    correct: "Juste",
    partial: "Presque – vérifiez la forme",
    wrong: "Pas encore",
    streak: "Série",
    rule: "Règle",
    yourAnswer: "Votre réponse",
    solution: "Solution",
    empty: "Écrivez d’abord une réponse.",
    done: "Toutes les tâches de cette catégorie sont traitées.",
    restart: "Réinitialiser la série",
  },
  modules: {
    nav: { listening: "Compréhension orale", speaking: "Expression orale", writing: "Expression écrite" },
    hub: {
      kicker: "DSH · Les autres épreuves",
      title: "Quatre épreuves. Un examen.",
      lead: "En plus de la compréhension écrite et des structures, entraînez-vous ici à l’oral et à l’écrit, avec chrono, critères et retour.",
      open: "Ouvrir",
      points: "points",
      minutes: "minutes",
    },
    common: {
      back: "Retour à la vue d’ensemble",
      start: "Démarrer l’exercice",
      results: "Correction",
      restart: "Nouvelle tentative",
      total: "Total",
      criteria: "Critères d’évaluation",
      yourAnswer: "Votre réponse",
      model: "Corrigé",
      aiRequest: "Demander le retour IA",
      aiLoading: "Le correcteur lit votre réponse…",
      aiUnavailable: "La correction IA n’est pas configurée. La correction locale reste valable.",
      aiError: "La correction IA a échoué. La correction locale reste valable.",
      timeUp: "Temps écoulé",
      submit: "Corriger",
      confirmIncomplete: "Tout n’est pas traité. Corriger quand même ?",
      answers: "traitées",
      lastAttempt: "Dernière tentative",
    },
    listen: {
      kicker: "Épreuve 02 · Compréhension orale",
      title: "Écouter avec précision.",
      lead: "Une conversation, huit questions. Le texte est lu à voix haute ; la transcription n’apparaît qu’après la correction.",
      play: "Lire",
      pause: "Pause",
      stop: "Arrêt",
      replay: "Répéter le passage",
      speed: "Vitesse",
      transcript: "Afficher la transcription",
      hideTranscript: "Masquer la transcription",
      audioNote:
        "L’audio est généré par la synthèse vocale du navigateur. Si elle ne fonctionne pas, utilisez la transcription.",
      choice: "Choisissez une réponse",
      open: "Réponse personnelle",
    },
    speak: {
      kicker: "Épreuve 03 · Expression orale",
      title: "Clair et cohérent.",
      lead: "Trois tâches avec temps de préparation et de parole. Parlez à voix haute : votre navigateur transcrira si possible.",
      prepare: "Préparation",
      start: "Enregistrer la réponse",
      stop: "Arrêter l’enregistrement",
      unsupported: "Reconnaissance vocale indisponible – écrivez votre réponse à la place.",
      typed: "Saisir la réponse",
      prepOver: "Temps de préparation terminé",
      next: "Tâche suivante",
      selfCheck: "Auto-évaluation du débit",
    },
    write: {
      kicker: "Épreuve 04 · Expression écrite",
      title: "Un texte qui tient.",
      lead: "Deux tâches avec aide au plan et nombre de mots. Critères et retour IA montrent où progresser.",
      draft: "Votre texte",
      outline: "Aide au plan",
      hideOutline: "Masquer le plan",
      words: "mots",
      minWords: "Minimum",
      guide: "Conseils",
    },
  },
  learn: {
    nav: "Apprendre",
    kicker: "DSH · Espace d’apprentissage",
    title: "Des connaissances qui portent.",
    lead: "De courtes leçons, des exemples concrets et des conseils d’examen pour chaque partie du DSH – à relire ou avant la prochaine simulation.",
    lessons: "Leçons",
    tips: "Conseils",
    example: "Exemple",
    takeaway: "À retenir",
    back: "Retour à l’espace d’apprentissage",
    open: "Apprendre",
    lessonLabel: "Leçon",
    tipLabel: "Conseil",
  },
  types: {
    passiversatz: "Substituts du passif",
    partizipialattribut: "Attribut participial",
    nominalisierung: "Nominalisation",
    konnektor: "Connecteurs",
    konjunktiv: "Konjunktiv II",
    bezug: "Références",
  },
  levels: {
    none: { label: "Non validé", note: "Moins de 57 % – insuffisant pour une admission." },
    dsh1: { label: "DSH-1", note: "57–66 % – admission dans quelques filières seulement." },
    dsh2: { label: "DSH-2", note: "67–81 % – le standard de la plupart des cursus." },
    dsh3: { label: "DSH-3", note: "82–100 % – niveau le plus élevé, exigé en médecine ou en droit." },
  },
};

const en: DshCopy = {
  nav: {
    trainer: "DSH Trainer",
    simulations: "Simulations",
    structures: "Structures",
    guide: "Guide",
    portfolio: "Portfolio",
  },
  hub: {
    kicker: "DSH · Reading comprehension & structures",
    title: "The text. The tasks. The clock.",
    lead:
      "A full-format DSH simulator: 90 minutes, 45 points, split screen with the reading text and the tasks. Marked against the answer key, with AI feedback on free responses.",
    start: "Start a simulation",
    secondary: "Train the structures",
    stats: {
      points: "points",
      minutes: "minutes",
      split: "Reading + structures",
      levels: "DSH-1 to DSH-3",
    },
    simTitle: "Simulations",
    simLead:
      "Each simulation contains an academic reading text, nine to eleven comprehension tasks and five to seven transformations.",
    open: "Open",
    available: "available",
    tasksLabel: "tasks",
    wordsLabel: "words",
    structuresTitle: "Academic language structures",
    structuresLead:
      "Passive substitutes, participial attributes, nominalisation, connectors and Konjunktiv II — the 15 points that separate DSH-1 from DSH-2.",
    structuresCta: "Open the trainer",
    howTitle: "How a simulation runs",
    steps: [
      {
        title: "Read & annotate",
        body:
          "15 minutes: read, highlight, locate key terms. Line numbering matches the printed exam booklet.",
      },
      {
        title: "Work through the tasks",
        body:
          "50 minutes: answer in your own words, read the charts, rewrite the structures. The timer runs in the background.",
      },
      {
        title: "Mark & compare",
        body:
          "Points per task, model answer and criteria. An AI examiner can review free responses on demand.",
      },
    ],
    scaleTitle: "Scoring scale",
    scaleLead:
      "Reference values for 45 points. Each university sets its own admission requirements.",
    scaleHead: { points: "Points", percent: "Percent", level: "Level", note: "Meaning" },
    footnote:
      "Based on the companion booklet “20 Prüfungssimulationen” in the RPTU exam format. Unofficial practice material.",
  },
  sim: {
    back: "Back to overview",
    intro:
      "Answer strictly from the information in the text and use your own words. Copying whole passages leads to a deduction.",
    reading: "Reading text",
    tasks: "Tasks",
    readingSearch: "Search the text",
    readingMarks: "Highlighter",
    readingReset: "Reset",
    part1: "Part 1 · Reading comprehension",
    part2: "Part 2 · Academic language structures",
    part2Note: "15 points · Rewrite without changing the content.",
    openPoints: "points in free responses",
    words: "words",
    start: "Start the exam",
    pause: "Pause",
    resume: "Resume",
    resumeHint: "Timer running",
    timeUp: "Time is up",
    answered: "answered",
    submit: "Mark",
    confirmIncomplete: "Some tasks are unanswered. Mark anyway?",
    results: "Results",
    total: "Total",
    leseverstehen: "Reading",
    strukturen: "Structures",
    restart: "New attempt",
    aiRequest: "Request AI feedback",
    aiLoading: "The examiner is reading your answers…",
    aiUnavailable:
      "AI marking is not configured on this server. The local assessment still applies.",
    aiError: "AI marking failed. The local assessment still applies.",
    aiNoteDone:
      "The AI assessment replaces the local point split for free responses. Still verify the criteria yourself.",
    localNote:
      "The local assessment checks the key points from the answer key. Style, nuance and alternative phrasing are judged more precisely by the AI examiner.",
    model: "Model answer",
    criteria: "Criteria",
    yourAnswer: "Your answer",
    copyWarn: "Close to the text",
    empty: "No answer",
    question: "Task",
    solution: "Solution",
    example: "Example",
    correct: "correct",
    incorrect: "incorrect",
    marked: "marked",
    timerOff: "Practise without timer",
    timerOn: "With timer",
    toHub: "All simulations",
  },
  drills: {
    kicker: "Training · Academic language",
    title: "Structures until they stick.",
    lead:
      "Short transformations with instant feedback. Every item shows the rule, the solution and a second phrasing.",
    all: "All",
    check: "Check",
    show: "Show solution",
    next: "Next item",
    again: "Try again",
    correct: "Correct",
    partial: "Almost – check the form",
    wrong: "Not yet",
    streak: "Streak",
    rule: "Rule",
    yourAnswer: "Your answer",
    solution: "Solution",
    empty: "Write an answer first.",
    done: "All items in this category are done.",
    restart: "Reset the streak",
  },
  modules: {
    nav: { listening: "Listening", speaking: "Speaking", writing: "Writing" },
    hub: {
      kicker: "DSH · The other exam parts",
      title: "Four parts. One exam.",
      lead: "Beyond reading and structures, train listening, speaking and writing here — with a timer, criteria and feedback.",
      open: "Open",
      points: "points",
      minutes: "minutes",
    },
    common: {
      back: "Back to overview",
      start: "Start exercise",
      results: "Results",
      restart: "New attempt",
      total: "Total",
      criteria: "Assessment criteria",
      yourAnswer: "Your answer",
      model: "Model answer",
      aiRequest: "Request AI feedback",
      aiLoading: "The examiner is reading your answer…",
      aiUnavailable: "AI marking is not configured. The local assessment still applies.",
      aiError: "AI marking failed. The local assessment still applies.",
      timeUp: "Time is up",
      submit: "Mark",
      confirmIncomplete: "Some parts are unfinished. Mark anyway?",
      answers: "done",
      lastAttempt: "Last attempt",
    },
    listen: {
      kicker: "Part 02 · Listening comprehension",
      title: "Listen closely.",
      lead: "One conversation, eight questions. The text is read aloud; the transcript appears only after marking.",
      play: "Play",
      pause: "Pause",
      stop: "Stop",
      replay: "Replay paragraph",
      speed: "Speed",
      transcript: "Show transcript",
      hideTranscript: "Hide transcript",
      audioNote:
        "Audio is produced by your browser's speech synthesis. If it does not work, use the transcript.",
      choice: "Choose an answer",
      open: "Own answer",
    },
    speak: {
      kicker: "Part 03 · Speaking",
      title: "Clear and coherent.",
      lead: "Three tasks with preparation and speaking time. Speak aloud — your browser will transcribe if possible.",
      prepare: "Preparation",
      start: "Record answer",
      stop: "Stop recording",
      unsupported: "Speech recognition unavailable — type your answer instead.",
      typed: "Type your answer",
      prepOver: "Preparation time is over",
      next: "Next task",
      selfCheck: "Self-assessment: fluency",
    },
    write: {
      kicker: "Part 04 · Writing",
      title: "A text that holds.",
      lead: "Two tasks with an outline helper and word target. Criteria and AI feedback show where to improve.",
      draft: "Your text",
      outline: "Outline helper",
      hideOutline: "Hide outline",
      words: "words",
      minWords: "Minimum",
      guide: "Tips",
    },
  },
  learn: {
    nav: "Learn",
    kicker: "DSH · Learning area",
    title: "Knowledge that sticks.",
    lead: "Short lessons, concrete examples and exam tips for every part of the DSH — for revision or before your next simulation.",
    lessons: "Lessons",
    tips: "Tips",
    example: "Example",
    takeaway: "Key takeaway",
    back: "Back to learning area",
    open: "Learn",
    lessonLabel: "Lesson",
    tipLabel: "Tip",
  },
  types: {
    passiversatz: "Passive substitutes",
    partizipialattribut: "Participial attribute",
    nominalisierung: "Nominalisation",
    konnektor: "Connectors",
    konjunktiv: "Konjunktiv II",
    bezug: "References",
  },
  levels: {
    none: { label: "Not passed", note: "Below 57% – not enough for admission." },
    dsh1: { label: "DSH-1", note: "57–66% – admission in a few subjects only." },
    dsh2: { label: "DSH-2", note: "67–81% – the standard for most degree programmes." },
    dsh3: { label: "DSH-3", note: "82–100% – the highest level, required for medicine and law." },
  },
};

export const dshCopy: Record<Locale, DshCopy> = { de, fr, en };
