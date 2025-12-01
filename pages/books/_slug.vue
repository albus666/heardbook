<template>
  <div class="book-detail-page">
    <template v-if="book">
      <div class="book-detail-container">
      <!-- 基本信息区域：封面 + 标题、作者、元数据、按钮 -->
      <div class="book-basic-info">
        <!-- 封面区域 -->
        <div class="book-cover-section">
          <div class="book-cover-wrapper">
            <LazyImage 
              :src="book.cover" 
              :alt="book.title" 
              image-class="book-detail-cover"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        
        <!-- 基本信息内容区域 -->
        <div class="book-info-section">
          <div class="book-header-content">
            <h1 class="book-detail-title" data-test-id="book-title">{{ book.title }}</h1>
            <h2 class="book-detail-author">{{ book.author }}</h2>
            <p v-if="book.subtitle" class="book-detail-subtitle">{{ book.subtitle }}</p>
          </div>

          <!-- 移动端控制按钮 -->
          <div class="book-controls-mobile" data-test-id="book-controls-mobile">
            <div class="action-buttons-row">
              <a href="#" class="action-button read-button" data-test-id="read-button">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="action-icon">
                  <path d="M23 24H2V0h21v24zM3.337 22.632h18.326V1.368H3.337v21.264z" fill="currentColor"></path>
                  <path d="M18.313 8.647h-4.105v1.14h4.105v-1.14zM18.313 13.093H6.684v1.14h11.63v-1.14zM18.313 17.537H6.684v1.14h11.63v-1.14zM11.34 9.975h1.252L9.89 4.59H9.49l-2.7 5.386h1.252l.343-.684h2.612l.343.684zM8.958 8.151l.733-1.462.733 1.462H8.958z" fill="currentColor"></path>
                </svg>
                <span>Read</span>
              </a>
              <a href="#" class="action-button play-button" data-test-id="play-button">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="action-icon">
                  <path d="M20.253 13.625v-3.142C20.253 5.805 16.596 2 12.104 2c-4.492 0-8.149 3.805-8.149 8.483v3.131C1.768 13.656 0 15.52 0 17.804 0 20.119 1.808 22 4.03 22h4.413v-8.39h-3.21v-3.127c0-3.944 3.082-7.153 6.871-7.153 3.79 0 6.872 3.209 6.872 7.153v3.129h-3.419V22h4.413c2.222 0 4.03-1.883 4.03-4.195-.002-2.213-1.657-4.027-3.747-4.18zm-18.975 4.18c0-1.554 1.195-2.82 2.677-2.86v5.72c-1.482-.04-2.677-1.306-2.677-2.86zm5.887-2.865v5.73h-1.93v-5.73h1.93zm9.67 0h2.14v5.73h-2.14v-5.73zm3.418 5.714v-5.698c1.385.148 2.467 1.37 2.467 2.849 0 1.481-1.082 2.7-2.466 2.85z" fill="currentColor"></path>
                </svg>
                <span>Play</span>
              </a>
            </div>
            <div class="save-to-library-mobile">
              <button type="button" name="addToLibrary" class="save-button">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="action-icon">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25.25h17.5v23.461l-8.717-8.034L3.25 23.7V.25zm1.5 1.5v18.549l7.288-6.658 7.212 6.648V1.75H4.75z" fill="currentColor"></path>
                </svg>
                <span>Save to Library</span>
              </button>
            </div>
          </div>

          <!-- 元信息网格 -->
          <div class="book-meta-wrapper">
            <div class="book-meta-grid">
              <div v-if="book.rating" class="meta-grid-item">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="meta-icon">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.31 9.262l-6.198.947 4.49 4.602-1.04 6.382L12 18.186l5.439 3.007-1.041-6.382 4.49-4.602-6.198-.947L12 3.53 9.31 9.262zM8.292 7.9L0 9.167l6 6.15L4.584 24 12 19.9l7.417 4.1L18 15.317l6-6.15L15.708 7.9 12 0 8.292 7.9z"></path>
                </svg>
                <span>{{ book.rating }} {{ book.ratingsCount ? `(${book.ratingsCount} ratings)` : '' }}</span>
              </div>
              <div v-if="book.duration" class="meta-grid-item">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="meta-icon">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.61C6.15 22.61 1.39 17.85 1.39 12 1.39 6.149 6.15 1.39 12 1.39S22.61 6.148 22.61 12c0 5.85-4.76 10.61-10.61 10.61zM12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" fill="currentColor"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13.027a1.028 1.028 0 010-2.054 1.028 1.028 0 010 2.054zM14.416 12A2.419 2.419 0 0012 9.584c-.215 0-.422.03-.62.084L8.151 4.336l-1.189.719 3.234 5.342c-.38.427-.613.988-.613 1.603A2.42 2.42 0 0012 14.416c.719 0 1.364-.318 1.807-.818l3.572 1.647.582-1.261-3.571-1.647c.015-.11.026-.222.026-.337zM11.305 3.73h1.39V2.316h-1.39V3.73zM20.27 12.695h1.414v-1.39H20.27v1.39zM11.305 21.684h1.39V20.27h-1.39v1.414zM2.316 12.695H3.73v-1.39H2.316v1.39z" fill="currentColor"></path>
                </svg>
                <span>{{ book.duration }}</span>
              </div>
              <div v-if="book.keyIdeas" class="meta-grid-item">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="meta-icon">
                  <g fill="currentColor">
                    <path d="M12.6 3.8c-1.3-.1-2.5.1-3.7.6-1.1.5-2.1 1.3-2.9 2.3-.8 1-1.2 2.2-1.4 3.4-.2 1.2-.1 2.5.3 3.7.4 1.2 1.1 2.2 2 3.1V21.6h2c.1.6.5 1.1.9 1.6.6.6 1.4.9 2.2.9.8 0 1.6-.3 2.2-.9.5-.4.8-1 .9-1.6h2.3v-4.8c.7-.7 1.2-1.5 1.6-2.4.4-1 .6-2 .6-3.1 0-1.9-.7-3.7-2-5.1-1.3-1.4-3.1-2.3-5-2.4zm.6 18.2c-.3.3-.7.5-1.2.5-.4 0-.9-.2-1.2-.5-.1-.1-.3-.3-.3-.5h3c-.1.2-.2.4-.3.5zm2.7-1.9H8.4v-1.3h7.5v1.3zm2.2-8.8c0 .9-.2 1.7-.5 2.5s-.8 1.5-1.5 2.1l-.3.3.1.4v.6H8.4v-1l-.4-.4c-.7-.7-1.3-1.5-1.6-2.5-.3-1-.4-2-.3-3 .1-1 .5-1.9 1.1-2.7.6-.8 1.4-1.4 2.4-1.8.9-.4 1.9-.6 2.9-.5 1.5.1 2.9.8 4 1.9 1 1.1 1.6 2.6 1.6 4.1zM12.5 0H11v2.6h1.5V0zM4.978 1.68L3.914 2.738l1.834 1.844 1.064-1.058L4.978 1.68zM19.022 1.689l-1.833 1.843 1.063 1.058 1.834-1.843-1.064-1.058z"></path>
                    <path d="M13.7 9.9c0-1-.8-1.7-1.7-1.7-.9 0-1.7.8-1.7 1.7 0 .5.2 1 .6 1.3l-.8 2.7h3.8l-.7-2.7c.3-.4.5-.8.5-1.3z"></path>
                  </g>
                </svg>
                <span>{{ book.keyIdeas }} Key ideas</span>
              </div>
              <div v-if="book.format" class="meta-grid-item row-start-2">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="meta-icon">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0h14.5v9.767c3.131.22 5.75 2.487 5.75 5.7V17.5h.26c1.925 0 3.49 1.457 3.49 3.25S22.435 24 20.51 24H17.5v-6.5h1.25v-2.034c0-2.384-2.051-4.216-4.75-4.216s-4.75 1.832-4.75 4.216V17.5h1.25V24H7.49C5.566 24 4 22.543 4 20.75c0-.644.202-1.245.55-1.75H0V0zm7.75 17.5v-2.034c0-3.04 2.345-5.233 5.25-5.646V1.5H1.5v16h6.25zM5.5 20.75c0-.866.79-1.75 1.99-1.75H9v3.5H7.49c-1.2 0-1.99-.884-1.99-1.75zM11.25 6h-8V4.5h8V6zm-8 3h8V7.5h-8V9zm4 3h-4v-1.5h4V12zm13.26 10.5H19V19h1.51c1.2 0 1.99.884 1.99 1.75s-.79 1.75-1.99 1.75z" fill="currentColor"></path>
                </svg>
                <span>{{ book.format }}</span>
              </div>
            </div>
          </div>

          <!-- 桌面端控制按钮 -->
          <div class="book-controls-desktop" data-test-id="book-controls-desktop">
            <div class="action-buttons-row">
              <a href="#" class="action-button read-button" data-test-id="read-button">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="action-icon">
                  <path d="M23 24H2V0h21v24zM3.337 22.632h18.326V1.368H3.337v21.264z" fill="currentColor"></path>
                  <path d="M18.313 8.647h-4.105v1.14h4.105v-1.14zM18.313 13.093H6.684v1.14h11.63v-1.14zM18.313 17.537H6.684v1.14h11.63v-1.14zM11.34 9.975h1.252L9.89 4.59H9.49l-2.7 5.386h1.252l.343-.684h2.612l.343.684zM8.958 8.151l.733-1.462.733 1.462H8.958z" fill="currentColor"></path>
                </svg>
                <span>Read</span>
              </a>
              <a href="#" class="action-button play-button" data-test-id="play-button">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="action-icon">
                  <path d="M20.253 13.625v-3.142C20.253 5.805 16.596 2 12.104 2c-4.492 0-8.149 3.805-8.149 8.483v3.131C1.768 13.656 0 15.52 0 17.804 0 20.119 1.808 22 4.03 22h4.413v-8.39h-3.21v-3.127c0-3.944 3.082-7.153 6.871-7.153 3.79 0 6.872 3.209 6.872 7.153v3.129h-3.419V22h4.413c2.222 0 4.03-1.883 4.03-4.195-.002-2.213-1.657-4.027-3.747-4.18zm-18.975 4.18c0-1.554 1.195-2.82 2.677-2.86v5.72c-1.482-.04-2.677-1.306-2.677-2.86zm5.887-2.865v5.73h-1.93v-5.73h1.93zm9.67 0h2.14v5.73h-2.14v-5.73zm3.418 5.714v-5.698c1.385.148 2.467 1.37 2.467 2.849 0 1.481-1.082 2.7-2.466 2.85z" fill="currentColor"></path>
                </svg>
                <span>Play</span>
              </a>
            </div>
            <div class="save-to-library-desktop">
              <button type="button" name="addToLibrary" class="save-button">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="action-icon">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25.25h17.5v23.461l-8.717-8.034L3.25 23.7V.25zm1.5 1.5v18.549l7.288-6.658 7.212 6.648V1.75H4.75z" fill="currentColor"></path>
                </svg>
                <span>Save to Library</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 图书详情内容：What's it about? 和 About the author -->
      <div class="book-detail-info">
        <div class="book-info-section-content">
          <h4 class="book-info-title">What's it about?</h4>
          <div v-if="book.categories && book.categories.length > 0" class="book-categories-wrapper">
            <div class="book-categories-scroll">
              <a 
                v-for="category in book.categories" 
                :key="category.id"
                :href="category.href" 
                data-test-id="b-chip" 
                class="book-category-chip"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="category-icon">
                  <clipPath :id="`clip-${category.id}`">
                    <path d="M0 0h24v24H0z"></path>
                  </clipPath>
                  <g :clip-path="`url(#clip-${category.id})`" fill="currentColor" v-html="category.iconPath"></g>
                </svg>
                <span class="category-text">{{ category.name }}</span>
              </a>
            </div>
          </div>
          <div v-if="book.description" class="book-description">
            <p v-html="book.description"></p>
          </div>
        </div>
        <div v-if="book.authorBio" class="book-info-section-content">
          <h4 class="book-info-title">About the author</h4>
          <div class="book-author-info">
            <p v-html="book.authorBio"></p>
          </div>
        </div>
      </div>

      <!-- 分享和购买链接 -->
      <div class="book-actions-bar">
        <button type="button" name="button" class="book-action-button">
          <svg viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="action-icon-small">
            <path d="M8 2.87v12.38h1.5V2.87l2.22 2.22 1.06-1.06L8.75 0 4.72 4.03l1.06 1.06L8 2.87z" fill="currentColor"></path>
            <path d="M11.75 6.5V8H16v14.5H1.5V8h4.25V6.5H0V24h17.5V6.5h-5.75z" fill="currentColor"></path>
          </svg>
          <span>Share with friends</span>
        </button>
        <a 
          data-test-id="b-link" 
          :href="book.amazonLink || '#'" 
          class="book-action-link"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="action-icon-small">
            <path d="M22.5 16.14L23.92 6l-18.8-.81L4.92 4A4.43 4.43 0 002.51.8L.58 0 0 1.39l1.88.78a2.88 2.88 0 011.56 2.11l2.5 14.86a2.54 2.54 0 103.57 3h5.93a2.54 2.54 0 100-1.5H9.52a2.53 2.53 0 00-2.1-1.79l-.31-1.83 15.39-.88zm-4.65 4.21a1 1 0 11-.1 1.997 1 1 0 01.1-1.997zm4.36-12.92l-1 7.29-14.33.84-1.51-8.85 16.84.72zM8.14 21.4a1 1 0 11-2 0 1 1 0 012 0z" fill="currentColor"></path>
          </svg>
          <span>Buy on Amazon</span>
        </a>
      </div>
    </div>

    <!-- 相似书籍和热门书籍推荐 -->
    <section class="book-recommendations-section">
        <!-- Similar Blinks -->
        <div class="book-recommendations-block">
          <div class="book-recommendations-header">
            <div class="book-recommendations-title-group">
              <h3 class="book-recommendations-title">Similar Blinks</h3>
              <p data-test-id="book-row-subtitle" class="book-recommendations-subtitle">
                Related Blinks you might enjoy
              </p>
            </div>
          </div>
          <div class="book-recommendations-carousel">
            <button 
              data-test-id="slideLeft" 
              aria-label="slide left" 
              type="button" 
              disabled
              class="book-carousel-button book-carousel-button-left"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="carousel-icon">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="currentColor"></path>
              </svg>
            </button>
            <div class="book-recommendations-scroll">
              <a 
                v-for="similarBook in similarBooks" 
                :key="similarBook.id"
                :href="`/en/app/books/${similarBook.slug}`"
                :aria-label="similarBook.title"
                class="book-recommendation-card"
                data-test-id="item-card"
              >
                <img 
                  :src="similarBook.cover" 
                  :alt="similarBook.title" 
                  loading="lazy" 
                  class="book-recommendation-cover"
                />
                <div class="book-recommendation-info">
                  <div class="book-recommendation-title" data-test-id="title" :title="similarBook.title">
                    {{ similarBook.title }}
                  </div>
                  <div data-test-id="subtitle" :title="similarBook.author" class="book-recommendation-author">
                    {{ similarBook.author }}
                  </div>
                  <div data-test-id="description" :title="similarBook.description" class="book-recommendation-description">
                    {{ similarBook.description }}
                  </div>
                  <div class="book-recommendation-meta">
                    <div class="book-recommendation-meta-item">
                      <div class="book-recommendation-duration-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="meta-icon-small">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0h14.5v10.5H13v-9H1.5v16h7V19H0V0z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 6h-8V4.5h8V6zM11.25 9h-8V7.5h8V9zM7.25 12h-4v-1.5h4V12zM19 22.5h1.51c1.2 0 1.99-.884 1.99-1.75S21.71 19 20.51 19H19v3.5zm1.51 1.5c1.925 0 3.49-1.457 3.49-3.25s-1.565-3.25-3.49-3.25H17.5V24h3.01zM9 19H7.49c-1.2 0-1.99.884-1.99 1.75s.79 1.75 1.99 1.75H9V19zm-1.51-1.5C5.566 17.5 4 18.957 4 20.75S5.565 24 7.49 24h3.01v-6.5H7.49z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 15.466c0-3.382 2.903-5.716 6.25-5.716s6.25 2.334 6.25 5.716V18h-1.5v-2.534c0-2.384-2.051-4.216-4.75-4.216s-4.75 1.832-4.75 4.216V18h-1.5v-2.534z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <span>{{ similarBook.duration }}</span>
                    </div>
                    <div class="book-recommendation-meta-item">
                      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="meta-icon-small">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.31 9.262l-6.198.947 4.49 4.602-1.04 6.382L12 18.186l5.439 3.007-1.041-6.382 4.49-4.602-6.198-.947L12 3.53 9.31 9.262zM8.292 7.9L0 9.167l6 6.15L4.584 24 12 19.9l7.417 4.1L18 15.317l6-6.15L15.708 7.9 12 0 8.292 7.9z"></path>
                      </svg>
                      <span>{{ similarBook.rating }}</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <button 
              data-test-id="slideRight" 
              aria-label="slide right" 
              type="button" 
              class="book-carousel-button book-carousel-button-right"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="carousel-icon">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="currentColor"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Trending -->
        <div class="book-recommendations-block">
          <div class="book-recommendations-header">
            <div class="book-recommendations-title-group">
              <h3 class="book-recommendations-title">Trending</h3>
              <p data-test-id="book-row-subtitle" class="book-recommendations-subtitle">
                What's popular right now
              </p>
            </div>
          </div>
          <div class="book-recommendations-carousel">
            <button 
              data-test-id="slideLeft" 
              aria-label="slide left" 
              type="button" 
              disabled
              class="book-carousel-button book-carousel-button-left"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="carousel-icon">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="currentColor"></path>
              </svg>
            </button>
            <div class="book-recommendations-scroll">
              <a 
                v-for="trendingBook in trendingBooks" 
                :key="trendingBook.id"
                :href="`/en/app/books/${trendingBook.slug}`"
                :aria-label="trendingBook.title"
                class="book-recommendation-card"
                data-test-id="item-card"
              >
                <img 
                  :src="trendingBook.cover" 
                  :alt="trendingBook.title" 
                  loading="lazy" 
                  class="book-recommendation-cover"
                />
                <div class="book-recommendation-info">
                  <div class="book-recommendation-title" data-test-id="title" :title="trendingBook.title">
                    {{ trendingBook.title }}
                  </div>
                  <div data-test-id="subtitle" :title="trendingBook.author" class="book-recommendation-author">
                    {{ trendingBook.author }}
                  </div>
                  <div data-test-id="description" :title="trendingBook.description" class="book-recommendation-description">
                    {{ trendingBook.description }}
                  </div>
                  <div class="book-recommendation-meta">
                    <div class="book-recommendation-meta-item">
                      <div class="book-recommendation-duration-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="meta-icon-small">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0h14.5v10.5H13v-9H1.5v16h7V19H0V0z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 6h-8V4.5h8V6zM11.25 9h-8V7.5h8V9zM7.25 12h-4v-1.5h4V12zM19 22.5h1.51c1.2 0 1.99-.884 1.99-1.75S21.71 19 20.51 19H19v3.5zm1.51 1.5c1.925 0 3.49-1.457 3.49-3.25s-1.565-3.25-3.49-3.25H17.5V24h3.01zM9 19H7.49c-1.2 0-1.99.884-1.99 1.75s.79 1.75 1.99 1.75H9V19zm-1.51-1.5C5.566 17.5 4 18.957 4 20.75S5.565 24 7.49 24h3.01v-6.5H7.49z" fill="currentColor"></path>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 15.466c0-3.382 2.903-5.716 6.25-5.716s6.25 2.334 6.25 5.716V18h-1.5v-2.534c0-2.384-2.051-4.216-4.75-4.216s-4.75 1.832-4.75 4.216V18h-1.5v-2.534z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <span>{{ trendingBook.duration }}</span>
                    </div>
                    <div class="book-recommendation-meta-item">
                      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="meta-icon-small">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.31 9.262l-6.198.947 4.49 4.602-1.04 6.382L12 18.186l5.439 3.007-1.041-6.382 4.49-4.602-6.198-.947L12 3.53 9.31 9.262zM8.292 7.9L0 9.167l6 6.15L4.584 24 12 19.9l7.417 4.1L18 15.317l6-6.15L15.708 7.9 12 0 8.292 7.9z"></path>
                      </svg>
                      <span>{{ trendingBook.rating }}</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <button 
              data-test-id="slideRight" 
              aria-label="slide right" 
              type="button" 
              class="book-carousel-button book-carousel-button-right"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="carousel-icon">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z" fill="currentColor"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </template>
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
  name: 'BookDetail',
  components: {
    LazyImage
  },
  data() {
    return {
      book: null,
      similarBooks: [],
      trendingBooks: []
    }
  },
  head() {
    // 动态设置页面 head 信息
    if (!this.book) {
      return {
        title: 'Book Details | HeardBook',
        meta: [
          { hid: 'description', name: 'description', content: 'Book details page' }
        ]
      }
    }
    
    return {
      title: `${this.book.title} - ${this.book.author} | HeardBook`,
      meta: [
        { 
          hid: 'description', 
          name: 'description', 
          content: this.book.subtitle || `Read ${this.book.title} by ${this.book.author} on HeardBook` 
        },
        // Open Graph 标签（用于社交媒体分享）
        { hid: 'og:title', property: 'og:title', content: `${this.book.title} - ${this.book.author}` },
        { hid: 'og:description', property: 'og:description', content: this.book.subtitle || `Read ${this.book.title} by ${this.book.author}` },
        { hid: 'og:image', property: 'og:image', content: this.book.cover },
        { hid: 'og:type', property: 'og:type', content: 'book' },
        // Twitter Card 标签
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: `${this.book.title} - ${this.book.author}` },
        { hid: 'twitter:description', name: 'twitter:description', content: this.book.subtitle || `Read ${this.book.title} by ${this.book.author}` },
        { hid: 'twitter:image', name: 'twitter:image', content: this.book.cover }
      ]
    }
  },
  async mounted() {
    // 从路由参数获取图书slug
    const slug = this.$route.params.slug
    
    // 这里应该从API获取图书详情，暂时使用模拟数据
    await this.fetchBookDetail(slug)
    
    // 初始化相似书籍和热门书籍（模拟数据）
    this.similarBooks = [
      {
        id: 'sim-1',
        title: 'Either/Or',
        author: 'Soren Kierkegaard',
        description: 'A Fragment of Life',
        cover: 'https://images.blinkist.io/images/books/65dcf8ea5adcee00073f0114/1_1/470.jpg',
        duration: '18 min',
        rating: '4.5',
        slug: 'either-slash-or-en'
      },
      {
        id: 'sim-2',
        title: 'We Can Do Hard Things',
        author: 'Glennon Doyle',
        description: 'Answers to Life\'s 20 Questions',
        cover: 'https://images.blinkist.io/images/books/6844981b56f5e000086e2531/1_1/470.jpg',
        duration: '21 min',
        rating: '4.1',
        slug: 'we-can-do-hard-things-en'
      },
      {
        id: 'sim-3',
        title: 'Brain',
        author: 'Elizabeth R. Ricker',
        description: 'An Owner\'s Guide',
        cover: 'https://images.blinkist.io/images/books/6841c31b56f5e000086e24f9/1_1/470.jpg',
        duration: '20 min',
        rating: '4.3',
        slug: 'brain-en'
      }
    ]
    
    this.trendingBooks = [
      {
        id: 'trend-1',
        title: 'The Magic of Mindful Self-Awareness',
        author: 'Matt Tenney',
        description: 'How to Stop Overthinking, Clear Your Mind, and Be Happy (Almost) All the Time',
        cover: 'https://images.blinkist.io/images/books/687e8ebbbbd5ae0007bbd7be/1_1/470.jpg',
        duration: '22 min',
        rating: '4.4',
        slug: 'the-magic-of-mindful-self-awareness-en'
      },
      {
        id: 'trend-2',
        title: 'Confident by Choice',
        author: 'Juan Bendaña',
        description: 'The Three Small Decisions That Build Everyday Courage',
        cover: 'https://images.blinkist.io/images/books/68cd069d4786f80007bc0cb7/1_1/470.jpg',
        duration: '18 min',
        rating: '4.4',
        slug: 'confident-by-choice-en'
      },
      {
        id: 'trend-3',
        title: 'Mindset',
        author: 'Carol Dweck',
        description: 'The New Psychology of Success',
        cover: 'https://images.blinkist.io/images/books/5282429c3334640018470000/1_1/470.jpg',
        duration: '15 min',
        rating: '4.4',
        slug: 'mindset-en'
      }
    ]
  },
  methods: {
    async fetchBookDetail(slug) {
      // 模拟API调用，实际应该从后端获取
      // 这里需要根据slug查找对应的图书
      const allBooks = [
        {
          id: '1',
          title: 'Good to Great: Why Some Companies Make the Leap...And Others Don\'t',
          author: 'Jim Collins',
          subtitle: 'Learn how disciplined leadership, tough decisions, and the right people create lasting success.',
          cover: 'https://heardapp.soundems.com/o_1iau358111opr1o1a1vqo3ah1nhca.jpg',
          duration: '21 min',
          rating: '4.5',
          ratingsCount: 1035,
          keyIdeas: 7,
          format: 'Audio & text',
          sales: 9500,
          categories: [
            {
              id: 'psychology',
              name: 'Psychology',
              href: '/en/app/categories/psychology-en',
              iconPath: '<path d="M24 14.17L21.46 10v-.36A8.93 8.93 0 0020.14 5l-.22-.37h-1.28a3.07 3.07 0 00-1.06-1.09 1.5 1.5 0 01-.64-.73 3.33 3.33 0 00-3.17-2 2.15 2.15 0 01-1.13-.28 3.73 3.73 0 00-3.84 0 2.18 2.18 0 01-1.13.31 3.33 3.33 0 00-3.17 2 1.5 1.5 0 01-.64.73 3 3 0 00-1.14 1.24H1.41l-.21.39A9 9 0 000 9.64a9.26 9.26 0 003.35 7V24h1.5v-8.06l-.28-.22A7.799 7.799 0 011.5 9.64a7.26 7.26 0 01.8-3.32l16.77-.17A7.45 7.45 0 0120 9.64v.76l2.43 4h-2.71v2h-2.64v1.5h2.64v1.2a1.21 1.21 0 01-.32.76 2.37 2.37 0 01-1.75.54H12.4V24h1.5v-2.06h3.75a3.75 3.75 0 002.83-1 2.64 2.64 0 00.74-1.84v-3.2h1.5a1.229 1.229 0 001-.46 1.58 1.58 0 00.28-1.27zM5.9 3.38a1.86 1.86 0 011.77-1 3.59 3.59 0 001.91-.53 2.25 2.25 0 012.27 0 3.65 3.65 0 001.92.53 1.86 1.86 0 011.77 1 3 3 0 001 1.3l-11.82.11A2.93 2.93 0 005.9 3.38z"></path><path d="M18 9.83a.72.72 0 10-1.44-.02.72.72 0 001.44.02z"></path>'
            },
            {
              id: 'motivation',
              name: 'Motivation & Inspiration',
              href: '/en/app/categories/motivation-and-inspiration-en',
              iconPath: '<path d="M21 9a9 9 0 10-15 6.63v5.29h2.33a3.71 3.71 0 007.32 0h2.71V15.57A9.53 9.53 0 0021 9zM4.5 9a7.5 7.5 0 1115 0 7.909 7.909 0 01-2.39 5.69l-.22.21v1.11H7.45V15L7 14.51A7.42 7.42 0 014.5 9zM12 22.51a2.21 2.21 0 01-2.12-1.59h4.25A2.23 2.23 0 0112 22.51zm-4.52-3.09v-1.9h9.38v1.9z"></path><path d="M16.27 9.65h1.5a6.22 6.22 0 00-1.88-4.49 6.32 6.32 0 00-4.5-1.86v1.5a4.89 4.89 0 013.45 1.42 4.831 4.831 0 011.43 3.43zM1.04 0L.124 1.186l2.713 2.099.918-1.186zM2.29 4.82H0v1.5h2.29zM22.954-.002l-2.712 2.099.918 1.186 2.712-2.099zM24 4.82h-2.29v1.5H24z"></path>'
            },
            {
              id: 'mindfulness',
              name: 'Mindfulness & Happiness',
              href: '/en/app/categories/mindfulness-and-happiness-en',
              iconPath: '<path d="M19 17.87a7.44 7.44 0 00.51-3.79l-.06-.61-.6-.07A8.28 8.28 0 0015 14a11 11 0 00-2.48-5.34.79.79 0 00-.52-.28.73.73 0 00-.55.25 9.12 9.12 0 00-2.54 5.45 8.47 8.47 0 00-4.08-.76h-.64v.64a7.63 7.63 0 00.69 4A10.6 10.6 0 00.6 20.35l-.54.54.56.54A8.31 8.31 0 006.41 24 9.28 9.28 0 0012 21.87 8 8 0 0017.28 24a9.61 9.61 0 006.13-2.59l.53-.54-.54-.52a8.64 8.64 0 00-4.4-2.48zm-1.66-.11a8.4 8.4 0 00-2.85.68 8.249 8.249 0 00.65-2.83 5.93 5.93 0 012.86-.74 4.87 4.87 0 01-.69 2.89zM12 10.32a7.62 7.62 0 010 9.35 7.6 7.6 0 010-9.35zm-6.36 4.49a6.12 6.12 0 013.32 1 9.58 9.58 0 00.67 2.48 7.22 7.22 0 00-3.19-.58 5.14 5.14 0 01-.8-2.9zm-3.36 6.08a6.57 6.57 0 018.59 0 6.58 6.58 0 01-8.59 0zm10.87 0a6.58 6.58 0 018.6 0 6.59 6.59 0 01-8.6 0zM12.75 0h-1.5v5.62h1.5zM1.058 4.301l-1.06 1.061 3.975 3.973 1.06-1.061zM22.945 4.308L18.969 8.28l1.06 1.06 3.976-3.971z"></path>'
            },
            {
              id: 'personal-growth',
              name: 'Personal Development',
              href: '/en/app/categories/personal-growth-and-self-improvement-en',
              iconPath: '<path d="M24 24H0v-7.3h5.72l-.1-5.57h5.64V5.57h5.62V0H24zM1.5 22.51h21V1.5h-4.12v5.57h-5.62v5.57H7.15l.09 5.57H1.5z" fill="currentColor"></path>'
            }
          ],
          description: '<em>Good to Great</em> (2001) explores how some companies make the leap from good to great while others don\'t. Through rigorous research, it identifies key principles like disciplined leadership, the right people in the right seats, and confronting brutal facts while maintaining unwavering faith.',
          authorBio: 'Jim Collins is a business consultant and author known for his research on company performance and sustainability. His other works include <em>Built to Last</em> and <em>How the Mighty Fall</em>.',
          amazonLink: '/en/books-purchase/good-to-great-en'
        },
        {
          id: '2',
          title: 'Elon Musk: The Official Biography',
          author: 'Walter Isaacson',
          subtitle: 'A deep dive into Elon Musk\'s relentless ambition, risk-taking, and industry-changing innovations.',
          cover: 'https://heardapp.soundems.com/o_1irjcilmm13vg1kt0n0roak1qv2a.png',
          duration: '19 min',
          rating: '4.6',
          ratingsCount: 850,
          keyIdeas: 6,
          format: 'Audio & text',
          sales: 27200,
          categories: [
            {
              id: 'motivation',
              name: 'Motivation & Inspiration',
              href: '/en/app/categories/motivation-and-inspiration-en',
              iconPath: '<path d="M21 9a9 9 0 10-15 6.63v5.29h2.33a3.71 3.71 0 007.32 0h2.71V15.57A9.53 9.53 0 0021 9zM4.5 9a7.5 7.5 0 1115 0 7.909 7.909 0 01-2.39 5.69l-.22.21v1.11H7.45V15L7 14.51A7.42 7.42 0 014.5 9zM12 22.51a2.21 2.21 0 01-2.12-1.59h4.25A2.23 2.23 0 0112 22.51zm-4.52-3.09v-1.9h9.38v1.9z"></path><path d="M16.27 9.65h1.5a6.22 6.22 0 00-1.88-4.49 6.32 6.32 0 00-4.5-1.86v1.5a4.89 4.89 0 013.45 1.42 4.831 4.831 0 011.43 3.43zM1.04 0L.124 1.186l2.713 2.099.918-1.186zM2.29 4.82H0v1.5h2.29zM22.954-.002l-2.712 2.099.918 1.186 2.712-2.099zM24 4.82h-2.29v1.5H24z"></path>'
            },
            {
              id: 'personal-growth',
              name: 'Personal Development',
              href: '/en/app/categories/personal-growth-and-self-improvement-en',
              iconPath: '<path d="M24 24H0v-7.3h5.72l-.1-5.57h5.64V5.57h5.62V0H24zM1.5 22.51h21V1.5h-4.12v5.57h-5.62v5.57H7.15l.09 5.57H1.5z" fill="currentColor"></path>'
            }
          ],
          description: '<em>Elon Musk: The Official Biography</em> (2023) provides an in-depth look at the life and work of one of the world\'s most influential entrepreneurs. It explores his relentless drive, innovative thinking, and the challenges he faces in transforming multiple industries.',
          authorBio: 'Walter Isaacson is a biographer and journalist known for his bestselling biographies of Steve Jobs, Leonardo da Vinci, and Benjamin Franklin. He is a professor of history at Tulane University.',
          amazonLink: '/en/books-purchase/elon-musk-en'
        },
        {
          id: '3',
          title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
          author: 'Stephen R. Covey',
          subtitle: 'A guide to transforming personal effectiveness through mindset shifts and consistent habits.',
          cover: 'https://heardapp.soundems.com/o_1i91j2bi88b0pqf1va71fq0maqa.jpg',
          duration: '22 min',
          rating: '4.6',
          ratingsCount: 1200,
          keyIdeas: 7,
          format: 'Audio & text',
          sales: 1800,
          categories: [
            {
              id: 'personal-growth',
              name: 'Personal Development',
              href: '/en/app/categories/personal-growth-and-self-improvement-en',
              iconPath: '<path d="M24 24H0v-7.3h5.72l-.1-5.57h5.64V5.57h5.62V0H24zM1.5 22.51h21V1.5h-4.12v5.57h-5.62v5.57H7.15l.09 5.57H1.5z" fill="currentColor"></path>'
            },
            {
              id: 'motivation',
              name: 'Motivation & Inspiration',
              href: '/en/app/categories/motivation-and-inspiration-en',
              iconPath: '<path d="M21 9a9 9 0 10-15 6.63v5.29h2.33a3.71 3.71 0 007.32 0h2.71V15.57A9.53 9.53 0 0021 9zM4.5 9a7.5 7.5 0 1115 0 7.909 7.909 0 01-2.39 5.69l-.22.21v1.11H7.45V15L7 14.51A7.42 7.42 0 014.5 9zM12 22.51a2.21 2.21 0 01-2.12-1.59h4.25A2.23 2.23 0 0112 22.51zm-4.52-3.09v-1.9h9.38v1.9z"></path><path d="M16.27 9.65h1.5a6.22 6.22 0 00-1.88-4.49 6.32 6.32 0 00-4.5-1.86v1.5a4.89 4.89 0 013.45 1.42 4.831 4.831 0 011.43 3.43zM1.04 0L.124 1.186l2.713 2.099.918-1.186zM2.29 4.82H0v1.5h2.29zM22.954-.002l-2.712 2.099.918 1.186 2.712-2.099zM24 4.82h-2.29v1.5H24z"></path>'
            }
          ],
          description: '<em>The 7 Habits of Highly Effective People</em> (1989) presents a principle-centered approach to personal and professional effectiveness. It outlines seven habits that help individuals achieve true independence and interdependence, transforming their personal and professional lives.',
          authorBio: 'Stephen R. Covey was an American educator, author, businessman, and keynote speaker. His most popular book, <em>The 7 Habits of Highly Effective People</em>, has sold over 25 million copies worldwide.',
          amazonLink: '/en/books-purchase/7-habits-en'
        },
        {
          id: '4',
          title: 'Atomic Habits：An Easy Proven Way to Build Good Habits Break Bad Ones',
          author: 'James Clear',
          subtitle: 'An Easy Proven Way to Build Good Habits Break Bad Ones.',
          cover: 'https://heardapp.soundems.com/o_1irjchurblfg1h4n1nogv02475a.png',
          duration: '18 min',
          rating: '4.8',
          ratingsCount: 2500,
          keyIdeas: 5,
          format: 'Audio & text',
          sales: 144000,
          categories: [
            {
              id: 'personal-growth',
              name: 'Personal Development',
              href: '/en/app/categories/personal-growth-and-self-improvement-en',
              iconPath: '<path d="M24 24H0v-7.3h5.72l-.1-5.57h5.64V5.57h5.62V0H24zM1.5 22.51h21V1.5h-4.12v5.57h-5.62v5.57H7.15l.09 5.57H1.5z" fill="currentColor"></path>'
            },
            {
              id: 'psychology',
              name: 'Psychology',
              href: '/en/app/categories/psychology-en',
              iconPath: '<path d="M24 14.17L21.46 10v-.36A8.93 8.93 0 0020.14 5l-.22-.37h-1.28a3.07 3.07 0 00-1.06-1.09 1.5 1.5 0 01-.64-.73 3.33 3.33 0 00-3.17-2 2.15 2.15 0 01-1.13-.28 3.73 3.73 0 00-3.84 0 2.18 2.18 0 01-1.13.31 3.33 3.33 0 00-3.17 2 1.5 1.5 0 01-.64.73 3 3 0 00-1.14 1.24H1.41l-.21.39A9 9 0 000 9.64a9.26 9.26 0 003.35 7V24h1.5v-8.06l-.28-.22A7.799 7.799 0 011.5 9.64a7.26 7.26 0 01.8-3.32l16.77-.17A7.45 7.45 0 0120 9.64v.76l2.43 4h-2.71v2h-2.64v1.5h2.64v1.2a1.21 1.21 0 01-.32.76 2.37 2.37 0 01-1.75.54H12.4V24h1.5v-2.06h3.75a3.75 3.75 0 002.83-1 2.64 2.64 0 00.74-1.84v-3.2h1.5a1.229 1.229 0 001-.46 1.58 1.58 0 00.28-1.27zM5.9 3.38a1.86 1.86 0 011.77-1 3.59 3.59 0 001.91-.53 2.25 2.25 0 012.27 0 3.65 3.65 0 001.92.53 1.86 1.86 0 011.77 1 3 3 0 001 1.3l-11.82.11A2.93 2.93 0 005.9 3.38z"></path><path d="M18 9.83a.72.72 0 10-1.44-.02.72.72 0 001.44.02z"></path>'
            }
          ],
          description: '<em>Atomic Habits</em> (2018) offers a proven framework for building good habits and breaking bad ones. It shows how small, incremental changes can lead to remarkable results over time, emphasizing the power of systems over goals.',
          authorBio: 'James Clear is an author and speaker focused on habits, decision making, and continuous improvement. His work has been featured in the <em>New York Times</em>, <em>Time</em>, and <em>Entrepreneur</em>.',
          amazonLink: '/en/books-purchase/atomic-habits-en'
        },
        {
          id: '5',
          title: 'Rich Dad Poor Dad : What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!',
          author: 'Robert T. Kiyosaki',
          subtitle: 'What the Rich Teach Their Kids About Money--That the Poor and Middle Class Do Not!·Global Sold 40,000,000 Copies',
          cover: 'https://heardapp.soundems.com/o_1irjck315p2n184m16pr184en8la.png',
          duration: '17 min',
          rating: '4.7',
          ratingsCount: 1800,
          keyIdeas: 6,
          format: 'Audio & text',
          sales: 105000,
          categories: [
            {
              id: 'personal-growth',
              name: 'Personal Development',
              href: '/en/app/categories/personal-growth-and-self-improvement-en',
              iconPath: '<path d="M24 24H0v-7.3h5.72l-.1-5.57h5.64V5.57h5.62V0H24zM1.5 22.51h21V1.5h-4.12v5.57h-5.62v5.57H7.15l.09 5.57H1.5z" fill="currentColor"></path>'
            },
            {
              id: 'motivation',
              name: 'Motivation & Inspiration',
              href: '/en/app/categories/motivation-and-inspiration-en',
              iconPath: '<path d="M21 9a9 9 0 10-15 6.63v5.29h2.33a3.71 3.71 0 007.32 0h2.71V15.57A9.53 9.53 0 0021 9zM4.5 9a7.5 7.5 0 1115 0 7.909 7.909 0 01-2.39 5.69l-.22.21v1.11H7.45V15L7 14.51A7.42 7.42 0 014.5 9zM12 22.51a2.21 2.21 0 01-2.12-1.59h4.25A2.23 2.23 0 0112 22.51zm-4.52-3.09v-1.9h9.38v1.9z"></path><path d="M16.27 9.65h1.5a6.22 6.22 0 00-1.88-4.49 6.32 6.32 0 00-4.5-1.86v1.5a4.89 4.89 0 013.45 1.42 4.831 4.831 0 011.43 3.43zM1.04 0L.124 1.186l2.713 2.099.918-1.186zM2.29 4.82H0v1.5h2.29zM22.954-.002l-2.712 2.099.918 1.186 2.712-2.099zM24 4.82h-2.29v1.5H24z"></path>'
            }
          ],
          description: '<em>Rich Dad Poor Dad</em> (1997) challenges conventional wisdom about money and investing. Through the contrasting financial philosophies of his two "dads," Kiyosaki teaches readers how to think about money, assets, and building wealth.',
          authorBio: 'Robert T. Kiyosaki is an investor, businessman, and author. He is best known for his <em>Rich Dad Poor Dad</em> series of books, which have sold millions of copies worldwide and challenged traditional views on personal finance.',
          amazonLink: '/en/books-purchase/rich-dad-poor-dad-en'
        },
        {
          id: '6',
          title: 'Between the World and Me',
          author: 'Ta-Nehisi Coates',
          subtitle: 'A powerful exploration of race, identity, and the struggle for freedom in America.',
          cover: 'https://heardapp.soundems.com/o_1hkanghspen3njdc60qp6mina.png',
          duration: '20 min',
          rating: '4.6',
          ratingsCount: 950,
          keyIdeas: 4,
          format: 'Audio & text',
          sales: 43800,
          categories: [
            {
              id: 'psychology',
              name: 'Psychology',
              href: '/en/app/categories/psychology-en',
              iconPath: '<path d="M24 14.17L21.46 10v-.36A8.93 8.93 0 0020.14 5l-.22-.37h-1.28a3.07 3.07 0 00-1.06-1.09 1.5 1.5 0 01-.64-.73 3.33 3.33 0 00-3.17-2 2.15 2.15 0 01-1.13-.28 3.73 3.73 0 00-3.84 0 2.18 2.18 0 01-1.13.31 3.33 3.33 0 00-3.17 2 1.5 1.5 0 01-.64.73 3 3 0 00-1.14 1.24H1.41l-.21.39A9 9 0 000 9.64a9.26 9.26 0 003.35 7V24h1.5v-8.06l-.28-.22A7.799 7.799 0 011.5 9.64a7.26 7.26 0 01.8-3.32l16.77-.17A7.45 7.45 0 0120 9.64v.76l2.43 4h-2.71v2h-2.64v1.5h2.64v1.2a1.21 1.21 0 01-.32.76 2.37 2.37 0 01-1.75.54H12.4V24h1.5v-2.06h3.75a3.75 3.75 0 002.83-1 2.64 2.64 0 00.74-1.84v-3.2h1.5a1.229 1.229 0 001-.46 1.58 1.58 0 00.28-1.27zM5.9 3.38a1.86 1.86 0 011.77-1 3.59 3.59 0 001.91-.53 2.25 2.25 0 012.27 0 3.65 3.65 0 001.92.53 1.86 1.86 0 011.77 1 3 3 0 001 1.3l-11.82.11A2.93 2.93 0 005.9 3.38z"></path><path d="M18 9.83a.72.72 0 10-1.44-.02.72.72 0 001.44.02z"></path>'
            },
            {
              id: 'mindfulness',
              name: 'Mindfulness & Happiness',
              href: '/en/app/categories/mindfulness-and-happiness-en',
              iconPath: '<path d="M19 17.87a7.44 7.44 0 00.51-3.79l-.06-.61-.6-.07A8.28 8.28 0 0015 14a11 11 0 00-2.48-5.34.79.79 0 00-.52-.28.73.73 0 00-.55.25 9.12 9.12 0 00-2.54 5.45 8.47 8.47 0 00-4.08-.76h-.64v.64a7.63 7.63 0 00.69 4A10.6 10.6 0 00.6 20.35l-.54.54.56.54A8.31 8.31 0 006.41 24 9.28 9.28 0 0012 21.87 8 8 0 0017.28 24a9.61 9.61 0 006.13-2.59l.53-.54-.54-.52a8.64 8.64 0 00-4.4-2.48zm-1.66-.11a8.4 8.4 0 00-2.85.68 8.249 8.249 0 00.65-2.83 5.93 5.93 0 012.86-.74 4.87 4.87 0 01-.69 2.89zM12 10.32a7.62 7.62 0 010 9.35 7.6 7.6 0 010-9.35zm-6.36 4.49a6.12 6.12 0 013.32 1 9.58 9.58 0 00.67 2.48 7.22 7.22 0 00-3.19-.58 5.14 5.14 0 01-.8-2.9zm-3.36 6.08a6.57 6.57 0 018.59 0 6.58 6.58 0 01-8.59 0zm10.87 0a6.58 6.58 0 018.6 0 6.59 6.59 0 01-8.6 0zM12.75 0h-1.5v5.62h1.5zM1.058 4.301l-1.06 1.061 3.975 3.973 1.06-1.061zM22.945 4.308L18.969 8.28l1.06 1.06 3.976-3.971z"></path>'
            }
          ],
          description: '<em>Between the World and Me</em> (2015) is written as a letter to the author\'s son about the realities of being Black in America. It explores themes of race, identity, fear, and the struggle for freedom, offering a powerful meditation on American history and contemporary society.',
          authorBio: 'Ta-Nehisi Coates is an American author and journalist. He is a national correspondent for <em>The Atlantic</em> and has written extensively on race, culture, and politics. His work has won numerous awards including the National Book Award.',
          amazonLink: '/en/books-purchase/between-the-world-and-me-en'
        }
      ]
      
      // 根据slug查找图书（通过比较书名生成的slug）
      this.book = allBooks.find(b => createSlug(b.title) === slug) || allBooks[0]
    }
  }
}
</script>

