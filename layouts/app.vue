<template>
  <div class="app-layout" :class="{ 'sidebar-open': isSidebarOpen }">
    <!-- 遮罩层 -->
    <div 
      v-if="isSidebarOpen" 
      class="sidebar-overlay"
      @click="toggleSidebar"
    ></div>
    
    <!-- 左侧导航栏 -->
    <aside class="sidebar" :class="{ 'sidebar-open': isSidebarOpen }">
      <div class="sidebar-header">
        <div class="logo">
          <img src="/img/proof/logo.png" alt="Blinkist" />
        </div>
      </div>
      <nav class="sidebar-nav">
        <ul class="nav-main">
          <li :class="['nav-item', { active: $route.path === '/app/for-you' }]">
            <NuxtLink to="/app/for-you" class="nav-link">
              <span class="nav-indicator"></span>
              <div class="nav-content">
                <SidebarIcon name="home" />
                <span>For You</span>
              </div>
            </NuxtLink>
          </li>
          <li :class="['nav-item', { active: $route.path === '/app/explore' }]">
            <NuxtLink to="/app/explore" class="nav-link">
              <span class="nav-indicator"></span>
              <div class="nav-content">
                <SidebarIcon name="explore" />
                <span>Explore</span>
              </div>
            </NuxtLink>
          </li>
          <li :class="['nav-item', { active: $route.path === '/app/library' }]">
            <NuxtLink to="/app/library" class="nav-link">
              <span class="nav-indicator"></span>
              <div class="nav-content">
                <SidebarIcon name="library" />
                <span>My Library</span>
              </div>
            </NuxtLink>
          </li>
          <li :class="['nav-item', { active: $route.path === '/app/spaces' }]">
            <NuxtLink to="/app/spaces" class="nav-link">
              <span class="nav-indicator"></span>
              <div class="nav-content">
                <SidebarIcon name="spaces" />
                <span>Spaces</span>
              </div>
            </NuxtLink>
          </li>
          <li :class="['nav-item', { active: $route.path === '/app/highlights' }]">
            <NuxtLink to="/app/highlights" class="nav-link">
              <span class="nav-indicator"></span>
              <div class="nav-content">
                <SidebarIcon name="highlights" />
                <span>Highlights</span>
              </div>
            </NuxtLink>
          </li>
          <li :class="['nav-item', { active: $route.path === '/app/infographics' }]">
            <NuxtLink to="/app/infographics" class="nav-link">
              <span class="nav-indicator"></span>
              <div class="nav-content">
                <SidebarIcon name="infographics" />
                <span>Infographics</span>
              </div>
            </NuxtLink>
          </li>
          <li :class="['nav-item', { active: $route.path === '/app/live-sessions' }]">
            <NuxtLink to="/app/live-sessions" class="nav-link">
              <span class="nav-indicator"></span>
              <div class="nav-content">
                <SidebarIcon name="live-sessions" />
                <span>Live Sessions</span>
              </div>
            </NuxtLink>
          </li>
          <li :class="['nav-item', { active: $route.path === '/app/todays-free-blink' }]">
            <NuxtLink to="/app/todays-free-blink" class="nav-link">
              <span class="nav-indicator"></span>
              <div class="nav-content">
                <SidebarIcon name="gift" />
                <span>Today's Free Blink</span>
              </div>
            </NuxtLink>
          </li>
        </ul>
        <hr class="nav-divider" />
        <ul class="nav-secondary">
          <li :class="['nav-item', { active: $route.path === '/app/settings' }]">
            <NuxtLink to="/app/settings" class="nav-link">
              <span class="nav-indicator"></span>
              <div class="nav-content">
                <SidebarIcon name="settings" />
                <span>Settings</span>
              </div>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <span class="nav-indicator"></span>
              <div class="nav-content">
                <SidebarIcon name="help" />
                <span>Help & support</span>
              </div>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click.prevent="handleLogout">
              <span class="nav-indicator"></span>
              <div class="nav-content">
                <SidebarIcon name="logout" />
                <span>Logout</span>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- 主内容区 -->
    <main class="main-content">
      <!-- 顶部搜索栏 -->
      <header class="top-header">
        <section class="header-section">
          <div class="header-content">
            <!-- 移动端Logo图标 -->
            <div class="mobile-logo">
              <img src="/img/download/HeardLy.png" alt="HeardLy" />
            </div>
            <div class="search-container">
              <div class="search-input-wrapper">
                <input
                  type="text"
                  placeholder="Blinks, Guides, Shortcasts or Collections"
                  role="search"
                  class="search-input"
                />
                <span class="search-icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon">
                    <path d="M22.1 21.4l-5.8-5.8c1.2-1.4 1.9-3.2 1.9-5.2 0-4.5-3.7-8.2-8.2-8.2-4.5 0-8.2 3.7-8.2 8.2 0 4.5 3.7 8.2 8.2 8.2 2 0 3.8-.7 5.2-1.9l5.8 5.8 1.1-1.1zm-18.7-11a6.7 6.7 0 1113.4.001 6.7 6.7 0 01-13.4 0z" fill="currentColor"></path>
                  </svg>
                </span>
              </div>
            </div>
            <!-- 移动端菜单按钮 -->
            <button 
              class="mobile-menu-button"
              @click="toggleSidebar"
              aria-label="Toggle menu"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="menu-icon">
                <path d="M0 3h24v1.8H0V3zM0 11.1h24v1.8H0v-1.8zM0 19.2h24V21H0v-1.8z" fill="currentColor"></path>
              </svg>
            </button>
          </div>
        </section>
      </header>

      <!-- 页面内容 -->
      <div class="content-wrapper">
        <Nuxt />
      </div>
      
      <!-- 页脚 -->
      <Footer />
    </main>
  </div>
