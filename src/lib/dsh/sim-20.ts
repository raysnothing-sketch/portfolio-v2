import { sim20Lines } from "@/lib/dsh/texts-20";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim20: DshSimulation = {
  id: "sim-20",
  number: 20,
  slug: "arbeiten-mit-kuenstlicher-intelligenz",
  title: "Arbeiten mit künstlicher Intelligenz",
  subtitle: "Wie KI den Arbeitsmarkt verändert",
  topic: "Künstliche Intelligenz",
  minutes: 90,
  text: { lines: sim20Lines, wordCount: 847 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 20",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s20-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel, zu den jeweiligen Erklärungen / Abbildungen. Beachten Sie das angegebene Beispiel.",
      items: [
        {
          id: "s20-q1-algorithmus",
          prompt: "Regelwerk aus einzelnen Schritten, nach dem ein Computerprogramm Aufgaben löst",
          answer: "der Algorithmus",
          example: true,
        },
        {
          id: "s20-q1-gewerkschaft",
          prompt:
            "Zusammenarbeit zwischen Mitarbeitern und Arbeitgebern über Löhne und Arbeitszeiten, vertreten durch Organisationen der Arbeitnehmer",
          answer: "die Gewerkschaft",
        },
        {
          id: "s20-q1-produktivitaetsgewinn",
          prompt: "Zuwachs an Leistung, der in derselben Zeit oder mit demselben Aufwand erreicht wird",
          answer: "der Produktivitätsgewinn",
        },
      ],
    },

    {
      kind: "open",
      id: "s20-q2",
      number: "2",
      skill: "verstehen",
      points: 3,
      prompt:
        "Erklären Sie, worin sich die Wirkung der künstlichen Intelligenz von früherer Technik unterscheidet, und warum man zwischen Beruf und Aufgaben unterscheiden muss.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label: "Frühere Technik ersetzte vor allem körperliche Arbeit.",
          keywords: ["körperliche arbeit", "frühere technik", "körperlich"],
        },
        {
          id: "c2",
          label:
            "KI übernimmt zunehmend Tätigkeiten, die Wissen und Sprache erfordern (Texte, Verträge, Programmcode, Bilder).",
          keywords: ["wissen", "sprache", "texte", "verträge", "programmcode", "bilder"],
        },
        {
          id: "c3",
          label:
            "Selten verschwindet ein ganzer Beruf auf einmal; meist werden einzelne Aufgaben automatisiert, während andere bleiben, sodass sich die Tätigkeit verändert.",
          keywords: ["aufgaben", "beruf", "automatisiert", "bleiben", "verändert"],
        },
      ],
      sampleAnswer:
        "Anders als frühere Technik, die vor allem körperliche Arbeit ersetzte, übernimmt KI zunehmend Tätigkeiten, die Wissen und Sprache erfordern, etwa Texte entwerfen, Verträge prüfen, Programmcode schreiben oder Bilder auswerten. Davon sind auch Berufe betroffen, die bisher als sicher galten. Man muss zwischen Beruf und Aufgaben unterscheiden, weil selten ein ganzer Beruf auf einmal verschwindet: Meist werden nur einzelne Aufgaben automatisiert, während andere bleiben, sodass sich die Tätigkeit verändert.",
    },

    {
      kind: "open",
      id: "s20-q3",
      number: "3",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Grafik zeigt, wie viele Anfragen pro Stunde Beschäftigte eines Kundenservices ohne und mit KI-Unterstützung bearbeiteten. Ordnen Sie die Balken A, B und C den Gruppen „alle Beschäftigten (mit KI)“, „Neulinge (mit KI)“ und „erfahrene Kräfte (mit KI)“ zu und erklären Sie, was das Ergebnis über den Nutzen der KI aussagt.",
      chart: {
        kind: "bars",
        caption:
          "Veränderung der bearbeiteten Anfragen pro Stunde durch KI-Unterstützung (in Prozent)",
        unit: "Prozent",
        bars: [
          { label: "A", value: 34 },
          { label: "B", value: 14 },
          { label: "C", value: 1 },
        ],
      },
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label: "Balken A (+34 %) gehört zu den Neulingen.",
          keywords: ["a", "neulinge", "34"],
        },
        {
          id: "c2",
          label: "Balken B (+14 %) gehört zu allen Beschäftigten.",
          keywords: ["b", "alle beschäftigten", "14"],
        },
        {
          id: "c3",
          label: "Balken C (+1 %) gehört zu den erfahrenen Kräften.",
          keywords: ["c", "erfahrene", "1 prozent"],
        },
        {
          id: "c4",
          label:
            "Die KI hilft vor allem Anfängern, während erfahrene Kräfte kaum Vorteile haben; sie kann dadurch Unterschiede zwischen Anfängern und Experten verringern.",
          keywords: ["anfänger", "neulinge", "unterschiede", "experten", "verringern"],
        },
      ],
      sampleAnswer:
        "Balken A mit 34 Prozent gehört zu den Neulingen, Balken B mit 14 Prozent zu allen Beschäftigten und Balken C mit einem Prozent zu den erfahrenen Kräften. Die KI hilft also vor allem Anfängern, während erfahrene Kräfte kaum Vorteile haben; dadurch kann sie Unterschiede zwischen Anfängern und Experten verringern.",
    },

    {
      kind: "open",
      id: "s20-q4",
      number: "4",
      skill: "verstehen",
      points: 4,
      prompt:
        "Beschreiben Sie am Beispiel der Geldautomaten, wie sich Berufe durch Technik verändern können, und erklären Sie, warum dieser Verlauf bei KI nicht sicher ist.",
      minWords: 50,
      criteria: [
        {
          id: "c1",
          label: "Mit den Geldautomaten sank die Zahl der Beschäftigten pro Bankfiliale.",
          keywords: ["geldautomaten", "weniger personal", "pro filiale", "beschäftigten"],
        },
        {
          id: "c2",
          label:
            "Weil Filialen billiger zu betreiben waren, wurden mehr eröffnet, sodass die Gesamtzahl der Bankangestellten zunächst kaum sank.",
          keywords: ["mehr filialen", "gesamtzahl", "kaum", "billiger", "eröffnet"],
        },
        {
          id: "c3",
          label: "Die Aufgaben veränderten sich: weniger Schalterarbeit, mehr Beratung.",
          keywords: ["schalterarbeit", "beratung", "aufgaben", "veränderten"],
        },
        {
          id: "c4",
          label:
            "Bei KI ist der Verlauf ungewiss, weil sie sich viel schneller verbreitet und die Beschäftigten weniger Zeit haben, sich umzustellen.",
          keywords: ["geschwindigkeit", "schneller", "weniger zeit", "umstellen", "ungewiss"],
        },
      ],
      sampleAnswer:
        "Als Geldautomaten eingeführt wurden, sank die Zahl der Beschäftigten pro Filiale. Weil die Filialen billiger zu betreiben waren, wurden mehr eröffnet, sodass die Gesamtzahl der Bankangestellten zunächst kaum zurückging. Die Aufgaben veränderten sich: weniger Schalterarbeit, mehr Beratung. Ob sich das bei KI wiederholt, ist ungewiss, weil sie sich ungleich schneller verbreitet und die Beschäftigten weniger Zeit haben, sich umzustellen.",
    },

    {
      kind: "open",
      id: "s20-q5a",
      number: "5a",
      skill: "verstehen",
      points: 1,
      prompt:
        "Um wie viel Prozent bearbeiteten Beschäftigte mit KI-Unterstützung im Kundenservice im Schnitt mehr Anfragen pro Stunde?",
      minWords: 3,
      criteria: [
        {
          id: "c1",
          label: "Etwa 14 Prozent.",
          keywords: ["14 prozent", "vierzehn prozent"],
          numeric: [14, 14],
        },
      ],
      sampleAnswer: "Etwa 14 Prozent.",
    },

    {
      kind: "open",
      id: "s20-q5b",
      number: "5b",
      skill: "verstehen",
      points: 3,
      prompt:
        "Warum sind KI-Programme für ihre Nutzer nicht ohne Risiko? Erklären Sie das anhand des Beispiels aus dem Text.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Die Programme formulieren überzeugend, machen aber Fehler, die nicht auf den ersten Blick auffallen.",
          keywords: ["überzeugend", "fehler", "nicht auf den ersten blick", "auffallen"],
        },
        {
          id: "c2",
          label:
            "Ein Anwalt in den USA reichte Fälle ein, die ein Programm frei erfunden hatte, und wurde bestraft.",
          keywords: ["anwalt", "fälle", "erfunden", "bestraft", "usa"],
        },
        {
          id: "c3",
          label:
            "Verantwortlich bleibt der Mensch, deshalb muss er die Ergebnisse prüfen.",
          keywords: ["verantwortung", "mensch", "prüfen", "ergebnisse"],
        },
      ],
      sampleAnswer:
        "Die Programme formulieren zwar überzeugend, machen aber Fehler, die nicht sofort auffallen. Ein Anwalt in den USA reichte vor Gericht Fälle ein, die ein Programm frei erfunden hatte, und wurde dafür bestraft. Verantwortlich bleibt nicht die Maschine, sondern der Mensch; deshalb müssen Nutzer die Ergebnisse immer prüfen.",
    },

    {
      kind: "open",
      id: "s20-q6",
      number: "6",
      skill: "verstehen",
      points: 4,
      prompt:
        "Erklären Sie, welche Probleme automatische Entscheidungssysteme bei Bewerbungen verursachen können und wie der europäische AI Act darauf reagiert.",
      minWords: 50,
      criteria: [
        {
          id: "c1",
          label:
            "Das Programm lernt aus Daten der Vergangenheit, in denen überwiegend Männer eingestellt wurden.",
          keywords: ["vergangenheit", "daten", "männer", "eingestellt", "lernt"],
        },
        {
          id: "c2",
          label: "Es kann Frauen benachteiligen, ohne dass dies jemand beabsichtigt.",
          keywords: ["frauen", "benachteiligen", "ohne absicht", "beabsichtigt"],
        },
        {
          id: "c3",
          label: "Der AI Act stuft solche Systeme als Hochrisiko-Anwendungen ein.",
          keywords: ["ai act", "hochrisiko", "hochrisiko-anwendungen"],
        },
        {
          id: "c4",
          label:
            "Sie müssen dokumentiert, überwacht und von Menschen kontrolliert werden, bevor über Einstellung oder Entlassung entschieden wird.",
          keywords: ["dokumentiert", "überwacht", "kontrolliert", "menschen", "einstellung"],
        },
      ],
      sampleAnswer:
        "Wenn ein Programm mit Daten aus der Vergangenheit lernt, in denen überwiegend Männer eingestellt wurden, kann es Frauen benachteiligen, ohne dass jemand das beabsichtigt. Der europäische AI Act stuft solche Systeme deshalb als Hochrisiko-Anwendungen ein: Sie müssen dokumentiert, überwacht und von Menschen kontrolliert werden, bevor Entscheidungen über Einstellung oder Entlassung getroffen werden.",
    },

    {
      kind: "open",
      id: "s20-q7",
      number: "7",
      skill: "transfer",
      points: 4,
      prompt:
        "Ein mittelständisches Unternehmen möchte KI im Kundenservice einführen. Welche Chancen und welche Risiken ergeben sich nach dem Text, und welche Maßnahmen sollte das Unternehmen für seine Beschäftigten ergreifen?",
      minWords: 60,
      criteria: [
        {
          id: "c1",
          label:
            "Chance: Beschäftigte bearbeiten mehr Anfragen pro Stunde (im Schnitt etwa 14 Prozent), besonders profitieren Neulinge.",
          keywords: ["chance", "anfragen", "14 prozent", "neulinge", "produktivität"],
        },
        {
          id: "c2",
          label:
            "Risiken: Fehler, die nicht sofort auffallen; Berufseinsteiger sammeln weniger Erfahrung, wenn Anfängeraufgaben entfallen; Benachteiligung durch Algorithmen.",
          keywords: ["fehler", "erfahrung", "berufseinsteiger", "benachteiligung", "risiko"],
        },
        {
          id: "c3",
          label: "Maßnahme: Weiterbildung, für die Beschäftigte Zeit und Unterstützung brauchen.",
          keywords: ["weiterbildung", "zeit", "unterstützung", "werkzeuge"],
        },
        {
          id: "c4",
          label:
            "Maßnahmen: Ergebnisse prüfen und Produktivitätsgewinne gerecht verteilen, etwa durch kürzere Arbeitszeiten oder höhere Löhne; Beschäftigte von Anfang an einbeziehen.",
          keywords: ["prüfen", "gewinne", "arbeitszeiten", "löhne", "verteilen", "einbeziehen"],
        },
      ],
      sampleAnswer:
        "Die Chance liegt darin, dass Beschäftigte mit KI-Unterstützung im Schnitt etwa 14 Prozent mehr Anfragen pro Stunde bearbeiten, wobei besonders Neulinge profitieren. Zu den Risiken gehören Fehler der Programme, die nicht sofort auffallen, fehlende Erfahrungsmöglichkeiten für Berufseinsteiger und mögliche Benachteiligung durch Algorithmen. Das Unternehmen sollte deshalb in Weiterbildung investieren und den Beschäftigten dafür Zeit und Unterstützung geben, sie von Anfang an einbeziehen, die Ergebnisse prüfen und die Produktivitätsgewinne gerecht verteilen, etwa durch kürzere Arbeitszeiten oder höhere Löhne.",
    },

    {
      kind: "truefalse",
      id: "s20-q8",
      number: "8",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind. Beachten Sie als Muster das angegebene Beispiel.",
      example: {
        text: "Die Weber in England freuten sich über die neuen Dampfwebstühle.",
        correct: false,
        justification:
          "Im Text heißt es, dass sie aus Angst um ihre Arbeitsplätze Maschinen zerstörten.",
      },
      statements: [
        {
          id: "s20-q8-1",
          text: "Berufe mit Körpergeschick, Verantwortung und menschlicher Nähe gelten als weniger gefährdet.",
          correct: true,
          justification: "Im Text: Pflege, Handwerk, Erziehung gelten als weniger gefährdet. (1 P)",
        },
        {
          id: "s20-q8-2",
          text: "Bei KI haben die Beschäftigten mehr Zeit, sich umzustellen, als bei früheren Technologien.",
          correct: false,
          justification:
            "Im Text: Die Geschwindigkeit der KI-Verbreitung ist ungleich höher, die Beschäftigten haben weniger Zeit. (1 P)",
        },
        {
          id: "s20-q8-3",
          text: "Die Preise pro Wort für Übersetzungen sinken, obwohl Übersetzer in derselben Zeit mehr schaffen.",
          correct: true,
          justification: "Im Text: Dadurch schafft sie mehr, doch die Preise pro Wort sinken. (1 P)",
        },
        {
          id: "s20-q8-4",
          text: "Der europäische AI Act verbietet jede automatische Auswahl von Bewerbungen.",
          correct: false,
          justification:
            "Der AI Act stuft solche Systeme als Hochrisiko-Anwendungen ein, die kontrolliert werden müssen; er verbietet sie nicht. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s20-sa",
      label: "A",
      points: 2,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt:
        "Ein Radiologe, dessen Bilder von einem Programm vorsortiert werden, hat mehr Zeit für Gespräche mit Patienten.",
      highlight: "dessen Bilder von einem Programm vorsortiert werden",
      template: { before: "", after: " hat mehr Zeit für Gespräche mit Patienten." },
      solutions: ["Ein Radiologe mit von einem Programm vorsortierten Bildern"],
      explanation:
        "La relative au génitif « dessen Bilder … vorsortiert werden » devient un groupe prépositionnel avec participe II : « mit von einem Programm vorsortierten Bildern ». Le participe et l'adjectif prennent la terminaison faible -en après « mit » au datif pluriel.",
      modelAnswer:
        "Ein Radiologe mit von einem Programm vorsortierten Bildern hat mehr Zeit für Gespräche mit Patienten.",
    },
    {
      id: "s20-sb",
      label: "B",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt: "Weil Filialen billiger zu betreiben waren, wurden mehr eröffnet.",
      highlight: "Weil Filialen billiger zu betreiben waren",
      template: { before: "", after: ", wurden mehr eröffnet." },
      solutions: [
        "Wegen des billigeren Betriebs der Filialen",
        "Aufgrund des billigeren Betriebs der Filialen",
      ],
      explanation:
        "La causale « weil … billiger zu betreiben waren » devient « wegen / aufgrund + génitif ». Le verbe « betreiben » se nominalise en « Betrieb », le comparatif devient « billigeren » et le sujet passe au génitif « der Filialen ».",
      modelAnswer: "Wegen des billigeren Betriebs der Filialen wurden mehr eröffnet.",
    },
    {
      id: "s20-sc",
      label: "C",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Beschäftigte brauchen Zeit und Unterstützung, um mit den neuen Werkzeugen zu arbeiten.",
      highlight: "um mit den neuen Werkzeugen zu arbeiten",
      template: { before: "Beschäftigte brauchen Zeit und Unterstützung ", after: "." },
      solutions: [
        "zur Arbeit mit den neuen Werkzeugen",
        "für die Arbeit mit den neuen Werkzeugen",
      ],
      explanation:
        "La finale « um … zu arbeiten » se nominalise en « zur / für die Arbeit mit … ». La complémentation prépositionnelle « mit den neuen Werkzeugen » est conservée telle quelle.",
      modelAnswer:
        "Beschäftigte brauchen Zeit und Unterstützung zur Arbeit mit den neuen Werkzeugen.",
    },
    {
      id: "s20-sd",
      label: "D",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt:
        "Gespräche mit Menschen und Arbeiten in wechselnder Umgebung lassen sich schwer automatisieren.",
      highlight: "lassen sich schwer automatisieren",
      template: {
        before: "Gespräche mit Menschen und Arbeiten in wechselnder Umgebung ",
        after: ".",
      },
      solutions: ["können nur schwer automatisiert werden", "sind schwer automatisierbar"],
      explanation:
        "« sich lassen + infinitif » est un substitut de passif. Les équivalents sont le passif avec « können » (« können nur schwer automatisiert werden ») ou l'adjectif en -bar (« sind schwer automatisierbar »). Le sujet pluriel reste identique.",
      modelAnswer:
        "Gespräche mit Menschen und Arbeiten in wechselnder Umgebung können nur schwer automatisiert werden.",
    },
    {
      id: "s20-se",
      label: "E",
      points: 1,
      type: "bezug",
      instruction: "Antworten Sie in einem vollständigen Satz.",
      prompt:
        "Worauf bezieht sich „Dadurch“ in dem Satz „Dadurch schafft sie in derselben Zeit deutlich mehr“?",
      criteria: [
        {
          id: "c1",
          label:
            "„Dadurch“ bezieht sich darauf, dass die Übersetzerin einen ersten Entwurf vom Programm erhält und ihn nur noch korrigiert.",
          keywords: ["entwurf", "programm", "korrigiert", "übersetzerin", "liefern"],
        },
      ],
      explanation:
        "« Dadurch » reprend l'utilisation du programme : la traductrice reçoit un premier jet et ne fait plus que le corriger, ce qui lui permet de produire davantage dans le même temps.",
      modelAnswer:
        "„Dadurch“ bezieht sich darauf, dass die Übersetzerin einen ersten Entwurf vom Programm bekommt und ihn nur noch korrigiert.",
    },
    {
      id: "s20-sf",
      label: "F",
      points: 3,
      type: "konnektor",
      instruction: REWRITE,
      prompt:
        "Obwohl die Programme überzeugend formulieren, machen sie Fehler, die nicht auf den ersten Blick auffallen.",
      highlight: "Obwohl die Programme überzeugend formulieren",
      template: { before: "", after: ", machen sie Fehler, die nicht auf den ersten Blick auffallen." },
      solutions: [
        "Trotz ihrer überzeugenden Formulierungen",
        "Trotz der überzeugenden Formulierungen der Programme",
      ],
      explanation:
        "La concession « obwohl » devient « trotz + génitif ». Le verbe « formulieren » se nominalise en « Formulierungen » avec l'adjectif « überzeugend » ; le déterminant possessif « ihrer » ou le génitif « der Programme » est requis.",
      modelAnswer:
        "Trotz ihrer überzeugenden Formulierungen machen sie Fehler, die nicht auf den ersten Blick auffallen.",
    },
    {
      id: "s20-sg",
      label: "G",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Wenn das Programm mit Daten aus der Vergangenheit lernt, kann es Frauen benachteiligen.",
      highlight: "Wenn das Programm mit Daten aus der Vergangenheit lernt",
      template: { before: "", after: ", kann es Frauen benachteiligen." },
      solutions: [
        "Beim Lernen mit Daten aus der Vergangenheit",
        "Bei einem Lernen mit Daten aus der Vergangenheit",
      ],
      explanation:
        "La condition « wenn … lernt » se transforme en groupe prépositionnel « bei + nominalisation » : « beim Lernen mit Daten aus der Vergangenheit ». Le complément « mit Daten aus der Vergangenheit » est conservé.",
      modelAnswer:
        "Beim Lernen mit Daten aus der Vergangenheit kann es Frauen benachteiligen.",
    },
  ],
};