<style scoped>
.book-detail-page {
  background: #FFFFFF;
  margin: 4rem 0 0 0 ;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", sans-serif;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .book-detail-page {
    margin: 4rem 0 0 0 ;
  }
}

.book-detail-container {
  max-width: 80rem;
  margin: 0 auto 4rem auto;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  .book-detail-container {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

/* 基本信息区域：封面 + 基本信息 */
.book-basic-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .book-basic-info {
    flex-direction: row;
    gap: 1.5rem;
  }
}

/* 封面区域 */
.book-cover-section {
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 768px) {
  .book-cover-section {
    padding-left: 0;
    padding-right: 0;
    width: 33.333333%;
    order: 1;
  }
}

.book-cover-wrapper {
  position: relative;
  max-width: 18rem;
  width: 100%;
}

.book-cover-wrapper /deep/ .lazy-image-wrapper {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 0.5rem;
}

.book-detail-cover {
  border-radius: 0.5rem;
  object-fit: contain;
}

/* 内容区域 */
.book-info-section {
  width: 100%;
}

@media (min-width: 768px) {
  .book-info-section {
    width: 66.666667%;
  }
}

.book-header-content {
  margin-left: 1rem;
  margin-right: 1rem;
}

.book-detail-title {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: #03314b;
  font-family: "CeraPro", sans-serif;
  margin: 0 0 0.5rem 0;
}

@media (min-width: 768px) {
  .book-detail-title {
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
  }
}

.book-detail-author {
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 700;
  color: #03314b;
  font-family: "CeraPro", sans-serif;
  margin: 0 0 1rem 0;
}

@media (min-width: 768px) {
  .book-detail-author {
    margin-bottom: 1.5rem;
  }
}

.book-detail-subtitle {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #3a4649;
  font-family: "CeraPro", sans-serif;
  margin: 0 0 1.5rem 0;
}

/* 移动端控制按钮 */
.book-controls-mobile {
  margin-left: 1rem;
  margin-right: 1rem;
}

@media (min-width: 768px) {
  .book-controls-mobile {
    display: none;
  }
}

.action-buttons-row {
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  gap: 0.5rem;
}

@media (min-width: 768px) {
  .action-buttons-row {
    gap: 1rem;
  }
}

.action-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex: 1 1 50%;
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  border: none;
  font-family: "CeraPro", sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  background: #03314b;
  color: white;
  transition: background-color 0.2s;
  -webkit-tap-highlight-color: transparent;
}

