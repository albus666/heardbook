<template>
  <div>
    <!-- 搜索框蒙层 - 当搜索框打开时显示 -->
    <transition name="overlay-fade">
      <div v-if="showSearch" class="search-overlay" :style="{ top: headerHeight + 'px' }" @click="closeSearch"></div>
    </transition>

    <!-- Explore 菜单蒙层 - 当 Explore 菜单打开时显示 -->
    <transition name="overlay-fade">
      <div v-if="showExplore" class="explore-overlay-backdrop" :style="{ top: headerHeight + 'px' }" @click="closeExplore"></div>
    </transition>

    <!-- 顶部导航栏 -->
    <header class="header" ref="header" :class="{ 'header--mobile-search': showSearch, 'header--fixed': fixed }">
      <div class="header__inner">
        <div class="header__container">
          <!-- 移动端搜索框（搜索状态时显示，其他内容隐藏） -->
          <div v-if="showSearch" class="header__search desktop-hide">
            <div class="search__header">
              <button class="search__trigger" @click="toggleSearch" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sprite-vue sprite-vue--app sprite-vue--search">
                  <path d="m22.1 21.4-5.8-5.8c1.2-1.4 1.9-3.2 1.9-5.2 0-4.5-3.7-8.2-8.2-8.2s-8.2 3.7-8.2 8.2 3.7 8.2 8.2 8.2c2 0 3.8-.7 5.2-1.9l5.8 5.8zm-18.7-11a6.7 6.7 0 1 1 13.4 0 6.7 6.7 0 0 1-13.4 0z"></path>
                </svg>
              </button>
              <div class="search__field">
                <input
                  ref="mobileSearchInput"
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search for titles and authors"
                  class="search__input"
                />
                <button class="search__close" @click="closeSearch" aria-label="Close search">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="search__close-sprite sprite-vue sprite-vue--app sprite-vue--close">
                    <path d="m19.3 20.7-6.8-6.8-6.8 6.8-1.4-1.4 6.8-6.8-6.8-6.8 1.4-1.4 6.8 6.8 6.8-6.8 1.4 1.4-6.8 6.8 6.8 6.8z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="header__search-results">
              <slot name="search-results"></slot>
            </div>
          </div>

          <!-- Logo（移动端搜索状态时隐藏） -->
          <NuxtLink 
            to="/" 
            class="header__logo desktop-only"
          >
            <img
              src="/img/proof/logo.png"
              alt="Heardly"
              class="header__logo-img header__logo-img--desktop"
            />
          </NuxtLink>
          <NuxtLink 
            to="/" 
            class="header__logo desktop-hide"
            :class="{ 'header__logo--hidden': showSearch }"
          >
            <img
              src="/img/download/HeardLy.png"
              alt="Heardly"
              class="header__logo-img header__logo-img--mobile"
            />
          </NuxtLink>

          <!-- 移动端搜索按钮（非搜索状态时显示） -->
          <div v-if="!showSearch" class="header__mobile-search-btn desktop-hide">
            <button class="header__mobile-search-btn-icon" @click="toggleSearch" aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.1 21.4l-5.8-5.8c1.2-1.4 1.9-3.2 1.9-5.2 0-4.5-3.7-8.2-8.2-8.2-4.5 0-8.2 3.7-8.2 8.2 0 4.5 3.7 8.2 8.2 8.2 2 0 3.8-.7 5.2-1.9l5.8 5.8 1.1-1.1zm-18.7-11a6.7 6.7 0 1113.4.001 6.7 6.7 0 01-13.4 0z" fill="currentColor"></path>
              </svg>
            </button>
          </div>

          <!-- 桌面端导航容器（搜索框和导航链接共用此容器） -->
          <div class="header__nav-container desktop-only">
            <!-- 桌面端导航（非搜索状态） -->
            <div v-if="!showSearch" class="header__nav-content">
              <!-- 搜索按钮 -->
              <div class="header__search-container">
                <button class="header__search-btn" @click="toggleSearch" aria-label="Search">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.1 21.4l-5.8-5.8c1.2-1.4 1.9-3.2 1.9-5.2 0-4.5-3.7-8.2-8.2-8.2-4.5 0-8.2 3.7-8.2 8.2 0 4.5 3.7 8.2 8.2 8.2 2 0 3.8-.7 5.2-1.9l5.8 5.8 1.1-1.1zm-18.7-11a6.7 6.7 0 1113.4.001 6.7 6.7 0 01-13.4 0z" fill="currentColor"></path>
                  </svg>
                </button>
              </div>

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

              <!-- 导航链接插槽 -->
              <slot name="nav-links"></slot>
            </div>

            <!-- 桌面端搜索框（搜索状态） -->
            <div v-if="showSearch" class="header__search desktop-only">
              <div class="search__header">
                <button class="search__trigger" @click="toggleSearch" aria-label="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sprite-vue sprite-vue--app sprite-vue--search">
                    <path d="m22.1 21.4-5.8-5.8c1.2-1.4 1.9-3.2 1.9-5.2 0-4.5-3.7-8.2-8.2-8.2s-8.2 3.7-8.2 8.2 3.7 8.2 8.2 8.2c2 0 3.8-.7 5.2-1.9l5.8 5.8zm-18.7-11a6.7 6.7 0 1 1 13.4 0 6.7 6.7 0 0 1-13.4 0z"></path>
                  </svg>
                </button>
                <div class="search__field">
                  <input
                    ref="searchInput"
                    v-model="searchQuery"
                    type="text"
                    placeholder="Search for titles and authors"
                    class="search__input"
                    @blur="handleSearchBlur"
                  />
                  <button class="search__close" @click="closeSearch" aria-label="Close search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="search__close-sprite sprite-vue sprite-vue--app sprite-vue--close">
                      <path d="m19.3 20.7-6.8-6.8-6.8 6.8-1.4-1.4 6.8-6.8-6.8-6.8 1.4-1.4 6.8 6.8 6.8-6.8 1.4 1.4-6.8 6.8 6.8 6.8z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="header__search-results">
                <slot name="search-results"></slot>
              </div>
            </div>
          </div>

          <!-- 右侧内容插槽（桌面端和移动端） -->
          <div class="header__right desktop-only">
            <slot name="right"></slot>
          </div>
          
          <!-- 移动端右侧内容（非搜索状态时显示） -->
          <div v-if="!showSearch" class="header__right-mobile desktop-hide">
            <slot name="right"></slot>
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
  <!-- 完整模式：显示完整页面结构 -->
  <div v-if="!compact" class="discover-menu__menu">
    <div class="discover-menu__container">
      <div class="discover-menu__header">
        <h3 class="discover-menu__headline">Explore by category</h3>
        <div class="discover-menu__divider"></div>
      </div>
      <ul class="discover-menu__categories">
        <li
          v-for="category in categories"
          :key="category.id"
          class="discover-menu__category"
        >
          <NuxtLink
            :to="category.href"
            class="discover-menu__category-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :width="category.svgWidth || 24"
              :height="category.svgHeight || 24"
              :viewBox="category.viewBox || '0 0 24 24'"
              :class="['discover-menu__sprite', 'sprite-vue', 'sprite-vue--category', `sprite-vue--${category.id}`]"
            >
              <clipPath
                v-if="category.hasClipPath"
                :id="`clip-${category.id}`"
              >
                <path :d="category.clipPathD || 'M0 0h24v24H0z'"></path>
              </clipPath>
              <g :clip-path="category.hasClipPath ? `url(#clip-${category.id})` : null">
                <path
                  v-for="(path, index) in category.paths"
                  :key="index"
                  :fill-rule="path.fillRule"
                  :clip-rule="path.clipRule"
                  :d="path.d"
                ></path>
              </g>
            </svg>
            <span class="discover-menu__label">{{ category.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>

  <!-- 紧凑模式：只显示分类列表 -->
  <ul v-else class="discover-menu__categories discover-menu__categories--compact">
    <li
      v-for="category in categories"
      :key="category.id"
      class="discover-menu__category"
    >
      <NuxtLink
        :to="category.href"
        class="discover-menu__category-link"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :width="category.svgWidth || 24"
          :height="category.svgHeight || 24"
          :viewBox="category.viewBox || '0 0 24 24'"
          :class="['discover-menu__sprite', 'sprite-vue', 'sprite-vue--category', `sprite-vue--${category.id}`]"
        >
          <clipPath
            v-if="category.hasClipPath"
            :id="`clip-compact-${category.id}`"
          >
            <path :d="category.clipPathD || 'M0 0h24v24H0z'"></path>
          </clipPath>
          <g :clip-path="category.hasClipPath ? `url(#clip-compact-${category.id})` : null">
            <path
              v-for="(path, index) in category.paths"
              :key="index"
              :fill-rule="path.fillRule"
              :clip-rule="path.clipRule"
              :d="path.d"
            ></path>
          </g>
        </svg>
        <span class="discover-menu__label">{{ category.label }}</span>
      </NuxtLink>
    </li>
  </ul>
          </div>
        </div>
      </div>
    </transition>

    <!-- 移动端搜索结果展示区域 -->
    <transition name="mobile-search-results">
      <div 
        v-if="showSearch" 
        class="mobile-search-results desktop-hide" 
        :style="{ top: headerHeight + 'px' }"
      >
        <div class="mobile-search-results__content">
          <slot name="search-results"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'CommonHeader',

  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      headerHeight: 0,
      scrollbarWidth: 0,
      showExplore: false,
      showSearch: false,
      searchQuery: '',
      compact: false, // 控制 Explore 菜单是否使用紧凑模式
      categories: [
        {
          id: 'entrepreneurship-and-small-business',
          href: '/en/content/categories/entrepreneurship-and-small-business-en',
          label: 'Entrepreneurship',
          viewBox: '0 0 24 24',
          hasClipPath: true,
          clipPathD: 'M0 0h24v24H0z',
          paths: [
            {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M23.79.69 23.66.3l-.41-.09C18.12-1 12.82 3 9.5 6.27l-5.68-.75L0 9.91l1.74 1.69L5.19 10l.58.57 1 1L5 14l4.94 5 2.78-1.62.85.84.53.53-1.56 3.51 1.71 1.72 4.28-4-.84-5.55C25.503 6.44 23.93 1.158 23.795.707zm-1.34.89A8.41 8.41 0 0 1 22 5.24a18 18 0 0 0-3.24-3.32 8.32 8.32 0 0 1 3.69-.34zm-5.32 1A15.84 15.84 0 0 1 21.32 7c-1.16 2.45-3.39 5.59-7.67 9.23l-5.88-5.84C9 8.9 12.81 4.58 17.13 2.56zm-15 7.19 2.3-2.64 3.78.5c-.65.67-1.16 1.27-1.51 1.7L5.48 8.15zm8.06 7.36-3.26-3.27.89-1.32 3.79 3.73zm4.21 4.68 1.52-3.41-1.16-1.17c.58-.5 1.13-1 1.64-1.47l.6 3.67zm2.72-12.69a2.49 2.49 0 1 0 .04-4.98 2.49 2.49 0 0 0-.04 4.98zm0-3.48a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM.179 22.063A2.33 2.33 0 0 1 .13 20.77c.62-2.19 4.87-3.31 5.69-3.48L7 17l-.25 1.16c-.2.85-1.32 5.15-3.49 5.77-.18.045-.365.069-.55.07a2.51 2.51 0 0 1-1.8-.87 2.33 2.33 0 0 1-.731-1.067zm2.63.42.04-.003c.76-.21 1.56-1.86 2.07-3.39-1.51.52-3.13 1.32-3.35 2.09v.002c-.02.091-.086.39.41.898.441.449.71.417.83.404z'
            }
          ]
        },
        {
          id: 'politics-and-society',
          href: '/en/content/categories/politics-and-society-en',
          label: 'Politics',
          viewBox: '0 0 24 24',
          paths: [
            {
              d: 'M24 9.28V5.86L12 0 0 5.86v3.42h2.63v9.13L0 20.68V24h24v-3.34l-2.85-2.26V9.28zM1.5 7.78v-1L12 1.67 22.5 6.8v1h-21zM9.9 18H6.83V9.28H9.9zm1.5-8.73h1.2V18h-1.2zm2.7 0H17V18h-2.9zm-8.77 0V18h-1.2V9.28zM22.5 22.5h-21v-1.14l2.15-1.85h16.49l2.36 1.87zM19.65 18h-1.2V9.28h1.2z'
            }
          ]
        },
        {
          id: 'marketing-and-sales',
          href: '/en/content/categories/marketing-and-sales-en',
          label: 'Marketing & Sales',
          viewBox: '0 0 24 24',
          paths: [
            {
              d: 'm14.49 9.12-2.6-2.04L9.8 8.96 6.78 6.03l-2.6 5.87 1.25.55 1.81-4.07 2.53 2.46 2.18-1.97 2.8 2.2 2.13-2.9 1.03 1.11 1.01-.93-2.16-2.32z'
            },
            {
              d: 'M0 1.37h1.25v15.5H11.3v4L5.24 22.6l.37 1.32L12 22.13l6.38 1.79.37-1.32-6.07-1.69v-4h10.05V1.37H24V0H0zm2.62.1h18.74v14H2.62z'
            }
          ]
        },
        {
          id: 'science',
          href: '/en/content/categories/science-en',
          label: 'Science',
          viewBox: '0 0 24 24',
          hasClipPath: true,
          clipPathD: 'M0 0h24v24H0z',
          paths: [
            {
              d: 'M16.25 6.83V1.5h1.92V0H5.86v1.5h1.91v5L.48 19.74a3.45 3.45 0 0 0-.43 2.11A2.38 2.38 0 0 0 2.67 24h18.41a3.62 3.62 0 0 0 1.76-.44 2.47 2.47 0 0 0 .69-3.56C22.4 18 17 8.24 16.25 6.83zm-7 .09V1.5h5.48v5.72l.1.17c0 .05 1.29 2.35 2.78 5.05a5.84 5.84 0 0 1-5.28-.38 7.28 7.28 0 0 0-5.43-.86zM22.1 22.25a2.11 2.11 0 0 1-1 .25H2.67c-.9 0-1.07-.41-1.13-.84a2 2 0 0 1 .25-1.19l4-7.26a5.78 5.78 0 0 1 5.77.13 7.28 7.28 0 0 0 6.79.41c1.61 2.92 3.29 5.95 3.86 7 .47.79.25 1.3-.11 1.5z'
            },
            {
              d: 'M8.53 14.7a2.32 2.32 0 1 0 0 4.64 2.32 2.32 0 0 0 0-4.64zm0 3.13a.822.822 0 0 1-.573-1.403.81.81 0 0 1 .573-.237.82.82 0 1 1 0 1.64zM2.32 9.11a2.32 2.32 0 1 0 0-4.64 2.32 2.32 0 0 0 0 4.64zm0-3.11a.82.82 0 1 1-.18 1.63A.82.82 0 0 1 2.32 6zM21.68 4.76A2.32 2.32 0 1 0 21.7.12a2.32 2.32 0 0 0-.02 4.64zm0-3.14a.82.82 0 1 1 0 1.64.82.82 0 0 1 0-1.64z'
            }
          ]
        },
        {
          id: 'health-and-fitness',
          href: '/en/content/categories/health-and-fitness-en',
          label: 'Health & Nutrition',
          viewBox: '0 0 24 24',
          paths: [
            {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M23.66 9.26a6.56 6.56 0 0 0-3.48-3.73 5.521 5.521 0 0 0-.83-.33 11.91 11.91 0 0 0 .08-4.55L19.3 0l-.66.05c-.18 0-4.27.35-6.34 3.05-.215.28-.4.581-.55.9a6.34 6.34 0 0 0-2.3-2.21L8.72 3.1a4.85 4.85 0 0 1 2.2 2.61 8.08 8.08 0 0 0-7.1-.18A6.56 6.56 0 0 0 .34 9.26a8.68 8.68 0 0 0 .83 6.61l.22.44.008.015C3.494 20.608 5.154 24 8.8 24a7.32 7.32 0 0 0 3.2-.94 7.32 7.32 0 0 0 3.2.94c3.643 0 5.303-3.376 7.407-7.654l.013-.026.21-.44a8.679 8.679 0 0 0 .83-6.62zm-5.61-7.61a9.77 9.77 0 0 1-.17 3.23 7.6 7.6 0 0 0-5.16 1A3.81 3.81 0 0 1 13.49 4a7.6 7.6 0 0 1 4.56-2.35zm-15.32 14-.21-.44a7.2 7.2 0 0 1-.76-5.46 5 5 0 0 1 2.72-2.88C6.3 6 9.79 5.9 11.37 8.06v13.62a5.89 5.89 0 0 1-2.57.81c-2.71 0-4.05-2.72-6.07-6.84zm18.76-.44-.22.44c-2 4.12-3.36 6.84-6.07 6.84a6 6 0 0 1-2.58-.81V8.06C14.21 5.9 17.7 6 19.52 6.87a5 5 0 0 1 2.73 2.88 7.29 7.29 0 0 1-.76 5.46zM8.2 16.43c1.8.87 1.8-4.27 1.8-4.27s-3.55 3.4-1.8 4.27zm5.68-4.27s0 5.14 1.75 4.27-1.75-4.27-1.75-4.27z'
            }
          ]
        },
        {
          id: 'personal-growth-and-self-improvement',
          href: '/en/content/categories/personal-growth-and-self-improvement-en',
          label: 'Personal Development',
          viewBox: '0 0 24 24',
          paths: [
            {
              d: 'M24 24H0v-7.3h5.72l-.1-5.57h5.64V5.57h5.62V0H24zM1.5 22.51h21V1.5h-4.12v5.57h-5.62v5.57H7.15l.09 5.57H1.5z'
            }
          ]
        },
        {
          id: 'economics',
          href: '/en/content/categories/economics-en',
          label: 'Economics',
          viewBox: '0 0 24 24',
          paths: [
            {
              d: 'M24 1.37 23.09.18l-2.51 1.9A11.46 11.46 0 0 0 18.17 0l-.81 1.26a9.87 9.87 0 0 1 2 1.73L18.08 4a8.29 8.29 0 0 0-14.4 5.52A8 8 0 0 0 5 13.9l-1.29 1a9.39 9.39 0 0 1-1.15-2.36L1.1 13a11.27 11.27 0 0 0 1.37 2.81L0 17.67l.91 1.19L3.4 17a11.43 11.43 0 0 0 7.06 3.76c.21 0 .42 0 .63.05v1.72H5.82V24h12.05v-1.5h-5.28v-1.68A11.4 11.4 0 0 0 23.29 11a11.24 11.24 0 0 0-1.81-7.74zM12 2.79a6.73 6.73 0 1 1-6.82 6.73A6.77 6.77 0 0 1 12 2.79zm9.83 8a9.941 9.941 0 0 1-17.24 5.28l1.3-1a8.29 8.29 0 0 0 14.37-5.55A8.15 8.15 0 0 0 19 5.16l1.3-1a9.78 9.78 0 0 1 1.5 6.66z'
            }
          ]
        },
        {
          id: 'biography-and-history',
          href: '/en/content/categories/biography-and-history-en',
          label: 'History',
          viewBox: '0 0 24 24',
          hasClipPath: true,
          clipPathD: 'M0 0h24v24H0z',
          paths: [
            {
              d: 'M23.51 6.33a3.18 3.18 0 0 0-2.72-1.51h-4l.25-1.25.67-1.84a1.22 1.22 0 0 0-.04-1.17 1.2 1.2 0 0 0-1-.56H7.15a1.2 1.2 0 0 0-1 .58 1.16 1.16 0 0 0-.1 1.12l.77 1.88.32 1.09v.15H3.22A3.19 3.19 0 0 0 .49 6.33a3.16 3.16 0 0 0-.17 3.08A10.36 10.36 0 0 0 3.2 13a5.8 5.8 0 0 0 0 4l.16.43 2 .24-.31 2 1.75 1.71-.4.47a1.3 1.3 0 0 0 1 2.16h9.22a1.3 1.3 0 0 0 1-2.16l-.41-.47 2.25-2.31A5.84 5.84 0 0 0 20.79 13a10.398 10.398 0 0 0 2.89-3.6 3.16 3.16 0 0 0-.17-3.07zM1.67 8.76a1.66 1.66 0 0 1 .09-1.64 1.72 1.72 0 0 1 1.46-.8h4a8.21 8.21 0 0 1-2.5 4.39 6.167 6.167 0 0 0-.76.93 8.86 8.86 0 0 1-2.29-2.88zM18.36 18l-3.2 3.29 1 1.19H7.81l1-1.19-2.13-2.19.44-2.78L4.5 16a4.24 4.24 0 0 1 .36-3.07 4.92 4.92 0 0 1 .86-1.16C8.06 9.48 9.13 6.7 8.59 4.29l-.36-1.21-.64-1.58h8.64l-.59 1.61-.29 1.43a7.261 7.261 0 0 0-.16 1.24 7.002 7.002 0 0 0 2.69 5.65 4.83 4.83 0 0 1 1.32 1.63 4.34 4.34 0 0 1-.84 4.94zm4-9.27a8.83 8.83 0 0 1-2.23 2.88 6.469 6.469 0 0 0-1.29-1.38 5.58 5.58 0 0 1-2.1-3.94h4.08a1.7 1.7 0 0 1 1.705 1.627 1.66 1.66 0 0 1-.195.843z'
            }
          ]
        },
        {
          id: 'communication-and-social-skills',
          href: '/en/content/categories/communication-and-social-skills-en',
          label: 'Communication Skills',
          viewBox: '0 0 24 24',
          paths: [
            {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M3.7 7.69C3.7 3.45 8.25 0 13.84 0S24 3.45 24 7.69a6.41 6.41 0 0 1-1.69 4.19L22 16.32 18.14 15c.088.367.139.743.15 1.12 0 3.87-4.15 7-9.15 7a11.79 11.79 0 0 1-3.46-.52l-3.94 1.34-.28-4A5.79 5.79 0 0 1 0 16.16c0-2.43 1.64-4.63 4.3-5.89a6.06 6.06 0 0 1-.6-2.58zM5.91 21.1a10.31 10.31 0 0 0 3.23.52c4.22 0 7.65-2.45 7.65-5.51a3.931 3.931 0 0 0-.17-1.08c-.913.201-1.845.302-2.78.3a11 11 0 0 1-8.76-3.83c-2.21 1-3.58 2.74-3.58 4.61a4.41 4.41 0 0 0 1.24 3l.18.19.18 2.6 2.57-.9zm14.98-9.84.17-.19a5 5 0 0 0 1.41-3.38c0-3.41-3.87-6.19-8.63-6.19S5.16 4.32 5.16 7.73s3.88 6.19 8.64 6.19c1.237.007 2.467-.19 3.64-.58l.24-.08 3 1zm-1.48-3.59a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-5.5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM8.864 6.839a1 1 0 1 1 1.111 1.663 1 1 0 0 1-1.11-1.663z'
            }
          ]
        },
        {
          id: 'corporate-culture',
          href: '/en/content/categories/corporate-culture-en',
          label: 'Corporate Culture',
          viewBox: '0 0 24 24',
          hasClipPath: true,
          clipPathD: 'M0 0h24v24H0z',
          paths: [
            {
              d: 'M24 3.43h-7.44V2.15c0-1.58-1-2.15-1.68-2.15H9.42a2 2 0 0 0-1.49.57 1.89 1.89 0 0 0-.49 1.29v1.57H0v11l1.23.12V24h21.46v-9.7l1.31-.17zM8.94 1.84c0-.28.19-.34.48-.34h5.46s.18.11.18.65v1.28H8.94zM1.5 4.93h21v7.88l-7.58.95v-1.57H9.31v1.6L1.5 13zm11.92 8.76v2.61h-2.61v-2.61zm7.77 8.81H2.73v-7.85l6.58.65v2.5h5.61v-2.53l6.27-.78z'
            }
          ]
        },
        {
          id: 'management-and-leadership',
          href: '/en/content/categories/management-and-leadership-en',
          label: 'Management & Leadership',
          viewBox: '0 0 24 24',
          hasClipPath: true,
          clipPathD: 'M0 0h24v24H0z',
          paths: [
            {
              d: 'm19.89 15.51-4.77-8.4a4.19 4.19 0 0 0 1.13-2.86 4.25 4.25 0 1 0-7.32 2.93l-4.45 8.34h-.23a4.25 4.25 0 1 0 4.12 5.23h7.26a4.239 4.239 0 0 0 8.33-.438 4.24 4.24 0 0 0-4.07-4.782zM12 1.5A2.75 2.75 0 1 1 12 7a2.75 2.75 0 0 1 0-5.5zm-7.75 21a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5zm11.3-3.27h-7.1A4.27 4.27 0 0 0 6 15.88l4.17-7.82A4.23 4.23 0 0 0 12 8.5a4.1 4.1 0 0 0 1.91-.5l4.4 7.75a4.23 4.23 0 0 0-2.76 3.48zm4.2 3.27a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5z'
            }
          ]
        },
        {
          id: 'motivation-and-inspiration',
          href: '/en/content/categories/motivation-and-inspiration-en',
          label: 'Motivation & Inspiration',
          viewBox: '0 0 24 24',
          hasClipPath: true,
          clipPathD: 'M0 0h24v24H0z',
          paths: [
            {
              d: 'M21 9a9 9 0 1 0-15 6.63v5.29h2.33a3.71 3.71 0 0 0 7.32 0h2.71V15.57A9.53 9.53 0 0 0 21 9zM4.5 9a7.5 7.5 0 1 1 15 0 7.909 7.909 0 0 1-2.39 5.69l-.22.21v1.11H7.45V15L7 14.51A7.42 7.42 0 0 1 4.5 9zM12 22.51a2.21 2.21 0 0 1-2.12-1.59h4.25A2.23 2.23 0 0 1 12 22.51zm-4.52-3.09v-1.9h9.38v1.9z'
            },
            {
              d: 'M16.27 9.65h1.5a6.22 6.22 0 0 0-1.88-4.49 6.32 6.32 0 0 0-4.5-1.86v1.5a4.89 4.89 0 0 1 3.45 1.42 4.831 4.831 0 0 1 1.43 3.43zM1.04 0 .124 1.186l2.713 2.099.918-1.186zM2.29 4.82H0v1.5h2.29zM22.954-.002l-2.712 2.099.918 1.186 2.712-2.099zM24 4.82h-2.29v1.5H24z'
            }
          ]
        },
        {
          id: 'money-and-investments',
          href: '/en/content/categories/money-and-investments-en',
          label: 'Money & Investments',
          viewBox: '0 0 24 24',
          hasClipPath: true,
          clipPathD: 'M0 0h24v24H0z',
          paths: [
            {
              d: 'M24 11.75h-1.5a1.24 1.24 0 0 1-.6 1c-.6-4-4.81-7-9.91-7-1.24 0-2.474.185-3.66.55A4.22 4.22 0 0 0 5.2 4.66h-.77v3.86a6.38 6.38 0 0 0-1.76 2.37H0v5.94h2.78a8.22 8.22 0 0 0 2.38 2.77l-.37 1a2.47 2.47 0 0 0 .08 1.94 2.53 2.53 0 0 0 4.67-.19l.29-.77c1.44.25 2.91.25 4.35 0l.28.77A2.55 2.55 0 0 0 16.84 24c.297.001.592-.053.87-.16a2.483 2.483 0 0 0 1.43-1.32 2.53 2.53 0 0 0 .08-1.93l-.37-1A7.5 7.5 0 0 0 22 14.41a2.78 2.78 0 0 0 2-2.66zm-6.48 6.94L17 19l.77 2.1a1 1 0 0 1 0 .78 1 1 0 0 1-.59.54 1.001 1.001 0 0 1-1.32-.61l-.74-2-.64.15a11 11 0 0 1-5 0l-.65-.15-.74 2a1 1 0 0 1-1.32.61 1 1 0 0 1-.58-.53 1 1 0 0 1 0-.79L7 19l-.5-.33a6.77 6.77 0 0 1-2.53-2.9l-.2-.46H1.5v-2.92h2.18l.19-.48a5.19 5.19 0 0 1 1.77-2.45l.28-.22V6.31a2.24 2.24 0 0 1 1.38 1.2l.28.66.67-.25A10.42 10.42 0 0 1 12 7.25c4.68 0 8.49 2.92 8.49 6.51a6.002 6.002 0 0 1-2.96 4.93z'
            },
            {
              d: 'm9.84 8.83.2 1.49c1.353-.19 2.727-.19 4.08 0l.22-1.49a17 17 0 0 0-4.5 0zM13.87 4.89a2.45 2.45 0 1 0 .02-4.9 2.45 2.45 0 0 0-.02 4.9zm0-3.39a.95.95 0 1 1-.94 1 .94.94 0 0 1 .94-1z'
            }
          ]
        },
        {
          id: 'psychology',
          href: '/en/content/categories/psychology-en',
          label: 'Psychology',
          viewBox: '0 0 24 24',
          hasClipPath: true,
          clipPathD: 'M0 0h24v24H0z',
          paths: [
            {
              d: 'M24 14.17 21.46 10v-.36A8.93 8.93 0 0 0 20.14 5l-.22-.37h-1.28a3.07 3.07 0 0 0-1.06-1.09 1.5 1.5 0 0 1-.64-.73 3.33 3.33 0 0 0-3.17-2 2.15 2.15 0 0 1-1.13-.28 3.73 3.73 0 0 0-3.84 0 2.18 2.18 0 0 1-1.13.31 3.33 3.33 0 0 0-3.17 2 1.5 1.5 0 0 1-.64.73 3 3 0 0 0-1.14 1.24H1.41l-.21.39A9 9 0 0 0 0 9.64a9.26 9.26 0 0 0 3.35 7V24h1.5v-8.06l-.28-.22A7.799 7.799 0 0 1 1.5 9.64a7.26 7.26 0 0 1 .8-3.32l16.77-.17A7.45 7.45 0 0 1 20 9.64v.76l2.43 4h-2.71v2h-2.64v1.5h2.64v1.2a1.21 1.21 0 0 1-.32.76 2.37 2.37 0 0 1-1.75.54H12.4V24h1.5v-2.06h3.75a3.75 3.75 0 0 0 2.83-1 2.64 2.64 0 0 0 .74-1.84v-3.2h1.5a1.229 1.229 0 0 0 1-.46 1.58 1.58 0 0 0 .28-1.27zM5.9 3.38a1.86 1.86 0 0 1 1.77-1 3.59 3.59 0 0 0 1.91-.53 2.25 2.25 0 0 1 2.27 0 3.65 3.65 0 0 0 1.92.53 1.86 1.86 0 0 1 1.77 1 3 3 0 0 0 1 1.3l-11.82.11A2.93 2.93 0 0 0 5.9 3.38z'
            },
            {
              d: 'M18 9.83a.72.72 0 1 0-1.44-.02.72.72 0 0 0 1.44.02z'
            }
          ]
        },
        {
          id: 'productivity-and-time-management',
          href: '/en/content/categories/productivity-and-time-management-en',
          label: 'Productivity',
          viewBox: '0 0 24 24',
          hasClipPath: true,
          clipPathD: 'M0 0h24v24H0z',
          paths: [
            {
              d: 'M22.15 1.5h2V0H.08v1.5h2c.39 5.25 4.81 8.7 6.75 10.2a.45.45 0 0 1 0 .72c-1.94 1.5-6.36 5-6.75 10.2H0v1.5h24.12v-1.5h-2c-.34-4.61-3.77-7.85-6.39-9.91a.82.82 0 0 1 0-1.3c2.65-2.06 6.08-5.3 6.42-9.91zM9.59 10.36l-.41-.3C8.6 9.59 8 9.08 7.45 8.54h9.34c-.29.28-.58.54-.87.8a13.44 13.44 0 0 0-3.77 3.35 11.302 11.302 0 0 0-2.56-2.33zM20.65 1.5A10.19 10.19 0 0 1 18.19 7H6.05a10.08 10.08 0 0 1-2.47-5.5zM10.06 22.62a7.219 7.219 0 0 0 2.06-2.5 7.31 7.31 0 0 0 2.05 2.5zm10.59 0h-2.11a5.68 5.68 0 0 1-5.67-5.68h-1.5a5.69 5.69 0 0 1-5.68 5.68H3.58c.35-4 3.46-6.9 6.19-9a1.92 1.92 0 0 0 .56-.71 2.68 2.68 0 0 1 1 1.89h1.5a3.58 3.58 0 0 1 1.19-2c.13.452.4.851.77 1.14 2.41 1.81 5.51 4.7 5.86 8.68z'
            }
          ]
        },
        {
          id: 'relationships-and-parenting',
          href: '/en/content/categories/relationships-and-parenting-en',
          label: 'Sex & Relationships',
          viewBox: '0 0 24 24',
          paths: [
            {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M15.2 1.4a4.5 4.5 0 0 0-6.36 0l-.22.22-.35.35-.57-.63a4.5 4.5 0 0 0-6.41 6.31l6.88 7 7-6.88a4.5 4.5 0 0 0 .03-6.37zm-1.07 5.32-6 5.86-5.8-5.95a3.04 3.04 0 1 1 4.34-4.26L8.25 4 10 2.27a3.04 3.04 0 0 1 4.14 4.45zM22.67 16.21l-6.88-7-7 6.87a4.5 4.5 0 1 0 6.31 6.41l.22-.21.35-.35.57.58a4.5 4.5 0 0 0 6.41-6.31zm-1.08 5.32a2.998 2.998 0 0 1-4.3 0l-1.59-1.65L14 21.6a3.042 3.042 0 0 1-4.14-4.46l5.95-5.85 5.85 5.94a2.999 2.999 0 0 1-.07 4.3z'
            }
          ]
        },
        {
          id: 'technology-and-the-future',
          href: '/en/content/categories/technology-and-the-future-en',
          label: 'Technology & the Future',
          viewBox: '0 0 24 24',
          hasClipPath: true,
          clipPathD: 'M0 0h24v24H0z',
          paths: [
            {
              d: 'M15.07 3.06A3.08 3.08 0 1 0 11.2 6v18h1.5V6a3.06 3.06 0 0 0 2.37-2.94zM12 4.63a1.57 1.57 0 1 1 0-3.14 1.57 1.57 0 0 1 0 3.14zM3.07 12.19a3.05 3.05 0 0 0-.75 6V24h1.5v-5.79a3.05 3.05 0 0 0-.75-6zm0 4.63a1.57 1.57 0 1 1 .02-3.14 1.57 1.57 0 0 1-.02 3.14z'
            },
            {
              d: 'M6.09 5.92A3.09 3.09 0 1 0 6 7.46a3 3 0 0 1 1.56 2.73V24H9V10.19a5.15 5.15 0 0 0-1.28-3.34 3.69 3.69 0 0 0-1.63-.93zm-3 2.13a1.57 1.57 0 1 1 .584-.117 1.57 1.57 0 0 1-.604.117zM20.92 9.55a3.07 3.07 0 1 0-3-3.63 3.78 3.78 0 0 0-1.64.93A5.18 5.18 0 0 0 15 10.19V24h1.5V10.19A3 3 0 0 1 18 7.46a3.07 3.07 0 0 0 2.92 2.09zm0-4.63a1.57 1.57 0 1 1-1.57 1.56 1.56 1.56 0 0 1 1.57-1.56z'
            },
            {
              d: 'M20.92 12.19a3.05 3.05 0 0 0-.75 6V24h1.5v-5.79a3.05 3.05 0 0 0-.75-6zm0 4.63a1.57 1.57 0 1 1 0-3.14 1.57 1.57 0 0 1 0 3.14z'
            }
          ]
        },
        {
          id: 'mindfulness-and-happiness',
          href: '/en/content/categories/mindfulness-and-happiness-en',
          label: 'Mindfulness & Happiness',
          viewBox: '0 0 24 24',
          hasClipPath: true,
          clipPathD: 'M0 0h24v24H0z',
          paths: [
            {
              d: 'M19 17.87a7.44 7.44 0 0 0 .51-3.79l-.06-.61-.6-.07A8.28 8.28 0 0 0 15 14a11 11 0 0 0-2.48-5.34.79.79 0 0 0-.52-.28.73.73 0 0 0-.55.25 9.12 9.12 0 0 0-2.54 5.45 8.47 8.47 0 0 0-4.08-.76h-.64v.64a7.63 7.63 0 0 0 .69 4A10.6 10.6 0 0 0 .6 20.35l-.54.54.56.54A8.31 8.31 0 0 0 6.41 24 9.28 9.28 0 0 0 12 21.87 8 8 0 0 0 17.28 24a9.61 9.61 0 0 0 6.13-2.59l.53-.54-.54-.52a8.64 8.64 0 0 0-4.4-2.48zm-1.66-.11a8.4 8.4 0 0 0-2.85.68 8.249 8.249 0 0 0 .65-2.83 5.93 5.93 0 0 1 2.86-.74 4.87 4.87 0 0 1-.69 2.89zM12 10.32a7.62 7.62 0 0 1 0 9.35 7.6 7.6 0 0 1 0-9.35zm-6.36 4.49a6.12 6.12 0 0 1 3.32 1 9.58 9.58 0 0 0 .67 2.48 7.22 7.22 0 0 0-3.19-.58 5.14 5.14 0 0 1-.8-2.9zm-3.36 6.08a6.57 6.57 0 0 1 8.59 0 6.58 6.58 0 0 1-8.59 0zm10.87 0a6.58 6.58 0 0 1 8.6 0 6.59 6.59 0 0 1-8.6 0zM12.75 0h-1.5v5.62h1.5zM1.058 4.301l-1.06 1.061 3.975 3.973 1.06-1.061zM22.945 4.308 18.969 8.28l1.06 1.06 3.976-3.971z'
            }
          ]
        },
        {
          id: 'parenting',
          href: '/en/content/categories/parenting-en',
          label: 'Parenting',
          viewBox: '0 0 24 26',
          svgHeight: 26,
          paths: [
            {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M12.958 7.25a2.465 2.465 0 0 0-3.508 0l-7.222 7.316a2.568 2.568 0 0 0 0 3.58l4.563 4.623a2.468 2.468 0 0 0 3.51 0l7.222-7.315c.97-.983.97-2.597 0-3.58zM8.382 6.198a3.965 3.965 0 0 1 5.643 0l4.566 4.623a4.068 4.068 0 0 1 0 5.687l-7.222 7.316a3.968 3.968 0 0 1-5.645 0L1.16 19.199a4.068 4.068 0 0 1 0-5.686z'
            },
            {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'm14.566 1.612 8.768 8.88-3.59 3.634-8.768-8.88zm-1.482 3.635 6.66 6.745 1.482-1.5-6.66-6.745z'
            },
            {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M19.722 1.734a2.494 2.494 0 0 1 3.547.01L22.2 2.796a.994.994 0 0 0-1.421 0l-.013.013-.007.007a.682.682 0 0 0-.21.366l-.001.001c-.109.592-.476 1.041-.996 1.223a1.598 1.598 0 0 1-1.433-.21l-.002-.002c-.493-.343-.935-.304-1.293-.174a2.078 2.078 0 0 0-.613.357l.002-.002.002-.002-.513-.547a70.95 70.95 0 0 1-.513-.547l.002-.002.003-.002.007-.007.02-.019.066-.055a3.576 3.576 0 0 1 1.025-.583c.694-.253 1.673-.337 2.663.353l-.43.615.428-.617a.16.16 0 0 0 .075.03l.005-.011a.31.31 0 0 0 .02-.07l.737.136-.738-.134a2.17 2.17 0 0 1 .376-.86 2.474 2.474 0 0 1 .273-.32z'
            },
            {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M22.202 4.263a1.048 1.048 0 0 0 0-1.466l1.067-1.054a2.548 2.548 0 0 1-.306 3.841 2.144 2.144 0 0 1-.858.385l-.14-.737.14.737a.277.277 0 0 0-.074.025v-.005.001l-.002.003-.002.003.004-.002a.096.096 0 0 0 0 .026c.003.02.012.046.03.073l-.62.421m0 0 .62-.42c.677.996.593 1.979.347 2.675a3.641 3.641 0 0 1-.63 1.1l-.018.021-.006.008-.003.002-.001.002-.554-.506a79.968 79.968 0 0 0-.553-.506l-.001.001.021-.026a2.142 2.142 0 0 0 .33-.597c.132-.37.17-.827-.173-1.332a1.625 1.625 0 0 1-.207-1.433c.177-.518.618-.895 1.213-1.008a.657.657 0 0 0 .25-.12.964.964 0 0 0 .089-.074l.017-.017-.004.004h.001l.002-.003.002-.002-.001.001.007-.008.013-.013M16.718 11.027H5.41v-1.5h11.308z'
            }
          ]
        },
        {
          id: 'society-and-culture',
          href: '/en/content/categories/society-and-culture-en',
          label: 'Society & Culture',
          viewBox: '0 0 24 24',
          paths: [
            {
              d: 'm24 24-1.36-2.41L13.8 5.33l-.33-.62-.7-1.28L14.23.71 12.91 0l-1 1.86L10.9 0 9.59.72l1.47 2.71-.28.57L10 5.47 1.23 21.81 0 24h22.7zM12.14 5.41 14 8.81H9.88l2-3.81zm2.53 17.09H9.21l2.73-5 2.49 4.5zm1.73 0-3.78-6.87-.68-1.26-.71 1.3L7.5 22.5H2.56l6.52-12.19h5.73l6.63 12.19z'
            }
          ]
        },
        {
          id: 'nature-and-environment',
          href: '/en/content/categories/nature-and-environment-en',
          label: 'Nature & the Environment',
          viewBox: '0 0 25 25',
          svgWidth: 25,
          svgHeight: 25,
          paths: [
            {
              d: 'M24 1.74V1h-.7C22.75 1 10.69.7 5.47 5.92.71 10.68 2.22 19.32 2.64 21.3L0 23.94 1.06 25l2.64-2.64c1.77.367 3.572.555 5.38.56 3.3 0 7.29-.68 10-3.39C24.3 14.31 24 2.25 24 1.74zm-6 16.73c-3.6 3.63-10.18 3.05-13 2.6l4.25-4.25h6v-1.5h-4.51l3.73-3.73h4.88v-1.5H16l2.86-2.86-1.09-1.06L14.91 9V5.65h-1.5v4.88l-3.73 3.73V9.71h-1.5v6L3.93 20c-.45-2.82-1-9.4 2.61-13 4.07-4.07 13.3-4.45 16-4.48-.07 2.64-.45 11.88-4.54 15.95z'
            }
          ]
        },
        {
          id: 'biography-and-memoir',
          href: '/en/content/categories/biography-and-memoir-en',
          label: 'Biography & Memoir',
          viewBox: '0 0 24 24',
          hasClipPath: true,
          clipPathD: 'M0 0h24v24H0z',
          paths: [
            {
              d: 'M23.21.05c-5.35.3-7.42 2.68-7.5 2.78l-.17.17-.06 1.09-1.08.06-.2.19a5.75 5.75 0 0 0-1.31 7.24l-1.84 2.19H2.79v2.59a3 3 0 0 0-2.79 3V24h15.89v-4.64a3 3 0 0 0-3-3v-2.47l1.27-1.51c.393.07.791.107 1.19.11A8 8 0 0 0 19.89 11l.3-.24V9.71l.81-.07.15-.1C23.9 7.65 24 1.49 24 .8V0zM4.29 15.29h7.13v1.07H4.29zm10.1 4.07v3.14H1.5v-3.14a1.5 1.5 0 0 1 1.5-1.5h9.89a1.5 1.5 0 0 1 1.5 1.5zM20.44 8.2l-1.81.23v1.62a6.78 6.78 0 0 1-3.3.93L21 4.26l-1.15-1-5.93 7a4.15 4.15 0 0 1 1.1-4.7l1.85-.11.13-1.8a9.71 9.71 0 0 1 5.46-2c-.1 1.93-.58 5.35-2.02 6.55z'
            }
          ]
        },
        {
          id: 'career-and-success',
          href: '/en/content/categories/career-and-success-en',
          label: 'Career & Success',
          viewBox: '0 0 24 24',
          paths: [
            {
              d: 'm22.3 4.2-2.8-.4-.4-2.8-3 3c-1.5-.9-3.3-1.5-5.2-1.5C5.4 2.5 1 7 1 12.4c0 5.5 4.4 9.9 9.9 9.9s9.9-4.4 9.9-9.9c0-1.9-.5-3.7-1.5-5.2zm-5.6.9.4-.4 1.2-1.2.2 1.4 1.4.1-1.2 1.2-.4.4-.1.1-.6-.1-.8-.1-.1-.8-.1-.6zm2.9 7.3c0 4.8-3.9 8.7-8.7 8.7s-8.7-3.9-8.7-8.7 3.9-8.7 8.7-8.7c1.6 0 3.1.4 4.4 1.2l.3 2-.4.4c-1.2-1-2.6-1.5-4.3-1.5a6.7 6.7 0 1 0 6.7 6.7c0-1.6-.6-3.1-1.6-4.3l.4-.4 2.1.3c.7 1.2 1.1 2.7 1.1 4.3zm-8.4.5 1.6-1.6c.2.3.3.7.3 1.1 0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2 1-2.2 2.2-2.2c.4 0 .8.1 1.1.3l-1.6 1.6zm1.6-3.3c-.5-.3-1.2-.6-1.9-.6-1.9 0-3.4 1.6-3.4 3.4 0 1.9 1.5 3.4 3.4 3.4s3.4-1.5 3.4-3.4c0-.7-.2-1.4-.6-2L15.2 9c.8.9 1.2 2.1 1.2 3.5 0 3-2.5 5.5-5.5 5.5s-5.5-2.5-5.5-5.5S7.9 7 10.9 7c1.3 0 2.5.5 3.4 1.2z'
            }
          ]
        },
        {
          id: 'education',
          href: '/en/content/categories/education-en',
          label: 'Education',
          viewBox: '0 0 24 24',
          hasClipPath: true,
          clipPathD: 'M0 0h24v24H0z',
          paths: [
            {
              d: 'M24.15 6.72 12.07 0 0 6.72l1.77 1v13L0 24.1h5l-1.73-3.41V8.54l1.63.91v6.36c0 2.11 3.41 4 7.15 4s7.15-1.92 7.15-4V9.48zm-12.08-5 9 5-9 5-9-5zm5.63 14.09c0 .87-2.39 2.53-5.65 2.53S6.4 16.68 6.4 15.81v-5.52l5.67 3.15 5.63-3.13z'
            }
          ]
        },
        {
          id: 'religion-and-spirituality',
          href: '/en/content/categories/religion-and-spirituality-en',
          label: 'Religion & Spirituality',
          viewBox: '0 0 24 24',
          hasClipPath: true,
          clipPathD: 'M0 0h24v24H0z',
          paths: [
            {
              d: 'm21 17.44-1.49-1V13c.06-1.359-.14-2.717-.59-4l-3.2-7.65A2.28 2.28 0 0 0 12.89.12a2.38 2.38 0 0 0-.89.53 2.34 2.34 0 0 0-.87-.53 2.26 2.26 0 0 0-2.82 1.24L5.1 9a10.74 10.74 0 0 0-.58 4v3.44L3 17.45l-3-2.08v8.69h11.44L24 24v-8.7zM12.93 1.89a.71.71 0 0 1 .42-.35.8.8 0 0 1 1 .4l3.2 7.64a9.33 9.33 0 0 1 .45 3.34c-.06 2.1 0 3.84 0 3.91v.37l1.64 1.15-4.39 3a4.66 4.66 0 0 1-2.49-3.26v-9c0-.07 0-.54.36-.64a.49.49 0 0 1 .49.08.7.7 0 0 1 .21.34l1.51 4.63 1.47-.5-1.51-4.62a2.3 2.3 0 0 0-.68-1l-1.69-5.1a.47.47 0 0 1 .01-.39zM12 4.33 12.87 7h-.14a2 2 0 0 0-.68.36 1.75 1.75 0 0 0-.69-.36h-.2zM6 17.2v-.37c0-.07.07-1.81 0-3.91a9.71 9.71 0 0 1 .49-3.32L9.7 1.92a.79.79 0 0 1 1-.38.68.68 0 0 1 .42.35.48.48 0 0 1 0 .43l-1.64 5a2.32 2.32 0 0 0-.74 1.11l-1.5 4.84 1.43.44 1.5-4.84a.86.86 0 0 1 .24-.38.58.58 0 0 1 .54-.09c.26.07.33.37.36.54v9.17a4.81 4.81 0 0 1-2.56 3.28l-4.4-3.05zm-4.5 5.36v-4.33l6.27 4.34zm8.57-.22A6.5 6.5 0 0 0 12 20.29a6.63 6.63 0 0 0 2 2.05l-2 1.34zm12.45.18h-6.27l6.27-4.37z'
            }
          ]
        },
        {
          id: 'creativity',
          href: '/en/content/categories/creativity-en',
          label: 'Creativity',
          viewBox: '0 0 24 24',
          hasClipPath: true,
          clipPathD: 'M0 0h24v24H0z',
          paths: [
            {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M0 0h8.67v8.67H0zm1.53 7.2H7.2V1.53H1.53zM0 12.5h3.58V14H0zm19.42-1.77-6.68 6.68 6.64 6.64 3.86-3.86-2.78-2.78 2.82-2.82zm1.7 9.46-1.74 1.74-4.52-4.52 4.56-4.56 1.74 1.74-2.82 2.82zM20.064 1.382A4.5 4.5 0 0 1 23.24.06H24v1.49h-.75a3 3 0 0 0-3 3 4.51 4.51 0 0 1-4.5 4.5 3 3 0 0 0-3 3 4.5 4.5 0 0 1-4.5 4.5 3 3 0 0 0-3 3 4.51 4.51 0 0 1-4.5 4.5H0v-1.5h.75a3 3 0 0 0 3-3 4.51 4.51 0 0 1 4.5-4.5 3 3 0 0 0 3-3 4.5 4.5 0 0 1 4.5-4.49 3 3 0 0 0 3-3 4.5 4.5 0 0 1 1.315-3.178zM10.32 19.19a2.44 2.44 0 1 0 2.43 2.43 2.43 2.43 0 0 0-2.43-2.43zm0 3.37a.94.94 0 1 1-.02-1.88.94.94 0 0 1 .02 1.88zM15.06 4.494A2.41 2.41 0 1 1 12.381.486a2.41 2.41 0 0 1 2.678 4.008zm-.833-2.76a.91.91 0 1 0-1.011 1.512.91.91 0 0 0 1.01-1.513z'
            }
          ]
        },
        {
          id: 'philosophy',
          href: '/en/content/categories/philosophy-en',
          label: 'Philosophy',
          viewBox: '0 0 24 24',
          paths: [
            {
              d: 'M16.65 13.84h-.11c-.406-.12-.82-.21-1.24-.27a4.8 4.8 0 0 0 .87-.93 5.47 5.47 0 0 0 3.7-1.46 5.53 5.53 0 0 0 1.14-3.84L21 6.63h-.68a5.452 5.452 0 0 0-.68 0 5.58 5.58 0 0 0-.46-3.95l-.32-.6-.63.26a6.49 6.49 0 0 0-1.16.68A5.5 5.5 0 0 0 15.24.41L14.69 0l-.46.5A5.22 5.22 0 0 0 12.91 4c.017.183.05.363.1.54a5.49 5.49 0 0 0-1-.1 5.56 5.56 0 0 0-1 .1c.046-.177.076-.358.09-.54A5.22 5.22 0 0 0 9.78.5L9.32 0l-.54.41a5.48 5.48 0 0 0-1.85 2.66 6.23 6.23 0 0 0-1.15-.68l-.63-.26-.32.6a5.63 5.63 0 0 0-.46 4 3.9 3.9 0 0 0-.68 0H3v.58a5.53 5.53 0 0 0 1.14 3.84 5.47 5.47 0 0 0 3.7 1.46c.258.372.564.708.91 1A8.931 8.931 0 0 0 7 14l-.2.07C2.54 15.6 0 19 0 23.25V24h24v-.75c0-4.44-2.74-7.95-7.35-9.41zm2.16-3.71A3.33 3.33 0 0 1 17 11a3.34 3.34 0 0 1 .73-1.93 3.3 3.3 0 0 1 1.84-.89 3.35 3.35 0 0 1-.76 1.95zm-.67-6a3.35 3.35 0 0 1 .07 2.09 3.37 3.37 0 0 1-1.36 1.57 3.35 3.35 0 0 1-.07-2.09 3.32 3.32 0 0 1 1.36-1.55zm-3.25-2a3 3 0 0 1 .8 1.63 2.73 2.73 0 0 1-.29 1.37 3 3 0 0 1-.19.36 3 3 0 0 1-.8-1.62 3.06 3.06 0 0 1 .48-1.73zm.74 7.49A3.63 3.63 0 1 1 12 6a3.65 3.65 0 0 1 3.63 3.63zM9.12 2.14a3.06 3.06 0 0 1 .49 1.76 3 3 0 0 1-.8 1.62 4.13 4.13 0 0 1-.2-.37 2.79 2.79 0 0 1-.29-1.38 3 3 0 0 1 .8-1.63zm-3.25 2a3.32 3.32 0 0 1 1.36 1.58 3.5 3.5 0 0 1-.07 2.09A3.37 3.37 0 0 1 5.8 6.24a3.35 3.35 0 0 1 .07-2.09zm-.67 6a3.28 3.28 0 0 1-.74-1.92 3.25 3.25 0 0 1 1.83.89A3.29 3.29 0 0 1 7 11a3.33 3.33 0 0 1-1.8-.87zm2.06 5.33h.12A7.811 7.811 0 0 1 10 15h4c.378.002.755.028 1.13.08-.59 2.15-2.69 6.84-9.95 7.46H1.53c.27-3.28 2.33-5.82 5.73-7.08zm3.53 7a11.42 11.42 0 0 0 5.8-7.08c3.5 1.24 5.61 3.77 5.89 7.08z'
            }
          ]
        },
        {
          id: 'fiction',
          href: '/en/content/categories/fiction-en',
          label: 'Fiction',
          viewBox: '0 0 24 24',
          paths: [
            {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d: 'M16.73 1l.6.998.997.598-.998.6-.599.997-.598-.998-.998-.599.998-.598L16.73 1zm4.706 6.227a.72.72 0 01.284.573v1.45h2.03v14.5H.25V9.25h2.03V7.8a.72.72 0 01.913-.694L12 9.562l8.807-2.456a.72.72 0 01.629.12zm-8.716 3.628v10.397l7.56-2.108V8.748l-7.56 2.107zm-1.44 10.397V10.856L3.72 8.748v10.396l7.56 2.108zm-1.781.998H1.75v-11.5h.53v8.94a.72.72 0 00.527.694l6.692 1.866zm12.221-2.56v-8.94h.53v11.5h-7.749l6.692-1.866a.72.72 0 00.527-.694zM13.898 4.344L13 2.847l-.898 1.496-1.497.898 1.497.898L13 7.636l.898-1.497 1.497-.898-1.497-.898z'
            }
          ]
        }
      ]
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
    }
  },
  beforeDestroy() {
    // 清理事件监听
    if (process.client) {
      window.removeEventListener('resize', this.calculateHeaderHeight)
      window.removeEventListener('resize', this.calculateScrollbarWidth)
      // 确保恢复 body 样式
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  },
  methods: {
    calculateHeaderHeight() {
      if (process.client && this.$refs.header) {
        this.$nextTick(() => {
          this.headerHeight = this.$refs.header.offsetHeight
        })
      }
    },
    calculateScrollbarWidth() {
      if (process.client) {
        const outer = document.createElement('div')
        outer.style.visibility = 'hidden'
        outer.style.overflow = 'scroll'
        outer.style.msOverflowStyle = 'scrollbar'
        document.body.appendChild(outer)
        const inner = document.createElement('div')
        outer.appendChild(inner)
        this.scrollbarWidth = outer.offsetWidth - inner.offsetWidth
        outer.parentNode.removeChild(outer)
      }
    },
    toggleSearch() {
      const willOpen = !this.showSearch
      this.showSearch = willOpen
      
      if (willOpen) {
        this.$nextTick(() => {
          // 桌面端和移动端使用不同的输入框引用
          if (process.client) {
            const isMobile = window.innerWidth <= 768
            const inputRef = isMobile 
              ? this.$refs.mobileSearchInput 
              : this.$refs.searchInput
            if (inputRef) {
              inputRef.focus()
            }
            // 移动端防止背景滚动
            if (isMobile) {
              document.body.style.overflow = 'hidden'
              document.body.style.paddingRight = this.scrollbarWidth + 'px'
            }
          }
        })
      } else {
        // 移动端恢复背景滚动
        if (process.client && window.innerWidth <= 768) {
          document.body.style.overflow = ''
          document.body.style.paddingRight = ''
        }
      }
    },
    closeSearch() {
      this.showSearch = false
      this.searchQuery = ''
      // 移动端恢复背景滚动
      if (process.client && window.innerWidth <= 768) {
        document.body.style.overflow = ''
        document.body.style.paddingRight = ''
      }
    },
    handleSearchBlur() {
      // 延迟关闭，允许点击关闭按钮（仅桌面端）
      if (process.client && window.innerWidth > 768) {
        setTimeout(() => {
          if (!this.$refs.searchInput || document.activeElement !== this.$refs.searchInput) {
            this.closeSearch()
          }
        }, 200)
      }
    },
    toggleExplore() {
      const willOpen = !this.showExplore
      this.showExplore = willOpen
      
      if (willOpen) {
        this.calculateHeaderHeight()
        // 防止背景滚动
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = this.scrollbarWidth + 'px'
      } else {
        document.body.style.overflow = ''
        document.body.style.paddingRight = ''
      }
    },
    closeExplore() {
      this.showExplore = false
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }
}
</script>

<style scoped>
/* ========== 蒙层样式 ========== */
.search-overlay,
.explore-overlay-backdrop {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(58, 70, 73, .7);
  z-index: 998;
  will-change: top;
}

@media (max-width: 768px) {
  .search-overlay {
    display: none;
  }
}

.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity 0.3s ease;
}

