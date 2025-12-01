<template>
  <BaseCard
    :href="(collection.url && collection.url !== '#') ? collection.url : (collection.title ? `/collections/${createSlug(collection.title)}` : '#')"
    :title="collection.title"
    :image="collection.image"
    test-id="collection-card"
    title-test-id="title"
  >
    <template #content>
      <div 
        v-if="collection.description" 
        class="collection-description" 
        :title="collection.description"
        data-test-id="description"
      >
        {{ collection.description }}
      </div>
      <div v-if="collection.itemsCount" class="collection-meta">
        <div class="collection-items">
          <div class="collection-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="collection-icon">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.367 0H24v17.633h-2.939v2.939h-2.939V24H0V5.878h3.429v-2.94h2.938V0zm1.47 2.939H21.06v13.224h1.47V1.47H7.837v1.47zM4.898 5.878h13.224v13.224h1.47V4.408H4.898v1.47zM1.469 7.347V22.53h15.184V7.347H1.469z"></path>
            </svg>
          </div>
          <span>{{ collection.itemsCount }} items</span>
        </div>
      </div>
    </template>
  </BaseCard>
</template>

<script>
import BaseCard from '~/components/app/BaseCard.vue'
import { createSlug as createSlugUtil } from '~/utils/slug.js'

export default {
  name: 'CollectionCard',
  components: {
    BaseCard
  },
  props: {
    collection: {
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
/* 继承 BaseCard 的基础样式，只定义 CollectionCard 特有的样式 */

.collection-description {
  margin: 0.5rem 0 0;
  padding: 0;
  font-size: 0.875rem;
  line-height: 1.375rem;
  color: #3a4649;
  font-family: "CeraPro", sans-serif;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.collection-meta {
  margin-top: 0.5rem;
  font-size: 0.75rem; /* text-caption */
  line-height: 1.125rem;
  color: #6d787e; /* text-mid-grey */
  font-family: "CeraPro", sans-serif;
}

.collection-items {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.collection-icon-wrapper {
  border-radius: 0.25rem;
  background-color: #e5f3ff; /* bg-background-blue */
  padding: 0.25rem;
  display: flex;
  align-items: center;
}

.collection-icon {
  width: 1rem; /* w-4 */
  height: 1rem; /* h-4 */
  flex-shrink: 0;
  color: currentColor;
}
</style>

