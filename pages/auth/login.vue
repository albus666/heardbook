<template>
  <div class="auth-page">
    <!-- Header -->
    <div class="auth-header">
      <div class="heri-container">
        <div class="header-content">
          <div class="header-left">
            <nuxt-link to="/" class="logo">
              <img src="@/static/img/head/logo3.png" alt="Logo" />
            </nuxt-link>
            <nuxt-link to="/" class="explore-link">Explore</nuxt-link>
          </div>
          <div class="header-right">
            <button class="btn-trial">Start free trial</button>
            <nuxt-link to="/auth/login" class="login-link">Log in</nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="loginV2 active">
      <div class="middle-container section--hero">
        <div class="row center-xs">
          <div class="col-xs-12">
            <h1 class="loginV2__headline">Log in to Heardly</h1>
          </div>
        </div>

        <div class="row center-xs">
          <div class="col-xs-12 col-sm-6">
            <form @submit.prevent="handleLogin" class="loginV2__form">
              <!-- Email Input -->
              <div class="loginV2__control-group">
                <input
                    placeholder="Email"
                    type="email"
                    v-model="email"
                    class="loginV2__input"
                />
              </div>

              <!-- Password Input -->
              <div class="loginV2__control-group">
                <input
                    placeholder="Password"
                    type="password"
                    v-model="password"
                    class="loginV2__input"
                />
              </div>

              <!-- Submit Button -->
              <div class="loginV2__control-group">
                <input
                    type="submit"
                    value="Log in with email"
                    class="button loginV2__submit"
                />
              </div>

              <!-- Or Separator -->
              <div class="loginV2__or-separator">
                <span>or</span>
              </div>

              <!-- Social Logins -->
              <div class="loginV2__social-logins">
                <a href="#" @click.prevent="handleFacebookLogin" class="social-button social-button--facebook">
									<span class="social-button__sprite">
										<svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
											<path d="M6.058 18V9.79H8.81l.412-3.2H6.058V4.547c0-.927.257-1.558 1.583-1.558l1.692-.001V.126A22.608 22.608 0 0 0 6.868 0c-2.44 0-4.11 1.491-4.11 4.23v2.36H0v3.2h2.759V18h3.3z" fill="#FEFEFE"/>
										</svg>
									</span>
                  <span class="social-button__label">Log in</span>
                </a>

                <a href="#" @click.prevent="handleGoogleLogin" class="social-button social-button--google">
									<span class="social-button__sprite">
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
											<path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
											<path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
											<path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
											<path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
										</svg>
									</span>
                  <span class="social-button__label">Log in</span>
                </a>
              </div>

              <!-- Apple Login -->
              <a href="#" class="social-button social-button--apple">
								<span class="social-button__sprite">
									<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
										<path d="M13.7066 12.4689C13.4552 13.0279 13.1577 13.5424 12.813 14.0155C12.3431 14.6604 11.9584 15.1068 11.6619 15.3547C11.2023 15.7616 10.7098 15.97 10.1825 15.9818C9.8039 15.9818 9.34735 15.8781 8.81592 15.6678C8.28273 15.4584 7.79275 15.3547 7.34472 15.3547C6.87484 15.3547 6.37089 15.4584 5.83186 15.6678C5.29201 15.8781 4.85712 15.9878 4.52461 15.9986C4.01892 16.0194 3.51488 15.8051 3.01175 15.3547C2.69063 15.0851 2.28898 14.6229 1.80781 13.9681C1.29156 13.2688 0.867126 12.458 0.534618 11.5336C0.178514 10.5351 0 9.5682 0 8.63213C0 7.55987 0.240686 6.63506 0.722776 5.86007C1.10166 5.23757 1.6057 4.74652 2.23655 4.38604C2.8674 4.02556 3.54904 3.84186 4.2831 3.83011C4.68476 3.83011 5.21148 3.94971 5.86603 4.18476C6.51873 4.42061 6.93783 4.54021 7.12157 4.54021C7.25895 4.54021 7.72452 4.40036 8.51378 4.12155C9.26015 3.86299 9.89008 3.75594 10.4061 3.79811C11.8045 3.90675 12.8551 4.4374 13.5537 5.39342C12.3031 6.12288 11.6845 7.14457 11.6968 8.45525C11.708 9.47616 12.0928 10.3257 12.8489 11.0003C13.1916 11.3133 13.5742 11.5553 14 11.7272C13.9077 11.9849 13.8102 12.2318 13.7066 12.4689ZM10.4995 0.320089C10.4995 1.12027 10.1958 1.8674 9.5905 2.55893C8.86003 3.38103 7.97649 3.85608 7.01836 3.78112C7.00616 3.68512 6.99908 3.58409 6.99908 3.47792C6.99908 2.70974 7.34646 1.88765 7.96336 1.21547C8.27135 0.875134 8.66305 0.59215 9.13806 0.366409C9.61205 0.144035 10.0604 0.0210562 10.482 0C10.4944 0.10697 10.4995 0.213949 10.4995 0.320079V0.320089Z" fill="black"/>
									</svg>
								</span>
                <span class="social-button__label">Continue with Apple</span>
              </a>

              <!-- SSO Login -->
              <a href="#" class="social-button social-button--sso">
                <span class="social-button__label">Log in with SSO</span>
              </a>

              <!-- Footer Links -->
              <div class="loginV2__footer">
                <nuxt-link to="/auth/signup" class="loginV2__footer-link">
                  You don't have an account?
                </nuxt-link>
                <nuxt-link to="/auth/forgot_password" class="loginV2__footer-link">
                  Forgot your password?
                </nuxt-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <heri-footer />
  </div>
