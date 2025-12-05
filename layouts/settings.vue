<template>
  <div class="settings-layout">
    <!-- 蒙层 - 当 Account 菜单打开时显示 -->
    <transition name="overlay-fade">
      <div v-if="showAccount" class="overlay" @click="closeAccount"></div>
    </transition>

    <!-- 顶部导航栏 -->
    <CommonHeader :fixed="showAccount">
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
        <!-- 右侧主 CTA：文案可根据路由切换（Upgrade now / Start free trial 等） -->
        <NuxtLink 
          to="/app/pricing" 
          type="submit" 
          data-event-category="body-20200305-cta"
          class="header-content__button header-content__upgrade button header-link header-link--upgrade header-link--cta desktop-only"
        >
          <span>{{ primaryCtaText }}</span>
        </NuxtLink>

        <!-- Account 菜单（右侧次要 CTA：文案随路由变化） -->
        <div 
          class="user-menu"
          v-click-outside="closeAccount"
        >
          <button 
            class="header-menu__trigger"
            :class="{ 'header-menu__trigger--active': showAccount }"
            @click.stop="toggleAccount"
          >
            <span>{{ secondaryCtaText }}</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              class="header-link__menu-sprite"
              :class="{ 'header-link__menu-sprite--up': showAccount }"
            >
              <path d="M11.796 13.888 7.104 9.256a.895.895 0 0 0-1.253 0 .867.867 0 0 0 0 1.238l5.318 5.25a.895.895 0 0 0 1.253 0l5.318-5.25a.867.867 0 0 0 0-1.238.895.895 0 0 0-1.253 0l-4.691 4.632Z"></path>
            </svg>
          </button>

          <!-- Account 下拉菜单 -->
          <div 
            class="header-menu__menu-wrapper"
            :style="{ display: showAccount ? 'block' : 'none' }"
          >
            <ul class="user-menu__list">
              <li class="user-menu__item user-menu__item--upgrade desktop-hide">
                <NuxtLink 
                  to="/app/pricing" 
                  type="submit" 
                  data-event-category="body-20200305-cta"
                  class="user-menu__button button header-link header-link--upgrade header-link--cta"
                >
                  <span>{{ primaryCtaText }}</span>
                </NuxtLink>
              </li>
              <li class="user-menu__item user-menu__item--discover desktop-hide">
                <NuxtLink to="/app/for-you" class="user-menu__link header-link header-link--discover">
                  <span>Explore</span>
                </NuxtLink>
              </li>
              <li class="user-menu__item user-menu__item--library desktop-hide">
                <NuxtLink to="/app/library" class="user-menu__link header-link header-link--library">
                  <span>My Library</span>
                </NuxtLink>
              </li>
              <li class="user-menu__item user-menu__item--highlights desktop-hide">
                <NuxtLink to="/app/highlights" class="user-menu__link header-link header-link--highlights">
                  <span>Highlights</span>
                </NuxtLink>
              </li>
              <li class="user-menu__item user-menu__item--invite">
                <NuxtLink to="/app/referral" class="user-menu__link header-link header-link--invite">
                  <span>Invite&nbsp;Friends</span>
                </NuxtLink>
              </li>
              <li class="user-menu__item user-menu__item--wishlist">
                <NuxtLink to="/app/wishlist" class="user-menu__link header-link header-link--wishlist">
                  <span>Wishlist</span>
                </NuxtLink>
              </li>
              <li class="user-menu__item user-menu__item--settings">
                <NuxtLink to="/app/settings" class="user-menu__link header-link header-link--settings">
                  <span>Settings</span>
                </NuxtLink>
              </li>
              <li class="user-menu__item user-menu__item--help">
                <a href="https://support.blinkist.com/en/" class="user-menu__link header-link header-link--help">
                  <span>Help&nbsp;&amp;&nbsp;Support</span>
                </a>
              </li>
              <li class="user-menu__item user-menu__item--logout">
                <NuxtLink to="/app/logout" class="user-menu__link header-link header-link--logout">
                  <span>Logout</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </CommonHeader>

    <!-- 主内容区 -->
    <main class="settings-main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import CommonHeader from '~/components/CommonHeader.vue'

