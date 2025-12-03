<template>
  <div>
    <!-- 蒙层 - 当 Account 菜单打开时显示 -->
    <transition name="overlay-fade">
      <div v-if="showAccount" class="overlay" @click="closeAccount"></div>
    </transition>

    <!-- 搜索框蒙层 - 当搜索框打开时显示 -->
    <transition name="overlay-fade">
      <div v-if="showSearch" class="search-overlay" :style="{ top: headerHeight + 'px' }" @click="closeSearch"></div>
    </transition>

    <!-- Explore 菜单蒙层 - 当 Explore 菜单打开时显示 -->
    <transition name="overlay-fade">
      <div v-if="showExplore" class="explore-overlay-backdrop" :style="{ top: headerHeight + 'px' }" @click="closeExplore"></div>
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

          <!-- 搜索按钮（独立容器，与 CTA 分离） -->
          <div class="header__search-container">
            <button class="header__search-btn" @click="toggleSearch" aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.1 21.4l-5.8-5.8c1.2-1.4 1.9-3.2 1.9-5.2 0-4.5-3.7-8.2-8.2-8.2-4.5 0-8.2 3.7-8.2 8.2 0 4.5 3.7 8.2 8.2 8.2 2 0 3.8-.7 5.2-1.9l5.8 5.8 1.1-1.1zm-18.7-11a6.7 6.7 0 1113.4.001 6.7 6.7 0 01-13.4 0z" fill="currentColor"></path>
              </svg>
            </button>
          </div>

          <!-- 搜索框 -->
          <transition name="search-fade">
            <div v-if="showSearch" class="header__search" :style="searchLeft !== null ? { left: searchLeft + 'px' } : {}">
              <input
                  ref="searchInput"
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search for titles and authors"
                  class="header__search-input"
                  @blur="handleSearchBlur"
              />
              <button class="header__search-close" @click="closeSearch" aria-label="Close search">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="search__close-sprite sprite-vue sprite-vue--app sprite-vue--close">
                  <path d="m19.3 20.7-6.8-6.8-6.8 6.8-1.4-1.4 6.8-6.8-6.8-6.8 1.4-1.4 6.8 6.8 6.8-6.8 1.4 1.4-6.8 6.8 6.8 6.8z"></path>
                </svg>
              </button>
            </div>
          </transition>

          <!-- 桌面端导航链接（左侧：Explore + 主导航） -->
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

          <!-- 右侧导航内容（CTA 按钮区域） -->
          <div class="header__right">
            <!-- 手机端 CTA：Start free trial + Log in（登录/注册路由下显示） -->
            <div
              v-if="isAuthRoute"
              class="header__mobile-cta desktop-hide"
            >
              <NuxtLink to="/auth/signup" class="header__mobile-trial">
                {{ primaryCtaText }}
              </NuxtLink>
              <NuxtLink to="/auth/login" class="header__mobile-login">
                {{ secondaryCtaText }}
              </NuxtLink>
            </div>

            <!-- 右侧主 CTA：文案可根据路由切换（Upgrade now / Start free trial 等） -->
            <NuxtLink to="/pricing" class="header__upgrade desktop-only">
              {{ primaryCtaText }}
            </NuxtLink>

            <!-- 登录/注册页：直接显示 Log in 链接（桌面端） -->
            <NuxtLink
              v-if="isAuthRoute"
              to="/auth/login"
              class="header__login-link desktop-only"
            >
              {{ secondaryCtaText }}
            </NuxtLink>

            <!-- Account 菜单（右侧次要 CTA：文案随路由变化，非登录页显示） -->
            <div v-if="!isAuthRoute" class="header__account" v-click-outside="closeAccount">
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
  </div>
</template>

<script>
import DiscoverMenu from '~/components/DiscoverMenu.vue'