.overlay-fade-enter,
.overlay-fade-leave-to {
  opacity: 0;
}

/* ========== Header 基础样式 ========== */
.header {
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  position: sticky;
  top: 0;
  z-index: 999;
  width: 100%;
  box-sizing: border-box;
}

.header--fixed {
  position: fixed;
  left: 0;
  right: 0;
}

.header__inner {
  width: 100%;
  padding: 1.75rem 0;
  background-color: #fff;
  position: relative;
  z-index: 1;
  user-select: text !important;
  line-height: 1.1875rem;
  color: #042330;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPRO", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  overflow: visible;
}

.header__container {
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: 2.25rem;
  padding-right: 2.25rem;
  display: flex;
  align-items: center;
  height: 1rem;
  line-height: 1.1875rem;
  color: #042330;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPRO", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  user-select: text !important;
  position: relative;
  overflow: visible;
}

/* ========== Logo 样式 ========== */
.header__logo {
  display: flex;
  align-items: center;
  height: 1rem;
  position: relative;
  z-index: 20;
  text-decoration: none;
}

.header__logo-img {
  height: 36px;
  width: auto;
  display: block;
  object-fit: contain;
}


.header__logo--hidden {
  display: none !important;
}

/* ========== 导航容器样式 ========== */
.header__nav-container {
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;
  min-width: 0;
  margin-left: 1.5rem;
  padding-right: 24px;
}

