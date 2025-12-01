<template>
	<div class="promocode">
		<div class="heri-container">
			<div class="promocode-container">
				<img @click="toIndex" src="@/static/img/head/logo3.png" alt="" class="logo" />
				<img src="@/static/img/promocode/oncely.png" alt="" class="logo2" />
				<template v-if="stepIndex==0">
					<div class="step">
						<div class="step-item" v-for="item in stepList" :key="item.id">
							<img class="step-item-img" :src="item.img" alt="" />
							<div class="step-item-text">{{item.text}}</div>
						</div>
					</div>
					<div class="form-top">
						<div class="title">Redeem your code for Heardly</div>
						<div class="content">And start achieving your goals by listening and reading key ideas from
							nonfiction bestsellers</div>
					</div>
					<no-ssr>
						<el-form :model="form" :rules="rules" ref="form" class="form">
							<el-form-item prop="code">
								<el-input class="form-input" type="text" v-model="form.code"
									placeholder="Oncely Code"></el-input>
							</el-form-item>
							<el-form-item prop="email">
								<el-input class="form-input" type="text" v-model="form.email"
									placeholder="Email Address">
								</el-input>
							</el-form-item>
							<el-form-item prop="pwd1">
								<el-input class="form-input" type="password" v-model="form.pwd1"
									placeholder="Create Password"></el-input>
							</el-form-item>
							<el-form-item prop="pwd2">
								<el-input class="form-input" type="password" v-model="form.pwd2"
									placeholder="Confirm Password"></el-input>
							</el-form-item>
							<el-form-item>
								<div class="get-btn" @click="submit">Redeem</div>
							</el-form-item>
						</el-form>
					</no-ssr>
				</template>
				<template v-else>
					<div class="step2">
						<div class="form-top">
							<div class="content"><img src="@/static/img/promocode/dui.png" alt="">Full access granted
							</div>
							<div class="title">Welcome to <i>Heardly!</i></div>
							<div class="content">And start achieving your goals by listening and reading key ideas from
								nonfiction bestsellers</div>
						</div>
					</div>
					<div class="code-view">
						<div class="code-text">Point your camera phone to download the app</div>
						<img class="code-img" src="@/static/img/download/HeardLyIOS.jpg" alt="">
					</div>
					<div class="get-btn step2-btn" v-if="isiOS" @click="download">Download</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			const regex = /^\d+$/
			var checkPwd1 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('Two inputs are inconsistent.pls check'));
				} else if (!regex.test(value)) {
					callback(new Error('must be at least 6 digits, numbers only (e.g., 523123)'));
				} else {
					if (this.form.pwd2 !== '') {
						this.$refs.form.validateField('pwd2');
					}
					callback();
				}
			};
			var checkPwd2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('Two inputs are inconsistent.pls check'));
				} else if (value !== this.form.pwd1) {
					callback(new Error('Two inputs are inconsistent.pls check'));
				} else {
					callback();
				}
			};
			var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
			var checkEmail = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('email error'))
				} else if (!emailRegex.test(value)) {
					callback(new Error('email error'))
				} else {
					callback()
				}
			}
			var checkCode = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('code error'));
				} else {
					callback();
				}
			};
			return {
				stepList: [{
					id: 1,
					img: require('@/static/img/promocode/suo.png'),
					text: 'Redeem code'
				}, {
					id: 2,
					img: require('@/static/img/promocode/star.png'),
					text: 'Start self-growth'
				}],
				form: {
					code: '',
					email: '',
					pwd1: '',
					pwd2: '',
				},
				stepIndex: 0,
				rules: {
					pwd1: [{
						validator: checkPwd1,
						trigger: 'blur'
					}],
					pwd2: [{
						validator: checkPwd2,
						trigger: 'blur'
					}],
					email: [{
						validator: checkEmail,
						trigger: 'blur'
					}],
					code: [{
						validator: checkCode,
						trigger: 'blur'
					}]
				},
				isiOS: false
			}
		},
		methods: {
			toIndex() {
				this.$router.push({
					path: '/'
				})
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
			submit() {
				this.$refs.form.validate((valid) => {
					if (valid) {
						this.$axios.$post('Api/User/DoPromocodeRegister', {
							sign: this.$md5(this.form.email + '&Sending_SMS!@#$%^!'),
							email: this.form.email,
							promocode: this.form.code,
							password: this.form.pwd1
						}).then(res => {
							this.$message({
								message: res.message,
								type: 'success'
							});
							this.stepIndex = 1
						})
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			download() {
				window.location.href =
					'https://apps.apple.com/us/app/heardly-book-summaries-daily/id6473803023';
			}
		},
		mounted() {
			this.isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
		}
	}
</script>

<style lang="less" scoped>
	@import '~/assets/css/common.less';
	.promocode {
		min-height: 100vh;
		font-family: 'C-R';
		overflow: hidden;
		width: 100%;
		box-sizing: border-box;
		background: linear-gradient(to bottom, #fff, #FBE1FF);

		.promocode-container {
			position: relative;

			.logo,
			.logo2 {
				position: absolute;
				cursor: pointer;
			}
		}


		.step {
			display: flex;
			justify-content: space-between;

			.step-item {
				text-align: right;

				.step-item-img {
					box-sizing: border-box;
					border-radius: 50%;
					background: rgba(0, 0, 0, .1);
				}
			}

			.step-item:first-child {
				text-align: left;
				position: relative;

				.step-item-img {
					background: #000;
				}
			}

			.step-item:first-child::after {
				background: rgba(0, 0, 0, .1);
				position: absolute;
				content: '';
			}
		}

		.form-top {
			text-align: center;

			.title {
				font-family: 'C-B';
			}

			.content {
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}

		.form {
			.form-input {
				display: block;
			}

			.el-form-item {
				margin-bottom: 0;
			}

			.is-error {
				margin-bottom: 22px;
			}
		}

		.get-btn {
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: center;
			font-family: 'C-B';
		}

		.step2 {}

		.code-view {
			text-align: center;
		}
	}

	@media screen and (max-width: 829px) {
		.promocode {
			padding-top: 1.11rem;

			.logo {
				height: 2.2rem;
				width: auto;
				left: 1rem;
			}

			.logo2 {
				height: 2.2rem;
				width: auto;
				left: 10.4rem;
			}

			.step {
				position: relative;
				padding: 4rem 1rem 2rem;

				.step-item {
					font-size: 0.8rem;

					.step-item-img {
						width: 1.4rem;
						height: 1.4rem;
						padding: 0.2rem;
					}
				}
			}

			.step::after {
				position: absolute;
				left: 50%;
				top: 4.7rem;
				transform: translateX(-50%);
				width: calc(100% - 8rem);
				height: 0.2rem;
				content: '';
				background: rgba(0, 0, 0, .1);
				border-radius: 4px;
			}

			.form-top {
				.title {
					font-size: 2rem;
					margin-bottom: 0.2rem;
					padding: 0 1.6rem 0.4rem;

					i {
						font-style: normal;
						color: #3246F5;
					}
				}

				.content {
					padding: 0 1rem;
					font-size: 1rem;
					margin-bottom: 10px;

					img {
						width: 1.4rem;
						height: 1.4rem;
						margin-right: 0.2rem;
					}
				}
			}

			.form {
				padding: 1rem;

				.form-input {
					margin-bottom: 0.4rem;
				}
			}

			.get-btn {
				cursor: pointer;
				height: 3rem;
				background: linear-gradient(to bottom, #7559ff, #5636f3);
				border-radius: 6px;
				text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.27);
				box-shadow: 0px 4px 14px 0 rgba(0, 0, 0, 0.16);
				color: #fff;
				font-size: 1.2rem;
				margin-top: 1.4rem;
			}

			.get-btn:hover {
				background: linear-gradient(to bottom, #8f78ff, #5a3cee);
			}

			.step2-btn {
				margin: 1.4rem 1rem;
			}

			.step2 {
				padding-top: 4rem;
			}

			.code-view {
				padding-top: 2rem;

				.code-text {
					padding: 0 1rem;
					margin-bottom: 1.4rem;
					font-size: 0.9rem;
				}

				.code-img {
					width: 10rem;
					height: 10rem;
				}
			}
		}
	}

	@media screen and (min-width: 830px) {
		.promocode {
			padding-top: 10px;

			.promocode-container {
				width: 580px;
				margin: 0 auto;
				position: relative;

				.logo {
					top: 0;
					left: -300px;
					height: 36px;
					width: auto;
				}

				.logo2 {
					height: 36px;
					width: auto;
					top: 0;
					left: -140px;
				}
			}

			.step {
				margin-top: 20px;
				margin-bottom: 30px;

				.step-item {
					font-size: 12px;

					.step-item-img {
						width: 20px;
						height: 20px;
						padding: 2px;
					}
				}


				.step-item:first-child::after {
					top: 8px;
					left: 30px;
					width: 520px;
					height: 4px;
					border-radius: 4px;
				}
			}

			.form-top {
				.title {
					font-size: 34px;
					margin-bottom: 6px;

					i {
						font-style: normal;
						color: #3246F5;
					}
				}

				.content {
					font-size: 18px;
					margin-bottom: 10px;

					img {
						width: 20px;
						height: 20px;
						margin-right: 10px;
					}
				}
			}

			.form {
				padding: 30px 100px;

				.form-input {
					margin-bottom: 6px;
				}
			}

			.get-btn {
				cursor: pointer;
				height: 50px;
				background: linear-gradient(to bottom, #7559ff, #5636f3);
				border-radius: 6px;
				text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.27);
				box-shadow: 0px 4px 14px 0 rgba(0, 0, 0, 0.16);
				color: #fff;
				font-size: 20px;
				margin-top: 30px;
			}

			.get-btn:hover {
				background: linear-gradient(to bottom, #8f78ff, #5a3cee);
			}

			.step2 {
				padding-top: 80px;
			}

			.step2-btn {
				margin: 20px 100px;
			}

			.code-view {
				padding-top: 30px;

				.code-text {
					margin-bottom: 20px;
				}

				.code-img {
					width: 260px;
					height: 260px;
				}
			}
		}
	}
</style>