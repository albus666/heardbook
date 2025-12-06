<template>
  <div class="auth-layout">
    <!-- 顶部导航栏 -->
    <CommonHeader ref="commonHeader">
      <!-- 导航链接插槽 -->
      <template #nav-links>
        <NuxtLink
          v-for="link in mainNavLinks"
          :key="link.to"
          :to="link.to"
          class="header__link"
        >
          {{ link.label }}
        </NuxtLink>
      </template>

      <!-- 右侧内容插槽 -->
      <template #right>
        <!-- 手机端 CTA：Start free trial + Log in（登录/注册路由下显示） -->
        <div
          v-if="isAuthRoute"
          class="header__mobile-cta desktop-hide"
        >
          <a
            href="#"
            class="header__mobile-trial"
            @click.prevent="openSignUpModal"
          >
            {{ primaryCtaText }}
          </a>
          <a
            href="#"
            class="header__mobile-login"
            @click.prevent="openLoginModal"
          >
            {{ secondaryCtaText }}
          </a>
        </div>

        <!-- 右侧主 CTA：Start free trial -->
        <a
          href="#"
          class="header__upgrade desktop-only"
          @click.prevent="openSignUpModal"
        >
          {{ primaryCtaText }}
        </a>

        <!-- 登录/注册页：直接显示 Log in 链接（桌面端） -->
        <a
          v-if="isAuthRoute"
          href="#"
          class="header__login-link desktop-only"
          @click.prevent="openLoginModal"
        >
          {{ secondaryCtaText }}
        </a>
      </template>
    </CommonHeader>

    <!-- 主内容区 -->
    <main class="auth-main">
      <Nuxt />
    </main>

    <!-- SignUp Modal -->
    <SignUpModal
      :show="showSignUpModal && signUpModalMode === 'signup'"
      :initial-mode="'signup'"
      @close="closeSignUpModal"
      @mode-change="handleModalModeChange"
      @signup="handleSignup"
      @facebook-signup="handleFacebookSignup"
      @google-signup="handleGoogleSignup"
    />

    <!-- Login Modal -->
    <LoginModal
      :show="showLoginModal"
      @close="closeLoginModal"
      @login="handleLogin"
      @facebook-login="handleFacebookLogin"
      @google-login="handleGoogleLogin"
      @forgot-password="handleForgotPassword"
      @switch-to-signup="switchToSignup"
    />
  </div>
</template>

<script>
import CommonHeader from '~/components/CommonHeader.vue'
import SignUpModal from '~/components/SignUpModal.vue'
import LoginModal from '~/components/LoginModal.vue'

export default {
  name: 'AuthLayout',
  components: {
    CommonHeader,
    SignUpModal,
    LoginModal
  },

  computed: {
    /**
     * 左侧主导航（My Library / Highlights / 其它）：
     * 根据当前路由返回不同的导航配置，方便在其它页面复用同一个 Header。
     */
    mainNavLinks() {
      const path = this.$route?.path || ''

      // Settings / App 主区域：My Library + Highlights
      if (path.includes('/en/app') || path.includes('/en/nc/settings')) {
        return [
          { label: 'My Library', to: '/en/app/library' },
          { label: 'Highlights', to: '/en/app/highlights' }
        ]
      }

      // 登录/注册页面：不显示主导航链接
      if (path.includes('/auth/login') || path.includes('/auth/signup') || path.includes('/login') || path.includes('/sign-in')) {
        return []
      }

      // 下载页示例：可以按需配置其它导航
      if (path.includes('/download')) {
        return [
          { label: 'Explore', to: '/en/app/for-you' },
          { label: 'Library', to: '/en/app/library' }
        ]
      }

      // 默认导航（其余路由使用）
      return [
        { label: 'My Library', to: '/en/app/library' },
        { label: 'Highlights', to: '/en/app/highlights' }
      ]
    },

    /**
     * 右侧主 CTA 文案（auth 布局中始终显示 Start free trial）
     */
    primaryCtaText() {
      return 'Start free trial'
    },

    /**
     * 右侧次要 CTA 文案（Account / Log in ...）
     */
    secondaryCtaText() {
      const path = this.$route?.path || ''

      if (path.includes('/auth/login') || path.includes('/login') || path.includes('/sign-in')) {
        return 'Log in'
      }

      return 'Account'
    },

    /**
     * 是否为登录/注册相关路由（用于控制手机端 CTA 显示）
     */
    isAuthRoute() {
      const path = this.$route?.path || ''
      return (
        path.includes('/auth/login') ||
        path.includes('/auth/signup') ||
        path.includes('/login') ||
        path.includes('/sign-in')
      )
    }
  },

  data() {
    return {
      showSignUpModal: false,
      showLoginModal: false,
      signUpModalMode: 'signup'
    }
  },


  methods: {
    openSignUpModal() {
      if (this) {
        this.signUpModalMode = 'signup'
        this.showSignUpModal = true
      }
    },
    openLoginModal() {
      if (this) {
        this.showLoginModal = true
      }
    },
    closeLoginModal() {
      this.showLoginModal = false
    },
    closeSignUpModal() {
      this.showSignUpModal = false
    },
    switchToSignup() {
      this.showLoginModal = false
      this.signUpModalMode = 'signup'
      this.showSignUpModal = true
    },
    handleForgotPassword() {
      // 处理忘记密码逻辑
      console.log('忘记密码')
      // TODO: 实现忘记密码逻辑
    },
    handleModalModeChange(mode) {
      this.signUpModalMode = mode
    },
    handleSignup(formData) {
      // 处理注册逻辑
      console.log('注册:', formData)
      // TODO: 调用注册 API
      this.closeSignUpModal()
    },
    handleLogin(formData) {
      // 处理登录逻辑
      console.log('登录:', formData)
      // TODO: 调用登录 API
      this.closeLoginModal()
    },
    handleFacebookSignup() {
      // 处理 Facebook 注册
      console.log('Facebook 注册')
      // TODO: 实现 Facebook 注册逻辑
    },
    handleGoogleSignup() {
      // 处理 Google 注册
      console.log('Google 注册')
      // TODO: 实现 Google 注册逻辑
    },
    handleFacebookLogin() {
      // 处理 Facebook 登录
      console.log('Facebook 登录')
      // TODO: 实现 Facebook 登录逻辑
      this.closeLoginModal()
    },
    handleGoogleLogin() {
      // 处理 Google 登录
      console.log('Google 登录')
      // TODO: 实现 Google 登录逻辑
      this.closeLoginModal()
    }
  }
}
</script>

