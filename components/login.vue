<template>
	<div class="login-view" v-show="showLogin">
		<img src="@/static/img/login/close.png" alt="" class="login-close" @click="closeLogin" />
		<div class="login-box">
			<div class="login-title-text">Join today for FREE <div class="login-title-bottom">and start using Heardly in
					seconds!</div>
			</div>
			<div class="login-input">
				<img class="login-input-icon" src="@/static/img/index/email.png" alt="" />
				<!-- <input type="text" v-model="email" placeholder="Enter your email" /> -->
				<el-autocomplete v-model="email" :fetch-suggestions="querySearchEmail" :trigger-on-focus="false"
					placeholder="Enter your email" class="input autoinput">
				</el-autocomplete>
				<input v-model="email" placeholder="Enter your email" class="input normalinput" />
				<img @click="submitEmail" src="@/static/img/login/btn.png" alt="" class="login-btn" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showLogin: false,
				email: '',
				submiting: false
			}
		},
		methods: {
			closeLogin() {
				this.showLogin = false
			},
			toDownload() {
				this.$router.push({
					path: '/download'
				})
			},
			submitEmail() {
				let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
				if (emailRegex.test(this.email) && this.submiting == false) {
					this.submiting = true
					this.emailError = false
					this.$axios.$post('Api/Web/GetstartEmail', {
						sign: this.$md5(this.email + '&Sending_SMS!@#$%^!'),
						email: this.email,
						urlparam: this.$route.query,
						device: navigator.userAgent,
						urllink: this.$route.path
					}).then(res => {
						localStorage.setItem('email', this.email);
						this.$message({
							message: res.message,
							type: 'success'
						});
						setTimeout(() => {
							this.submiting = false
							this.toDownload()
						}, 1000)
					})
				} else if (this.submiting) {
					return false
				} else {
					this.$message.error('email error');
				}
			},
			// 邮箱自动填充后缀名
			querySearchEmail(queryString, callback) {
				const emailList = [{
						value: '@gmail.com'
					},
					{
						value: '@hotmail.com'
					},
					{
						value: '@outlook.com'
					},
					{
						value: '@yahoo.com'
					},
					{
						value: '@icloud.com'
					}
				]
				let results = []
				let queryList = []
				emailList.map(item => {
					queryList.push({
						value: queryString.split('@')[0] + item.value
					})
				})
				results = queryString ? queryList.filter(this.createFilter(queryString)) : queryList;
				callback(results);
			},

			// 邮箱填写过滤
			createFilter(queryString) {
				return (item) => {
					return (item.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				};
			},
		},
		mounted() {

		}
	}
</script>

<style lang="less" scoped>
	@import '~/assets/css/common.less';
	.login-view {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 6;


		.login-close {
			position: absolute;
			cursor: pointer;
			transition: all 0.15s ease-in-out;
		}

		.login-close:hover {
			transform: rotate(90deg);
		}

		.login-box {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translateX(-50%) translateY(-50%);

			.login-title-text {
				font-family: 'C-B';
				opacity: 0;

				.login-title-bottom {
					text-align: center;
					font-size: 21px;
					margin-top: 10px;
				}
			}

			.login-input {
				width: 100%;
				position: relative;
				opacity: 0;

				.input {
					width: 100%;
					height: 54px;
					border-radius: 10px;
					border: 1px solid #B9BEC7;
					box-sizing: border-box;
					padding-left: 52px;
					font-size: 16px;
					overflow: hidden;
					background: #fff;

					/deep/.el-input,
					/deep/.el-input__inner {
						height: 100%;
						width: 100%;
						border: none;
						padding: 0;
					}

				}

				.login-input-icon {
					position: absolute;
					left: 14px;
					top: 15px;
					width: 24px;
					height: auto;
					z-index: 2;
				}

				.login-btn {
					margin-top: 25px;
					width: 100%;
					height: auto;
					cursor: pointer;
				}
			}
		}
	}

	@media screen and (max-width: 829px) {
		.login-view {
			background: url(@/static/img/login/bg5.png) no-repeat left top;
			background-size: cover;

			.login-close {
				right: 1.5rem;
				top: 1.5rem;
				width: 2rem;
				height: 2rem;
			}

			.login-box {
				width: 18.75rem;
				text-align: center;

				.login-title-text {
					font-size: 1.875rem;
					transform: translateY(-100%);
					animation: titleTop .1s .2s linear forwards;

					.login-title-bottom {
						margin-top: 0.625rem;
						font-size: 1rem;
					}
				}

				.login-input {
					margin-top: 1.5625rem;
					transform: translateY(-100%);
					animation: titleBottom .1s .5s linear forwards;

					/deep/.el-input,
					/deep/.el-input__inner {
						font-size: 1rem;
					}
				}

				.autoinput {
					display: none;
				}
			}

			@keyframes titleTop {
				0% {
					opacity: 0;
					transform: translateY(-100%);
				}

				100% {
					opacity: 1;
					transform: translateY(0);
				}
			}

			@keyframes titleBottom {
				0% {
					opacity: 0;
					transform: translateY(100%);
				}

				100% {
					opacity: 1;
					transform: translateY(0);
				}
			}

		}
	}

	@media screen and (min-width: 830px) {
		.login-view {
			background: url(@/static/img/login/bg.png) no-repeat left top;
			background-size: 100% 100%;

			.login-close {
				right: 30px;
				top: 30px;
				width: 50px;
				height: 50px;
				transition: all 0.15s ease-in-out;
			}

			.login-box {
				width: 396px;

				.login-title-text {
					text-align: left;
					font-size: 42px;
					transform: translateX(-100%);
					animation: titleLeft .3s .2s linear forwards;

					.login-title-bottom {
						text-align: center;
						font-size: 21px;
						margin-top: 10px;
					}
				}

				@keyframes titleLeft {
					0% {
						opacity: 0;
						transform: translateX(-100%);
					}

					100% {
						opacity: 1;
						transform: translateX(0);
					}
				}

				@keyframes titleRight {
					0% {
						opacity: 0;
						transform: translateX(100%);
					}

					100% {
						opacity: 1;
						transform: translateX(0);
					}
				}


				.login-input {
					margin-top: 25px;
					transform: translateX(-100%);
					animation: titleRight .3s .5s linear forwards;

					.input {
						width: 100%;
						height: 54px;
						border-radius: 10px;
						border: 1px solid #B9BEC7;
						box-sizing: border-box;
						padding-left: 52px;
						font-size: 16px;
						overflow: hidden;
						background: #fff;

						/deep/.el-input,
						/deep/.el-input__inner {
							height: 100%;
							width: 100%;
							border: none;
							font-size: 20px;
							padding: 0;
						}
					}

					.normalinput {
						display: none;
					}

					.login-input-icon {
						position: absolute;
						left: 14px;
						top: 15px;
						width: 24px;
						height: auto;
						z-index: 2;
					}

					.login-btn {
						margin-top: 25px;
						width: 100%;
						height: auto;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>