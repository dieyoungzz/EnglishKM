// Грамматические темы. В тексте предложения причастия, герундии и устойчивые выражения выделены **так**.
// notes: разбор — w (слово), type (форма), func (функция), ru (как переводится).
var P1A = "Participle I Simple Active";
var P1P = "Participle I Simple Passive";
var P2 = "Participle II Passive";
var POST = "Определение (стоит после существительного)";
var PRE = "Определение (стоит перед существительным)";
var PASSIVE = "Часть сказуемого (страдательный залог)";
var PPA = "Participle I Perfect Active";
var PPP = "Participle I Perfect Passive";
var NOMINAL = "Часть именного сказуемого";
var ABS = "Независимый причастный оборот";
var ABS_END = "Независимый причастный оборот, сопутствующее обстоятельство";
// Темы 3.x — герундий.
var GER = "Герундий (Indefinite Active)";
var GER_PRF = "Perfect-герундий (Perfect Active)";
var GER_PS = "Passive-герундий (Indefinite Passive)";
var GER_PPS = "Perfect Passive-герундий";
var NAGC = "Независимый герундиальный оборот (притяж. местоимение/существительное + герундий)";
function n(w, type, func, ru) { return { w: w, type: type, func: func, ru: ru }; }

window.TOPICS = [
  {
    id: "2-1",
    group: "КМ2",
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
  },
  {
    id: "2-2",
    group: "КМ2",
    title: "Тема 2.2",
    subtitle: "Причастие в функции обстоятельства",
    sentences: [
      {
        en: "If **heated** to 100°C, water turns into steam.",
        ru: "Если воду нагреть до 100 °C, она превращается в пар.",
        notes: [n("heated", P2 + " с союзом if", "Обстоятельство условия", "если нагреть")]
      },
      {
        en: "**Having finished** the test, he put down the results.",
        ru: "Закончив испытание, он записал результаты.",
        notes: [n("having finished", PPA, "Обстоятельство времени", "закончив")]
      },
      {
        en: "**Using** a computer, you can solve a lot of problems.",
        ru: "Используя компьютер, можно решить много задач.",
        notes: [n("using", P1A, "Обстоятельство образа действия", "используя")]
      },
      {
        en: "**Having been rubbed**, many substances become **electrified**.",
        ru: "После натирания многие вещества электризуются.",
        notes: [
          n("having been rubbed", PPP, "Обстоятельство времени", "после того как их натрут"),
          n("become electrified", P2, NOMINAL, "электризуются")
        ]
      },
      {
        en: "**Having been** carefully **tested**, the device was **put** into operation.",
        ru: "После тщательного испытания прибор был введён в эксплуатацию.",
        notes: [
          n("having been tested", PPP, "Обстоятельство времени", "после того как его испытали"),
          n("was put", P2 + " в составе Past Simple Passive", PASSIVE, "был введён")
        ]
      },
      {
        en: "**Having made** many tests, the experimenter got interesting results.",
        ru: "Проведя много испытаний, экспериментатор получил интересные результаты.",
        notes: [n("having made", PPA, "Обстоятельство времени", "проведя")]
      },
      {
        en: "Though **discovered**, Newton's mistake had no influence on his theory.",
        ru: "Хотя ошибка Ньютона и была обнаружена, она не повлияла на его теорию.",
        notes: [n("discovered", P2 + " с союзом though", "Обстоятельство уступки", "хотя и была обнаружена")]
      },
      {
        en: "**Working** at his new device, the inventor made numerous improvements.",
        ru: "Работая над своим новым прибором, изобретатель сделал многочисленные усовершенствования.",
        notes: [n("working", P1A, "Обстоятельство времени", "работая")]
      },
      {
        en: "**Multiplying** the mass of a **moving** body by its velocity, we can get its momentum.",
        ru: "Умножив массу движущегося тела на его скорость, мы получим его импульс.",
        notes: [
          n("multiplying", P1A, "Обстоятельство образа действия", "умножив (умножая)"),
          n("moving", P1A, PRE, "движущегося")
        ]
      },
      {
        en: "**Having been used** for a long time, the instrument partly lost its former efficiency.",
        ru: "Так как прибор долго использовался, он частично утратил прежнюю эффективность.",
        notes: [n("having been used", PPP, "Обстоятельство причины", "так как долго использовался")]
      },
      {
        en: "**Having defined** the units for distance and time, we can express through them the velocity.",
        ru: "Определив единицы расстояния и времени, мы можем выразить через них скорость.",
        notes: [n("having defined", PPA, "Обстоятельство времени", "определив")]
      },
      {
        en: "**Having stated** the laws of gravity, Newton was able to explain the structure of the Universe.",
        ru: "Сформулировав законы тяготения, Ньютон смог объяснить строение Вселенной.",
        notes: [n("having stated", PPA, "Обстоятельство времени", "сформулировав")]
      },
      {
        en: "**Being** a teacher of deaf people, Bell became **interested** in sound and its transmission.",
        ru: "Будучи учителем глухих, Белл заинтересовался звуком и его передачей.",
        notes: [
          n("being", P1A + " от be", "Обстоятельство причины", "будучи (так как был)"),
          n("became interested", P2, NOMINAL, "заинтересовался")
        ]
      },
      {
        en: "**Using** superconductivity in thermonuclear installations, it is possible to make any experiments.",
        ru: "Используя сверхпроводимость в термоядерных установках, можно проводить любые эксперименты.",
        notes: [n("using", P1A, "Обстоятельство образа действия", "используя")]
      },
      {
        en: "**Studying** the nature of that new phenomenon, they were not **satisfied** with the results **obtained**.",
        ru: "Изучая природу этого нового явления, они не были удовлетворены полученными результатами.",
        notes: [
          n("studying", P1A, "Обстоятельство времени", "изучая"),
          n("were not satisfied", P2 + " в составе Past Simple Passive", PASSIVE, "не были удовлетворены"),
          n("obtained", P2, POST, "полученными")
        ]
      },
      {
        en: "**Discussing** characteristics of these rays, we are **concerned** with the problem of identifying them.",
        ru: "Обсуждая характеристики этих лучей, мы сталкиваемся с проблемой их идентификации.",
        notes: [
          n("discussing", P1A, "Обстоятельство времени", "обсуждая"),
          n("are concerned", P2 + " в составе Present Simple Passive", PASSIVE, "сталкиваемся, занимаемся")
        ]
      },
      {
        en: "**Having been tested** under unfavorable conditions, the machine was successfully **put** into operation.",
        ru: "После испытаний в неблагоприятных условиях машину успешно ввели в эксплуатацию.",
        notes: [
          n("having been tested", PPP, "Обстоятельство времени", "после того как её испытали"),
          n("was put", P2 + " в составе Past Simple Passive", PASSIVE, "была введена")
        ]
      },
      {
        en: "**Studying** nuclear reactions, we can find out how these radiations interact as they go through matter.",
        ru: "Изучая ядерные реакции, мы можем выяснить, как эти излучения взаимодействуют при прохождении через вещество.",
        notes: [n("studying", P1A, "Обстоятельство образа действия", "изучая")]
      },
      {
        en: "**Having published** his book about space exploration in 1895, Tsiolkovsky became **known** all over the world.",
        ru: "Опубликовав в 1895 году книгу об исследовании космоса, Циолковский стал известен во всём мире.",
        notes: [
          n("having published", PPA, "Обстоятельство времени", "опубликовав"),
          n("became known", P2 + " от know", NOMINAL, "стал известен")
        ]
      },
      {
        en: "**Having carried out** many experiments and tests on this subject, the scientist published a great number of articles.",
        ru: "Проведя много экспериментов и испытаний по этой теме, учёный опубликовал большое количество статей.",
        notes: [n("having carried out", PPA, "Обстоятельство времени", "проведя")]
      },
      {
        en: "**Being converted** into heat and **wasted**, a part of energy **delivered** to any motor or a generator is **lost** within the machine itself.",
        ru: "Превращаясь в тепло и растрачиваясь, часть энергии, подводимой к любому двигателю или генератору, теряется внутри самой машины.",
        notes: [
          n("being converted … and wasted", P1P, "Обстоятельство причины (образа действия)", "превращаясь и растрачиваясь"),
          n("delivered", P2, POST, "подводимой"),
          n("is lost", P2 + " в составе Present Simple Passive", PASSIVE, "теряется")
        ]
      },
      {
        en: "**Being** negatively **charged**, a radio antenna can receive information **transmitted** by a laser instead of applying a special receiver for the light.",
        ru: "Будучи заряженной отрицательно, радиоантенна может принимать информацию, передаваемую лазером, без специального приёмника света.",
        notes: [
          n("being charged", P1P, "Обстоятельство причины", "будучи заряженной (так как заряжена)"),
          n("transmitted", P2, POST, "передаваемую")
        ]
      },
      {
        en: "**Knowing** the initial temperature of the thermometer and the thermometer calibration, the temperature may be **calculated** for any time.",
        ru: "Зная начальную температуру термометра и его градуировку, можно рассчитать температуру для любого момента времени.",
        notes: [
          n("knowing", P1A, "Обстоятельство условия", "зная (если известна)"),
          n("may be calculated", P2 + " в составе пассивного сказуемого с модальным глаголом", PASSIVE, "может быть рассчитана")
        ]
      },
      {
        en: "**Speaking** of hydraulic turbines, it is interesting to point out that there has been a great increase in size, capacity and output of Russian turbines.",
        ru: "Говоря о гидротурбинах, интересно отметить, что размеры, мощность и производительность российских турбин значительно выросли.",
        notes: [n("speaking", P1A, "Обстоятельство (вводный оборот)", "говоря о")]
      },
      {
        en: "**Having studied** the electronic structure of electricity, let's now discuss the quantum structure of light on the basis of the photoelectric effect.",
        ru: "Изучив электронную природу электричества, обсудим теперь квантовую природу света на основе фотоэффекта.",
        notes: [n("having studied", PPA, "Обстоятельство времени", "изучив")]
      }
    ]
  },
  {
    id: "2-3",
    group: "КМ2",
    title: "Тема 2.3",
    subtitle: "Независимый причастный оборот в начале предложения",
    sentences: [
      {
        en: "It **being** a holiday, the university was **closed**.",
        ru: "Так как был праздник, университет был закрыт.",
        notes: [
          n("it being", P1A + " от be", ABS + ", обстоятельство причины", "так как был"),
          n("was closed", P2 + " в составе Past Simple Passive", PASSIVE, "был закрыт")
        ]
      },
      {
        en: "The professor **being** ill, the lecture was **put** off.",
        ru: "Так как профессор был болен, лекцию отложили.",
        notes: [
          n("the professor being", P1A + " от be", ABS + ", обстоятельство причины", "так как профессор был"),
          n("was put off", P2 + " в составе Past Simple Passive", PASSIVE, "была отложена")
        ]
      },
      {
        en: "The oil **having been exhausted**, the engine stopped.",
        ru: "После того как масло кончилось, двигатель остановился.",
        notes: [n("the oil having been exhausted", PPP, ABS + ", обстоятельство времени", "после того как масло кончилось")]
      },
      {
        en: "The fluid **increasing** in temperature, its density decreases.",
        ru: "Когда температура жидкости повышается, её плотность уменьшается.",
        notes: [n("the fluid increasing", P1A, ABS + ", обстоятельство времени", "когда (температура) повышается")]
      },
      {
        en: "The temperature **being raised**, the kinetic energy is **increased**.",
        ru: "Если температуру повысить, кинетическая энергия увеличивается.",
        notes: [
          n("the temperature being raised", P1P, ABS + ", обстоятельство условия", "если температуру повысить"),
          n("is increased", P2 + " в составе Present Simple Passive", PASSIVE, "увеличивается")
        ]
      },
      {
        en: "The voltage **being increased**, the field becomes strong enough.",
        ru: "Когда напряжение увеличивают, поле становится достаточно сильным.",
        notes: [n("the voltage being increased", P1P, ABS + ", обстоятельство времени", "когда напряжение увеличивают")]
      },
      {
        en: "The resistance **being** very high, the current in the circuit was low.",
        ru: "Так как сопротивление было очень высоким, ток в цепи был слабым.",
        notes: [n("the resistance being", P1A + " от be", ABS + ", обстоятельство причины", "так как сопротивление было")]
      },
      {
        en: "A gas **cooling** down, the average speed of its molecules decreases.",
        ru: "Когда газ охлаждается, средняя скорость его молекул уменьшается.",
        notes: [n("a gas cooling down", P1A, ABS + ", обстоятельство времени", "когда газ охлаждается")]
      },
      {
        en: "An electron **leaving** the surface, the metal becomes positively **charged**.",
        ru: "Когда электрон покидает поверхность, металл становится положительно заряженным.",
        notes: [
          n("an electron leaving", P1A, ABS + ", обстоятельство времени", "когда электрон покидает"),
          n("becomes charged", P2, NOMINAL, "становится заряженным")
        ]
      },
      {
        en: "A magnet **being broken** into two parts, we get two new smaller magnets.",
        ru: "Если магнит разломить на две части, мы получим два новых магнита меньшего размера.",
        notes: [n("a magnet being broken", P1P, ABS + ", обстоятельство условия", "если магнит разломить")]
      },
      {
        en: "An object **losing** its potential energy, that energy is **turned** into kinetic one.",
        ru: "Когда тело теряет потенциальную энергию, эта энергия превращается в кинетическую.",
        notes: [
          n("an object losing", P1A, ABS + ", обстоятельство времени", "когда тело теряет"),
          n("is turned", P2 + " в составе Present Simple Passive", PASSIVE, "превращается")
        ]
      },
      {
        en: "The cell **being charged**, a certain quantity of electricity is **passed** through it.",
        ru: "Когда элемент заряжается, через него проходит определённое количество электричества.",
        notes: [
          n("the cell being charged", P1P, ABS + ", обстоятельство времени", "когда элемент заряжают"),
          n("is passed", P2 + " в составе Present Simple Passive", PASSIVE, "пропускается, проходит")
        ]
      },
      {
        en: "The magnetic lines of force **being cut** by the wire, an e.m.f. is **induced** in that wire.",
        ru: "Когда провод пересекает магнитные силовые линии, в этом проводе индуцируется ЭДС.",
        notes: [
          n("the lines of force being cut", P1P, ABS + ", обстоятельство времени", "когда силовые линии пересекаются"),
          n("is induced", P2 + " в составе Present Simple Passive", PASSIVE, "индуцируется")
        ]
      },
      {
        en: "A gas **being heated** at constant pressure, work is **done** by the gas while **expanding**.",
        ru: "Если газ нагревать при постоянном давлении, то при расширении он совершает работу.",
        notes: [
          n("a gas being heated", P1P, ABS + ", обстоятельство условия", "если газ нагревать"),
          n("is done", P2 + " от do, в составе Present Simple Passive", PASSIVE, "совершается"),
          n("while expanding", P1A + " с союзом while", "Обстоятельство времени", "при расширении")
        ]
      },
      {
        en: "There **being** a lot of spare components at the workshop station, we could repair our car.",
        ru: "Так как на станции техобслуживания было много запасных частей, мы смогли отремонтировать машину.",
        notes: [n("there being", P1A + " от be", ABS + ", обстоятельство причины", "так как было (имелось)")]
      },
      {
        en: "The molecules or atoms of gas **being ionized**, an electric current passes through that gas.",
        ru: "Когда молекулы или атомы газа ионизированы, через этот газ проходит электрический ток.",
        notes: [n("the molecules or atoms being ionized", P1P, ABS + ", обстоятельство времени (условия)", "когда (если) они ионизированы")]
      },
      {
        en: "The flow of the current **being reduced**, the speed of the motor is correspondingly **decreased**.",
        ru: "Когда сила тока уменьшается, скорость двигателя соответственно снижается.",
        notes: [
          n("the flow being reduced", P1P, ABS + ", обстоятельство времени", "когда ток уменьшают"),
          n("is decreased", P2 + " в составе Present Simple Passive", PASSIVE, "снижается")
        ]
      },
      {
        en: "The problem **having excited** a great deal of discussion, a series of tests had to be **carried** out.",
        ru: "Так как проблема вызвала много споров, пришлось провести серию испытаний.",
        notes: [
          n("the problem having excited", PPA, ABS + ", обстоятельство причины", "так как проблема вызвала"),
          n("had to be carried out", P2 + " в составе пассивного инфинитива", PASSIVE, "пришлось провести")
        ]
      },
      {
        en: "Copper **being** a good conductor, we were **recommended** to use it while **carrying** on our work.",
        ru: "Так как медь — хороший проводник, нам рекомендовали использовать её при выполнении нашей работы.",
        notes: [
          n("copper being", P1A + " от be", ABS + ", обстоятельство причины", "так как медь является"),
          n("were recommended", P2 + " в составе Past Simple Passive", PASSIVE, "нам рекомендовали"),
          n("while carrying on", P1A + " с союзом while", "Обстоятельство времени", "при выполнении")
        ]
      },
      {
        en: "These materials **being** unsuitable for many reasons, some others must be **found** to replace them.",
        ru: "Так как эти материалы непригодны по многим причинам, нужно найти другие, чтобы их заменить.",
        notes: [
          n("these materials being", P1A + " от be", ABS + ", обстоятельство причины", "так как эти материалы"),
          n("must be found", P2 + " от find, в составе пассивного сказуемого с модальным глаголом", PASSIVE, "нужно найти")
        ]
      },
      {
        en: "An **alternating** current **flowing** through a conductor, its direction reverses at regular intervals.",
        ru: "Когда переменный ток течёт по проводнику, его направление меняется через равные промежутки времени.",
        notes: [
          n("alternating", P1A, PRE, "переменный"),
          n("an alternating current flowing", P1A, ABS + ", обстоятельство времени", "когда ток течёт")
        ]
      },
      {
        en: "An electric current **passing** through a conductor, we generally detect it thanks to its various effects.",
        ru: "Когда электрический ток проходит через проводник, мы обычно обнаруживаем его по различным проявлениям.",
        notes: [n("an electric current passing", P1A, ABS + ", обстоятельство времени", "когда ток проходит")]
      },
      {
        en: "Someone **having rubbed** certain types of materials together, they mysteriously attracted one another.",
        ru: "После того как кто-то потёр друг о друга определённые материалы, они загадочным образом притянулись друг к другу.",
        notes: [n("someone having rubbed", PPA, ABS + ", обстоятельство времени", "после того как кто-то потёр")]
      },
      {
        en: "A conductor of any kind **carrying** an electric current, a magnetic field is **set** up around that conductor.",
        ru: "Когда по проводнику любого типа течёт электрический ток, вокруг этого проводника возникает магнитное поле.",
        notes: [
          n("a conductor carrying", P1A, ABS + ", обстоятельство времени (условия)", "когда по проводнику течёт ток"),
          n("is set up", P2 + " в составе Present Simple Passive", PASSIVE, "создаётся, возникает")
        ]
      },
      {
        en: "A voltage **being applied** across the two plates of a capacitor, a **concentrated** field flux is **created** between them.",
        ru: "Когда к двум пластинам конденсатора приложено напряжение, между ними создаётся концентрированный поток поля.",
        notes: [
          n("a voltage being applied", P1P, ABS + ", обстоятельство времени", "когда приложено напряжение"),
          n("concentrated", P2, PRE, "концентрированный"),
          n("is created", P2 + " в составе Present Simple Passive", PASSIVE, "создаётся")
        ]
      }
    ]
  },
  {
    id: "2-4",
    group: "КМ2",
    title: "Тема 2.4",
    subtitle: "Независимый причастный оборот в конце предложения",
    sentences: [
      {
        en: "The Earth revolves around the sun, the sun **moving** relatively to the stars.",
        ru: "Земля вращается вокруг Солнца, а Солнце движется относительно звёзд.",
        notes: [n("the sun moving", P1A, ABS_END, "а Солнце движется")]
      },
      {
        en: "Metals are the best conductors of electricity, non-metals **being** rather poor ones.",
        ru: "Металлы — лучшие проводники электричества, а неметаллы — довольно плохие.",
        notes: [n("non-metals being", P1A + " от be", ABS_END, "а неметаллы являются")]
      },
      {
        en: "The capacitor is **charging**, its electric field **storing** an **increasing** amount of energy.",
        ru: "Конденсатор заряжается, при этом его электрическое поле накапливает всё больше энергии.",
        notes: [
          n("is charging", P1A + " в составе Present Continuous", "Часть сказуемого (длительное время)", "заряжается"),
          n("its electric field storing", P1A, ABS_END, "при этом поле накапливает"),
          n("increasing", P1A, PRE, "возрастающее (всё большее)")
        ]
      },
      {
        en: "There is always water vapour in the air, the amount **depending** upon various conditions.",
        ru: "В воздухе всегда есть водяной пар, причём его количество зависит от различных условий.",
        notes: [n("the amount depending", P1A, ABS_END, "причём количество зависит")]
      },
      {
        en: "A radio transmitter and a radio receiver are not **connected** by electrical wires, radio waves **travelling**.",
        ru: "Радиопередатчик и радиоприёмник не соединены электрическими проводами, между ними распространяются радиоволны.",
        notes: [
          n("are not connected", P2 + " в составе Present Simple Passive", PASSIVE, "не соединены"),
          n("radio waves travelling", P1A, ABS_END, "при этом распространяются радиоволны")
        ]
      },
      {
        en: "When a liquid boils, evaporation takes place, small bubbles of vapour **forming** within its surface.",
        ru: "Когда жидкость кипит, происходит испарение, при этом внутри неё образуются маленькие пузырьки пара.",
        notes: [n("small bubbles forming", P1A, ABS_END, "при этом образуются пузырьки")]
      },
      {
        en: "The efficiency of the machine is 85%, the rest of the power **being lost** in the resistance to friction.",
        ru: "КПД машины составляет 85 %, а остальная мощность теряется на преодоление трения.",
        notes: [n("the rest of the power being lost", P1P, ABS_END, "а остальная мощность теряется")]
      },
      {
        en: "Metals are excellent conductors, the best conductors of electricity **being** also the best conductors of heat.",
        ru: "Металлы — отличные проводники, причём лучшие проводники электричества являются и лучшими проводниками тепла.",
        notes: [n("the best conductors being", P1A + " от be", ABS_END, "причём лучшие проводники являются")]
      },
      {
        en: "Lasers produce intense, directional, pure in colour, light beams, the latter **being focused** by the lens system.",
        ru: "Лазеры дают интенсивные, направленные, чистые по цвету световые лучи, причём последние фокусируются системой линз.",
        notes: [n("the latter being focused", P1P, ABS_END, "причём последние фокусируются")]
      },
      {
        en: "The atoms form combinations **known** as molecules, a molecule **being defined** as the smallest part of a substance.",
        ru: "Атомы образуют соединения, известные как молекулы, причём молекула определяется как мельчайшая частица вещества.",
        notes: [
          n("known", P2 + " от know", POST, "известные"),
          n("a molecule being defined", P1P, ABS_END, "причём молекула определяется")
        ]
      },
      {
        en: "Electricity is **defined** by several key properties, each **playing** a critical role in how it behaves and interacts with matter.",
        ru: "Электричество характеризуется несколькими ключевыми свойствами, причём каждое играет важнейшую роль в том, как оно ведёт себя и взаимодействует с веществом.",
        notes: [
          n("is defined", P2 + " в составе Present Simple Passive", PASSIVE, "определяется, характеризуется"),
          n("each playing", P1A, ABS_END, "причём каждое играет")
        ]
      },
      {
        en: "Most electricity we receive from electric power plants, portable generators **running** on petrol **being** in use as well.",
        ru: "Большую часть электроэнергии мы получаем от электростанций, но используются также и портативные генераторы, работающие на бензине.",
        notes: [
          n("running", P1A, POST, "работающие"),
          n("portable generators being", P1A + " от be", ABS_END, "но также используются генераторы")
        ]
      },
      {
        en: "The lines of force from the first coil induce a current in the circuit of the second coil, this **being** another kind of induction.",
        ru: "Силовые линии первой катушки индуцируют ток в цепи второй катушки, и это является ещё одним видом индукции.",
        notes: [n("this being", P1A + " от be", ABS_END, "и это является")]
      },
      {
        en: "**Working** at his new device, the inventor made a number of improvements, the latter **resulting** from his own experiments.",
        ru: "Работая над своим новым прибором, изобретатель сделал ряд усовершенствований, причём последние стали результатом его собственных экспериментов.",
        notes: [
          n("working", P1A, "Обстоятельство времени (обычный причастный оборот)", "работая"),
          n("the latter resulting", P1A, ABS_END, "причём последние стали результатом")
        ]
      },
      {
        en: "The electric field is **established** by the **applied** voltage, extra free electrons **being forced** to collect on the negative conductor.",
        ru: "Электрическое поле создаётся приложенным напряжением, при этом лишние свободные электроны вынуждены скапливаться на отрицательном проводнике.",
        notes: [
          n("is established", P2 + " в составе Present Simple Passive", PASSIVE, "создаётся"),
          n("applied", P2, PRE, "приложенным"),
          n("extra free electrons being forced", P1P, ABS_END, "при этом электроны вынуждены")
        ]
      },
      {
        en: "An e.m.f. is **induced** in the coil by the lines of force of its own **changing** magnetic field, this effect **being called** self-induction.",
        ru: "ЭДС индуцируется в катушке силовыми линиями её собственного изменяющегося магнитного поля, причём это явление называется самоиндукцией.",
        notes: [
          n("is induced", P2 + " в составе Present Simple Passive", PASSIVE, "индуцируется"),
          n("changing", P1A, PRE, "изменяющегося"),
          n("this effect being called", P1P, ABS_END, "причём это явление называется")
        ]
      },
      {
        en: "The molecules always collide and change direction, the speed of the molecular motion greatly **depending** on the temperature.",
        ru: "Молекулы постоянно сталкиваются и меняют направление, причём скорость их движения сильно зависит от температуры.",
        notes: [n("the speed depending", P1A, ABS_END, "причём скорость зависит")]
      },
      {
        en: "In transistor there are two circuits, one of which contains the emitter and the base, the other **containing** the collector and the base.",
        ru: "В транзисторе есть две цепи, одна из которых содержит эмиттер и базу, а другая — коллектор и базу.",
        notes: [n("the other containing", P1A, ABS_END, "а другая содержит")]
      },
      {
        en: "There are several types of photovoltaic cells, each **employing** different materials and technologies to convert sunlight into electricity.",
        ru: "Существует несколько типов фотоэлементов, причём в каждом используются свои материалы и технологии преобразования солнечного света в электричество.",
        notes: [n("each employing", P1A, ABS_END, "причём каждый использует")]
      },
      {
        en: "Different molecules have different speeds, the average speed of all molecules **remaining** the same as long as the temperature is constant.",
        ru: "Разные молекулы имеют разную скорость, а средняя скорость всех молекул остаётся неизменной, пока температура постоянна.",
        notes: [n("the average speed remaining", P1A, ABS_END, "а средняя скорость остаётся")]
      },
      {
        en: "The electric current is the flow of electrons through a metal conductor, these electrons **flowing** along a wire just like water runs through a pipe.",
        ru: "Электрический ток — это поток электронов через металлический проводник, причём электроны текут по проводу так же, как вода течёт по трубе.",
        notes: [n("these electrons flowing", P1A, ABS_END, "причём электроны текут")]
      },
      {
        en: "We are quite familiar with two properties of an electric current – resistance and self-inductance, the latter property **having been discovered** by Faraday.",
        ru: "Нам хорошо знакомы два свойства электрического тока — сопротивление и самоиндукция, причём последнее было открыто Фарадеем.",
        notes: [n("the latter property having been discovered", PPP, ABS_END, "причём последнее было открыто")]
      },
      {
        en: "The unfamiliar at that time substance **exposing** its magnetic properties was **called** Magnus after its discoverer, this name **having come** down to us as \"Magnet\".",
        ru: "Неизвестное в то время вещество, проявлявшее магнитные свойства, было названо «Магнус» по имени первооткрывателя, и это название дошло до нас в виде слова «магнит».",
        notes: [
          n("exposing", P1A, POST, "проявлявшее"),
          n("was called", P2 + " в составе Past Simple Passive", PASSIVE, "было названо"),
          n("this name having come", PPA, ABS_END, "и это название дошло")
        ]
      },
      {
        en: "In radio engineering work it is common to use the term «megaohm» instead of large figures **amounting** to millions of ohms, the prefix «mega» **standing** for a million.",
        ru: "В радиотехнике принято использовать термин «мегаом» вместо больших чисел, составляющих миллионы ом, причём приставка «мега» означает миллион.",
        notes: [
          n("amounting", P1A, POST, "составляющих"),
          n("the prefix standing", P1A, ABS_END, "причём приставка означает")
        ]
      },
      {
        en: "The Mathematical Principles of Natural Philosophy were **published** by Newton in 1687, this book **having become** the foundation of a mechanistic view of the solar system.",
        ru: "«Математические начала натуральной философии» были опубликованы Ньютоном в 1687 году, и эта книга стала основой механистического взгляда на Солнечную систему.",
        notes: [
          n("were published", P2 + " в составе Past Simple Passive", PASSIVE, "были опубликованы"),
          n("this book having become", PPA, ABS_END, "и эта книга стала")
        ]
      }
    ]
  },
  {
    id: "3-1",
    group: "КМ3",
    title: "Тема 3.1",
    subtitle: "Герундий в функции обстоятельства (всегда с предлогом)",
    sentences: [
      {
        en: "By **taking away** heat, we freeze water into ice.",
        ru: "Отнимая тепло, мы превращаем воду в лёд.",
        notes: [
          n("taking away", GER + " с предлогом by", "Обстоятельство образа действия (как?)", "отнимая")
        ]
      },
      {
        en: "The energy of any body is its power for **doing** work.",
        ru: "Энергия любого тела — это его способность совершать работу.",
        notes: [
          n("doing", GER + " с предлогом for", POST + " (к существительному power; по-русски — инфинитив)", "совершать")
        ]
      },
      {
        en: "There are two ways of **stating** the third law of motion.",
        ru: "Существует два способа формулировки третьего закона движения.",
        notes: [
          n("stating", GER + " с предлогом of", POST + " (к существительному ways; по-русски — существительное)", "формулировки")
        ]
      },
      {
        en: "By **cooling** we can turn substances into solids or liquids.",
        ru: "Охлаждая, мы можем превращать вещества в твёрдые или жидкие.",
        notes: [
          n("cooling", GER + " с предлогом by", "Обстоятельство образа действия (как?)", "охлаждая")
        ]
      },
      {
        en: "They have developed a new technique for **obtaining** this substance.",
        ru: "Они разработали новый метод получения этого вещества.",
        notes: [
          n("obtaining", GER + " с предлогом for", POST + " (к существительному technique; по-русски — существительное)", "получения")
        ]
      },
      {
        en: "What is the difference in these two methods of **solving** the problem?",
        ru: "В чём разница этих двух методов решения задачи?",
        notes: [
          n("solving", GER + " с предлогом of", POST + " (к существительному methods; по-русски — существительное)", "решения")
        ]
      },
      {
        en: "**Before reaching** any conclusions, we should discuss everything in detail.",
        ru: "Прежде чем делать какие-либо выводы, мы должны обсудить всё подробно.",
        notes: [
          n("reaching", GER + " с предлогом before", "Обстоятельство времени (когда?; before = прежде чем)", "прежде чем делать (дойти до)")
        ]
      },
      {
        en: "**After studying** at the university, young people became skilled specialists.",
        ru: "Окончив университет, молодые люди стали квалифицированными специалистами.",
        notes: [
          n("studying", GER + " с предлогом after", "Обстоятельство времени (когда?)", "окончив (после того как закончили)")
        ]
      },
      {
        en: "Weather stations report atmospheric conditions for **making** weather maps.",
        ru: "Метеостанции сообщают данные о состоянии атмосферы для составления карт погоды.",
        notes: [
          n("making", GER + " с предлогом for", "Обстоятельство цели (для чего?)", "для составления")
        ]
      },
      {
        en: "A barometer is an instrument for **measuring** the pressure of the atmosphere.",
        ru: "Барометр — это прибор для измерения давления атмосферы.",
        notes: [
          n("measuring", GER + " с предлогом for", POST + " (к существительному instrument; по-русски — существительное)", "для измерения")
        ]
      },
      {
        en: "We may change the pressure of air by **removing** some of it or by **heating** or **cooling**.",
        ru: "Мы можем изменить давление воздуха, удалив часть его, нагревая или охлаждая.",
        notes: [
          n("removing", GER + " с предлогом by", "Обстоятельство образа действия (как?)", "удалив (удаляя)"),
          n("heating", GER + " с предлогом by", "Обстоятельство образа действия", "нагревая"),
          n("cooling", GER + " с предлогом by", "Обстоятельство образа действия", "охлаждая")
        ]
      },
      {
        en: "By **repeating** experiments, one gets additional data which help **arriving** at right conclusions.",
        ru: "Повторяя эксперименты, можно получить дополнительные данные, которые помогают прийти к правильным выводам.",
        notes: [
          n("repeating", GER + " с предлогом by", "Обстоятельство образа действия (как?)", "повторяя"),
          n("arriving", GER + " (после глагола help)", "Дополнение к глаголу help (help doing)", "прийти")
        ]
      },
      {
        en: "**Without understanding** the laws of mechanics, it is difficult for the students to take part in research.",
        ru: "Не понимая законов механики, студентам трудно принимать участие в исследованиях.",
        notes: [
          n("understanding", GER + " с предлогом without", "Обстоятельство условия (условный оттенок)", "не понимая")
        ]
      },
      {
        en: "In his report he emphasized the complexity of **producing** these materials in sufficient quantities.",
        ru: "В своём докладе он подчеркнул сложность производства этих материалов в достаточных количествах.",
        notes: [
          n("producing", GER + " с предлогом of", POST + " (к существительному complexity; по-русски — существительное)", "производства")
        ]
      },
      {
        en: "Another interesting device for **testing** materials at high temperature and speed is hypersonic shock tube.",
        ru: "Другим интересным прибором для испытания материалов при высоких температурах и скоростях является гиперзвуковая ударная труба.",
        notes: [
          n("testing", GER + " с предлогом for", POST + " (к существительному device; по-русски — существительное)", "для испытания")
        ]
      },
      {
        en: "**On joining** the upper ends of the metals with a metal wire, we caused the current to flow through the wire.",
        ru: "Соединив верхние концы металлов металлическим проводом, мы заставили ток течь по проводу.",
        notes: [
          n("joining", GER + " с предлогом on (on = после того как)", "Обстоятельство времени (когда?)", "соединив")
        ]
      },
      {
        en: "By **observing** facts and by **using** the results of the experiments, we come to the real knowledge of natural phenomena.",
        ru: "Наблюдая факты и используя результаты экспериментов, мы приходим к истинному знанию природных явлений.",
        notes: [
          n("observing", GER + " с предлогом by", "Обстоятельство образа действия (как?)", "наблюдая"),
          n("using", GER + " с предлогом by", "Обстоятельство образа действия", "используя")
        ]
      },
      {
        en: "By **studying** Newton's laws of motion, we learn that they are applied not only in engineering but in our daily life as well.",
        ru: "Изучая законы движения Ньютона, мы узнаём, что они применяются не только в технике, но и в нашей повседневной жизни.",
        notes: [
          n("studying", GER + " с предлогом by", "Обстоятельство образа действия (как?)", "изучая")
        ]
      },
      {
        en: "Thermal input power can be converted directly to electrical power for **lighting**, **operating** electrical equipment, and other work.",
        ru: "Тепловая входная мощность может быть непосредственно преобразована в электрическую энергию для освещения, работы электрооборудования и других нужд.",
        notes: [
          n("lighting", GER + " с предлогом for", "Обстоятельство цели (для чего?)", "для освещения"),
          n("operating", GER + " с предлогом for", "Обстоятельство цели", "для работы (электрооборудования)")
        ]
      },
      {
        en: "The method of **connecting** the armature and field winding of the series motor is exactly the same as for corresponding generator.",
        ru: "Метод соединения якоря и обмотки возбуждения двигателя с последовательным возбуждением в точности такой же, как и у соответствующего генератора.",
        notes: [
          n("connecting", GER + " с предлогом of", POST + " (к существительному method; по-русски — существительное)", "соединения")
        ]
      },
      {
        en: "**On being set** on a proper orbit, a satellite can either passively fly along it or independently adjust its orbit and change altitude.",
        ru: "Оказавшись на нужной орбите, спутник может либо пассивно лететь по ней, либо самостоятельно корректировать орбиту и менять высоту.",
        notes: [
          n("being set", GER_PS + " с предлогом on", "Обстоятельство времени (когда?)", "оказавшись на")
        ]
      },
      {
        en: "Materials for **making** plastics can be classified in terms of whether they can be softened or formed only once, or as often as desired.",
        ru: "Материалы для изготовления пластмасс можно классифицировать в зависимости от того, могут ли они размягчаться или формоваться лишь один раз или столько раз, сколько требуется.",
        notes: [
          n("making", GER + " с предлогом for", POST + " (к существительному materials; по-русски — существительное)", "для изготовления")
        ]
      },
      {
        en: "Systems for **detecting**, **inspecting**, and, if necessary, **attacking** enemy satellites and space vehicles can be either ground- or space-based.",
        ru: "Системы для обнаружения, наблюдения и, при необходимости, уничтожения вражеских спутников и космических аппаратов могут быть как наземными, так и космическими.",
        notes: [
          n("detecting", GER + " с предлогом for", POST + " (к systems)", "для обнаружения"),
          n("inspecting", GER + " с предлогом for", POST, "для наблюдения"),
          n("attacking", GER + " с предлогом for", POST, "для уничтожения (атаки)")
        ]
      },
      {
        en: "The second law of motion provides scientists with a means for **measuring** forces, which is of great importance in **planning** the orbits for artificial satellites.",
        ru: "Второй закон движения даёт учёным средство для измерения сил, что имеет большое значение при расчёте орбит искусственных спутников.",
        notes: [
          n("measuring", GER + " с предлогом for", POST + " (к means; по-русски — существительное)", "для измерения"),
          n("planning", GER + " с предлогом in", "Обстоятельство времени (при чём?)", "при расчёте (планировании)")
        ]
      },
      {
        en: "The newly developed technique allows 3-D **mapping** of the crystal structure and can be carried out **using** a transmission electron microscope, an instrument found in many research laboratories.",
        ru: "Недавно разработанный метод позволяет получать трёхмерную карту кристаллической структуры и может быть реализован с помощью просвечивающего электронного микроскопа — прибора, имеющегося во многих исследовательских лабораториях.",
        notes: [
          n("mapping", GER + " (после глагола allows)", "Дополнение к allows (allow doing)", "получать карту (картировать)"),
          n("using", GER + " (оборот с предлогом with)", "Обстоятельство образа действия (как?)", "с помощью")
        ]
      }
    ]
  },
  {
    id: "3-2",
    group: "КМ3",
    title: "Тема 3.2",
    subtitle: "Герундий в функции подлежащего и дополнения",
    sentences: [
      {
        en: "**Defining** temperature is not so easy.",
        ru: "Дать определение температуры не так просто.",
        notes: [
          n("defining", GER, "Подлежащее (кто? что?)", "дать определение (определить)")
        ]
      },
      {
        en: "**Breaking** the circuit causes **sparking**.",
        ru: "Размыкание цепи вызывает искрение.",
        notes: [
          n("breaking", GER, "Подлежащее (кто? что?)", "размыкание"),
          n("sparking", GER, "Прямое дополнение (что вызывает?)", "искрение")
        ]
      },
      {
        en: "The turbulent flow of gases produces **cooling**.",
        ru: "Турбулентное течение газов вызывает охлаждение.",
        notes: [
          n("cooling", GER, "Прямое дополнение (что вызывает?)", "охлаждение")
        ]
      },
      {
        en: "These instruments require automatic **programming**.",
        ru: "Эти приборы требуют автоматического программирования.",
        notes: [
          n("programming", GER, "Прямое дополнение (чего требуют?)", "программирования")
        ]
      },
      {
        en: "The process consists in **uniting** two elemental gases.",
        ru: "Процесс состоит в соединении двух простых газов.",
        notes: [
          n("uniting", GER + " с предлогом in", "Предложное (косвенное) дополнение (в чём?)", "в соединении")
        ]
      },
      {
        en: "We thought of **starting** another series of experiments.",
        ru: "Мы подумали о начале новой серии экспериментов.",
        notes: [
          n("starting", GER + " с предлогом of", "Предложное (косвенное) дополнение (о чём?)", "о начале")
        ]
      },
      {
        en: "**Having proved** the validity of his theory, he went on **working** on it.",
        ru: "Доказав справедливость своей теории, он продолжал работать над ней.",
        notes: [
          n("having proved", GER_PRF, "Обстоятельство времени (когда?; действие раньше сказуемого)", "доказав"),
          n("working", GER + " (после go on)", "Дополнение к глаголу go on (go on doing)", "работать")
        ]
      },
      {
        en: "**Programming** a computer involves **analysing** the problem for solving.",
        ru: "Программирование компьютера включает анализ задачи, которую нужно решить.",
        notes: [
          n("programming", GER, "Подлежащее (кто? что?)", "программирование"),
          n("analysing", GER, "Прямое дополнение (что включает?)", "анализ")
        ]
      },
      {
        en: "**Landing** on the planets will vary according to atmospheric conditions.",
        ru: "Посадка на планеты будет различаться в зависимости от условий атмосферы.",
        notes: [
          n("landing", GER, "Подлежащее (что будет различаться?)", "посадка")
        ]
      },
      {
        en: "Big rockets have been used for **launching** satellites into the Earth orbit.",
        ru: "Были использованы большие ракеты для выведения спутников на околоземную орбиту.",
        notes: [
          n("launching", GER + " с предлогом for", "Предложное дополнение (для чего?)", "для выведения")
        ]
      },
      {
        en: "The professor told us about **experimenting** and necessity of **observing** facts.",
        ru: "Профессор рассказал нам об экспериментировании и необходимости наблюдения фактов.",
        notes: [
          n("experimenting", GER + " с предлогом about", "Предложное дополнение (о чём?)", "об экспериментировании"),
          n("observing", GER + " с предлогом of", POST + " (к necessity; по-русски — существительное)", "наблюдения")
        ]
      },
      {
        en: "**Launching** a man or a crew into space can be accomplished in several ways.",
        ru: "Запуск человека или экипажа в космос может быть осуществлён несколькими способами.",
        notes: [
          n("launching", GER, "Подлежащее (что может быть осуществлено?)", "запуск")
        ]
      },
      {
        en: "**Having analyzed** received data, they suggested **carrying out** the experiment again.",
        ru: "Проанализировав полученные данные, они предложили провести эксперимент заново.",
        notes: [
          n("having analyzed", GER_PRF, "Обстоятельство времени (когда?; действие раньше сказуемого)", "проанализировав"),
          n("carrying out", GER + " (после suggested)", "Дополнение к suggested (suggest doing)", "провести")
        ]
      },
      {
        en: "It should be noted that this is the maximum error obtained by **adding** individual errors.",
        ru: "Следует отметить, что это — максимальная ошибка, полученная путём сложения отдельных ошибок.",
        notes: [
          n("adding", GER + " с предлогом by", "Обстоятельство образа действия (как?)", "путём сложения")
        ]
      },
      {
        en: "Radar is used in **finding** the position of a target with respect to a fixed point on the ground.",
        ru: "Радар используется для определения положения цели относительно неподвижной точки на земле.",
        notes: [
          n("finding", GER + " с предлогом in", "Предложное дополнение (в чём?)", "для определения")
        ]
      },
      {
        en: "**Increasing** the physical size of the antenna is a very effective means for **increasing** the range.",
        ru: "Увеличение физических размеров антенны — очень эффективное средство увеличения дальности.",
        notes: [
          n("increasing", GER, "Подлежащее (что является средством?)", "увеличение"),
          n("increasing", GER + " с предлогом for", POST + " (к means; по-русски — существительное)", "увеличения дальности")
        ]
      },
      {
        en: "An analog computer operates by **using** physical analogs of numerical measurements.",
        ru: "Аналоговый компьютер работает, используя физические аналоги числовых измерений.",
        notes: [
          n("using", GER + " с предлогом by", "Обстоятельство образа действия (как?)", "используя")
        ]
      },
      {
        en: "**Changing** the resistance of a circuit is one of the methods of **controlling** the flow of current in a circuit.",
        ru: "Изменение сопротивления цепи — один из методов регулирования потока тока в цепи.",
        notes: [
          n("changing", GER, "Подлежащее (что является методом?)", "изменение"),
          n("controlling", GER + " с предлогом of", POST + " (к methods; по-русски — существительное)", "регулирования")
        ]
      },
      {
        en: "This coefficient was measured by **applying** to the input of the system d-c signals in the form of square pulses.",
        ru: "Этот коэффициент был измерен подачей на вход системы постоянных сигналов в форме прямоугольных импульсов.",
        notes: [
          n("applying", GER + " с предлогом by", "Обстоятельство образа действия (как?)", "путём подачи")
        ]
      },
      {
        en: "**Representing** the electric field by means of these lines helps us **to picture** the forces between the charged bodies.",
        ru: "Изображение электрического поля с помощью этих линий помогает нам представить силы между заряженными телами.",
        notes: [
          n("representing", GER, "Подлежащее (что помогает?)", "изображение"),
          n("to picture", "Инфинитив (сложное дополнение help us to do)", "Дополнение к helps", "представить")
        ]
      },
      {
        en: "More complicated operations are achieved by **combining** simpler operations according to the instructions.",
        ru: "Более сложные операции выполняются путём комбинирования более простых операций в соответствии с инструкциями.",
        notes: [
          n("combining", GER + " с предлогом by", "Обстоятельство образа действия (как?)", "путём комбинирования")
        ]
      },
      {
        en: "**Measuring** the temperature of the dew point is the most accurate method of **determining** relative humidity.",
        ru: "Измерение температуры точки росы — наиболее точный метод определения относительной влажности.",
        notes: [
          n("measuring", GER, "Подлежащее (что является методом?)", "измерение"),
          n("determining", GER + " с предлогом of", POST + " (к method; по-русски — существительное)", "определения")
        ]
      },
      {
        en: "The delay associated with the L/R of the control circuit may be improved by merely **adding** series resistance.",
        ru: "Задержка, связанная с L/R цепи управления, может быть уменьшена простым добавлением последовательного сопротивления.",
        notes: [
          n("adding", GER + " с предлогом by", "Обстоятельство образа действия (как?)", "добавлением")
        ]
      },
      {
        en: "**Demonstrating** the first law of motion on the Earth's surface is rather difficult due to tremendous forces of gravity.",
        ru: "Продемонстрировать первый закон движения на поверхности Земли довольно трудно из-за огромных сил тяжести.",
        notes: [
          n("demonstrating", GER, "Подлежащее (что трудно?)", "продемонстрировать (демонстрация)")
        ]
      },
      {
        en: "The magnetic field is generally produced by **placing** a permanent magnet externally to the anode so that the field is parallel to the cathode.",
        ru: "Магнитное поле обычно создаётся помещением постоянного магнита снаружи анода так, что поле параллельно катоду.",
        notes: [
          n("placing", GER + " с предлогом by", "Обстоятельство образа действия (как?)", "помещением")
        ]
      }
    ]
  },
  {
    id: "3-3",
    group: "КМ3",
    title: "Тема 3.3",
    subtitle: "Независимый герундиальный оборот",
    sentences: [
      {
        en: "He insisted on **our adopting** a new plan.",
        ru: "Он настаивал на том, чтобы мы приняли новый план.",
        notes: [
          n("our adopting", NAGC + ": притяж. местоимение + герундий", "Предложное дополнение (на чём?)", "на том, чтобы мы приняли")
        ]
      },
      {
        en: "They insisted on **the committee's postponing** the discussion.",
        ru: "Они настаивали на том, чтобы комитет отложил обсуждение.",
        notes: [
          n("the committee's postponing", NAGC + ": существительное в притяжательном падеже + герундий", "Предложное дополнение (на чём?)", "на том, чтобы комитет отложил")
        ]
      },
      {
        en: "**Cogeneration's being** an off-the-shelf technology is its benefit.",
        ru: "То, что когенерация — готовая (серийная) технология, является её преимуществом.",
        notes: [
          n("cogeneration's being", NAGC + ": существительное в притяжательном падеже + герундий", "Подлежащее (что является преимуществом?)", "то, что когенерация является")
        ]
      },
      {
        en: "Silicon resembles carbon in **its forming** a series of volatile hydrates.",
        ru: "Кремний похож на углерод тем, что образует ряд летучих гидратов.",
        notes: [
          n("its forming", NAGC, "Предложное дополнение (в чём похож?)", "тем, что он образует")
        ]
      },
      {
        en: "We know of **silver and copper being** very good conductors of electricity.",
        ru: "Мы знаем, что серебро и медь — очень хорошие проводники электричества.",
        notes: [
          n("silver and copper being", NAGC + ": существительное в общем падеже + герундий", "Дополнение (что знаем?)", "что серебро и медь являются")
        ]
      },
      {
        en: "Due to **working together** we succeeded in **our finishing** the work on time.",
        ru: "Благодаря совместной работе нам удалось завершить работу вовремя.",
        notes: [
          n("working", GER + " с предлогом due to", "Обстоятельство причины (почему?)", "благодаря (тому, что работали)"),
          n("our finishing", NAGC, "Дополнение (в чём удалось?)", "что мы завершили")
        ]
      },
      {
        en: "**Newton's having stated** his laws of motion is very important for modern science.",
        ru: "То, что Ньютон сформулировал свои законы движения, очень важно для современной науки.",
        notes: [
          n("Newton's having stated", NAGC + " с Perfect-герундием", "Подлежащее (что важно?)", "то, что Ньютон сформулировал")
        ]
      },
      {
        en: "We know of **any object being prevented** from moving at constant speed by air friction.",
        ru: "Нам известно, что любое тело не может двигаться с постоянной скоростью из-за силы трения о воздух.",
        notes: [
          n("any object being prevented", NAGC + " (Passive)", "Дополнение (что известно?)", "что любое тело удерживается")
        ]
      },
      {
        en: "**Most metals' being** good conductors of heat and electricity made them widely used in industry.",
        ru: "То, что большинство металлов являются хорошими проводниками тепла и электричества, сделало их широко используемыми в промышленности.",
        notes: [
          n("most metals' being", NAGC + ": существительное во мн. ч. в притяжательном падеже", "Подлежащее (что сделало?)", "то, что большинство металлов являются")
        ]
      },
      {
        en: "One cannot carry out experiments without **lab technique having been mastered** well enough.",
        ru: "Нельзя проводить эксперименты, не овладев в достаточной степени лабораторной техникой.",
        notes: [
          n("lab technique having been mastered", NAGC + " с Perfect Passive-герундием", "Обстоятельство условия (условный оттенок)", "не овладев (овладев которой)")
        ]
      },
      {
        en: "We have heard of **Newton having been suggested** to put down on paper his ideas which he did.",
        ru: "Нам известно, что Ньютону предложили изложить на бумаге свои идеи, что он и сделал.",
        notes: [
          n("Newton having been suggested", NAGC + " с Perfect Passive-герундием", "Дополнение (о чём слышали?)", "что Ньютону предложили"),
          n("to put down", "Инфинитив (сложное подлежащее в действительном залоге)", "Подлежащее (кому предложили?)", "изложить")
        ]
      },
      {
        en: "The motion of this body was changed because of **its having been acted upon** by an external force.",
        ru: "Движение этого тела изменилось, потому что на него действовала внешняя сила.",
        notes: [
          n("its having been acted upon", NAGC + " с Perfect Passive-герундием", "Обстоятельство причины (почему?)", "потому что на него действовала")
        ]
      },
      {
        en: "**Marie Sklodowska's having made** numerous experiments resulted in **isolating** two new elements.",
        ru: "То, что Мария Склодовская провела множество экспериментов, привело к выделению двух новых элементов.",
        notes: [
          n("Marie Sklodowska's having made", NAGC + " с Perfect-герундием", "Подлежащее (что привело?)", "то, что провела"),
          n("isolating", GER + " с предлогом in", "Предложное дополнение (к чему привело?)", "к выделению")
        ]
      },
      {
        en: "Mica is widely used as a dielectric in high grade capacitors because of **its having** high voltage strength.",
        ru: "Слюда широко используется как диэлектрик в высококачественных конденсаторах благодаря тому, что она обладает высокой электрической прочностью.",
        notes: [
          n("its having", NAGC, "Обстоятельство причины (почему?)", "благодаря тому, что она обладает")
        ]
      },
      {
        en: "**The Curies' having discovered** radium gave them the possibility of **discovering** other radioactive elements.",
        ru: "То, что супруги Кюри открыли радий, дало им возможность открыть другие радиоактивные элементы.",
        notes: [
          n("the Curies' having discovered", NAGC + " с Perfect-герундием", "Подлежащее (что дало?)", "то, что открыли"),
          n("discovering", GER + " с предлогом of", "Дополнение (возможность чего?)", "открыть (открытия)")
        ]
      },
      {
        en: "According to the Newton's second law, the motion of a body is changed as a result of **its being acted upon** by a force.",
        ru: "Согласно второму закону Ньютона, движение тела изменяется в результате действия на него силы.",
        notes: [
          n("its being acted upon", NAGC + " (Passive)", "Предложное дополнение (в результате чего?)", "в результате того, что на него действует")
        ]
      },
      {
        en: "There is a constant danger for every spaceship of **being burned up** because of **its having been set** on a wrong orbit.",
        ru: "Существует постоянная опасность для каждого космического корабля сгореть, потому что он был выведен на неверную орбиту.",
        notes: [
          n("being burned up", GER_PS + " (в обороте с of)", "Дополнение (опасность чего?)", "сгореть (быть сожжённым)"),
          n("its having been set", NAGC + " с Perfect Passive-герундием", "Обстоятельство причины (почему?)", "потому что он был выведен")
        ]
      },
      {
        en: "The state of rest or uniform motion of a body is changed after **its being acted upon** by some external unbalanced force.",
        ru: "Состояние покоя или равномерного движения тела изменяется после того, как на него подействует какая-либо внешняя неуравновешенная сила.",
        notes: [
          n("its being acted upon", NAGC + " (Passive)", "Обстоятельство времени (когда?)", "после того как на него подействует")
        ]
      },
      {
        en: "Graphite is used as a moderator in the atomic pile because of **its being cheap** and its ability to stand high temperatures.",
        ru: "Графит используется в качестве замедлителя в атомном реакторе, потому что он дёшев и способен выдерживать высокие температуры.",
        notes: [
          n("its being cheap", NAGC, "Обстоятельство причины (почему?)", "потому что он дёшев")
        ]
      },
      {
        en: "We know of **his having spent** more than 20 years of scientific thinking before finally **formulating** the ideas on paper.",
        ru: "Нам известно, что он потратил более 20 лет научных размышлений, прежде чем наконец сформулировал свои идеи на бумаге.",
        notes: [
          n("his having spent", NAGC + " с Perfect-герундием", "Дополнение (что известно?)", "что он потратил"),
          n("formulating", GER + " с предлогом before", "Обстоятельство времени (когда?)", "прежде чем сформулировал")
        ]
      },
      {
        en: "When a bar of iron is thrust into a fire it becomes heated due to **the atoms comprising the bar becoming agitated**.",
        ru: "Когда железный брусок помещают в огонь, он нагревается, потому что атомы, составляющие брусок, приходят в возбуждённое состояние.",
        notes: [
          n("the atoms comprising the bar becoming agitated", NAGC + ": существительное с определением + герундий", "Обстоятельство причины (почему?)", "потому что атомы возбуждаются")
        ]
      },
      {
        en: "**Newton's having established** the law of inertia has provided scientists with a means for **setting** satellites on proper orbits.",
        ru: "То, что Ньютон установил закон инерции, дало учёным средство для выведения спутников на нужные орбиты.",
        notes: [
          n("Newton's having established", NAGC + " с Perfect-герундием", "Подлежащее (что дало?)", "то, что установил"),
          n("setting", GER + " с предлогом for", POST + " (к means; по-русски — существительное)", "выведения")
        ]
      },
      {
        en: "When photons strike the absorption layer, we know of **their energizing electrons**, **causing** them **to break free** from their atomic bonds.",
        ru: "Когда фотоны попадают на поглощающий слой, нам известно, что они придают энергию электронам, вызывая их освобождение от атомных связей.",
        notes: [
          n("their energizing electrons", NAGC, "Дополнение (что известно?)", "что они придают энергию электронам"),
          n("causing", GER + " (герундиальный оборот)", "Обстоятельство результата / следствия", "вызывая"),
          n("to break free", "Инфинитив (сложное дополнение cause them to do)", "Дополнение к causing", "освободиться")
        ]
      },
      {
        en: "The electrons flow to the cathode because of **their potential at the anode being more negative** and **their having** a higher potential energy.",
        ru: "Электроны текут к катоду, потому что их потенциал на аноде более отрицателен и они обладают более высокой потенциальной энергией.",
        notes: [
          n("their potential at the anode being more negative", NAGC, "Обстоятельство причины (почему?)", "потому что их потенциал более отрицателен"),
          n("their having", NAGC, "Обстоятельство причины (почему?)", "и обладают")
        ]
      },
      {
        en: "Scientists are able to measure the forces of gravitation at any point on the Earth's surface due to **Newton's having provided** them with the second law of motion.",
        ru: "Учёные могут измерять силы тяжести в любой точке поверхности Земли благодаря тому, что Ньютон дал им второй закон движения.",
        notes: [
          n("Newton's having provided", NAGC + " с Perfect-герундием", "Обстоятельство причины (почему?)", "благодаря тому, что дал")
        ]
      }
    ]
  },
  {
    id: "4-3",
    group: "КМ3",
    title: "Тема 4.3",
    subtitle: "Устойчивые выражения и сложные предлоги",
    sentences: [
      {
        en: "This is **the only** reasonable suggestion.",
        ru: "Это единственное разумное предложение.",
        notes: [
          n("the only", "Устойчивое выражение", "Определение", "единственное")
        ]
      },
      {
        en: "We must **by all means** complete this work in time.",
        ru: "Мы должны во что бы то ни стало завершить эту работу вовремя.",
        notes: [
          n("by all means", "Устойчивое выражение", "Вводный оборот (усиление)", "во что бы то ни стало, обязательно")
        ]
      },
      {
        en: "**By no means** can this device be put into operation.",
        ru: "Этот прибор ни в коем случае нельзя вводить в эксплуатацию.",
        notes: [
          n("by no means", "Устойчивое выражение", "Вводный оборот (усиление отрицания)", "ни в коем случае")
        ]
      },
      {
        en: "Iron is allotropic, **that is**, it exists in different forms.",
        ru: "Железо аллотропно, то есть существует в различных формах.",
        notes: [
          n("that is", "Устойчивое выражение", "Вводное пояснение", "то есть")
        ]
      },
      {
        en: "**The heavier** the substance, **the more complicated** is the atom.",
        ru: "Чем тяжелее вещество, тем сложнее атом.",
        notes: [
          n("the heavier ... the more complicated", "Устойчивая конструкция the ... the", "Сравнительная конструкция", "чем тяжелее..., тем сложнее...")
        ]
      },
      {
        en: "**But for** the atmosphere, no life would be possible on the Earth.",
        ru: "Если бы не атмосфера, на Земле не было бы жизни.",
        notes: [
          n("but for", "Сложный предлог", "Обстоятельство условия", "если бы не")
        ]
      },
      {
        en: "A considerable amount of heat is radiated by the body **in question**.",
        ru: "Значительное количество тепла излучается рассматриваемым телом.",
        notes: [
          n("in question", "Устойчивое выражение", POST + " (после существительного)", "рассматриваемым, вопросу")
        ]
      },
      {
        en: "The molecules are held in position **due to** the rigidity of the crystal.",
        ru: "Молекулы удерживаются в положении благодаря жёсткости кристалла.",
        notes: [
          n("due to", "Сложный предлог", "Обстоятельство причины", "благодаря, вследствие, из-за")
        ]
      },
      {
        en: "**In order to** break this glass a great amount of force must be applied.",
        ru: "Чтобы разбить это стекло, необходимо приложить большую силу.",
        notes: [
          n("in order to", "Устойчивое выражение", "Обстоятельство цели", "для того чтобы")
        ]
      },
      {
        en: "Differential equations are used in mathematics **as often as** in physics.",
        ru: "Дифференциальные уравнения используются в математике так же часто, как и в физике.",
        notes: [
          n("as often as", "Устойчивая конструкция as ... as", "Сравнение", "так же часто, как")
        ]
      },
      {
        en: "**The better** the experimental technique, **the more reliable** are the results.",
        ru: "Чем лучше экспериментальная техника, тем надёжнее результаты.",
        notes: [
          n("the better ... the more reliable", "Устойчивая конструкция the ... the", "Сравнительная конструкция", "чем лучше..., тем надёжнее...")
        ]
      },
      {
        en: "When an electric charge in motion, it is **referred to** as an electric current.",
        ru: "Когда электрический заряд находится в движении, его называют электрическим током.",
        notes: [
          n("referred to", "Устойчивое выражение", PASSIVE + " (is referred to as — называется)", "называют, ссылаются на")
        ]
      },
      {
        en: "**The only** exception to this is hydrogen whose nucleus contains only the proton.",
        ru: "Единственное исключение из этого — водород, ядро которого содержит только протон.",
        notes: [
          n("the only", "Устойчивое выражение", "Определение", "единственное")
        ]
      },
      {
        en: "The laboratory just **referred to** was provided with the most modern measuring devices.",
        ru: "Только что упомянутая лаборатория была оснащена самыми современными измерительными приборами.",
        notes: [
          n("referred to", "Устойчивое выражение", POST + " (после существительного)", "упомянутая")
        ]
      },
      {
        en: "**In order to** prevent corrosion, metals used in industry must be covered with special paint.",
        ru: "Чтобы предотвратить коррозию, металлы, используемые в промышленности, должны быть покрыты специальной краской.",
        notes: [
          n("in order to", "Устойчивое выражение", "Обстоятельство цели", "для того чтобы")
        ]
      },
      {
        en: "**The higher** the resistance of the wire, **the hotter** it will get under the flow of a given current.",
        ru: "Чем выше сопротивление провода, тем сильнее он нагреется при прохождении заданного тока.",
        notes: [
          n("the higher ... the hotter", "Устойчивая конструкция the ... the", "Сравнительная конструкция", "чем выше..., тем сильнее...")
        ]
      },
      {
        en: "The question of setting a unit of e.m.f. can be **dealt with** in the same way **as for** current.",
        ru: "Вопрос о введении единицы ЭДС может быть решён так же, как и для тока.",
        notes: [
          n("dealt with", "Устойчивое выражение", PASSIVE + " (be dealt with — решаться, иметь дело с)", "решён"),
          n("as for", "Устойчивое выражение", "Сравнительный оборот", "как и для, что касается")
        ]
      },
      {
        en: "Electrolytes conduct the current **owing to** the presence of ions both positive and negative.",
        ru: "Электролиты проводят ток благодаря наличию как положительных, так и отрицательных ионов.",
        notes: [
          n("owing to", "Сложный предлог", "Обстоятельство причины", "благодаря, вследствие")
        ]
      },
      {
        en: "This error in calculations is **due to** numerical integration of the differential equation.",
        ru: "Эта ошибка в расчётах обусловлена численным интегрированием дифференциального уравнения.",
        notes: [
          n("due to", "Сложный предлог", "Обстоятельство причины", "обусловлена, из-за")
        ]
      },
      {
        en: "**But for** his help, it would have been extremely difficult to deal with such accurate measurements.",
        ru: "Если бы не его помощь, было бы чрезвычайно трудно справиться с такими точными измерениями.",
        notes: [
          n("but for", "Сложный предлог", "Обстоятельство условия", "если бы не")
        ]
      },
      {
        en: "A vehicle is considered a sounding rocket **provided** it rises above the atmosphere out to 4000 miles.",
        ru: "Летательный аппарат считается зондировочной ракетой при условии, что он поднимается выше атмосферы на расстояние до 4000 миль.",
        notes: [
          n("provided", "Устойчивое выражение (provided (that))", "Обстоятельство условия", "при условии, что")
        ]
      },
      {
        en: "The efficiency of the machine is 85%, **the rest of** the power being lost in the resistance to friction.",
        ru: "КПД машины составляет 85%, остальная мощность теряется на преодоление трения.",
        notes: [
          n("the rest of", "Устойчивое выражение", "Определение", "остальная, остаток")
        ]
      },
      {
        en: "The experimenter will be able to carry out numerous tests **provided** he is given all necessary instruments.",
        ru: "Экспериментатор сможет провести многочисленные испытания при условии, что ему дадут все необходимые приборы.",
        notes: [
          n("provided", "Устойчивое выражение (provided (that))", "Обстоятельство условия", "при условии, что")
        ]
      },
      {
        en: "**As a matter of fact**, most of our knowledge of the atom nature has come from the work of physicists.",
        ru: "На самом деле большая часть наших знаний о природе атома получена из работ физиков.",
        notes: [
          n("as a matter of fact", "Устойчивое выражение", "Вводный оборот", "на самом деле, фактически")
        ]
      },
      {
        en: "The possibility of an insulator breakdown which is **referred to** in the above article was **due to** high voltage.",
        ru: "Возможность пробоя изолятора, о которой говорится в приведённой выше статье, была вызвана высоким напряжением.",
        notes: [
          n("referred to", "Устойчивое выражение", PASSIVE + " (в придаточном)", "о которой говорится"),
          n("due to", "Сложный предлог", "Обстоятельство причины", "вызвана, из-за")
        ]
      },
      {
        en: "**As a matter of fact**, the methods used in measuring activities depend upon well-known equilibrium laws.",
        ru: "На самом деле методы, используемые при измерении активности, зависят от общеизвестных законов равновесия.",
        notes: [
          n("as a matter of fact", "Устойчивое выражение", "Вводный оборот", "на самом деле, фактически")
        ]
      },
      {
        en: "Some metals, such as copper and silver, are particularly efficient **due to** the high density of free electrons.",
        ru: "Некоторые металлы, такие как медь и серебро, особенно эффективны благодаря высокой плотности свободных электронов.",
        notes: [
          n("due to", "Сложный предлог", "Обстоятельство причины", "благодаря, из-за")
        ]
      },
      {
        en: "Steam may be passed into an engine to produce mechanical energy. This, **in its turn**, may drive a dynamo.",
        ru: "Пар может быть подан в двигатель для получения механической энергии. Та, в свою очередь, может приводить в действие динамо.",
        notes: [
          n("in its turn", "Устойчивое выражение", "Вводный оборот", "в свою очередь")
        ]
      },
      {
        en: "**In case** the charges are far enough apart, the electric field can be approximated as zero for practical purposes.",
        ru: "В случае, если заряды достаточно далеко друг от друга, электрическое поле можно приближённо считать равным нулю для практических целей.",
        notes: [
          n("in case", "Сложный предлог (in case (of))", "Обстоятельство условия", "в случае, если")
        ]
      },
      {
        en: "**In dealing with** direct currents any potential difference in excess of five volts should be considered unsafe.",
        ru: "При работе с постоянными токами любая разность потенциалов более пяти вольт должна считаться небезопасной.",
        notes: [
          n("in dealing with", "Устойчивое выражение", "Обстоятельство времени / условия", "при работе с, имея дело с")
        ]
      },
      {
        en: "**The higher** the current flow, **due to** a higher voltage, **the greater** is the number of electron collisions per second.",
        ru: "Чем выше ток из-за более высокого напряжения, тем большее число столкновений электронов происходит в секунду.",
        notes: [
          n("the higher ... the greater", "Устойчивая конструкция the ... the", "Сравнительная конструкция", "чем выше..., тем больше..."),
          n("due to", "Сложный предлог", "Обстоятельство причины", "из-за")
        ]
      },
      {
        en: "**In order to** locate some defects in objects made of wood, rubber or metal, the laboratory assistant X-rays them.",
        ru: "Чтобы обнаружить дефекты в изделиях из дерева, резины или металла, лаборант просвечивает их рентгеном.",
        notes: [
          n("in order to", "Устойчивое выражение", "Обстоятельство цели", "чтобы, для того чтобы")
        ]
      },
      {
        en: "When an electric field acts upon the molecule of even a good insulator, there is a motion of electrons **due to** this field.",
        ru: "Когда электрическое поле действует на молекулу даже хорошего изолятора, возникает движение электронов из-за этого поля.",
        notes: [
          n("due to", "Сложный предлог", "Обстоятельство причины", "из-за, вследствие")
        ]
      },
      {
        en: "**In fact**, the diffraction phenomenon is very similar to the interference phenomenon and they both happen simultaneously.",
        ru: "Фактически явление дифракции очень похоже на явление интерференции, и оба происходят одновременно.",
        notes: [
          n("in fact", "Устойчивое выражение", "Вводный оборот", "фактически, на самом деле")
        ]
      },
      {
        en: "Our most accurate knowledge about climate sensitivity, **at least** so far, is based on empirical data from the earth's history.",
        ru: "Наши самые точные знания о чувствительности климата, по крайней мере до сих пор, основаны на эмпирических данных истории Земли.",
        notes: [
          n("at least", "Устойчивое выражение", "Вводный оборот", "по крайней мере")
        ]
      },
      {
        en: "The method of connecting the armature and field winding of the series motor is exactly the same **as for** the corresponding generator.",
        ru: "Метод соединения якоря и обмотки возбуждения двигателя с последовательным возбуждением в точности такой же, как и у соответствующего генератора.",
        notes: [
          n("as for", "Устойчивое выражение", "Сравнительный оборот", "как и для, что касается")
        ]
      },
      {
        en: "**In fact**, the voltage stress produced by the wave can be considered as resulting from the movement of the magnetic flux of the same wave.",
        ru: "Фактически электрическое напряжение, создаваемое волной, можно рассматривать как результат движения магнитного потока той же волны.",
        notes: [
          n("in fact", "Устойчивое выражение", "Вводный оборот", "фактически, на самом деле")
        ]
      },
      {
        en: "The 'preferential' scattering of radiation arises **because of** the mutual interaction between the electric and magnetic resonances of the nanosphere.",
        ru: "«Преференциальное» рассеяние излучения возникает из-за взаимодействия между электрическим и магнитным резонансами наносферы.",
        notes: [
          n("because of", "Сложный предлог", "Обстоятельство причины", "из-за, вследствие, благодаря")
        ]
      },
      {
        en: "In the Universe where all is in motion and nothing is fixed, only light always has the same speed, the speed of light being **the only** constant quality.",
        ru: "Во Вселенной, где всё находится в движении и ничто не неизменно, только свет всегда имеет одну и ту же скорость — скорость света является единственной постоянной величиной.",
        notes: [
          n("the only", "Устойчивое выражение", "Определение (именная часть сказуемого)", "единственной постоянной")
        ]
      },
      {
        en: "Iron is **by all means** the most important metal, not alone **because of** its comparative cheapness, but **because of** the high value of the permeability in most electric apparatus.",
        ru: "Железо во всех отношениях — самый важный металл, не только из-за его сравнительной дешевизны, но и из-за высокого значения проницаемости в большинстве электрических аппаратов.",
        notes: [
          n("by all means", "Устойчивое выражение", "Вводный оборот (усиление)", "во всех отношениях, во что бы то ни стало"),
          n("because of", "Сложный предлог", "Обстоятельство причины", "из-за, вследствие")
        ]
      }
    ]
  }
];
