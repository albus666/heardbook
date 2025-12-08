<template>
  <div class="auth-page">
    <!-- Main Content -->
    <div class="auth-main">
      <div class="signup-wrapper">
        <h1 class="signup-title">
          <span class="signup-title__desktop">Get unlimited access to the key ideas of<br>7,500+ non-fiction bestsellers</span>
          <span class="signup-title__mobile">Get unlimited access to the<br>key ideas of 7,500+ non-fiction bestsellers</span>
        </h1>
        
        <div class="signup-container">
          <div class="signup-left">
            <div class="auth-form">
            <!-- Email Input -->
            <div class="form-group">
              <div class="form__field-container">
                <input
                    type="email"
                    v-model="email"
                    placeholder="Email address"
                    class="form__input"
                />
              </div>
            </div>

            <!-- Password Input -->
            <div class="form-group password-group">
              <div class="form__field-container">
                <input
                    :type="showPassword ? 'text' : 'password'"
                    v-model="password"
                    placeholder="Create password"
                    class="form__input"
                />
                <button class="password-toggle" @click="showPassword = !showPassword">
                  {{ showPassword ? 'Hide' : 'Show' }}
                </button>
              </div>
            </div>

            <!-- Create Account Button -->
            <button class="button button--primary" @click="handleSignup">
              Create account
            </button>

            <!-- Divider -->
            <div class="divider">
              <span>or</span>
            </div>

            <!-- Social Signup Buttons -->
            <div class="social-buttons">
              <button class="btn-social btn-facebook">
                <svg class="icon" width="81" height="156" viewBox="0 0 81 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M52.584 155.139V84.378H76.326L79.888 56.793H52.584V39.184C52.584 31.2 54.792 25.759 66.254 25.759L80.849 25.753V1.08C78.325 0.752 69.661 0 59.577 0C38.52 0 24.104 12.853 24.104 36.452V56.793H0.290039V84.378H24.104V155.139H52.584Z" fill="white"/>
                </svg>
                Sign up with Facebook
              </button>

              <button class="btn-social btn-google">
                <svg class="icon" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="4" fill="white"/>
                  <g clip-path="url(#clip0_2:10)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.64 20.205C28.64 19.566 28.583 18.953 28.476 18.364H20V21.845H24.844C24.7438 22.3956 24.5329 22.9202 24.2242 23.387C23.9155 23.8538 23.5154 24.2532 23.048 24.561V26.82H25.956C27.658 25.253 28.64 22.945 28.64 20.205Z" fill="#4285F4"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 29C22.43 29 24.467 28.194 25.956 26.82L23.048 24.561C22.242 25.101 21.211 25.421 20 25.421C17.656 25.421 15.672 23.837 14.964 21.71H11.957V24.042C12.706 25.5329 13.8549 26.7862 15.2753 27.6618C16.6956 28.5373 18.3315 29.0007 20 29V29Z" fill="#34A853"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.964 21.71C14.7787 21.1589 14.6835 20.5815 14.682 20C14.682 19.407 14.784 18.83 14.964 18.29V15.958H11.957C11.3271 17.2122 10.9993 18.5965 11 20C11 21.452 11.348 22.827 11.957 24.042L14.964 21.71Z" fill="#FBBC05"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 14.58C21.321 14.58 22.508 15.034 23.44 15.925L26.022 13.345C24.463 11.891 22.426 11 20 11C18.3315 10.9993 16.6956 11.4627 15.2753 12.3382C13.8549 13.2138 12.706 14.4671 11.957 15.958L14.964 18.29C15.672 16.163 17.656 14.58 20 14.58Z" fill="#EA4335"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2:10">
                      <rect width="18" height="18" fill="white" transform="translate(11 11)"/>
                    </clipPath>
                  </defs>
                </svg>
                Sign up with Google
              </button>

              <a href="#" class="btn-social btn-apple">
                <img src="@/static/img/auth/LoginWithApple.svg" alt="Continue with Apple" class="btn-apple__icon">
              </a>

              <button class="btn-social btn-sso">
                Sign up with SSO
              </button>
            </div>

            <!-- Terms Text -->
            <p class="terms-text">
              Start your learning journey! By submitting, you'll get exciting email updates about our products.
              Unsubscribe anytime via the link or
              <a href="mailto:support@heardly.com">support@heardly.com</a>.
              Discover more about how we protect your data in our
              <nuxt-link to="/privacy">Privacy Policy</nuxt-link>.
              Our <nuxt-link to="/terms">Terms</nuxt-link> apply.
            </p>

            <!-- Already have account link -->
            <div class="auth-links">
              <a href="#" class="link-primary" @click.prevent="openLoginModal">
                Already have an account?
              </a>
            </div>
          </div>
        </div>

        <div class="signup-right">
          <div class="illustration">
            <img src="@/static/img/auth/girl.svg" alt="Learning illustration" />
          </div>
        </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <heri-footer />
  </div>
