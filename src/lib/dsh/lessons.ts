/**
 * Lernstoff und Prüfungstipps für alle fünf Trainingsbereiche.
 * Die Lektionen sind auf Deutsch – sie sind selbst Übungsmaterial –,
 * während die Oberfläche lokalisiert bleibt.
 */

export type LessonModuleKey =
  | "leseverstehen"
  | "strukturen"
  | "hoeren"
  | "sprechen"
  | "schreiben";

export type LessonSection = {
  heading: string;
  body: string;
  example?: string;
};

export type Lesson = {
  id: string;
  number: string;
  title: string;
  lead: string;
  sections: LessonSection[];
  takeaway: string;
};

export type Tip = {
  id: string;
  number: string;
  title: string;
  body: string;
};

export type LessonArea = {
  key: LessonModuleKey;
  title: string;
  lead: string;
  lessons: Lesson[];
  tips: Tip[];
};

const TIP = (n: number, title: string, body: string): Tip => ({
  id: `t${n}`,
  number: String(n).padStart(2, "0"),
  title,
  body,
});

const areas: LessonArea[] = [
  {
    key: "leseverstehen",
    title: "Leseverstehen",
    lead: "Ein wissenschaftlicher Text ist kein Rätsel, sondern eine Argumentation. Diese Lektionen zeigen, wie du sie freilegst.",
    lessons: [
      {
        id: "lv-1",
        number: "01",
        title: "Den Text erschließen",
        lead: "Bevor du Details liest, brauchst du eine Karte des Textes.",
        sections: [
          {
            heading: "Überschrift und Absätze",
            body: "Lies die Überschrift und dann nur den ersten und letzten Satz jedes Absatzes. Daraus entsteht eine kurze Inhaltsübersicht. Der erste Satz nennt meist das Thema, der letzte das Ergebnis des Absatzes.",
            example: "Ein Absatz beginnt mit «Die Datenlage ist unbefriedigend» und endet mit «Deshalb sind weitere Messungen nötig» – der Absatz handelt also von einer Forschungslücke.",
          },
          {
            heading: "Konnektoren als Wegweiser",
            body: "Wörter wie «allerdings», «folglich», «hingegen», «zunächst» oder «abschließend» zeigen die Logik des Textes. Markiere sie beim Lesen: Sie verraten dir, ob ein Argument einen Gegensatz, eine Ursache oder eine Folge einleitet.",
            example: "«Zwar steigt die Effizienz, doch die Kosten bleiben hoch.» → Der Kontrast ist die Kernaussage.",
          },
          {
            heading: "Thesen von Fakten trennen",
            body: "Unterscheide zwischen dem, was der Text als Tatsache darstellt, und dem, was er behauptet oder bewertet. Signaturen wie «es zeigt sich», «die Autorin vertritt» oder «bewertet wird» kennzeichnen eine Position.",
          },
        ],
        takeaway: "Erst die Struktur, dann die Details – so bleibt der rote Faden erhalten.",
      },
      {
        id: "lv-2",
        number: "02",
        title: "Fragen strategisch lesen",
        lead: "Die Aufgaben bestimmen, welche Informationen du im Text suchst.",
        sections: [
          {
            heading: "Die vier Aufgabentypen",
            body: "Wortschatzaufgaben prüfen das Verständnis einzelner Begriffe, Aussagenaufgaben das Zuordnen von Informationen, Grafikaufgaben das Übertragen von Zahlen und offene Fragen das Zusammenfassen und Erklären. Für jeden Typ brauchst du eine andere Strategie.",
          },
          {
            heading: "Schlüsselwörter in der Frage",
            body: "Unterstreiche in jeder Frage die Begriffe, die im Text wiederkehren müssen: Personen, Zahlen, Fachbegriffe und Konnektoren. Danach suchst du gezielt nach diesen Signalen statt den Text noch einmal vollständig zu lesen.",
            example: "Frage: «Welche Ursache nennt der Text für den Anstieg?» → Suche nach «weil», «da», «aufgrund», «folge».",
          },
          {
            heading: "Zeilenangaben nutzen",
            body: "Die Aufgaben nennen Zeilen. Springe dorthin und lies ein bis zwei Zeilen darüber und darunter. Meist steht die gesuchte Information direkt daneben – der Kontext verhindert Fehlzuordnungen.",
          },
        ],
        takeaway: "Lies zuerst die Fragen, dann den Text – du spart Zeit und findest schneller.",
      },
      {
        id: "lv-3",
        number: "03",
        title: "Antworten mit eigenen Worten",
        lead: "Wer abschreibt, zeigt nur, dass er lesen kann – nicht, dass er verstanden hat.",
        sections: [
          {
            heading: "Umformulieren statt kopieren",
            body: "Nimm den Kern der Textstelle und formuliere ihn neu: andere Wortstellung, ein Synonym, ein anderer Satzbau. Prüfe danach, ob der Inhalt unverändert ist.",
            example: "Text: «Die Anlage senkt den Verbrauch um 30 Prozent.» → Antwort: «Durch die neue Anlage lässt sich der Energieverbrauch um rund ein Drittel reduzieren.»",
          },
          {
            heading: "Textbelege und Präzision",
            body: "Nenne bei offenen Fragen konkrete Zahlen, Begriffe oder Zeilen. Vage Formulierungen wie «etwas über die Technik» erhalten keinen Punkt. Eine knappe, genaue Antwort ist besser als ein langer Absatz.",
          },
          {
            heading: "Wörtliche Zitate sparsam",
            body: "Fachbegriffe darfst du übernehmen, ganze Sätze nicht. Wenn du ein Zitat wirklich brauchst, markiere es als solches und ergänze immer eine Erläuterung in eigenen Worten.",
          },
        ],
        takeaway: "Kurz, genau, umformuliert – das ist die sichere Antwortstrategie.",
      },
    ],
    tips: [
      TIP(1, "90 Sekunden für die Fragen", "Lies vor dem Text alle Aufgaben. Du weißt dann, wonach du suchst, und behältst die Struktur im Blick."),
      TIP(2, "Drei Farben, drei Zwecke", "Markiere mit Gelb Zahlen, mit Grün Ursachen und mit Blau Gegensätze. Farben erleichtern das Wiederfinden."),
      TIP(3, "Konnektoren zuerst", "Suche in jedem Absatz nach Konnektoren. Sie sind die schnellste Möglichkeit, die Argumentation zu verstehen."),
      TIP(4, "Zeilen statt Seiten", "Springe direkt zu den genannten Zeilen und lies den Kontext mit – das spart mehrere Minuten."),
      TIP(5, "Nie mehr als vier Sätze", "Eine offene Antwort sollte maximal vier Sätze haben. Länge ist kein Qualitätsmerkmal, Präzision schon."),
    ],
  },

  {
    key: "strukturen",
    title: "Wissenschaftssprachliche Strukturen",
    lead: "Nominalstil, Passiversätze und Konnektoren wirken schwer – folgen aber klaren Regeln.",
    lessons: [
      {
        id: "st-1",
        number: "01",
        title: "Passiversätze verstehen und bilden",
        lead: "Aus «man muss …» wird «ist … zu …» – drei Wege, dieselbe Aussage zu machen.",
        sections: [
          {
            heading: "sein + zu + Infinitiv",
            body: "Ein Passiv mit «müssen» oder «können» lässt sich mit «sein + zu + Infinitiv» umformulieren. Das Objekt wird zum Subjekt, «man» entfällt.",
            example: "Man muss die Proben täglich kontrollieren. → Die Proben sind täglich zu kontrollieren.",
          },
          {
            heading: "sich lassen + Infinitiv",
            body: "Für «man kann …» eignet sich «sich lassen + Infinitiv». Das Subjekt steht im Nominativ, «sich» bleibt unverändert.",
            example: "Man kann den Fehler leicht beheben. → Der Fehler lässt sich leicht beheben.",
          },
          {
            heading: "Adjektive auf -bar",
            body: "«-bar» bedeutet «kann … werden». Achte auf die Adjektivendung und auf die Wortstellung bei mehrteiligen Prädikaten.",
            example: "Die Methode ist nicht auf andere Fälle übertragbar. = Sie kann nicht übertragen werden.",
          },
        ],
        takeaway: "Frage dich zuerst: Wird eine Notwendigkeit oder eine Möglichkeit ausgedrückt?",
      },
      {
        id: "st-2",
        number: "02",
        title: "Nominalstil entschlüsseln",
        lead: "Wissenschaftliche Texte lieben Substantive. Du kannst sie wieder in Verben übersetzen.",
        sections: [
          {
            heading: "Nominalisierungen auflösen",
            body: "Aus «prüfen» wird «die Prüfung», aus «steigen» wird «der Anstieg». Probiere probeweise, das Nomen in ein Verb zurückzuübersetzen – der Satz wird sofort verständlicher.",
            example: "«Die Durchführung der Messung» → «die Messung durchführen».",
          },
          {
            heading: "Partizipialattribute",
            body: "Ein Relativsatz kann zu einem Partizip mit Adjektivendung werden. Die Endung richtet sich nach Kasus, Numerus und Genus des Bezugsworts.",
            example: "«Die Studie, die von der EU gefördert wird» → «die von der EU geförderte Studie».",
          },
          {
            heading: "Genitivketten",
            body: "Mehrere Genitive hintereinander wirken dicht. Zerlege sie in Einzelschritte: Wessen was? Wovon? Wofür?",
          },
        ],
        takeaway: "Nominalstil ist keine andere Sprache – nur eine verdichtete.",
      },
      {
        id: "st-3",
        number: "03",
        title: "Konnektoren und Konjunktiv II",
        lead: "Diese beiden Bereiche entscheiden oft über DSH-1 oder DSH-2.",
        sections: [
          {
            heading: "Satzverbindungen",
            body: "Unterscheide zwischen Hauptsatz- und Nebensatzkonnektoren: «deshalb/hingegen/dennoch» stehen im Hauptsatz, «weil/obwohl/während/indem» im Nebensatz mit Verb am Ende.",
            example: "«Obwohl die Daten dünn sind, empfiehlt das Gremium die Zulassung.»",
          },
          {
            heading: "Kausal, konzessiv, final",
            body: "Ordne die Konnektoren nach ihrer Bedeutung: «weil/aufgrund» = Ursache, «obwohl/trotz» = Gegensatz, «um … zu / indem» = Ziel oder Mittel.",
          },
          {
            heading: "Konjunktiv II als Möglichkeit",
            body: "«wäre, könnte, ließe» zeigen Möglichkeiten, irreale Bedingungen oder höfliche Empfehlungen. In der Wissenschaftssprache signalisieren sie vorsichtige Aussagen.",
            example: "«Studien zufolge ließe sich ein Teil der Leitungen umrüsten.»",
          },
        ],
        takeaway: "Bedeutung zuerst, Form danach – dann stimmt auch die Wortstellung.",
      },
    ],
    tips: [
      TIP(1, "Immer die Endung prüfen", "Bei Partizipialattributen kontrolliere zuerst Kasus, Numerus und Genus – die Endung ist der häufigste Fehler."),
      TIP(2, "Zwei Lösungen notieren", "Für «man kann …» sind oft «lässt sich …» und «kann … werden» richtig. Nenne eine saubere Variante."),
      TIP(3, "Verb am Ende", "In Nebensätzen nach «weil, obwohl, während, indem» steht das konjugierte Verb ganz am Ende."),
      TIP(4, "Nominalstil zurückübersetzen", "Wenn du einen Satz nicht verstehst, mache ein Verb daraus – das klärt die Struktur meist sofort."),
      TIP(5, "Inhalt nicht verändern", "Umformungen dürfen nie neue Informationen erfinden oder die Aussage umkehren."),
    ],
  },

  {
    key: "hoeren",
    title: "Hörverstehen",
    lead: "Hören ist kein Passivieren. Mit einer klaren Strategie behältst du auch dichte Gespräche im Griff.",
    lessons: [
      {
        id: "hv-1",
        number: "01",
        title: "Vor dem Hören",
        lead: "Die Vorbereitung entscheidet darüber, was du überhaupt wahrnimmst.",
        sections: [
          {
            heading: "Fragen zuerst lesen",
            body: "Lies alle Fragen und antworte dir kurz: Wonach suche ich? Personen, Zahlen, Ursachen oder Meinungen? So baust du eine Erwartung auf, an der du dich orientieren kannst.",
          },
          {
            heading: "Schlüsselbegriffe sammeln",
            body: "Notiere zwei bis drei Begriffe pro Frage. Wenn du sie im Hörtext wiedererkennst, weißt du, dass die passende Stelle gekommen ist.",
            example: "Frage nach «Vorteilen» → achte auf «erstens», «außerdem», «der größte Vorteil».",
          },
          {
            heading: "Sprecher und Situation",
            body: "Kläre, wer spricht und in welchem Kontext. In einem Interview antwortet die Expertin anders als in einem Gespräch zwischen Studierenden.",
          },
        ],
        takeaway: "Wer die Fragen kennt, hört gezielt statt einfach alles.",
      },
      {
        id: "hv-2",
        number: "02",
        title: "Während des Hören",
        lead: "Signalwörter sind deine Wegweiser durch den Redefluss.",
        sections: [
          {
            heading: "Signalwörter erkennen",
            body: "«Allerdings», «deshalb», «zum Beispiel», «andererseits» kündigen eine neue Information an. Genau dort steht oft die Antwort.",
          },
          {
            heading: "Stichpunkte statt Sätze",
            body: "Schreibe nur Schlüsselwörter und Zahlen auf. Wer ganze Sätze mitschreiben will, verpasst die nächste Aussage.",
          },
          {
            heading: "Nicht hängen bleiben",
            body: "Wenn du eine Stelle nicht verstehst, warte auf den nächsten Satz. Oft erklärt er den vorherigen – oder die nächste Frage bringt den fehlenden Hinweis.",
          },
        ],
        takeaway: "Lieber drei sichere Stichpunkte als ein verpasster Anschluss.",
      },
      {
        id: "hv-3",
        number: "03",
        title: "Nach dem Hören",
        lead: "In den letzten Minuten holst du die Punkte, die du beim Zuhören liegen gelassen hast.",
        sections: [
          {
            heading: "Antworten zuordnen",
            body: "Prüfe, ob deine Notiz wirklich zur Frage passt. Eine Zahl ohne Einheit oder ein Zitat ohne Bezug ist keine Antwort.",
          },
          {
            heading: "Mit eigenen Worten",
            body: "Formuliere offene Antworten knapp um. Achte darauf, dass du die Aussage des Sprechers wiedergibst – nicht deine eigene Meinung.",
          },
          {
            heading: "Unsicherheiten markieren",
            body: "Wenn du zwischen zwei Optionen schwankst, entscheide dich für eine. Leere Felder geben sicher null Punkte, eine begründete Wahl mindestens die Chance auf einen.",
          },
        ],
        takeaway: "Eine leere Antwort ist immer falsch – eine unvollkommene vielleicht richtig.",
      },
    ],
    tips: [
      TIP(1, "Fragen vorab lesen", "Zwei Minuten Vorbereitung sparen dir zehn Minuten Suchen."),
      TIP(2, "Zahlen mit Einheit notieren", "«30» ist wenig wert, «30 Prozent» oder «30 Minuten» ist eine Antwort."),
      TIP(3, "Auf Kontraste achten", "«Zwar … aber …» enthält fast immer die entscheidende Information."),
      TIP(4, "Stichpunkte, keine Sätze", "Notiere nur das, was du später brauchst – nicht das, was du gerade gehört hast."),
      TIP(5, "Weiterhören statt grübeln", "Ein verpasster Satz kostet einen Punkt, zu langes Grübeln kostet drei."),
    ],
  },

  {
    key: "sprechen",
    title: "Sprechen",
    lead: "Gutes Sprechen ist keine Schauspielerei, sondern eine gut vorbereitete Struktur.",
    lessons: [
      {
        id: "sp-1",
        number: "01",
        title: "Die Aufgabe verstehen",
        lead: "Drei Minuten Vorbereitung entscheiden über die Qualität von zwei Minuten Rede.",
        sections: [
          {
            heading: "Sprechabsicht klären",
            body: "Frage dich: Soll ich erzählen, begründen, Stellung nehmen oder beschreiben? Jede Absicht verlangt einen anderen Aufbau.",
          },
          {
            heading: "Rolle und Situation",
            body: "In der Studienberatung sprichst du anders als in einer Fachdiskussion. Passe Wortwahl und Formalitätsgrad an die Situation an.",
          },
          {
            heading: "Drei Kernpunkte sammeln",
            body: "Notiere drei Stichpunkte, mehr nicht. Wer zu viel vorbereitet, verliert beim Sprechen den Faden.",
            example: "Einleitung → zwei Argumente → kurzes Fazit. Das reicht für zwei Minuten.",
          },
        ],
        takeaway: "Drei Punkte auf Papier sind mehr wert als ein fertiger Satz im Kopf.",
      },
      {
        id: "sp-2",
        number: "02",
        title: "Eine Rede bauen",
        lead: "Eine klare Gliederung trägt dich auch dann, wenn du ins Stocken gerätst.",
        sections: [
          {
            heading: "Vier Bausteine",
            body: "Einleitung mit Position, Argument mit Beleg, Gegenargument mit Entkräftung, Fazit. Diese Reihenfolge wirkt immer strukturiert.",
          },
          {
            heading: "Redemittel nutzen",
            body: "«Ich vertrete die Auffassung, dass …», «Ein weiterer Grund ist …», «Dem ließe sich entgegnen, dass …», «Unterm Strich …». Solche Bausteine schaffen Kohärenz.",
          },
          {
            heading: "Beispiele statt Behauptungen",
            body: "Ein konkretes Beispiel ist überzeugender als drei allgemeine Sätze. Nenne eine Situation, eine Zahl oder eine Erfahrung.",
          },
        ],
        takeaway: "Struktur ist ein Sicherheitsnetz – auch wenn die Worte fehlen.",
      },
      {
        id: "sp-3",
        number: "03",
        title: "Fluenz und Aussprache",
        lead: "Weniger Fehler machen heißt nicht, perfekt klingen zu müssen.",
        sections: [
          {
            heading: "Pausen setzen",
            body: "Kurze Pausen wirken sicher, hastiges Weitersprechen wirkt unsicher. Atme zwischen zwei Argumenten bewusst aus.",
          },
          {
            heading: "Intonation",
            body: "Hebe bei einer neuen Aussage die Stimme leicht und senke sie am Ende eines Gedankens. Das macht deine Struktur hörbar.",
          },
          {
            heading: "Umschreiben statt abbrechen",
            body: "Wenn ein Wort fehlt, beschreibe es: «das Gerät, mit dem man …». Ein Umweg ist besser als ein abgebrochener Satz.",
          },
        ],
        takeaway: "Ruhig, klar, umschreibend – das wirkt kompetenter als perfekt und stockend.",
      },
    ],
    tips: [
      TIP(1, "Drei Stichpunkte", "Mehr als drei Punkte kannst du in zwei Minuten nicht überzeugend ausführen."),
      TIP(2, "Erster Satz fertig", "Wenn der Einstieg sitzt, läuft der Rest fast von allein. Bereite ihn wörtlich vor."),
      TIP(3, "Redemittel als Brücken", "«Deshalb», «allerdings», «zum Schluss» machen deine Logik hörbar."),
      TIP(4, "Beispiel einbauen", "Ein einziges konkretes Beispiel hebt die Bewertung spürbar."),
      TIP(5, "Selbst kritisch zuhören", "Nimm deine Antwort auf und höre sie einmal an: Tempo, Pausen, klare Schlusssätze."),
    ],
  },

  {
    key: "schreiben",
    title: "Schreiben",
    lead: "Ein guter Prüfungstext ist klar gegliedert, knapp formuliert und inhaltlich belegt.",
    lessons: [
      {
        id: "sc-1",
        number: "01",
        title: "Textsorten sicher beherrschen",
        lead: "Wer die Textsorte erkennt, weiß sofort, was erwartet wird.",
        sections: [
          {
            heading: "Stellungnahme",
            body: "These nennen, Argumente mit Belegen anführen, ein Gegenargument entkräften, eigenes Urteil formulieren. Die Position muss schon in der Einleitung erkennbar sein.",
          },
          {
            heading: "Bericht",
            body: "Gegenstand und Stichprobe nennen, Zahlen geordnet wiedergeben, Entwicklungen deuten, vorsichtig bilanzieren. Vermeide Wertungen, wo nur Daten gefragt sind.",
          },
          {
            heading: "Erörterung",
            body: "Pro und Contra abwägen, bevor du dich entscheidest. Ein ausgewogenes Urteil wirkt überzeugender als eine einseitige These.",
          },
        ],
        takeaway: "Textsorte erkennen → Aufbau festlegen → dann schreiben.",
      },
      {
        id: "sc-2",
        number: "02",
        title: "Argumentation, die trägt",
        lead: "Ein Argument ohne Beleg bleibt eine Behauptung.",
        sections: [
          {
            heading: "These – Argument – Beleg",
            body: "Nenne zuerst deine Position, dann das Argument und anschließend ein Beispiel, eine Zahl oder einen Textbezug. Diese Dreierkette ist der Kern jeder Bewertung.",
            example: "«KI kann Transparenz fördern. Sie macht Arbeitswege nachvollziehbar, etwa wenn Entwürfe dokumentiert werden.»",
          },
          {
            heading: "Gegenargument entkräften",
            body: "Nenne das stärkste Gegenargument fair und antworte darauf mit einer Einschränkung oder einem klaren Grund. Das zeigt Differenzierung.",
          },
          {
            heading: "Abschluss mit Haltung",
            body: "Wiederhole nicht nur die These, sondern präzisiere sie: Unter welcher Bedingung gilt sie? Ein differenziertes Fazit bringt Punkte.",
          },
        ],
        takeaway: "Jedes Argument braucht einen Beleg – jedes Fazit eine Haltung.",
      },
      {
        id: "sc-3",
        number: "03",
        title: "Sprache und Zeitmanagement",
        lead: "Sprachliche Sauberkeit ist der Punkt, den man am leichtesten verlieren – und gewinnen kann.",
        sections: [
          {
            heading: "Konnektoren für Kohärenz",
            body: "«zunächst», «darüber hinaus», «hingegen», «folglich», «abschließend» verbinden deine Gedanken. Abwechslung wirkt besser als ein dauerhaftes «außerdem».",
          },
          {
            heading: "Grammatik kontrollieren",
            body: "Achte besonders auf Rektion und Kasus nach Präpositionen, auf Konjunktiv II in vorsichtigen Aussagen und auf die Satzstellung in Nebensätzen.",
          },
          {
            heading: "Fünf Minuten Reserve",
            body: "Plane die letzten fünf Minuten für eine Korrektur ein: Rechtschreibung, fehlende Artikel, doppelte Wörter, Wortzahl. Das ist die effektivste Punkteschonung.",
          },
        ],
        takeaway: "Lieber ein kürzerer, sauberer Text als ein langer mit Flüchtigkeitsfehlern.",
      },
    ],
    tips: [
      TIP(1, "Fünf Minuten Planung", "Gliedere kurz auf Papier, bevor du schreibst – das verhindert Umwege."),
      TIP(2, "Mindestwortzahl prüfen", "Unterschreite die Vorgabe nicht. Lieber etwas präziser weiterschreiben."),
      TIP(3, "Konkrete Belege", "Zahlen und Beispiele sind überzeugender als allgemeine Formulierungen."),
      TIP(4, "Ein Gegenargument", "Ein fair behandeltes Gegenargument hebt die Argumentation deutlich."),
      TIP(5, "Korrekturzeit einplanen", "Die letzten fünf Minuten gehören dem Lesen deines eigenen Textes."),
    ],
  },
];

export const lessonAreas = Object.fromEntries(
  areas.map((area) => [area.key, area]),
) as Record<LessonModuleKey, LessonArea>;

export const lessonKeys: LessonModuleKey[] = areas.map((area) => area.key);

export function getLessonArea(key: LessonModuleKey): LessonArea {
  return lessonAreas[key];
}