@media (min-width: 768px) {
  .action-button {
    max-width: 9rem;
  }
}

.action-button:hover {
  background: #042330;
  color: white;
}

.action-icon {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
}

.save-to-library-mobile {
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: #0365f2;
  justify-content: center;
}

@media (min-width: 768px) {
  .save-to-library-mobile {
    justify-content: flex-start;
    margin-left: 0;
    margin-right: 0;
  }
}

.save-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  font-family: "CeraPro", sans-serif;
  font-weight: 700;
  font-size: 1rem;
  color: #0365f2;
  cursor: pointer;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}

.save-button:hover {
  color: #0252d1;
}

/* 元信息容器 */
.book-meta-wrapper {
  width: 100%;
  border-top: 1px solid rgba(225, 231, 234, 1);
  border-bottom: 1px solid rgba(225, 231, 234, 1);
  margin-bottom: 3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

/* 元信息网格 */
.book-meta-grid {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1rem 2rem;
  width: fit-content;
}

.meta-grid-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgb(3, 49, 75);
  font-family: "CeraPro", sans-serif;
}

.meta-grid-item.row-start-2 {
  grid-row-start: 2;
}

.meta-icon {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
}

/* 桌面端控制按钮 */
.book-controls-desktop {
  display: none;
  margin-left: 1rem;
  margin-right: 1rem;
}

