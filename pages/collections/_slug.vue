<template>
  <div class="collection-detail-page">
    <div v-if="collection" class="collection-detail-container">
      <!-- 返回按钮 -->
      <button class="back-button" @click="$router.back()">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="back-icon">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Back</span>
      </button>

      <!-- 合集信息 -->
      <div class="collection-header">
        <div class="collection-image-section">
          <LazyImage 
            :src="collection.image" 
            :alt="collection.title" 
            image-class="collection-detail-image"
            width="100%"
            height="100%"
          />
        </div>
        
        <div class="collection-info-section">
          <h1 class="collection-detail-title">{{ collection.title }}</h1>
          
          <div v-if="collection.description" class="collection-detail-description">
            {{ collection.description }}
          </div>

          <div class="collection-meta-info">
            <div class="meta-item">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="meta-icon">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.367 0H24v17.633h-2.939v2.939h-2.939V24H0V5.878h3.429v-2.94h2.938V0zm1.47 2.939H21.06v13.224h1.47V1.47H7.837v1.47zM4.898 5.878h13.224v13.224h1.47V4.408H4.898v1.47zM1.469 7.347V22.53h15.184V7.347H1.469z"></path>
              </svg>
              <span>{{ collection.itemsCount || 0 }} items</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 合集内容列表 -->
      <div class="collection-content">
        <h2 class="content-section-title">Books in this collection</h2>
        <div class="books-grid">
          <div 
            v-for="(book, index) in collectionBooks" 
            :key="index"
            class="collection-book-item"
            @click="goToBook(book.title)"
          >
            <LazyImage 
              :src="book.cover" 
              :alt="book.title" 
              image-class="collection-book-cover"
              width="100%"
              height="100%"
            />
            <div class="collection-book-info">
              <h3 class="collection-book-title">{{ book.title }}</h3>
              <p class="collection-book-author">{{ book.author }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="loading-state">
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import LazyImage from '~/components/app/LazyImage.vue'
import { createSlug } from '~/utils/slug.js'

export default {
  layout: 'app',
  name: 'CollectionDetail',
  components: {
    LazyImage
  },
  data() {
    return {
      collection: null,
      collectionBooks: []
    }
  },
  async mounted() {
    const slug = this.$route.params.slug
    await this.fetchCollectionDetail(slug)
  },
  methods: {
    async fetchCollectionDetail(slug) {
      // 模拟API调用
      const allCollections = [
        {
          id: '1',
          title: 'Elon Musk: The Official Biography',
          description: 'A deep dive into Elon Musk\'s relentless ambition, risk-taking, and industry-changing innovations.',
          image: 'https://heardapp.soundems.com/o_1irjcilmm13vg1kt0n0roak1qv2a.png',
          itemsCount: 5
        },
        {
          id: '2',
          title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
          description: 'A guide to transforming personal effectiveness through mindset shifts and consistent habits.',
          image: 'https://heardapp.soundems.com/o_1i91j2bi88b0pqf1va71fq0maqa.jpg',
          itemsCount: 5
        },
        {
          id: '3',
          title: 'Atomic Habits：An Easy Proven Way to Build Good Habits Break Bad Ones',
          description: 'An Easy Proven Way to Build Good Habits Break Bad Ones.',
          image: 'https://heardapp.soundems.com/o_1irjchurblfg1h4n1nogv02475a.png',
          itemsCount: 5
        },
        {
          id: '4',
          title: 'Rich Dad Poor Dad : What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!',
          description: 'What the Rich Teach Their Kids About Money--That the Poor and Middle Class Do Not!·Global Sold 40,000,000 Copies',
          image: 'https://heardapp.soundems.com/o_1irjck315p2n184m16pr184en8la.png',
          itemsCount: 5
        },
        {
          id: '5',
          title: 'Between the World and Me',
          description: 'A powerful exploration of race, identity, and the struggle for freedom in America.',
          image: 'https://heardapp.soundems.com/o_1hkanghspen3njdc60qp6mina.png',
          itemsCount: 5
        }
      ]
      
      // 根据slug查找合集
      this.collection = allCollections.find(c => createSlug(c.title) === slug) || allCollections[0]
      
      // 模拟获取合集内的图书列表
      this.collectionBooks = [
        {
          title: 'Elon Musk: The Official Biography',
          author: 'Walter Isaacson',
          cover: 'https://heardapp.soundems.com/o_1irjcilmm13vg1kt0n0roak1qv2a.png'
        },
        {
          title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
          author: 'Stephen R. Covey',
          cover: 'https://heardapp.soundems.com/o_1i91j2bi88b0pqf1va71fq0maqa.jpg'
        },
        {
          title: 'Atomic Habits：An Easy Proven Way to Build Good Habits Break Bad Ones',
          author: 'James Clear',
          cover: 'https://heardapp.soundems.com/o_1irjchurblfg1h4n1nogv02475a.png'
        }
      ]
    },
    goToBook(bookTitle) {
      const slug = createSlug(bookTitle)
      this.$router.push(`/books/${slug}`)
    }
  }
}
</script>

<style scoped>
.collection-detail-page {
  background: #f8faf9;
  padding: 1.5rem;
}

@media (min-width: 768px) {
  .collection-detail-page {
    padding: 2rem;
  }
}

.back-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #03314b;
  font-size: 1rem;
  font-family: "CeraPro", sans-serif;
  cursor: pointer;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
  transition: opacity 0.2s;
  -webkit-tap-highlight-color: transparent;
}

.back-button:hover {
  opacity: 0.7;
}

.back-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.collection-detail-container {
  max-width: 1200px;
  margin: 0 auto;
}

.collection-header {
  display: flex;
  gap: 3rem;
  margin-bottom: 3rem;
  align-items: flex-start;
}

.collection-image-section {
  flex: 0 0 300px;
}

.collection-image-section /deep/ .lazy-image-wrapper {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.collection-detail-image {
  border-radius: 0.5rem;
}

.collection-info-section {
  flex: 1;
  min-width: 0;
}

.collection-detail-title {
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 700;
  color: #03314b;
  font-family: "CeraPro", sans-serif;
  margin: 0 0 1rem 0;
}

.collection-detail-description {
  font-size: 1rem;
  line-height: 1.5rem;
  color: #3a4649;
  font-family: "CeraPro", sans-serif;
  margin-bottom: 1.5rem;
}

.collection-meta-info {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #6d787e;
  font-family: "CeraPro", sans-serif;
}

.meta-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
}

.collection-content {
  margin-top: 3rem;
}

.content-section-title {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: #03314b;
  font-family: "CeraPro", sans-serif;
  margin: 0 0 1.5rem 0;
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.collection-book-item {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 0.5rem;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.collection-book-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.collection-book-item /deep/ .lazy-image-wrapper {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 0.5rem 0.5rem 0 0;
}

.collection-book-cover {
  border-radius: 0.5rem 0.5rem 0 0;
}

.collection-book-info {
  padding: 1rem;
}

.collection-book-title {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: #03314b;
  font-family: "CeraPro", sans-serif;
  margin: 0 0 0.5rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.collection-book-author {
  font-size: 0.875rem;
  line-height: 1.375rem;
  color: #6d787e;
  font-family: "CeraPro", sans-serif;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.loading-state {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 1.25rem;
  color: #6d787e;
  font-family: "CeraPro", sans-serif;
}

@media (max-width: 768px) {
  .collection-detail-page {
    padding: 1rem;
  }

  .collection-header {
    flex-direction: column;
    gap: 2rem;
  }

  .collection-image-section {
    flex: 0 0 auto;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .collection-detail-title {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .books-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
}
</style>

