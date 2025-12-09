<template>
  <div class="min-h-screen">
    <section class="explore-section">
      <!-- Trending 部分 -->
      <div class="section-block">
        <div class="section-header">
          <div class="section-header-text">
            <h3 class="section-title">Trending</h3>
            <p class="section-subtitle">What's popular right now</p>
          </div>
        </div>
        <div class="scroll-wrapper">
          <button
              class="scroll-button scroll-button-left"
              :class="{ 'scroll-button-disabled': !canScrollLeft.trending }"
              :disabled="!canScrollLeft.trending"
              @click="scrollLeft('trending')"
              aria-label="slide left"
              data-test-id="slideLeft"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scroll-icon">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="currentColor"></path>
            </svg>
          </button>
          <div class="books-scroll" ref="trendingScroll" @scroll="updateScrollButtons('trending')">
            <BookCard
                v-for="book in trendingBooks"
                :key="book.id"
                :book="book"
                class="scroll-item"
            />
          </div>
          <button
              class="scroll-button scroll-button-right"
              :class="{ 'scroll-button-disabled': !canScrollRight.trending }"
              :disabled="!canScrollRight.trending"
              @click="scrollRight('trending')"
              aria-label="slide right"
              data-test-id="slideRight"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scroll-icon">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Categories 部分 -->
      <div class="section-block">
        <div class="section-header">
          <div class="section-header-text">
            <h3 class="section-title">Categories</h3>
            <p class="section-subtitle">Explore all 28 categories</p>
          </div>
        </div>
        <!-- 移动端横向滚动 -->
        <div class="categories-mobile">
          <div class="categories-scroll-mobile">
            <NuxtLink
                v-for="category in categories"
                :key="category.id"
                :to="category.url || '#'"
                class="category-chip"
                data-test-id="b-chip"
            >
              <img 
                v-if="category.icon" 
                :src="category.icon" 
                :alt="category.name"
                class="category-icon"
              />
              <span>{{ category.name }}</span>
            </NuxtLink>
          </div>
        </div>
        <!-- 桌面端网格布局 -->
        <div class="categories-desktop">
          <NuxtLink
              v-for="category in categories"
              :key="category.id"
              :to="category.url || '#'"
              class="category-chip"
              data-test-id="b-chip"
          >
            <img 
              v-if="category.icon" 
              :src="category.icon" 
              :alt="category.name"
              class="category-icon"
            />
            <span>{{ category.name }}</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Latest 部分 -->
      <div class="section-block">
        <div class="section-header">
          <div class="section-header-text">
            <h3 class="section-title">Latest</h3>
            <p class="section-subtitle" data-test-id="book-row-subtitle">Titles recently added on Blinkist</p>
          </div>
        </div>
        <div class="scroll-wrapper">
          <button
              class="scroll-button scroll-button-left"
              :class="{ 'scroll-button-disabled': !canScrollLeft.latest }"
              :disabled="!canScrollLeft.latest"
              @click="scrollLeft('latest')"
              aria-label="slide left"
              data-test-id="slideLeft"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scroll-icon">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="currentColor"></path>
            </svg>
          </button>
          <div class="books-scroll" ref="latestScroll" @scroll="updateScrollButtons('latest')">
            <BookCard
                v-for="book in latestBooks"
                :key="book.id"
                :book="book"
                class="scroll-item"
            />
          </div>
          <button
              class="scroll-button scroll-button-right"
              :class="{ 'scroll-button-disabled': !canScrollRight.latest }"
              :disabled="!canScrollRight.latest"
              @click="scrollRight('latest')"
              aria-label="slide right"
              data-test-id="slideRight"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scroll-icon">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Latest Collections 部分 -->
      <div class="section-block">
        <div class="section-header">
          <div class="section-header-text">
            <h3 class="section-title">Latest collections</h3>
            <p class="section-subtitle" data-test-id="book-row-subtitle">Collections recently created on Blinkist</p>
          </div>
        </div>
        <div class="scroll-wrapper">
          <button
              class="scroll-button scroll-button-left"
              :class="{ 'scroll-button-disabled': !canScrollLeft.collections }"
              :disabled="!canScrollLeft.collections"
              @click="scrollLeft('collections')"
              aria-label="slide left"
              data-test-id="slideLeft"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scroll-icon">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="currentColor"></path>
            </svg>
          </button>
          <div class="books-scroll" ref="collectionsScroll" @scroll="updateScrollButtons('collections')">
            <CollectionCard
                v-for="collection in latestCollections"
                :key="collection.id"
                :collection="collection"
                class="scroll-item"
            />
          </div>
          <button
              class="scroll-button scroll-button-right"
              :class="{ 'scroll-button-disabled': !canScrollRight.collections }"
              :disabled="!canScrollRight.collections"
              @click="scrollRight('collections')"
              aria-label="slide right"
              data-test-id="slideRight"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scroll-icon">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BookCard from '~/components/app/BookCard.vue'