@media (min-width: 768px) {
  .book-controls-desktop {
    display: block;
  }
}

.save-to-library-desktop {
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  margin-right: 1rem;
  font-size: 1rem;
  font-weight: 700;
  color: #0365f2;
  justify-content: flex-start;
}

@media (min-width: 768px) {
  .save-to-library-desktop {
    margin-left: 0;
    margin-right: 0;
  }
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

/* 图书详情信息区域 */
.book-detail-info {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;
  user-select: text !important;
  -webkit-text-size-adjust: 100%;
  font-feature-settings: normal;
  font-variation-settings: normal;
  tab-size: 4;
  -webkit-tap-highlight-color: transparent;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", sans-serif;
  color: rgba(3, 49, 75, 1);
  border: 0 solid;
  box-sizing: border-box;
}

.book-info-section-content {
  width: 100%;
}

@media (min-width: 768px) {
  .book-info-section-content {
    width: 66.666667%;
  }
}

.book-info-title {
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.5rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  color: rgba(3, 49, 75, 1);
  font-family: "CeraPro", sans-serif;
}

@media (min-width: 768px) {
  .book-info-title {
    margin-bottom: 1rem;
  }
}

/* 分类标签容器 */
.book-categories-wrapper {
  width: 100%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

@media (min-width: 768px) {
  .book-categories-wrapper {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

.book-categories-scroll {
  -webkit-text-size-adjust: 100%;
  font-feature-settings: normal;
  font-variation-settings: normal;
  tab-size: 4;
  -webkit-tap-highlight-color: transparent;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", sans-serif;
  color: rgba(3, 49, 75, 1);
  border: 0 solid;
  box-sizing: border-box;
  margin-bottom: -2rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 2rem;
  flex-wrap: nowrap;
  user-select: text !important;
}

@media (min-width: 768px) {
  .book-categories-scroll {
    flex-wrap: wrap;
  }
}

.book-category-chip {
  font-family: "CeraPro", sans-serif;
  color: rgba(3, 49, 75, 1);
  display: flex;
  width: max-content;
  align-items: center;
  padding: 0.75rem 1rem;
  border: 2px solid;
  border-radius: 0.25rem;
  cursor: pointer;
  background: rgba(240, 245, 247, 1);
  border-color: rgba(255, 255, 255, 1);
  text-decoration: none;
  transition: border-color 0.2s;
  -webkit-tap-highlight-color: transparent;
}

.book-category-chip:first-child {
  margin-left: 1rem;
}

.book-category-chip:last-child {
  margin-right: 1rem;
}

@media (min-width: 768px) {
  .book-category-chip:first-child {
    margin-left: 0;
  }
  
  .book-category-chip:last-child {
    margin-right: 0;
  }
  
  .book-category-chip:hover {
    border-color: rgba(34, 197, 94, 1);
  }
}

.category-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
  color: rgba(3, 49, 75, 1);
}

.category-text {
  display: block;
  white-space: nowrap;
}

/* 图书描述 */
.book-description {
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-right: 0;
}

@media (min-width: 768px) {
  .book-description {
    padding-right: 1rem;
  }
}

.book-description p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgba(3, 49, 75, 1);
  font-family: "CeraPro", sans-serif;
}

.book-description em {
  font-style: italic;
}

/* 作者信息 */
.book-author-info {
  margin-left: 1rem;
  margin-right: 1rem;
  padding-bottom: 1.5rem;
  padding-right: 0;
}

@media (min-width: 768px) {
  .book-author-info {
    padding-bottom: 3rem;
    padding-right: 1rem;
  }
}

.book-author-info p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgba(3, 49, 75, 1);
  font-family: "CeraPro", sans-serif;
}

.book-author-info em {
  font-style: italic;
}

/* 分享和购买操作栏 */
.book-actions-bar {
  -webkit-text-size-adjust: 100%;
  font-feature-settings: normal;
  font-variation-settings: normal;
  tab-size: 4;
  -webkit-tap-highlight-color: transparent;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", sans-serif;
  border: 0 solid;
  box-sizing: border-box;
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-color: rgba(225, 231, 234, 1);
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  color: rgba(3, 101, 242, 1);
  margin-top: 0;
  user-select: text !important;
}

@media (min-width: 768px) {
  .book-actions-bar {
    flex-direction: row;
    gap: 2rem;
    width: 63%;
    margin-top: 0;
  }
}

.book-action-button,
.book-action-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-family: "CeraPro", sans-serif;
  color: rgba(3, 101, 242, 1);
  font-size: 1rem;
  line-height: 1.5rem;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  transition: color 0.2s;
}

