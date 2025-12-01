<template>
  <BaseCard
    :href="(book.url && book.url !== '#') ? book.url : (book.title ? `/books/${createSlug(book.title)}` : '#')"
    :title="book.title"
    :image="book.cover"
  >
    <template #content>
      <div class="book-author" :title="book.author">{{ book.author }}</div>
      <div v-if="book.subtitle" class="book-subtitle" :title="book.subtitle">{{ book.subtitle }}</div>
      <div class="book-meta">
        <div v-if="book.duration" class="meta-item duration">
          <div class="duration-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="meta-icon">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0h14.5v10.5H13v-9H1.5v16h7V19H0V0z" fill="currentColor"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 6h-8V4.5h8V6zM11.25 9h-8V7.5h8V9zM7.25 12h-4v-1.5h4V12zM19 22.5h1.51c1.2 0 1.99-.884 1.99-1.75S21.71 19 20.51 19H19v3.5zm1.51 1.5c1.925 0 3.49-1.457 3.49-3.25s-1.565-3.25-3.49-3.25H17.5V24h3.01zM9 19H7.49c-1.2 0-1.99.884-1.99 1.75s.79 1.75 1.99 1.75H9V19zm-1.51-1.5C5.566 17.5 4 18.957 4 20.75S5.565 24 7.49 24h3.01v-6.5H7.49z" fill="currentColor"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 15.466c0-3.382 2.903-5.716 6.25-5.716s6.25 2.334 6.25 5.716V18h-1.5v-2.534c0-2.384-2.051-4.216-4.75-4.216s-4.75 1.832-4.75 4.216V18h-1.5v-2.534z" fill="currentColor"></path>
            </svg>
          </div>
          <span>{{ book.duration }}</span>
        </div>
        <div v-if="book.rating" class="meta-item rating">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="meta-icon">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.31 9.262l-6.198.947 4.49 4.602-1.04 6.382L12 18.186l5.439 3.007-1.041-6.382 4.49-4.602-6.198-.947L12 3.53 9.31 9.262zM8.292 7.9L0 9.167l6 6.15L4.584 24 12 19.9l7.417 4.1L18 15.317l6-6.15L15.708 7.9 12 0 8.292 7.9z"></path>
          </svg>
          <span>{{ book.rating }}</span>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from '~/components/app/BaseCard.vue'
import { createSlug as createSlugUtil } from '~/utils/slug.js'

export default {
  name: 'BookCard',
  components: {
    BaseCard
  },
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
    createSlug(text) {
      return createSlugUtil(text)
    }
  }
}
</script>

<style scoped>
/* 继承 BaseCard 的基础样式，只定义 BookCard 特有的样式 */

.book-author {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 500;
  color: #6d787e;
  font-family: "CeraPro", sans-serif;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.book-subtitle {
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.375rem;
  color: #3a4649;
  font-family: "CeraPro", sans-serif;
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
  line-height: 1.375rem;
  color: #6d787e;
  font-family: "CeraPro", sans-serif;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
}

.meta-item.duration {
  column-gap: 0.25rem;
}

.meta-item.duration span {
  white-space: nowrap;
}

.duration-icon-wrapper {
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
</style>