export default {
  name: 'SettingsHeader',
  components: {
    CommonHeader
  },

  computed: {
    /**
     * 左侧主导航（My Library / Highlights / 其它）：
     * 根据当前路由返回不同的导航配置，方便在其它页面复用同一个 Header。
     */
    mainNavLinks() {
      const path = this.$route?.path || ''

      // Settings / App 主区域：My Library + Highlights
      if (path.includes('/app') || path.includes('/app/settings')) {
        return [
          { label: 'My Library', to: '/app/library' },
          { label: 'Highlights', to: '/app/highlights' }
        ]
      }

      // 下载页示例：可以按需配置其它导航
      if (path.includes('/download')) {
        return [
          { label: 'Explore', to: '/app/for-you' },
          { label: 'Library', to: '/app/library' }
        ]
      }

      // 默认导航（其余路由使用）
      return [
        { label: 'My Library', to: '/app/library' },
        { label: 'Highlights', to: '/app/highlights' }
      ]
    },

    /**
     * 右侧主 CTA 文案（Upgrade now / Start free trial ...）
     */
    primaryCtaText() {
      const path = this.$route?.path || ''

      // 登录相关页面示例：可扩展为「Start free trial」
      if (path.includes('/login') || path.includes('/sign-in')) {
        return 'Start free trial'
      }

      // 默认：Upgrade now
      return 'Upgrade now'
    },

    /**
     * 右侧次要 CTA 文案（Account / Log in ...）
     */
    secondaryCtaText() {
      const path = this.$route?.path || ''

      if (path.includes('/login') || path.includes('/sign-in')) {
        return 'Log in'
      }

      return 'Account'
    }
  },

  data() {
    return {
      showAccount: false
    }
  },

  directives: {
    clickOutside: {
      bind(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
          // 检查点击目标是否是按钮或菜单内的元素
          const trigger = el.querySelector('.header-menu__trigger')
          const menu = el.querySelector('.header-menu__menu-wrapper')
          
          // 如果点击的是触发按钮或菜单内的元素，不执行关闭操作
          if (
            (trigger && (trigger === event.target || trigger.contains(event.target))) ||
            (menu && (menu === event.target || menu.contains(event.target)))
          ) {
            return
          }
          
          // 点击外部区域时关闭菜单
          if (!(el === event.target || el.contains(event.target))) {
            vnode.context[binding.expression](event)
          }
        }
        document.body.addEventListener('click', el.clickOutsideEvent)
      },
      unbind(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
      }
    }
  },

  methods: {
    toggleAccount() {
      this.showAccount = !this.showAccount
    },

    closeAccount() {
      this.showAccount = false
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
.settings-layout {
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  background-color: #fff;
}

/* ========== 蒙层 ========== */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(58, 70, 73, .7);
  z-index: 998;
}

.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: none;
}

.overlay-fade-enter,
.overlay-fade-leave-to {
  opacity: 0;
}

/* ========== 导航链接样式（用于插槽） ========== */
.header__link,
.header-link {
  color: #042330;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
  transition: opacity 0.2s ease;
}

.header__link:hover,
.header-link:hover {
  opacity: 0.7;
}

/* ========== Button 基础样式 ========== */
.button {
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



.header-content__button:hover,
.header-content__upgrade:hover {
  opacity: 0.9;
}

/* ========== User Menu ========== */
.user-menu {
  box-sizing: inherit;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  line-height: 1.1875rem;
  color: #042330;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPRO", sans-serif;
  user-select: text !important;
}

.header-menu__trigger {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  color: inherit;
  font-size: inherit;
  font-weight: 500;
  line-height: inherit;
  font-family: inherit;
  padding: 0;
  transition: opacity 0.2s ease;
}

.header-menu__trigger:hover {
  opacity: 0.7;
}

.header-menu__trigger--active {
  color: #0365F2;
}

.header-menu__trigger--active span,
.header-menu__trigger--active .header-link__menu-sprite {
  color: #0365F2;
  fill: #0365F2;
}

.header-menu__trigger--active:hover {
  opacity: 1;
}

.header-link__menu-sprite {
  width: 24px;
  height: 24px;
  fill: currentColor;
  transition: transform 0.2s ease;
}

.header-link__menu-sprite--up {
  transform: scaleY(-1);
}

.header-menu__menu-wrapper {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 1.75rem;
  z-index: 1001;
  box-sizing: inherit;
  font-family: "CeraPRO";
  font-size: 1rem;
  line-height: 1.1875rem;
  color: #042330;
  -webkit-font-smoothing: antialiased;
  user-select: text !important;
}

.user-menu__list {
  margin: 0;
  list-style-type: none;
  width: 190px;
  box-sizing: border-box;
  padding: .5rem 1rem;
  background-color: #fff;
  border-bottom-right-radius: .25rem;
  border-bottom-left-radius: .25rem;
  font-family: "CeraPRO";
  font-size: 1rem;
  line-height: 1.1875rem;
  color: #042330;
  -webkit-font-smoothing: antialiased;
  user-select: text !important;
}

.user-menu__item {
  list-style-type: none;
  box-sizing: inherit;
  display: flex;
  justify-content: center;
  font-family: "CeraPRO";
  font-size: 1rem;
  line-height: 1.1875rem;
  color: #042330;
  -webkit-font-smoothing: antialiased;
  border-bottom: 1px solid #e1e7ea;
  user-select: text !important;
}

.user-menu__item:last-child {
  border-bottom: none;
}

.user-menu__link,
.user-menu__button {
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  align-items: center;
  display: block;
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  font-family: "CeraPRO";
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  color: #03314b;
  user-select: text !important;
  -webkit-font-smoothing: antialiased;
}

.user-menu__link:hover {
  background-color: #f5f5f5;
}

.user-menu__button {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  width: 100%;
  max-width: 25rem;
  margin: 1rem 0;
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

.user-menu__button:hover {
  opacity: 0.9;
  background-color: #2ce080;
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

  /* 移动端下拉列表样式 */
  .header-menu__menu-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    top: 4.5rem;
    right: 0;
    z-index: 2001;
    margin-top: 0;
  }

  .user-menu__list {
    position: fixed;
    bottom: 0;
    left: 0;
    top: 4.5rem;
    z-index: 2001;
    width: 100vw;
    height: auto;
    overflow: auto;
    margin: 0;
    list-style-type: none;
    box-sizing: border-box;
    padding: .5rem 1rem;
    background-color: #fff;
    font-family: "CeraPRO";
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #042330;
    -webkit-font-smoothing: antialiased;
    user-select: text !important;
  }
}

/* ========== 主内容区 ========== */
.settings-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px;
}

@media (max-width: 768px) {
  .settings-main {
    padding: 24px 16px;
  }
}

</style>