.header__nav-content {
  display: flex;
  align-items: center;
  width: 100%;
}

/* ========== 搜索容器样式 ========== */
.header__search-container {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 20;
  flex-shrink: 0;
}

/* ========== 按钮重置样式 ========== */
.header__search-btn,
.search__trigger,
.search__close,
.header__mobile-search-close,
.header__mobile-search-btn-icon {
  box-sizing: inherit;
  padding: 0;
  background: none;
  border: 0;
  border-radius: 0;
  outline: 0;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
  font-family: "CeraPRO";
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  user-select: text !important;
  margin-top: .25rem;
}

.header__search-btn:hover,
.header__search-btn:active,
.search__trigger:hover,
.search__trigger:active,
.search__close:hover,
.search__close:active,
.header__mobile-search-close:hover,
.header__mobile-search-close:active {
  color: #0365F2;
}

.header__search-btn svg,
.search__trigger svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

/* ========== 桌面端搜索框样式 ========== */
.header__search {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  position: relative;
}

.search__header {
  display: flex;
  align-items: center;
  height: 40px;
  box-sizing: border-box;
}

.search__trigger {
  color: #0365F2;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
}

.search__field {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  height: 100%;
  margin-left: 1.5rem;
  border-bottom: 2px solid #BAC8CE;
  box-sizing: border-box;
}

