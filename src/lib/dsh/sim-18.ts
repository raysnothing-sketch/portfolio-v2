import { sim18Lines } from "@/lib/dsh/texts-18";
import type { DshSimulation } from "@/lib/dsh/types";

const REWRITE =
  "Formulieren Sie den folgenden Satz mit anderen sprachlichen Mitteln. Verändern Sie dabei den Inhalt nicht. Beachten Sie den hervorgehobenen Textteil.";

export const sim18: DshSimulation = {
  id: "sim-18",
  number: 18,
  slug: "sekunden-die-leben-retten",
  title: "Sekunden, die Leben retten",
  subtitle: "Geophysik · Erdbebenfrühwarnung und Bauvorsorge",
  topic: "Geophysik",
  minutes: 90,
  text: { lines: sim18Lines, wordCount: 887 },
  source: "Begleitheft „20 Prüfungssimulationen“ · Simulation 18",

  leseverstehen: [
    {
      kind: "vocab",
      id: "s18-q1",
      number: "1",
      points: 3,
      prompt:
        "In der Tabelle werden Wörter aus dem Text erklärt bzw. dargestellt. Ergänzen Sie die fehlenden Wörter, bei Nomen mit dem richtigen Artikel, zu den jeweiligen Erklärungen / Abbildungen. Beachten Sie das angegebene Beispiel.",
      items: [
        {
          id: "s18-q1-epizentrum",
          prompt: "Punkt an der Erdoberfläche, der direkt über dem Herd eines Erdbebens liegt",
          answer: "das Epizentrum",
          example: true,
        },
        {
          id: "s18-q1-schwellenwert",
          prompt: "Grenzwert, bei dessen Überschreiten ein Alarm ausgelöst wird",
          answer: "der Schwellenwert",
        },
        {
          id: "s18-q1-fehlalarm",
          prompt: "Warnung, die ausgelöst wird, obwohl kein gefährliches Ereignis bevorsteht",
          answer: "der Fehlalarm",
        },
      ],
    },

    {
      kind: "open",
      id: "s18-q2",
      number: "2",
      skill: "verstehen",
      points: 3,
      prompt:
        "Worin unterscheiden sich P-Wellen und S-Wellen, und wie macht sich die Frühwarnung diesen Unterschied zunutze?",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label: "P-Wellen sind schneller (etwa 6 km/s) als S-Wellen (rund 3,5 km/s).",
          keywords: ["p-wellen", "schneller", "sechs kilometern", "6 kilometern", "3,5 kilometern"],
        },
        {
          id: "c2",
          label:
            "P-Wellen richten meist nur geringe Schäden an, S-Wellen verursachen die stärksten Bodenbewegungen und den größten Teil der Zerstörungen.",
          keywords: ["geringe schäden", "stärksten bodenbewegungen", "zerstörungen", "schadenswirkung"],
        },
        {
          id: "c3",
          label:
            "Die Frühwarnung misst die zuerst eintreffenden P-Wellen und löst den Alarm aus, bevor die S-Wellen den Ort erreichen.",
          keywords: ["p-welle", "zuerst", "alarm", "bevor", "s-wellen"],
        },
      ],
      sampleAnswer:
        "Die P-Wellen laufen mit etwa sechs Kilometern pro Sekunde schneller als die S-Wellen mit rund 3,5 Kilometern pro Sekunde, richten aber meist nur geringe Schäden an. Die langsameren S-Wellen verursachen die stärksten Bodenbewegungen und den größten Teil der Zerstörungen. Ein Frühwarnsystem registriert die zuerst eintreffenden P-Wellen und löst den Alarm aus, bevor die gefährlichen S-Wellen den Ort erreichen.",
    },

    {
      kind: "open",
      id: "s18-q3",
      number: "3",
      skill: "grafik",
      points: 4,
      prompt:
        "Die Grafik zeigt die Laufzeit zweier Erdbebenwellen. Kurve 1 steigt steiler an als Kurve 2; die abgebildeten Werte gehören zu Kurve 2. Ordnen Sie die Kurven 1 und 2 den Wellentypen zu und begründen Sie Ihre Zuordnung. Lesen Sie für Kurve 2 ab, nach wie vielen Sekunden die Hauptstadt (120 Kilometer) von der zerstörerischen Welle erreicht wird (Punkt „?“), und berechnen Sie mit Hilfe des Textes die Warnzeit.",
      chart: {
        kind: "curve",
        caption: "Laufzeit zweier Erdbebenwellen (schematisch)",
        xLabel: "Zeit (Sekunden)",
        yLabel: "Entfernung vom Epizentrum (Kilometer)",
        points: [
          { label: "0 s", value: 0 },
          { label: "10 s", value: 35 },
          { label: "20 s", value: 70 },
          { label: "?", value: 120 },
          { label: "50 s", value: 175 },
        ],
      },
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label:
            "Kurve 1 ist die P-Welle, Kurve 2 die S-Welle; die schnellere P-Welle legt in gleicher Zeit mehr Strecke zurück, ihre Kurve steigt also steiler an.",
          keywords: ["kurve 1", "p-welle", "steiler", "geschwindigkeit", "schneller"],
        },
        {
          id: "c2",
          label: "Die S-Welle erreicht die Hauptstadt nach etwa 34 Sekunden.",
          numeric: [33, 35],
        },
        {
          id: "c3",
          label: "Der Alarm wird nach rund acht Sekunden ausgelöst (aus dem Text).",
          numeric: [7, 9],
        },
        {
          id: "c4",
          label: "Die Warnzeit beträgt etwa 26 Sekunden (34 minus 8).",
          numeric: [25, 27],
        },
      ],
      sampleAnswer:
        "Kurve 1 gehört zur P-Welle, Kurve 2 zur S-Welle: Die P-Welle ist mit rund sechs Kilometern pro Sekunde schneller und legt in derselben Zeit eine größere Strecke zurück, deshalb ist ihre Kurve steiler. Für die 120 Kilometer bis zur Hauptstadt braucht die S-Welle etwa 34 Sekunden. Der Alarm wird laut Text rund acht Sekunden nach Bebenbeginn ausgelöst, sodass eine Warnzeit von etwa 26 Sekunden bleibt.",
    },

    {
      kind: "open",
      id: "s18-q4",
      number: "4",
      skill: "verstehen",
      points: 3,
      prompt:
        "Erklären Sie den Begriff „tote Zone“ am Beispiel des im Text beschriebenen Messnetzes.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label: "Bereich rund um das Epizentrum, in dem keine Warnung mehr möglich ist.",
          keywords: ["bereich um das epizentrum", "um das epizentrum", "keine warnung", "tote zone"],
        },
        {
          id: "c2",
          label: "Grund: Die S-Wellen treffen dort ein, bevor das System den Alarm auslösen kann.",
          keywords: ["s-wellen", "bevor", "alarm", "ausgewertet"],
        },
        {
          id: "c3",
          label:
            "Beispiel: Radius etwa 30 Kilometer; der Alarm kommt nach rund acht Sekunden, die S-Wellen legen in dieser Zeit rund 28 Kilometer zurück.",
          keywords: ["30 kilometer", "acht sekunden", "28 kilometer", "radius"],
          numeric: [28, 32],
        },
      ],
      sampleAnswer:
        "Als tote Zone bezeichnet man den Bereich rund um das Epizentrum, in dem keine Warnung möglich ist, weil die S-Wellen dort eintreffen, bevor das System den Alarm auslösen kann. Bei dem beschriebenen Netz beträgt der Radius etwa 30 Kilometer: Der Alarm kommt erst nach rund acht Sekunden, während die S-Wellen in dieser Zeit schon etwa 28 Kilometer zurücklegen. Gerade die am schwersten betroffenen Orte profitieren deshalb am wenigsten.",
    },

    {
      kind: "open",
      id: "s18-q5",
      number: "5",
      skill: "verstehen",
      points: 3,
      prompt: "Nennen Sie drei Schutzmaßnahmen, die nach einem Alarm automatisch ablaufen.",
      minWords: 35,
      criteria: [
        {
          id: "c1",
          label: "Hochgeschwindigkeitszüge schalten den Fahrstrom ab und bremsen.",
          keywords: ["züge", "fahrstrom", "bremsen", "abschalten"],
        },
        {
          id: "c2",
          label: "Gasleitungen werden geschlossen, Aufzüge fahren zum nächsten Halt.",
          keywords: ["gasleitungen", "aufzüge", "nächsten halt"],
        },
        {
          id: "c3",
          label:
            "Chemieanlagen fahren Prozesse herunter, Operationsteams sichern ihre Instrumente.",
          keywords: ["chemieanlagen", "operationsteams", "instrumente", "prozesse"],
        },
      ],
      sampleAnswer:
        "Hochgeschwindigkeitszüge schalten den Fahrstrom ab und bremsen, Gasleitungen werden geschlossen, und Aufzüge fahren zum nächsten Halt. Außerdem fahren Chemieanlagen ihre Prozesse herunter, und Operationsteams in Krankenhäusern erhalten das Signal, ihre Instrumente zu sichern.",
    },

    {
      kind: "open",
      id: "s18-q6a",
      number: "6a",
      skill: "verstehen",
      points: 1,
      prompt:
        "Wie viele Stationen müssen ein Beben mindestens bestätigen, bevor ein Alarm ausgelöst wird?",
      minWords: 3,
      criteria: [
        {
          id: "c1",
          label: "Mindestens vier Stationen.",
          keywords: ["vier stationen", "vier"],
          numeric: [4, 4],
        },
      ],
      sampleAnswer: "Mindestens vier Stationen.",
    },

    {
      kind: "open",
      id: "s18-q6b",
      number: "6b",
      skill: "verstehen",
      points: 2,
      prompt:
        "Erklären Sie, weshalb mehr bestätigende Stationen die Zuverlässigkeit erhöhen, zugleich aber den geschützten Bereich verkleinern.",
      minWords: 40,
      criteria: [
        {
          id: "c1",
          label:
            "Mehrere Stationen verringern das Risiko von Fehlalarmen durch Sprengungen oder Lastwagen an einer einzelnen Station.",
          keywords: ["fehlalarm", "sprengung", "lastwagen", "bestätigung", "mehrere stationen"],
        },
        {
          id: "c2",
          label:
            "Das Warten auf weitere Bestätigungen kostet Zeit: Schon zwei Sekunden Verzögerung vergrößern die tote Zone um rund sieben Kilometer.",
          keywords: ["zeit", "zwei sekunden", "sieben kilometer", "tote zone", "verzögerung"],
        },
      ],
      sampleAnswer:
        "Wenn mehrere Stationen dieselbe Erschütterung melden, sinkt das Risiko eines Fehlalarms, etwa durch eine Sprengung im Steinbruch oder einen Lastwagen neben einer Station. Jede zusätzliche Bestätigung kostet aber Zeit: Wartet das System nur zwei Sekunden länger, wächst die tote Zone um rund sieben Kilometer, sodass weniger Orte rechtzeitig gewarnt werden.",
    },

    {
      kind: "open",
      id: "s18-q7",
      number: "7",
      skill: "verstehen",
      points: 3,
      prompt:
        "Weshalb sind Bauvorschriften trotz eines Frühwarnsystems weiterhin notwendig? Nennen Sie auch zwei bauliche Maßnahmen, die Gebäude erdbebensicherer machen.",
      minWords: 45,
      criteria: [
        {
          id: "c1",
          label:
            "Die Warnung gewinnt nur wenige Sekunden und ist in der toten Zone wirkungslos, während Bauvorschriften bei jedem Beben und an jedem Ort schützen.",
          keywords: ["nur sekunden", "tote zone", "bei jedem beben", "an jedem ort", "dauerhaft"],
        },
        {
          id: "c2",
          label: "Duktile Stahlbetonrahmen verformen sich, ohne zu brechen.",
          keywords: ["stahlbetonrahmen", "duktil", "verformen", "ohne zu brechen"],
        },
        {
          id: "c3",
          label:
            "Gleitlager unter dem Fundament (Basisisolierung) entkoppeln das Gebäude vom schwingenden Boden.",
          keywords: ["gleitlager", "basisisolierung", "fundament", "entkoppeln"],
        },
      ],
      sampleAnswer:
        "Die Warnung gewinnt nur wenige Sekunden und bleibt in der toten Zone wirkungslos, während Bauvorschriften bei jedem Beben und an jedem Ort schützen. Erdbebensicherer werden Gebäude durch duktile Stahlbetonrahmen, die sich verformen, ohne zu brechen, sowie durch Gleitlager unter dem Fundament, die das Haus vom schwingenden Boden entkoppeln; diese Technik heißt Basisisolierung.",
    },

    {
      kind: "open",
      id: "s18-q8",
      number: "8",
      skill: "transfer",
      points: 4,
      prompt:
        "Ein Beben ereignet sich im Gebiet des im Text beschriebenen Netzes. Stadt A liegt 14 Kilometer, Stadt B 70 Kilometer vom Epizentrum entfernt. Erklären Sie möglichst genau, welchen Nutzen das Frühwarnsystem jeweils hat und was für Stadt A stattdessen wichtig wäre.",
      minWords: 55,
      criteria: [
        {
          id: "c1",
          label: "Stadt A liegt in der toten Zone; dort ist keine Warnung möglich.",
          keywords: ["stadt a", "tote zone", "keine warnung"],
        },
        {
          id: "c2",
          label:
            "Für 14 Kilometer brauchen die S-Wellen nur etwa vier Sekunden und sind damit vor dem Alarm nach rund acht Sekunden da.",
          keywords: ["vier sekunden", "acht sekunden", "14 kilometer"],
          numeric: [4, 4],
        },
        {
          id: "c3",
          label:
            "In Stadt B erreichen die S-Wellen den Ort nach etwa 20 Sekunden; die Warnzeit beträgt rund 12 Sekunden.",
          keywords: ["stadt b", "warnzeit", "zwölf sekunden", "20 sekunden"],
          numeric: [12, 12],
        },
        {
          id: "c4",
          label:
            "Diese Zeit reicht für Maßnahmen wie Züge abbremsen, Gasleitungen schließen oder sich unter einen Tisch begeben; für Stadt A ist erdbebensichere Bauweise entscheidend.",
          keywords: ["züge", "gasleitungen", "tisch", "bauweise", "bauvorschriften"],
        },
      ],
      sampleAnswer:
        "Stadt A mit 14 Kilometern Entfernung liegt in der toten Zone: Die S-Wellen brauchen nur etwa vier Sekunden und sind damit vor dem Alarm nach rund acht Sekunden da, sodass keine Warnung möglich ist. Für Stadt A kommt es deshalb auf erdbebensichere Bauweise an. In Stadt B mit 70 Kilometern brauchen die S-Wellen etwa 20 Sekunden; der Alarm kommt nach rund acht Sekunden, die Warnzeit beträgt also etwa zwölf Sekunden. Das reicht aus, um Züge abzubremsen, Gasleitungen zu schließen und sich unter einem Tisch in Deckung zu begeben.",
    },

    {
      kind: "truefalse",
      id: "s18-q9",
      number: "9",
      points: 4,
      prompt:
        "Vergleichen Sie die folgenden Aussagen mit den Informationen im Text und entscheiden Sie, ob diese richtig oder falsch sind. Beachten Sie als Muster das angegebene Beispiel.",
      example: {
        text: "Die P-Wellen richten in der Regel die größten Schäden an.",
        correct: false,
        justification:
          "Die P-Wellen richten meist nur geringe Schäden an; die S-Wellen verursachen den größten Teil der Zerstörung.",
      },
      statements: [
        {
          id: "s18-q9-1",
          text: "Die Frühwarnung nutzt aus, dass sich P-Wellen schneller ausbreiten als S-Wellen.",
          correct: true,
          justification:
            "P-Wellen laufen mit etwa 6 km/s, S-Wellen mit rund 3,5 km/s; der Vorsprung wird für die Warnung genutzt. (1 P)",
        },
        {
          id: "s18-q9-2",
          text: "Die Warnzeit ist umso kürzer, je weiter ein Ort vom Epizentrum entfernt liegt.",
          correct: false,
          justification: "Sie ist umso länger, je weiter der Ort entfernt liegt. (1 P)",
        },
        {
          id: "s18-q9-3",
          text: "Ein Alarm wird bereits ausgelöst, sobald eine einzelne Station eine Erschütterung meldet.",
          correct: false,
          justification:
            "Mindestens vier Stationen müssen die Erschütterung bestätigen, und die Stärke muss über 4,5 liegen. (1 P)",
        },
        {
          id: "s18-q9-4",
          text: "Gleitlager unter dem Fundament sollen das Gebäude vom schwingenden Boden entkoppeln.",
          correct: true,
          justification: "Diese Technik heißt Basisisolierung. (1 P)",
        },
      ],
    },
  ],

  strukturen: [
    {
      id: "s18-sa",
      label: "A",
      points: 2,
      type: "passiversatz",
      instruction: REWRITE,
      prompt:
        "Gelänge es, die Auswertung um zwei bis drei Sekunden zu beschleunigen, ließe sich die tote Zone merklich verkleinern, sodass mehr Menschen rechtzeitig gewarnt würden.",
      highlight: "ließe sich die tote Zone merklich verkleinern",
      template: {
        before: "Gelänge es, die Auswertung um zwei bis drei Sekunden zu beschleunigen, ",
        after: ", sodass mehr Menschen rechtzeitig gewarnt würden.",
      },
      solutions: [
        "könnte die tote Zone merklich verkleinert werden",
        "wäre die tote Zone merklich zu verkleinern",
      ],
      explanation:
        "« sich lassen + infinitif » est un substitut de passif. On le rend par le passif avec « können » au Konjunktiv II (« könnte … verkleinert werden ») ou par « sein + zu + infinitif » (« wäre … zu verkleinern »). Le Konjunktiv II est conservé parce que la phrase reste une hypothèse.",
      modelAnswer:
        "Gelänge es, die Auswertung um zwei bis drei Sekunden zu beschleunigen, könnte die tote Zone merklich verkleinert werden, sodass mehr Menschen rechtzeitig gewarnt würden.",
    },
    {
      id: "s18-sb",
      label: "B",
      points: 3,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Weil Menschen in wenigen Sekunden kaum reagieren können, werden viele Schutzmaßnahmen automatisiert.",
      highlight: "Weil Menschen in wenigen Sekunden kaum reagieren können",
      template: { before: "", after: ", werden viele Schutzmaßnahmen automatisiert." },
      solutions: [
        "Aufgrund der geringen Reaktionsmöglichkeiten von Menschen innerhalb weniger Sekunden",
        "Wegen der geringen Reaktionsmöglichkeiten von Menschen innerhalb weniger Sekunden",
      ],
      explanation:
        "La subordonnée causale « weil … » devient un groupe prépositionnel au génitif : « aufgrund / wegen + génitif ». Le verbe « reagieren können » se nominalise en « Reaktionsmöglichkeiten » avec l'adjectif « gering », et la précision de temps devient « innerhalb weniger Sekunden ».",
      modelAnswer:
        "Aufgrund der geringen Reaktionsmöglichkeiten von Menschen innerhalb weniger Sekunden werden viele Schutzmaßnahmen automatisiert.",
    },
    {
      id: "s18-sc",
      label: "C",
      points: 2,
      type: "partizipialattribut",
      instruction: REWRITE,
      prompt:
        "Gerade die Orte, die am schwersten betroffen sind, profitieren somit am wenigsten von der Technik.",
      highlight: "die am schwersten betroffen sind",
      template: {
        before: "Gerade ",
        after: " profitieren somit am wenigsten von der Technik.",
      },
      solutions: ["die am schwersten betroffenen Orte"],
      explanation:
        "La relative « die … betroffen sind » devient un attribut participial au participe II placé devant le nom : « die am schwersten betroffenen Orte ». Le superlatif « am schwersten » reste devant le participe et la terminaison faible -en suit l'article défini au nominatif pluriel.",
      modelAnswer:
        "Gerade die am schwersten betroffenen Orte profitieren somit am wenigsten von der Technik.",
    },
    {
      id: "s18-sd",
      label: "D",
      points: 2,
      type: "nominalisierung",
      instruction: REWRITE,
      prompt:
        "Wartet das System zwei Sekunden länger, wächst die tote Zone um rund sieben Kilometer.",
      highlight: "Wartet das System zwei Sekunden länger",
      template: { before: "", after: " wächst die tote Zone um rund sieben Kilometer." },
      solutions: [
        "Bei einer um zwei Sekunden längeren Wartezeit des Systems",
        "Bei einem um zwei Sekunden längeren Abwarten des Systems",
      ],
      explanation:
        "La condition introduite par le verbe au début « wartet … länger » se transforme en groupe prépositionnel conditionnel « bei + nominalisation » : « Wartezeit » ou « Abwarten ». Le comparatif « um zwei Sekunden längeren » et le génitif « des Systems » sont conservés.",
      modelAnswer:
        "Bei einer um zwei Sekunden längeren Wartezeit des Systems wächst die tote Zone um rund sieben Kilometer.",
    },
    {
      id: "s18-se",
      label: "E",
      points: 1,
      type: "konjunktiv",
      instruction: "Antworten Sie in ein bis zwei vollständigen Sätzen.",
      prompt:
        "„Messgeräte am Meeresboden könnten Beben vor der Küste einige Sekunden früher erfassen.“ Warum steht in diesem Satz „könnten“ und nicht „können“?",
      criteria: [
        {
          id: "c1",
          label:
            "Der Konjunktiv II drückt aus, dass es sich um eine Möglichkeit handelt, die erprobt wird und noch nicht verwirklicht ist.",
          keywords: [
            "konjunktiv",
            "möglichkeit",
            "noch nicht verwirklicht",
            "noch nicht wirklichkeit",
            "erprobt",
          ],
        },
      ],
      explanation:
        "Le Konjunktiv II (« könnten ») marque une possibilité envisagée et testée, mais pas encore réalisée. Les mesures sur le fond marin sont une technologie en expérimentation, pas une méthode déjà établie.",
      modelAnswer:
        "Der Konjunktiv II zeigt, dass es sich nur um eine Möglichkeit handelt, die derzeit erprobt wird und noch nicht verwirklicht ist.",
    },
    {
      id: "s18-sf",
      label: "F",
      points: 2,
      type: "bezug",
      instruction: "Antworten Sie in einem vollständigen Satz.",
      prompt:
        "„Diese Zeitspanne ist kurz, doch sie genügt, um Schäden und Verletzungen deutlich zu verringern.“ Worauf bezieht sich „Diese Zeitspanne“? Nennen Sie auch ihre Länge.",
      criteria: [
        {
          id: "c1",
          label:
            "„Diese Zeitspanne“ bezieht sich auf die Zeit zwischen dem Alarm und dem Eintreffen der zerstörerischen Erschütterungen in der Hauptstadt.",
          keywords: ["zwischen dem alarm", "alarm und", "eintreffen", "erschütterungen", "hauptstadt"],
        },
        {
          id: "c2",
          label: "Die Zeitspanne beträgt rund 26 Sekunden.",
          keywords: ["26 sekunden"],
          numeric: [25, 27],
        },
      ],
      explanation:
        "« Diese Zeitspanne » reprend l'intervalle entre le déclenchement de l'alerte et l'arrivée des ondes S destructrices dans la capitale. Le texte indique que 26 secondes se sont écoulées depuis l'alerte lorsque les secousses atteignent la ville.",
      modelAnswer:
        "„Diese Zeitspanne“ ist die Zeit zwischen dem Alarm und dem Eintreffen der zerstörerischen Erschütterungen in der Hauptstadt; sie beträgt rund 26 Sekunden.",
    },
    {
      id: "s18-sg",
      label: "G",
      points: 3,
      type: "konnektor",
      instruction: REWRITE,
      prompt:
        "Während die Warnung nur Sekunden gewinnt und in der toten Zone wirkungslos bleibt, schützen Bauvorschriften bei jedem Beben und an jedem Ort.",
      highlight:
        "Während die Warnung nur Sekunden gewinnt und in der toten Zone wirkungslos bleibt",
      template: {
        before: "Die Warnung gewinnt nur Sekunden und bleibt in der toten Zone wirkungslos; ",
        after: ".",
      },
      solutions: [
        "Bauvorschriften schützen dagegen bei jedem Beben und an jedem Ort",
        "Bauvorschriften schützen hingegen bei jedem Beben und an jedem Ort",
      ],
      explanation:
        "La concession avec « während » se transforme en opposition coordonnée : « dagegen / hingegen / jedoch » + verbe en deuxième position. Le mot « während » seul ne peut pas introduire le second membre après un point-virgule.",
      modelAnswer:
        "Die Warnung gewinnt nur Sekunden und bleibt in der toten Zone wirkungslos; Bauvorschriften schützen dagegen bei jedem Beben und an jedem Ort.",
    },
  ],
};
