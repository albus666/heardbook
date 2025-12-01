<template>
  <div class="settings-body">
    <!-- Settings 标题 -->
    <h1 class="settings-body__title">Settings</h1>

    <!-- Tab 导航 -->
    <nav class="settings-body__tabs">
      <NuxtLink
          to="/en/nc/settings/account"
          class="settings-body__tab"
          :class="{ 'settings-body__tab--active': currentTab === 'account' }"
      >
        Account
      </NuxtLink>
      <NuxtLink
          to="/en/nc/settings/content"
          class="settings-body__tab"
          :class="{ 'settings-body__tab--active': currentTab === 'content' }"
      >
        Content
      </NuxtLink>
      <NuxtLink
          to="/en/nc/settings/email"
          class="settings-body__tab"
          :class="{ 'settings-body__tab--active': currentTab === 'email' }"
      >
        Email Preferences
      </NuxtLink>
      <NuxtLink
          to="/en/nc/settings/connected"
          class="settings-body__tab"
          :class="{ 'settings-body__tab--active': currentTab === 'connected' }"
      >
        Connected Services
      </NuxtLink>
    </nav>

    <!-- Tab 内容区域 -->
    <div class="settings-body__content">
      <!-- Account Tab -->
      <div v-if="currentTab === 'account'" class="settings-section">
        <!-- Subscription Plans -->
        <section class="settings-section__block">
          <h2 class="settings-section__heading">Your Subscription plans</h2>
          <button class="settings-section__upgrade-btn">
            Upgrade now
          </button>
          <div class="settings-section__links">
            <a href="/en/nc/invoices" class="settings-section__link">Your invoices</a>
            <a href="/en/nc/payment-history" class="settings-section__link">Your payment history</a>
          </div>
        </section>

        <!-- Login Variants -->
        <section class="settings-section__block">
          <h2 class="settings-section__heading">Login variants</h2>
          <div class="settings-section__field">
            <label class="settings-section__label">Email:</label>
            <div class="settings-section__value">
              <span>c3322688409@163.com</span>
              <a href="/en/nc/settings/change-email" class="settings-section__action-link">
                Change email address
              </a>
            </div>
          </div>
          <div class="settings-section__field">
            <label class="settings-section__label">Password:</label>
            <div class="settings-section__value">
              <span>*******</span>
              <a href="/en/nc/settings/change-password" class="settings-section__action-link">
                Change password
              </a>
            </div>
          </div>
        </section>

        <!-- Team Subscription -->
        <section class="settings-section__block settings-section__block--highlight">
          <h3 class="settings-section__subheading">Want to share Blinkist with your team?</h3>
          <p class="settings-section__text">
            Did you know we also offer company subscriptions? Click below, or ask your Learning & Development team to get in touch, to find out how you and your team can use Blinkist to level up—personally and professionally.
          </p>
          <a href="/business" class="settings-section__learn-more">Learn more</a>
        </section>

        <!-- Delete Account -->
        <section class="settings-section__block settings-section__block--danger">
          <h2 class="settings-section__heading">Delete your account</h2>
          <p class="settings-section__text">
            Please note that deleting your account will delete all your content, your library and your completion history. Please note that deleting your account will not automatically end a purchased subscription. Please make sure to cancel your subscription first, before you delete your account. You can do so right here in your account settings.
          </p>
          <button class="settings-section__delete-btn">Delete account</button>
          <p class="settings-section__note">
            <strong>Note on Privacy:</strong> Deleting your account will also remove your associated personal data from our records. Please note that we may be legally obliged under tax and commercial law to retain certain accounting-related information (in particular invoices). It may therefore not currently be possible for us to delete all your data. However, we only store the remaining data to fulfil our legal obligations. Once these periods have expired, we will delete your remaining data immediately without you having to ask us to do so again.
          </p>
        </section>
      </div>

      <!-- Content Tab -->
      <div v-if="currentTab === 'content'" class="settings-section">
        <section class="settings-section__block">
          <h2 class="settings-section__heading">Content Preferences</h2>
          <p class="settings-section__text">Manage your content preferences here.</p>
        </section>
      </div>

      <!-- Email Preferences Tab -->
      <div v-if="currentTab === 'email'" class="settings-section">
        <section class="settings-section__block">
          <h2 class="settings-section__heading">Email Preferences</h2>
          <p class="settings-section__text">Manage your email notification preferences here.</p>
        </section>
      </div>

      <!-- Connected Services Tab -->
      <div v-if="currentTab === 'connected'" class="settings-section">
        <section class="settings-section__block">
          <h2 class="settings-section__heading">Connected Services</h2>
          <p class="settings-section__text">Manage your connected services here.</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingsBody',
  layout: 'settings',

  data() {
    return {
      currentTab: 'account'
    }
  },

  watch: {
    '$route.path': {
      immediate: true,
      handler(path) {
        if (path.includes('/content')) {
          this.currentTab = 'content'
        } else if (path.includes('/email')) {
          this.currentTab = 'email'
        } else if (path.includes('/connected')) {
          this.currentTab = 'connected'
        } else {
          this.currentTab = 'account'
        }
      }
    }
  }
}
</script>