.search__input {
  flex: 1;
  padding: 8px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  font-family: "CeraPRO", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.1875rem;
  color: #042330;
  height: 100%;
  box-sizing: border-box;
}

.search__input::placeholder {
  color: #707070;
}

.search__close {
  color: #BAC8CE;
  width: 16px;
  height: 24px;
  flex-shrink: 0;
  margin-right: 8px;
}

.search__close svg {
  width: 16px;
  height: 24px;
  display: block;
  fill: currentColor;
}

.header__search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff;
}

/* ========== 导航样式 ========== */
.header__explore {
  position: relative;
  margin-left: 2rem;
}

.header__link {
  margin-left: 2rem;
}

.header__explore-btn {
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: "CeraPRO";
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  color: #03314b;
  user-select: text !important;
  position: relative;
  height: 1.5rem;
  -webkit-font-smoothing: antialiased;
  padding: 0;
  background: none;
  border: 0;
  border-radius: 0;
  outline: 0;
  appearance: none;
  transition: color 0.2s ease, opacity 0.2s ease;
}

.header__explore-btn:hover,
.header__explore-btn--active {
  color: #0365F2;
}

.header__explore-btn:hover svg,
.header__explore-btn--active svg {
  color: #0365F2;
  fill: #0365F2;
}

.header__explore-arrow--up {
  transform: scaleY(-1);
  transition: transform 0.2s ease;
}