import CollectionCard from '~/components/app/CollectionCard.vue'

export default {
  name: 'ExplorePage',
  layout: 'app',
  components: {
    BookCard,
    CollectionCard
  },
  data() {
    return {
      trendingBooks: [],
      latestBooks: [],
      latestCollections: [],
      categories: [],
      canScrollLeft: {
        trending: false,
        latest: false,
        collections: false
      },
      canScrollRight: {
        trending: false,
        latest: false,
        collections: false
      }
    }
  },
  async mounted() {
    await this.fetchExploreData()
    this.$nextTick(() => {
      this.updateAllScrollButtons()
      window.addEventListener('resize', this.updateAllScrollButtons)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateAllScrollButtons)
  },
  methods: {
    async fetchExploreData() {
      // TODO: 替换为实际的 API 调用
      // const response = await this.$axios.get('/api/explore')

      // 示例数据 - 请替换为实际 API 数据
      this.trendingBooks = [
        {
          id: '1',
          title: 'The 4-Hour Body',
          author: 'Tim Ferriss',
          subtitle: 'An uncommon guide to rapid fat-loss, incredible sex and becoming superhuman',
          cover: 'https://images.blinkist.io/images/books/5adcac42b238e10007596e3a/1_1/470.jpg',
          duration: '19 min',
          rating: '3.3',
          url: '/en/app/books/the-4-hour-body-en'
        },
        {
          id: '2',
          title: '12 Rules For Life',
          author: 'Jordan B. Peterson',
          subtitle: 'An Antidote to Chaos',
          cover: 'https://images.blinkist.io/images/books/5acbf46ab238e100074fca22/1_1/470.jpg',
          duration: '33 min',
          rating: '4.2',
          url: '/en/app/books/12-rules-for-life-en'
        }
        // ... 更多书籍
      ]

      this.latestBooks = [
        {
          id: '1',
          title: 'Read Your Mind',
          author: 'Oz Pearlman',
          subtitle: 'Proven Habits for Success from the World\'s Greatest Mentalist',
          cover: 'https://images.blinkist.io/images/books/692d990c195d96000edd66ab/1_1/470.jpg',
          duration: '19 min',
          url: '/en/app/books/read-your-mind-en'
        }
        // ... 更多书籍
      ]

      this.latestCollections = [
        {
          id: '1',
          title: 'AI Must-Reads in 2026',
          description: 'Explore insights at the cutting edge of technology',
          image: 'https://images.blinkist.io/images/curated_lists/4704/1_1/470.jpg',
          itemsCount: 10,
          url: '/en/app/collections/ai-must-reads-in-2026'
        }
        // ... 更多收藏集
      ]

      // 分类数据 - 完整的28个分类列表
      this.categories = [
        {
          id: '1',
          name: 'Entrepreneurship',
          url: '/en/content/categories/entrepreneurship-and-small-business-en',
          icon: '/img/app/category/Entrepreneurship.svg'
        },
        {
          id: '2',
          name: 'Politics',
          url: '/en/content/categories/politics-and-society-en',
          icon: '/img/app/category/Politics.svg'
        },
        {
          id: '3',
          name: 'Marketing & Sales',
          url: '/en/content/categories/marketing-and-sales-en',
          icon: '/img/app/category/Marketing&Sales.svg'
        },
        {
          id: '4',
          name: 'Science',
          url: '/en/content/categories/science-en',
          icon: '/img/app/category/Science.svg'
        },
        {
          id: '5',
          name: 'Health & Nutrition',
          url: '/en/content/categories/health-and-fitness-en',
          icon: '/img/app/category/Health&Nutrition.svg'
        },
        {
          id: '6',
          name: 'Personal Development',
          url: '/en/content/categories/personal-growth-and-self-improvement-en',
          icon: '/img/app/category/PersonalDevelopment.svg'
        },
        {
          id: '7',
          name: 'Economics',
          url: '/en/content/categories/economics-en',
          icon: '/img/app/category/Economics.svg'
        },
        {
          id: '8',
          name: 'History',
          url: '/en/content/categories/biography-and-history-en',
          icon: '/img/app/category/History.svg'
        },
        {
          id: '9',
          name: 'Communication Skills',
          url: '/en/content/categories/communication-and-social-skills-en',
          icon: '/img/app/category/CommunicationSkills.svg'
        },
        {
          id: '10',
          name: 'Corporate Culture',
          url: '/en/content/categories/corporate-culture-en',
          icon: '/img/app/category/CorporateCulture.svg'
        },
        {
          id: '11',
          name: 'Management & Leadership',
          url: '/en/content/categories/management-and-leadership-en',
          icon: '/img/app/category/Management&Leadership.svg'
        },
        {
          id: '12',
          name: 'Motivation & Inspiration',
          url: '/en/content/categories/motivation-and-inspiration-en',
          icon: '/img/app/category/Motivation&Inspiration.svg'
        },
        {
          id: '13',
          name: 'Money & Investments',
          url: '/en/content/categories/money-and-investments-en',
          icon: '/img/app/category/Money&Investments.svg'
        },
        {
          id: '14',
          name: 'Psychology',
          url: '/en/content/categories/psychology-en',
          icon: '/img/app/category/Psychology.svg'
        },
        {
          id: '15',
          name: 'Productivity',
          url: '/en/content/categories/productivity-and-time-management-en',
          icon: '/img/app/category/Productivity.svg'
        },
        {
          id: '16',
          name: 'Sex & Relationships',
          url: '/en/content/categories/relationships-and-parenting-en',
          icon: '/img/app/category/Sex&Relationships.svg'
        },
        {
          id: '17',
          name: 'Technology & the Future',
          url: '/en/content/categories/technology-and-the-future-en',
          icon: '/img/app/category/Technology&theFuture.svg'
        },
        {
          id: '18',
          name: 'Mindfulness & Happiness',
          url: '/en/content/categories/mindfulness-and-happiness-en',
          icon: '/img/app/category/Mindfulness&Happiness.svg'
        },
        {
          id: '19',
          name: 'Parenting',
          url: '/en/content/categories/parenting-en',
          icon: '/img/app/category/Parenting.svg'
        },
        {
          id: '20',
          name: 'Society & Culture',
          url: '/en/content/categories/society-and-culture-en',
          icon: '/img/app/category/Society&Culture.svg'
        },
        {
          id: '21',
          name: 'Nature & the Environment',
          url: '/en/content/categories/nature-and-environment-en',
          icon: '/img/app/category/Nature&theEnvironment.svg'
        },
        {
          id: '22',
          name: 'Biography & Memoir',
          url: '/en/content/categories/biography-and-memoir-en',
          icon: '/img/app/category/Biography&Memoir.svg'
        },
        {
          id: '23',
          name: 'Career & Success',
          url: '/en/content/categories/career-and-success-en',
          icon: '/img/app/category/Career&Success.svg'
        },
        {
          id: '24',
          name: 'Education',
          url: '/en/content/categories/education-en',
          icon: '/img/app/category/Education.svg'
        },
        {
          id: '25',
          name: 'Religion & Spirituality',
          url: '/en/content/categories/religion-and-spirituality-en',
          icon: '/img/app/category/Religion&Spirituality.svg'
        },
        {
          id: '26',
          name: 'Creativity',
          url: '/en/content/categories/creativity-en',
          icon: '/img/app/category/Creativity.svg'
        },
        {
          id: '27',
          name: 'Philosophy',
          url: '/en/content/categories/philosophy-en',
          icon: '/img/app/category/Philosophy.svg'
        },
        {
          id: '28',
          name: 'Fiction',
          url: '/en/content/categories/fiction-en',
          icon: '/img/app/category/Fiction.svg'
        }
      ]
    },
    scrollLeft(section) {
      const scrollElement = this.$refs[`${section}Scroll`]
      if (scrollElement) {
        scrollElement.scrollBy({ left: -300, behavior: 'smooth' })
      }
    },
    scrollRight(section) {
      const scrollElement = this.$refs[`${section}Scroll`]
      if (scrollElement) {
        scrollElement.scrollBy({ left: 300, behavior: 'smooth' })
      }
    },
    updateScrollButtons(section) {
      const scrollElement = this.$refs[`${section}Scroll`]
      if (scrollElement) {
        this.canScrollLeft[section] = scrollElement.scrollLeft > 0
        this.canScrollRight[section] =
            scrollElement.scrollLeft < scrollElement.scrollWidth - scrollElement.clientWidth - 1
      }
    },
    updateAllScrollButtons() {
      this.updateScrollButtons('trending')
      this.updateScrollButtons('latest')
      this.updateScrollButtons('collections')
    }
  }
}
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}

