<template>
  <div class="pricing-layout">
    <!-- Header -->
    <header class="pricing-header">
      <NuxtLink to="/" class="pricing-header__logo">
        <img src="/img/proof/logo.png" alt="Heardly" />
      </NuxtLink>
      <div class="pricing-header__right">
        <a href="/settings" class="pricing-header__close hover:text-light-grey h-6 w-6" aria-label="Close" data-astro-prefetch="load">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M11.0859 12.5001L4.29297 5.70718L5.70718 4.29297L12.5001 11.0859L19.293 4.29297L20.7072 5.70718L13.9143 12.5001L20.7072 19.293L19.293 20.7072L12.5001 13.9143L5.70718 20.7072L4.29297 19.293L11.0859 12.5001Z" fill="currentColor"></path>
          </svg>
        </a>
      </div>
    </header>

    <!-- 主内容区 -->
    <main class="pricing-layout__main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'PricingLayout',
  mounted() {
    // 添加类名到 body，用于样式应用
    if (process.client) {
      document.body.classList.add('pricing-layout-active')
      // 动态加载 CeraPro 字体（仅在 pricing 布局激活时）
      this.loadCeraProFonts()
    }
  },
  beforeDestroy() {
    // 移除类名和字体样式
    if (process.client) {
      document.body.classList.remove('pricing-layout-active')
      // 移除字体样式
      const fontStyle = document.getElementById('cerapro-fonts-pricing')
      if (fontStyle) {
        fontStyle.remove()
      }
    }
  },
  methods: {
    loadCeraProFonts() {
      // 检查是否已经加载
      if (document.getElementById('cerapro-fonts-pricing')) {
        return
      }
      
      // 创建 style 元素并注入字体定义
      const style = document.createElement('style')
      style.id = 'cerapro-fonts-pricing'
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
    }
  }
}
</script>

<style>
/* 所有样式仅在 pricing 布局激活时应用，不全局应用 */
body.pricing-layout-active html {
  font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body.pricing-layout-active *,
body.pricing-layout-active *::before,
body.pricing-layout-active *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body.pricing-layout-active {
  margin: 0;
  padding: 0;
  background: hsl(150 17% 98%);
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPRO", ui-sans-serif, system-ui, -apple-system, sans-serif;
  line-height: 1.1875rem;
  color: hsl(202 92% 15%);
  font-size: 1rem;
  box-sizing: inherit;
}
</style>

<style scoped>
.pricing-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
  font-family: CeraPro, sans-serif;
  -webkit-font-smoothing: antialiased;
  box-sizing: inherit;
  overflow-y: auto;
}

/* Header 样式 */
.pricing-header {
  width: 100%;
  margin: 0 auto;
  max-width: 80rem;
  padding-inline: 1rem;
  padding-block: 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  box-sizing: border-box;
}

.pricing-header__logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  line-height: 0;
}

.pricing-header__logo img {
  height: 2.25rem;
  width: auto;
  display: block;
  margin: -0.375rem 0;
}

.pricing-header__right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.pricing-header__link {
  color: hsl(202 92% 15%);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.2s;
  font-family: CeraPro, sans-serif;
}

.pricing-header__link:hover {
  color: hsl(215 98% 48%);
}

.pricing-header__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  color: hsl(202 92% 15%);
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
}

.pricing-header__close:hover {
  color: hsl(198 17% 77%);
}

.pricing-header__close svg {
  width: 100%;
  height: 100%;
  display: block;
}

/* 主内容区 */
.pricing-layout__main {
  width: 100%;
  background: transparent;
  flex: 1;
  min-height: 0;
}
</style>

