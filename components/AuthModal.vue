<template>
  <transition name="modal-fade">
    <div v-if="show" class="modal modal--auth-popup" @click.self="handleClose">
      <div class="modal__wrapper">
        <div class="modal__resizer">
          <!-- 容器高度过渡和白色遮罩逻辑 -->
          <div class="modal__container" :style="{ height: containerHeight }">
            <span class="modal__close" @click="handleClose">
              <!-- Close Icon SVG from SignUpModal.vue -->
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 12"
                   style="enable-background:new 0 0 12 12;" xml:space="preserve">
                <style type="text/css">
                  .st0 {
                    fill: #6D787E;
                  }
                </style>
                <polygon class="st0"
                         points="12,0.7 11.3,0 6,5.3 0.7,0 0,0.7 5.3,6 0,11.3 0.7,12 6,6.7 11.3,12 12,11.3 6.7,6 "/>
              </svg>
            </span>

            <!-- 白色遮罩层 -->
            <transition name="content-fade">
              <div v-if="isTransitioning" class="modal__transition-overlay"></div>
            </transition>

            <div class="modal__step" ref="modalStep">
              <transition name="content-slide" mode="out-in">
                <!-- ==================================================================================================== -->
                <!-- SIGNUP FORM (Adapted from SignUpModal.vue) -->
                <!-- ==================================================================================================== -->
                <div v-if="mode === 'signup'" key="signup" class="auth-popup-form auth-popup-form--signup">
                  <div class="auth-popup-form__container">
                    <div class="auth-popup-form__header">
                      <h3 class="auth-popup-form__headline">Sign up for Blinkist</h3>
                      <div class="auth-popup-form__subheadline"></div>
                    </div>
                    <div class="auth-popup-form__body">
                      <form @submit.prevent="handleSignup" class="signup-form">
                        <!-- Email Input -->
                        <div class="form__field signup-form__input">
                          <div class="form__field-container">
                            <input
                                type="email"
                                v-model="signupForm.email"
                                name="signup[email]"
                                placeholder="Email address"
                                required
                                class="form__input"
                            />
                          </div>
                        </div>
                        <!-- Password Input -->
                        <div class="form__field signup-form__input">
                          <div class="form__field-container">
                            <input
                                :type="showPassword ? 'text' : 'password'"
                                v-model="signupForm.password"
                                name="signup[password]"
                                placeholder="Create password"
                                required
                                minlength="8"
                                class="form__input"
                            />
                            <button
                                type="button"
                                class="form__password-toggle password-toggle"
                                @click="showPassword = !showPassword"
                            >
                              <span class="password-toggle__label password-toggle__label--show" v-if="!showPassword">
                                Show
                              </span>
                              <span class="password-toggle__label password-toggle__label--hide" v-else>
                                Hide
                              </span>
                            </button>
                          </div>
                        </div>
                        <!-- Submit Button -->
                        <button
                            type="submit"
                            class="signup-form__cta button button--full"
                        >
                          <span>Create account</span>
                        </button>
                        <!-- Separator -->
                        <div>
                          <div class="signup-form__separator">
                            <span>or</span>
                          </div>
                          <!-- Facebook Button -->
                          <button
                              type="button"
                              class="mb-4 signup-form__facebook-button button button--facebook button--full button--icon-32"
                              @click="handleFacebookSignup"
                          >
                            <img
                                src="/img/auth/facebook.svg"
                                loading="lazy"
                                alt="Facebook Icon"
                                onerror="this.style.display='none'"
                            />
                            <span>Sign up with Facebook</span>
                          </button>
                        </div>
                        <!-- Google Button -->
                        <button
                            type="button"
                            class="mb-4 signup-form__google-button button button--google button--full button--icon-32"
                            @click="handleGoogleSignup"
                        >
                          <img
                              src="/img/auth/google.svg"
                              loading="lazy"
                              alt="Google Icon"
                              onerror="this.style.display='none'"
                          />
                          <span>Sign up with Google</span>
                        </button>
                        <!-- Apple Button -->
                        <a
                            :href="appleSignupUrl"
                            class="inline-block px-4 py-3 rounded border border-black border-solid items-center justify-center no-underline outline-none cursor-pointer w-full box-border mb-4"
                        >
                          <div class="apple-button__inner flex items-center justify-center text-center">
                            <img
                                src="/img/auth/LoginWithApple.svg"
                                alt="Continue with Apple"
                                class="payment-methods__sprite"
                                style="display: block; max-width: 100%; height: auto;"
                            />
                          </div>
                        </a>
                        <!-- SSO Button -->
                        <a
                            href="/auth/b2b"
                            class="block mt-4 px-4 rounded border-none font-cera-pro font-medium text-base leading-5 text-center items-center justify-center no-underline outline-none cursor-pointer disabled:cursor-not-allowed bg-midnight text-white hover:bg-deep-black hover:text-white py-3"
                        >
                          Sign up with SSO
                        </a>
                        <!-- Legal Text -->
                        <div class="mt-4 signup-form__legal text-center">
                          Start your learning journey! By submitting, you'll get exciting email updates about our
                          products. Unsubscribe anytime via the link or
                          <a href="mailto:support@blinkist.com" target="_blank">support@blinkist.com</a>.
                          Discover more about how we protect your data in our
                          <a target="_blank" class="text-mid-grey underline" href="/privacy">Privacy Policy</a>.
                          Our <a target="_blank" href="/tos" class="text-mid-grey underline">Terms</a> apply.
                        </div>
                      </form>
                    </div>
                  </div>
                  <a
                      class="auth-popup-form__footer auth-popup-form__toggle-form"
                      href="#"
                      @click.prevent="switchToLogin"
                  >
                    Already have an account?
                  </a>
                </div>

                <!-- ==================================================================================================== -->
                <!-- LOGIN FORM (Adapted from LoginModal.vue) -->
                <!-- ==================================================================================================== -->
                <div v-else-if="mode === 'login'" key="login" class="auth-popup-form auth-popup-form--login">
                  <div class="auth-popup-form__container">
                    <div class="auth-popup-form__header">
                      <h3 class="auth-popup-form__headline">Log in to Blinkist</h3>
                      <div class="auth-popup-form__subheadline"></div>
                    </div>
                    <div class="auth-popup-form__body auth-form auth-form--login">
                      <form @submit.prevent="handleLogin" class="form auth-form__form login-form">
                        <!-- Social Logins -->
                        <div class="auth-form__social-logins">
                          <div class="auth-form__social-logins-row">
                            <!-- Facebook Button -->
                            <button
                                type="button"
                                class="auth-form__social-button button button--facebook button--icon-32"
                                aria-label="Facebook Log in"
                                @click="handleFacebookLogin"
                            >
                              <img
                                  src="/img/auth/facebook.svg"
                                  loading="lazy"
                                  alt="Facebook Icon"
                                  onerror="this.style.display='none'"
                              />
                              <span>Log in</span>
                            </button>
                            <!-- Google Button -->
                            <button
                                type="button"
                                class="auth-form__social-button button button--google button--icon-32"
                                aria-label="Google Log in"
                                @click="handleGoogleLogin"
                            >
                              <img
                                  src="/img/auth/google.svg"
                                  loading="lazy"
                                  alt="Google Icon"
                                  onerror="this.style.display='none'"
                              />
                              <span>Log in</span>
                            </button>
                          </div>
                          <div class="auth-form__social-logins-row">
                            <!-- Apple Button -->
                            <a
                                :href="appleLoginUrl"
                                class="inline-block px-4 py-3 rounded border border-black border-solid items-center justify-center no-underline outline-none cursor-pointer w-full box-border mb-4"
                            >
                              <div class="apple-button__inner flex items-center justify-center text-center">
                                <img
                                    src="/img/auth/LoginWithApple.svg"
                                    alt="Continue with Apple"
                                    class="payment-methods__sprite"
                                    style="display: block; max-width: 100%; height: auto;"
                                />
                              </div>
                            </a>
                          </div>
                        </div>

                        <div class="auth-form__separator">
                          <span>or</span>
                        </div>

                        <!-- Email Input -->
                        <div class="form__field login-form__input">
                          <div class="form__field-container">
                            <input
                                type="email"
                                v-model="loginForm.email"
                                name="login[email]"
                                placeholder="Email address"
                                required
                                class="form__input"
                            />
                          </div>
                        </div>
                        <!-- Password Input -->
                        <div class="form__field login-form__input">
                          <div class="form__field-container">
                            <input
                                :type="showPassword ? 'text' : 'password'"
                                v-model="loginForm.password"
                                name="login[password]"
                                placeholder="Password"
                                required
                                class="form__input"
                            />
                            <button
                                type="button"
                                class="form__password-toggle password-toggle"
                                @click="showPassword = !showPassword"
                            >
                              <span class="password-toggle__label password-toggle__label--show" v-if="!showPassword">
                                Show
                              </span>
                              <span class="password-toggle__label password-toggle__label--hide" v-else>
                                Hide
                              </span>
                            </button>
                          </div>
                        </div>
                        <!-- Forgot Password -->
                        <div class="login-form__forgot-password">
                          <a
                              href="#"
                              class="login-form__forgot-password-link"
                              @click.prevent="handleForgotPassword"
                          >
                            Forgot password?
                          </a>
                        </div>
                        <!-- Submit Button -->
                        <button
                            type="submit"
                            class="login-form__cta button button--full"
                        >
                          <span>Log in</span>
                        </button>
                        <!-- SSO Button -->
                        <a
                            href="/auth/b2b"
                            class="block mt-4 px-4 rounded border-none font-cera-pro font-medium text-base leading-5 text-center items-center justify-center no-underline outline-none cursor-pointer disabled:cursor-not-allowed bg-midnight text-white hover:bg-deep-black hover:text-white py-3"
                        >
                          Log in with SSO
                        </a>
                      </form>
                    </div>
                  </div>
                  <a
                      class="auth-popup-form__footer auth-popup-form__toggle-form"
                      href="#"
                      @click.prevent="switchToSignup"
                  >
                    You don't have an account?
                  </a>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AuthModal',
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    },
    initialMode: {
      type: String,
      default: 'signup', // 'signup' or 'login'
      validator: (value) => ['signup', 'login'].includes(value)
    },
    appleLoginUrl: {
      type: String,
      default: '/en/nc/apple_login?last_page_before_login='
    },
    appleSignupUrl: {
      type: String,
      // Default value from SignUpModal.vue
      default: '/en/nc/apple_login?pre_signup_data=%7B%22books_to_add%22%3A%5B%5D%2C%22categories_to_follow%22%3A%5B%5D%2C%22onboarding_user_data%22%3A%7B%22goals%22%3A%5B%5D%2C%22topics%22%3A%5B%5D%2C%22consume_types%22%3A%5B%5D%2C%22daily_reading_time%22%3A%22%22%2C%22books_per_year%22%3A0%2C%22app_usage_times%22%3A%5B%5D%2C%22books%22%3A%5B%5D%2C%22liked_books%22%3A%5B%5D%2C%22disliked_books%22%3A%5B%5D%2C%22challenge_books%22%3A%5B%5D%2C%22selected_category_groups%22%3A%5B%5D%2C%22other_goal%22%3A%22%22%7D%7D'
    }
  },
  data() {
    return {
      mode: this.initialMode,
      showPassword: false,
      isTransitioning: false,
      containerHeight: 'auto',
      signupForm: { email: '', password: '' },
      loginForm: { email: '', password: '' }
    }
  },
  watch: {
    initialMode(newMode) {
      this.mode = newMode;
    },
    mode(newMode, oldMode) {
      if (newMode !== oldMode) {
        this.handleModeTransition()
      }
    },
    show(newVal) {
      if (!newVal) {
        this.resetForms();
      } else {
        // When modal opens, ensure mode is set and height is calculated
        this.mode = this.initialMode;
        this.$nextTick(() => {
          this.updateContainerHeight();
        });
      }
    }
  },
  mounted() {
    this.updateContainerHeight()
  },
  updated() {
    // Only update height if not transitioning, to prevent flicker
    if (!this.isTransitioning) {
      this.updateContainerHeight()
    }
  },
  methods: {
    handleClose() {
      this.$emit('close');
    },
    handleModeTransition() {
      // 1. 显示白色遮罩
      this.isTransitioning = true

      // 2. 保存当前高度并固定
      const currentHeight = this.$refs.modalStep?.offsetHeight || 'auto'
      this.containerHeight = `${currentHeight}px`

      // 3. 延迟切换内容（等待遮罩出现）
      setTimeout(() => {
        // 4. 切换模式后，等待内容渲染
        this.$nextTick(() => {
          // 5. 更新容器高度到新内容的高度
          const newHeight = this.$refs.modalStep?.offsetHeight || 'auto'
          this.containerHeight = `${newHeight}px`

          // 6. 延迟隐藏白色遮罩（等待高度过渡完成）
          setTimeout(() => {
            this.isTransitioning = false
            // 7. 延迟移除固定高度，让容器自适应（等待遮罩消失）
            setTimeout(() => {
              this.containerHeight = 'auto'
            }, 300) // CSS height transition duration
          }, 150) // Content fade-out duration
        })
      }, 200) // Content fade-in duration
    },
    updateContainerHeight() {
      // 确保在非过渡状态下，容器高度始终正确
      if (!this.isTransitioning && this.$refs.modalStep) {
        this.$nextTick(() => {
          const height = this.$refs.modalStep.offsetHeight
          if (height > 0) {
            this.containerHeight = `${height}px`
          }
        })
      }
    },
    switchToLogin() {
      this.mode = 'login'
      this.$emit('mode-change', 'login')
    },
    switchToSignup() {
      this.mode = 'signup'
      this.$emit('mode-change', 'signup')
    },
    handleSignup() {
      // Validate form
      if (!this.signupForm.email || !this.signupForm.password) {
        this.$emit('error', 'Please fill in all fields');
        return;
      }
      this.$emit('signup', this.signupForm);
    },
    handleLogin() {
      // Validate form
      if (!this.loginForm.email || !this.loginForm.password) {
        this.$emit('error', 'Please fill in all fields');
        return;
      }
      this.$emit('login', this.loginForm);
    },
    handleFacebookSignup() {
      this.$emit('facebook-signup');
    },
    handleGoogleSignup() {
      this.$emit('google-signup');
    },
    handleFacebookLogin() {
      this.$emit('facebook-login');
    },
    handleGoogleLogin() {
      this.$emit('google-login');
    },
    handleForgotPassword() {
      this.$emit('forgot-password');
    },
    resetForms() {
      this.signupForm = { email: '', password: '' };
      this.loginForm = { email: '', password: '' };
      this.showPassword = false;
    }
  }
}
</script>

