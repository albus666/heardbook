const language = [{
	id: 2,
	system: true,
	short: 'en',
	open: false,
	text: 'English [en]',
	text2: 'English'
}, {
	id: 11,
	system: false,
	short: 'es',
	open: false,
	text: 'español [es]',
	text2: 'español'
}, {
	id: 1,
	system: true,
	short: 'zh',
	open: false,
	text: '中文 [zh]',
	text2: '简体中文'
}, {
	id: 3,
	system: false,
	short: 'ar',
	open: false,
	text: 'العربية [ar]',
	text2: 'العربية'
}, {
	id: 4,
	system: false,
	short: 'be',
	open: false,
	text: 'беларуская [be]',
	text2: 'беларуская'
}, {
	id: 5,
	system: false,
	short: 'bg',
	open: false,
	text: 'български [bg]',
	text2: 'български'
}, {
	id: 6,
	system: false,
	short: 'bn',
	open: false,
	text: 'বাংলাা [bn]',
	text2: 'বাংলাা'
}, {
	id: 7,
	system: false,
	short: 'ca',
	open: false,
	text: 'català [ca]',
	text2: 'català'
}, {
	id: 8,
	system: false,
	short: 'cs',
	open: false,
	text: 'čeština [cs]',
	text2: 'čeština'
}, {
	id: 9,
	system: false,
	short: 'de',
	open: false,
	text: 'Deutsch [de]',
	text2: 'Deutsch'
}, {
	id: 10,
	system: false,
	short: 'el',
	open: false,
	text: 'Ελληνικά [el]',
	text2: 'Ελληνικά'
}, {
	id: 12,
	system: false,
	short: 'fa',
	open: false,
	text: 'فارسی [fa]',
	text2: 'فارسی'
}, {
	id: 13,
	system: false,
	short: 'fr',
	open: false,
	text: 'français [fr]',
	text2: 'français'
}, {
	id: 14,
	system: false,
	short: 'hi',
	open: false,
	text: 'हिन्दी [hi]',
	text2: 'हिन्दी'
}, {
	id: 15,
	system: false,
	short: 'hu',
	open: false,
	text: 'magyar [hu]',
	text2: 'magyar'
}, {
	id: 16,
	system: false,
	short: 'id',
	open: false,
	text: 'Indonesia [id]',
	text2: 'Indonesia'
}, {
	id: 17,
	system: false,
	short: 'it',
	open: false,
	text: 'italiano [it]',
	text2: 'italiano'
}, {
	id: 18,
	system: false,
	short: 'ja',
	open: false,
	text: '日本語 [ja]',
	text2: '日本語'
}, {
	id: 19,
	system: false,
	short: 'lt',
	open: false,
	text: 'lietuvių [lt]',
	text2: 'lietuvių'
}, {
	id: 20,
	system: false,
	short: 'ml',
	open: false,
	text: 'മലയാള [ml]',
	text2: 'മലയാള'
}, {
	id: 21,
	system: false,
	short: 'nl',
	open: false,
	text: 'Nederlands [nl]',
	text2: 'Nederlands'
}, {
	id: 22,
	system: false,
	short: 'no',
	open: false,
	text: 'norsk bokmål (Norge) [no]',
	text2: 'norsk bokmål (Norge)'
}, {
	id: 23,
	system: false,
	short: 'or',
	open: false,
	text: 'ଓଡ଼ିଆ [or]',
	text2: 'ଓଡ଼ିଆ'
}, {
	id: 24,
	system: false,
	short: 'pl',
	open: false,
	text: 'polski [pl]',
	text2: 'polski'
}, {
	id: 25,
	system: false,
	short: 'pt',
	open: false,
	text: 'português [pt]',
	text2: 'português'
}, {
	id: 26,
	system: false,
	short: 'ro',
	open: false,
	text: 'română [ro]',
	text2: 'română'
}, {
	id: 27,
	system: false,
	short: 'ru',
	open: false,
	text: 'русский [ru]',
	text2: 'русский'
}, {
	id: 28,
	system: false,
	short: 'sk',
	open: false,
	text: 'slovenčina [sk]',
	text2: 'slovenčina'
}, {
	id: 29,
	system: false,
	short: 'sq',
	open: false,
	text: 'shqip [sq]',
	text2: 'shqip'
}, {
	id: 30,
	system: false,
	short: 'sr',
	open: false,
	text: 'српски [sr]',
	text2: 'српски'
}, {
	id: 31,
	system: false,
	short: 'sv',
	open: false,
	text: 'svenska [sv]',
	text2: 'svenska'
}, {
	id: 32,
	system: false,
	short: 'tr',
	open: false,
	text: 'Türkçe [tr]',
	text2: 'Türkçe'
}, {
	id: 33,
	system: false,
	short: 'tc',
	open: false,
	text: '中文 (繁體) [tc]',
	text2: '中文 (繁體)'
}, {
	id: 34,
	system: false,
	short: 'uk',
	open: false,
	text: 'українська [uk]',
	text2: 'українська'
}, {
	id: 35,
	system: false,
	short: 'ur',
	open: false,
	text: 'اردو [ur]',
	text2: 'اردو'
}, {
	id: 36,
	system: false,
	short: 'vi',
	open: false,
	text: 'Tiếng Việt [vi]',
	text2: 'Tiếng Việt'
}]