/* ========== 右侧内容区域 ========== */
.header__right {
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-left: 32px;
  height: 1rem;
  position: relative;
}


/* ========== Explore 覆盖层样式 ========== */
.explore-overlay {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
}

.explore-overlay__container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.explore-overlay__content {
  width: 100%;
  background-color: #fff;
}

.explore-overlay-enter-active,
.explore-overlay-leave-active {
  transition: opacity 0.2s;
}

.explore-overlay-enter-active .explore-overlay__container,
.explore-overlay-leave-active .explore-overlay__container {
  transition: transform 0.2s;
}

.explore-overlay-enter .explore-overlay__container,
.explore-overlay-leave-to .explore-overlay__container {
  transform: translateY(-20px);
}

.explore-overlay-enter,
.explore-overlay-leave-to {
  opacity: 0;
}

/* ========== 响应式样式 ========== */
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

  .header {
    border-bottom: none;
  }

  .header__logo-img--desktop {
    display: none;
  }

  .header__logo-img--mobile {
    display: block;
    width: 36px;
    height: 36px;
    border-radius: 25%;
    object-fit: contain;
  }

  .header__inner {
    padding: 28px 0;
  }
  
  .header--mobile-search .header__inner {
    padding-bottom: 28px;
    border-bottom: 1px solid #e6e6e6;
  }

  .header__container {
    padding-left: 3rem;
    padding-right: 3rem;
    justify-content: flex-start;
    height: 16px;
    position: relative;
  }

  /* 移动端搜索状态时隐藏其他内容 */
  .header--mobile-search .header__logo,
  .header--mobile-search .header__nav-container,
  .header--mobile-search .header__right,
  .header--mobile-search .header__right-mobile,
  .header--mobile-search .header__mobile-search-btn {
    display: none !important;
  }

  .header__logo {
    display: flex;
    align-items: center;
    height: 16px;
  }

  .header__search-container,
  .header__right {
    height: 16px;
  }

  /* 移动端搜索按钮 */
  .header__mobile-search-btn {
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
    height: 16px;
    flex-shrink: 0;
  }

  .header__mobile-search-btn-icon {
    color: #042330;
    width: 24px;
    height: 24px;
  }

  .header__mobile-search-btn-icon svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }

  /* 移动端右侧内容 */
  .header__right-mobile {
    display: flex;
    align-items: center;
    margin-left: auto;
    height: 16px;
  }

  @media (max-width: 360px) {
    .header__right {
      gap: 0.5rem;
    }
  }

  /* 移动端搜索框样式 */
  .header__search.desktop-hide {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0;
  }

  .header__search.desktop-hide .search__header {
    padding: 0 3rem;
  }

  .header__search.desktop-hide .search__field {
    margin-left: 8px;
  }

  .mobile-search-results {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 998;
    background-color: #fff;
    overflow-y: auto;
  }

  .mobile-search-results__content {
    width: 100%;
    padding-top: 1rem;
  }

  .mobile-search-results-enter-active,
  .mobile-search-results-leave-active {
    transition: opacity 0.2s;
  }

  .mobile-search-results-enter,
  .mobile-search-results-leave-to {
    opacity: 0;
  }
}

