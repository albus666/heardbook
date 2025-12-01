<template>
  <div class="w-full bg-pale-mint-grey">
    <section class="flex w-full max-w-[80rem] mx-auto m:px-12 px-4">
      <footer class="bg-pale-mint-grey py-10 font-cera-pro flex flex-col l:flex-row content-center w-full">
        <!-- Logo -->
        <img 
          src="/img/proof/logo.png"
          alt="Heardly" 
          class="mr-8 w-[8.375rem] h-8 flex-0"
        />

        <!-- 链接列表 -->
        <div class="list2-bottom-left flex text-dark-grey text-sm flex-wrap flex-1 pt-2 order-2 l:order-1">
          <div class="list2-bottom-item">
            © Heardly 2024 - 2025
          </div>
          <div class="list2-bottom-item">
            Terms of Service
          </div>
          <div class="list2-bottom-item">
            Privacy Policies
          </div>
        </div>

        <!-- 社交媒体图标 -->
        <ul class="flex order-1 l:order-2 my-4 l:my-0 text-mid-grey flex-0">
          <li class="flex items-center mr-2 last:mr-0">
            <a
                data-test-id="facebook-link"
                href="https://www.facebook.com/blinkist"
                target="_blank"
                rel="noopener"
                aria-label="Blinkist on facebook"
                class="flex"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Facebook Logo" class="w-7.5 h-7.5">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.3728 0 0 5.3728 0 12C0 18.6272 5.3728 24 12 24C18.6272 24 24 18.6272 24 12C24 5.3728 18.6272 0 12 0ZM15.552 7.06H13.8744C13.2824 7.06 13.1592 7.3024 13.1592 7.9144V9.3944H15.5512L15.3216 11.9928H13.1592V19.7528H10.06V12.0248H8.4488V9.3944H10.06V7.3224C10.06 5.3784 11.1 4.3632 13.4056 4.3632H15.5512V7.0592L15.552 7.06Z" fill="currentColor"></path>
              </svg>
            </a>
          </li>
          <li class="flex items-center mr-2 last:mr-0">
            <a
                data-test-id="twitter-link"
                href="https://twitter.com/blinkist"
                target="_blank"
                rel="noopener"
                aria-label="Blinkist on twitter"
                class="flex"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Twitter Logo" class="w-7.5 h-7.5">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.3728 0 0 5.3728 0 12C0 18.6272 5.3728 24 12 24C18.6272 24 24 18.6272 24 12C24 5.3728 18.6272 0 12 0ZM18.0352 9.932C18.2112 13.8472 15.2912 18.212 10.124 18.212C8.61115 18.213 7.13001 17.7783 5.8576 16.96C7.32929 17.1366 8.81096 16.7223 9.9776 15.808C9.3967 15.7971 8.83375 15.6048 8.36754 15.2581C7.90133 14.9114 7.5552 14.4276 7.3776 13.8744C7.79492 13.9547 8.22508 13.9386 8.6352 13.8272C7.2968 13.5584 6.3728 12.3528 6.4032 11.0632C6.7776 11.2712 7.2072 11.3968 7.6632 11.4112C7.07432 11.0174 6.65755 10.4141 6.49765 9.72393C6.33774 9.03379 6.44672 8.30866 6.8024 7.696C7.50116 8.5558 8.37294 9.25903 9.36114 9.76002C10.3493 10.261 11.4319 10.5486 12.5384 10.604C12.1328 8.8632 13.4536 7.1864 15.2504 7.1864C16.0504 7.1864 16.7736 7.5248 17.2816 8.0656C17.9051 7.94297 18.5031 7.71461 19.0496 7.3904C18.8418 8.03493 18.4068 8.58195 17.8256 8.9296C18.3773 8.86443 18.9161 8.71692 19.424 8.492C19.0504 9.05075 18.5801 9.53839 18.0352 9.932V9.932Z" fill="currentColor"></path>
              </svg>
            </a>
          </li>
          <li class="flex items-center mr-2 last:mr-0">
            <a
                data-test-id="linkedin-link"
                href="https://www.linkedin.com/company/blinkist"
                target="_blank"
                rel="noopener"
                aria-label="Blinkist on linkedin"
                class="flex"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Linkedin Logo" class="w-7.5 h-7.5">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.3728 0 0 5.3728 0 12C0 18.6272 5.3728 24 12 24C18.6272 24 24 18.6272 24 12C24 5.3728 18.6272 0 12 0ZM8.7984 17.8016H6.164V9.2896H8.7984V17.8016ZM7.4688 8.1744C7.05393 8.17271 6.65671 8.00633 6.36447 7.71184C6.07224 7.41736 5.90891 7.01887 5.9104 6.604C5.9104 5.7368 6.608 5.0336 7.4688 5.0336C8.3288 5.0336 9.0264 5.7368 9.0264 6.604C9.02724 6.80939 8.98762 7.01293 8.9098 7.20301C8.83198 7.39308 8.71748 7.56597 8.57284 7.71179C8.42821 7.85762 8.25626 7.97353 8.06683 8.0529C7.8774 8.13228 7.67419 8.17356 7.4688 8.1744V8.1744ZM18.672 17.8016H16.0504V13.3336C16.0504 12.108 15.5848 11.424 14.6152 11.424C13.5608 11.424 13.0096 12.136 13.0096 13.3336V17.8016H10.4832V9.2896H13.0096V10.436C13.0096 10.436 13.7696 9.0296 15.5752 9.0296C17.38 9.0296 18.6712 10.132 18.6712 12.412L18.672 17.8016Z" fill="currentColor"></path>
              </svg>
            </a>
          </li>
          <li class="flex items-center mr-2 last:mr-0">
            <a
                data-test-id="instagram-link"
                href="https://www.instagram.com/blinkist/"
                target="_blank"
                rel="noopener"
                aria-label="Blinkist on instagram"
                class="flex"
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Instagram Logo" class="w-7.5 h-7.5">
                <path d="M12 0C5.36 0 0 5.36 0 12C0 18.64 5.36 24 12 24C18.64 24 24 18.64 24 12C24 5.36 18.64 0 12 0ZM18.72 14.8C18.64 17.28 17.2 18.64 14.8 18.72C14.08 18.72 13.84 18.8 12 18.8C10.16 18.8 9.92 18.8 9.2 18.72C6.72 18.64 5.36 17.2 5.28 14.8C5.28 14.08 5.2 13.84 5.2 12C5.2 10.16 5.2 9.92 5.28 9.2C5.36 6.72 6.8 5.36 9.2 5.28H12C13.84 5.28 14.08 5.28 14.8 5.36C17.28 5.44 18.64 6.88 18.72 9.28V12.08C18.8 13.84 18.8 14.08 18.72 14.8Z" fill="currentColor"></path>
                <path d="M12 9.75977C10.72 9.75977 9.76001 10.7998 9.76001 11.9998C9.76001 13.2798 10.8 14.2398 12 14.2398C13.28 14.2398 14.24 13.1998 14.24 11.9998C14.24 10.7998 13.28 9.75977 12 9.75977Z" fill="currentColor"></path>
                <path d="M14.72 6.48047C14 6.48047 13.76 6.48047 12 6.48047C10.16 6.48047 9.99998 6.48047 9.27998 6.48047C7.43998 6.56047 6.55998 7.44047 6.47998 9.28047V12.0005C6.47998 12.0005 6.47998 14.0005 6.47998 14.7205C6.55998 16.5605 7.43998 17.4405 9.27998 17.5205H12H14.72C16.56 17.4405 17.44 16.5605 17.52 14.7205C17.52 14.0005 17.52 13.7605 17.52 12.0005C17.52 10.1605 17.52 10.0005 17.52 9.28047C17.44 7.44047 16.56 6.56047 14.72 6.48047V6.48047ZM12 15.5205C10.08 15.5205 8.47998 13.9205 8.47998 12.0005C8.47998 10.0805 10.08 8.48047 12 8.48047C13.92 8.48047 15.52 10.0805 15.52 12.0005C15.52 13.9205 13.92 15.5205 12 15.5205ZM15.6 9.20047C15.12 9.20047 14.8 8.80047 14.8 8.32047C14.8 7.92047 15.12 7.60047 15.6 7.52047C16.08 7.52047 16.4 7.92047 16.4 8.32047C16.4 8.80047 16.08 9.20047 15.6 9.20047Z" fill="currentColor"></path>
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.w-full {
  width: 100%;
}

