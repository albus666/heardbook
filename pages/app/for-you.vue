<template>
  <div class="for-you-page">
    <section class="for-you-section">
      <!-- 特色推荐区域 (Featured Banner) -->
      <div v-if="featuredBook" class="featured-section">
        <div class="featured-title">Selected just for you</div>
        <NuxtLink :to="`/books/${createSlug(featuredBook.title)}`" class="featured-card">
          <div class="featured-content">
            <div class="featured-text">
              <div class="featured-description">{{ featuredBook.subtitle || featuredBook.featuredText }}</div>
            </div>
            <div class="featured-book-info">
              <img
                  :src="featuredBook.cover"
                  :alt="featuredBook.title"
                  class="featured-book-image"
                  loading="lazy"
              />
              <div class="featured-book-details">
                <h3 class="featured-book-title">{{ featuredBook.title }}</h3>
                <p class="featured-book-author">{{ featuredBook.author }}</p>
                <div class="featured-book-meta">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="play-icon">
                    <g clip-path="url(#play_filled)">
                      <path d="M20 0C8.956 0 0 8.956 0 20s8.956 20 20 20 20-8.956 20-20S31.044 0 20 0zm9.272 20.961l-3.247 1.875-3.247 1.875-6.495 3.75a1.11 1.11 0 01-1.666-.961v-15a1.11 1.11 0 011.666-.961l3.248 1.875 3.247 1.875 6.494 3.75a1.11 1.11 0 010 1.922z" fill="currentColor"></path>
                      <path d="M16.283 28.461l6.495-3.75 3.247-1.875 3.247-1.875a1.11 1.11 0 000-1.922l-6.494-3.75-3.247-1.875-3.248-1.875a1.11 1.11 0 00-1.666.961v15a1.11 1.11 0 001.666.961z" fill="#fff"></path>
                    </g>
                    <defs>
                      <clipPath id="play_filled">
                        <path fill="#fff" d="M0 0h40v40H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                  <span class="featured-duration">{{ featuredBook.duration }}</span>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- 推荐书籍区域 (横向滚动) -->
      <div v-if="recommendedBooks.length > 0" class="books-section">
        <div class="section-header">
          <div class="section-header-text">
            <h2 class="section-title">Recommended for you</h2>
            <p class="section-subtitle">We think you'll like these</p>
          </div>
        </div>
        <div class="scroll-wrapper">
          <button
              class="scroll-button scroll-button-left"
              :class="{ 'scroll-button-disabled': !canScrollLeft.recommended }"
              :disabled="!canScrollLeft.recommended"
              @click="scrollLeft('recommended')"
              aria-label="Scroll left"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scroll-icon">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="currentColor"></path>
            </svg>
          </button>
          <div class="books-scroll" ref="recommendedScroll" @scroll="updateScrollButtons('recommended')">
            <BookCard
                v-for="book in recommendedBooks"
                :key="book.id"
                :book="book"
                class="scroll-item"
            />
          </div>
          <button
              class="scroll-button scroll-button-right"
              :class="{ 'scroll-button-disabled': !canScrollRight.recommended }"
              :disabled="!canScrollRight.recommended"
              @click="scrollRight('recommended')"
              aria-label="Scroll right"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scroll-icon">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- 合集推荐区域 (横向滚动) -->
      <div v-if="collections.length > 0" class="collections-section">
        <div class="section-header">
          <div class="section-header-text">
            <h2 class="section-title">Collections</h2>
            <p class="section-subtitle">Curated book collections</p>
          </div>
        </div>
        <div class="scroll-wrapper">
          <button
              class="scroll-button scroll-button-left"
              :class="{ 'scroll-button-disabled': !canScrollLeft.collections }"
              :disabled="!canScrollLeft.collections"
              @click="scrollLeft('collections')"
              aria-label="Scroll left"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scroll-icon">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="currentColor"></path>
            </svg>
          </button>
          <div class="books-scroll" ref="collectionsScroll" @scroll="updateScrollButtons('collections')">
            <CollectionCard
                v-for="collection in collections"
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
              aria-label="Scroll right"
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="scroll-icon">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- 空状态 -->
      <div v-if="!recommendedBooks.length && !collections.length" class="empty-state">
        <div class="empty-state-content">
          <div class="empty-state-box">
            <div class="empty-state-title">Discover your next read</div>
            <div class="empty-state-description">
              We're preparing personalized recommendations for you. Check back soon!
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BookCard from '~/components/app/BookCard.vue'
import CollectionCard from '~/components/app/CollectionCard.vue'
import { createSlug as createSlugUtil } from '~/utils/slug.js'