</template>

<script>
import Footer from '~/components/app/footer.vue'
import SidebarIcon from '~/components/app/SidebarIcon.vue'

export default {
  name: 'AppLayout',
  components: {
    Footer,
    SidebarIcon
  },
  data() {
    return {
      isSidebarOpen: false
    }
  },
  mounted() {
    // 添加类名到 body，用于样式应用
    if (process.client) {
      document.body.classList.add('app-layout-active')
      // 动态加载 CeraPro 字体（仅在 app 布局激活时）
      this.loadCeraProFonts()
    }
  },
  beforeDestroy() {
    // 移除类名和字体样式
    if (process.client) {
      document.body.classList.remove('app-layout-active')
      // 移除字体样式
      const fontStyle = document.getElementById('cerapro-fonts')
      if (fontStyle) {
        fontStyle.remove()
      }
    }
  },
  methods: {
    loadCeraProFonts() {
      // 检查是否已经加载
      if (document.getElementById('cerapro-fonts')) {
        return
      }
      
      // 创建 style 元素并注入字体定义
      const style = document.createElement('style')
      style.id = 'cerapro-fonts'
      style.textContent = `
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
      `
      document.head.appendChild(style)
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
    closeSidebar() {
      this.isSidebarOpen = false
    },
    handleLogout() {
      // 清除用户认证信息
      if (process.client) {
        localStorage.removeItem('auth_token')
        localStorage.removeItem('user')
      }
      
      // 关闭侧边栏（移动端）
      this.closeSidebar()
      
      // 使用 replace 跳转，不在历史记录中留下记录，防止通过返回键返回
      this.$router.replace('/auth/login')
    }
  },
  watch: {
    '$route'() {
      // 路由变化时关闭侧边栏（移动端）
      if (window.innerWidth < 768) {
        this.closeSidebar()
      }
    }
  }
}
</script>

<style>
/* 所有样式仅在 app 布局激活时应用，不全局应用 */
body.app-layout-active html {
  font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body.app-layout-active *,
body.app-layout-active *::before,
body.app-layout-active *::after {
  box-sizing: border-box;
}

body.app-layout-active {
  margin: 0;
  padding: 0;
  background: #f8faf9;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", ui-sans-serif, system-ui, -apple-system, sans-serif;
}
</style>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  background: #f8faf9;
  font-family: "CeraPro", sans-serif;
}

/* 遮罩层 */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
  display: block;
}

@media (min-width: 768px) {
  .sidebar-overlay {
    display: none;
  }
}

