<template>
  <transition name="login-modal-fade">
    <div v-if="show" class="login-modal login-modal--popup" @click.self="handleClose">
      <div class="login-modal__wrapper">
        <div class="login-modal__resizer">
          <div class="login-modal__container">
            <span class="login-modal__close" @click="handleClose">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 12 12"
                   style="enable-background:new 0 0 12 12;" xml:space="preserve">
                <style type="text/css">
                  .login-modal-close-icon {
                    fill: #6D787E;
                  }
                </style>
                <polygon class="login-modal-close-icon"
                         points="12,0.7 11.3,0 6,5.3 0.7,0 0,0.7 5.3,6 0,11.3 0.7,12 6,6.7 11.3,12 12,11.3 6.7,6 "/>
              </svg>
            </span>
            <div class="login-modal__step">
              <!-- Login Form -->
              <div class="login-modal-form">
                <div class="login-modal-form__container">
                  <div class="login-modal-form__header">
                    <h3 class="login-modal-form__headline">Log in to Blinkist</h3>
                  </div>
                  <div class="login-modal-form__body login-form-body">
                    <form @submit.prevent="handleLogin" class="login-form">
                      <!-- Social Logins -->
                      <div class="login-form__social-logins">
                        <div class="login-form__social-logins-row">
                          <a
                              class="social-button social-button--facebook"
                              aria-label="Facebook Log in"
                              data-action="facebook-login"
                              data-action-url="#login-popup_login_facebook_access_token"
                              href="#"
                              @click.prevent="handleFacebookLogin"
                          >
                            <span class="social-button__sprite">
                              <img
                                  src="/img/auth/facebook.svg"
                                  loading="lazy"
                                  alt="Facebook Icon"
                                  class="sprite sprite--auth-form sprite--facebook"
                                  onerror="this.style.display='none'"
                              />
                            </span>
                            <span class="social-button__label">
                              Log in
                            </span>
                          </a>
                          <a
                              href="#"
                              class="social-button social-button--google js-google-signin"
                              aria-label="Google Log in"
                              @click.prevent="handleGoogleLogin"
                          >
                            <span class="social-button__sprite">
                              <img
                                  src="/img/auth/google.svg"
                                  loading="lazy"
                                  alt="Google Icon"
                                  onerror="this.style.display='none'"
                              />
                            </span>
                            <span class="social-button__label">
                              Log in
                            </span>
                          </a>
                        </div>
                        <div class="login-form__social-logins-row">
                          <a
                              :href="appleLoginUrl"
                              class="social-button social-button--apple js-popup-login-apple-button"
                              aria-label="Apple Log In"
                              rel="nofollow"
                          >
                            <span class="social-button__label">
                              <svg xmlns="http://www.w3.org/2000/svg" width="150" height="16" viewBox="0 0 150 16" fill="none" class="sprite sprite--auth-form sprite--continue_with_apple_en">
                             <path d="M9.23269 4.208C9.14735 3.87733 9.03002 3.57333 8.88069 3.296C8.73135 3.01867 8.53935 2.77867 8.30469 2.576C8.07002 2.37333 7.79269 2.21867 7.47269 2.112C7.16335 1.99467 6.80069 1.936 6.38469 1.936C5.77669 1.936 5.24869 2.05867 4.80069 2.304C4.36335 2.54933 4.00602 2.88 3.72869 3.296C3.45135 3.70133 3.24335 4.16533 3.10469 4.688C2.97669 5.21067 2.91269 5.744 2.91269 6.288C2.91269 6.832 2.97669 7.36533 3.10469 7.888C3.24335 8.41067 3.45135 8.88 3.72869 9.296C4.00602 9.70133 4.36335 10.0267 4.80069 10.272C5.24869 10.5173 5.77669 10.64 6.38469 10.64C6.83269 10.64 7.22735 10.5653 7.56869 10.416C7.91002 10.256 8.20335 10.0427 8.44869 9.776C8.69402 9.49867 8.88602 9.17867 9.02469 8.816C9.16335 8.45333 9.25402 8.064 9.29669 7.648H11.2487C11.206 8.33067 11.0567 8.95467 10.8007 9.52C10.5554 10.0853 10.2194 10.576 9.79269 10.992C9.36602 11.3973 8.86469 11.712 8.28869 11.936C7.71269 12.16 7.07802 12.272 6.38469 12.272C5.53135 12.272 4.76335 12.1173 4.08069 11.808C3.40869 11.488 2.83802 11.056 2.36869 10.512C1.89935 9.968 1.53669 9.33333 1.28069 8.608C1.03535 7.88267 0.912688 7.10933 0.912688 6.288C0.912688 5.47733 1.03535 4.70933 1.28069 3.984C1.53669 3.25867 1.89935 2.624 2.36869 2.08C2.83802 1.536 3.40869 1.104 4.08069 0.783999C4.76335 0.464 5.53135 0.304 6.38469 0.304C7.02469 0.304 7.62735 0.394666 8.19269 0.575999C8.75802 0.746666 9.25402 1.00267 9.68069 1.344C10.118 1.67467 10.47 2.08 10.7367 2.56C11.0034 3.04 11.1687 3.58933 11.2327 4.208H9.23269ZM16.6036 12.224C15.9422 12.224 15.3502 12.1173 14.8276 11.904C14.3156 11.68 13.8782 11.376 13.5156 10.992C13.1636 10.608 12.8916 10.1493 12.6996 9.616C12.5182 9.08267 12.4276 8.496 12.4276 7.856C12.4276 7.22667 12.5182 6.64533 12.6996 6.112C12.8916 5.57867 13.1636 5.12 13.5156 4.736C13.8782 4.352 14.3156 4.05333 14.8276 3.84C15.3502 3.616 15.9422 3.504 16.6036 3.504C17.2649 3.504 17.8516 3.616 18.3636 3.84C18.8862 4.05333 19.3236 4.352 19.6756 4.736C20.0382 5.12 20.3102 5.57867 20.4916 6.112C20.6836 6.64533 20.7796 7.22667 20.7796 7.856C20.7796 8.496 20.6836 9.08267 20.4916 9.616C20.3102 10.1493 20.0382 10.608 19.6756 10.992C19.3236 11.376 18.8862 11.68 18.3636 11.904C17.8516 12.1173 17.2649 12.224 16.6036 12.224ZM16.6036 10.784C17.0089 10.784 17.3609 10.6987 17.6596 10.528C17.9582 10.3573 18.2036 10.1333 18.3956 9.856C18.5876 9.57867 18.7262 9.26933 18.8116 8.928C18.9076 8.576 18.9556 8.21867 18.9556 7.856C18.9556 7.504 18.9076 7.152 18.8116 6.8C18.7262 6.448 18.5876 6.13867 18.3956 5.872C18.2036 5.59467 17.9582 5.37067 17.6596 5.2C17.3609 5.02933 17.0089 4.944 16.6036 4.944C16.1982 4.944 15.8462 5.02933 15.5476 5.2C15.2489 5.37067 15.0036 5.59467 14.8116 5.872C14.6196 6.13867 14.4756 6.448 14.3796 6.8C14.2942 7.152 14.2516 7.504 14.2516 7.856C14.2516 8.21867 14.2942 8.576 14.3796 8.928C14.4756 9.26933 14.6196 9.57867 14.8116 9.856C15.0036 10.1333 15.2489 10.3573 15.5476 10.528C15.8462 10.6987 16.1982 10.784 16.6036 10.784ZM22.2959 3.728H24.0239V4.944L24.0559 4.976C24.3333 4.51733 24.6959 4.16 25.1439 3.904C25.5919 3.63733 26.0879 3.504 26.6319 3.504C27.5386 3.504 28.2533 3.73867 28.7759 4.208C29.2986 4.67733 29.5599 5.38133 29.5599 6.32V12H27.7359V6.8C27.7146 6.14933 27.5759 5.68 27.3199 5.392C27.0639 5.09333 26.6639 4.944 26.1199 4.944C25.8106 4.944 25.5333 5.00267 25.2879 5.12C25.0426 5.22667 24.8346 5.38133 24.6639 5.584C24.4933 5.776 24.3599 6.00533 24.2639 6.272C24.1679 6.53867 24.1199 6.82133 24.1199 7.12V12H22.2959V3.728ZM30.6514 3.728H32.0274V1.248H33.8514V3.728H35.4994V5.088H33.8514V9.504C33.8514 9.696 33.8568 9.86133 33.8674 10C33.8888 10.1387 33.9261 10.256 33.9794 10.352C34.0434 10.448 34.1341 10.5227 34.2514 10.576C34.3688 10.6187 34.5288 10.64 34.7314 10.64C34.8594 10.64 34.9874 10.64 35.1154 10.64C35.2434 10.6293 35.3714 10.608 35.4994 10.576V11.984C35.2968 12.0053 35.0994 12.0267 34.9074 12.048C34.7154 12.0693 34.5181 12.08 34.3154 12.08C33.8354 12.08 33.4461 12.0373 33.1474 11.952C32.8594 11.856 32.6301 11.7227 32.4594 11.552C32.2994 11.3707 32.1874 11.1467 32.1234 10.88C32.0701 10.6133 32.0381 10.3093 32.0274 9.968V5.088H30.6514V3.728ZM36.8596 0.575999H38.6836V2.304H36.8596V0.575999ZM36.8596 3.728H38.6836V12H36.8596V3.728ZM40.6709 3.728H42.3989V4.944L42.4309 4.976C42.7083 4.51733 43.0709 4.16 43.5189 3.904C43.9669 3.63733 44.4629 3.504 45.0069 3.504C45.9136 3.504 46.6283 3.73867 47.1509 4.208C47.6736 4.67733 47.9349 5.38133 47.9349 6.32V12H46.1109V6.8C46.0896 6.14933 45.9509 5.68 45.6949 5.392C45.4389 5.09333 45.0389 4.944 44.4949 4.944C44.1856 4.944 43.9083 5.00267 43.6629 5.12C43.4176 5.22667 43.2096 5.38133 43.0389 5.584C42.8683 5.776 42.7349 6.00533 42.6389 6.272C42.5429 6.53867 42.4949 6.82133 42.4949 7.12V12H40.6709V3.728ZM57.1224 12H55.3304V10.848H55.2984C55.0744 11.264 54.7384 11.6 54.2904 11.856C53.8531 12.1013 53.4051 12.224 52.9464 12.224C51.8584 12.224 51.0691 11.9573 50.5784 11.424C50.0984 10.88 49.8584 10.064 49.8584 8.976V3.728H51.6824V8.8C51.6824 9.52533 51.8211 10.0373 52.0984 10.336C52.3758 10.6347 52.7651 10.784 53.2664 10.784C53.6504 10.784 53.9704 10.7253 54.2264 10.608C54.4824 10.4907 54.6904 10.336 54.8504 10.144C55.0104 9.94133 55.1224 9.70133 55.1864 9.424C55.2611 9.14667 55.2984 8.848 55.2984 8.528V3.728H57.1224V12ZM64.7259 7.136C64.7046 6.848 64.6406 6.57067 64.5339 6.304C64.4379 6.03733 64.2993 5.808 64.1179 5.616C63.9473 5.41333 63.7339 5.25333 63.4779 5.136C63.2326 5.008 62.9553 4.944 62.6459 4.944C62.3259 4.944 62.0326 5.00267 61.7659 5.12C61.5099 5.22667 61.2859 5.38133 61.0939 5.584C60.9126 5.776 60.7633 6.00533 60.6459 6.272C60.5393 6.53867 60.4806 6.82667 60.4699 7.136H64.7259ZM60.4699 8.336C60.4699 8.656 60.5126 8.96533 60.5979 9.264C60.6939 9.56267 60.8326 9.824 61.0139 10.048C61.1953 10.272 61.4246 10.4533 61.7019 10.592C61.9793 10.72 62.3099 10.784 62.6939 10.784C63.2273 10.784 63.6539 10.672 63.9739 10.448C64.3046 10.2133 64.5499 9.86667 64.7099 9.408H66.4379C66.3419 9.856 66.1766 10.256 65.9419 10.608C65.7073 10.96 65.4246 11.2587 65.0939 11.504C64.7633 11.7387 64.3899 11.9147 63.9739 12.032C63.5686 12.16 63.1419 12.224 62.6939 12.224C62.0433 12.224 61.4673 12.1173 60.9659 11.904C60.4646 11.6907 60.0379 11.392 59.6859 11.008C59.3446 10.624 59.0833 10.1653 58.9019 9.632C58.7313 9.09867 58.6459 8.512 58.6459 7.872C58.6459 7.28533 58.7366 6.73067 58.9179 6.208C59.1099 5.67467 59.3766 5.21067 59.7179 4.816C60.0699 4.41067 60.4913 4.09067 60.9819 3.856C61.4726 3.62133 62.0273 3.504 62.6459 3.504C63.2966 3.504 63.8779 3.64267 64.3899 3.92C64.9126 4.18667 65.3446 4.544 65.6859 4.992C66.0273 5.44 66.2726 5.95733 66.4219 6.544C66.5819 7.12 66.6246 7.71733 66.5499 8.336H60.4699ZM71.6377 3.728H73.5737L75.1897 9.904H75.2217L76.7737 3.728H78.6137L80.1017 9.904H80.1337L81.8137 3.728H83.6697L81.0777 12H79.2057L77.6697 5.856H77.6377L76.1177 12H74.1977L71.6377 3.728ZM84.8908 0.575999H86.7148V2.304H84.8908V0.575999ZM84.8908 3.728H86.7148V12H84.8908V3.728ZM87.8702 3.728H89.2462V1.248H91.0702V3.728H92.7182V5.088H91.0702V9.504C91.0702 9.696 91.0755 9.86133 91.0862 10C91.1075 10.1387 91.1449 10.256 91.1982 10.352C91.2622 10.448 91.3529 10.5227 91.4702 10.576C91.5875 10.6187 91.7475 10.64 91.9502 10.64C92.0782 10.64 92.2062 10.64 92.3342 10.64C92.4622 10.6293 92.5902 10.608 92.7182 10.576V11.984C92.5155 12.0053 92.3182 12.0267 92.1262 12.048C91.9342 12.0693 91.7369 12.08 91.5342 12.08C91.0542 12.08 90.6649 12.0373 90.3662 11.952C90.0782 11.856 89.8489 11.7227 89.6782 11.552C89.5182 11.3707 89.4062 11.1467 89.3422 10.88C89.2889 10.6133 89.2569 10.3093 89.2462 9.968V5.088H87.8702V3.728ZM94.0303 0.575999H95.8543V4.816H95.8863C96.1103 4.44267 96.441 4.13333 96.8783 3.888C97.3263 3.632 97.8223 3.504 98.3663 3.504C99.273 3.504 99.9876 3.73867 100.51 4.208C101.033 4.67733 101.294 5.38133 101.294 6.32V12H99.4703V6.8C99.449 6.14933 99.3103 5.68 99.0543 5.392C98.7983 5.09333 98.3983 4.944 97.8543 4.944C97.545 4.944 97.2676 5.00267 97.0223 5.12C96.777 5.22667 96.569 5.38133 96.3983 5.584C96.2276 5.776 96.0943 6.00533 95.9983 6.272C95.9023 6.53867 95.8543 6.82133 95.8543 7.12V12H94.0303V0.575999ZM110.983 0.575999H113.111L117.511 12H115.367L114.295 8.976H109.735L108.663 12H106.599L110.983 0.575999ZM110.279 7.456H113.767L112.055 2.544H112.007L110.279 7.456ZM118.391 3.728H120.119V4.848H120.151C120.407 4.368 120.764 4.02667 121.223 3.824C121.681 3.61067 122.177 3.504 122.711 3.504C123.361 3.504 123.927 3.62133 124.407 3.856C124.897 4.08 125.303 4.39467 125.623 4.8C125.943 5.19467 126.183 5.65867 126.343 6.192C126.503 6.72533 126.583 7.296 126.583 7.904C126.583 8.45867 126.508 8.99733 126.359 9.52C126.22 10.0427 126.001 10.5067 125.703 10.912C125.415 11.3067 125.047 11.6267 124.599 11.872C124.151 12.1067 123.623 12.224 123.015 12.224C122.748 12.224 122.481 12.1973 122.215 12.144C121.948 12.1013 121.692 12.0267 121.447 11.92C121.201 11.8133 120.972 11.68 120.759 11.52C120.556 11.3493 120.385 11.152 120.247 10.928H120.215V15.056H118.391V3.728ZM124.759 7.872C124.759 7.49867 124.711 7.136 124.615 6.784C124.519 6.432 124.375 6.12267 124.183 5.856C123.991 5.57867 123.751 5.36 123.463 5.2C123.175 5.02933 122.844 4.944 122.471 4.944C121.703 4.944 121.121 5.21067 120.727 5.744C120.343 6.27733 120.151 6.98667 120.151 7.872C120.151 8.288 120.199 8.67733 120.295 9.04C120.401 9.392 120.556 9.696 120.759 9.952C120.961 10.208 121.201 10.4107 121.479 10.56C121.767 10.7093 122.097 10.784 122.471 10.784C122.887 10.784 123.239 10.6987 123.527 10.528C123.815 10.3573 124.049 10.1387 124.231 9.872C124.423 9.59467 124.556 9.28533 124.631 8.944C124.716 8.592 124.759 8.23467 124.759 7.872ZM128.172 3.728H129.9V4.848H129.932C130.188 4.368 130.545 4.02667 131.004 3.824C131.463 3.61067 131.959 3.504 132.492 3.504C133.143 3.504 133.708 3.62133 134.188 3.856C134.679 4.08 135.084 4.39467 135.404 4.8C135.724 5.19467 135.964 5.65867 136.124 6.192C136.284 6.72533 136.364 7.296 136.364 7.904C136.364 8.45867 136.289 8.99733 136.14 9.52C136.001 10.0427 135.783 10.5067 135.484 10.912C135.196 11.3067 134.828 11.6267 134.38 11.872C133.932 12.1067 133.404 12.224 132.796 12.224C132.529 12.224 132.263 12.1973 131.996 12.144C131.729 12.1013 131.473 12.0267 131.228 11.92C130.983 11.8133 130.753 11.68 130.54 11.52C130.337 11.3493 130.167 11.152 130.028 10.928H129.996V15.056H128.172V3.728ZM134.54 7.872C134.54 7.49867 134.492 7.136 134.396 6.784C134.3 6.432 134.156 6.12267 133.964 5.856C133.772 5.57867 133.532 5.36 133.244 5.2C132.956 5.02933 132.625 4.944 132.252 4.944C131.484 4.944 130.903 5.21067 130.508 5.744C130.124 6.27733 129.932 6.98667 129.932 7.872C129.932 8.288 129.98 8.67733 130.076 9.04C130.183 9.392 130.337 9.696 130.54 9.952C130.743 10.208 130.983 10.4107 131.26 10.56C131.548 10.7093 131.879 10.784 132.252 10.784C132.668 10.784 133.02 10.6987 133.308 10.528C133.596 10.3573 133.831 10.1387 134.012 9.872C134.204 9.59467 134.337 9.28533 134.412 8.944C134.497 8.592 134.54 8.23467 134.54 7.872ZM137.953 0.575999H139.777V12H137.953V0.575999ZM147.445 7.136C147.423 6.848 147.359 6.57067 147.253 6.304C147.157 6.03733 147.018 5.808 146.837 5.616C146.666 5.41333 146.453 5.25333 146.197 5.136C145.951 5.008 145.674 4.944 145.365 4.944C145.045 4.944 144.751 5.00267 144.485 5.12C144.229 5.22667 144.005 5.38133 143.813 5.584C143.631 5.776 143.482 6.00533 143.365 6.272C143.258 6.53867 143.199 6.82667 143.189 7.136H147.445ZM143.189 8.336C143.189 8.656 143.231 8.96533 143.317 9.264C143.413 9.56267 143.551 9.824 143.733 10.048C143.914 10.272 144.143 10.4533 144.421 10.592C144.698 10.72 145.029 10.784 145.413 10.784C145.946 10.784 146.373 10.672 146.693 10.448C147.023 10.2133 147.269 9.86667 147.429 9.408H149.157C149.061 9.856 148.895 10.256 148.661 10.608C148.426 10.96 148.143 11.2587 147.813 11.504C147.482 11.7387 147.109 11.9147 146.693 12.032C146.287 12.16 145.861 12.224 145.413 12.224C144.762 12.224 144.186 12.1173 143.685 11.904C143.183 11.6907 142.757 11.392 142.405 11.008C142.063 10.624 141.802 10.1653 141.621 9.632C141.45 9.09867 141.365 8.512 141.365 7.872C141.365 7.28533 141.455 6.73067 141.637 6.208C141.829 5.67467 142.095 5.21067 142.437 4.816C142.789 4.41067 143.21 4.09067 143.701 3.856C144.191 3.62133 144.746 3.504 145.365 3.504C146.015 3.504 146.597 3.64267 147.109 3.92C147.631 4.18667 148.063 4.544 148.405 4.992C148.746 5.44 148.991 5.95733 149.141 6.544C149.301 7.12 149.343 7.71733 149.269 8.336H143.189Z" fill="black"></path></svg>
                            </span>
                          </a>
                        </div>
                        <div class="login-form__social-logins-row">
                          <a
                              class="login-form__button login-form__button--midnight login-form__sso-button"
                              href="/auth/b2b"
                          >
                            Log in with SSO
                          </a>
                        </div>
                      </div>

                      <!-- Separator -->
                      <div class="login-form__separator">
                        <span>or</span>
                      </div>

                      <!-- Email Input -->
                      <div class="login-form__field login-form__field--text">
                        <div class="login-form__field-container">
                          <input
                              type="email"
                              v-model="loginForm.email"
                              placeholder="Email"
                              required
                              class="login-form__input"
                          />
                        </div>
                      </div>

                      <!-- Password Input -->
                      <div class="login-form__field login-form__field--password">
                        <div class="login-form__field-container">
                          <input
                              :type="showPassword ? 'text' : 'password'"
                              v-model="loginForm.password"
                              placeholder="Password"
                              required
                              class="login-form__input"
                          />
                          <button
                              type="button"
                              class="login-form__password-toggle"
                              @click="showPassword = !showPassword"
                          >
                            <span class="login-form__password-toggle-label" v-if="!showPassword">
                              Show
                            </span>
                            <span class="login-form__password-toggle-label" v-else>
                              Hide
                            </span>
                          </button>
                        </div>
                      </div>

                      <!-- Submit Button -->
                      <button type="submit" class="login-form__button login-form__button--full login-form__submit-btn">
                        <span>Log in with email</span>
                      </button>

                      <!-- Forgot Password Link -->
                      <a class="auth-form__forgot-password" href="/en/nc/forgot_password">
                        Forgot your password?
                      </a>
                    </form>
                  </div>
                </div>

                <!-- Footer Links -->
                <div class="login-modal-form__footer">
                  <a
                      href="#"
                      class="login-modal-form__toggle-form"
                      @click.prevent="switchToSignup"
                  >
                    You don't have an account?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LoginModal',
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    },
    appleLoginUrl: {
      type: String,
      default: '/en/nc/apple_login?last_page_before_login='
    }
  },
  data() {
    return {
      showPassword: false,
      loginForm: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    handleClose() {
      this.$emit('close');
    },
    handleLogin() {
      // Validate form
      if (!this.loginForm.email || !this.loginForm.password) {
        this.$emit('error', 'Please fill in all fields');
        return;
      }

      // Emit login event with credentials
      this.$emit('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      });

      // Reset form
      this.resetForm();
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
    switchToSignup() {
      this.$emit('switch-to-signup');
    },
    resetForm() {
      this.loginForm = {
        email: '',
        password: ''
      };
      this.showPassword = false;
    }
  },
  watch: {
    show(newVal) {
      if (!newVal) {
        this.resetForm();
      }
    }
  }
};
</script>

<style scoped>
/* Modal Transitions */
.login-modal-fade-enter-active,
.login-modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.login-modal-fade-enter-active .login-modal__container,
.login-modal-fade-leave-active .login-modal__container {
  transition: transform 0.3s ease;
}

.login-modal-fade-enter,
.login-modal-fade-leave-to {
  opacity: 0;
}

.login-modal-fade-enter .login-modal__container,
.login-modal-fade-leave-to .login-modal__container {
  transform: scale(0.95);
}

/* Modal Container */
.login-modal {
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

.login-modal--popup {
  /* No additional styles needed */
}

.login-modal__wrapper {
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

.login-modal__resizer {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-modal__container {
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
}

.login-modal__close {
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

.login-modal__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 4rem 0 0;
}

/* Login Modal Form */
.login-modal-form {
  width: 100%;
}

.login-modal-form__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 3rem;
  box-sizing: border-box;
  font-family: "CeraPRO", sans-serif;
}

.login-modal-form__header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-modal-form__headline {
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
}


.login-modal-form__body {
  width: 100%;
}

/* Form Styles */
.login-form {
  width: 100%;
  padding-bottom: 2rem;
}

.login-form__field {
  margin-bottom: 1.5rem;
}

.login-form__field-container {
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

.login-form__field-container:focus-within {
  border-color: #2ce080;
}

.login-form__input {
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
}

.login-form__input::placeholder {
  color: #bac8ce;
  font-weight: 400;
}

.login-form__password-toggle {
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

.login-form__password-toggle-label {
  display: block;
  font-family: "CeraPRO", sans-serif;
  font-size: .875rem;
  font-weight: 500;
  line-height: 1.57;
}

/* Submit Button */
.login-form__submit-btn {
  background-color: #2ce080;
  border-color: #2ce080;
  color: #03314b;
}

.login-form__submit-btn:hover {
  opacity: 0.9;
}

/* Forgot Password Link */
.auth-form__forgot-password {
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPRO";
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  text-decoration: none;
  display: block;
  margin-top: 1.5rem;
  color: #116BE9;
  text-align: center;
  user-select: text !important;
}

/* Social Logins */
.login-form__social-logins {
  width: 100%;
  margin-bottom: 1rem;
}

.login-form__social-logins-row {
  line-height: 1.1875rem;
  color: #042330;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  font-family: "CeraPRO";
  box-sizing: inherit;
  display: flex;
  user-select: text !important;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.login-form__social-logins-row:last-child {
  margin-bottom: 0;
}

/* Social Button in Row */
.login-form__social-logins-row .social-button {
  flex: 1;
  margin-bottom: 0;
}

/* Social Button Base */
.social-button {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: inherit;
  font-family: "CeraPRO";
  font-weight: 500;
  line-height: 1;
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 1rem;
  text-align: center;
  text-decoration: none;
  border: 0.125rem solid transparent;
  border-radius: 0.25rem;
  color: #FFFFFF;
  user-select: text !important;
}

.social-button--facebook {
  background-color: #3A579D;
  border-color: #3A579D;
}

.social-button--google {
  background-color: #4285F4;
  border-color: #4285F4;
  position: relative;
}

/* Social Button Sprite */
.social-button__sprite {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: inherit;
  font-family: "CeraPRO";
  font-weight: 500;
  line-height: 1;
  text-align: center;
  color: #FFFFFF;
  box-sizing: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  margin-left: 1rem;
  user-select: text !important;
}

.social-button__sprite img {
  display: block;
  width: auto;
  height: auto;
}

.social-button--facebook .social-button__sprite img {
  width: 10px;
  height: 18px;
}


.social-button--google .social-button__sprite {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: inherit;
  font-family: "CeraPRO";
  font-weight: 500;
  line-height: 1;
  text-align: center;
  color: #FFFFFF;
  box-sizing: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 0;
  background-color: #FFFFFF;
  border-radius: 0.25rem;
  user-select: text !important;
}

.social-button--google .social-button__sprite svg {
  width: 18px;
  height: 18px;
  display: block;
}

.social-button--apple {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: inherit;
  font-family: "CeraPRO";
  font-weight: 500;
  line-height: 1;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  text-decoration: none;
  border-radius: 0.25rem;
  display: flex;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  color: #000000;
  background-color: #FFFFFF;
  border: 0.0625rem solid #000000;
  user-select: text !important;
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-scroll-snap-strictness: proximity;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
}

.social-button--apple .social-button__label {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: inherit;
  font-family: "CeraPRO";
  font-weight: 500;
  line-height: 1;
  text-align: center;
  color: #000000;
  box-sizing: inherit;
  position: relative;
  display: flex;
  flex-grow: 0;
  justify-content: center;
  align-items: center;
  padding: 0.8125rem 0 0.6875rem;
  user-select: text !important;
}

.social-button--apple .social-button__label::before {
  content: '';
  display: block;
  width: 14px;
  height: 16px;
  position: absolute;
  top: 50%;
  left: -1.5rem;
  transform: translateY(calc(-50% - 2px));
  margin: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='16' viewBox='0 0 14 16' fill='none'%3E%3Cpath d='M13.7066 12.4689C13.4552 13.0279 13.1577 13.5424 12.813 14.0155C12.3431 14.6604 11.9584 15.1068 11.6619 15.3547C11.2023 15.7616 10.7098 15.97 10.1825 15.9818C9.8039 15.9818 9.34735 15.8781 8.81592 15.6678C8.28273 15.4584 7.79275 15.3547 7.34472 15.3547C6.87484 15.3547 6.37089 15.4584 5.83186 15.6678C5.29201 15.8781 4.85712 15.9878 4.52461 15.9986C4.01892 16.0194 3.51488 15.8051 3.01175 15.3547C2.69063 15.0851 2.28898 14.6229 1.80781 13.9681C1.29156 13.2688 0.867126 12.458 0.534618 11.5336C0.178514 10.5351 0 9.5682 0 8.63213C0 7.55987 0.240686 6.63506 0.722776 5.86007C1.10166 5.23757 1.6057 4.74652 2.23655 4.38604C2.8674 4.02556 3.54904 3.84186 4.2831 3.83011C4.68476 3.83011 5.21148 3.94971 5.86603 4.18476C6.51873 4.42061 6.93783 4.54021 7.12157 4.54021C7.25895 4.54021 7.72452 4.40036 8.51378 4.12155C9.26015 3.86299 9.89008 3.75594 10.4061 3.79811C11.8045 3.90675 12.8551 4.4374 13.5537 5.39342C12.3031 6.12288 11.6845 7.14457 11.6968 8.45525C11.708 9.47616 12.0928 10.3257 12.8489 11.0003C13.1916 11.3133 13.5742 11.5553 14 11.7272C13.9077 11.9849 13.8102 12.2318 13.7066 12.4689ZM10.4995 0.320089C10.4995 1.12027 10.1958 1.8674 9.5905 2.55893C8.86003 3.38103 7.97649 3.85608 7.01836 3.78112C7.00616 3.68512 6.99908 3.58409 6.99908 3.47792C6.99908 2.70974 7.34646 1.88765 7.96336 1.21547C8.27135 0.875134 8.66305 0.59215 9.13806 0.366409C9.61205 0.144035 10.0604 0.0210562 10.482 0C10.4944 0.10697 10.4995 0.213949 10.4995 0.320079V0.320089Z' fill='black'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.social-button--apple .social-button__label svg {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: inherit;
  font-family: "CeraPRO";
  font-weight: 500;
  line-height: 1;
  text-align: center;
  color: #000000;
  width: 150px;
  height: 16px;
  fill: none;
  box-sizing: inherit;
  user-select: text !important;
}

.sprite {
  display: block;
}

.sprite--auth-form {
  width: 100%;
  height: 100%;
}

/* Social Button Label */
.social-button__label {
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: inherit;
  font-family: "CeraPRO";
  font-weight: 500;
  line-height: 1;
  text-align: center;
  color: #FFFFFF;
  box-sizing: inherit;
  flex-grow: 1;
  padding: 0.6875rem 0 0.6875rem;
  user-select: text !important;
}

.login-form__button {
  font: inherit;
  background: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  user-select: text !important;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  color: #03314b;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0.6875rem 1rem 0.8125rem;
  font-family: inherit;
  text-align: center;
  text-decoration: none;
  background-color: #2ce080;
  border: 0.125rem solid #2ce080;
  border-radius: 0.25rem;
  outline: none;
  cursor: pointer;
  appearance: none;
  width: 100%;
}

.login-form__button--midnight {
  background-color: #03314b;
  border-color: #03314b;
  color: #fff;
  padding: 0.75rem 1rem;
}

.login-form__button--midnight:hover {
  background-color: #022a3f;
  border-color: #022a3f;
}

.login-form__button--full {
  width: 100%;
}

/* SSO Button */
.login-form__sso-button {
  width: 100%;
}

/* Separator */
.login-form__separator {
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

.login-form__separator::before {
  display: none;
}

.login-form__separator span {
  position: relative;
  background: #fff;
  padding: 0 1rem;
  font-size: .875rem;
  font-family: "CeraPRO-Medium", "CeraPRO", sans-serif;
  font-weight: 500;
}

/* Footer */
.login-modal-form__footer {
  --swiper-theme-color: #007aff;
  --swiper-navigation-size: 44px;
}

.login-modal-form__toggle-form {
  line-height: 1.1875rem;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  display: block;
  align-self: stretch;
  padding: 1rem 0;
  font-family: "CeraPRO", sans-serif;
  color: #116be9;
  text-align: center;
  text-decoration: none;
  background-color: #F1F6F4;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
  .login-modal {
    padding: 0;
    align-items: flex-start;
  }

  .login-modal__wrapper {
    align-items: flex-start;
    padding: 4rem 0;
    height: 100%;
  }

  .login-modal__container {
    border-radius: 0.25rem 0.25rem 0 0;
    height: 100%;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
  }

}
</style>
