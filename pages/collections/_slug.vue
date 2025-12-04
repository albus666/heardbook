<template>
  <div class="collection-detail-page">
    <div v-if="collection">
      <!-- Hero Section -->
      <div class="hero-section-wrapper">
        <div class="hero-background">
        <div class="bg-background-yellow h-tilted-background-vertical h-tilted-background-responsive"></div>
        <div class="bg-background-yellow h-12 h-responsive w-full triangle-right"></div>
        </div>
        
        <div class="hero-content">
          <!-- Breadcrumb -->
          <div class="breadcrumb-section">
            <!-- Mobile Breadcrumb -->
            <div class="breadcrumb-mobile breadcrumb-mobile-only">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="breadcrumb-arrow">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="currentColor"></path>
              </svg>
              <NuxtLink :to="categoryUrl" class="breadcrumb-link">{{ collection.category }}</NuxtLink>
            </div>
            
            <!-- Desktop Breadcrumb -->
            <div class="breadcrumb-desktop breadcrumb-desktop-only">
              <div class="breadcrumb-item">
                <NuxtLink :to="categoryUrl" class="breadcrumb-link-blue">{{ collection.category }}</NuxtLink>
              </div>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="breadcrumb-separator">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="currentColor"></path>
              </svg>
              <div class="breadcrumb-item">
                <span class="breadcrumb-current">{{ collection.title }}</span>
              </div>
            </div>
          </div>

          <!-- Hero Main Content -->
          <div class="hero-main-content">
            <!-- Mobile Title (shown only on mobile, above image) -->
            <h1 class="hero-title-mobile-content">{{ collection.title }}</h1>

            <!-- Collection Image -->
            <div class="hero-image-wrapper">
              <LazyImage 
                :src="collection.image" 
                :alt="collection.title" 
                image-class="hero-image"
                width="100%"
                height="100%"
              />
            </div>

            <!-- Desktop Hero Info -->
            <div class="hero-info-desktop">
              <h1 class="hero-title-desktop">{{ collection.title }}</h1>
              
              <div class="hero-description-wrapper">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="description-icon">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.367 0H24v17.633h-2.939v2.939h-2.939V24H0V5.878h3.429v-2.94h2.938V0zm1.47 2.939H21.06v13.224h1.47V1.47H7.837v1.47zM4.898 5.878h13.224v13.224h1.47V4.408H4.898v1.47zM1.469 7.347V22.53h15.184V7.347H1.469z"></path>
                </svg>
                <span class="hero-description">{{ collection.subtitle || collection.description }}</span>
              </div>

              <div class="hero-author-wrapper">
                By
                <svg viewBox="0 0 35 34" xmlns="http://www.w3.org/2000/svg" class="blinkist-logo">
                  <path d="M25.205.006l-7.662 7.793L9.88.006C4.032 2.899 0 8.998 0 16.058 0 25.912 7.854 33.9 17.543 33.9c9.688 0 17.542-7.988 17.542-17.842 0-7.06-4.032-13.159-9.88-16.052" fill="#2cde80"></path>
                  <path d="M22.195 12.53L17.543 7.8l-4.652 4.73c-2.57 2.613-2.57 6.85 0 9.463a6.5 6.5 0 009.304 0c2.569-2.613 2.569-6.85 0-9.463" fill="#002f54"></path>
                </svg>
                <span class="hero-author-name">The Blinkist Curators</span>
              </div>

              <NuxtLink to="/pricing" class="hero-play-button">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="play-icon">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.563 12.577l-3.896 2.25-3.897 2.25a.667.667 0 01-1-.577v-9a.667.667 0 011-.577l3.897 2.25 3.896 2.25a.666.666 0 010 1.154z" fill="currentColor"></path>
                </svg>
                <span>Upgrade to play collection</span>
              </NuxtLink>
            </div>

            <!-- Mobile Hero Info -->
            <div class="hero-info-mobile">
              <div class="hero-description-wrapper">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="description-icon">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.367 0H24v17.633h-2.939v2.939h-2.939V24H0V5.878h3.429v-2.94h2.938V0zm1.47 2.939H21.06v13.224h1.47V1.47H7.837v1.47zM4.898 5.878h13.224v13.224h1.47V4.408H4.898v1.47zM1.469 7.347V22.53h15.184V7.347H1.469z"></path>
                </svg>
                <span class="hero-description">{{ collection.subtitle || collection.description }}</span>
              </div>

              <div class="hero-author-wrapper">
                By
                <svg viewBox="0 0 35 34" xmlns="http://www.w3.org/2000/svg" class="blinkist-logo">
                  <path d="M25.205.006l-7.662 7.793L9.88.006C4.032 2.899 0 8.998 0 16.058 0 25.912 7.854 33.9 17.543 33.9c9.688 0 17.542-7.988 17.542-17.842 0-7.06-4.032-13.159-9.88-16.052" fill="#2cde80"></path>
                  <path d="M22.195 12.53L17.543 7.8l-4.652 4.73c-2.57 2.613-2.57 6.85 0 9.463a6.5 6.5 0 009.304 0c2.569-2.613 2.569-6.85 0-9.463" fill="#002f54"></path>
                </svg>
                <span class="hero-author-name">The Blinkist Curators</span>
              </div>

              <NuxtLink to="/pricing" class="hero-play-button hero-play-button-mobile">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="play-icon">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.563 12.577l-3.896 2.25-3.897 2.25a.667.667 0 01-1-.577v-9a.667.667 0 011-.577l3.897 2.25 3.896 2.25a.666.666 0 010 1.154z" fill="currentColor"></path>
                </svg>
                <span>Upgrade to play collection</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Wrapper -->
      <div class="content-wrapper">
      <!-- About Section -->
      <section class="about-section">
        <h2 class="about-title">What's it about?</h2>
        
        <div class="categories-wrapper">
          <div class="categories-scroll">
            <NuxtLink
              v-for="category in collection.categories"
              :key="category.id"
              :to="category.href"
              class="category-chip"
              :data-test-id="`category-chip-${category.slug}`"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="category-icon">
                <path :d="category.iconPath" fill="currentColor"></path>
              </svg>
              <span>{{ category.name }}</span>
            </NuxtLink>
          </div>
        </div>

        <p class="about-description">{{ collection.aboutDescription || collection.description }}</p>
      </section>

      <!-- Share Section -->
      <section class="share-section">
        <div class="share-content">
          <button type="button" class="share-button">
            <svg viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="share-icon">
              <path d="M8 2.87v12.38h1.5V2.87l2.22 2.22 1.06-1.06L8.75 0 4.72 4.03l1.06 1.06L8 2.87z" fill="currentColor"></path>
              <path d="M11.75 6.5V8H16v14.5H1.5V8h4.25V6.5H0V24h17.5V6.5h-5.75z" fill="currentColor"></path>
            </svg>
            <span>Share with friends</span>
          </button>
        </div>
      </section>

      <!-- Collection Items Section -->
      <section class="collection-items-section">
        <div class="section-header">
          <h2 class="section-title">{{ collection.title }}</h2>
          <div class="section-subtitle">{{ collection.subtitle || collection.description }}</div>
        </div>

        <div class="books-scroll-wrapper">
          <div class="books-scroll-container">
            <div 
              v-for="(book, index) in collectionBooks" 
              :key="index"
              class="book-item"
            >
              <NuxtLink :to="`/books/${createSlug(book.title)}`" class="book-link">
                <img 
                  :src="book.cover" 
                  :alt="book.title" 
                  class="book-cover"
                  loading="lazy"
                />
                <div class="book-info">
                  <div class="book-title" :data-test-id="'title'" :title="book.title">{{ book.title }}</div>
                  <div class="book-author" :data-test-id="'subtitle'" :title="book.author">{{ book.author }}</div>
                  <div v-if="book.subtitle" class="book-subtitle" :data-test-id="'description'" :title="book.subtitle">{{ book.subtitle }}</div>
                  <div class="book-meta">
                    <div v-if="book.duration" class="meta-item">
                      <div class="duration-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="meta-icon">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0h14.5v10.5H13v-9H1.5v16h7V19H0V0z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 6h-8V4.5h8V6zM11.25 9h-8V7.5h8V9zM7.25 12h-4v-1.5h4V12zM19 22.5h1.51c1.2 0 1.99-.884 1.99-1.75S21.71 19 20.51 19H19v3.5zm1.51 1.5c1.925 0 3.49-1.457 3.49-3.25s-1.565-3.25-3.49-3.25H17.5V24h3.01zM9 19H7.49c-1.2 0-1.99.884-1.99 1.75s.79 1.75 1.99 1.75H9V19zm-1.51-1.5C5.566 17.5 4 18.957 4 20.75S5.565 24 7.49 24h3.01v-6.5H7.49z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 15.466c0-3.382 2.903-5.716 6.25-5.716s6.25 2.334 6.25 5.716V18h-1.5v-2.534c0-2.384-2.051-4.216-4.75-4.216s-4.75 1.832-4.75 4.216V18h-1.5v-2.534z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <span>{{ book.duration }}</span>
                    </div>
                    <div v-if="book.rating" class="meta-item">
                      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="meta-icon">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.31 9.262l-6.198.947 4.49 4.602-1.04 6.382L12 18.186l5.439 3.007-1.041-6.382 4.49-4.602-6.198-.947L12 3.53 9.31 9.262zM8.292 7.9L0 9.167l6 6.15L4.584 24 12 19.9l7.417 4.1L18 15.317l6-6.15L15.708 7.9 12 0 8.292 7.9z"></path>
                      </svg>
                      <span>{{ book.rating }}</span>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- Recommended Collections Section -->
      <section class="recommended-collections-section">
        <div class="section-header">
          <h2 class="section-title">More collections</h2>
          <div class="section-subtitle">Other collections you might like</div>
        </div>

        <div class="collections-scroll-wrapper">
          <div class="collections-scroll-container">
            <CollectionCard
              v-for="recCollection in recommendedCollections"
              :key="recCollection.id"
              :collection="recCollection"
              class="collection-item"
            />
          </div>
        </div>
      </section>
      </div>
    </div>
    
    <div v-else class="loading-state">
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import LazyImage from '~/components/app/LazyImage.vue'
import CollectionCard from '~/components/app/CollectionCard.vue'
import { createSlug as createSlugUtil } from '~/utils/slug.js'

