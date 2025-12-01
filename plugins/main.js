import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'
import {
	hex_md5
} from '@/static/js/md5.js'

// 导入 Element UI 样式
import 'element-ui/lib/theme-chalk/index.css'

// 导入 swiper 样式 (swiper 5.x 版本)
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.prototype.$md5 = hex_md5


export default ({
	route
}) => {
	// 仅在客户端执行
	if (process.client) {
		window.usermaven = window.usermaven || (function() {
			(window.usermavenQ = window.usermavenQ || []).push(arguments);
		})
		var t = document.createElement('script'),
			s = document.getElementsByTagName('script')[0];
		t.defer = true;
		t.id = 'um-tracker';
		t.setAttribute('data-tracking-host', "https://events.usermaven.com")
		t.setAttribute('data-key', 'UMFOqspdXa');
		t.setAttribute('data-autocapture', 'true');
		t.src = 'https://t.usermaven.com/lib.js';
		s.parentNode.insertBefore(t, s);
	}
}