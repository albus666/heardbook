<template>
  <NuxtLink 
    :to="href" 
    :aria-label="title" 
    class="base-card"
    :class="cardClass"
    v-bind="testId ? { 'data-test-id': testId } : {}"
  >
    <LazyImage 
      :src="image" 
      :alt="title" 
      image-class="base-card-image"
      width="100%"
      height="100%"
    />
    <div class="base-card-info">
      <div class="base-card-title" :title="title" v-bind="titleTestId ? { 'data-test-id': titleTestId } : {}">
        {{ title }}
      </div>
      <slot name="content"></slot>
    </div>
  </NuxtLink>
</template>

<script>
import LazyImage from '~/components/app/LazyImage.vue'

export default {
  name: 'BaseCard',
  components: {
    LazyImage
  },
  props: {
    href: {
      type: String,
      default: '#'
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    cardClass: {
      type: String,
      default: ''
    },
    testId: {
      type: String,
      default: ''
    },
    titleTestId: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.base-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-family: "CeraPro", sans-serif;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  background: transparent;
}

@media (min-width: 1024px) {
  .base-card {
    height: 100%;
  }
  
  .base-card:hover {
    background-color: #f1f6f4;
  }
}

.base-card-image {
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  object-fit: contain;
  box-sizing: border-box;
  transition: opacity 0.3s ease-in-out;
  opacity: 1;
  position: relative;
  z-index: 1;
}

.base-card /deep/ .lazy-image-wrapper {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 0.5rem;
  flex-shrink: 0;
}

.base-card-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 0.5rem;
}

.base-card-title {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: #03314b;
  font-family: "CeraPro", sans-serif;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