export default {
  layout: 'app',
  name: 'CollectionDetail',
  components: {
    LazyImage,
    CollectionCard
  },
  data() {
    return {
      collection: null,
      collectionBooks: [],
      recommendedCollections: []
    }
  },
  computed: {
    categoryUrl() {
      if (this.collection && this.collection.categorySlug) {
        return `/app/categories/${this.collection.categorySlug}`
      }
      return '/app/for-you'
    }
  },
  async mounted() {
    const slug = this.$route.params.slug
    await this.fetchCollectionDetail(slug)
    await this.fetchRecommendedCollections()
  },
  watch: {
    // 监听路由参数变化，当用户点击不同的集合时重新加载数据
    '$route'(to, from) {
      if (to.params.slug !== from.params.slug) {
        this.fetchCollectionDetail(to.params.slug)
      }
    }
  },
  methods: {
    createSlug(text) {
      return createSlugUtil(text)
    },
    async fetchCollectionDetail(slug) {
      // 模拟API调用 - 包含多个集合数据
      const allCollections = [
        {
          id: '1',
          title: 'Bestsellers Everyone\'s Reading',
          subtitle: 'Stay current with chart-topping ideas and insights',
          description: 'Get up to speed on the big conversations shaping culture, mental health, economics, tech, and everyday life. This collection distills headline-making ideas into practical takeaways you can apply now.',
          aboutDescription: 'Get up to speed on the big conversations shaping culture, mental health, economics, tech, and everyday life. This collection distills headline-making ideas into practical takeaways you can apply now.',
          category: 'Personal Development',
          categorySlug: 'personal-growth-and-self-improvement-en',
          image: 'https://images.blinkist.io/images/curated_lists/4689/1_1/640.jpg',
          itemsCount: 7,
          categories: [
            {
              id: 1,
              name: 'Personal Development',
              slug: 'personal-growth-and-self-improvement-en',
              href: '/app/categories/personal-growth-and-self-improvement-en',
              iconPath: 'M24 24H0v-7.3h5.72l-.1-5.57h5.64V5.57h5.62V0H24zM1.5 22.51h21V1.5h-4.12v5.57h-5.62v5.57H7.15l.09 5.57H1.5z'
            },
            {
              id: 2,
              name: 'Mindfulness & Happiness',
              slug: 'mindfulness-and-happiness-en',
              href: '/app/categories/mindfulness-and-happiness-en',
              iconPath: 'M19 17.87a7.44 7.44 0 00.51-3.79l-.06-.61-.6-.07A8.28 8.28 0 0015 14a11 11 0 00-2.48-5.34.79.79 0 00-.52-.28.73.73 0 00-.55.25 9.12 9.12 0 00-2.54 5.45 8.47 8.47 0 00-4.08-.76h-.64v.64a7.63 7.63 0 00.69 4A10.6 10.6 0 00.6 20.35l-.54.54.56.54A8.31 8.31 0 006.41 24 9.28 9.28 0 0012 21.87 8 8 0 0017.28 24a9.61 9.61 0 006.13-2.59l.53-.54-.54-.52a8.64 8.64 0 00-4.4-2.48zm-1.66-.11a8.4 8.4 0 00-2.85.68 8.249 8.249 0 00.65-2.83 5.93 5.93 0 012.86-.74 4.87 4.87 0 01-.69 2.89zM12 10.32a7.62 7.62 0 010 9.35 7.6 7.6 0 010-9.35zm-6.36 4.49a6.12 6.12 0 013.32 1 9.58 9.58 0 00.67 2.48 7.22 7.22 0 00-3.19-.58 5.14 5.14 0 01-.8-2.9zm-3.36 6.08a6.57 6.57 0 018.59 0 6.58 6.58 0 01-8.59 0zm10.87 0a6.58 6.58 0 018.6 0 6.59 6.59 0 01-8.6 0zM12.75 0h-1.5v5.62h1.5zM1.058 4.301l-1.06 1.061 3.975 3.973 1.06-1.061zM22.945 4.308L18.969 8.28l1.06 1.06 3.976-3.971z'
            },
            {
              id: 3,
              name: 'Productivity',
              slug: 'productivity-and-time-management-en',
              href: '/app/categories/productivity-and-time-management-en',
              iconPath: 'M22.15 1.5h2V0H.08v1.5h2c.39 5.25 4.81 8.7 6.75 10.2a.45.45 0 010 .72c-1.94 1.5-6.36 5-6.75 10.2H0v1.5h24.12v-1.5h-2c-.34-4.61-3.77-7.85-6.39-9.91a.82.82 0 010-1.3c2.65-2.06 6.08-5.3 6.42-9.91zM9.59 10.36l-.41-.3C8.6 9.59 8 9.08 7.45 8.54h9.34c-.29.28-.58.54-.87.8a13.44 13.44 0 00-3.77 3.35 11.302 11.302 0 00-2.56-2.33zM20.65 1.5A10.19 10.19 0 0118.19 7H6.05a10.08 10.08 0 01-2.47-5.5zM10.06 22.62a7.219 7.219 0 002.06-2.5 7.31 7.31 0 002.05 2.5zm10.59 0h-2.11a5.68 5.68 0 01-5.67-5.68h-1.5a5.69 5.69 0 01-5.68 5.68H3.58c.35-4 3.46-6.9 6.19-9a1.92 1.92 0 00.56-.71 2.68 2.68 0 011 1.89h1.5a3.58 3.58 0 011.19-2c.13.452.4.851.77 1.14 2.41 1.81 5.51 4.7 5.86 8.68z'
            }
          ],
          books: [
            {
              title: 'The Let Them Theory',
              author: 'Mel Robbins',
              subtitle: 'A Life-Changing Tool That People Can\'t Stop Talking About',
              cover: 'https://images.blinkist.io/images/books/688bca57560faf000dc73bac/1_1/470.jpg',
              duration: '25 min',
              rating: '4.5'
            },
            {
              title: 'The Anxious Generation',
              author: 'Jonathan Haidt',
              subtitle: 'How the Great Rewiring of Childhood Is Causing an Epidemic of Mental Illness',
              cover: 'https://images.blinkist.io/images/books/6639ef3629619e000731f514/1_1/470.jpg',
              duration: '20 min',
              rating: '4.3'
            },
            {
              title: 'The Compass Within',
              author: 'Robert Glazer',
              subtitle: 'A Little Story about the Values That Guide Us',
              cover: 'https://images.blinkist.io/images/books/68ece08ae28de200073b8c2d/1_1/470.jpg',
              duration: '20 min',
              rating: '4.3'
            },
            {
              title: 'How Countries Go Broke',
              author: 'Ray Dalio',
              subtitle: 'The Big Cycle',
              cover: 'https://images.blinkist.io/images/books/68950f4a560faf000dc75058/1_1/470.jpg',
              duration: '31 min',
              rating: '4.4'
            },
            {
              title: 'The Sirens\' Call',
              author: 'Chris Hayes',
              subtitle: 'How Attention Became the World\'s Most Endangered Resource',
              cover: 'https://images.blinkist.io/images/books/67d816c52eef46016831c60c/1_1/470.jpg',
              duration: '26 min',
              rating: '4.2'
            },
            {
              title: 'The Body Keeps the Score',
              author: 'Bessel van der Kolk',
              subtitle: 'Mind, Brain and the Body in the Transformation of Trauma',
              cover: 'https://images.blinkist.io/images/books/5855971f1219060004019dec/1_1/470.jpg',
              duration: '18 min',
              rating: '4.5'
            },
            {
              title: 'Empire of AI',
              author: 'Karen Hao',
              subtitle: 'Dreams and Nightmares in Sam Altman\'s OpenAI',
              cover: 'https://images.blinkist.io/images/books/6883c463560faf000dc730c8/1_1/470.jpg',
              duration: '22 min',
              rating: '4.1'
            }
          ]
        },
        {
          id: '2',
          title: 'Hack Your Mind for Unlimited Potential',
          subtitle: 'Master your mind to transform your life',
          description: 'Discover powerful techniques to unlock your mental potential and achieve extraordinary results. This collection brings together the best insights from neuroscience, psychology, and personal development.',
          aboutDescription: 'Discover powerful techniques to unlock your mental potential and achieve extraordinary results. This collection brings together the best insights from neuroscience, psychology, and personal development.',
          category: 'Personal Development',
          categorySlug: 'personal-growth-and-self-improvement-en',
          image: 'https://images.blinkist.io/images/curated_lists/2634/1_1/470.jpg',
          itemsCount: 10,
          categories: [
            {
              id: 1,
              name: 'Personal Development',
              slug: 'personal-growth-and-self-improvement-en',
              href: '/app/categories/personal-growth-and-self-improvement-en',
              iconPath: 'M24 24H0v-7.3h5.72l-.1-5.57h5.64V5.57h5.62V0H24zM1.5 22.51h21V1.5h-4.12v5.57h-5.62v5.57H7.15l.09 5.57H1.5z'
            },
            {
              id: 2,
              name: 'Psychology',
              slug: 'psychology-en',
              href: '/app/categories/psychology-en',
              iconPath: 'M24 14.17L21.46 10v-.36A8.93 8.93 0 0020.14 5l-.22-.37h-1.28a3.07 3.07 0 00-1.06-1.09 1.5 1.5 0 01-.64-.73 3.33 3.33 0 00-3.17-2 2.15 2.15 0 01-1.13-.28 3.73 3.73 0 00-3.84 0 2.18 2.18 0 01-1.13.31 3.33 3.33 0 00-3.17 2 1.5 1.5 0 01-.64.73 3 3 0 00-1.14 1.24H1.41l-.21.39A9 9 0 000 9.64a9.26 9.26 0 003.35 7V24h1.5v-8.06l-.28-.22A7.799 7.799 0 011.5 9.64a7.26 7.26 0 01.8-3.32l16.77-.17A7.45 7.45 0 0120 9.64v.76l2.43 4h-2.71v2h-2.64v1.5h2.64v1.2a1.21 1.21 0 01-.32.76 2.37 2.37 0 01-1.75.54H12.4V24h1.5v-2.06h3.75a3.75 3.75 0 002.83-1 2.64 2.64 0 00.74-1.84v-3.2h1.5a1.229 1.229 0 001-.46 1.58 1.58 0 00.28-1.27zM5.9 3.38a1.86 1.86 0 011.77-1 3.59 3.59 0 001.91-.53 2.25 2.25 0 012.27 0 3.65 3.65 0 001.92.53 1.86 1.86 0 011.77 1 3 3 0 001 1.3l-11.82.11A2.93 2.93 0 005.9 3.38z'
            }
          ],
          books: [
            {
              title: 'Mindset',
              author: 'Carol Dweck',
              subtitle: 'The New Psychology of Success',
              cover: 'https://images.blinkist.io/images/books/5282429c3334640018470000/1_1/470.jpg',
              duration: '15 min',
              rating: '4.4'
            },
            {
              title: 'Atomic Habits',
              author: 'James Clear',
              subtitle: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones',
              cover: 'https://heardapp.soundems.com/o_1irjchurblfg1h4n1nogv02475a.png',
              duration: '18 min',
              rating: '4.8'
            },
            {
              title: 'The 7 Habits of Highly Effective People',
              author: 'Stephen R. Covey',
              subtitle: 'Powerful Lessons in Personal Change',
              cover: 'https://heardapp.soundems.com/o_1i91j2bi88b0pqf1va71fq0maqa.jpg',
              duration: '22 min',
              rating: '4.6'
            },
            {
              title: 'Good to Great',
              author: 'Jim Collins',
              subtitle: 'Why Some Companies Make the Leap...And Others Don\'t',
              cover: 'https://heardapp.soundems.com/o_1iau358111opr1o1a1vqo3ah1nhca.jpg',
              duration: '21 min',
              rating: '4.5'
            },
            {
              title: 'Brain',
              author: 'Elizabeth R. Ricker',
              subtitle: 'An Owner\'s Guide',
              cover: 'https://images.blinkist.io/images/books/6841c31b56f5e000086e24f9/1_1/470.jpg',
              duration: '20 min',
              rating: '4.3'
            },
            {
              title: 'We Can Do Hard Things',
              author: 'Glennon Doyle',
              subtitle: 'Answers to Life\'s 20 Questions',
              cover: 'https://images.blinkist.io/images/books/6844981b56f5e000086e2531/1_1/470.jpg',
              duration: '21 min',
              rating: '4.1'
            },
            {
              title: 'Either/Or',
              author: 'Soren Kierkegaard',
              subtitle: 'A Fragment of Life',
              cover: 'https://images.blinkist.io/images/books/65dcf8ea5adcee00073f0114/1_1/470.jpg',
              duration: '18 min',
              rating: '4.5'
            },
            {
              title: 'The Magic of Mindful Self-Awareness',
              author: 'Matt Tenney',
              subtitle: 'How to Stop Overthinking, Clear Your Mind, and Be Happy (Almost) All the Time',
              cover: 'https://images.blinkist.io/images/books/687e8ebbbbd5ae0007bbd7be/1_1/470.jpg',
              duration: '22 min',
              rating: '4.4'
            },
            {
              title: 'Confident by Choice',
              author: 'Juan Bendaña',
              subtitle: 'The Three Small Decisions That Build Everyday Courage',
              cover: 'https://images.blinkist.io/images/books/68cd069d4786f80007bc0cb7/1_1/470.jpg',
              duration: '18 min',
              rating: '4.4'
            },
            {
              title: 'Rich Dad Poor Dad',
              author: 'Robert T. Kiyosaki',
              subtitle: 'What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!',
              cover: 'https://heardapp.soundems.com/o_1irjck315p2n184m16pr184en8la.png',
              duration: '17 min',
              rating: '4.7'
            }
          ]
        },
        {
          id: '3',
          title: 'Best Books on ADHD',
          subtitle: 'Understanding ADHD and how to flourish with the condition',
          description: 'A curated collection of books that help you understand ADHD, its challenges, and strategies to thrive. Learn from experts and individuals who have navigated this journey successfully.',
          aboutDescription: 'A curated collection of books that help you understand ADHD, its challenges, and strategies to thrive. Learn from experts and individuals who have navigated this journey successfully.',
          category: 'Psychology',
          categorySlug: 'psychology-en',
          image: 'https://images.blinkist.io/images/curated_lists/2313/1_1/470.jpg',
          itemsCount: 6,
          categories: [
            {
              id: 1,
              name: 'Psychology',
              slug: 'psychology-en',
              href: '/app/categories/psychology-en',
              iconPath: 'M24 14.17L21.46 10v-.36A8.93 8.93 0 0020.14 5l-.22-.37h-1.28a3.07 3.07 0 00-1.06-1.09 1.5 1.5 0 01-.64-.73 3.33 3.33 0 00-3.17-2 2.15 2.15 0 01-1.13-.28 3.73 3.73 0 00-3.84 0 2.18 2.18 0 01-1.13.31 3.33 3.33 0 00-3.17 2 1.5 1.5 0 01-.64.73 3 3 0 00-1.14 1.24H1.41l-.21.39A9 9 0 000 9.64a9.26 9.26 0 003.35 7V24h1.5v-8.06l-.28-.22A7.799 7.799 0 011.5 9.64a7.26 7.26 0 01.8-3.32l16.77-.17A7.45 7.45 0 0120 9.64v.76l2.43 4h-2.71v2h-2.64v1.5h2.64v1.2a1.21 1.21 0 01-.32.76 2.37 2.37 0 01-1.75.54H12.4V24h1.5v-2.06h3.75a3.75 3.75 0 002.83-1 2.64 2.64 0 00.74-1.84v-3.2h1.5a1.229 1.229 0 001-.46 1.58 1.58 0 00.28-1.27zM5.9 3.38a1.86 1.86 0 011.77-1 3.59 3.59 0 001.91-.53 2.25 2.25 0 012.27 0 3.65 3.65 0 001.92.53 1.86 1.86 0 011.77 1 3 3 0 001 1.3l-11.82.11A2.93 2.93 0 005.9 3.38z'
            },
            {
              id: 2,
              name: 'Personal Development',
              slug: 'personal-growth-and-self-improvement-en',
              href: '/app/categories/personal-growth-and-self-improvement-en',
              iconPath: 'M24 24H0v-7.3h5.72l-.1-5.57h5.64V5.57h5.62V0H24zM1.5 22.51h21V1.5h-4.12v5.57h-5.62v5.57H7.15l.09 5.57H1.5z'
            }
          ],
          books: [
            {
              title: 'Driven to Distraction',
              author: 'Edward M. Hallowell',
              subtitle: 'Recognizing and Coping with Attention Deficit Disorder',
              cover: 'https://images.blinkist.io/images/books/5282429c3334640018470000/1_1/470.jpg',
              duration: '16 min',
              rating: '4.5'
            },
            {
              title: 'The ADHD Advantage',
              author: 'Dale Archer',
              subtitle: 'What You Thought Was a Diagnosis May Be Your Greatest Strength',
              cover: 'https://images.blinkist.io/images/books/6841c31b56f5e000086e24f9/1_1/470.jpg',
              duration: '19 min',
              rating: '4.3'
            },
            {
              title: 'Scattered Minds',
              author: 'Gabor Maté',
              subtitle: 'The Origins and Healing of Attention Deficit Disorder',
              cover: 'https://images.blinkist.io/images/books/688bca57560faf000dc73bac/1_1/470.jpg',
              duration: '20 min',
              rating: '4.4'
            },
            {
              title: 'Taking Charge of Adult ADHD',
              author: 'Russell A. Barkley',
              subtitle: 'Proven Strategies to Succeed at Work, at Home, and in Relationships',
              cover: 'https://images.blinkist.io/images/books/6639ef3629619e000731f514/1_1/470.jpg',
              duration: '18 min',
              rating: '4.6'
            },
            {
              title: 'ADHD 2.0',
              author: 'Edward M. Hallowell',
              subtitle: 'New Science and Essential Strategies for Thriving with Distraction',
              cover: 'https://images.blinkist.io/images/books/68ece08ae28de200073b8c2d/1_1/470.jpg',
              duration: '17 min',
              rating: '4.5'
            },
            {
              title: 'The Disorganized Mind',
              author: 'Nancy A. Ratey',
              subtitle: 'Coaching Your ADHD Brain to Take Control of Your Time, Tasks, and Talents',
              cover: 'https://images.blinkist.io/images/books/68950f4a560faf000dc75058/1_1/470.jpg',
              duration: '21 min',
              rating: '4.2'
            }
          ]
        },
        {
          id: '4',
          title: 'Start Healing from Childhood Trauma',
          subtitle: 'How does childhood trauma affect us and how can we heal?',
          description: 'Explore the profound impact of childhood trauma and discover pathways to healing. This collection offers insights from leading experts in trauma recovery and personal growth.',
          aboutDescription: 'Explore the profound impact of childhood trauma and discover pathways to healing. This collection offers insights from leading experts in trauma recovery and personal growth.',
          category: 'Psychology',
          categorySlug: 'psychology-en',
          image: 'https://images.blinkist.io/images/curated_lists/2195/1_1/470.jpg',
          itemsCount: 10,
          categories: [
            {
              id: 1,
              name: 'Psychology',
              slug: 'psychology-en',
              href: '/app/categories/psychology-en',
              iconPath: 'M24 14.17L21.46 10v-.36A8.93 8.93 0 0020.14 5l-.22-.37h-1.28a3.07 3.07 0 00-1.06-1.09 1.5 1.5 0 01-.64-.73 3.33 3.33 0 00-3.17-2 2.15 2.15 0 01-1.13-.28 3.73 3.73 0 00-3.84 0 2.18 2.18 0 01-1.13.31 3.33 3.33 0 00-3.17 2 1.5 1.5 0 01-.64.73 3 3 0 00-1.14 1.24H1.41l-.21.39A9 9 0 000 9.64a9.26 9.26 0 003.35 7V24h1.5v-8.06l-.28-.22A7.799 7.799 0 011.5 9.64a7.26 7.26 0 01.8-3.32l16.77-.17A7.45 7.45 0 0120 9.64v.76l2.43 4h-2.71v2h-2.64v1.5h2.64v1.2a1.21 1.21 0 01-.32.76 2.37 2.37 0 01-1.75.54H12.4V24h1.5v-2.06h3.75a3.75 3.75 0 002.83-1 2.64 2.64 0 00.74-1.84v-3.2h1.5a1.229 1.229 0 001-.46 1.58 1.58 0 00.28-1.27zM5.9 3.38a1.86 1.86 0 011.77-1 3.59 3.59 0 001.91-.53 2.25 2.25 0 012.27 0 3.65 3.65 0 001.92.53 1.86 1.86 0 011.77 1 3 3 0 001 1.3l-11.82.11A2.93 2.93 0 005.9 3.38z'
            },
            {
              id: 2,
              name: 'Mindfulness & Happiness',
              slug: 'mindfulness-and-happiness-en',
              href: '/app/categories/mindfulness-and-happiness-en',
              iconPath: 'M19 17.87a7.44 7.44 0 00.51-3.79l-.06-.61-.6-.07A8.28 8.28 0 0015 14a11 11 0 00-2.48-5.34.79.79 0 00-.52-.28.73.73 0 00-.55.25 9.12 9.12 0 00-2.54 5.45 8.47 8.47 0 00-4.08-.76h-.64v.64a7.63 7.63 0 00.69 4A10.6 10.6 0 00.6 20.35l-.54.54.56.54A8.31 8.31 0 006.41 24 9.28 9.28 0 0012 21.87 8 8 0 0017.28 24a9.61 9.61 0 006.13-2.59l.53-.54-.54-.52a8.64 8.64 0 00-4.4-2.48zm-1.66-.11a8.4 8.4 0 00-2.85.68 8.249 8.249 0 00.65-2.83 5.93 5.93 0 012.86-.74 4.87 4.87 0 01-.69 2.89zM12 10.32a7.62 7.62 0 010 9.35 7.6 7.6 0 010-9.35zm-6.36 4.49a6.12 6.12 0 013.32 1 9.58 9.58 0 00.67 2.48 7.22 7.22 0 00-3.19-.58 5.14 5.14 0 01-.8-2.9zm-3.36 6.08a6.57 6.57 0 018.59 0 6.58 6.58 0 01-8.59 0zm10.87 0a6.58 6.58 0 018.6 0 6.59 6.59 0 01-8.6 0zM12.75 0h-1.5v5.62h1.5zM1.058 4.301l-1.06 1.061 3.975 3.973 1.06-1.061zM22.945 4.308L18.969 8.28l1.06 1.06 3.976-3.971z'
            }
          ],
          books: [
            {
              title: 'The Body Keeps the Score',
              author: 'Bessel van der Kolk',
              subtitle: 'Mind, Brain and the Body in the Transformation of Trauma',
              cover: 'https://images.blinkist.io/images/books/5855971f1219060004019dec/1_1/470.jpg',
              duration: '18 min',
              rating: '4.5'
            },
            {
              title: 'Complex PTSD',
              author: 'Pete Walker',
              subtitle: 'From Surviving to Thriving',
              cover: 'https://images.blinkist.io/images/books/688bca57560faf000dc73bac/1_1/470.jpg',
              duration: '19 min',
              rating: '4.6'
            },
            {
              title: 'The Deepest Well',
              author: 'Nadine Burke Harris',
              subtitle: 'Healing the Long-Term Effects of Childhood Adversity',
              cover: 'https://images.blinkist.io/images/books/6639ef3629619e000731f514/1_1/470.jpg',
              duration: '17 min',
              rating: '4.4'
            },
            {
              title: 'It Didn\'t Start with You',
              author: 'Mark Wolynn',
              subtitle: 'How Inherited Family Trauma Shapes Who We Are and How to End the Cycle',
              cover: 'https://images.blinkist.io/images/books/68ece08ae28de200073b8c2d/1_1/470.jpg',
              duration: '20 min',
              rating: '4.3'
            },
            {
              title: 'Waking the Tiger',
              author: 'Peter A. Levine',
              subtitle: 'Healing Trauma',
              cover: 'https://images.blinkist.io/images/books/68950f4a560faf000dc75058/1_1/470.jpg',
              duration: '16 min',
              rating: '4.5'
            },
            {
              title: 'The Gifts of Imperfection',
              author: 'Brené Brown',
              subtitle: 'Let Go of Who You Think You\'re Supposed to Be and Embrace Who You Are',
              cover: 'https://images.blinkist.io/images/books/67d816c52eef46016831c60c/1_1/470.jpg',
              duration: '15 min',
              rating: '4.7'
            },
            {
              title: 'Trauma and Recovery',
              author: 'Judith Herman',
              subtitle: 'The Aftermath of Violence - From Domestic Abuse to Political Terror',
              cover: 'https://images.blinkist.io/images/books/6883c463560faf000dc730c8/1_1/470.jpg',
              duration: '22 min',
              rating: '4.6'
            },
            {
              title: 'Childhood Disrupted',
              author: 'Donna Jackson Nakazawa',
              subtitle: 'How Your Biography Becomes Your Biology, and How You Can Heal',
              cover: 'https://images.blinkist.io/images/books/6844981b56f5e000086e2531/1_1/470.jpg',
              duration: '18 min',
              rating: '4.4'
            },
            {
              title: 'The Boy Who Was Raised as a Dog',
              author: 'Bruce D. Perry',
              subtitle: 'And Other Stories from a Child Psychiatrist\'s Notebook',
              cover: 'https://images.blinkist.io/images/books/6841c31b56f5e000086e24f9/1_1/470.jpg',
              duration: '19 min',
              rating: '4.5'
            },
            {
              title: 'Healing the Fragmented Selves of Trauma Survivors',
              author: 'Janina Fisher',
              subtitle: 'Overcoming Internal Self-Alienation',
              cover: 'https://images.blinkist.io/images/books/65dcf8ea5adcee00073f0114/1_1/470.jpg',
              duration: '21 min',
              rating: '4.3'
            }
          ]
        },
        {
          id: '5',
          title: 'Finance & Investing',
          subtitle: 'Master your money and investments',
          description: 'Learn the fundamentals of personal finance, investing strategies, and wealth building. This collection brings together essential reads for anyone looking to take control of their financial future.',
          aboutDescription: 'Learn the fundamentals of personal finance, investing strategies, and wealth building. This collection brings together essential reads for anyone looking to take control of their financial future.',
          category: 'Finance',
          categorySlug: 'money-and-investments-en',
          image: 'https://heardapp.soundems.com/o_1irjck315p2n184m16pr184en8la.png',
          itemsCount: 10,
          categories: [
            {
              id: 1,
              name: 'Finance',
              slug: 'money-and-investments-en',
              href: '/app/categories/money-and-investments-en',
              iconPath: 'M24 11.75h-1.5a1.24 1.24 0 0 1-.6 1c-.6-4-4.81-7-9.91-7-1.24 0-2.474.185-3.66.55A4.22 4.22 0 0 0 5.2 4.66h-.77v3.86a6.38 6.38 0 0 0-1.76 2.37H0v5.94h2.78a8.22 8.22 0 0 0 2.38 2.77l-.37 1a2.47 2.47 0 0 0 .08 1.94 2.53 2.53 0 0 0 4.67-.19l.29-.77c1.44.25 2.91.25 4.35 0l.28.77A2.55 2.55 0 0 0 16.84 24c.297.001.592-.053.87-.16a2.483 2.483 0 0 0 1.43-1.32 2.53 2.53 0 0 0 .08-1.93l-.37-1A7.5 7.5 0 0 0 22 14.41a2.78 2.78 0 0 0 2-2.66zm-6.48 6.94L17 19l.77 2.1a1 1 0 0 1 0 .78 1 1 0 0 1-.59.54 1.001 1.001 0 0 1-1.32-.61l-.74-2-.64.15a11 11 0 0 1-5 0l-.65-.15-.74 2a1 1 0 0 1-1.32.61 1 1 0 0 1-.58-.53 1 1 0 0 1 0-.79L7 19l-.5-.33a6.77 6.77 0 0 1-2.53-2.9l-.2-.46H1.5v-2.92h2.18l.19-.48a5.19 5.19 0 0 1 1.77-2.45l.28-.22V6.31a2.24 2.24 0 0 1 1.38 1.2l.28.66.67-.25A10.42 10.42 0 0 1 12 7.25c4.68 0 8.49 2.92 8.49 6.51a6.002 6.002 0 0 1-2.96 4.93z'
            },
            {
              id: 2,
              name: 'Personal Development',
              slug: 'personal-growth-and-self-improvement-en',
              href: '/app/categories/personal-growth-and-self-improvement-en',
              iconPath: 'M24 24H0v-7.3h5.72l-.1-5.57h5.64V5.57h5.62V0H24zM1.5 22.51h21V1.5h-4.12v5.57h-5.62v5.57H7.15l.09 5.57H1.5z'
            }
          ],
          books: [
            {
              title: 'Rich Dad Poor Dad',
              author: 'Robert T. Kiyosaki',
              subtitle: 'What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!',
              cover: 'https://heardapp.soundems.com/o_1irjck315p2n184m16pr184en8la.png',
              duration: '17 min',
              rating: '4.7'
            },
            {
              title: 'The Intelligent Investor',
              author: 'Benjamin Graham',
              subtitle: 'The Definitive Book on Value Investing',
              cover: 'https://images.blinkist.io/images/books/5282429c3334640018470000/1_1/470.jpg',
              duration: '19 min',
              rating: '4.6'
            },
            {
              title: 'A Random Walk Down Wall Street',
              author: 'Burton G. Malkiel',
              subtitle: 'The Time-Tested Strategy for Successful Investing',
              cover: 'https://images.blinkist.io/images/books/6841c31b56f5e000086e24f9/1_1/470.jpg',
              duration: '18 min',
              rating: '4.5'
            },
            {
              title: 'The Little Book of Common Sense Investing',
              author: 'John C. Bogle',
              subtitle: 'The Only Way to Guarantee Your Fair Share of Stock Market Returns',
              cover: 'https://images.blinkist.io/images/books/688bca57560faf000dc73bac/1_1/470.jpg',
              duration: '16 min',
              rating: '4.4'
            },
            {
              title: 'Your Money or Your Life',
              author: 'Vicki Robin',
              subtitle: '9 Steps to Transforming Your Relationship with Money and Achieving Financial Independence',
              cover: 'https://images.blinkist.io/images/books/6639ef3629619e000731f514/1_1/470.jpg',
              duration: '20 min',
              rating: '4.5'
            },
            {
              title: 'The Millionaire Next Door',
              author: 'Thomas J. Stanley',
              subtitle: 'The Surprising Secrets of America\'s Wealthy',
              cover: 'https://images.blinkist.io/images/books/68ece08ae28de200073b8c2d/1_1/470.jpg',
              duration: '17 min',
              rating: '4.6'
            },
            {
              title: 'I Will Teach You to Be Rich',
              author: 'Ramit Sethi',
              subtitle: 'No Guilt. No Excuses. Just a 6-Week Program That Works',
              cover: 'https://images.blinkist.io/images/books/68950f4a560faf000dc75058/1_1/470.jpg',
              duration: '21 min',
              rating: '4.3'
            },
            {
              title: 'The Total Money Makeover',
              author: 'Dave Ramsey',
              subtitle: 'A Proven Plan for Financial Fitness',
              cover: 'https://images.blinkist.io/images/books/67d816c52eef46016831c60c/1_1/470.jpg',
              duration: '19 min',
              rating: '4.4'
            },
            {
              title: 'Think and Grow Rich',
              author: 'Napoleon Hill',
              subtitle: 'The Landmark Bestseller Now Revised and Updated for the 21st Century',
              cover: 'https://images.blinkist.io/images/books/6883c463560faf000dc730c8/1_1/470.jpg',
              duration: '15 min',
              rating: '4.5'
            },
            {
              title: 'The Psychology of Money',
              author: 'Morgan Housel',
              subtitle: 'Timeless Lessons on Wealth, Greed, and Happiness',
              cover: 'https://images.blinkist.io/images/books/6844981b56f5e000086e2531/1_1/470.jpg',
              duration: '18 min',
              rating: '4.7'
            }
          ]
        },
        {
          id: '6',
          title: 'Business & Leadership',
          subtitle: 'Essential reads for leaders and entrepreneurs',
          description: 'Discover the strategies, insights, and principles that drive successful businesses and effective leadership. This collection features essential reads for entrepreneurs, managers, and anyone looking to excel in the business world.',
          aboutDescription: 'Discover the strategies, insights, and principles that drive successful businesses and effective leadership. This collection features essential reads for entrepreneurs, managers, and anyone looking to excel in the business world.',
          category: 'Business',
          categorySlug: 'business-and-entrepreneurship-en',
          image: 'https://heardapp.soundems.com/o_1i91j2bi88b0pqf1va71fq0maqa.jpg',
          itemsCount: 12,
          categories: [
            {
              id: 1,
              name: 'Business',
              slug: 'business-and-entrepreneurship-en',
              href: '/app/categories/business-and-entrepreneurship-en',
              iconPath: 'M24 14.17L21.46 10v-.36A8.93 8.93 0 0020.14 5l-.22-.37h-1.28a3.07 3.07 0 00-1.06-1.09 1.5 1.5 0 01-.64-.73 3.33 3.33 0 00-3.17-2 2.15 2.15 0 01-1.13-.28 3.73 3.73 0 00-3.84 0 2.18 2.18 0 01-1.13.31 3.33 3.33 0 00-3.17 2 1.5 1.5 0 01-.64.73 3 3 0 00-1.14 1.24H1.41l-.21.39A9 9 0 000 9.64a9.26 9.26 0 003.35 7V24h1.5v-8.06l-.28-.22A7.799 7.799 0 011.5 9.64a7.26 7.26 0 01.8-3.32l16.77-.17A7.45 7.45 0 0120 9.64v.76l2.43 4h-2.71v2h-2.64v1.5h2.64v1.2a1.21 1.21 0 01-.32.76 2.37 2.37 0 01-1.75.54H12.4V24h1.5v-2.06h3.75a3.75 3.75 0 002.83-1 2.64 2.64 0 00.74-1.84v-3.2h1.5a1.229 1.229 0 001-.46 1.58 1.58 0 00.28-1.27zM5.9 3.38a1.86 1.86 0 011.77-1 3.59 3.59 0 001.91-.53 2.25 2.25 0 012.27 0 3.65 3.65 0 001.92.53 1.86 1.86 0 011.77 1 3 3 0 001 1.3l-11.82.11A2.93 2.93 0 005.9 3.38z'
            },
            {
              id: 2,
              name: 'Personal Development',
              slug: 'personal-growth-and-self-improvement-en',
              href: '/app/categories/personal-growth-and-self-improvement-en',
              iconPath: 'M24 24H0v-7.3h5.72l-.1-5.57h5.64V5.57h5.62V0H24zM1.5 22.51h21V1.5h-4.12v5.57h-5.62v5.57H7.15l.09 5.57H1.5z'
            }
          ],
          books: [
            {
              title: 'The 7 Habits of Highly Effective People',
              author: 'Stephen R. Covey',
              subtitle: 'Powerful Lessons in Personal Change',
              cover: 'https://heardapp.soundems.com/o_1i91j2bi88b0pqf1va71fq0maqa.jpg',
              duration: '22 min',
              rating: '4.6'
            },
            {
              title: 'Good to Great',
              author: 'Jim Collins',
              subtitle: 'Why Some Companies Make the Leap...And Others Don\'t',
              cover: 'https://heardapp.soundems.com/o_1iau358111opr1o1a1vqo3ah1nhca.jpg',
              duration: '21 min',
              rating: '4.5'
            },
            {
              title: 'Elon Musk: The Official Biography',
              author: 'Walter Isaacson',
              subtitle: 'A deep dive into Elon Musk\'s relentless ambition, risk-taking, and industry-changing innovations',
              cover: 'https://heardapp.soundems.com/o_1irjcilmm13vg1kt0n0roak1qv2a.png',
              duration: '19 min',
              rating: '4.6'
            },
            {
              title: 'The Lean Startup',
              author: 'Eric Ries',
              subtitle: 'How Today\'s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses',
              cover: 'https://images.blinkist.io/images/books/5282429c3334640018470000/1_1/470.jpg',
              duration: '20 min',
              rating: '4.4'
            },
            {
              title: 'Zero to One',
              author: 'Peter Thiel',
              subtitle: 'Notes on Startups, or How to Build the Future',
              cover: 'https://images.blinkist.io/images/books/6841c31b56f5e000086e24f9/1_1/470.jpg',
              duration: '18 min',
              rating: '4.5'
            },
            {
              title: 'The Hard Thing About Hard Things',
              author: 'Ben Horowitz',
              subtitle: 'Building a Business When There Are No Easy Answers',
              cover: 'https://images.blinkist.io/images/books/688bca57560faf000dc73bac/1_1/470.jpg',
              duration: '19 min',
              rating: '4.3'
            },
            {
              title: 'Leaders Eat Last',
              author: 'Simon Sinek',
              subtitle: 'Why Some Teams Pull Together and Others Don\'t',
              cover: 'https://images.blinkist.io/images/books/6639ef3629619e000731f514/1_1/470.jpg',
              duration: '17 min',
              rating: '4.6'
            },
            {
              title: 'Dare to Lead',
              author: 'Brené Brown',
              subtitle: 'Brave Work. Tough Conversations. Whole Hearts.',
              cover: 'https://images.blinkist.io/images/books/68ece08ae28de200073b8c2d/1_1/470.jpg',
              duration: '21 min',
              rating: '4.5'
            },
            {
              title: 'The Innovator\'s Dilemma',
              author: 'Clayton M. Christensen',
              subtitle: 'When New Technologies Cause Great Firms to Fail',
              cover: 'https://images.blinkist.io/images/books/68950f4a560faf000dc75058/1_1/470.jpg',
              duration: '22 min',
              rating: '4.4'
            },
            {
              title: 'Built to Last',
              author: 'Jim Collins',
              subtitle: 'Successful Habits of Visionary Companies',
              cover: 'https://images.blinkist.io/images/books/67d816c52eef46016831c60c/1_1/470.jpg',
              duration: '20 min',
              rating: '4.6'
            },
            {
              title: 'Start with Why',
              author: 'Simon Sinek',
              subtitle: 'How Great Leaders Inspire Everyone to Take Action',
              cover: 'https://images.blinkist.io/images/books/6883c463560faf000dc730c8/1_1/470.jpg',
              duration: '16 min',
              rating: '4.5'
            },
            {
              title: 'The E-Myth Revisited',
              author: 'Michael E. Gerber',
              subtitle: 'Why Most Small Businesses Don\'t Work and What to Do About It',
              cover: 'https://images.blinkist.io/images/books/6844981b56f5e000086e2531/1_1/470.jpg',
              duration: '18 min',
              rating: '4.4'
            }
          ]
        }
      ]
      
      // 根据slug查找合集
      const foundCollection = allCollections.find(c => createSlugUtil(c.title) === slug)
      
      if (foundCollection) {
        this.collection = foundCollection
        // 加载该合集的书籍列表
        this.collectionBooks = foundCollection.books || []
      } else {
        // 如果找不到，使用第一个作为默认值
        this.collection = allCollections[0]
        this.collectionBooks = allCollections[0].books || []
      }
    },
    async fetchRecommendedCollections() {
      // 模拟获取推荐合集
      this.recommendedCollections = [
        {
          id: '1',
          title: 'Hack Your Mind for Unlimited Potential',
          description: 'Master your mind to transform your life',
          image: 'https://images.blinkist.io/images/curated_lists/2634/1_1/470.jpg',
          itemsCount: 10
        },
        {
          id: '2',
          title: 'Best Books on ADHD',
          description: 'Understanding ADHD and how to flourish with the condition',
          image: 'https://images.blinkist.io/images/curated_lists/2313/1_1/470.jpg',
          itemsCount: 6
        },
        {
          id: '3',
          title: 'Start Healing from Childhood Trauma',
          description: 'How does childhood trauma affect us and how can we heal?',
          image: 'https://images.blinkist.io/images/curated_lists/2195/1_1/470.jpg',
          itemsCount: 10
        },
        {
          id: '4',
          title: 'Gretchen Rubin\'s book recommendations',
          description: 'Inspiring Blinks to help you overcome life\'s many challenges',
          image: 'https://images.blinkist.io/images/curated_lists/980/1_1/470.jpg',
          itemsCount: 11
        },
        {
          id: '5',
          title: 'Eric Zimmer\'s Book Recommendations',
          description: 'Blinks on your quest to pursue the life you want for yourself',
          image: 'https://images.blinkist.io/images/curated_lists/759/1_1/470.jpg',
          itemsCount: 15
        },
        {
          id: '6',
          title: 'This Is Intergenerational Trauma',
          description: 'Uncover the science behind and effects of generational trauma',
          image: 'https://images.blinkist.io/images/curated_lists/808/1_1/470.jpg',
          itemsCount: 11
        }
      ]
    }
  }
}
</script>

