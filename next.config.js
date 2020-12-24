// const withPWA = require('next-pwa');
//
// const settings = {
// 	env: {
// 	},
// 	devIndicators: {
// 		autoPrerender: false,
// 	},
// 	pwa: {
// 		dest: 'public',
// 	},
// };
//
// module.exports = process.env.NODE_ENV === 'development' ? settings : withPWA(settings);

const nextTranslate = require('next-translate')

module.exports = {
	...nextTranslate()
}