.bg-pale-mint-grey {
  background-color: #f1f6f4;
}

.font-cera-pro {
  font-family: "CeraPro", sans-serif;
}

.text-dark-grey {
  color: #3a4649;
}

.text-mid-grey {
  color: #6d787e;
}

.text-blue-2 {
  color: #0365f2;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-1 {
  flex: 1 1 0%;
}

.flex-0 {
  flex: 0 0 auto;
}

.items-center {
  align-items: center;
}

.content-center {
  align-content: center;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mr-8 {
  margin-right: 2rem;
}

.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.pt-2 {
  padding-top: 0.5rem;
}

.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.max-w-\[80rem\] {
  max-width: 80rem;
}

.w-\[8\.375rem\] {
  width: 8.375rem;
}

.h-8 {
  height: 2rem;
}

.w-7\.5 {
  width: 1.875rem;
}

.h-7\.5 {
  height: 1.875rem;
}

.inline-block {
  display: inline-block;
}

.list2-bottom-left {
  display: flex;
  align-items: center;
  gap: 0;
}

.list2-bottom-item {
  font-family: "C-R";
  line-height: 1.4;
  color: #3a4649;
  cursor: pointer;
  position: relative;
  display: inline-block;
  font-size: 14px;
  transition: color 0.2s;
}

.list2-bottom-item:not(:last-child)::after {
  content: '|';
  color: #3a4649;
  font-size: 14px;
  margin-left: 10px;
  margin-right: 10px;
  display: inline-block;
}

.list2-bottom-item:hover {
  color: #0365f2;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s;
}

a:hover {
  color: #0365f2;
}

.last\:mr-0:last-child {
  margin-right: 0;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

@media (min-width: 768px) {
  .m\:px-12 {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

@media (min-width: 1024px) {
  .l\:flex-row {
    flex-direction: row;
  }

  .l\:order-1 {
    order: 1;
  }

  .l\:order-2 {
    order: 2;
  }

  .l\:my-0 {
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>