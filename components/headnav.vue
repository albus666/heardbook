<template>
	<div class="heri-head">
		<div class="heri-container">
			<div class="logo" @click="toIndex">
				<img src="@/static/img/head/logo3.png" alt="" />
			</div>
			<div class="head-right">
				<!-- <div class="login">
					<img src="@/static/img/index/star.png" alt="" />
					Login
				</div> -->
				<!-- <img class="get" src="@/static/img/head/getheri.png" alt=""  @click="showLogin"/> -->
				<div class="nav-btn" @click="toForYou">For You</div>
				<button 
					class="login-button" 
					@click="openLoginModal"
					data-testid="login-button"
				>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="login-icon" aria-hidden="true">
						<path fill="currentColor" fill-rule="evenodd" d="M6.75 9.003c.41 0 .75-.34.75-.75V4.5H19v16H7.5v-3.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v4.5c0 .41.34.75.75.75h13c.41 0 .75-.34.75-.75V3.75c0-.41-.34-.75-.75-.75h-13c-.41 0-.75.34-.75.75v4.503c0 .41.34.75.75.75Z" clip-rule="evenodd"></path>
						<path fill="currentColor" fill-rule="evenodd" d="m16.52 11.823-3.81-3.71a.754.754 0 0 0-1.06.01c-.29.3-.28.77.01 1.06l2.59 2.53H3.75c-.41 0-.75.34-.75.75s.34.75.75.75h10.37l-2.37 2.43c-.29.3-.28.77.01 1.06.3.29.77.28 1.06-.01l3.71-3.81c.29-.3.28-.77-.01-1.06Z" clip-rule="evenodd"></path>
					</svg>
					Log in
				</button>
				<div class="get" @click="showLogin">Get Heardly</div>
			</div>
		</div>
		<!-- AuthModal for login button -->
		<AuthModal
			:show="showAuthModal"
			:initial-mode="authModalMode"
			@close="closeAuthModal"
			@mode-change="handleModalModeChange"
			@login="handleLogin"
			@signup="handleSignup"
			@facebook-login="handleFacebookLogin"
			@google-login="handleGoogleLogin"
			@facebook-signup="handleFacebookSignup"
			@google-signup="handleGoogleSignup"
			@forgot-password="handleForgotPassword"
		/>
		<!-- Original login component for Get Heardly button -->
		<login ref="loginView"></login>
	</div>
</template>

<script>
	import AuthModal from '~/components/AuthModal.vue'
	import Login from '~/components/login.vue'

	export default {
		components: {
			AuthModal,
			Login
		},
		props: {
			needLogoNavigate: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				showAuthModal: false,
				authModalMode: 'login' // 'signup' or 'login'
			}
		},
		methods: {
			toIndex() {
				if (this.needLogoNavigate) {
					this.$router.push({
						path: '/'
					})
				}
			},
			openLoginModal() {
				// Log in 按钮：打开登录模态框
				this.authModalMode = 'login'
				this.showAuthModal = true
			},
			showLogin() {
				// Get Heardly 按钮：打开原来的 login 组件（注册表单）
				this.$refs.loginView.showLogin = true
			},
			closeAuthModal() {
				this.showAuthModal = false
			},
			handleModalModeChange(mode) {
				this.authModalMode = mode
			},
			handleLogin(formData) {
				// 处理登录逻辑
				console.log('登录:', formData)
				// TODO: 调用登录 API
				this.closeAuthModal()
			},
			handleSignup(formData) {
				// 处理注册逻辑
				console.log('注册:', formData)
				// TODO: 调用注册 API
				this.closeAuthModal()
			},
			handleFacebookLogin() {
				// 处理 Facebook 登录
				console.log('Facebook 登录')
				// TODO: 实现 Facebook 登录逻辑
			},
			handleGoogleLogin() {
				// 处理 Google 登录
				console.log('Google 登录')
				// TODO: 实现 Google 登录逻辑
			},
			handleFacebookSignup() {
				// 处理 Facebook 注册
				console.log('Facebook 注册')
				// TODO: 实现 Facebook 注册逻辑
			},
			handleGoogleSignup() {
				// 处理 Google 注册
				console.log('Google 注册')
				// TODO: 实现 Google 注册逻辑
			},
			handleForgotPassword() {
				// 关闭模态框并跳转到忘记密码页面
				this.closeAuthModal()
				this.$router.push('/auth/forgot_password')
			},
			toForYou() {
				this.$router.push({
					path: '/app/for-you'
				})
			}
		},
		mounted() {

		}
	}
</script>

<style lang="less" scoped>
	@import '~/assets/css/common.less';
	.heri-head {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background: #fff;
		z-index: 5;
		box-sizing: border-box;
		border-bottom: 1px solid #E6E6E6;
		font-family: 'C-M';

		.logo {
			img {
				display: block;
			}
		}

		.heri-container {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.head-right {
			display: flex;
			align-items: center;
			gap: 1rem;

			.login {
				cursor: pointer;

				img {
					vertical-align: middle;
				}
			}

			.nav-btn {
				cursor: pointer;
				color: #333;
				font-family: 'C-M';
				text-align: center;
				transition: color .3s;
			}

			.nav-btn:hover {
				color: #3246F5;
			}

			.login-button {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				height: 2rem;
				padding: 0;
				border: 0;
				border-radius: 0.375rem;
				background-color: transparent;
				color: inherit;
				font-size: 0.875rem;
				font-weight: 500;
				line-height: 1.25rem;
				white-space: nowrap;
				cursor: pointer;
				transition-property: color, background-color, border-color;
				transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
				transition-duration: 0.15s;
				font-family: inherit;
				-webkit-font-smoothing: antialiased;
				box-sizing: border-box;
				appearance: button;
			}

			.login-button:hover {
				color: #0365f2;
			}

			.login-icon {
				width: 1.5rem;
				height: 1.5rem;
				margin-right: 0.25rem;
			}

			.get {
				cursor: pointer;
				color: #fff;
				background: #3246F5;
				font-family: 'C-B';
				text-align: center;
				text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.27);
			}
		}
	}

	@media screen and (max-width: 829px) {
		.heri-head {
			height: 4.5rem;
			padding: 0 1rem;

			.logo {
				img {
					height: 2.2rem;
					width: auto;
				}
			}

			.head-right {
				gap: 0.75rem;

				.nav-btn {
					font-size: 0.875rem;
					padding: 0.5rem 0;
				}

				.login-button {
					font-size: 0.875rem;
				}

				.get {
					font-size: 1rem;
					width: 7.5rem;
					height: 2.75rem;
					line-height: 2.875rem;
					border-radius: 1.5rem;
				}
			}
		}
	}

	@media screen and (min-width: 830px) {
		.heri-head {
			height: 74px;

			.logo {
				cursor: pointer;

				img {
					width: 190px;
					height: auto;
				}
			}

			.head-right {
				gap: 1.5rem;

				.login {
					margin-right: 40px;
					cursor: pointer;

					img {
						width: 20px;
						height: 20px;
						margin-right: 6px;
						vertical-align: middle;
					}
				}

				.nav-btn {
					font-size: 16px;
					padding: 0.5rem 0;
				}

				.login-button {
					font-size: 0.875rem;
				}

				.get {
					font-size: 18px;
					width: 145px;
					height: 44px;
					line-height: 45px;
					border-radius: 30px;
					transition: background .3s;
				}

				.get:hover {
					background: #0052cc;
				}
			}
		}
	}
</style>