const classcifyList1 = [{
	id: 0,
	img: require('@/static/img/index/classcify/1-0.png'),
	text: 'Popular'
}, {
	id: 1,
	img: require('@/static/img/index/classcify/1-1.png'),
	text: 'Humanities'
}, {
	id: 2,
	img: require('@/static/img/index/classcify/1-2.png'),
	text: 'Technology IT'
}, {
	id: 3,
	img: require('@/static/img/index/classcify/1-3.png'),
	text: 'Economics'
}, {
	id: 4,
	img: require('@/static/img/index/classcify/1-4.png'),
	text: 'Personal Development'
}, {
	id: 5,
	img: require('@/static/img/index/classcify/1-5.png'),
	text: 'Health'
}, {
	id: 6,
	img: require('@/static/img/index/classcify/1-6.png'),
	text: 'Society & Culture'
}, {
	id: 7,
	img: require('@/static/img/index/classcify/1-7.png'),
	text: 'Psychology'
}, {
	id: 8,
	img: require('@/static/img/index/classcify/1-8.png'),
	text: 'History'
}, {
	id: 9,
	img: require('@/static/img/index/classcify/1-9.png'),
	text: 'Sex & Relationship'
}]
const classcifyList2 = [{
	id: 10,
	img: require('@/static/img/index/classcify/2-1.png'),
	text: 'Literature'
}, {
	id: 11,
	img: require('@/static/img/index/classcify/2-2.png'),
	text: 'Philosophy'
}, {
	id: 12,
	img: require('@/static/img/index/classcify/2-3.png'),
	text: 'Development & Future'
}, {
	id: 13,
	img: require('@/static/img/index/classcify/2-4.png'),
	text: 'Creativity'
}, {
	id: 14,
	img: require('@/static/img/index/classcify/2-5.png'),
	text: 'Corporate Culture'
}, {
	id: 15,
	img: require('@/static/img/index/classcify/2-6.png'),
	text: 'Career'
}, {
	id: 16,
	img: require('@/static/img/index/classcify/2-7.png'),
	text: 'Education'
}, {
	id: 17,
	img: require('@/static/img/index/classcify/2-8.png'),
	text: 'Region & Spirituality'
}, {
	id: 18,
	img: require('@/static/img/index/classcify/2-9.png'),
	text: 'Art'
}, {
	id: 19,
	img: require('@/static/img/index/classcify/2-10.png'),
	text: 'Original Novel'
}]
const classcifyList3 = [{
	id: 20,
	img: require('@/static/img/index/classcify/3-1.png'),
	text: 'Science & Nature'
}, {
	id: 21,
	img: require('@/static/img/index/classcify/3-2.png'),
	text: 'Success'
}, {
	id: 22,
	img: require('@/static/img/index/classcify/3-3.png'),
	text: 'Money & Investments'
}, {
	id: 23,
	img: require('@/static/img/index/classcify/3-4.png'),
	text: 'Communication Skills'
}, {
	id: 24,
	img: require('@/static/img/index/classcify/3-5.png'),
	text: 'Biography & Memoir'
}, {
	id: 25,
	img: require('@/static/img/index/classcify/3-6.png'),
	text: 'Parenting'
}, {
	id: 26,
	img: require('@/static/img/index/classcify/3-7.png'),
	text: 'Marketing & Sales'
}, {
	id: 27,
	img: require('@/static/img/index/classcify/3-8.png'),
	text: 'Science'
}, {
	id: 28,
	img: require('@/static/img/index/classcify/3-9.png'),
	text: 'Travel Discovery'
}]

module.exports = {
	language: language,
	classcifyList1: classcifyList1,
	classcifyList2: classcifyList2,
	classcifyList3: classcifyList3
}