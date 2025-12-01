<template>
	<div class="download">
		<div class="heri-container">
			<img @click="toIndex" src="@/static/img/head/logo3.png" alt="" class="logo" />
			<div class="download-view">
				<div class="title">
					Learn Something New Everyday.<br>One more step!
				</div>
				<div class="list">
					<div class="list-item" v-for="(item,index) in list" :key="item.id" @click="listClick(item,index)">
						<div :class="['list-item-title',index==0?'list-item-title-b':'']">{{item.title}}</div>
						<div class="list-item-title2" v-if="index==0"><b>25K+ Smartest</b> minds Joined</div>
						<div :class="['list-item-img-box',item.icon?'list-item-img-code':'']">
							<img class="list-item-img" :src="item.img" alt="" />
							<img class="list-item-icon" :src="item.icon" v-if="item.icon" alt="" />
						</div>
						<div :class="['list-item-bottom',item.click?'list-item-bottom-click':'']" v-if="item.bottom">
							{{item.bottom}}
							<img v-if="item.click" src="@/static/img/download/get.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<login></login>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					id: 1,
					title: 'IOS App',
					img: require('@/static/img/download/HeardLyIOS.jpg'),
					icon: require('@/static/img/download/ios.png'),
					bottom: 'Download APP',
					click: false
				}, {
					id: 2,
					title: 'Android App',
					img: require('@/static/img/download/android.png'),
					bottom: 'Join the WaitList',
					click: false
				}, {
					id: 3,
					title: 'DESKTOP',
					img: require('@/static/img/download/desktop.png'),
					bottom: 'Join the WaitList',
					click: false
				}]
			}
		},
		methods: {
			toIndex() {
				this.$router.push({
					path: '/'
				})
			},
			listClick(item, index) {
				if (index != 0) {
					this.list[index].click = true
					this.list[index].bottom = 'Upcoming release will notify by email.'
					this.submit()
				}
			},
			submit() {
				this.$axios.$post('Api/Web/GetstartEmail', {
					sign: this.$md5(localStorage.getItem('email') + '&Sending_SMS!@#$%^!'),
					email: localStorage.getItem('email'),
					urlparam: this.$route.query,
					device: navigator.userAgent,
					urllink: this.$route.path,
					clickandroid: this.list[1].click == true ? 1 : 0,
					clickdesktop: this.list[2].click == true ? 1 : 0
				}).then(res => {

				})
			}
		},
		mounted() {
			console.log(navigator.userAgent)
			const isAndroid = /Android|harmonyos|honor|huawei|mi\s|mix\s|redmi|sm-|oppo|vivo/i.test(navigator.userAgent);
			const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
			const isWin = /Windows|Mac/i.test(navigator.userAgent)
			if (isAndroid) {
				this.list[1].click = true
				this.list[1].bottom = 'Upcoming release will notify by email.'
				this.submit()
			} else if (isiOS) {
				// iOS 设备的 URL 
				window.location.href = 'https://apps.apple.com/us/app/heardly-book-summaries-daily/id6473803023';
			} else if (isWin) {

			} else {
				// 如果不是 Android 或 iOS 设备，你可以提供一个默认的 URL 
				// redirectURL = '';
				// this.toIndex()
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '~/assets/css/common.less';
	.download {
		font-family: 'C-R';
		overflow: hidden;
		width: 100%;
		box-sizing: border-box;
		background: linear-gradient(to bottom, #fff, #FBE1FF);

		.logo {
			cursor: pointer;
		}

		.download-view {
			box-sizing: border-box;
			height: 100%;

			.title {
				color: #04314B;
				font-family: 'C-B';
				text-align: center;
			}

			.list {

				.list-item {
					width: 266px;
					height: 295px;
					box-sizing: border-box;
					border: 1px solid #005DF2;
					border-radius: 10px;
					margin-right: 20px;
					position: relative;
					background: #fff;
					padding: 25px 16px;

					.list-item-title {
						color: #8C8C8C;
						font-size: 27px;
						font-family: 'C-B';
						margin-bottom: 16px;
					}

					.list-item-title-b {
						color: #171717;
					}

					.list-item-title2 {
						font-family: 'C-M';
						position: absolute;
						left: 16px;
						top: 60px;
					}

					.list-item-img-box {
						width: 134px;
						height: 134px;
						margin: 36px auto 0;
						position: relative;

						.list-item-img {
							width: 100%;
							height: 100%;
						}

						.list-item-icon {
							width: 30px;
							height: 30px;
							position: absolute;
							left: 50%;
							top: 50%;
							transform: translateX(-50%) translateY(-50%);
						}
					}

					.list-item-img-code {
						border: 1px solid #000;
						margin-top: 40px;

						.list-item-img {
							padding: 6px;
							box-sizing: border-box;
						}
					}

					.list-item-bottom {
						position: absolute;
						left: 50%;
						bottom: 14px;
						transform: translateX(-50%);
						width: 166px;
						font-size: 18px;
						color: #3B3B3B;
						text-decoration: underline;
						text-align: center;
						line-height: 21px;
						cursor: pointer;
					}

					.list-item-bottom:hover {
						color: #007DF3;
					}

					.list-item-bottom-click {
						text-decoration: none;
						color: #007DF3;

						img {
							width: 16px;
							height: 16px;
							position: absolute;
							left: -14px;
							top: 2px;
						}
					}

				}
			}
		}
	}

	@media screen and (max-width: 829px) {
		.download {
			padding-top: 1.11rem;

			.logo {
				margin-left: 1rem;
				height: 2.2rem;
				width: auto;
			}

			.download-view {
				padding-bottom: 10rem;

				.title {
					margin-top: 5rem;
					font-size: 1.4rem;
					line-height: 1.8rem;
				}

				.list {
					.list-item {
						margin: 2rem auto;
					}
				}
			}
		}
	}

	@media screen and (min-width: 830px) {
		.download {
			height: 100vh;
			padding-top: 10px;

			.logo {
				width: 190px;
				height: auto;
				padding-left: 210px;
				cursor: pointer;
			}

			.download-view {
				padding-bottom: 113px;
				height: 100%;

				.title {
					margin-top: 80px;
					font-size: 40px;
					line-height: 50px;
				}

				.list {
					margin-top: 60px;
					display: flex;
					justify-content: center;

					.list-item {
						width: 266px;
						height: 295px;
						box-sizing: border-box;
						border: 1px solid #005DF2;
						border-radius: 10px;
						margin-right: 20px;
						position: relative;
						background: #fff;
						padding: 25px 16px;

						.list-item-title {
							color: #8C8C8C;
							font-size: 27px;
							font-family: 'C-B';
							margin-bottom: 16px;
						}

						.list-item-title-b {
							color: #171717;
						}

						.list-item-title2 {
							font-family: 'C-M';
							position: absolute;
							left: 16px;
							top: 60px;
						}

						.list-item-img-box {
							width: 134px;
							height: 134px;
							margin: 36px auto 0;
							position: relative;

							.list-item-img {
								width: 100%;
								height: 100%;
							}

							.list-item-icon {
								width: 30px;
								height: 30px;
								position: absolute;
								left: 50%;
								top: 50%;
								transform: translateX(-50%) translateY(-50%);
							}
						}

						.list-item-img-code {
							border: 1px solid #000;
							margin-top: 40px;

							.list-item-img {
								padding: 6px;
								box-sizing: border-box;
							}
						}

						.list-item-bottom {
							position: absolute;
							left: 50%;
							bottom: 14px;
							transform: translateX(-50%);
							width: 166px;
							font-size: 18px;
							color: #3B3B3B;
							text-decoration: underline;
							text-align: center;
							line-height: 21px;
							cursor: pointer;
						}

						.list-item-bottom:hover {
							color: #007DF3;
						}

						.list-item-bottom-click {
							text-decoration: none;
							color: #007DF3;

							img {
								width: 16px;
								height: 16px;
								position: absolute;
								left: -14px;
								top: 2px;
							}
						}

					}

					.list-item:last-child {
						margin-right: 0;
					}
				}
			}
		}
	}
</style>