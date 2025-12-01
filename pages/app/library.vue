<template>
  <div class="library-page">
    <section class="library-section">
      <!-- Saved Section -->
      <div class="library-section-item">
        <div class="section-header">
          <div class="section-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="section-icon">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25.25h17.5v23.461l-8.717-8.034L3.25 23.7V.25zm1.5 1.5v18.549l7.288-6.658 7.212 6.648V1.75H4.75z" fill="currentColor"></path>
            </svg>
          </div>
          <div class="section-header-content">
            <h3 class="section-title">Saved</h3>
            <p class="section-subtitle" data-test-id="book-row-subtitle">0 items</p>
          </div>
        </div>
        <div class="empty-state-container">
          <section class="empty-state-section">
            <div class="empty-state-content">
              <div class="empty-state-box">
                <div class="empty-state-title">Powerful ideas at your fingertips</div>
                <div class="empty-state-description">
                  Try to find your next read via the <a href="/app/for-you" class="empty-state-link">For You</a> page
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <!-- Finished Section -->
      <div class="library-section-item">
        <div class="section-header">
          <div class="section-icon-wrapper">
            <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="section-icon">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.14 7.63V2.51A2.51 2.51 0 0016.63 0H2.51A2.51 2.51 0 000 2.51v14.06a2.51 2.51 0 002.51 2.51h5A8.66 8.66 0 1019.14 7.63zm-16.63 10a1 1 0 01-1-1V2.51a1 1 0 011-1h14.12a1 1 0 011 1v4.56a8.62 8.62 0 00-10.94 8.32c.006.74.11 1.477.31 2.19l-4.49.05zm12.85 5a7.189 7.189 0 117.22-7.19 7.2 7.2 0 01-7.22 7.14v.05z" fill="currentColor"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.56 16.41l-1.59-1.57-1.02 1.02 2.61 2.6 5.08-5.07-1.02-1.02-4.06 4.04z" fill="currentColor"></path>
            </svg>
          </div>
          <div class="section-header-content">
            <h3 class="section-title">Finished</h3>
            <p class="section-subtitle" data-test-id="book-row-subtitle">0 items</p>
          </div>
        </div>
        <div class="empty-state-container">
          <section class="empty-state-section">
            <div class="empty-state-content">
              <div class="empty-state-box">
                <div class="empty-state-title">Done and dusted!</div>
                <div class="empty-state-description">
                  When you finish a title, you can find it here later.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LibraryPage',
  layout: 'app'
}
</script>

<style scoped>
.library-page {
  min-height: 100vh;
  box-sizing: border-box;
}

.library-section {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 1.5rem;
  max-width: 80rem;
  margin: 0 auto;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .library-section {
    padding-top: 4rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

.library-section-item {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
  box-sizing: border-box;
}

@media (min-width: 768px) {
  .library-section-item {
    margin-bottom: 4rem;
  }
}

.section-header {
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  box-sizing: border-box;
}

.section-icon-wrapper {
  background-color: #f1f6f4; /* bg-pale-mint-grey */
  width: 3rem; /* w-12 */
  height: 3rem; /* h-12 */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
}

.section-icon {
  width: 1.5rem; /* w-6 */
  height: 1.5rem; /* h-6 */
  color: #03314b; /* text-midnight */
}

.section-header-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.section-title {
  color: #03314b; /* text-midnight */
  font-weight: 700;
  font-size: 1.375rem; /* text-h35 */
  line-height: 1.875rem;
  margin: 0;
  font-family: "CeraPro", sans-serif;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.section-subtitle {
  font-size: 1rem; /* text-p1 */
  line-height: 1.5rem;
  color: #3a4649; /* text-dark-grey */
  margin: 0;
  font-family: "CeraPro", sans-serif;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.empty-state-container {
  box-sizing: border-box;
}

.empty-state-section {
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
  .empty-state-section {
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
    width: 66.666667%; /* m:w-2/3 */
  }
}

.empty-state-box {
  border-radius: 1rem; /* rounded-2xl */
  background-color: #f1f6f4; /* bg-pale-mint-grey */
  padding: 1.5rem 1rem; /* px-4 py-6 */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.empty-state-title {
  color: #000000; /* text-deep-black */
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-size: 1rem; /* text-h5 */
  line-height: 1.5rem;
  font-family: "CeraPro", sans-serif;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.empty-state-description {
  color: #3a4649; /* text-dark-grey */
  margin-bottom: 0.5rem;
  font-size: 1rem; /* text-base */
  line-height: 1.5rem;
  text-align: center;
  font-family: "CeraPro", sans-serif;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.empty-state-link {
  font-weight: 700;
  color: #0365f2; /* text-blue */
  text-decoration: none;
}

.empty-state-link:hover {
  text-decoration: underline;
}
</style>
