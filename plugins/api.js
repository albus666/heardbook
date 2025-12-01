import {
	Message
} from 'element-ui'

import Qs from 'qs'

export default ({
	$axios
}) => {
	//Request拦截器，设置token
	$axios.onRequest((config) => {
		config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
		config.baseURL = 'https://bookheard.soundems.com/'
		config.data = Qs.stringify(config.data)
	})

	$axios.onResponse((res) => {
		return new Promise((resolve, reject) => {
			if (res.data.code == '000000') {
				return resolve(res)
			} else {
				Message.error(res.data.message);
			}
		})
	})

	// 错误回调
	$axios.onError((error) => {
		Message({
			message: 'error',
			type: 'error',
			center: true
		})
	})
}