<style scoped>
/* 基础样式重置 */
* {
  -webkit-text-size-adjust: 100%;
  font-feature-settings: normal;
  font-variation-settings: normal;
  tab-size: 4;
  -webkit-tap-highlight-color: transparent;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  border: 0 solid;
  box-sizing: border-box;
  user-select: text !important;
}

.collection-detail-page {
  background: #ffffff;
  min-height: 100vh;
  padding-bottom: 3rem;
}

.content-wrapper {
  background-color: #ffffff;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  .content-wrapper {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

/* Hero Section */
.hero-section-wrapper {
  position: relative;
  margin-bottom: 0;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.bg-background-yellow {
  background-color: #fff3d7;
}

.h-tilted-background-vertical {
  height: 12rem;
}

@media (min-width: 1024px) {
  .h-tilted-background-responsive {
    height: 16rem;
  }
}

.h-responsive {
  height: 3rem;
}

@media (min-width: 1024px) {
  .h-responsive {
    height: 4rem;
  }
}

.triangle-right {
  clip-path: polygon(0 0, 100% 0, 0 100%);
}

@media (min-width: 1024px) {
  .triangle-right {
    clip-path: polygon(0 0, 100% 0, 100% 100%);
  }
}

.hero-content {
  position: relative;
  padding-top: 1rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 1024px) {
  .hero-content {
    margin-bottom: 3rem;
    padding-top: 4rem;
  }
}

/* Breadcrumb */
.breadcrumb-section {
  padding: 0 1rem;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .breadcrumb-section {
    padding: 0 3rem;
  }
}

.breadcrumb-mobile-only {
  display: flex;
  align-items: center;
}

@media (min-width: 768px) {
  .breadcrumb-mobile-only {
    display: none;
  }
}

.breadcrumb-arrow {
  width: 0.625rem;
  height: 0.625rem;
  margin-right: 0.375rem;
  transform: rotate(90deg);
  color: #03314b;
}

.breadcrumb-link {
  color: #03314b;
  text-decoration: none;
  font-size: 0.875rem;
  cursor: pointer;
}

.breadcrumb-desktop-only {
  display: none;
  align-items: center;
  color: #0365f2;
}

@media (min-width: 768px) {
  .breadcrumb-desktop-only {
    display: flex;
  }
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-link-blue {
  color: #0365f2;
  text-decoration: none;
  cursor: pointer;
  font-size: 0.875rem;
}

.breadcrumb-link-blue:hover {
  color: #0252c2;
}

.breadcrumb-separator {
  width: 0.625rem;
  height: 0.625rem;
  margin: 0 0.375rem;
  transform: rotate(-90deg);
  color: #0365f2;
}

.breadcrumb-current {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  font-size: 0.875rem;
  line-height: 1.375rem;
  --tw-text-opacity: 1;
  color: rgba(3, 54, 124, var(--tw-text-opacity));
  user-select: text !important;
}

/* Hero Main Content */
.hero-main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  width: 100%;
}

@media (min-width: 1024px) {
  .hero-main-content {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0 3rem;
  }
  
  .hero-title-mobile-content {
    display: none;
  }
}


.hero-image-wrapper {
  width: 12.5rem;
  height: 12.5rem;
  flex-shrink: 0;
  margin-bottom: 1.5rem;
  order: 1;
}

@media (min-width: 1024px) {
  .hero-image-wrapper {
    width: 16.5rem;
    height: 16.5rem;
    margin-right: 3rem;
    margin-bottom: 0;
    order: 0;
  }
}

.hero-image-wrapper /deep/ .lazy-image-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
}

.hero-image {
  border-radius: 0.5rem;
  object-fit: contain;
}

/* Hero Info Desktop */
.hero-info-desktop {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  --tw-text-opacity: 1;
  color: rgba(58, 70, 73, var(--tw-text-opacity));
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 80rem;
  flex-direction: column;
  padding-left: 3rem;
  padding-right: 3rem;
  display: none;
  user-select: text !important;
}

@media (min-width: 1024px) {
  .hero-info-desktop {
    display: block;
  }
}

.hero-title-desktop {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  width: 100%;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgba(3, 49, 75, var(--tw-text-opacity));
  font-size: 2rem;
  line-height: 2.5rem;
  order: 1;
  margin-bottom: 1rem;
  display: block;
  text-align: left;
  user-select: text !important;
}

.hero-description-wrapper {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  border: 0 solid;
  box-sizing: border-box;
  margin-bottom: 1rem;
  text-align: center;
  line-height: inherit;
  --tw-text-opacity: 1;
  color: rgba(58, 70, 73, var(--tw-text-opacity));
  user-select: text !important;
}

@media (min-width: 1024px) {
  .hero-description-wrapper {
    text-align: left;
  }
}

.description-icon {
  display: inline;
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  vertical-align: -0.1rem;
  color: currentColor;
}

.hero-description {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;
  --tw-text-opacity: 1;
  color: rgba(58, 70, 73, var(--tw-text-opacity));
  text-align: left;
  user-select: text !important;
}

.hero-author-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: center;
  --tw-text-opacity: 1;
  color: rgba(58, 70, 73, var(--tw-text-opacity));
}