<style scoped>
/* ========== 字体定义 ========== */
@font-face {
  font-display: swap;
  font-family: "CeraPro";
  font-weight: 700;
  src: url(https://static-cdn.blinkist.com/webfonts/323ED8_0_0.woff2) format("woff2"),
  url(https://static-cdn.blinkist.com/webfonts/323ED8_0_0.woff) format("woff");
}

@font-face {
  font-display: swap;
  font-family: "CeraPro";
  font-weight: 500;
  src: url(https://static-cdn.blinkist.com/webfonts/323ED8_1_0.woff2) format("woff2"),
  url(https://static-cdn.blinkist.com/webfonts/323ED8_1_0.woff) format("woff");
}

@font-face {
  font-display: swap;
  font-family: "CeraPro";
  font-style: italic;
  font-weight: 400;
  src: url(https://static-cdn.blinkist.com/webfonts/323ED8_2_0.woff2) format("woff2"),
  url(https://static-cdn.blinkist.com/webfonts/323ED8_2_0.woff) format("woff");
}

@font-face {
  font-display: swap;
  font-family: "CeraPro";
  font-weight: 400;
  src: url(https://static-cdn.blinkist.com/webfonts/323ED8_3_0.woff2) format("woff2"),
  url(https://static-cdn.blinkist.com/webfonts/323ED8_3_0.woff) format("woff");
}

/* ========== 全局样式 ========== */
.auth-layout {
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  background-color: #fff;
}

/* ========== 导航链接样式（用于插槽） ========== */
.header__link {
  color: #03314b;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
  transition: opacity 0.2s ease;
}

.header__link:hover {
  opacity: 0.7;
}

/* ========== CTA 按钮样式 ========== */
.header__upgrade {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  color: #03314b;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: .6875rem 1rem .8125rem;
  font-family: inherit;
  text-align: center;
  text-decoration: none;
  background-color: #2ce080;
  border: #2ce080 .125rem solid;
  border-radius: .25rem;
  outline: none;
  cursor: pointer;
  appearance: none;
  user-select: text !important;
  white-space: nowrap;
}

.header__upgrade:hover {
  opacity: 0.9;
}

.header__login-link {
  -webkit-font-smoothing: antialiased;
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 2rem;
  font-family: "CeraPRO";
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  color: #03314b;
  user-select: text !important;
  position: relative;
  height: 1.5rem;
}

.header__login-link:hover {
  opacity: 0.7;
}

/* ========== 手机端 CTA ========== */
.header__mobile-cta {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header__mobile-trial {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  color: #03314b;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: .6875rem 1rem .8125rem;
  font-family: inherit;
  text-align: center;
  text-decoration: none;
  background-color: #2ce080;
  border: #2ce080 .125rem solid;
  border-radius: .25rem;
  outline: none;
  cursor: pointer;
  appearance: none;
  user-select: text !important;
}

.header__mobile-trial:hover {
  opacity: 0.9;
}

.header__mobile-login {
  color: #03314b;
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;
}

.header__mobile-login:hover {
  color: #0365f2;
}

/* ========== 响应式 ========== */
.desktop-only {
  display: flex;
}

.desktop-hide {
  display: none;
}

@media (max-width: 768px) {
  .desktop-only {
    display: none;
  }
  .desktop-hide {
    display: block;
  }
}

/* ========== 主内容区 ========== */
.auth-main {
  width: 100%;
}

</style>

