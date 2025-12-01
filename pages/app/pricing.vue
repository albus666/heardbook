<template>
  <div class="pricing-page">
    <!-- Hero 和 Plans 的父容器 -->
    <div class="pricing-main">
      <section class="pricing-container">
        <!-- 顶部标题区域 -->
        <section class="pricing-hero">
          <h1 class="pricing-title">Your growth journey starts here</h1>
        </section>

        <!-- 计划选择区域 -->
        <section class="plans-section">
          <!-- PRO 计划 -->
          <section class="plan-card plan-card--featured">
            <div class="plan-badge">
              <span>MOST POPULAR</span>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10.2501 5.08008V6.03008H10.25C10.25 7.96084 11.1927 9.91644 12.6781 11.4018C14.1635 12.8872 16.1192 13.8299 18.05 13.8299V15.3299C16.1192 15.3299 14.1635 16.2727 12.6781 17.7581C11.1927 19.2435 10.25 21.1991 10.25 23.1299H8.75C8.75 21.1991 7.80729 19.2435 6.32188 17.7581C4.83646 16.2727 2.88081 15.3299 0.95 15.3299L0.95 15.3301H0L6.55709e-08 13.8301H0.95V13.8299C2.88081 13.8299 4.83646 12.8872 6.32188 11.4018C7.80729 9.91641 8.75 7.96075 8.75 6.02995H8.75013V5.08008H10.2501ZM9.5 19.7478C10.0056 18.6159 10.7397 17.5752 11.6175 16.6974C12.4952 15.8196 13.5359 15.0856 14.6678 14.58C13.5359 14.0743 12.4952 13.3403 11.6175 12.4625C10.7397 11.5847 10.0056 10.544 9.5 9.4121C8.99437 10.544 8.26031 11.5847 7.38254 12.4625C6.50476 13.3403 5.46405 14.0743 4.33215 14.58C5.46405 15.0856 6.50476 15.8196 7.38254 16.6974C8.26031 17.5752 8.99437 18.6159 9.5 19.7478ZM10.2501 24.0802V23.1302H8.75013V24.0802H10.2501ZM18.0501 15.3301H19.0001V13.8301H18.0501V15.3301Z" fill="currentColor"></path>
                <path d="M18.7499 0.0800781V1.00316H17.2499V0.0800781H18.7499ZM12.9231 6.83018V6.83008H12V5.33008H12.9231V5.33018C13.9726 5.33018 15.06 4.81508 15.8974 3.97761C16.7349 3.14013 17.25 2.05275 17.25 1.00326H18.75C18.75 2.05275 19.2651 3.14013 20.1026 3.97761C20.94 4.81505 22.0274 5.33014 23.0768 5.33018V5.33008H23.9999V6.83008H23.0769V6.83018C22.0274 6.83018 20.94 7.34527 20.1026 8.18275C19.2651 9.02022 18.75 10.1076 18.75 11.1571H18.7499V12.08H17.2499V11.1569H17.25C17.2499 10.1075 16.7349 9.02017 15.8974 8.18275C15.06 7.34527 13.9726 6.83018 12.9231 6.83018ZM18 8.47878C18.2859 7.98134 18.6407 7.5233 19.0419 7.12209C19.4431 6.72087 19.9012 6.36603 20.3986 6.08018C19.9012 5.79433 19.4431 5.43949 19.0419 5.03827C18.6407 4.63705 18.2859 4.17902 18 3.68157C17.7141 4.17902 17.3593 4.63705 16.9581 5.03827C16.5569 5.43949 16.0988 5.79433 15.6014 6.08018C16.0988 6.36603 16.5569 6.72087 16.9581 7.12209C17.3593 7.5233 17.7141 7.98134 18 8.47878Z" fill="currentColor"></path>
              </svg>
            </div>
            <div class="plan-content">
              <div class="plan-header">
                <h2 class="plan-name">
                  <span class="plan-name-main">PRO</span>
                  <span class="plan-duration">- 12 Months</span>
                </h2>
                <div class="plan-pricing">
                  <div class="plan-price-left">
                    <div class="price-row">
                      <div>
                        <span class="sr-only">Discount price:</span>
                        <span class="price-discount">$139.99</span>
                      </div>
                      <div>
                        <span class="sr-only">Original price:</span>
                        <span class="price-original">$174.99</span>
                      </div>
                    </div>
                    <span class="price-save">Save $35.00</span>
                  </div>
                  <div class="plan-price-right" aria-label="$ 0.39 a day">
                    <span aria-hidden="true">$</span>
                    <span class="price-large" aria-hidden="true">0</span>
                    <div class="price-small" aria-hidden="true">
                      <span>.39</span>
                      <span class="price-label">a day</span>
                    </div>
                  </div>
                </div>
              </div>
              <button class="plan-button plan-button--primary">Get started</button>
              <section class="plan-features">
                <h3 class="features-title">Reach your goals faster</h3>
                <ul class="features-list">
                  <li class="feature-item">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="feature-icon">
                      <path d="M10.2501 5.08008V6.03008H10.25C10.25 7.96084 11.1927 9.91644 12.6781 11.4018C14.1635 12.8872 16.1192 13.8299 18.05 13.8299V15.3299C16.1192 15.3299 14.1635 16.2727 12.6781 17.7581C11.1927 19.2435 10.25 21.1991 10.25 23.1299H8.75C8.75 21.1991 7.80729 19.2435 6.32188 17.7581C4.83646 16.2727 2.88081 15.3299 0.95 15.3299L0.95 15.3301H0L6.55709e-08 13.8301H0.95V13.8299C2.88081 13.8299 4.83646 12.8872 6.32188 11.4018C7.80729 9.91641 8.75 7.96075 8.75 6.02995H8.75013V5.08008H10.2501ZM9.5 19.7478C10.0056 18.6159 10.7397 17.5752 11.6175 16.6974C12.4952 15.8196 13.5359 15.0856 14.6678 14.58C13.5359 14.0743 12.4952 13.3403 11.6175 12.4625C10.7397 11.5847 10.0056 10.544 9.5 9.4121C8.99437 10.544 8.26031 11.5847 7.38254 12.4625C6.50476 13.3403 5.46405 14.0743 4.33215 14.58C5.46405 15.0856 6.50476 15.8196 7.38254 16.6974C8.26031 17.5752 8.99437 18.6159 9.5 19.7478ZM10.2501 24.0802V23.1302H8.75013V24.0802H10.2501ZM18.0501 15.3301H19.0001V13.8301H18.0501V15.3301Z" fill="currentColor"></path>
                      <path d="M18.7499 0.0800781V1.00316H17.2499V0.0800781H18.7499ZM12.9231 6.83018V6.83008H12V5.33008H12.9231V5.33018C13.9726 5.33018 15.06 4.81508 15.8974 3.97761C16.7349 3.14013 17.25 2.05275 17.25 1.00326H18.75C18.75 2.05275 19.2651 3.14013 20.1026 3.97761C20.94 4.81505 22.0274 5.33014 23.0768 5.33018V5.33008H23.9999V6.83008H23.0769V6.83018C22.0274 6.83018 20.94 7.34527 20.1026 8.18275C19.2651 9.02022 18.75 10.1076 18.75 11.1571H18.7499V12.08H17.2499V11.1569H17.25C17.2499 10.1075 16.7349 9.02017 15.8974 8.18275C15.06 7.34527 13.9726 6.83018 12.9231 6.83018ZM18 8.47878C18.2859 7.98134 18.6407 7.5233 19.0419 7.12209C19.4431 6.72087 19.9012 6.36603 20.3986 6.08018C19.9012 5.79433 19.4431 5.43949 19.0419 5.03827C18.6407 4.63705 18.2859 4.17902 18 3.68157C17.7141 4.17902 17.3593 4.63705 16.9581 5.03827C16.5569 5.43949 16.0988 5.79433 15.6014 6.08018C16.0988 6.36603 16.5569 6.72087 16.9581 7.12209C17.3593 7.5233 17.7141 7.98134 18 8.47878Z" fill="currentColor"></path>
                    </svg>
                    <span><strong>Heardly AI:</strong> Summarize videos, podcasts, docs, articles & more.</span>
                  </li>
                  <li class="feature-item">
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="feature-icon">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1.23888L7.39306 12L0 5.28039L1.3222 4.07861L7.43391 9.63359L18.7199 0L20 1.23888Z" fill="currentColor"></path>
                    </svg>
                    <span>9,000+ book and podcast summaries.</span>
                  </li>
                  <li class="feature-item">
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="feature-icon">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1.23888L7.39306 12L0 5.28039L1.3222 4.07861L7.43391 9.63359L18.7199 0L20 1.23888Z" fill="currentColor"></path>
                    </svg>
                    <span>Read & listen in 15 min.</span>
                  </li>
                  <li class="feature-item">
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="feature-icon">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1.23888L7.39306 12L0 5.28039L1.3222 4.07861L7.43391 9.63359L18.7199 0L20 1.23888Z" fill="currentColor"></path>
                    </svg>
                    <span>Personal daily recommendations.</span>
                  </li>
                </ul>
              </section>
            </div>
          </section>

          <!-- Premium 计划 -->
          <section class="plan-card">
            <div class="plan-content">
              <div class="plan-header">
                <h2 class="plan-name">
                  <span class="plan-name-main">PREMIUM</span>
                  <span class="plan-duration">- 12 Months</span>
                </h2>
                <div class="plan-pricing">
                  <div class="plan-price-left">
                    <div class="price-row">
                      <div>
                        <span class="sr-only">Discount price:</span>
                        <span class="price-discount">$79.99</span>
                      </div>
                      <div>
                        <span class="sr-only">Original price:</span>
                        <span class="price-original">$99.99</span>
                      </div>
                    </div>
                    <span class="price-save">Save $20.00</span>
                  </div>
                  <div class="plan-price-right" aria-label="$ 0.22 a day">
                    <span aria-hidden="true">$</span>
                    <span class="price-large" aria-hidden="true">0</span>
                    <div class="price-small" aria-hidden="true">
                      <span>.22</span>
                      <span class="price-label">a day</span>
                    </div>
                  </div>
                </div>
              </div>
              <button class="plan-button plan-button--secondary">Get started</button>
              <section class="plan-features">
                <h3 class="features-title">For casual learners</h3>
                <ul class="features-list">
                  <li class="feature-item">
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="feature-icon">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1.23888L7.39306 12L0 5.28039L1.3222 4.07861L7.43391 9.63359L18.7199 0L20 1.23888Z" fill="currentColor"></path>
                    </svg>
                    <span>9,000+ book and podcast summaries.</span>
                  </li>
                  <li class="feature-item">
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="feature-icon">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1.23888L7.39306 12L0 5.28039L1.3222 4.07861L7.43391 9.63359L18.7199 0L20 1.23888Z" fill="currentColor"></path>
                    </svg>
                    <span>Read & listen in 15 min.</span>
                  </li>
                  <li class="feature-item">
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="feature-icon">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1.23888L7.39306 12L0 5.28039L1.3222 4.07861L7.43391 9.63359L18.7199 0L20 1.23888Z" fill="currentColor"></path>
                    </svg>
                    <span>Personal daily recommendations.</span>
                  </li>
                </ul>
              </section>
            </div>
          </section>
        </section>

        <!-- 支付方式 -->
        <div class="payment-methods">
          <div class="payment-icons">
          <svg width="45" height="27" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Paypal"><g id="paypal"><rect x="0.5" y="0.5" width="49" height="29" rx="3.5" fill="white"></rect><g id="Group 6985"><g id="Mask group"><mask id="mask0_17240_71296" maskUnits="userSpaceOnUse" x="13" y="19" width="18" height="6"><g id="Group"><path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M13.5 19.8986H30.9414V24.6478H13.5V19.8986Z" fill="white"></path></g></mask><g mask="url(#mask0_17240_71296)"><g id="Group_2"><path id="Vector_2" fill-rule="evenodd" clip-rule="evenodd" d="M29.5558 21.5002C29.456 22.1139 28.9553 22.1139 28.4709 22.1139H28.1953L28.3886 20.9681C28.4003 20.8988 28.4641 20.8478 28.5391 20.8478H28.6653C28.9951 20.8478 29.3065 20.8478 29.467 21.0236C29.5631 21.1288 29.5922 21.2847 29.5558 21.5002ZM29.3452 19.8986H27.5185C27.3936 19.8986 27.2873 19.9837 27.2679 20.0991L26.5292 24.4831C26.5146 24.5696 26.5861 24.6478 26.6796 24.6478H27.6168C27.7042 24.6478 27.7787 24.5882 27.7923 24.5075L28.0018 23.2646C28.0212 23.1491 28.1275 23.064 28.2524 23.064H28.8305C30.0336 23.064 30.7279 22.5191 30.9094 21.4388C30.9912 20.9664 30.9127 20.5952 30.6764 20.3353C30.4166 20.0497 29.9562 19.8986 29.3452 19.8986Z" fill="#238EC2"></path><path id="Vector_3" fill-rule="evenodd" clip-rule="evenodd" d="M16.5285 21.5002C16.4286 22.1139 15.9278 22.1139 15.4436 22.1139H15.168L15.3613 20.9681C15.373 20.8988 15.4367 20.8478 15.5116 20.8478H15.638C15.9676 20.8478 16.2791 20.8478 16.4397 21.0236C16.5357 21.1288 16.5648 21.2847 16.5285 21.5002ZM16.3178 19.8986H14.4912C14.3664 19.8986 14.26 19.9837 14.2405 20.0991L13.5019 24.4831C13.4874 24.5696 13.5587 24.6478 13.6523 24.6478H14.5244C14.6493 24.6478 14.7557 24.5627 14.7751 24.4473L14.9744 23.2646C14.9939 23.1491 15.1003 23.064 15.2252 23.064H15.8031C17.0063 23.064 17.7007 22.5191 17.8822 21.4388C17.9638 20.9664 17.8855 20.5952 17.6491 20.3353C17.3893 20.0497 16.9289 19.8986 16.3178 19.8986Z" fill="#253667"></path></g></g></g><path id="Vector_4" fill-rule="evenodd" clip-rule="evenodd" d="M20.5578 23.0733C20.4733 23.5411 20.0766 23.8552 19.5705 23.8552C19.3169 23.8552 19.1139 23.7788 18.9833 23.6341C18.8539 23.4908 18.8052 23.2866 18.8462 23.0591C18.925 22.5955 19.328 22.2714 19.8264 22.2714C20.0747 22.2714 20.2764 22.3485 20.4096 22.4944C20.5435 22.6414 20.5962 22.8471 20.5578 23.0733ZM21.777 21.4803H20.9024C20.8274 21.4803 20.7636 21.5313 20.752 21.6006L20.7135 21.8295L20.6524 21.7466C20.463 21.4892 20.0408 21.4033 19.6193 21.4033C18.653 21.4033 17.8275 22.0887 17.6668 23.0499C17.5832 23.5295 17.7019 23.9878 17.9924 24.3077C18.2593 24.6016 18.6402 24.724 19.094 24.724C19.8729 24.724 20.3049 24.2556 20.3049 24.2556L20.2658 24.4832C20.2513 24.5697 20.3227 24.648 20.4163 24.648H21.2039C21.3288 24.648 21.4351 24.563 21.4546 24.4475L21.9274 21.6449C21.942 21.5584 21.8706 21.4803 21.777 21.4803Z" fill="#253667"></path><path id="Vector_5" fill-rule="evenodd" clip-rule="evenodd" d="M33.5851 23.0733C33.5007 23.5411 33.1039 23.8552 32.598 23.8552C32.3443 23.8552 32.1412 23.7788 32.0106 23.6341C31.8812 23.4908 31.8325 23.2866 31.8736 23.0591C31.9523 22.5955 32.3555 22.2714 32.8538 22.2714C33.1022 22.2714 33.3038 22.3485 33.4369 22.4944C33.5709 22.6414 33.6235 22.8471 33.5851 23.0733ZM34.8044 21.4803H33.9298C33.8548 21.4803 33.791 21.5313 33.7794 21.6006L33.7409 21.8295L33.6798 21.7466C33.4903 21.4892 33.0682 21.4033 32.6466 21.4033C31.6803 21.4033 30.8549 22.0887 30.6941 23.0499C30.6106 23.5295 30.7293 23.9878 31.0198 24.3077C31.2867 24.6016 31.6676 24.724 32.1214 24.724C32.9002 24.724 33.3323 24.2556 33.3323 24.2556L33.2932 24.4832C33.2786 24.5697 33.35 24.648 33.4436 24.648H34.2313C34.3561 24.648 34.4625 24.563 34.482 24.4475L34.9548 21.6449C34.9694 21.5584 34.8979 21.4803 34.8044 21.4803Z" fill="#238EC2"></path><g id="Mask group_2"><mask id="mask1_17240_71296" maskUnits="userSpaceOnUse" x="22" y="19" width="15" height="7"><g id="Group_3"><path id="Vector_6" fill-rule="evenodd" clip-rule="evenodd" d="M22.3594 19.8986H36.9818V25.7557H22.3594V19.8986Z" fill="white"></path></g></mask><g mask="url(#mask1_17240_71296)"><g id="Group_4"><path id="Vector_7" fill-rule="evenodd" clip-rule="evenodd" d="M26.4349 21.4806H25.5557C25.4716 21.4806 25.393 21.5197 25.3458 21.5847L24.1331 23.2565L23.6191 21.65C23.5869 21.5496 23.4881 21.4806 23.376 21.4806H22.5118C22.4074 21.4806 22.334 21.5767 22.3676 21.6692L23.3357 24.3287L22.4251 25.5312C22.3537 25.6256 22.4258 25.7562 22.5494 25.7562H23.4277C23.5109 25.7562 23.5889 25.718 23.6362 25.654L26.56 21.7044C26.6299 21.6098 26.5577 21.4806 26.4349 21.4806Z" fill="#253667"></path><path id="Vector_8" fill-rule="evenodd" clip-rule="evenodd" d="M35.8336 20.019L35.0839 24.4832C35.0694 24.5697 35.1408 24.6478 35.2344 24.6478H35.9883C36.1132 24.6478 36.2195 24.5627 36.2389 24.4473L36.9782 20.0634C36.9928 19.9768 36.9213 19.8986 36.8277 19.8986H35.984C35.909 19.8986 35.8452 19.9497 35.8336 20.019Z" fill="#238EC2"></path></g></g></g><path id="Vector_9" fill-rule="evenodd" clip-rule="evenodd" d="M30.9378 7.60403C31.1227 6.50054 30.9366 5.74968 30.2989 5.06958C29.5968 4.32079 28.3285 4 26.7058 4H21.9954C21.6637 4 21.3814 4.22588 21.3297 4.53253L19.3683 16.1742C19.3296 16.4039 19.5193 16.6117 19.7677 16.6117H22.6756L22.4749 17.8029C22.4411 18.004 22.607 18.1856 22.8244 18.1856H25.2754C25.5655 18.1856 25.8126 17.9881 25.8578 17.7199L25.8818 17.6033L26.3436 14.8626L26.3733 14.7111C26.4185 14.4429 26.6655 14.2453 26.9556 14.2453H27.3223C29.6969 14.2453 31.5562 13.3422 32.0995 10.7308C32.3265 9.63963 32.2091 8.72881 31.6088 8.08851C31.4272 7.8948 31.2013 7.73468 30.9378 7.60403Z" fill="#238EC2"></path><path id="Vector_10" fill-rule="evenodd" clip-rule="evenodd" d="M30.9378 7.60403C31.1227 6.50054 30.9366 5.74968 30.2989 5.06958C29.5968 4.32079 28.3285 4 26.7058 4H21.9954C21.6637 4 21.3814 4.22588 21.3297 4.53253L19.3683 16.1742C19.3296 16.4039 19.5193 16.6117 19.7677 16.6117H22.6756L23.4061 12.2761L23.3835 12.4121C23.4351 12.1055 23.7152 11.8795 24.0468 11.8795H25.4288C28.1432 11.8795 30.2686 10.8474 30.8896 7.86223C30.9081 7.77384 30.9238 7.68822 30.9378 7.60403Z" fill="#20274F"></path><path id="Vector_11" fill-rule="evenodd" clip-rule="evenodd" d="M24.1908 7.61873C24.2219 7.43423 24.3483 7.28325 24.5186 7.20684C24.596 7.17213 24.6825 7.15283 24.7732 7.15283H28.4655C28.9029 7.15283 29.3107 7.1796 29.6836 7.23583C29.7902 7.25187 29.8939 7.27038 29.9946 7.29127C30.0953 7.31223 30.1931 7.33558 30.2878 7.36156C30.3351 7.37442 30.3816 7.388 30.4274 7.40222C30.6105 7.45917 30.7809 7.52628 30.9378 7.60403C31.1227 6.50054 30.9366 5.74968 30.2989 5.06958C29.5968 4.32079 28.3285 4 26.7058 4H21.9954C21.6637 4 21.3814 4.22588 21.3297 4.53253L19.3683 16.1742C19.3296 16.4039 19.5193 16.6117 19.7677 16.6117H22.6756L24.1908 7.61873Z" fill="#253667"></path></g></g></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="27" fill="none" aria-label="Visa"><rect x=".75" y=".5" width="39" height="25.087" rx="3.5" fill="white"></rect><path d="M18.616 16.734h-1.917l1.198-7.043h1.917l-1.198 7.043zm-3.529-7.043l-1.828 4.844-.216-1.043-.645-3.167s-.078-.634-.909-.634H8.467l-.035.119s.924.184 2.005.805l1.666 6.119H14.1l3.05-7.043h-2.063zm12.97 4.552l1.008-2.636.567 2.636h-1.574zm2.109 2.492h1.76l-1.535-7.043H28.85c-.712 0-.885.525-.885.525l-2.859 6.518h1.998l.4-1.046h2.437l.225 1.046zm-4.909-5.35l.274-1.513s-.844-.307-1.724-.307c-.951 0-3.21.398-3.21 2.332 0 1.82 2.651 1.842 2.651 2.798s-2.378.785-3.163.182l-.285 1.581s.856.398 2.164.398 3.282-.648 3.282-2.411c0-1.831-2.675-2.002-2.675-2.798s1.867-.694 2.687-.261z" fill-rule="evenodd" fill="#191d79"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="27" fill="none" aria-label="Mastercard"><rect x=".75" y=".5" width="39" height="25.087" rx="3.5" fill="white"></rect><path fill-rule="evenodd" d="M28.386 19.715v-1.377h-.319v.799a.58.58 0 0 0-.479-.224.8.8 0 0 0-.799.799.8.8 0 0 0 .799.799.58.58 0 0 0 .479-.224v.185h.319v-.757zm-9.902-.763h.546l.003.303h-.543v.696c0 .153.061.256.22.256.104-.003.205-.033.294-.086l.096.284a.78.78 0 0 1-.415.118c-.393 0-.53-.211-.53-.565v-.703h-.31v-.303h.303v-.463h.335v.463zm-4.417.568v.958l-.335.006v-.85c0-.259-.109-.402-.335-.402a.36.36 0 0 0-.374.406v.847h-.335v-.85c0-.259-.112-.402-.332-.402-.107-.006-.21.036-.282.115s-.106.185-.091.291v.84h-.335v-1.527h.332v.189c.098-.15.268-.236.447-.227a.56.56 0 0 1 .505.272.59.59 0 0 1 .537-.272.57.57 0 0 1 .601.607zm7.797-.607a.45.45 0 0 0-.403.223v-.185h-.329v1.527h.332v-.856c0-.252.109-.393.319-.393a.54.54 0 0 1 .207.038l.102-.319c-.076-.027-.156-.041-.236-.042l.006.006zm-4.91 0a1.14 1.14 0 0 1 .623.16l-.147.268c-.146-.084-.311-.129-.479-.131-.182 0-.291.077-.291.179s.115.131.259.15l.16.022c.332.048.533.166.533.457s-.255.498-.696.498a1.1 1.1 0 0 1-.661-.198l.16-.259a.81.81 0 0 0 .508.16c.227 0 .348-.067.348-.185 0-.086-.086-.134-.268-.16l-.16-.022c-.342-.048-.527-.201-.527-.45 0-.303.252-.489.639-.489zm9.522 0a.45.45 0 0 0-.402.223v-.185h-.329v1.527h.332v-.856c0-.252.109-.393.319-.393a.54.54 0 0 1 .208.038l.102-.319c-.076-.027-.156-.041-.236-.042l.006.006zm-4.05 1.378a.77.77 0 0 1-.231-.579v-.006a.77.77 0 0 1 .815-.799.8.8 0 0 1 .549.182l-.16.268a.67.67 0 0 0-.399-.137.49.49 0 0 0 0 .977.67.67 0 0 0 .399-.137l.16.268a.8.8 0 0 1-.549.182.77.77 0 0 1-.584-.219zm2.88-.579v-.76h-.332v.185a.58.58 0 0 0-.479-.224.8.8 0 0 0-.799.799.8.8 0 0 0 .799.799.58.58 0 0 0 .479-.224v.185h.332v-.76zm-.757-.434a.46.46 0 0 0-.354.78.46.46 0 0 0 .339.143.46.46 0 0 0 .459-.454.46.46 0 0 0-.444-.469zm-4.488-.364a.8.8 0 0 0-.787.81.8.8 0 0 0 .81.787.93.93 0 0 0 .634-.208l-.16-.246c-.126.101-.282.157-.444.16-.228.02-.431-.146-.457-.374h1.134v-.128c0-.479-.297-.799-.725-.799l-.005-.003zm.272.403a.38.38 0 0 0-.27-.105h-.006c-.213-.007-.394.157-.406.37h.799a.38.38 0 0 0-.116-.265zm8.665.952a.16.16 0 0 0-.057-.011c-.022-.001-.044.003-.065.011s-.035.018-.049.032a.16.16 0 0 0-.034.048.15.15 0 0 0 0 .118.16.16 0 0 0 .144.093c.021 0 .042-.004.061-.013s.035-.018.049-.032.025-.03.034-.048c.016-.038.016-.081 0-.118a.16.16 0 0 0-.083-.08zm-.059.258c.015 0 .031-.003.045-.009s.026-.015.037-.026c.041-.045.041-.114 0-.16a.12.12 0 0 0-.037-.026c-.015-.006-.03-.01-.046-.01s-.032.003-.046.01-.027.014-.038.026c-.041.045-.041.115 0 .16.011.011.024.02.038.026s.034.01.051.009h-.003zm.05-.177c-.012-.009-.027-.014-.041-.013l-.067.002v.141h.03v-.053h.014l.043.053h.037l-.046-.053c.012-.001.024-.006.034-.014s.012-.018.011-.029-.004-.025-.014-.034zm-.074.014v.038h.035c.021-.005.021-.01.019-.014-.006-.016-.013-.016-.019-.014l-.035-.01zm-1.281-1.082a.46.46 0 0 0-.353.78.46.46 0 0 0 .338.143.46.46 0 0 0 .459-.454.46.46 0 0 0-.444-.469zm-11.695.434v-.763h-.332v.185a.58.58 0 0 0-.479-.224.8.8 0 0 0-.799.799.8.8 0 0 0 .799.799.58.58 0 0 0 .479-.224v.185h.332v-.757zm-.757-.434a.46.46 0 0 0-.478.434h-.003a.46.46 0 0 0 .466.489.46.46 0 0 0 .459-.454.46.46 0 0 0-.444-.469z" fill="#231f20"></path><path d="M22.504 7.317h-5.031v9.042h5.031V7.317z" fill="#ff5f00"></path><path d="M17.792 11.839a5.74 5.74 0 0 1 2.196-4.522 5.75 5.75 0 0 0-7.777 8.422 5.75 5.75 0 0 0 7.777.62 5.74 5.74 0 0 1-2.196-4.52z" fill="#eb001b"></path><path d="M29.294 11.838a5.75 5.75 0 0 1-9.303 4.52 5.75 5.75 0 0 0 0-9.042 5.75 5.75 0 0 1 9.304 4.52v.002z" fill="#f79e1b"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="27" fill="none" aria-label="American Express"><rect x=".75" y=".5" width="39" height="25.087" rx="3.5" fill="white"></rect><path d="M11.269 10L8.82 15.217v.435h2.041l.408-.87h1.633l.408.87h2.857v-2.174l1.224 2.174h1.224l.816-1.304v1.304h6.939l1.224-1.304 1.224 1.304h2.449l-2.041-3.043L31.269 10H28.82l-1.224 1.304L26.371 10h-7.347L17.8 12.174 16.575 10h-2.041l-.408 2.174L13.31 10h-2.041z" fill="#006fcf"></path><path fill-rule="evenodd" d="M10.768 9.565L8.004 16.08h3.309l.41-1.039h.938l.41 1.039h3.642v-.793l.325.793h1.884l.325-.81v.81h7.574l.921-1.012.862 1.012 3.89.008-2.773-3.248 2.773-3.276h-3.83l-.896.993-.835-.993h-8.24l-.708 1.682-.724-1.682h-3.302v.766l-.367-.766h-2.823zm.641.926h1.613l1.833 4.418v-4.418h1.767l1.416 3.168 1.305-3.168h1.758v4.675h-1.07l-.009-3.663-1.559 3.663h-.957l-1.568-3.663v3.663h-2.201l-.417-1.048h-2.254l-.416 1.047H9.471l1.938-4.674zm15.02 0h-4.349v4.672h4.282l1.38-1.549 1.33 1.549h1.391l-2.021-2.323 2.021-2.35h-1.33l-1.373 1.531-1.33-1.531zm-14.235.791l-.743 1.867h1.484l-.742-1.867zm10.96 1.03v-.853l2.714-.001 1.184 1.365-1.237 1.372h-2.661v-.932h2.373v-.951h-2.373z" fill="#fff"></path></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="41" height="27" fill="none" aria-label="Apple Pay"><g clip-path="url(#A)"><path d="M37.168.956l.404.001.329.005a4.19 4.19 0 0 1 .624.054c.181.033.334.084.48.16s.276.172.392.29a1.58 1.58 0 0 1 .286.401c.074.148.123.302.156.488.037.21.048.439.053.635l.005.335.001.411v18.788l-.001.414-.005.332a4.39 4.39 0 0 1-.053.637c-.032.184-.081.338-.156.486s-.17.283-.285.4a1.54 1.54 0 0 1-.394.291c-.145.075-.297.126-.476.159-.213.039-.446.049-.622.054l-.333.005-.403.001H4.332c-.138 0-.271 0-.406-.001l-.327-.005c-.18-.005-.413-.015-.624-.054-.181-.033-.333-.084-.48-.16s-.276-.172-.392-.291-.211-.251-.285-.4a1.73 1.73 0 0 1-.156-.489 4.38 4.38 0 0 1-.053-.635l-.005-.334v-.327-.086V3.736 3.65v-.326l.005-.334c.005-.195.016-.423.053-.637.032-.184.082-.339.156-.488a1.57 1.57 0 0 1 .285-.399c.115-.117.247-.215.393-.29a1.66 1.66 0 0 1 .479-.159c.209-.038.433-.049.625-.054l.327-.005.405-.001h32.836z" fill="white"></path><g fill="#000"><path d="M12.117 8.861c.342-.436.575-1.022.514-1.621a2.2 2.2 0 0 0-1.467.774c-.318.374-.6.985-.526 1.558.563.05 1.125-.287 1.48-.711zm.507.823c-.817-.05-1.512.473-1.902.473s-.988-.448-1.635-.436c-.841.013-1.622.497-2.049 1.268-.878 1.542-.232 3.829.622 5.085.415.621.915 1.305 1.573 1.281.622-.025.866-.41 1.623-.41s.976.41 1.634.398c.683-.012 1.11-.622 1.525-1.244.476-.708.671-1.392.683-1.43-.012-.012-1.317-.522-1.329-2.052-.012-1.28 1.025-1.889 1.073-1.927-.585-.882-1.5-.982-1.818-1.007zm7.117-1.733c1.776 0 3.013 1.247 3.013 3.064 0 1.823-1.262 3.077-3.058 3.077H17.73v3.186h-1.421V7.951h3.433zm-2.011 4.925h1.631c1.237 0 1.941-.679 1.941-1.855s-.704-1.849-1.935-1.849H17.73v3.703zm5.395 2.469c0-1.189.895-1.92 2.481-2.01l1.827-.11v-.523c0-.756-.501-1.209-1.339-1.209-.793 0-1.288.388-1.409.995h-1.294c.076-1.228 1.104-2.133 2.753-2.133 1.618 0 2.652.873 2.652 2.236v4.686h-1.313V16.16h-.032c-.387.756-1.231 1.234-2.106 1.234-1.307 0-2.221-.827-2.221-2.049zm4.308-.614v-.536l-1.643.103c-.819.058-1.282.427-1.282 1.008 0 .595.482.982 1.218.982.958 0 1.707-.672 1.707-1.558zm2.604 5.048v-1.131c.101.026.33.026.444.026.634 0 .977-.271 1.186-.969 0-.013.121-.414.121-.42l-2.411-6.806h1.484l1.688 5.533h.025l1.688-5.533h1.446l-2.5 7.155c-.571 1.648-1.231 2.178-2.614 2.178a5.21 5.21 0 0 1-.558-.032z"></path></g></g><defs><clipPath id="A"><path fill="#fff" transform="translate(.75 .087)" d="M0 0h40v26.087H0z"></path></clipPath></defs></svg>
          <svg width="44" height="28" viewBox="0 0 44 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Google Pay"><g id="google_pay"><path id="Vector" d="M32.2979 3.26855H11.7021C5.26596 3.26855 0 8.09782 0 14.0003C0 19.9027 5.26596 24.732 11.7021 24.732H32.2979C38.734 24.732 44 19.9027 44 14.0003C44 8.09782 38.734 3.26855 32.2979 3.26855Z" fill="white"></path><g id="Group"><path id="Vector_3" d="M20.2156 15.2301V18.6791H19.1211V10.1621H22.0228C22.7582 10.1621 23.3853 10.4072 23.8983 10.8975C24.4228 11.3878 24.685 11.9864 24.685 12.6933C24.685 13.4173 24.4228 14.0158 23.8983 14.5004C23.391 14.985 22.7639 15.2244 22.0228 15.2244H20.2156V15.2301ZM20.2156 11.2111V14.1812H22.0456C22.4789 14.1812 22.8437 14.0329 23.1287 13.7422C23.4195 13.4515 23.5677 13.098 23.5677 12.699C23.5677 12.3056 23.4195 11.9579 23.1287 11.6671C22.8437 11.365 22.4846 11.2168 22.0456 11.2168H20.2156V11.2111Z" fill="#3C4043"></path><path id="Vector_4" d="M27.5465 12.6582C28.356 12.6582 28.9944 12.8748 29.4619 13.3081C29.9294 13.7413 30.1631 14.3342 30.1631 15.0867V18.6782H29.1199V17.8687H29.0743C28.6239 18.5357 28.0196 18.8663 27.2671 18.8663C26.6229 18.8663 26.0871 18.6782 25.6538 18.2963C25.2205 17.9143 25.0039 17.4412 25.0039 16.8711C25.0039 16.2668 25.2319 15.7879 25.688 15.4345C26.1441 15.0753 26.754 14.8986 27.5122 14.8986C28.1621 14.8986 28.698 15.0183 29.1142 15.2578V15.0069C29.1142 14.625 28.9659 14.3057 28.6638 14.0378C28.3617 13.7699 28.0082 13.6387 27.6035 13.6387C26.9935 13.6387 26.5089 13.8953 26.1555 14.414L25.192 13.8098C25.7222 13.0402 26.5089 12.6582 27.5465 12.6582ZM26.1327 16.8882C26.1327 17.1732 26.2524 17.4126 26.4975 17.6008C26.7369 17.7889 27.022 17.8858 27.3469 17.8858C27.8087 17.8858 28.2191 17.7148 28.5783 17.3727C28.9374 17.0307 29.1199 16.6316 29.1199 16.1699C28.7778 15.9019 28.3047 15.7651 27.6947 15.7651C27.25 15.7651 26.8795 15.8734 26.583 16.0844C26.2809 16.3067 26.1327 16.5746 26.1327 16.8882Z" fill="#3C4043"></path><path id="Vector_5" d="M36.1153 12.8467L32.4668 21.2382H31.338L32.6948 18.3023L30.2891 12.8467H31.4805L33.2136 17.031H33.2364L34.9238 12.8467H36.1153Z" fill="#3C4043"></path></g><g id="Group 73286"><path id="Vector_6" d="M15.8589 14.5345C15.8589 14.1777 15.827 13.8362 15.7677 13.5078H11.1797V15.3891L13.822 15.3896C13.7148 16.0156 13.3699 16.5492 12.8415 16.9049V18.1254H14.4143C15.3327 17.2755 15.8589 16.019 15.8589 14.5345Z" fill="#4285F4"></path><path id="Vector_7" d="M12.846 16.9042C12.4082 17.1995 11.8444 17.3722 11.1848 17.3722C9.9107 17.3722 8.82983 16.5137 8.44275 15.3564H6.82031V16.6152C7.62412 18.2103 9.27621 19.3048 11.1848 19.3048C12.504 19.3048 13.6122 18.871 14.4189 18.1242L12.846 16.9042Z" fill="#34A853"></path><path id="Vector_8" d="M8.28587 14.4226C8.28587 14.0976 8.34003 13.7835 8.43865 13.4882V12.2295H6.81621C6.48386 12.8891 6.29688 13.6336 6.29688 14.4226C6.29688 15.2116 6.48443 15.9561 6.81621 16.6157L8.43865 15.3569C8.34003 15.0616 8.28587 14.7475 8.28587 14.4226Z" fill="#FABB05"></path><path id="Vector_9" d="M11.1848 11.4726C11.9048 11.4726 12.5496 11.7206 13.0587 12.2052L14.4525 10.8125C13.6059 10.024 12.5023 9.54004 11.1848 9.54004C9.27678 9.54004 7.62412 10.6346 6.82031 12.2297L8.44275 13.4884C8.82983 12.3311 9.9107 11.4726 11.1848 11.4726Z" fill="#E94235"></path></g></g></svg>
          </div>
          <p class="payment-disclaimer">
            We've automatically applied a discount to your first subscription price. By proceeding you accept that $139.99 is processed as an intro offer, then $174.99 will be billed every 12 months automatically. You can cancel anytime in your Settings.
          </p>
        </div>
      </section>
    </div>

    <!-- FAQ 部分 -->
    <section class="faq-section">
      <div class="pricing-container">
        <h2 class="faq-title">Do you have questions?</h2>
        <div class="faq-list">
          <details class="faq-item">
            <summary class="faq-question">
              <h3>What's the difference between types of plans?</h3>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="faq-icon">
                <path fill-rule="evenodd" d="M12 14.879L4.061 6.939a1.5 1.5 0 0 0-2.121 2.121l9 9a1.5 1.5 0 0 0 2.121 0l9-9a1.5 1.5 0 0 0-2.121-2.121L12 14.879z" fill="currentColor"></path>
              </svg>
            </summary>
            <div class="faq-answer">
              <p>The <strong>Premium</strong> plan gives you unlimited access to our entire library of 9,000+ books, podcasts, and expert-led guides. The Premium plan enables you to read or listen offline, save and organize your content, and get personalized recommendations to suit your interests.</p>
              <p>The <strong>Pro</strong> plan takes things to the next level! Along with everything in Premium, you get access to our brand-new Heardly AI Assistant. This powerful tool lets you copy-paste web links and get instant summaries of Youtube videos, podcasts, articles, docs, and more.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary class="faq-question">
              <h3>How can Heardly boost my personal and professional growth?</h3>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="faq-icon">
                <path fill-rule="evenodd" d="M12 14.879L4.061 6.939a1.5 1.5 0 0 0-2.121 2.121l9 9a1.5 1.5 0 0 0 2.121 0l9-9a1.5 1.5 0 0 0-2.121-2.121L12 14.879z" fill="currentColor"></path>
              </svg>
            </summary>
            <div class="faq-answer">
              <p>Heardly is bite-sized for a reason! It fits into any down-time or in-between time. Cue up the audio to one of our nonfiction book explainers before bed, listen to an expert-led Guide during lunch, or hear the key insights from a podcast right before bed.</p>
            </div>
          </details>
          <details class="faq-item">
            <summary class="faq-question">
              <h3>Can I cancel during my subscription?</h3>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="faq-icon">
                <path fill-rule="evenodd" d="M12 14.879L4.061 6.939a1.5 1.5 0 0 0-2.121 2.121l9 9a1.5 1.5 0 0 0 2.121 0l9-9a1.5 1.5 0 0 0-2.121-2.121L12 14.879z" fill="currentColor"></path>
              </svg>
            </summary>
            <div class="faq-answer">
              <p>Our subscriptions are auto-renewable. To deactivate the automatic renewal you can cancel your subscription up to 24 hours before the end of the current billing period. The cancellation will be effective at the end of your current subscription cycle.</p>
            </div>
          </details>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PricingPage',
  layout: 'pricing'
}
</script>