</template>

<script>
import HeriFooter from '@/components/heri-footer.vue'

export default {
  components: {
    HeriFooter
  },
  data() {
    return {
      email: '',
      password: '',
      oauthPopup: null
    }
  },
  computed: {
    // OAuth 配置 - 这些值应该从环境变量或配置文件中读取
    googleClientId() {
      return process.env.GOOGLE_CLIENT_ID || 'YOUR_GOOGLE_CLIENT_ID'
    },
    facebookAppId() {
      return process.env.FACEBOOK_APP_ID || 'YOUR_FACEBOOK_APP_ID'
    },
    redirectUri() {
      if (process.client) {
        return process.env.OAUTH_REDIRECT_URI || `${window.location.origin}/auth/callback`
      }
      return '/auth/callback'
    }
  },
  mounted() {
    // 监听来自弹出窗口的消息（OAuth 回调）
    window.addEventListener('message', this.handleOAuthCallback, false)
  },
  beforeDestroy() {
    window.removeEventListener('message', this.handleOAuthCallback, false)
  },
  methods: {
    handleLogin() {
      // Login logic here
      console.log('Login:', this.email, this.password)
    },
    
    /**
     * 处理 Google 登录
     * 使用弹出窗口打开 Google OAuth 授权页面
     */
    handleGoogleLogin() {
      const width = 500
      const height = 600
      const left = (window.screen.width - width) / 2
      const top = (window.screen.height - height) / 2

      // Google OAuth 2.0 授权 URL
      const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
        `client_id=${this.googleClientId}&` +
        `redirect_uri=${encodeURIComponent(this.redirectUri)}&` +
        `response_type=code&` +
        `scope=openid%20email%20profile&` +
        `access_type=online`

      // 打开弹出窗口
      const popup = window.open(
        googleAuthUrl,
        'google-login',
        `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
      )

      // 监听弹出窗口关闭
      const checkClosed = setInterval(() => {
        if (popup.closed) {
          clearInterval(checkClosed)
        }
      }, 1000)

      // 监听来自弹出窗口的消息
      this.oauthPopup = popup
    },

    /**
     * 处理 Facebook 登录
     * 使用弹出窗口打开 Facebook OAuth 授权页面
     */
    handleFacebookLogin() {
      const width = 500
      const height = 600
      const left = (window.screen.width - width) / 2
      const top = (window.screen.height - height) / 2

      // Facebook OAuth 授权 URL
      const facebookAuthUrl = `https://www.facebook.com/v18.0/dialog/oauth?` +
        `client_id=${this.facebookAppId}&` +
        `redirect_uri=${encodeURIComponent(this.redirectUri)}&` +
        `response_type=code&` +
        `scope=email,public_profile`

      // 打开弹出窗口
      const popup = window.open(
        facebookAuthUrl,
        'facebook-login',
        `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
      )

      // 监听弹出窗口关闭
      const checkClosed = setInterval(() => {
        if (popup.closed) {
          clearInterval(checkClosed)
        }
      }, 1000)

      // 监听来自弹出窗口的消息
      this.oauthPopup = popup
    },

    /**
     * 处理 OAuth 回调
     * 接收来自弹出窗口或回调页面的授权码
     */
    handleOAuthCallback(event) {
      // 安全检查：确保消息来自同源
      if (event.origin !== window.location.origin) {
        return
      }

      if (event.data && event.data.type === 'oauth-callback') {
        const { provider, code, error } = event.data

        if (error) {
          console.error('OAuth 错误:', error)
          alert(`登录失败: ${error}`)
          return
        }

        // 发送授权码到后端进行验证和登录
        this.exchangeCodeForToken(provider, code)
      }
    },

    /**
     * 将授权码交换为访问令牌并完成登录
     * 这一步需要在后端完成，因为涉及客户端密钥
     */
    async exchangeCodeForToken(provider, code) {
      try {
        // 调用后端 API 交换 token
        const response = await this.$axios.post('/api/auth/oauth/callback', {
          provider, // 'google' 或 'facebook'
          code,
          redirect_uri: this.redirectUri
        })

        if (response.data.success) {
          // 保存用户 token
          const { token, user } = response.data
          localStorage.setItem('auth_token', token)
          localStorage.setItem('user', JSON.stringify(user))

          // 关闭弹出窗口
          if (this.oauthPopup) {
            this.oauthPopup.close()
          }

          // 跳转到主页或用户仪表板
          this.$router.push('/')
        } else {
          throw new Error(response.data.message || '登录失败')
        }
      } catch (error) {
        console.error('Token 交换失败:', error)
        alert('登录失败，请重试')
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '~/assets/css/common.less';

// 颜色变量
@color-primary: #2ce080;
@color-primary-hover: #20c46f;
@color-dark-blue: #03314b;
@color-dark-blue-hover: #022438;
@color-text: #042330;
@color-text-light: #3a4649;
@color-border: #6d787e;
@color-separator: #bac8ce;
@color-facebook: #3A579D;
@color-facebook-hover: #25396B;
@color-google: #4285f4;
@color-google-hover: #3367d6;
@color-link: #0365f2;

.auth-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f9f7;
}

// Header 样式
.auth-header {
  background: white;
  border-bottom: 1px solid #e5e7eb;

  .heri-container {
    width: 1184px;
    margin: 0 auto;
    padding: 0 48px;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .logo img {
    height: 2.5rem;
    width: auto;
  }

  .explore-link {
    color: #0f2830;
    font-size: 1rem;
    text-decoration: none;

    &:hover {
      color: @color-link;
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .btn-trial {
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    margin-left: 2rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1;
    color: #03314b;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.6875rem 1rem 0.8125rem;
    font-family: inherit;
    text-align: center;
    text-decoration: none;
    background-color: #2ce080;
    border: #2ce080 0.125rem solid;
    border-radius: 0.25rem;
    outline: none;
    cursor: pointer;
    appearance: none;
    user-select: text !important;

    &:hover {
      background: @color-primary-hover;
      border-color: @color-primary-hover;
    }
  }

  .login-link {
    color: #0f2830;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      color: @color-link;
    }
  }
}

// Login 主体样式
.loginV2 {
  font-family: "CeraPRO", sans-serif;
  display: none;
  flex: 1;
  background: white;

  &.active {
    display: block;
  }
}

.middle-container {
  max-width: 59rem;
  margin: 0 auto;
}

.section--hero {
  padding: 4rem 0;
}

// Grid 系统
.row {
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: -1rem;
  margin-left: -1rem;
}

.center-xs {
  justify-content: center;
  text-align: center;
}

.col-xs-12 {
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: 1rem;
  padding-left: 1rem;
  flex-basis: 100%;
  max-width: 100%;
}

@media only screen and (min-width: 48em) {
  .col-sm-6 {
    flex-basis: 50%;
    max-width: 50%;
  }
}

// 表单样式
.loginV2__headline {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.25;
  color: @color-dark-blue;
  margin-bottom: 2rem;
  text-align: center;
}

.loginV2__control-group {
  margin-bottom: 1rem;
}

.loginV2__input {
  width: 100%;
  height: 2.75rem;
  padding: 0.75rem 1rem;
  border: 0.125rem solid @color-border;
  border-radius: 0.125rem;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  background: white;
  color: @color-text;
  appearance: none;
  box-sizing: border-box;

  &:focus {
    border: 0.125rem solid #2ce080;
  }
}

.loginV2__submit {
  display: block;
  width: 100%;
  height: 2.75rem;
  padding: 0.6875rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  color: @color-dark-blue;
  text-align: center;
  background-color: @color-primary;
  border: 0.125rem solid @color-primary;
  border-radius: 0.25rem;
  outline: none;
  cursor: pointer;
  appearance: none;
  font-family: inherit;
  box-sizing: border-box;

  &:hover {
    background-color: @color-primary-hover;
    border-color: @color-primary-hover;
  }
}

.loginV2__or-separator {
  width: 100%;
  margin: 1.25rem 0;
  color: @color-separator;
  font-size: 0.875rem;
  line-height: 0.0625rem;
  text-align: center;
  border-bottom: 0.0625rem solid @color-separator;

  span {
    padding: 0 0.625rem;
    background-color: white;
  }
}

// 社交登录按钮
.loginV2__social-logins {
  display: flex;
  gap: 0;
}

.social-button {
  font-family: "CeraPRO", sans-serif;
  font-weight: 500;
  line-height: 1;
  color: @color-dark-blue;
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 2.75rem;
  margin-bottom: 1rem;
  text-align: center;
  text-decoration: none;
  border: 0.125rem solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    color: @color-text;
    border-color: @color-link;
  }
}

.social-button__sprite {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  margin-left: 1rem;
}

.social-button__label {
  flex-grow: 1;
  padding: 0.6875rem 0;
}

// Facebook 按钮
.social-button--facebook {
  color: white;
  background-color: @color-facebook;
  border-color: @color-facebook;

  &:hover {
    color: white;
    background-color: @color-facebook-hover;
    border-color: @color-facebook-hover;
  }
}

// Google 按钮
.social-button--google {
  margin-left: 1rem;
  color: white;
  background-color: @color-google;
  border-color: @color-google;

  &:hover {
    color: white;
    background-color: @color-google-hover;
    border-color: @color-google-hover;
  }

  .social-button__sprite {
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 0;
    background-color: white;
    border-radius: 0.25rem;
  }
}

// Apple 按钮
.social-button--apple {
  justify-content: center;
  width: auto;
  margin: 0 auto 1rem;
  color: black;
  background-color: white;
  border: 0.0625rem solid black;

  &:hover {
    border-color: @color-border;
  }

  .social-button__sprite {
    width: auto;
    height: auto;
    margin-left: 1rem;
    margin-right: 0;
    padding: 0;
    flex-shrink: 0;
  }

  .social-button__label {
    flex-grow: 0;
    text-align: center;
    padding: 0.6875rem 1rem;
    white-space: nowrap;
  }
}

// SSO 按钮
.social-button--sso {
  background-color: @color-dark-blue;
  border-color: @color-dark-blue;
  color: white;
  margin-bottom: 0;

  &:hover {
    background-color: @color-dark-blue-hover;
    border-color: @color-dark-blue-hover;
    color: white;
  }
}

// Footer 链接
.loginV2__footer {
  padding-top: 1.875rem;
}

.loginV2__footer-link {
  display: block;
  margin-bottom: 0.5rem;
  color: @color-text-light;
  font-size: 1rem;
  line-height: 1.1875rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

// 响应式
@media screen and (max-width: 768px) {
  .section--hero {
    padding: 3rem 1rem;
  }

  .loginV2__headline {
    font-size: 2rem;
  }

  .header-left {
    gap: 1rem !important;
  }

  .explore-link {
    font-size: 0.875rem;
  }

  .social-button--google {
    margin-left: 0.5rem;
  }
}
</style>