export default {
  name: 'AppHeader',

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
     * 右侧主 CTA 文案（Upgrade now / Start free trial ...）
     */
    primaryCtaText() {
      const path = this.$route?.path || ''

      // 登录相关页面示例：可扩展为「Start free trial」
      if (path.includes('/auth/login') || path.includes('/login') || path.includes('/sign-in')) {
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
      headerHeight: 80, // header 高度，动态计算
      scrollbarWidth: 0, // 滚动条宽度，用于补偿
      showAccount: false,
      showExplore: false,
      showSearch: false,
      searchQuery: '',
      searchLeft: null, // 搜索框的left位置，用于与Explore按钮对齐，null表示需要计算
      searchOverlayUpdateFrame: null // 用于requestAnimationFrame
    }
  },

  mounted() {
    // 动态计算 header 高度
    this.calculateHeaderHeight()
    // 计算滚动条宽度
    this.calculateScrollbarWidth()
    // 监听窗口大小变化
    if (process.client) {
      window.addEventListener('resize', this.calculateHeaderHeight)
      window.addEventListener('resize', this.calculateScrollbarWidth)
      window.addEventListener('resize', this.calculateSearchPosition)
      // 监听滚动事件，确保搜索框蒙层位置正确
      window.addEventListener('scroll', this.updateSearchOverlayPosition, { passive: true })
    }
  },

  beforeDestroy() {
    // 清理事件监听
    if (process.client) {
      window.removeEventListener('resize', this.calculateHeaderHeight)
      window.removeEventListener('resize', this.calculateScrollbarWidth)
      window.removeEventListener('resize', this.calculateSearchPosition)
      window.removeEventListener('scroll', this.updateSearchOverlayPosition)
      // 清理requestAnimationFrame
      if (this.searchOverlayUpdateFrame) {
        cancelAnimationFrame(this.searchOverlayUpdateFrame)
        this.searchOverlayUpdateFrame = null
      }
      // 确保恢复 body 样式
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
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

    calculateHeaderHeight() {
      if (process.client) {
        const header = this.$el?.querySelector('.header')
        if (header) {
          // header是sticky定位，始终在视口顶部
          // 使用getBoundingClientRect获取header的实际位置，确保蒙层位置准确
          const headerRect = header.getBoundingClientRect()
          // header始终在视口顶部（top: 0），所以bottom就是header的高度
          this.headerHeight = headerRect.bottom
        }
      }
    },

    calculateScrollbarWidth() {
      if (process.client) {
        // 计算滚动条宽度 - 使用更准确的方法
        const scrollDiv = document.createElement('div')
        scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;'
        document.body.appendChild(scrollDiv)
        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
        document.body.removeChild(scrollDiv)
        this.scrollbarWidth = scrollbarWidth
      }
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
        this.$nextTick(() => {
          // 再次计算header高度，确保蒙层位置正确
          this.calculateHeaderHeight()
        })
      }
    },

    closeExplore() {
      this.showExplore = false
      // 清理requestAnimationFrame
      if (this.searchOverlayUpdateFrame && !this.showSearch) {
        cancelAnimationFrame(this.searchOverlayUpdateFrame)
        this.searchOverlayUpdateFrame = null
      }
    },

    toggleSearch() {
      const willOpen = !this.showSearch
      
      if (willOpen) {
        // 在打开搜索框之前，先计算位置（此时Explore按钮还可见）
        this.calculateSearchPosition()
        // 重新计算header高度，确保蒙层位置正确
        this.calculateHeaderHeight()
      }
      
      this.showSearch = willOpen
      
      if (this.showSearch) {
        this.showAccount = false
        this.showExplore = false
        this.$nextTick(() => {
          // 如果位置还没计算出来，再次计算
          if (this.searchLeft === null) {
            this.calculateSearchPosition()
          }
          // 再次计算header高度，确保蒙层位置正确
          this.calculateHeaderHeight()
          this.$refs.searchInput?.focus()
        })
      }
    },

    calculateSearchPosition() {
      if (process.client) {
        const exploreBtn = this.$el?.querySelector('.header__explore-btn')
        const exploreSpan = exploreBtn?.querySelector('span')
        const headerContainer = this.$el?.querySelector('.header__container')
        
        if (exploreSpan && headerContainer) {
          const exploreSpanRect = exploreSpan.getBoundingClientRect()
          const containerRect = headerContainer.getBoundingClientRect()
          
          // 计算Explore文字相对于header容器的位置
          const exploreTextLeft = exploreSpanRect.left - containerRect.left
          
          // 搜索框输入框有16px的左padding，所以搜索框的left需要减去这个padding
          // 这样输入框内文字的起始位置就会与Explore文字的起始位置对齐
          const inputLeftPadding = 16
          this.searchLeft = exploreTextLeft - inputLeftPadding
        } else if (exploreBtn && headerContainer) {
          // 如果没有找到span，使用按钮的位置作为fallback
          const exploreRect = exploreBtn.getBoundingClientRect()
          const containerRect = headerContainer.getBoundingClientRect()
          const inputLeftPadding = 16
          this.searchLeft = exploreRect.left - containerRect.left - inputLeftPadding
        } else {
          // 如果Explore按钮不存在（比如在登录页面），居中显示
          if (headerContainer) {
            const containerRect = headerContainer.getBoundingClientRect()
            const inputWidth = 400 // 搜索框输入框的宽度
            // 居中显示：容器宽度的一半减去输入框宽度的一半
            this.searchLeft = (containerRect.width - inputWidth) / 2
          } else {
            // 如果容器也不存在，使用默认值（居中，假设容器宽度为1024px）
            this.searchLeft = (1024 - 400) / 2
          }
        }
      }
    },

    closeSearch() {
      this.showSearch = false
      this.searchQuery = ''
      // 清理requestAnimationFrame
      if (this.searchOverlayUpdateFrame) {
        cancelAnimationFrame(this.searchOverlayUpdateFrame)
        this.searchOverlayUpdateFrame = null
      }
    },

    handleSearchBlur() {
      setTimeout(() => {
        if (!this.searchQuery && document.activeElement !== this.$refs.searchInput) {
          this.closeSearch()
        }
      }, 150)
    },

    updateSearchOverlayPosition() {
      // 当搜索框或Explore菜单打开时，滚动时更新蒙层位置
      // 由于header是sticky定位，始终在视口顶部，所以蒙层应该始终从header底部开始
      if (this.showSearch || this.showExplore) {
        // 使用requestAnimationFrame确保位置实时更新
        if (this.searchOverlayUpdateFrame) {
          cancelAnimationFrame(this.searchOverlayUpdateFrame)
        }
        this.searchOverlayUpdateFrame = requestAnimationFrame(() => {
          this.calculateHeaderHeight()
          this.searchOverlayUpdateFrame = null
        })
      }
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

.search-overlay {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(58, 70, 73, .7);
  z-index: 998;
  /* 确保蒙层始终从header底部开始，即使页面滚动 */
  will-change: top;
}

.explore-overlay-backdrop {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(58, 70, 73, .7);
  z-index: 998;
  /* 确保蒙层始终从header底部开始，即使页面滚动 */
  will-change: top;
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
  color: #03314b;
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
  color: #03314b;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  -webkit-user-select: auto !important;
  user-select: auto !important;
  position: relative; /* 为搜索框提供定位上下文 */
}

.header__left {
  display: flex;
  align-items: center;
  height: 16px; /* 与容器高度一致，防止被 logo 撑开 */
  line-height: 1.1875rem;
  color: #03314b;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  /* Logo 与搜索之间的间距现在由 .header__search-container 的 margin-left 控制 */
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

/* ========== 搜索容器（独立控制） ========== */
.header__search-container {
  display: flex;
  align-items: center;
  height: 16px; /* 与容器高度一致 */
  margin-left: 16px; /* Logo 与搜索之间的间距 */
}

.header__right {
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1;
  justify-content: flex-end;
  height: 16px; /* 与容器高度一致 */
  line-height: 1.1875rem;
  color: #03314b;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  flex-grow: 1;
  user-select: text !important;
  margin-left: auto; /* 将 CTA 区域推到最右侧 */
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
  color: #03314b;
  transition: color 0.2s ease;
}

.header__search-btn:hover,
.header__search-btn:active {
  color: #0365F2;
}

.header__search-btn svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

/* ========== 搜索框 ========== */
.header__search {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #fff;
  z-index: 1000;
  width: 456px;
  height: 40px;
}

.header__search::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 456px;
  height: 2px;
  background-color: #BAC8CE;
}

.header__search-input {
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 0;
  font-size: 16px;
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.1875rem;
  color: #03314b;
  outline: none;
  background: transparent;
  height: 100%;
  box-sizing: border-box;
}

.header__search-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #BAC8CE;
  width: 16px;
  height: 24px;
  flex-shrink: 0;
  transition: color 0.2s ease;
  /* 与输入框文字相同的bottom和left边距 */
  margin-right: 8px;
  margin-bottom: 8px;
  /* 按钮顶部与文字中部对齐：padding-top(8px) + line-height/2(1.1875rem/2 ≈ 9.5px) = 17.5px */
  margin-top: calc(8px + 1.1875rem / 2);
}

.header__search-close:hover,
.header__search-close:active {
  color: #0365F2;
}

.header__search-close svg {
  width: 16px;
  height: 24px;
  display: block;
  fill: currentColor;
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
  margin-right: 48px; /* 桌面端：导航链接与右侧 CTA 按钮之间的间距 */
}

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
  color: #03314b;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
  font-family: inherit;
  padding: 8px 0;
  margin-left: 1.5vw;
  transition: color 0.2s ease, opacity 0.2s ease;
}

.header__explore-btn:hover {
  color: #0365F2;
}

.header__explore-btn:hover svg {
  color: #0365F2;
  fill: #0365F2;
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

.header__arrow {
  width: 24px;
  height: 24px;
  transition: transform 0.2s ease;
}

.explore-menu {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  gap: 32px;
  min-width: 400px;
  z-index: 1001;
}

.explore-menu__section {
  flex: 1;
}

.explore-menu__section--categories {
  flex: 2;
  min-width: 500px;
}

.explore-menu__title {
  font-size: 14px;
  font-weight: 700;
  color: #03314b;
  margin: 0 0 12px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.explore-menu__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.explore-menu__list li {
  margin-bottom: 8px;
}

.explore-menu__link {
  color: #03314b;
  text-decoration: none;
  font-size: 1rem;
  line-height: 1.1875rem;
  transition: opacity 0.2s ease;
}

.explore-menu__link:hover {
  opacity: 0.7;
}

.header__upgrade {
  background-color: #2cde80;
  color: #03314b;
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

.header__login-link {
  color: #03314b;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
  transition: opacity 0.2s ease;
  white-space: nowrap;
}

.header__login-link:hover {
  opacity: 0.7;
}

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
  color: #03314b;
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
  color: #03314b;
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

  /* 确保手机端 Logo 一定显示，桌面端 Logo 隐藏 */
  .header__logo-img--desktop {
    display: none;
  }

  .header__logo-img--mobile {
    display: block;
  }

  .header__inner {
    /* 手机端高度与 Blinkist 一致（约 28px 上下内边距） */
    padding: 1rem 0;
  }

  /* 手机端：让 Logo、搜索、CTA 三个元素从左到右依次排布 */
  .header__container {
    padding-left: 3rem;
    justify-content: flex-start; /* 从左开始排布，而不是两端对齐 */
    height: 16px; /* 保持固定高度，防止被 logo 撑开 */
  }

  /* Logo 区域（手机端不需要右边距，因为搜索在独立容器中） */
  .header__left {
    margin-right: 0;
    height: 16px; /* 与容器高度一致 */
  }

  /* 搜索容器（手机端独立控制） */
  .header__search-container {
    margin-left: 16px; /* Logo 与搜索之间的间距 */
    flex: 0 0 auto; /* 不伸缩，保持固定宽度 */
    height: 16px; /* 与容器高度一致 */
  }

  /* 手机端 header__right 布局调整（只包含 CTA 按钮） */
  .header__right {
    flex: 0 0 auto;
    justify-content: flex-start;
    gap: 1rem;                 /* CTA 按钮之间的间距 */
    margin-left: auto;        /* 将 CTA 区域推到最右侧 */
    height: 16px; /* 与容器高度一致 */
  }

  

  /* 只有非常窄的小屏（比如宽度 ≤ 360px）时，把间距缩小一点避免换行 */
  @media (max-width: 360px) {
    .header__right {
      gap: 0.5rem;
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

  /* 手机端导航栏 CTA 区域（Start free trial + Log in） */
  .header__mobile-cta {
    display: flex !important;
    align-items: center;
    gap: 1rem;
    /* margin-left 由父容器 .header__right 的 margin-left: auto 控制 */
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
  }

  .header__mobile-trial:hover {
    background-color: #20c46f;
    border-color: #20c46f;
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
}

/* ========== Explore 覆盖层 ========== */
.explore-overlay {
  position: fixed;
  /* top 值通过 :style 动态设置，始终相对于视口顶部 */
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent; /* 背景透明，由独立的蒙层处理 */
  z-index: 1000; /* 高于蒙层，确保内容在蒙层之上 */
  overflow: visible; /* 不限制滚动，内容自然显示 */
  pointer-events: none; /* 禁用点击事件，由蒙层处理 */
  /* fixed 定位确保覆盖层始终固定在视口，不随页面滚动 */
  /* 覆盖层不会随页面滚动而移动，始终显示在视口顶部（header下方） */
}

.explore-overlay__container {
  position: relative;
  background-color: transparent; /* 改为透明，让 DiscoverMenu 的白色背景显示 */
  padding: 0;
  min-height: auto; /* 高度由内容决定 */
  pointer-events: auto; /* 内容区域可以交互 */
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

.explore-overlay-enter-active .explore-overlay__container,
.explore-overlay-leave-active .explore-overlay__container {
  transition: transform 0.3s ease;
}

.explore-overlay-enter .explore-overlay__container,
.explore-overlay-leave-to .explore-overlay__container {
  transform: translateY(-20px);
}
</style>