<style scoped>
.pricing-page {
  height: 100%;
  background: transparent;
}

.pricing-container {
  margin: 0 auto;
  padding: 64px 16px;
  width: 100%;
  max-width: 80rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 3rem;
  flex: 1;
  min-height: 0;
  box-sizing: border-box;
  color: hsl(202 92% 15%);
}

/* Hero 和 Plans 的父容器 */
.pricing-main {
  background-image: linear-gradient(to bottom, transparent 0%, hsl(213 100% 92%) 100%);
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: fit-content;
}

/* Hero 区域 */
.pricing-title {
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 3rem;
  line-height: 3.75rem;
}

/* 计划选择区域 */
.plans-section {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  text-align: left;
  width: 100%;
  max-width: 28rem;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
}

@media (min-width: 768px) {
  .plans-section {
    max-width: 51.5078125rem;
    flex-direction: row;
    align-items: stretch;
    gap: 2rem;
  }
}

.plan-card {
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  max-width: 28rem;
  flex-direction: column;
  text-align: left;
  border-radius: 0.5rem;
  border: 2px solid;
  background-color: hsl(0 0% 100%);
  color: hsl(192 11% 26%);
  min-width: 0;
  overflow: hidden;
  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
}

.plan-card:hover {
  transform: scale(1.02);
}

