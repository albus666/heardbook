import {
	Message
} from 'element-ui'

import Qs from 'qs'

export default ({
	$axios,
	$config
}) => {
	//Request拦截器，设置token
	$axios.onRequest((config) => {
		// 设置 baseURL（优先使用环境变量）
		config.baseURL = $config?.apiBaseUrl || process.env.API_BASE_URL || 'https://bookheard.soundems.com/'

		// 仅对 POST/PUT/PATCH 请求设置 Content-Type 和序列化数据
		const methodsNeedBody = ['post', 'put', 'patch']
		if (methodsNeedBody.includes(config.method.toLowerCase())) {
			// 如果未设置 Content-Type，则使用默认的 form-urlencoded
			if (!config.headers['Content-Type'] && !config.headers['content-type']) {
				config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
				// 序列化数据
				if (config.data && typeof config.data === 'object') {
					config.data = Qs.stringify(config.data)
				}
			}
		}
	})

	$axios.onResponse((res) => {
		// 直接返回数据，让调用方处理
		if (res.data.code == '000000') {
			return res.data
		} else {
			// 业务错误：显示消息并 reject
			const errorMessage = res.data.message || '请求失败'
			Message.error(errorMessage)
			return Promise.reject(new Error(errorMessage))
		}
	})

	// 错误回调
	$axios.onError((error) => {
		const errorMessage = error.response?.data?.message || error.message || '网络错误，请稍后重试'
		Message({
			message: errorMessage,
			type: 'error',
			center: true
		})
		return Promise.reject(error)
	})
}