<style scoped>
/* ==================================================================================================== */
/* FONT DEFINITIONS (From SignUpModal.vue) */
/* ==================================================================================================== */
@font-face {
  font-display: swap;
  font-family: "CeraPRO-Medium";
  font-weight: 500;
  src: url(https://static-cdn.blinkist.com/webfonts/323ED8_1_0.woff2) format("woff2"),
  url(https://static-cdn.blinkist.com/webfonts/323ED8_1_0.woff) format("woff");
}

@font-face {
  font-display: swap;
  font-family: "CeraPRO-Regular";
  font-weight: 400;
  src: url(https://static-cdn.blinkist.com/webfonts/323ED8_3_0.woff2) format("woff2"),
  url(https://static-cdn.blinkist.com/webfonts/323ED8_3_0.woff) format("woff");
}

/* ==================================================================================================== */
/* MODAL BASE STYLES (Consolidated from both modals) */
/* ==================================================================================================== */

/* Modal Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-active .modal__container,
.modal-fade-leave-active .modal__container {
  transition: transform 0.3s ease;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter .modal__container,
.modal-fade-leave-to .modal__container {
  transform: scale(0.95);
}

/* Modal Container */
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  display: flex;
  overflow: hidden;
  background: rgba(58, 70, 73, .7);
  font-family: "CeraPRO-Regular", sans-serif, arial;
}

.modal__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 392px;
  margin: auto;
  padding: 4rem 0;
  line-height: 1.1875rem;
  color: #042330;
  font-size: 1rem;
  font-family: "CeraPRO-Regular", sans-serif, arial;
  -webkit-font-smoothing: antialiased;
}

.modal__resizer {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 容器高度过渡 */
.modal__container {
  position: relative;
  z-index: 1;
  width: 392px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  background-color: #fff;
  border-radius: 0.25rem 0.25rem 0 0;
  overflow: hidden;
  box-sizing: border-box;
  line-height: 1.1875rem;
  color: #042330;
  font-size: 1rem;
  transition: height 0.3s ease; /* Added height transition */
}

.modal__close {
  position: absolute;
  z-index: 2;
  top: .5rem;
  right: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: .75rem;
  height: .75rem;
  padding: 1rem;
  cursor: pointer;
  box-sizing: content-box;
}

.modal__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 4rem 0 0;
  min-height: 100%; /* Added min-height for height calculation */
}

/* ==================================================================================================== */
/* TRANSITION STYLES (From pasted_content.txt) */
/* ==================================================================================================== */

/* 白色遮罩层 */
.modal__transition-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  z-index: 10;
  pointer-events: none;
}

/* 内容切换过渡 */
.content-slide-enter-active,
.content-slide-leave-active {
  transition: opacity 0.2s ease;
}

.content-slide-enter,
.content-slide-leave-to {
  opacity: 0;
}

/* 白色遮罩过渡 */
.content-fade-enter-active,
.content-fade-leave-active {
  transition: opacity 0.2s ease;
}

.content-fade-enter,
.content-fade-leave-to {
  opacity: 0;
}

/* ==================================================================================================== */
/* FORM STYLES (Consolidated and adapted from both modals) */
/* ==================================================================================================== */

.auth-popup-form {
  width: 100%;
}

.auth-popup-form__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 3rem;
  box-sizing: border-box;
  font-family: "CeraPRO", sans-serif;
}