@media (min-width: 1024px) {
  .hero-author-wrapper {
    justify-content: flex-start;
  }
}

.blinkist-logo {
  width: 1rem;
  height: 1rem;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.hero-author-name {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgba(3, 49, 75, var(--tw-text-opacity));
  user-select: text !important;
}

.hero-play-button {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  text-decoration: inherit;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100% !important;
  cursor: pointer;
  border-radius: 0.25rem;
  border-style: none;
  --tw-bg-opacity: 1;
  background-color: rgba(44, 224, 128, var(--tw-bg-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.625rem;
  padding-top: 0.625rem;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: rgba(3, 49, 75, var(--tw-text-opacity));
  text-decoration-line: none;
  outline: 2px solid #0000;
  outline-offset: 2px;
  transition-duration: 0.15s;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 18.5rem;
  user-select: text !important;
}

@media (min-width: 1024px) {
  .hero-play-button {
    width: auto;
  }
}

.hero-play-button:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(32, 196, 111, var(--tw-bg-opacity));
}

.play-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
}

/* Hero Info Mobile */
.hero-info-mobile {
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  order: 2;
}

@media (min-width: 1024px) {
  .hero-info-mobile {
    display: none;
  }
}

.hero-title-mobile-content {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
  margin: 0;
  margin-bottom: 1.5rem;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgba(3, 49, 75, var(--tw-text-opacity));
  user-select: text !important;
  display: block;
}

@media (min-width: 1024px) {
  .hero-title-mobile-content {
    display: none;
  }
}

.hero-play-button-mobile {
  margin-bottom: 2rem;
  width: 100% !important;
  max-width: 100%;
}

/* About Section */
.about-section {
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .about-section {
    margin-bottom: 4rem;
  }
}

.about-title {
  margin-bottom: 1rem;
  color: #03314b;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
}

.categories-wrapper {
  margin-bottom: 1rem;
}

.categories-scroll {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  margin-bottom: -2rem;
  gap: 1rem 0.5rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.categories-scroll::-webkit-scrollbar {
  display: none;
}

@media (min-width: 768px) {
  .categories-scroll {
    flex-wrap: wrap;
    padding-left: 0;
    padding-right: 0;
  }
}

.category-chip {
  font-family: "CeraPro", sans-serif;
  color: #03314b;
  display: flex;
  width: max-content;
  align-items: center;
  padding: 0.75rem 1rem;
  border: 2px solid;
  border-radius: 0.25rem;
  cursor: pointer;
  background: #f1f6f4;
  border-color: #fff;
  text-decoration: none;
  transition: border-color 0.2s;
  flex-shrink: 0;
  white-space: nowrap;
}

@media (min-width: 768px) {
  .category-chip {
    margin-right: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .category-chip:first-child {
    margin-left: 0;
  }
}

@media (min-width: 768px) {
  .category-chip:hover {
    border-color: #2ce080;
  }
}

.category-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
  color: #03314b;
}

.about-description {
  font-size: 1rem;
  line-height: 1.5rem;
  color: #03314b;
  margin: 0;
}

@media (min-width: 1024px) {
  .about-description {
    width: 66.666667%;
  }
}

/* Share Section */
.share-section {
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .share-section {
    margin-bottom: 4rem;
  }
}

.share-content {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  padding: 1.5rem 0;
  color: #0365f2;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
}

@media (min-width: 768px) {
  .share-content {
    gap: 2rem;
  }
}

.share-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #0365f2;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  font-family: inherit;
  padding: 0;
}

.share-button:hover {
  color: #0252c2;
}

.share-icon {
  width: 1.5rem;
  height: 1.5rem;
}

/* Collection Items Section */
.collection-items-section {
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .collection-items-section {
    margin-bottom: 4rem;
  }
}

.section-header {
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
  .section-header {
    margin-bottom: 2rem;
  }
}

.section-title {
  margin-bottom: 0.5rem;
  color: #03314b;
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 1.875rem;
}

.section-subtitle {
  color: #3a4649;
  font-size: 1rem;
  line-height: 1.5rem;
}

.books-scroll-wrapper {
  width: 100%;
  overflow: hidden;
}

.books-scroll-container {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 3rem;
  grid-flow: row;
  justify-content: start;
  padding-bottom: 2rem;
  margin-bottom: -2rem;
  overflow-x: auto;
  overflow-y: hidden;
}

@media (max-width: 1023px) {
  .books-scroll-container {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    justify-content: start;
    scroll-snap-type: x mandatory;
  }
}

.book-item {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 11rem;
}

@media (min-width: 1024px) {
  .book-item {
    width: auto;
  }
}

.book-link {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-family: "CeraPro", sans-serif;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  background: transparent;
}

@media (min-width: 1024px) {
  .book-link {
    width: 11rem;
    padding: 0.5rem;
    box-sizing: border-box;
  }
  
  .book-link:hover {
    background-color: #f1f6f4;
  }
}

.book-cover {
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 0.5rem;
  width: 100%;
  aspect-ratio: 1;
}

@media (min-width: 1024px) {
  .book-cover {
    width: 11rem;
    height: 11rem;
  }
}

.book-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 0.5rem;
}