.explore-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 1.5rem;
}

@media (min-width: 768px) {
  .explore-section {
    padding-top: 4rem;
    max-width: 80rem;
    margin: 0 auto;
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

.section-block {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .section-block {
    margin-bottom: 4rem;
  }
}

.section-header {
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  margin-right: 1rem;
}

.section-header-text {
  flex-grow: 1;
}

.section-title {
  color: #03314b;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 0.5rem;
  font-family: "CeraPro", sans-serif;
}

.section-subtitle {
  font-size: 1rem;
  line-height: 1.5rem;
  color: #3a4649;
  font-family: "CeraPro", sans-serif;
}

/* 横向滚动容器 */
.scroll-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  box-sizing: border-box;
}

.books-scroll {
  flex: 1;
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  box-sizing: border-box;
  scroll-snap-type: x mandatory;
  padding-bottom: 2rem;
  margin-bottom: -2rem;
}

@media (min-width: 768px) {
  .books-scroll {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
}

.books-scroll::-webkit-scrollbar {
  display: none;
}

.scroll-item {
  flex: 0 0 11rem;
  width: 11rem;
  box-sizing: border-box;
  scroll-snap-align: start;
}

@media (min-width: 768px) {
  .scroll-item {
    flex: 0 0 calc((100% - 4rem) / 5);
    width: calc((100% - 4rem) / 5);
  }
}

/* 滚动按钮 */
.scroll-button {
  display: none;
  flex-shrink: 0;
  background-color: transparent;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: rgba(186, 200, 206, 1);
  transition: all 0.2s ease;
  padding: 0;
  margin: 0;
}

@media (min-width: 768px) {
  .scroll-button {
    display: flex;
  }
}

.scroll-button:hover:not(:disabled) {
  transform: scale(1.1);
}

.scroll-button:disabled,
.scroll-button-disabled {
  color: rgba(186, 200, 206, 1);
  cursor: default;
}

.scroll-button-right:not(:disabled) {
  color: rgb(3, 101, 242);
}

.scroll-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.scroll-button-left .scroll-icon {
  transform: rotate(90deg);
}

.scroll-button-right .scroll-icon {
  transform: rotate(-90deg);
}

/* Categories 样式 */
.categories-mobile {
  display: block;
}

@media (min-width: 768px) {
  .categories-mobile {
    display: none;
  }
}

.categories-desktop {
  display: none;
}

@media (min-width: 768px) {
  .categories-desktop {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-wrap: wrap;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

.categories-scroll-mobile {
  width: 100%;
  overflow: hidden;
  padding-bottom: 2rem;
  margin-bottom: -2rem;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  min-width: 92rem;
  gap: 1rem;
  flex-wrap: wrap;
  margin-left: 1rem;
  margin-right: 1rem;
}

.category-chip {
  font-family: "CeraPro", sans-serif;
  color: #03314b;
  display: flex;
  width: max-content;
  align-items: center;
  padding: 0.75rem 1rem;
  border: 2px solid white;
  border-radius: 0.25rem;
  background-color: #f1f6f4;
  cursor: pointer;
  text-decoration: none;
  transition: border-color 0.2s;
}

@media (min-width: 1024px) {
  .category-chip:hover {
    border-color: #0365f2;
  }
}

.category-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
  display: block;
  object-fit: contain;
}

.category-chip span {
  display: block;
  white-space: nowrap;
}
</style>