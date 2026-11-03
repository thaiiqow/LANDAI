// Страницы: [id, RU-заголовок, EN-заголовок, RU-текст, EN-текст]. Ландайские переводы вводятся через режим редактирования (✎) и хранятся в localStorage.
const TBD_RU='Данные для этого раздела ещё не определены. Структура готова к расширению: добавляйте материалы в js/translations.js и js/data.js.';
const TBD_EN='Data for this section is not yet defined. The structure is ready to be extended: add content in js/translations.js and js/data.js.';
window.P=[
['home','Главная','Home','Новый проектируемый город на Южном Сахалине.','A new planned city in southern Sakhalin.'],
['about','О городе','About','Ландай — новый проектируемый город в Сахалинской области России, строительство с нуля. Горизонт реализации — 20–50 лет. Все объекты на сайте проектируемые, а не существующие.','Landai is a new planned city in Sakhalin Oblast, Russia, to be built from scratch. Implementation horizon: 20–50 years. All objects on this site are planned, not existing.'],
['history','История','History',TBD_RU,TBD_EN],
['geography','География и климат','Geography & climate','Остров Сахалин, Дальневосточный федеральный округ. Географический охват — Южный Сахалин; Курильские острова исключены. Климатические данные не определены.','Sakhalin Island, Far Eastern Federal District. Geographic scope: southern Sakhalin; the Kuril Islands are excluded. Climate data is not defined.'],
['population','Население','Population','Ранее обсуждавшийся ориентир — 640–680 тысяч человек. Это не прогноз и не факт.','A previously discussed benchmark is 640–680 thousand people. This is neither a forecast nor a fact.'],
['administration','Административное устройство','Administration',TBD_RU,TBD_EN],
['districts','Районы города','City districts',TBD_RU,TBD_EN],
['villages','Сёла и деревни','Villages',TBD_RU,TBD_EN],
['transport','Транспорт','Transport','Проектируемая транспортная система: автобусы, железная дорога, авиация. См. подразделы.','Planned transport system: buses, rail, aviation. See subsections.'],
['routes','Автобусные маршруты','Bus routes','Поиск по маршрутам. Маршруты ещё не утверждены — список заполняется в js/data.js.','Route search. Routes are not yet approved — the list is filled in js/data.js.'],
['fleet','Автопарк','Fleet','Известные модели автобусов (проектируемый автопарк).','Known bus models (planned fleet).'],
['rail','Железнодорожный транспорт','Rail',TBD_RU,TBD_EN],
['aviation','Авиакомпания LANÐAIAVIA','Airline LANÐAIAVIA','Проектируемая авиакомпания. Предполагаемое основание — 2042–2043 годы. Главный хаб — Ландай. Авиапарк и направления не определены.','A planned airline. Estimated founding: 2042–2043. Main hub: Landai. Fleet and destinations are not defined.'],
['economy','Экономика','Economy',TBD_RU,TBD_EN],
['infrastructure','Инфраструктура','Infrastructure',TBD_RU,TBD_EN],
['education','Образование','Education',TBD_RU,TBD_EN],
['medicine','Медицина','Healthcare',TBD_RU,TBD_EN],
['news','Новости','News','Новости портала и проекта.','Portal and project news.'],
['gallery','Галерея','Gallery','Поместите фотографии Сахалина и архитектуры в папку images/ и добавьте их в js/data.js (массив gallery).','Put photos of Sakhalin and architecture into images/ and list them in js/data.js (gallery array).'],
['language','Ландайский язык','Landai language','Алфавит, тоны и справочные разделы. Неопределённые данные помечены «—».','Alphabet, tones and reference sections. Undefined data is marked “—”.'],
['contacts','Контакты','Contacts','Контактные данные не определены. Редактируйте в js/data.js.','Contact details are not defined. Edit them in js/data.js.']];
window.D={ru:{
sub:'Новый город на Сахалине',plan:'Проектируемый город: описываемые объекты не существуют.',search:'Поиск по сайту…',nores:'Ничего не найдено',
i1:'Горизонт реализации',i1v:'20–50 лет',i2:'Ориентир населения',i2v:'640–680 тыс.',i3:'Охват',i3v:'Южный Сахалин',i4:'Тип',i4v:'Строительство с нуля',
nav:'Быстрая навигация',latest:'Последние новости',map:'Карта (схема)',mapinfo:'Схематично: Южный Сахалин. Точное положение города будет определено.',dev:'Информация о развитии',devt:'Развитие города рассчитано на 20–50 лет; этапы пока не утверждены.',
all:'Все',fsearch:'Поиск маршрута…',noroute:'Маршрутов нет.',proj:'проектируемый',
al:'Алфавит',tn:'Тоны ландайского языка',ph:'Фонетика',or:'Орфография',gr:'Грамматика',di:'Словарь',ex:'Примеры слов',se:'Примеры предложений',hi:'История языка',
upper:'Заглавная',lower:'Строчная',name:'Название',snd:'Произношение',desc:'Фонетическое описание',word:'Пример слова',notes:'Примечания',base:'Базовая буква',tname:'Название тона',tdesc:'Описание',
tnote:'Тоновые знаки — диакритики, а не буквы алфавита.',unk:'—',tbd:'Правила и данные ещё не определены; раздел расширяемый.',editon:'Режим редактирования: выберите ландайский язык и нажмите на текст, чтобы ввести перевод.',editq:'Ландайский перевод:',
fn:'Исключительно HTML, CSS и Vanilla JS · GitHub Pages'},
en:{sub:'A new city on Sakhalin',plan:'Planned city: the objects described do not exist.',search:'Search the site…',nores:'Nothing found',
i1:'Implementation horizon',i1v:'20–50 years',i2:'Population benchmark',i2v:'640–680 thousand',i3:'Scope',i3v:'Southern Sakhalin',i4:'Type',i4v:'Built from scratch',
nav:'Quick navigation',latest:'Latest news',map:'Map (schematic)',mapinfo:'Schematic: southern Sakhalin. The exact location of the city is to be determined.',dev:'City development',devt:'Development is planned over 20–50 years; stages are not yet approved.',
all:'All',fsearch:'Search route…',noroute:'No routes.',proj:'planned',
al:'Alphabet',tn:'Tones of the Landai language',ph:'Phonetics',or:'Orthography',gr:'Grammar',di:'Dictionary',ex:'Word examples',se:'Sentence examples',hi:'Language history',
upper:'Uppercase',lower:'Lowercase',name:'Name',snd:'Pronunciation',desc:'Phonetic description',word:'Example word',notes:'Notes',base:'Base letter',tname:'Tone name',tdesc:'Description',
tnote:'Tone marks are diacritics, not alphabet letters.',unk:'—',tbd:'Rules and data are not yet defined; the section is extensible.',editon:'Edit mode: choose the Landai language and click any text to enter a translation.',editq:'Landai translation:',
fn:'HTML, CSS and Vanilla JS only · GitHub Pages'}};
P.forEach(p=>{D.ru['p_'+p[0]+'_t']=p[1];D.en['p_'+p[0]+'_t']=p[2];D.ru['p_'+p[0]+'_b']=p[3];D.en['p_'+p[0]+'_b']=p[4]});
D.ru.exp='Файл landai.js скачан и скопирован в буфер. Замените им js/landai.js — тогда переводы будут в коде.';
D.en.exp='landai.js was downloaded and copied. Replace js/landai.js with it to keep the translations in the code.';