.book-action-button:hover,
.book-action-link:hover {
  color: rgba(2, 82, 209, 1);
}

.action-icon-small {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
}

/* 推荐书籍区域 */
.book-recommendations-section {
  -webkit-text-size-adjust: 100%;
  font-feature-settings: normal;
  font-variation-settings: normal;
  tab-size: 4;
  -webkit-tap-highlight-color: transparent;
  line-height: inherit;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPro", sans-serif;
  color: rgba(3, 49, 75, 1);
  border: 0 solid;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 100%;
  max-width: 80rem;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1rem;
  user-select: text !important;
}

@media (min-width: 768px) {
  .book-recommendations-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}


.book-recommendations-block {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .book-recommendations-block {
    margin-bottom: 4rem;
  }
}

.book-recommendations-header {
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  margin-right: 1rem;
}

.book-recommendations-title-group {
  flex-grow: 1;
}

.book-recommendations-title {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  color: rgba(3, 49, 75, 1);
  font-family: "CeraPro", sans-serif;
  margin: 0 0 0.5rem 0;
}

.book-recommendations-subtitle {
  font-size: 1rem;
  line-height: 1.5rem;
  color: rgba(58, 70, 73, 1);
  font-family: "CeraPro", sans-serif;
  margin: 0;
}

.book-recommendations-carousel {
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.book-carousel-button {
  display: none;
  background: none;
  border: none;
  color: rgba(3, 101, 242, 1);
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}

.book-carousel-button:disabled {
  color: rgba(225, 231, 234, 1);
  cursor: not-allowed;
}

@media (min-width: 768px) {
  .book-carousel-button {
    display: block;
  }
}

.carousel-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.book-carousel-button-left .carousel-icon {
  transform: rotate(90deg);
}

.book-carousel-button-right .carousel-icon {
  transform: rotate(-90deg);
}

.book-recommendations-scroll {
  padding-bottom: 2rem;
  margin-bottom: -2rem;
  position: relative;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  scroll-snap-type: x mandatory;
  flex: 1;
}

@media (min-width: 768px) {
  .book-recommendations-scroll {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    overflow-x: visible;
    flex-wrap: nowrap;
  }
}

.book-recommendation-card {
  display: flex;
  border-radius: 0.25rem;
  font-family: "CeraPro", sans-serif;
  flex-shrink: 0;
  scroll-snap-align: start;
  flex-direction: column;
  width: 11rem;
  padding: 0.5rem;
  box-sizing: content-box;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.2s;
  -webkit-tap-highlight-color: transparent;
}

.book-recommendation-card:first-child {
  margin-left: 1rem;
}

.book-recommendation-card:last-child {
  margin-right: 1rem;
}

@media (min-width: 768px) {
  .book-recommendation-card {
    flex: 0 0 calc(20% - 0.8rem);
    min-width: 0;
    width: calc(20% - 0.8rem);
    max-width: calc(20% - 0.8rem);
  }
  
  .book-recommendation-card:first-child {
    margin-left: 0;
  }
  
  .book-recommendation-card:last-child {
    margin-right: 0;
  }
  
  .book-recommendation-card:hover {
    background-color: rgba(240, 245, 247, 1);
  }
}

.book-recommendation-cover {
  object-fit: contain;
  flex-shrink: 0;
  border-radius: 0.25rem;
  width: 11rem;
  height: 11rem;
}

@media (min-width: 768px) {
  .book-recommendation-cover {
    width: 100%;
    aspect-ratio: 1;
    height: auto;
  }
}

.book-recommendation-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 0.5rem;
}

.book-recommendation-title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;
  color: rgba(3, 49, 75, 1);
  font-family: "CeraPro", sans-serif;
  margin: 0;
}

.book-recommendation-author {
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 0.25rem;
  color: rgba(58, 70, 73, 1);
  font-family: "CeraPro", sans-serif;
}

.book-recommendation-description {
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 0.5rem;
  color: rgba(58, 70, 73, 1);
  font-family: "CeraPro", sans-serif;
}

.book-recommendation-meta {
  color: rgba(58, 70, 73, 1);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
}

.book-recommendation-meta-item {
  display: flex;
  gap: 0.25rem;
  align-items: center;
}

.book-recommendation-duration-icon {
  border-radius: 0.25rem;
  padding: 0.25rem;
  background-color: rgba(34, 197, 94, 0.125);
  color: rgba(58, 70, 73, 1);
}

.meta-icon-small {
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
}
</style>