.discover-menu__menu {
  width: 100% !important;
  background-color: #F1F6F4 !important; /* 根据图片中的背景颜色 */
  min-height: 100%;
}

.discover-menu__container {
  width: 952px; /* 根据图片中的宽度设置 */
  max-width: 952px;
  margin: 0 auto;
  padding: 2rem 0 2.5rem; /* 根据图片描述：padding: 32px 0px 40px */
}

.discover-menu__header {
  /* 移除 padding，让标题和横线都从相同位置开始 */
  /* 横线下方的间距 */
  padding: 0 0 0.75rem;
}

.discover-menu__divider {
  height: 1px;
  background-color: #e6e6e6;
  margin-top: 1.5rem; /* 标题和横线之间的间距 */
  margin-left: 2rem; /* 与标题文本的起始位置对齐（标题的左边距） */
  margin-right: 2rem; /* 与列表的右边距对齐 */
  /* 横线长度与列表宽度一致，从标题位置开始到列表结束 */
}

.discover-menu__headline {
  font-size: 16px; /* 根据图片中的字体大小 */
  font-weight: 400; /* 根据图片，看起来是正常粗细 */
  color: #0365F2; /* 根据图片中的颜色 */
  margin: 0 96px 0 2rem; /* 左边距 2rem 与横线对齐，右边距 96px */
  padding: 0; /* 重置默认 padding */
  font-family: 'CeraPRO', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; /* 根据图片中的字体 */
  display: block; /* 确保是块级元素 */
}