.plan-card:active {
  transform: scale(0.98);
}

@media (min-width: 768px) {
  .plan-card {
    flex: 1;
    max-width: none;
  }
}

.plan-card--featured {
  border-color: hsl(215 98% 48%);
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}

.plan-card:not(.plan-card--featured) {
  border-color: hsl(200 18% 90%);
}

@media (min-width: 768px) {
  .plan-card:not(.plan-card--featured) {
    margin-top: 2rem;
  }
}

.plan-badge {
  background: hsl(215 98% 48%);
  color: hsl(0 0% 100%);
  display: flex;
  height: 2rem;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  padding: 0.25rem 0;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
}

.plan-badge svg {
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
  display: inline-block;
}

.plan-content {
  margin: 0;
  padding: 1.5rem 1rem;
  display: flex;
  height: 100%;
  min-height: 6rem;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  background-color: hsl(0 0% 100%);
  color: hsl(192 11% 26%);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}


.plan-header {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.plan-name {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  height: 1.875rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
}

.plan-name-main {
  font-size: 1.375rem;
  font-weight: 700;
  color: hsl(202 92% 15%);
}

.plan-duration {
  font-size: 1.25rem;
  font-weight: 400;
}

.plan-pricing {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin: 0;
}

.plan-price-left {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: 500;
}

.price-row {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.price-discount {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: rgb(59, 71, 74);
  display: inline;
}

.price-original {
  font-size: 1rem;
  color: hsl(201 7% 46%);
  text-decoration: line-through;
}

.price-save {
  background: #d6e9ff;
  color: hsl(215 95% 25%);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  align-self: flex-start;
}

.plan-price-right {
  display: flex;
  align-items: center;
  color: hsl(202 92% 15%);
  font-weight: 700;
}

.price-large {
  font-size: 3.5rem;
  line-height: 1;
}

.price-small {
  display: flex;
  flex-direction: column;
  font-size: 1rem;
}

.price-label {
  font-size: 0.875rem;
  white-space: nowrap;
}

.plan-button {
  margin: 0;
  padding: 0.5rem 1rem;
  width: 100%;
  height: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  border: none;
  background-color: hsl(148 74% 53%);
  color: hsl(202 92% 15%);
  font: inherit;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
}

.plan-button--primary:hover {
  background: hsl(148 67% 48%);
}

.plan-button--secondary {
  background: transparent;
  border: 1px solid hsl(201 7% 46%);
}

.plan-button--secondary:hover {
  background: hsl(150 17% 98%);
}

.plan-features {
  margin: 0;
  padding: 0;
}

.features-title {
  font-size: 0.875rem;
  font-weight: 700;
  color: hsl(202 92% 15%);
  margin: 0 0 1rem 0;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.375rem;
  font-size: 0.875rem;
  color: hsl(202 92% 15%);
  line-height: 1.5;
}

.feature-icon {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
  color: hsl(215 98% 48%);
}

/* 支付方式 */
.payment-methods {
  margin: 0;
  padding: 0;
  display: flex;
  max-width: 28rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  text-align: center;
  color: hsl(202 92% 15%);
}

.payment-icons {
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.payment-icons svg {
  height: 1.75rem;
  width: auto;
}

.payment-disclaimer {
  text-align: center;
  font-size: 0.875rem;
  color: #033049;
  max-width: 32rem;
  line-height: 1.25rem;
}

/* FAQ 部分 */
.faq-section {
  padding: 4rem 0;
  background: hsl(150 17% 98%);
}

.faq-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

.faq-list {
  max-width: 48rem;
  margin: 0 auto;
}

.faq-item {
  border-bottom: 1px solid hsl(200 18% 90%);
  padding: 1.5rem 0;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  list-style: none;
  width: 100%;
}

.faq-question::-webkit-details-marker {
  display: none;
}

.faq-question h3 {
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0;
  flex: 1;
  text-align: left;
}

.faq-icon {
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 0.3s;
  flex-shrink: 0;
  margin-left: 1rem;
}

.faq-item[open] .faq-icon {
  transform: rotate(180deg);
}

.faq-answer {
  margin-top: 1rem;
  padding-inline-end: 2.5rem;
  color: hsl(201 7% 46%);
  line-height: 1.5;
}

.faq-answer p {
  margin-bottom: 1rem;
}

.faq-answer p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .pricing-title {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  .plans-section {
    flex-direction: column;
  }

  .plan-pricing {
    flex-direction: row;
  }

  .price-large {
    font-size: 2.5rem;
  }

  .payment-icons {
    gap: 0.25rem;
  }

  .payment-icons svg {
    height: 1.5rem;
  }
}
</style>