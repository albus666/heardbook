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
				<div class="nav-btn" @click="toLogin">Login</div>
				<div class="get" @click="showLogin">Get Heardly</div>
			</div>
		</div>
		<login ref="loginView"></login>
	</div>
</template>

<script>
	export default {
		props: {
			needLogoNavigate: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {}
		},
		methods: {
			toIndex() {
				if (this.needLogoNavigate) {
					this.$router.push({
						path: '/'
					})
				}
			},
			showLogin() {
				this.$refs.loginView.showLogin = true
			},
			toForYou() {
				this.$router.push({
					path: '/app/for-you'
				})
			},
			toLogin() {
				this.$router.push({
					path: '/auth/login'
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