// Грамматические темы. В тексте предложения причастия выделены **так**.
// notes: разбор каждого причастия — w (слово), type (форма), func (функция), ru (как переводится).
var P1A = "Participle I (Active)";
var P1P = "Participle I (Passive)";
var P2 = "Participle II";
var POST = "Определение (стоит после существительного)";
var PRE = "Определение (стоит перед существительным)";
var PASSIVE = "Часть сказуемого (страдательный залог)";

window.TOPICS = [
  {
    id: "2-1",
    title: "Тема 2.1",
    subtitle: "Причастие в функции определения",
    sentences: [
      {
        en: "Carbon atoms **bound** together form a chain.",
        ru: "Атомы углерода, связанные вместе, образуют цепь.",
        notes: [{ w: "bound", type: P2 + " от bind", func: POST, ru: "связанные" }]
      },
      {
        en: "Forces **influencing** upon the body produce work.",
        ru: "Силы, воздействующие на тело, совершают работу.",
        notes: [{ w: "influencing", type: P1A, func: POST, ru: "воздействующие" }]
      },
      {
        en: "Each body **possessing** a potential energy can do work.",
        ru: "Каждое тело, обладающее потенциальной энергией, может совершать работу.",
        notes: [{ w: "possessing", type: P1A, func: POST, ru: "обладающее" }]
      },
      {
        en: "The kinetic energy **obtained** by the body depends on its mass.",
        ru: "Кинетическая энергия, полученная телом, зависит от его массы.",
        notes: [{ w: "obtained", type: P2, func: POST, ru: "полученная" }]
      },
      {
        en: "The attention **paid** to the study of fundamental subjects is great.",
        ru: "Внимание, уделяемое изучению фундаментальных предметов, велико.",
        notes: [{ w: "paid", type: P2 + " от pay", func: POST, ru: "уделяемое" }]
      },
      {
        en: "There are many **promising** materials studies **being conducted** now.",
        ru: "Сейчас проводится много перспективных исследований материалов (дословно: существует много перспективных исследований материалов, проводимых сейчас).",
        notes: [
          { w: "promising", type: P1A, func: PRE, ru: "перспективные, многообещающие" },
          { w: "being conducted", type: P1P, func: POST, ru: "проводимые (которые проводятся сейчас)" }
        ]
      },
      {
        en: "The results of the experiments **discussed** yesterday will be **published**.",
        ru: "Результаты экспериментов, обсуждённых вчера, будут опубликованы.",
        notes: [
          { w: "discussed", type: P2, func: POST, ru: "обсуждённых" },
          { w: "will be published", type: P2 + " в составе Future Simple Passive", func: PASSIVE, ru: "будут опубликованы" }
        ]
      },
      {
        en: "Organic compounds **called** hydrocarbons have only hydrogen and carbon.",
        ru: "Органические соединения, называемые углеводородами, содержат только водород и углерод.",
        notes: [{ w: "called", type: P2, func: POST, ru: "называемые" }]
      },
      {
        en: "Ice in a kettle **placed** over a fire melts, then gets warmer, and finally boils.",
        ru: "Лёд в чайнике, поставленном на огонь, тает, затем нагревается и, наконец, закипает.",
        notes: [{ w: "placed", type: P2, func: POST, ru: "поставленном" }]
      },
      {
        en: "An article **discussing** the new system of education appeared in all newspapers.",
        ru: "Статья, обсуждающая новую систему образования, появилась во всех газетах.",
        notes: [{ w: "discussing", type: P1A, func: POST, ru: "обсуждающая" }]
      },
      {
        en: "The ion of metal **loosing** electrons is no longer electrically neutral, it is positive.",
        ru: "Ион металла, теряющий электроны, больше не является электрически нейтральным, он заряжен положительно.",
        notes: [{ w: "loosing", type: P1A + " от lose (в учебнике опечатка, правильно losing)", func: POST, ru: "теряющий" }]
      },
      {
        en: "Experimental wires **made** of niobium and titanium could carry a current of 1000 amperes.",
        ru: "Экспериментальные провода, изготовленные из ниобия и титана, могли проводить ток силой 1000 ампер.",
        notes: [{ w: "made", type: P2 + " от make", func: POST, ru: "изготовленные" }]
      },
      {
        en: "A man **weighed** on the moon finds out that his weight is one-sixth of his weight on the Earth.",
        ru: "Человек, взвешенный на Луне, обнаруживает, что его вес составляет одну шестую его веса на Земле.",
        notes: [{ w: "weighed", type: P2, func: POST, ru: "взвешенный" }]
      },
      {
        en: "The number of specialists **connected** with new branches of science and engineering is **increasing**.",
        ru: "Число специалистов, связанных с новыми отраслями науки и техники, растёт.",
        notes: [
          { w: "connected", type: P2, func: POST, ru: "связанных" },
          { w: "is increasing", type: P1A + " в составе Present Continuous", func: "Часть сказуемого (длительное время)", ru: "растёт" }
        ]
      },
      {
        en: "For very small capacitors, two circular plates with **insulating** material between them will be sufficient.",
        ru: "Для очень маленьких конденсаторов будет достаточно двух круглых пластин с изолирующим материалом между ними.",
        notes: [{ w: "insulating", type: P1A, func: PRE, ru: "изолирующий" }]
      },
      {
        en: "The simplest way of heat **being transferred** from one place to another is the motion of the **heated** substance.",
        ru: "Простейший способ передачи тепла из одного места в другое — это движение нагретого вещества.",
        notes: [
          { w: "being transferred", type: P1P, func: "Определение к heat после предлога of (по-русски удобнее перевести существительным)", ru: "передаваемого → «передачи тепла»" },
          { w: "heated", type: P2, func: PRE, ru: "нагретого" }
        ]
      },
      {
        en: "Benjamin Franklin came to the conclusion that there was only one fluid which **rubbed** objects exchanged.",
        ru: "Бенджамин Франклин пришёл к выводу, что существует лишь одна жидкость, которой обмениваются натёртые предметы.",
        notes: [{ w: "rubbed", type: P2, func: PRE, ru: "натёртые" }]
      },
      {
        en: "Electrical energy **produced** on board of spacecraft from chemical, nuclear or solar energy is not efficient enough.",
        ru: "Электрическая энергия, вырабатываемая на борту космического корабля из химической, ядерной или солнечной энергии, недостаточно эффективна.",
        notes: [{ w: "produced", type: P2, func: POST, ru: "вырабатываемая" }]
      },
      {
        en: "Modern theories of magnetism assume that a magnetic field is **produced** by an electric charge **being** in motion.",
        ru: "Современные теории магнетизма предполагают, что магнитное поле создаётся электрическим зарядом, находящимся в движении.",
        notes: [
          { w: "is produced", type: P2 + " в составе Present Simple Passive", func: PASSIVE, ru: "создаётся" },
          { w: "being", type: P1A + " от be", func: POST, ru: "находящимся" }
        ]
      },
      {
        en: "The quantity of heat **passing** through the conductor in a **given** time is in direct proportion to the area of the conductor.",
        ru: "Количество тепла, проходящего через проводник за данное время, прямо пропорционально площади проводника.",
        notes: [
          { w: "passing", type: P1A, func: POST, ru: "проходящего" },
          { w: "given", type: P2 + " от give", func: PRE, ru: "данное" }
        ]
      },
      {
        en: "An object **pushed** or **pulled** by forces changes its position from the state of rest to the state of motion or from motion to rest.",
        ru: "Тело, которое толкают или тянут силы, переходит из состояния покоя в состояние движения или из движения в покой.",
        notes: [
          { w: "pushed", type: P2, func: POST, ru: "толкаемый" },
          { w: "pulled", type: P2, func: POST, ru: "притягиваемый, тянущийся" }
        ]
      },
      {
        en: "The quantity of solar radiation **received** by the Earth's atmosphere on a unit of surface in a unit of time is **called** the solar constant.",
        ru: "Количество солнечного излучения, получаемого атмосферой Земли на единицу поверхности за единицу времени, называется солнечной постоянной.",
        notes: [
          { w: "received", type: P2, func: POST, ru: "получаемого" },
          { w: "is called", type: P2 + " в составе Present Simple Passive", func: PASSIVE, ru: "называется" }
        ]
      },
      {
        en: "Maxwell's theory **considering** electric charges and electric magnetic waves is the foundation of the science of electricity and magnetism.",
        ru: "Теория Максвелла, рассматривающая электрические заряды и электромагнитные волны, является основой науки об электричестве и магнетизме.",
        notes: [{ w: "considering", type: P1A, func: POST, ru: "рассматривающая" }]
      },
      {
        en: "Just as the type of **conducting** material dictates the conductor's specific resistance to electric current, the type of **insulating** material dictates the specific opposition to field flux.",
        ru: "Так же как тип проводящего материала определяет удельное сопротивление проводника электрическому току, тип изолирующего материала определяет удельное сопротивление потоку поля.",
        notes: [
          { w: "conducting", type: P1A, func: PRE, ru: "проводящего" },
          { w: "insulating", type: P1A, func: PRE, ru: "изолирующего" }
        ]
      },
      {
        en: "A thermodynamic system **defined** as a body or a group of bodies **receiving** or **giving out** heat or other forms of energy is **described** by the pressure, the temperature and the volume.",
        ru: "Термодинамическая система, определяемая как тело или группа тел, получающих или отдающих тепло или другие виды энергии, описывается давлением, температурой и объёмом.",
        notes: [
          { w: "defined", type: P2, func: POST, ru: "определяемая" },
          { w: "receiving", type: P1A, func: POST, ru: "получающих" },
          { w: "giving out", type: P1A, func: POST, ru: "отдающих" },
          { w: "is described", type: P2 + " в составе Present Simple Passive", func: PASSIVE, ru: "описывается" }
        ]
      }
    ]
  }
];
