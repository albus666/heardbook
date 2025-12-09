<template>
  <div>
    <!-- 搜索框蒙层 - 当搜索框打开时显示 -->
    <transition name="overlay-fade">
      <div v-if="showSearch" class="search-overlay" :style="{ top: headerHeight + 'px' }" @click="closeSearch"></div>
    </transition>

    <!-- Explore 菜单蒙层 - 当 Explore 菜单打开时显示 -->
    <transition name="overlay-fade">
      <div v-if="showExplore" class="explore-overlay-backdrop" :style="{ top: headerHeight + 'px' }"
           @click="closeExplore"></div>
    </transition>

    <!-- 顶部导航栏 -->
    <header class="header" ref="header" :class="{ 'header--mobile-search': showSearch, 'header--fixed': fixed }">
      <div class="header__inner">
        <div class="header__container">
          <!-- 移动端搜索框（搜索状态时显示，其他内容隐藏） -->
          <div v-if="showSearch" class="header__search desktop-hide">
            <div class="search__header">
              <button class="search__trigger" @click="toggleSearch" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                     class="sprite-vue sprite-vue--app sprite-vue--search">
                  <path
                      d="m22.1 21.4-5.8-5.8c1.2-1.4 1.9-3.2 1.9-5.2 0-4.5-3.7-8.2-8.2-8.2s-8.2 3.7-8.2 8.2 3.7 8.2 8.2 8.2c2 0 3.8-.7 5.2-1.9l5.8 5.8zm-18.7-11a6.7 6.7 0 1 1 13.4 0 6.7 6.7 0 0 1-13.4 0z"></path>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                       class="search__close-sprite sprite-vue sprite-vue--app sprite-vue--close">
                    <path
                        d="m19.3 20.7-6.8-6.8-6.8 6.8-1.4-1.4 6.8-6.8-6.8-6.8 1.4-1.4 6.8 6.8 6.8-6.8 1.4 1.4-6.8 6.8 6.8 6.8z"></path>
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
                <path
                    d="M22.1 21.4l-5.8-5.8c1.2-1.4 1.9-3.2 1.9-5.2 0-4.5-3.7-8.2-8.2-8.2-4.5 0-8.2 3.7-8.2 8.2 0 4.5 3.7 8.2 8.2 8.2 2 0 3.8-.7 5.2-1.9l5.8 5.8 1.1-1.1zm-18.7-11a6.7 6.7 0 1113.4.001 6.7 6.7 0 01-13.4 0z"
                    fill="currentColor"></path>
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
                    <path
                        d="M22.1 21.4l-5.8-5.8c1.2-1.4 1.9-3.2 1.9-5.2 0-4.5-3.7-8.2-8.2-8.2-4.5 0-8.2 3.7-8.2 8.2 0 4.5 3.7 8.2 8.2 8.2 2 0 3.8-.7 5.2-1.9l5.8 5.8 1.1-1.1zm-18.7-11a6.7 6.7 0 1113.4.001 6.7 6.7 0 01-13.4 0z"
                        fill="currentColor"></path>
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
                    <path
                        d="M11.796 13.888 7.104 9.256a.895.895 0 0 0-1.253 0 .867.867 0 0 0 0 1.238l5.318 5.25a.895.895 0 0 0 1.253 0l5.318-5.25a.867.867 0 0 0 0-1.238.895.895 0 0 0-1.253 0l-4.691 4.632Z"></path>
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                       class="sprite-vue sprite-vue--app sprite-vue--search">
                    <path
                        d="m22.1 21.4-5.8-5.8c1.2-1.4 1.9-3.2 1.9-5.2 0-4.5-3.7-8.2-8.2-8.2s-8.2 3.7-8.2 8.2 3.7 8.2 8.2 8.2c2 0 3.8-.7 5.2-1.9l5.8 5.8zm-18.7-11a6.7 6.7 0 1 1 13.4 0 6.7 6.7 0 0 1-13.4 0z"></path>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         class="search__close-sprite sprite-vue sprite-vue--app sprite-vue--close">
                      <path
                          d="m19.3 20.7-6.8-6.8-6.8 6.8-1.4-1.4 6.8-6.8-6.8-6.8 1.4-1.4 6.8 6.8 6.8-6.8 1.4 1.4-6.8 6.8 6.8 6.8z"></path>
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
                      <img
                          v-if="category.icon"
                          :src="category.icon"
                          :alt="category.label"
                          class="discover-menu__sprite"
                      />
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
                  <img
                      v-if="category.icon"
                      :src="category.icon"
                      :alt="category.label"
                      class="discover-menu__sprite"
                  />
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
          icon: '/img/app/category/Entrepreneurship.svg'
        },
        {
          id: 'politics-and-society',
          href: '/en/content/categories/politics-and-society-en',
          label: 'Politics',
          icon: '/img/app/category/Politics.svg'
        },
        {
          id: 'marketing-and-sales',
          href: '/en/content/categories/marketing-and-sales-en',
          label: 'Marketing & Sales',
          icon: '/img/app/category/Marketing&Sales.svg'
        },
        {
          id: 'science',
          href: '/en/content/categories/science-en',
          label: 'Science',
          icon: '/img/app/category/Science.svg'
        },
        {
          id: 'health-and-fitness',
          href: '/en/content/categories/health-and-fitness-en',
          label: 'Health & Nutrition',
          icon: '/img/app/category/Health&Nutrition.svg'
        },
        {
          id: 'personal-growth-and-self-improvement',
          href: '/en/content/categories/personal-growth-and-self-improvement-en',
          label: 'Personal Development',
          icon: '/img/app/category/PersonalDevelopment.svg'
        },
        {
          id: 'economics',
          href: '/en/content/categories/economics-en',
          label: 'Economics',
          icon: '/img/app/category/Economics.svg'
        },
        {
          id: 'biography-and-history',
          href: '/en/content/categories/biography-and-history-en',
          label: 'History',
          icon: '/img/app/category/History.svg'
        },
        {
          id: 'communication-and-social-skills',
          href: '/en/content/categories/communication-and-social-skills-en',
          label: 'Communication Skills',
          icon: '/img/app/category/CommunicationSkills.svg'
        },
        {
          id: 'corporate-culture',
          href: '/en/content/categories/corporate-culture-en',
          label: 'Corporate Culture',
          icon: '/img/app/category/CorporateCulture.svg'
        },
        {
          id: 'management-and-leadership',
          href: '/en/content/categories/management-and-leadership-en',
          label: 'Management & Leadership',
          icon: '/img/app/category/Management&Leadership.svg'
        },
        {
          id: 'motivation-and-inspiration',
          href: '/en/content/categories/motivation-and-inspiration-en',
          label: 'Motivation & Inspiration',
          icon: '/img/app/category/Motivation&Inspiration.svg'
        },
        {
          id: 'money-and-investments',
          href: '/en/content/categories/money-and-investments-en',
          label: 'Money & Investments',
          icon: '/img/app/category/Money&Investments.svg'
        },
        {
          id: 'psychology',
          href: '/en/content/categories/psychology-en',
          label: 'Psychology',
          icon: '/img/app/category/Psychology.svg'
        },
        {
          id: 'productivity-and-time-management',
          href: '/en/content/categories/productivity-and-time-management-en',
          label: 'Productivity',
          icon: '/img/app/category/Productivity.svg'
        },
        {
          id: 'relationships-and-parenting',
          href: '/en/content/categories/relationships-and-parenting-en',
          label: 'Sex & Relationships',
          icon: '/img/app/category/Sex&Relationships.svg'
        },
        {
          id: 'technology-and-the-future',
          href: '/en/content/categories/technology-and-the-future-en',
          label: 'Technology & the Future',
          icon: '/img/app/category/Technology&theFuture.svg'
        },
        {
          id: 'mindfulness-and-happiness',
          href: '/en/content/categories/mindfulness-and-happiness-en',
          label: 'Mindfulness & Happiness',
          icon: '/img/app/category/Mindfulness&Happiness.svg'
        },
        {
          id: 'parenting',
          href: '/en/content/categories/parenting-en',
          label: 'Parenting',
          icon: '/img/app/category/Parenting.svg'
        },
        {
          id: 'society-and-culture',
          href: '/en/content/categories/society-and-culture-en',
          label: 'Society & Culture',
          icon: '/img/app/category/Society&Culture.svg'
        },
        {
          id: 'nature-and-environment',
          href: '/en/content/categories/nature-and-environment-en',
          label: 'Nature & the Environment',
          icon: '/img/app/category/Nature&theEnvironment.svg'
        },
        {
          id: 'biography-and-memoir',
          href: '/en/content/categories/biography-and-memoir-en',
          label: 'Biography & Memoir',
          icon: '/img/app/category/Biography&Memoir.svg'
        },
        {
          id: 'career-and-success',
          href: '/en/content/categories/career-and-success-en',
          label: 'Career & Success',
          icon: '/img/app/category/Career&Success.svg'
        },
        {
          id: 'education',
          href: '/en/content/categories/education-en',
          label: 'Education',
          icon: '/img/app/category/Education.svg'
        },
        {
          id: 'religion-and-spirituality',
          href: '/en/content/categories/religion-and-spirituality-en',
          label: 'Religion & Spirituality',
          icon: '/img/app/category/Religion&Spirituality.svg'
        },
        {
          id: 'creativity',
          href: '/en/content/categories/creativity-en',
          label: 'Creativity',
          icon: '/img/app/category/Creativity.svg'
        },
        {
          id: 'philosophy',
          href: '/en/content/categories/philosophy-en',
          label: 'Philosophy',
          icon: '/img/app/category/Philosophy.svg'
        },
        {
          id: 'fiction',
          href: '/en/content/categories/fiction-en',
          label: 'Fiction',
          icon: '/img/app/category/Fiction.svg'
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