/* 侧边栏 */
.sidebar {
  width: 75%;
  background: white;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  z-index: 50;
  left: 0;
  top: 0;
  transform: translateX(-100%);
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", sans-serif;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

.sidebar.sidebar-open {
  transform: translateX(0);
}

@media (min-width: 768px) {
  .sidebar {
    width: 10rem;
    background: #f8faf9;
    position: fixed;
    transform: translateX(0);
    transition: transform 0.3s ease-in-out;
  }
}

@media (min-width: 1024px) {
  .sidebar {
    width: 13.75rem;
  }
}

.sidebar-header {
  padding: 1.25rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
}

.logo {
  display: block;
  height: auto;
  width: 8.90625rem;
  cursor: pointer;
  margin-left: 0.5rem;
}

.logo img {
  width: 100%;
  height: auto;
  display: block;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.nav-main {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 3rem;
  width: 100%;
  color: rgba(3, 49, 75, 1);
}

.nav-secondary {
  list-style: none;
  padding: 0;
  margin: 0;
  color: #03314b;
}

.nav-divider {
  border: none;
  border-top: 0.0625rem solid rgba(225, 231, 234, 1);
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0;
  height: 0;
}

.nav-item {
  margin: 0;
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  padding-right: 0.5rem;
  padding-left: 0;
  padding-top: 0;
  padding-bottom: 0;
  color: #03314b;
  text-decoration: none;
  transition: all 0.2s;
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 500;
  height: 2.5rem;
  width: 100%;
  font-family: "CeraPro", sans-serif;
}

.nav-content {
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 0;
}

.nav-link:hover {
  color: #0365f2;
}

.nav-item.active .nav-link {
  color: #0365f2;
  font-weight: 700;
}

.nav-item.active .nav-link .nav-indicator {
  background-color: #0365f2;
}

.nav-indicator {
  height: 100%;
  width: 0.25rem;
  margin-right: 1.25rem;
  border-radius: 0.125rem;
  flex-shrink: 0;
  background-color: transparent;
  transition: background-color 0.2s;
}

@media (min-width: 768px) {
  .nav-indicator {
    margin-right: 1rem;
  }
}

.nav-link:hover .nav-indicator {
  background-color: #0365f2;
}

.nav-link svg {
  display: block;
  vertical-align: middle;
  margin-right: 1rem;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
}

@media (min-width: 768px) {
  .nav-link svg {
    height: 1rem;
    width: 1rem;
    margin-right: 1rem;
  }
}

/* 主内容区 */
.main-content {
  flex: 1;
  margin-left: 0;
  display: flex;
  flex-direction: column;
  background: #f8faf9;
  width: 100%;
}

@media (min-width: 768px) {
  .main-content {
    margin-left: 10rem;
  }
}

@media (min-width: 1024px) {
  .main-content {
    margin-left: 13.75rem;
  }
}

.top-header {
  font-size: 1rem;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", sans-serif;
  box-sizing: border-box;
  margin: 0;
  background: white;
  padding: 0;
  border: none;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 4.5rem;
  box-shadow: 0 0.0625rem 0 0 rgba(225, 231, 234, 1);
}

.header-section {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 80rem;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  .header-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

.header-content {
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 1rem;
}

/* 移动端Logo图标 */
.mobile-logo {
  display: none;
  flex-shrink: 0;
}

@media (max-width: 767px) {
  .mobile-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(1rem * 1.5 + 0.5rem * 2 + 0.125rem * 2); /* 匹配搜索输入框高度: font-size * line-height + padding + border */
  }
  
  .mobile-logo img {
    height: 100%;
    width: auto;
    border-radius: 25%;
    object-fit: contain;
  }
  
  .header-content {
    justify-content: space-between;
  }
}

/* 移动端菜单按钮 */
.mobile-menu-button {
  -webkit-text-size-adjust: 100%;
  tab-size: 4;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  border: 0 solid;
  box-sizing: border-box;
  color: inherit;
  font-family: inherit;
  font-feature-settings: inherit;
  font-size: 100%;
  font-variation-settings: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
  text-transform: none;
  -webkit-appearance: button;
  background-color: initial;
  background-image: none;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
}

@media (max-width: 767px) {
  .mobile-menu-button {
    display: flex;
  }
}

.menu-icon {
  width: 1.75rem; /* w-7 */
  height: 1.75rem;
  color: #03314b;
}

.search-container {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  background: white;
  z-index: 30;
}

@media (min-width: 768px) {
  .search-container {
    width: auto;
  }
}

.search-input-wrapper {
  position: relative;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}

.search-input {
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-family: inherit;
  margin: 0;
  border-radius: 0.5rem;
  border-width: 0.125rem;
  border-style: solid;
  border-color: rgba(225, 231, 234, 1);
  background-color: rgba(241, 246, 244, 1);
  padding: 0.5rem 1.5rem;
  color: rgba(4, 35, 48, 1);
  width: 100%;
  font-size: 1rem;
  line-height: 1.25rem;
  outline: none;
  transition: border-color 0.2s;
}

@media (min-width: 768px) {
  .search-input {
    width: 22rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}

.search-input::placeholder {
  color: #6d787e;
}

@media (max-width: 767px) {
  .search-input::placeholder {
    color: #f1f6f4;
  }
}

.search-input:focus {
  border-color: #0365f2;
}

.search-icon-wrapper {
  position: absolute;
  height: 2.25rem;
  right: 1.5rem;
  padding-left: 0.5rem;
  top: 0.125rem;
  border-left: 0.125rem solid rgba(225, 231, 234, 1);
  display: flex;
  align-items: center;
}

.search-icon {
  width: 1.5rem;
  height: 1.5rem;
  color: #03314b;
}

.content-wrapper {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", sans-serif;
  flex: 1;
  min-height: 100vh;
  overflow-y: auto;
  background: #fff;
}
</style>