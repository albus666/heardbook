<template>
  <div class="oauth-callback">
    <div class="loading-message">
      <p>正在处理登录...</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.handleCallback()
  },
  methods: {
    handleCallback() {
      // 从 URL 中获取授权码或错误信息
      const urlParams = new URLSearchParams(window.location.search)
      const code = urlParams.get('code')
      const error = urlParams.get('error')
      const errorDescription = urlParams.get('error_description')
      const state = urlParams.get('state')

      // 判断是哪个提供商（可以通过 state 参数或 referrer 判断）
      // 这里简化处理，实际应该通过 state 参数传递
      const provider = this.detectProvider()

      if (error) {
        // 如果有错误，发送错误消息给父窗口
        this.sendMessageToParent({
          type: 'oauth-callback',
          provider,
          error: errorDescription || error
        })
        return
      }

      if (code) {
        // 发送授权码给父窗口
        this.sendMessageToParent({
          type: 'oauth-callback',
          provider,
          code
        })
      } else {
        this.sendMessageToParent({
          type: 'oauth-callback',
          provider,
          error: '未收到授权码'
        })
      }
    },

    detectProvider() {
      // 通过 URL 或 referrer 判断提供商
      const url = window.location.href
      if (url.includes('accounts.google.com') || url.includes('google')) {
        return 'google'
      }
      if (url.includes('facebook.com') || url.includes('facebook')) {
        return 'facebook'
      }
      // 默认返回 google
      return 'google'
    },

    sendMessageToParent(data) {
      // 如果是在弹出窗口中，发送消息给父窗口
      if (window.opener) {
        window.opener.postMessage(data, window.location.origin)
        // 延迟关闭窗口，确保消息已发送
        setTimeout(() => {
          window.close()
        }, 100)
      } else {
        // 如果不是弹出窗口，可能需要直接处理（例如直接跳转）
        console.log('OAuth callback data:', data)
        // 可以在这里直接调用 API 完成登录
        this.$router.push('/auth/login')
      }
    }
  }
}
</script>

<style scoped>
.oauth-callback {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f5f9f7;
}

.loading-message {
  text-align: center;
}

.loading-message p {
  font-size: 1rem;
  color: #03314b;
}
</style>

