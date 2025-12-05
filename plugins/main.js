import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'
// 导入 md5 模块（使用 require 兼容 CommonJS 导出）
const md5Module = require('@/static/js/md5.js')
const hex_md5 = md5Module.hex_md5

// 导入 Element UI 样式
import 'element-ui/lib/theme-chalk/index.css'

// 导入 swiper 样式 (swiper 5.x 版本)
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.prototype.$md5 = hex_md5


export default ({
	route,
	$config
}) => {
	// 仅在客户端执行
	if (process.client) {
		// Usermaven 配置（优先使用环境变量）
		const usermavenKey = $config?.usermavenKey || process.env.USERMAVEN_KEY || 'UMFOqspdXa'
		const usermavenHost = $config?.usermavenHost || process.env.USERMAVEN_HOST || 'https://events.usermaven.com'
		const usermavenLibUrl = $config?.usermavenLibUrl || process.env.USERMAVEN_LIB_URL || 'https://t.usermaven.com/lib.js'
		const usermavenAutocapture = $config?.usermavenAutocapture !== false && process.env.USERMAVEN_AUTOCAPTURE !== 'false'

		window.usermaven = window.usermaven || (function() {
			(window.usermavenQ = window.usermavenQ || []).push(arguments);
		})
		var t = document.createElement('script'),
			s = document.getElementsByTagName('script')[0];
		t.defer = true;
		t.id = 'um-tracker';
		t.setAttribute('data-tracking-host', usermavenHost)
		t.setAttribute('data-key', usermavenKey);
		t.setAttribute('data-autocapture', usermavenAutocapture.toString());
		t.src = usermavenLibUrl;
		s.parentNode.insertBefore(t, s);
	}
}