</template>

<script>
import HeriFooter from '@/components/heri-footer.vue'

export default {
  layout: 'auth',
  components: {
    HeriFooter
  },
  inject: ['openLoginModal'],
  data() {
    return {
      email: '',
      password: '',
      showPassword: false
    }
  },
  methods: {
    handleSignup() {
      // Signup logic here
      console.log('Signup:', this.email, this.password)
    }
  }
}
</script>

<style lang="less" scoped>
@import '~/assets/css/common.less';

.auth-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}

.auth-header {
  background: white;
  border-bottom: 1px solid #e5e7eb;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .logo {
    img {
      height: 2.5rem;
      width: auto;
    }
  }

  .explore-link {
    color: #0f2830;
    font-size: 1rem;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: #0365f2;
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .btn-trial {
    background: #03ce7c;
    color: white;
    border: none;
    padding: 0.625rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 500;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background: #02b56d;
    }
  }

  .login-link {
    color: #0f2830;
    font-weight: 500;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      color: #0365f2;
    }
  }
}

.auth-main {
  line-height: 1.1875rem;
  color: #042330;
  font-size: 1rem;
  font-family: "CeraPRO-Regular", sans-serif, arial;
  -webkit-font-smoothing: antialiased;
  padding-top: 2rem !important;
  padding-bottom: 4rem !important;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1024px;
  padding-left: 2.25rem;
  padding-right: 2.25rem;
  width: 71rem;
  user-select: text !important;
}

.signup-wrapper {
  width: 100%;
  max-width: 75rem;
  display: flex;
  flex-direction: column;
}

.signup-title {
  -webkit-font-smoothing: antialiased;
  text-align: start !important;
  margin-bottom: 0 !important;
  color: #03314b;
  font-family: CeraPro !important;
  font-weight: 700 !important;
  font-size: 2rem !important;
  line-height: 2.5rem !important;
  user-select: text !important;

  .signup-title__mobile {
    display: none;
  }
}

.signup-container {
  width: 100%;
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: start;
}

.signup-left {
  width: 41.666667% !important;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 1.5rem;
}

.form-group {
  width: 100%;
  position: relative;
  margin-bottom: 1rem;

  &.password-group {
    position: relative;
  }
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
  height: 2.5rem;
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

  &::placeholder {
    color: #bac8ce;
    font-weight: 400;
  }
}

.password-toggle {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  align-self: center;
  margin-right: 0.875rem;
  padding: 0;
  font-family: "CeraPRO", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.57;
  color: #6d787e;
  background: none;
  border: 0;
  outline: 0;
  cursor: pointer;
  appearance: none;
}

.button {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  font-family: "CeraPRO", sans-serif;
  display: inline-block;
  box-sizing: border-box;
  padding: .6875rem 1rem .8125rem;
  text-align: center;
  text-decoration: none;
  border-radius: .25rem;
  outline: none;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease;

  &.button--primary {
    color: #03314b;
    background-color: #2ce080;
    border: #2ce080 .125rem solid;

    &:hover {
      background-color: #25c972;
      border-color: #25c972;
    }
  }
}

.divider {
  position: relative;
  width: 100%;
  margin: 2rem 0;
  padding: 0;
  font-family: "CeraPRO", sans-serif;
  font-size: 0.875rem;
  line-height: 0.0625rem;
  color: #6d787e;
  text-align: center;
  border-bottom: 0.0625rem solid #bac8ce;

  &::before {
    display: none;
  }

  span {
    position: relative;
    background: #fff;
    padding: 0 1rem;
    font-size: 0.875rem;
    font-family: "CeraPRO-Medium", "CeraPRO", sans-serif;
    font-weight: 500;
  }
}