<style scoped>
/* ========== 字体定义 ========== */
@font-face {
  font-display: swap;
  font-family: "CeraPro";
  font-weight: 700;
  src: url(https://static-cdn.blinkist.com/webfonts/323ED8_0_0.woff2) format("woff2"),
  url(https://static-cdn.blinkist.com/webfonts/323ED8_0_0.woff) format("woff");
}

@font-face {
  font-display: swap;
  font-family: "CeraPro";
  font-weight: 500;
  src: url(https://static-cdn.blinkist.com/webfonts/323ED8_1_0.woff2) format("woff2"),
  url(https://static-cdn.blinkist.com/webfonts/323ED8_1_0.woff) format("woff");
}

@font-face {
  font-display: swap;
  font-family: "CeraPro";
  font-style: italic;
  font-weight: 400;
  src: url(https://static-cdn.blinkist.com/webfonts/323ED8_2_0.woff2) format("woff2"),
  url(https://static-cdn.blinkist.com/webfonts/323ED8_2_0.woff) format("woff");
}

@font-face {
  font-display: swap;
  font-family: "CeraPro";
  font-weight: 400;
  src: url(https://static-cdn.blinkist.com/webfonts/323ED8_3_0.woff2) format("woff2"),
  url(https://static-cdn.blinkist.com/webfonts/323ED8_3_0.woff) format("woff");
}

/* ========== 全局样式 ========== */
.settings-body {
  font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 24px;
}

/* ========== 标题 ========== */
.settings-body__title {
  font-size: 32px;
  font-weight: 700;
  color: #002f54;
  margin: 0 0 32px 0;
}

/* ========== Tab 导航 ========== */
.settings-body__tabs {
  display: flex;
  gap: 0;
  border-bottom: 2px solid #e6e6e6;
  margin-bottom: 40px;
  overflow-x: auto;
}

.settings-body__tab {
  padding: 16px 24px;
  color: #002f54;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 3px solid transparent;
  margin-bottom: -2px;
  transition: border-color 0.2s ease, color 0.2s ease;
  white-space: nowrap;
}

.settings-body__tab:hover {
  color: #2cde80;
}

.settings-body__tab--active {
  border-bottom-color: #2cde80;
  color: #002f54;
  font-weight: 700;
}

/* ========== 内容区域 ========== */
.settings-body__content {
  min-height: 400px;
}

/* ========== Section 样式 ========== */
.settings-section {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.settings-section__block {
  padding: 32px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
}

.settings-section__block--highlight {
  background-color: #f0f9ff;
  border-color: #2cde80;
}

.settings-section__block--danger {
  background-color: #fff5f5;
  border-color: #ff6b6b;
}

.settings-section__heading {
  font-size: 24px;
  font-weight: 700;
  color: #002f54;
  margin: 0 0 24px 0;
}

.settings-section__subheading {
  font-size: 20px;
  font-weight: 700;
  color: #002f54;
  margin: 0 0 16px 0;
}

.settings-section__text {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin: 0 0 16px 0;
}

.settings-section__note {
  font-size: 14px;
  line-height: 1.6;
  color: #666;
  margin: 16px 0 0 0;
}

/* ========== Upgrade Button ========== */
.settings-section__upgrade-btn {
  background-color: #2cde80;
  color: #002f54;
  border: none;
  padding: 16px 32px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: opacity 0.2s ease;
  width: 100%;
  max-width: 300px;
  margin-bottom: 24px;
}

.settings-section__upgrade-btn:hover {
  opacity: 0.9;
}

/* ========== Links ========== */
.settings-section__links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.settings-section__link {
  color: #0066cc;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.2s ease;
}

.settings-section__link:hover {
  opacity: 0.7;
  text-decoration: underline;
}

/* ========== Field 样式 ========== */
.settings-section__field {
  margin-bottom: 24px;
}

.settings-section__label {
  display: block;
  font-size: 14px;
  font-weight: 700;
  color: #666;
  margin-bottom: 8px;
}

.settings-section__value {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.settings-section__value span {
  font-size: 16px;
  color: #002f54;
}

.settings-section__action-link {
  color: #0066cc;
  text-decoration: none;
  font-size: 16px;
  transition: opacity 0.2s ease;
}

.settings-section__action-link:hover {
  opacity: 0.7;
  text-decoration: underline;
}

/* ========== Learn More Link ========== */
.settings-section__learn-more {
  display: inline-block;
  color: #0066cc;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: opacity 0.2s ease;
}

.settings-section__learn-more:hover {
  opacity: 0.7;
  text-decoration: underline;
}

/* ========== Delete Button ========== */
.settings-section__delete-btn {
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: opacity 0.2s ease;
  margin-bottom: 16px;
}

.settings-section__delete-btn:hover {
  opacity: 0.9;
}

/* ========== 响应式 ========== */
@media (max-width: 768px) {
  .settings-body {
    padding: 24px 16px;
  }

  .settings-body__title {
    font-size: 28px;
    margin-bottom: 24px;
  }

  .settings-body__tabs {
    margin-bottom: 24px;
  }

  .settings-body__tab {
    padding: 12px 16px;
    font-size: 14px;
  }

  .settings-section {
    gap: 24px;
  }

  .settings-section__block {
    padding: 24px 16px;
  }

  .settings-section__heading {
    font-size: 20px;
    margin-bottom: 16px;
  }

  .settings-section__subheading {
    font-size: 18px;
  }

  .settings-section__text {
    font-size: 14px;
  }

  .settings-section__upgrade-btn {
    max-width: 100%;
  }

  .settings-section__value {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>
