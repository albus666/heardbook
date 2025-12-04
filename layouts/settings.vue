<template>
  <div class="settings-layout">
    <!-- 蒙层 - 当 Account 菜单打开时显示 -->
    <transition name="overlay-fade">
      <div v-if="showAccount" class="overlay" @click="closeAccount"></div>
    </transition>

    <!-- 顶部导航栏 -->
    <header class="header">
      <div class="header__inner">
        <div class="header__container">
          <!-- 左侧 Logo -->
          <div class="header__left">
            <NuxtLink to="/" class="header__logo">
              <!-- 桌面端使用原来的 Blinkist Logo -->
              <img
                src="/img/proof/logo.png"
                alt="Heardly"
                class="header__logo-img header__logo-img--desktop desktop-only"
              />
              <!-- 手机端使用新的 HeardLy 图标 -->
              <img
                src="/img/download/HeardLy.png"
                alt="Heardly"
                class="header__logo-img header__logo-img--mobile desktop-hide"
              />
            </NuxtLink>
          </div>

          <!-- 右侧导航内容 -->
          <div class="header__right">
            <!-- 搜索按钮 -->
            <button class="header__search-btn" @click="toggleSearch" aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.1 21.4l-5.8-5.8c1.2-1.4 1.9-3.2 1.9-5.2 0-4.5-3.7-8.2-8.2-8.2-4.5 0-8.2 3.7-8.2 8.2 0 4.5 3.7 8.2 8.2 8.2 2 0 3.8-.7 5.2-1.9l5.8 5.8 1.1-1.1zm-18.7-11a6.7 6.7 0 1113.4.001 6.7 6.7 0 01-13.4 0z" fill="currentColor"></path>
              </svg>
            </button>

            <!-- 搜索框 -->
            <transition name="search-fade">
              <div v-if="showSearch" class="header__search">
                <input
                    ref="searchInput"
                    v-model="searchQuery"
                    type="text"
                    placeholder="Search for titles and authors"
                    class="header__search-input"
                    @blur="handleSearchBlur"
                />
                <button class="header__search-close" @click="closeSearch" aria-label="Close search">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="m19.3 20.7-6.8-6.8-6.8 6.8-1.4-1.4 6.8-6.8-6.8-6.8 1.4-1.4 6.8 6.8 6.8-6.8 1.4 1.4-6.8 6.8 6.8 6.8z"></path>
                  </svg>
                </button>
              </div>
            </transition>

            <!-- 桌面端导航链接（左侧：Explore + 主导航；右侧：CTA 按钮） -->
            <nav class="header__nav desktop-only" v-show="!showSearch">
              <!-- Explore 按钮 -->
              <div class="header__explore">
                <button
                  class="header__explore-btn"
                  :class="{ 'header__explore-btn--active': showExplore }"
                  @click="toggleExplore"
                >
                  <span>Explore</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    :class="{ 'header__explore-arrow--up': showExplore }"
                  >
                    <path d="M11.796 13.888 7.104 9.256a.895.895 0 0 0-1.253 0 .867.867 0 0 0 0 1.238l5.318 5.25a.895.895 0 0 0 1.253 0l5.318-5.25a.867.867 0 0 0 0-1.238.895.895 0 0 0-1.253 0l-4.691 4.632Z"></path>
                  </svg>
                </button>
              </div>

              <!-- 主导航链接：根据当前路由动态配置（My Library / Highlights 等） -->
              <NuxtLink
                v-for="link in mainNavLinks"
                :key="link.to"
                :to="link.to"
                class="header__link"
              >
                {{ link.label }}
              </NuxtLink>
            </nav>

            <!-- 右侧主 CTA：文案可根据路由切换（Upgrade now / Start free trial 等） -->
            <NuxtLink to="/pricing" class="header__upgrade desktop-only">
              {{ primaryCtaText }}
            </NuxtLink>

            <!-- Account 菜单（右侧次要 CTA：文案随路由变化） -->
            <div class="header__account" v-click-outside="closeAccount">
              <button class="header__account-btn" @click="toggleAccount">
                <span>{{ secondaryCtaText }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M11.796 13.888 7.104 9.256a.895.895 0 0 0-1.253 0 .867.867 0 0 0 0 1.238l5.318 5.25a.895.895 0 0 0 1.253 0l5.318-5.25a.867.867 0 0 0 0-1.238.895.895 0 0 0-1.253 0l-4.691 4.632Z"></path>
                </svg>
              </button>

              <!-- Account 下拉菜单 -->
              <transition name="dropdown">
                <ul v-if="showAccount" class="account-menu">
                  <li class="account-menu__item desktop-hide">
                    <NuxtLink to="/pricing" class="account-menu__upgrade">
                      {{ primaryCtaText }}
                    </NuxtLink>
                  </li>
                  <li class="account-menu__item desktop-hide">
                    <NuxtLink to="/en/app/for-you" class="account-menu__link">Explore</NuxtLink>
                  </li>
                  <li class="account-menu__item desktop-hide">
                    <NuxtLink to="/en/app/library" class="account-menu__link">My Library</NuxtLink>
                  </li>
                  <li class="account-menu__item desktop-hide">
                    <NuxtLink to="/en/app/highlights" class="account-menu__link">Highlights</NuxtLink>
                  </li>
                  <li class="account-menu__item">
                    <NuxtLink to="/en/nc/referral" class="account-menu__link">Invite Friends</NuxtLink>
                  </li>
                  <li class="account-menu__item">
                    <NuxtLink to="/en/nc/wishlist" class="account-menu__link">Wishlist</NuxtLink>
                  </li>
                  <li class="account-menu__item">
                    <NuxtLink to="/en/nc/settings" class="account-menu__link">Settings</NuxtLink>
                  </li>
                  <li class="account-menu__item">
                    <a href="https://support.blinkist.com/en/" class="account-menu__link">Help & Support</a>
                  </li>
                  <li class="account-menu__item">
                    <a href="/en/nc/logout" class="account-menu__link">Logout</a>
                  </li>
                </ul>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Explore 全屏覆盖层 -->
    <transition name="explore-overlay">
      <div 
        v-if="showExplore" 
        class="explore-overlay" 
        :style="{ top: headerHeight + 'px' }"
        @click.self="closeExplore"
      >
        <div 
          class="explore-overlay__container"
          @click.stop
        >
          <div class="explore-overlay__content">
            <DiscoverMenu />
          </div>
        </div>
      </div>
    </transition>

    <!-- 主内容区 -->
    <main class="settings-main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import DiscoverMenu from '~/components/DiscoverMenu.vue'

export default {
  name: 'SettingsHeader',
  components: {
    DiscoverMenu
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
      headerHeight: 80, // header 高度，动态计算
      showAccount: false,
      showExplore: false,
      showSearch: false,
      searchQuery: ''
    }
  },

  mounted() {
    // 动态计算 header 高度
    this.calculateHeaderHeight()
    // 监听窗口大小变化
    if (process.client) {
      window.addEventListener('resize', this.calculateHeaderHeight)
    }
  },

  beforeDestroy() {
    // 清理事件监听
    if (process.client) {
      window.removeEventListener('resize', this.calculateHeaderHeight)
    }
  },

  directives: {
    clickOutside: {
      bind(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
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
    calculateHeaderHeight() {
      if (process.client) {
        const header = this.$el?.querySelector('.header')
        if (header) {
          this.headerHeight = header.offsetHeight
        }
      }
    },

    toggleAccount() {
      this.showAccount = !this.showAccount
      if (this.showAccount) {
        this.showSearch = false
        this.showExplore = false
      }
    },

    closeAccount() {
      this.showAccount = false
    },

    toggleExplore() {
      const willOpen = !this.showExplore
      
      // 在打开前重新计算 header 高度
      if (willOpen) {
        this.calculateHeaderHeight()
      }
      
      this.showExplore = willOpen
      
      if (this.showExplore) {
        this.showAccount = false
        this.showSearch = false
      }
    },

    closeExplore() {
      this.showExplore = false
    },

    toggleSearch() {
      this.showSearch = !this.showSearch
      if (this.showSearch) {
        this.showAccount = false
        this.showExplore = false
        this.$nextTick(() => {
          this.$refs.searchInput?.focus()
        })
      }
    },

    closeSearch() {
      this.showSearch = false
      this.searchQuery = ''
    },

    handleSearchBlur() {
      setTimeout(() => {
        if (!this.searchQuery && document.activeElement !== this.$refs.searchInput) {
          this.closeSearch()
        }
      }, 150)
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-fade-enter,
.overlay-fade-leave-to {
  opacity: 0;
}

/* ========== Header 样式 ========== */
.header {
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  position: sticky;
  top: 0;
  z-index: 999;
}

.header__inner {
  width: 100%;
  padding: 1.75rem 0;
  background-color: #FFFFFF;
  position: relative;
  z-index: 1;
  user-select: text !important;
  line-height: 1.1875rem;
  color: #042330;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

.header__container {
  max-width: 1024px;
  margin: 0 auto;
  padding-left: 2.25rem;
  padding-right: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 16px; /* 🔥 关键：固定内容区高度，防止 logo 撑开 */
  line-height: 1.1875rem;
  color: #042330;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  -webkit-user-select: auto !important;
}

.header__left {
  display: flex;
  align-items: center;
  height: 16px; /* 与容器高度一致，防止被 logo 撑开 */
  line-height: 1.1875rem;
  color: #042330;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  margin-right: 24px; /* Logo 与搜索图标之间的间距 */
}

.header__logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.header__logo-img {
  height: 36px; /* Logo 大小，会溢出但不撑开容器 */
  width: auto;
  display: block;
  object-fit: contain;
}

/* 桌面端 logo 不设置圆角 */
.header__logo-img--desktop {
  border-radius: 0;
}

.header__right {
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1;
  justify-content: flex-end;
  height: 16px; /* 与容器高度一致 */
  line-height: 1.1875rem;
  color: #042330;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  flex-grow: 1;
  user-select: text !important;
}

/* ========== 搜索按钮 ========== */
.header__search-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #042330;
  transition: opacity 0.2s ease;
}

.header__search-btn:hover {
  opacity: 0.7;
}

.header__search-btn svg {
  width: 24px;
  height: 24px;
}

/* ========== 搜索框 ========== */
.header__search {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #fff;
  z-index: 1000;
}

.header__search-input {
  width: 400px;
  padding: 12px 16px;
  border: 2px solid #042330;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
  line-height: 1.1875rem;
  color: #042330;
  outline: none;
}

.header__search-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #042330;
}

.search-fade-enter-active,
.search-fade-leave-active {
  transition: opacity 0.2s ease;
}

.search-fade-enter,
.search-fade-leave-to {
  opacity: 0;
}

/* ========== 导航链接 ========== */
.header__nav {
  display: flex;
  align-items: center;
  gap: 24px;
}

.header__link {
  color: #042330;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
  transition: opacity 0.2s ease;
}

.header__link:hover {
  opacity: 0.7;
}

/* ========== Explore 下拉菜单 ========== */
.header__explore {
  position: relative;
}

.header__explore-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  color: #042330;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
  font-family: inherit;
  padding: 8px 0;
  transition: opacity 0.2s ease, color 0.2s ease;
}

.header__explore-btn:hover {
  opacity: 0.7;
}

.header__explore-btn--active {
  color: #0365F2; /* 激活时文字和箭头变为蓝色 */
}

.header__explore-btn--active svg {
  color: #0365F2; /* 确保箭头也是蓝色 */
  fill: #0365F2; /* SVG 填充颜色 */
}

.header__explore-arrow--up {
  transform: scaleY(-1); /* 箭头上下对称翻折 */
  transition: transform 0.2s ease; /* 添加翻折过渡效果 */
}

/* ========== Upgrade 按钮 ========== */
.header__upgrade {
  background-color: #2cde80;
  color: #042330;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.1875rem;
  transition: opacity 0.2s ease;
  white-space: nowrap;
   margin-left: auto; /*将 Upgrade now 与前面的导航分成左右两部分 */
}

.header__upgrade:hover {
  opacity: 0.9;
}

/* ========== Account 菜单 ========== */
.header__account {
  position: relative;
}

.header__account-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0;
  color: #042330;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
  font-family: inherit;
  padding: 6px 0;
  transition: opacity 0.2s ease;
}

.header__account-btn:hover {
  opacity: 0.7;
}

.account-menu {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  min-width: 200px;
  list-style: none;
  z-index: 1001;
}

.account-menu__item {
  margin: 0;
}

.account-menu__link,
.account-menu__upgrade {
  display: block;
  padding: 12px 24px;
  color: #042330;
  text-decoration: none;
  font-size: 1rem;
  line-height: 1.1875rem;
  transition: background-color 0.2s ease;
}

.account-menu__link:hover,
.account-menu__upgrade:hover {
  background-color: #f5f5f5;
}

.account-menu__upgrade {
  color: #2cde80;
  font-weight: 700;
}

/* ========== 下拉动画 ========== */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
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

    .header__inner {
      padding: 1.75rem 0; /* 28px 上下内边距 */
    }

  /* 手机端：让 Logo、搜索、Account 三个元素从左到右依次排布 */
  .header__container {
    padding-left: 3rem;
    justify-content: flex-start; /* 从左开始排布，而不是两端对齐 */
    height: 16px; /* 保持固定高度，防止被 logo 撑开 */
  }

  /* Logo 区域与搜索按钮之间的间距 */
  .header__left {
    margin-right: 16px; /* 可根据视觉效果微调，比如 8/16px */
    height: 16px; /* 与容器高度一致 */
  }

  /* 默认：手机和平板上都用 150px 的间距（就是你现在调好的效果） */
  @media (max-width: 1024px) {
    .header__right {
      flex: 0 0 auto;
      justify-content: flex-start;
      gap: 152px;              /* 搜索 与 Account 之间的间距 = 150px */
      height: 16px; /* 与容器高度一致 */
    }
  }

  /* 只有非常窄的小屏（比如宽度 ≤ 360px）时，把间距缩小一点避免换行 */
  @media (max-width: 360px) {
    .header__right {
      gap: 90px;               /* 自己按效果再调，比如 80 / 100 都可以 */
    }
  }

  .header__logo-img--mobile {
    width: 38px;
    height: 36px;
    border-radius: 25%;
    object-fit: contain;
  }

  .header__search-input {
    width: 280px;
  }

  .explore-menu {
    min-width: 300px;
    flex-direction: column;
    gap: 16px;
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

/* ========== Explore 覆盖层 ========== */
.explore-overlay {
  position: fixed;
  /* top 值通过 :style 动态设置，始终相对于视口顶部 */
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明背景，可以看到原页面 */
  z-index: 1000; /* 高于页面内容，但覆盖层从 header 下方开始，所以不会遮挡 header */
  overflow: visible; /* 不限制滚动，内容自然显示 */
  /* 允许点击背景区域关闭菜单（通过 @click.self） */
  pointer-events: auto; /* 允许点击事件 */
  /* fixed 定位确保覆盖层始终固定在视口，不随页面滚动 */
  /* 覆盖层不会随页面滚动而移动，始终显示在视口顶部（header下方） */
}

.explore-overlay__container {
  position: relative;
  background-color: transparent; /* 改为透明，让 DiscoverMenu 的白色背景显示 */
  padding: 0;
  /* 高度由内容决定，不强制最小高度 */
  /* 使用 @click.stop 阻止点击事件冒泡，防止点击内容区域时关闭菜单 */
}

.explore-overlay__content {
  width: 100%;
  padding: 0; /* 移除 padding，让 DiscoverMenu 自己控制 */
}

/* 覆盖层动画 */
.explore-overlay-enter-active,
.explore-overlay-leave-active {
  transition: opacity 0.3s ease;
}

.explore-overlay-enter,
.explore-overlay-leave-to {
  opacity: 0;
}
</style>
