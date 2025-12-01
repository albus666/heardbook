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
              <img src="/img/proof/logo.png" alt="Heardly" class="header__logo-img" />
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

            <!-- 桌面端导航链接 -->
            <nav class="header__nav desktop-only" v-show="!showSearch">
              <!-- Explore 下拉菜单 -->
              <div class="header__explore" v-click-outside="closeExplore">
                <button class="header__explore-btn" @click="toggleExplore">
                  <span>Explore</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="header__arrow">
                    <path d="M11.796 13.888 7.104 9.256a.895.895 0 0 0-1.253 0 .867.867 0 0 0 0 1.238l5.318 5.25a.895.895 0 0 0 1.253 0l5.318-5.25a.867.867 0 0 0 0-1.238.895.895 0 0 0-1.253 0l-4.691 4.632Z"></path>
                  </svg>
                </button>

                <!-- Explore 下拉内容 -->
                <transition name="dropdown">
                  <div v-if="showExplore" class="explore-menu">
                    <div class="explore-menu__section">
                      <h3 class="explore-menu__title">Discover</h3>
                      <ul class="explore-menu__list">
                        <li><NuxtLink to="/en/app/for-you" class="explore-menu__link">For You</NuxtLink></li>
                        <li><NuxtLink to="/en/app/trending" class="explore-menu__link">Trending</NuxtLink></li>
                        <li><NuxtLink to="/en/app/new-releases" class="explore-menu__link">New Releases</NuxtLink></li>
                      </ul>
                    </div>
                    <div class="explore-menu__section">
                      <h3 class="explore-menu__title">Categories</h3>
                      <ul class="explore-menu__list">
                        <li><NuxtLink to="/en/content/categories/productivity" class="explore-menu__link">Productivity</NuxtLink></li>
                        <li><NuxtLink to="/en/content/categories/psychology" class="explore-menu__link">Psychology</NuxtLink></li>
                        <li><NuxtLink to="/en/content/categories/philosophy" class="explore-menu__link">Philosophy</NuxtLink></li>
                        <li><NuxtLink to="/en/content/categories/fiction" class="explore-menu__link">Fiction</NuxtLink></li>
                      </ul>
                    </div>
                  </div>
                </transition>
              </div>

              <NuxtLink to="/en/app/library" class="header__link">My Library</NuxtLink>
              <NuxtLink to="/en/app/highlights" class="header__link">Highlights</NuxtLink>
            </nav>

            <!-- Upgrade 按钮 -->
            <NuxtLink to="/pricing" class="header__upgrade desktop-only">
              Upgrade now
            </NuxtLink>

            <!-- Account 菜单 -->
            <div class="header__account" v-click-outside="closeAccount">
              <button class="header__account-btn" @click="toggleAccount">
                <span>Account</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M11.796 13.888 7.104 9.256a.895.895 0 0 0-1.253 0 .867.867 0 0 0 0 1.238l5.318 5.25a.895.895 0 0 0 1.253 0l5.318-5.25a.867.867 0 0 0 0-1.238.895.895 0 0 0-1.253 0l-4.691 4.632Z"></path>
                </svg>
              </button>

              <!-- Account 下拉菜单 -->
              <transition name="dropdown">
                <ul v-if="showAccount" class="account-menu">
                  <li class="account-menu__item desktop-hide">
                    <NuxtLink to="/pricing" class="account-menu__upgrade">Upgrade now</NuxtLink>
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

    <!-- 主内容区 -->
    <main class="settings-main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'SettingsHeader',

  data() {
    return {
      showAccount: false,
      showExplore: false,
      showSearch: false,
      searchQuery: ''
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

    toggleExplore() {
      this.showExplore = !this.showExplore
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
  height: 100%;
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
  height: 100%;
  line-height: 1.1875rem;
  color: #042330;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

.header__logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.header__logo-img {
  height: 36px;
  width: auto;
}

.header__right {
  display: flex;
  align-items: center;
  gap: 24px;
  flex: 1;
  justify-content: flex-end;
  height: 100%;
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
  padding: 8px;
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
  transition: opacity 0.2s ease;
}

.header__explore-btn:hover {
  opacity: 0.7;
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

.explore-menu__title {
  font-size: 14px;
  font-weight: 700;
  color: #042330;
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
  color: #042330;
  text-decoration: none;
  font-size: 1rem;
  line-height: 1.1875rem;
  transition: opacity 0.2s ease;
}

.explore-menu__link:hover {
  opacity: 0.7;
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
  gap: 4px;
  color: #042330;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.1875rem;
  font-family: inherit;
  padding: 8px 0;
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
      padding: 1rem 0;
    }

  .header__container {
      padding-left: 1rem;
      padding-right: 1rem;
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
</style>
