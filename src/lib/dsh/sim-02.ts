import { sim02Lines } from "@/lib/dsh/texts";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim02: DshSimulation = {
  id: "sim-02",
  number: 2,
  slug: "der-zweite-blick-der-maschine",
  title: "Der zweite Blick der Maschine",
  subtitle: "Künstliche Intelligenz in der medizinischen Diagnostik",
  topic: "KI & Medizin",
  minutes: 90,
  text: { lines: sim02Lines, wordCount: 894 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 02",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s2-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel.",
      items: [
        {
          id: "s2-q1-mammographie",
          prompt: "Röntgenuntersuchung der Brust zur Früherkennung von Tumoren",
          answer: "die Mammographie",
          example: true,
        },
        {
          id: "s2-q1-netz",
          prompt: "Abbildung: mehrere Rechenschichten, die Informationen weitergeben",
          answer: "das neuronale Netz",
          accepted: ["das neuronale Netz", "das künstliche neuronale Netz"],
          illustration: "neuronales-netz",
        },
        {
          id: "s2-q1-sensitivitaet",
          prompt:
            "Anteil der tatsächlich Erkrankten, die von einem Testverfahren als krank erkannt werden",
          answer: "die Sensitivität",
        },
        {
          id: "s2-q1-heatmap",
          prompt:
            "farbige Darstellung, die zeigt, welche Bildbereiche für das Ergebnis eines Systems ausschlaggebend waren",
          answer: "die Heatmap",
        },
      ],
    },

    {
      kind: "open",
      id: "s2-q2",
      number: "2",
      skill: "verstehen",
      points: 3,
      prompt:
        "Erklären Sie den Begriff „Verzerrung“ (bias) am Beispiel eines Systems zur Bildanalyse.",
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label: "Ursache: einseitige, nicht vielfältige Trainingsdaten.",
          keywords: ["trainingsdaten", "einseitig", "vielfalt", "vielfältig"],
        },
        {
          id: "c2",
          label: "Beispiel: nur ein Gerätetyp oder eine Patientengruppe.",
          keywords: ["gerätetyp", "geräten", "patientengruppe", "bevölkerungsgruppe"],
        },
        {
          id: "c3",
          label: "Folge: die Trefferquote sinkt bei anderen Geräten oder Gruppen.",
          keywords: ["trefferquote", "sinkt", "schlechter"],
        },
      ],
      sampleAnswer:
        "Eine Verzerrung entsteht, wenn die Trainingsdaten nicht vielfältig genug sind. Wurde ein Netz zum Beispiel überwiegend mit Aufnahmen eines einzigen Gerätetyps oder einer einzigen Patientengruppe trainiert, funktioniert es dort gut. Bei anderen Geräten oder Bevölkerungsgruppen sinkt die Trefferquote dagegen deutlich.",
    },

    {
      kind: "open",
      id: "s2-q3",
      number: "3",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Grafik zeigt, wie die Sensitivität eines Testsystems von der Zahl der Trainingsaufnahmen abhängt. Für die Punkte A und B fehlen die Werte. Geben Sie nach dem Text die ungefähren Werte an und erklären Sie, warum die Kurve am Ende kaum noch ansteigt.",
      chart: {
        kind: "curve",
        caption:
          "Sensitivität eines Testsystems für Lungenrundherde in Abhängigkeit von der Zahl der Trainingsaufnahmen (schematisch)",
        xLabel: "Trainingsaufnahmen",
        yLabel: "Sensitivität in %",
        points: [
          { label: "10.000", value: 72 },
          { label: "A · 100.000", value: null },
          { label: "B · 500.000", value: null },
          { label: "1 Mio.", value: 92 },
        ],
      },
      minWords: 45,
      criteria: [
        { id: "c1", label: "Punkt A liegt bei etwa 88 Prozent.", numeric: [86, 90] },
        { id: "c2", label: "Punkt B liegt bei etwa 91 Prozent.", numeric: [89, 93] },
        {
          id: "c3",
          label: "Die Kurve flacht ab, der Zuwachs wird immer geringer.",
          keywords: ["flacht", "kaum", "zuwachs", "sättigung", "geringer"],
        },
        {
          id: "c4",
          label:
            "Entscheidend sind dann Vielfalt und korrekte Beschriftung der Daten statt der Menge.",
          keywords: ["vielfalt", "beschriftung", "qualität"],
        },
      ],
      sampleAnswer:
        "Punkt A (100.000 Aufnahmen): etwa 88 Prozent. Punkt B (500.000 Aufnahmen): etwa 91 Prozent. Die Kurve flacht ab, weil zusätzliches Material ab einer bestimmten Menge kaum noch etwas bringt: Dann sind nicht mehr die Menge, sondern die Vielfalt und die korrekte Beschriftung der Daten entscheidend.",
    },

    {
      kind: "open",
      id: "s2-q4a",
      number: "4a",
      skill: "verstehen",
      points: 1,
      prompt: "Wer trägt nach dem Text rechtlich die Verantwortung für die Diagnose?",
      minWords: 5,
      criteria: [
        {
          id: "c1",
          label: "Die behandelnde Ärztin bzw. der behandelnde Arzt; der Algorithmus ist nur Hilfsmittel.",
          keywords: ["ärztin", "arzt", "behandelnde"],
        },
      ],
      sampleAnswer:
        "Die behandelnde Ärztin bzw. der behandelnde Arzt; der Algorithmus gilt nur als Hilfsmittel.",
    },

    {
      kind: "open",
      id: "s2-q4b",
      number: "4b",
      skill: "verstehen",
      points: 2,
      prompt:
        "Was versteht man unter dem „Automatisierungsbias“, und was wird empfohlen, um ihm vorzubeugen?",
      minWords: 35,
      criteria: [
        {
          id: "c1",
          label:
            "Man übernimmt Vorschläge eines Systems, dem man vertraut, auch wenn sie falsch sind.",
          keywords: ["vertraut", "übernehmen", "falsch"],
        },
        {
          id: "c2",
          label:
            "Empfehlung: zuerst ein eigenes Urteil bilden, erst danach den Vorschlag ansehen.",
          keywords: ["eigenes urteil", "zuerst", "erst danach"],
        },
      ],
      sampleAnswer:
        "Gemeint ist die Neigung, Vorschläge eines Systems zu übernehmen, dem man häufig vertraut hat, auch wenn sie falsch sind. Um dies zu vermeiden, sollen Ärzte zuerst ein eigenes Urteil bilden und erst danach den Vorschlag des Systems ansehen.",
    },

    {
      kind: "open",
      id: "s2-q5",
      number: "5",
      skill: "verstehen",
      points: 3,
      prompt:
        "Beschreiben Sie, wie das föderierte Lernen funktioniert und warum es für den Datenschutz vorteilhaft ist.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label: "Das Modell geht zu den Kliniken, statt die Bilder an einen zentralen Server zu schicken.",
          keywords: ["modell", "kliniken", "zentralen server", "server"],
        },
        {
          id: "c2",
          label: "Es lernt lokal, nur die veränderten Gewichte werden zurückgegeben und zusammengeführt.",
          keywords: ["lokal", "gewichte", "zusammengeführt"],
        },
        {
          id: "c3",
          label: "Die Patientendaten verlassen die Klinik nicht.",
          keywords: ["patientendaten", "verlassen", "im haus", "datenschutz"],
        },
      ],
      sampleAnswer:
        "Beim föderierten Lernen werden die Bilder nicht an einen zentralen Server geschickt. Stattdessen wird das Modell zu den einzelnen Kliniken gebracht, lernt dort lokal und gibt nur die veränderten Gewichte zurück, die dann zusammengeführt werden. Für den Datenschutz ist das vorteilhaft, weil die Patientendaten die Klinik nicht verlassen.",
    },

    {
      kind: "open",
      id: "s2-q6",
      number: "6",
      skill: "verstehen",
      points: 3,
      prompt:
        "Warum wird ein tiefes neuronales Netz als „Blackbox“ bezeichnet, und wie kann eine Heatmap helfen, Fehler aufzudecken?",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Der Entscheidungsweg ist nicht nachvollziehbar; man weiß nicht, welche Merkmale ausschlaggebend waren.",
          keywords: ["nachvollziehbar", "nicht erklären", "merkmale", "blackbox"],
        },
        {
          id: "c2",
          label: "Die Heatmap zeigt farbig die ausschlaggebenden Bildbereiche.",
          keywords: ["heatmap", "bildbereiche", "farbig"],
        },
        {
          id: "c3",
          label:
            "So lassen sich Scheinzusammenhänge aufdecken, z. B. eine Markierung am Bildrand.",
          keywords: ["scheinzusammenhang", "markierung", "bildrand"],
        },
      ],
      sampleAnswer:
        "Das Netz liefert ein Ergebnis, ohne dass sich im Einzelnen erklären lässt, welche Merkmale es für ausschlaggebend hielt. Eine Heatmap stellt farbig dar, welche Bildbereiche den Ausschlag gaben. So kann man erkennen, dass ein System zum Beispiel auf eine Markierung am Bildrand statt auf das Gewebe reagiert, also einen Scheinzusammenhang nutzt.",
    },

    {
      kind: "open",
      id: "s2-q7",
      number: "7",
      skill: "transfer",
      points: 4,
      prompt:
        "Ein kleines Krankenhaus in einer ländlichen Region hat keinen eigenen Facharzt für Radiologie, sondern nur eine Hausärztin, die Aufnahmen vorbefundet. Erklären Sie möglichst genau, auf welche Weise ein solches System dort nützlich sein könnte und welche Grenzen oder Risiken zu beachten wären.",
      minWords: 60,
      criteria: [
        {
          id: "c1",
          label:
            "Nutzen: auffällige Bildbereiche markieren und eine Wahrscheinlichkeit angeben – Hilfe bei der Einschätzung.",
          keywords: ["markier", "wahrscheinlichkeit", "hilfe", "unterstütz"],
        },
        {
          id: "c2",
          label:
            "Nutzen: Aufnahmen priorisieren, Verdachtsfälle vorziehen, kürzere Wartezeit.",
          keywords: ["priorisier", "vorgezogen", "wartezeit"],
        },
        {
          id: "c3",
          label:
            "Risiko: Verantwortung bleibt bei der Ärztin, Gefahr des Automatisierungsbias.",
          keywords: ["verantwortung", "automatisierungsbias", "blind vertrauen"],
        },
        {
          id: "c4",
          label:
            "Grenze: auf eine Aufgabe spezialisiert, seltene Erkrankungen werden schlechter erkannt.",
          keywords: ["spezialisiert", "seltene erkrankungen", "selten"],
        },
      ],
      sampleAnswer:
        "Das System könnte auffällige Bildbereiche markieren und eine Wahrscheinlichkeit angeben, sodass die Ärztin eine Hilfe für ihre Einschätzung hat. Außerdem könnte es Aufnahmen priorisieren: Verdachtsfälle mit hohem Wert würden vorgezogen, sodass sich die Wartezeit auf den endgültigen Befund verkürzt. Zu beachten wäre, dass die Verantwortung weiterhin bei der Ärztin bliebe, dass sie dem System nicht blind vertrauen darf (Automatisierungsbias) und dass das System nur für seine eine Aufgabe trainiert ist und seltene Erkrankungen oder andere Befunde übersehen kann.",
    },

    {
      kind: "open",
      id: "s2-q8",
      number: "8",
      skill: "verstehen",
      points: 3,
      prompt:
        "Nennen Sie drei Gründe, die den dauerhaften Einsatz eines solchen Systems einschränken oder erschweren können.",
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label: "Das System ist auf eine Aufgabe spezialisiert und übersieht anderes.",
          keywords: ["spezialisiert", "übersieht", "eine aufgabe"],
        },
        {
          id: "c2",
          label: "Seltene Erkrankungen sind in den Trainingsdaten kaum vertreten.",
          keywords: ["seltene erkrankungen", "selten", "trainingsdaten"],
        },
        {
          id: "c3",
          label:
            "Geänderte Geräte oder Protokolle erfordern Nachtraining und erneute Prüfung; Lizenzkosten.",
          keywords: ["nachtrain", "protokoll", "lizenzkosten", "geräte"],
        },
      ],
      sampleAnswer:
        "(1) Das System ist meist auf eine einzige Aufgabe spezialisiert und übersieht anderes. (2) Seltene Erkrankungen werden schlechter erkannt, weil sie in den Trainingsdaten kaum vorkommen. (3) Wenn sich Geräte oder Aufnahmeprotokolle ändern, muss nachtrainiert und erneut geprüft werden. (4) Die Lizenzkosten von ein bis fünf Euro je Untersuchung lohnen sich nur, wenn Zeit gespart wird.",
    },

    {
      kind: "truefalse",
      id: "s2-q9",
      number: "9",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind.",
      example: {
        text: "Ein neuronales Netz wird Schritt für Schritt von Programmierern mit festen Regeln ausgestattet.",
        correct: false,
        justification:
          "Im Text: Netze werden nicht Schritt für Schritt programmiert, sondern lernen anhand von Beispielen.",
      },
      statements: [
        {
          id: "s2-q9-1",
          text: "In der Vergleichsstudie sank durch die Unterstützung des Algorithmus die Zahl der falsch-positiven Befunde deutlich.",
          correct: false,
          justification:
            "Die Zahl der falsch-positiven Befunde blieb nahezu unverändert. (1 P)",
        },
        {
          id: "s2-q9-2",
          text: "Nach Ansicht von Fachleuten werden Radiologen durch solche Systeme in Zukunft ersetzt.",
          correct: false,
          justification:
            "Fachleute erwarten, dass Radiologen nicht ersetzt werden, sondern sich ihr Berufsbild verändert. (1 P)",
        },
        {
          id: "s2-q9-3",
          text: "Die Wartezeit für Verdachtsfälle verkürzte sich im Pilotbetrieb von durchschnittlich sieben auf zwei Tage.",
          correct: true,
          justification: "Genau so im Text genannt. (1 P)",
        },
        {
          id: "s2-q9-4",
          text: "Eine Wiedererkennung von Patienten lässt sich auch bei anonymisierten Bildern nie ganz ausschließen, zum Beispiel bei Kopfaufnahmen.",
          correct: true,
          justification:
            "Im Text: Völlig ausschließen lässt sich eine Wiedererkennung nicht, etwa bei Kopfaufnahmen. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s2-sa",
      label: "A",
      points: 2,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt: "Das Programm markiert Bildbereiche, die auffällig erscheinen.",
      highlight: "die auffällig erscheinen",
      template: { before: "Das Programm markiert ", after: "." },
      solutions: ["auffällig erscheinende Bildbereiche"],
      explanation:
        "La relative « die auffällig erscheinen » devient un participe I attribut : « erscheinende ». Comme le groupe est au pluriel à l'accusatif, l'adjectif prend la terminaison -e et l'adverbe « auffällig » reste invariable devant le participe.",
      modelAnswer: "Das Programm markiert auffällig erscheinende Bildbereiche.",
    },
    {
      id: "s2-sb",
      label: "B",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt:
        "Ein tiefes neuronales Netz liefert ein Ergebnis, ohne dass sich im Einzelnen erklären lässt, welche Merkmale es ausschlaggebend fand.",
      highlight: "ohne dass sich im Einzelnen erklären lässt",
      template: {
        before:
          "Ein tiefes neuronales Netz liefert ein Ergebnis, ohne dass ",
        after: ", welche Merkmale es ausschlaggebend fand.",
      },
      solutions: [
        "es im Einzelnen erklärt werden kann",
        "es im Einzelnen erklärbar ist",
        "sich das im Einzelnen nicht erklären lässt",
      ],
      explanation:
        "« sich erklären lässt » est un substitut de passif. Dans la subordonnée en « ohne dass », le verbe conjugué va en fin de phrase : « … erklärt werden kann » ou « … erklärbar ist ».",
      modelAnswer:
        "Ein tiefes neuronales Netz liefert ein Ergebnis, ohne dass es im Einzelnen erklärt werden kann, welche Merkmale es ausschlaggebend fand.",
    },
    {
      id: "s2-sc",
      label: "C",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Da Gesundheitsdaten besonders schützenswert sind, unterliegt ihre Verarbeitung strengen gesetzlichen Auflagen.",
      highlight: "Da Gesundheitsdaten besonders schützenswert sind",
      template: {
        before: "",
        after: ", unterliegt ihre Verarbeitung strengen gesetzlichen Auflagen.",
      },
      solutions: [
        "Aufgrund der besonderen Schutzwürdigkeit von Gesundheitsdaten",
        "Wegen der besonderen Schutzwürdigkeit der Gesundheitsdaten",
        "Infolge der besonderen Schutzwürdigkeit von Gesundheitsdaten",
      ],
      explanation:
        "La subordonnée causale devient un groupe prépositionnel au génitif. L'adjectif « schützenswert » se nominalise en « Schutzwürdigkeit », accompagné de « besondere ». « von Gesundheitsdaten » ou le génitif « der Gesundheitsdaten » sont acceptés.",
      modelAnswer:
        "Aufgrund der besonderen Schutzwürdigkeit von Gesundheitsdaten unterliegt ihre Verarbeitung strengen gesetzlichen Auflagen.",
    },
    {
      id: "s2-sd",
      label: "D",
      points: 2,
      type: "konnektor",
      instruction: REWRITE,
      prompt:
        "Vor der Zulassung müssen die Hersteller die Wirksamkeit ihrer Programme nachweisen.",
      highlight: "Vor der Zulassung",
      template: {
        before: "",
        after:
          ", müssen die Hersteller die Wirksamkeit ihrer Programme nachweisen.",
      },
      solutions: [
        "Bevor die Programme zugelassen werden",
        "Bevor sie zugelassen werden",
        "Ehe die Programme zugelassen werden",
      ],
      explanation:
        "Le groupe prépositionnel « vor der Zulassung » se verbalise en subordonnée temporelle avec « bevor / ehe ». Le verbe est au passif et se place en fin de subordonnée : « bevor die Programme zugelassen werden ».",
      modelAnswer:
        "Bevor die Programme zugelassen werden, müssen die Hersteller die Wirksamkeit ihrer Programme nachweisen.",
    },
    {
      id: "s2-se",
      label: "E",
      points: 2,
      type: "konjunktiv",
      instruction: "Beantworten Sie die Frage in zwei bis drei vollständigen Sätzen.",
      prompt:
        "„Solche Scheinzusammenhänge hätten ohne eine Heatmap unentdeckt bleiben können.“ Warum steht in diesem Satz „hätten … bleiben können“ und nicht „konnten … bleiben“?",
      criteria: [
        {
          id: "c1",
          label:
            "Konjunktiv II du passé : condition irréelle, qui ne s'est pas réalisée.",
          keywords: ["konjunktiv", "irreal", "nicht eingetreten", "wäre", "hätte"],
        },
        {
          id: "c2",
          label:
            "Rapport au contenu : sans la Heatmap, les erreurs seraient restées invisibles ; elle les a révélées.",
          keywords: ["heatmap", "unentdeckt", "entdeckt", "aufgedeckt"],
        },
      ],
      explanation:
        "« hätten … bleiben können » est un Konjunktiv II du passé. Il exprime une condition irréelle dans le passé : sans la Heatmap, les faux liens seraient restés invisibles — mais ils ont bel et bien été découverts.",
      modelAnswer:
        "Der Konjunktiv II der Vergangenheit drückt aus, dass etwas nicht eingetreten ist: Ohne die Heatmap wären die Scheinzusammenhänge unentdeckt geblieben, aber mit ihr wurden sie tatsächlich entdeckt. Es handelt sich also um eine irreale Bedingung in der Vergangenheit.",
    },
    {
      id: "s2-sf",
      label: "F",
      points: 1,
      type: "bezug",
      instruction: "Antworten Sie in einem vollständigen Satz.",
      prompt:
        "„Wer einem System häufig vertraut hat, neigt dazu, dessen Vorschläge zu übernehmen, selbst wenn sie falsch sind.“ Worauf beziehen sich „dessen“ und „sie“?",
      criteria: [
        {
          id: "c1",
          label: "« dessen » renvoie à « einem System », « sie » à « Vorschläge ».",
          keywords: ["system", "vorschläge"],
        },
      ],
      explanation:
        "« dessen » est un déterminant possessif au génitif qui reprend « einem System » ; « sie » reprend le nom pluriel « Vorschläge ». Les deux références doivent être justes pour obtenir le point.",
      modelAnswer:
        "„dessen“ bezieht sich auf „einem System“, „sie“ auf „Vorschläge“.",
    },
    {
      id: "s2-sg",
      label: "G",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Die Wartezeit für Verdachtsfälle verkürzt sich, indem Aufnahmen mit hohem Wert vorgezogen werden.",
      highlight: "indem Aufnahmen mit hohem Wert vorgezogen werden",
      template: {
        before: "Die Wartezeit für Verdachtsfälle verkürzt sich ",
        after: ".",
      },
      solutions: [
        "durch das Vorziehen von Aufnahmen mit hohem Wert",
        "durch die Vorrangbehandlung von Aufnahmen mit hohem Wert",
        "durch das Vorziehen der Aufnahmen mit hohem Wert",
      ],
      explanation:
        "La subordonnée en « indem » se nominalise avec « durch + accusatif » : « das Vorziehen von Aufnahmen … ». Le verbe « vorziehen » devient le nom neutre « das Vorziehen », suivi d'un complément au génitif ou en « von ».",
      modelAnswer:
        "Die Wartezeit für Verdachtsfälle verkürzt sich durch das Vorziehen von Aufnahmen mit hohem Wert.",
    },
  ],
};