.discover-menu__categories {
  display: grid !important; /* 确保样式生效 */
  grid-template-columns: repeat(3, 1fr) !important; /* 3列布局，与图片一致 */
  gap: 0 !important; /* 移除 gap，使用 padding 控制间距 */
  list-style: none;
  padding: 0 2rem 0 0 !important; /* 移除左边距，让第一列图标从正确位置开始 */
  margin: 0;
  width: 100%; /* 确保宽度与容器一致 */
  max-width: 952px; /* 与容器宽度一致 */
}

.discover-menu__category {
  margin: 0;
}

.discover-menu__category-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem; /* 增加左右 padding */
  text-decoration: none;
  color: #03314B; /* 根据图片中的颜色 */
  border-radius: 4px;
  transition: background-color 0.2s ease;
  font-family: 'CeraPRO', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; /* 根据图片中的字体 */
}

/* 第一列的链接，让图标起始位置与横线对齐 */
.discover-menu__categories > .discover-menu__category:nth-child(3n+1) .discover-menu__category-link {
  padding-left: 2rem; /* 第一列的左边距与横线起始位置对齐 */
}

.discover-menu__category-link:hover {
  background-color: transparent; /* 移除背景色，保持透明 */
  color: #0365F2; /* hover 时文字变为蓝色，与图片中的样式一致 */
}