export default {
  name: 'ForYouPage',
  layout: 'app',
  components: {
    BookCard,
    CollectionCard
  },
  data() {
    return {
      featuredBook: null,
      recommendedBooks: [],
      collections: [],
      canScrollLeft: {
        recommended: false,
        collections: false
      },
      canScrollRight: {
        recommended: false,
        collections: false
      }
    }
  },
  async mounted() {
    await this.fetchRecommendations()
    this.$nextTick(() => {
      this.updateAllScrollButtons()
      window.addEventListener('resize', this.updateAllScrollButtons)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateAllScrollButtons)
  },
  methods: {
    createSlug(text) {
      return createSlugUtil(text)
    },
    async fetchRecommendations() {
      // 模拟API调用，实际应该从后端获取个性化推荐
      // 这里使用示例数据

      // 特色推荐书籍
      this.featuredBook = {
        id: '1',
        title: 'Good to Great: Why Some Companies Make the Leap...And Others Don\'t',
        author: 'Jim Collins',
        subtitle: 'Learn how disciplined leadership, tough decisions, and the right people create lasting success.',
        cover: 'https://heardapp.soundems.com/o_1iau358111opr1o1a1vqo3ah1nhca.jpg',
        duration: '21 min',
        rating: '4.5'
      }

      this.recommendedBooks = [
        {
          id: '1',
          title: 'Good to Great: Why Some Companies Make the Leap...And Others Don\'t',
          author: 'Jim Collins',
          subtitle: 'Learn how disciplined leadership, tough decisions, and the right people create lasting success.',
          cover: 'https://heardapp.soundems.com/o_1iau358111opr1o1a1vqo3ah1nhca.jpg',
          duration: '21 min',
          rating: '4.5'
        },
        {
          id: '2',
          title: 'Elon Musk: The Official Biography',
          author: 'Walter Isaacson',
          subtitle: 'A deep dive into Elon Musk\'s relentless ambition, risk-taking, and industry-changing innovations.',
          cover: 'https://heardapp.soundems.com/o_1irjcilmm13vg1kt0n0roak1qv2a.png',
          duration: '19 min',
          rating: '4.6'
        },
        {
          id: '3',
          title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
          author: 'Stephen R. Covey',
          subtitle: 'A guide to transforming personal effectiveness through mindset shifts and consistent habits.',
          cover: 'https://heardapp.soundems.com/o_1i91j2bi88b0pqf1va71fq0maqa.jpg',
          duration: '22 min',
          rating: '4.6'
        },
        {
          id: '4',
          title: 'Atomic Habits：An Easy Proven Way to Build Good Habits Break Bad Ones',
          author: 'James Clear',
          subtitle: 'An Easy Proven Way to Build Good Habits Break Bad Ones.',
          cover: 'https://heardapp.soundems.com/o_1irjchurblfg1h4n1nogv02475a.png',
          duration: '18 min',
          rating: '4.8'
        },
        {
          id: '5',
          title: 'Rich Dad Poor Dad : What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!',
          author: 'Robert T. Kiyosaki',
          subtitle: 'What the Rich Teach Their Kids About Money--That the Poor and Middle Class Do Not!·Global Sold 40,000,000 Copies',
          cover: 'https://heardapp.soundems.com/o_1irjck315p2n184m16pr184en8la.png',
          duration: '17 min',
          rating: '4.7'
        },
        {
          id: '6',
          title: 'Between the World and Me',
          author: 'Ta-Nehisi Coates',
          subtitle: 'A powerful exploration of race, identity, and the struggle for freedom in America.',
          cover: 'https://heardapp.soundems.com/o_1hkanghspen3njdc60qp6mina.png',
          duration: '20 min',
          rating: '4.6'
        }
      ]

      this.collections = [
        {
          id: '1',
          title: 'Business & Leadership',
          description: 'Essential reads for leaders and entrepreneurs',
          image: 'https://heardapp.soundems.com/o_1i91j2bi88b0pqf1va71fq0maqa.jpg',
          itemsCount: 12
        },
        {
          id: '2',
          title: 'Personal Development',
          description: 'Books to help you grow and improve',
          image: 'https://heardapp.soundems.com/o_1irjchurblfg1h4n1nogv02475a.png',
          itemsCount: 15
        },
        {
          id: '3',
          title: 'Finance & Investing',
          description: 'Master your money and investments',
          image: 'https://heardapp.soundems.com/o_1irjck315p2n184m16pr184en8la.png',
          itemsCount: 10
        }
      ]
    },
    scrollLeft(section) {
      const scrollMap = {
        recommended: this.$refs.recommendedScroll,
        collections: this.$refs.collectionsScroll
      }
      const container = scrollMap[section]
      if (container) {
        const scrollAmount = container.clientWidth
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      }
    },
    scrollRight(section) {
      const scrollMap = {
        recommended: this.$refs.recommendedScroll,
        collections: this.$refs.collectionsScroll
      }
      const container = scrollMap[section]
      if (container) {
        const scrollAmount = container.clientWidth
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    },
    updateScrollButtons(section) {
      const scrollMap = {
        recommended: this.$refs.recommendedScroll,
        collections: this.$refs.collectionsScroll
      }
      const container = scrollMap[section]
      if (container) {
        this.canScrollLeft[section] = container.scrollLeft > 0
        this.canScrollRight[section] =
            container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      }
    },
    updateAllScrollButtons() {
      this.updateScrollButtons('recommended')
      this.updateScrollButtons('collections')
    }
  }
}
</script>

<style scoped>
.for-you-page {
  min-height: 100vh;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", sans-serif;
}

.for-you-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 1.5rem;
  max-width: 80rem;
  margin: 0 auto;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .for-you-section {
    padding-top: 4rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

/* 特色推荐区域样式 */
.featured-section {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 3rem;
  box-sizing: border-box;
  user-select: text !important;
}

@media (min-width: 768px) {
  .featured-section {
    margin-left: 16px;
    margin-right: 0;
    margin-bottom: 4rem;
  }
}

.featured-title {
  color: #03314b;
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 1.875rem;
  margin-bottom: 1.5rem;
  font-family: "CeraPro", sans-serif;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.featured-card {
  display: block;
  background-color: rgb(255, 243, 215);
  border-radius: 0.5rem;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .featured-card {
    padding: 1rem 2rem;
  }
}

@media (min-width: 1024px) {
  .featured-card {
    width: 66.666667%;
  }
}

.featured-card:hover {
  transform: translateY(-2px);
}

.featured-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .featured-content {
    flex-direction: row;
    gap: 1rem;
  }
}

.featured-text {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .featured-text {
    flex-basis: 40%;
    padding: 1rem;
    border-right: 1px solid #d3d3d3;
  }
}

.featured-description {
  font-family: "Tisa Pro", serif;
  color: #03314b;
  font-size: 1rem;
  line-height: 1.5rem;
}

.featured-book-info {
  flex-basis: 60%;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .featured-book-info {
    padding: 1rem;
  }
}

.featured-book-image {
  width: 8rem;
  object-fit: contain;
  border-radius: 0.5rem;
  flex-shrink: 0;
}

.featured-book-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.featured-book-title {
  color: #03314b;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin: 0 0 0.25rem 0;
  font-family: "CeraPro", sans-serif;
  -webkit-font-smoothing: antialiased;
}

.featured-book-author {
  color: #3a4649;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.375rem;
  margin: 0 0 1rem 0;
  font-family: "CeraPro", sans-serif;
  -webkit-font-smoothing: antialiased;
}

.featured-book-meta {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
}

.play-icon {
  width: 2.5rem;
  height: 2.5rem;
  color: #03314b;
  flex-shrink: 0;
}

.featured-duration {
  color: #03314b;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-family: "CeraPro", sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* 区块样式 */
.books-section,
.collections-section {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 3rem;
  box-sizing: border-box;
  user-select: text !important;
}

@media (min-width: 768px) {
  .books-section,
  .collections-section {
    margin-left: 16px;
    margin-right: 0;
    margin-bottom: 4rem;
  }
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .section-header {
    margin-bottom: 2rem;
  }
}

.section-header-text {
  flex: 1;
}

.section-title {
  color: #03314b;
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 1.875rem;
  margin: 0 0 0.5rem 0;
  font-family: "CeraPro", sans-serif;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

.section-subtitle {
  color: #3a4649;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0;
  font-family: "CeraPro", sans-serif;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

/* 横向滚动容器样式 - 新的flex布局 */
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

/* 桌面端显示5个卡片 */
@media (min-width: 768px) {
  .scroll-item {
    flex: 0 0 calc((100% - 4rem) / 5);
    width: calc((100% - 4rem) / 5);
  }
}

/* 滚动按钮样式 - 参与flex布局 */
.scroll-button {
  display: none;
  flex-shrink: 0;
  background-color: transparent;
  background-image: none;
  border: none;
  width: 1.5rem;
  height: 1.5rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: rgba(186, 200, 206, 1);
  transition: all 0.2s ease;
  -webkit-appearance: button;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  user-select: text !important;
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

/* 空状态样式 */
.empty-state {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .empty-state {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

.empty-state-content {
  width: 100%;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .empty-state-content {
    width: 66.666667%;
  }
}

.empty-state-box {
  border-radius: 1rem;
  background-color: #f1f6f4;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.empty-state-title {
  color: #000000;
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: "CeraPro", sans-serif;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.empty-state-description {
  color: #3a4649;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  font-family: "CeraPro", sans-serif;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