.social-buttons {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.btn-social {
  font-family: "CeraPRO", sans-serif;
  font-weight: 500;
  line-height: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 1rem;
  text-align: center;
  text-decoration: none;
  border: 0.125rem solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  color: white;
  padding: 0.6875rem 1rem 0.8125rem;
  gap: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s ease;

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  &.btn-facebook {
    background-color: #3A579D;
    border-color: #3A579D;
    position: relative;

    .icon {
      position: absolute;
      top: 50%;
      left: 1rem;
      height: 1.5rem;
      width: auto;
      transform: translateY(-50%);
      box-sizing: inherit;
      user-select: text !important;
      margin-left: 0;
    }

    &:hover {
      background-color: #2d4373;
      border-color: #2d4373;
    }
  }

  &.btn-google {
    background-color: #4285F4;
    border-color: #4285F4;
    color: #ffffff;
    position: relative;

    .icon {
      position: absolute;
      top: 50%;
      left: 0.0625rem;
      height: 2.5rem;
      width: 2.5rem;
      transform: translateY(-50%);
      box-sizing: inherit;
      user-select: text !important;
      margin-left: 0;
    }

    &:hover {
      background-color: #357ae8;
      border-color: #357ae8;
    }
  }

  &.btn-sso {
    background-color: #03314b;
    border-color: #03314b;
    margin-top: 1rem;
    margin-bottom: 0;
    padding: 0.75rem 1rem;

    &:hover {
      background-color: #022438;
      border-color: #022438;
    }
  }

  &.btn-apple {
    background-color: #ffffff;
    border: 0.0625rem solid #000000;
    color: #000000;
    position: relative;
    padding: 0.75rem 1rem;
    line-height: 18px;

    .btn-apple__icon {
      -webkit-font-smoothing: antialiased;
      font-family: "CeraPRO", sans-serif;
      -webkit-tap-highlight-color: transparent;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
      cursor: pointer !important;
      color: #0552be;
      text-align: center !important;
      box-sizing: inherit;
      user-select: text !important;
      height: 18px;
      width: auto;
      aspect-ratio: 9 / 1;
      margin: 0;
    }

    &:hover {
      background-color: #f5f5f5;
      border-color: #000000;
    }
  }
}

.terms-text {
  font-size: 0.75rem;
  font-family: "CeraPRO", sans-serif;
  color: #6b7280;
  line-height: 1.5;
  margin-top: 1rem;

  a {
    color: #0365f2;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.auth-links {
  text-align: center;
  margin-top: 2rem;

  a {
    text-decoration: none;
    font-size: 1rem;

    &.link-primary {
      color: #0365f2;
      font-weight: 400;
      font-family: "CeraPRO", sans-serif;
      text-decoration: none;

      &:hover {
        text-decoration: none;
      }
    }
  }
}

.signup-right {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 50% !important;
  text-align: initial !important;
  user-select: none !important;
  line-height: initial;
  color: initial;
  font-size: initial;
  font-family: initial;
}

.illustration {
  width: 100%;

  img {
    width: 100% !important;
    height: auto;
    border-radius: 0.5rem;
    display: block;
  }
}

@media screen and (max-width: 1024px) {
  .signup-container {
    flex-direction: column;
  }

  .signup-left {
    max-width: 100%;
    width: 100% !important;
  }

  .signup-right {
    width: 100% !important;
  }
}

@media screen and (max-width: 768px) {
  .signup-title {
    -webkit-font-smoothing: antialiased;
    text-align: center !important;
    margin-bottom: 0 !important;
    color: #03314b;
    font-family: CeraPro !important;
    font-size: 1.5rem !important;
    line-height: 2rem !important;
    font-weight: 700 !important;
    user-select: text !important;

    .signup-title__desktop {
      display: none;
    }

    .signup-title__mobile {
      display: block;
    }
  }

  .header-left {
    gap: 1rem !important;
  }

  .explore-link {
    font-size: 0.875rem;
  }

  .auth-main {
    padding-top: 2rem !important;
    padding-left: 3rem;
    padding-right: 3rem;
    width: 100%;
  }
}
</style>
