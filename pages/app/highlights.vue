<template>
  <div class="min-h-screen">
    <section class="highlights-section">
      <div class="highlights-header">
        <div class="highlights-icon-wrapper">
          <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="highlights-icon">
            <path d="M23.12 4.032l-3.14-2.953a2.744 2.744 0 00-3.69-.071l-11.23 9.79a3.78 3.78 0 00-1.3 2.791c-.01.688.16 1.366.5 1.952l-2.3 2.488 1.25 1.173-3.21 3.5 4.55 1.628 1.91-2.073 1.25 1.173L10 20.942a3.7 3.7 0 001.62.374c.11 0 .23-.01.34-.02a3.714 3.714 0 002.66-1.517l8.84-12.046c.84-1.132.69-2.73-.34-3.701zm-18.96 18.7l-1.76-.627 1.81-1.962 1.25 1.183-1.3 1.406zm3.48-1.244l-3.75-3.53 1.25-1.355 3.75 3.53-1.25 1.355zM22.36 6.924L13.52 18.97a2.373 2.373 0 01-3.54.323L5.87 15.43a2.414 2.414 0 01-.76-1.81c.01-.688.31-1.335.83-1.78l11.24-9.79a1.397 1.397 0 011.88.04l3.14 2.953c.52.486.59 1.305.16 1.881z" fill="currentColor"></path>
          </svg>
        </div>
        <div>
          <h1 class="highlights-title">Highlights</h1>
          <p class="highlights-subtitle">0 of 0 items</p>
        </div>
      </div>
      <div>
        <section class="empty-state-section">
          <div class="empty-state-content">
            <div class="empty-state-card">
              <div class="empty-state-title">No highlights yet!</div>
              <div class="empty-state-description">Save key insights and revisit them anytime.</div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HighlightsPage',
  layout: 'app'
}
</script>

<style scoped>
.min-h-screen {
  min-height: 100vh;
}

.highlights-section {
  -webkit-text-size-adjust: 100%;
  font-feature-settings: normal;
  font-variation-settings: normal;
  tab-size: 4;
  -webkit-tap-highlight-color: transparent;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  font-family: CeraPro;
  border: 0 solid;
  box-sizing: border-box;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position: ;
  --tw-gradient-via-position: ;
  --tw-gradient-to-position: ;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #3b82f680;
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
  --tw-contain-size: ;
  --tw-contain-layout: ;
  --tw-contain-paint: ;
  --tw-contain-style: ;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 100%;
  max-width: 80rem;
  flex-direction: column;
  --tw-text-opacity: 1;
  color: rgba(3,49,75,var(--tw-text-opacity));
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 3rem;
  padding-top: 0;
  user-select: text !important;
}

@media (min-width: 768px) {
  .highlights-section {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }
}

@media (min-width: 1024px) {
  .highlights-section {
    padding-top: 4rem;
  }
}

.highlights-header {
  display: flex;
  margin-bottom: 2rem;
  gap: 0.5rem;
}

.highlights-icon-wrapper {
  background-color: #f1f6f4;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  flex-shrink: 0;
}

.highlights-icon {
  width: 2rem;
  height: 2rem;
  color: #03314b;
}

.highlights-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: #03314b;
  margin: 0;
  line-height: 1.875rem;
}

.highlights-subtitle {
  font-size: 1rem;
  color: #3a4649;
  margin: 0;
  line-height: 1.5rem;
}

.empty-state-section {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  .empty-state-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

.empty-state-content {
  width: 100%;
}

@media (min-width: 768px) {
  .empty-state-content {
    width: 66.666667%;
  }
}

.empty-state-card {
  border-radius: 1rem;
  background-color: #f1f6f4;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.empty-state-title {
  color: #000000;
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.empty-state-description {
  color: #3a4649;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5rem;
}
</style>