.book-title {
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #03314b;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 0.25rem;
}

.book-author {
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.125rem;
  margin-top: 0.25rem;
  color: #6d787e;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.book-subtitle {
  font-size: 0.875rem;
  line-height: 1.125rem;
  margin-top: 0.5rem;
  color: #3a4649;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.book-meta {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: #6d787e;
}

.meta-item {
  display: flex;
  gap: 0.25rem;
  align-items: center;
}

.duration-icon {
  border-radius: 0.25rem;
  background-color: #e5fef0;
  padding: 0.25rem;
  color: #6d787e;
  display: flex;
  align-items: center;
}

.meta-icon {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}

/* Recommended Collections Section */
.recommended-collections-section {
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .recommended-collections-section {
    margin-bottom: 4rem;
  }
}

.collections-scroll-wrapper {
  width: 100%;
  overflow: hidden;
}

.collections-scroll-container {
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 3rem;
  grid-flow: row;
  justify-content: start;
  padding-bottom: 2rem;
  margin-bottom: -2rem;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.collections-scroll-container::-webkit-scrollbar {
  display: none;
}

@media (max-width: 1023px) {
  .collections-scroll-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: start;
    scroll-snap-type: x mandatory;
  }
}

.collection-item {
  scroll-snap-align: start;
  flex-shrink: 0;
  width: 11rem;
}

@media (min-width: 1024px) {
  .collection-item {
    width: auto;
  }
}

/* Loading State */
.loading-state {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.25rem;
  color: #6d787e;
  font-family: "CeraPro", sans-serif;
}
</style>