.discover-menu__category-link:hover .discover-menu__label {
  color: #0365F2 !important; /* hover 时文字明确变为蓝色 */
}

.discover-menu__sprite {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.discover-menu__label {
  font-size: 16px; /* 根据图片中的字体大小 */
  font-family: 'CeraPRO', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; /* 根据图片中的字体 */
  font-weight: 400; /* 根据图片，字体看起来是正常粗细 */
  line-height: 1.5;
  color: #03314B; /* 根据图片中的颜色 */
  transition: color 0.2s ease; /* 添加颜色过渡效果 */
}

/* 紧凑模式样式 */
.discover-menu__categories--compact {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5列布局，显示更多内容 */
  gap: 1rem; /* 增加间距 */
  list-style: none;
  padding: 0;
  margin: 0;
  /* 移除高度限制，显示全部内容 */
}

.discover-menu__categories--compact .discover-menu__category-link {
  padding: 0.5rem 0.75rem;
  font-size: 0.9375rem;
}

.discover-menu__categories--compact .discover-menu__sprite {
  width: 20px;
  height: 20px;
}

.discover-menu__categories--compact .discover-menu__label {
  font-size: 0.9375rem;
  font-weight: 400;
}

/* 响应式设计 */
@media (max-width: 1000px) {
  .discover-menu__container {
    width: 100%;
    max-width: 100%;
    padding: 1rem;
  }

  .discover-menu__categories {
    max-width: 100%;
    padding: 0 1rem !important;
  }
}

@media (max-width: 768px) {
  .discover-menu__categories {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)) !important;
    gap: 1rem !important;
  }

  .discover-menu__headline {
    font-size: 1.25rem;
  }
}

</style>