.auth-popup-form__header {
  text-align: center;
  margin-bottom: 2rem;
}

.auth-popup-form__headline {
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
}

.auth-popup-form__body {
  width: 100%;
}

.signup-form, .login-form {
  width: 100%;
  padding-bottom: 2rem;
}

.form__field {
  margin-bottom: 1.5rem;
}

.form__field-container {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  border: 2px solid #bac8ce;
  border-radius: 0.25rem;
  background-color: #ffffff;
  transition: border-color 0.2s ease;
  display: flex;
  align-items: center;
}

.form__field-container:focus-within {
  border-color: #2ce080;
}

.form__input {
  flex: 1;
  min-width: 0;
  height: 1.25rem;
  padding: 0.625rem 0.875rem;
  color: #042330;
  font-size: 1rem;
  font-weight: 500;
  font-family: "CeraPRO-Medium", "CeraPRO", sans-serif;
  line-height: 1.25rem;
  background-color: transparent;
  border: none;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.form__input::placeholder {
  color: #bac8ce;
  font-weight: 400;
}

.form__password-toggle {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  align-self: center;
  margin-right: .875rem;
  padding: 0;
  font-family: "CeraPRO", sans-serif;
  font-size: .875rem;
  font-weight: 500;
  line-height: 1.57;
  color: #6d787e;
  background: none;
  border: 0;
  outline: 0;
  cursor: pointer;
  appearance: none;
}

.password-toggle__label {
  display: block;
  font-family: "CeraPRO", sans-serif;
  font-size: .875rem;
  font-weight: 500;
  line-height: 1.57;
  color: #6d787e;
  cursor: pointer;
}

.signup-form__cta, .login-form__cta {
  margin-top: 1rem;
}

/* Separator Styles */
.signup-form__separator {
  position: relative;
  width: 100%;
  margin: 2rem 0;
  padding: 0;
  font-family: "CeraPRO", sans-serif;
  font-size: .875rem;
  line-height: .0625rem;
  color: #6d787e;
  text-align: center;
  border-bottom: .0625rem solid #bac8ce;
}

.signup-form__separator::before {
  display: none;
}

.signup-form__separator span {
  position: relative;
  background: #fff;
  padding: 0 1rem;
  font-size: .875rem;
  font-family: "CeraPRO-Medium", "CeraPRO", sans-serif;
  font-weight: 500;
}

/* Auth Form Separator (More detailed from SignUpModal) */
.auth-form__separator {
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPRO", sans-serif;
  box-sizing: inherit;
  font-size: 0.875rem;
  line-height: 1.57;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: #3A4649;
  margin: 1.5rem 0;
  user-select: text !important;
  position: relative;
  width: 100%;
  padding: 0;
  text-align: center;
}

.auth-form__separator::before,
.auth-form__separator::after {
  content: "";
  display: block;
  flex-grow: 1;
  height: 1px;
  background-color: rgb(186, 200, 206);
  background-attachment: scroll;
  background-clip: border-box;
  background-image: none;
  background-origin: padding-box;
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat: repeat;
  background-size: auto;
  box-sizing: content-box;
  color: rgb(58, 70, 73);
  font-family: "CeraPRO", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 21.98px;
  user-select: text;
  -webkit-font-smoothing: antialiased;
}

.auth-form__separator span {
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPRO", sans-serif;
  font-size: 0.875rem;
  line-height: 1.57;
  font-weight: 500;
  color: #3A4649;
  box-sizing: inherit;
  margin: 0 2rem;
  user-select: text !important;
  position: relative;
  background: #fff;
}

/* Button Base Styles */
.button {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  font-family: "CeraPRO", sans-serif;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0.6875rem 1rem 0.8125rem;
  text-align: center;
  text-decoration: none;
  border-radius: 0.25rem;
  outline: none;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease;
  border: 0.125rem solid transparent;
}

.button--full {
  width: 100%;
}

.button--facebook,
.button--google {
  position: relative;
  margin-bottom: 1rem;
  padding: .6875rem 1rem .8125rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  color: #fff;
  border-radius: .25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
}

.button--facebook {
  background-color: #3a579d;
  border: #3a579d .125rem solid;
}

.button--facebook:hover {
  background-color: #2d4373;
  border-color: #2d4373;
}

.button--google {
  background-color: #4285F4;
  border: #4285F4 .125rem solid;
}

.button--google:hover {
  background-color: #357ae8;
  border-color: #357ae8;
}

.button--icon-32 img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.button--facebook img {
  position: absolute;
  top: 50%;
  left: 1rem;
  height: 1.5rem;
  transform: translateY(-50%);
  pointer-events: none;
}

.button--google img {
  position: absolute;
  top: 50%;
  left: .0625rem;
  height: 2.5rem;
  transform: translateY(-50%);
  pointer-events: none;
}

/* Primary Button (Signup/Login Submit) */
.signup-form__cta,
.login-form__cta {
  background-color: #2ce080;
  border-color: #2ce080;
  color: #03314b;
}

.signup-form__cta:hover,
.login-form__cta:hover {
  opacity: 0.9;
}

/* Auth Form Social Buttons */
.auth-form__social-logins {
  margin-bottom: 1.5rem;
}

.auth-form__social-logins-row {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.auth-form__social-logins-row:last-child {
  margin-bottom: 0;
}

.auth-form__social-button {
  flex: 1;
  margin-bottom: 0;
}

/* Social Button Styles (for login form) */
.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 0.6875rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: opacity 0.2s ease;
  border: 0.125rem solid;
  box-sizing: border-box;
}

.social-button--facebook {
  background-color: #3a579d;
  border-color: #3a579d;
  color: #fff;
}

.social-button--facebook:hover {
  background-color: #2d4373;
  border-color: #2d4373;
  opacity: 0.9;
}

.social-button--google {
  background-color: #4285F4;
  border-color: #4285F4;
  color: #fff;
}

.social-button--google:hover {
  background-color: #357ae8;
  border-color: #357ae8;
  opacity: 0.9;
}

.social-button--sso {
  width: 100%;
  background-color: #03314b;
  border-color: #03314b;
  color: #fff;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  text-align: center;
}

.social-button--sso:hover {
  background-color: #022438;
  border-color: #022438;
  opacity: 0.9;
}

/* Footer Toggle Link */
.auth-popup-form__footer {
  display: block;
  align-self: stretch;
  margin-top: 1rem;
  padding: 1rem 0;
  font-family: "CeraPRO", sans-serif;
  color: #116be9;
  text-align: center;
  text-decoration: none;
  background-color: #F1F6F4;
  cursor: pointer;
}

.auth-popup-form__footer:hover {
  text-decoration: underline;
}

.auth-popup-form__toggle-form {
  color: #116be9;
  font-weight: 500;
}

/* Login Specific Styles */
.login-form__forgot-password {
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.login-form__forgot-password-link {
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPRO";
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  text-decoration: none;
  display: block;
  color: #116BE9;
  text-align: center;
  user-select: text !important;
  font-size: 0.875rem;
}

.login-form__forgot-password-link:hover {
  text-decoration: underline;
}

/* Legal Text */
.signup-form__legal {
  font-size: 0.75rem;
  color: #6d787e;
  line-height: 1.5;
  margin-top: 1rem;
}

.signup-form__legal a {
  color: #6d787e;
  text-decoration: underline;
}

.text-mid-grey {
  color: #6d787e;
}

.underline {
  text-decoration: underline;
}

/* Utility Classes (from SignUpModal) */
.mb-4 {
  margin-bottom: 1rem;
}

.mt-4 {
  margin-top: 1rem;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.flex {
  display: flex;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.rounded {
  border-radius: 0.25rem;
}

.border-none {
  border: none;
}

.border {
  border-width: 1px;
}

.border-black {
  border-color: #000;
}

.border-solid {
  border-style: solid;
}

.font-cera-pro {
  font-family: "CeraPRO", sans-serif;
}

.font-medium {
  font-weight: 500;
}

.text-base {
  font-size: 1rem;
}

.leading-5 {
  line-height: 1.25rem;
}

.text-center {
  text-align: center;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.no-underline {
  text-decoration: none;
}

.outline-none {
  outline: none;
}

.cursor-pointer {
  cursor: pointer;
}

.disabled\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}

.bg-midnight {
  background-color: #03314b;
}

.text-white {
  color: white;
}

.hover\:bg-deep-black:hover {
  background-color: #022438;
}

.hover\:text-white:hover {
  color: white;
}

.w-full {
  width: 100%;
}

.box-border {
  box-sizing: border-box;
}

.payment-methods__sprite {
  display: block;
}

.apple-button__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "CeraPRO", sans-serif;
  color: #116be9;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
  .modal {
    padding: 0;
    align-items: flex-start;
  }
  .modal__wrapper {
    align-items: flex-start;
    padding: 4rem 0;
    height: 100%;
  }
  .modal__container {
    border-radius: 0.25rem 0.25rem 0 0;
    height: 100%;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
  }
}
</style>
