<template>
  <div class="lazy-image-wrapper">
    <!-- 占位符 -->
    <div 
      v-if="!imageLoaded" 
      class="image-placeholder"
      :class="{ 'placeholder-loading': isLoading }"
    >
      <svg 
        v-if="showPlaceholderIcon" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        class="placeholder-icon"
      >
        <path 
          d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" 
          fill="currentColor"
        />
      </svg>
    </div>
    
    <!-- 实际图片 -->
    <img
      :src="src"
      :alt="alt"
      :class="['lazy-image', imageClass, { 'image-loaded': imageLoaded }]"
      :style="{ display: imageLoaded ? 'block' : 'none' }"
      @load="onImageLoad"
      @error="onImageError"
      :loading="loading"
    />
  </div>
</template>

<script>
export default {
  name: 'LazyImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: 'auto'
    },
    imageClass: {
      type: String,
      default: ''
    },
    loading: {
      type: String,
      default: 'lazy'
    },
    showPlaceholderIcon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      imageLoaded: false,
      isLoading: true,
      hasError: false
    }
  },
  mounted() {
    // 检查图片是否已经缓存
    const img = new Image()
    img.onload = () => {
      // 图片已缓存，立即显示
      this.imageLoaded = true
      this.isLoading = false
    }
    img.onerror = () => {
      this.hasError = true
      this.isLoading = false
    }
    img.src = this.src
  },
  methods: {
    onImageLoad() {
      this.imageLoaded = true
      this.isLoading = false
    },
    onImageError() {
      this.hasError = true
      this.isLoading = false
      // 即使加载失败，也隐藏占位符，显示错误状态
      this.imageLoaded = true
    }
  }
}
</script>

<style scoped>
.lazy-image-wrapper {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f1f6f4 25%, #e5e8e7 50%, #f1f6f4 75%);
  background-size: 200% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
}

.placeholder-loading {
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.placeholder-icon {
  width: 3rem;
  height: 3rem;
  color: #cbd5d9;
  opacity: 0.5;
}

.lazy-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.image-loaded {
  opacity: 1;
}

.lazy-image-wrapper img {
  position: relative;
  z-index: 1;
}
</style>

