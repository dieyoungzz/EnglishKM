// Грамматические темы. В тексте предложения причастия выделены **так**.
// notes: разбор каждого причастия — w (слово), type (форма), func (функция), ru (как переводится).
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
function n(w, type, func, ru) { return { w: w, type: type, func: func, ru: ru }; }

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
  },
  {
    id: "2-2",
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
  }
];
