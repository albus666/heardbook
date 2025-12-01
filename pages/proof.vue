<template>
	<div class="proof">
		<img src="@/static/img/proof/logo.png" class="logo" alt="" />
		<div class="title">Become the Most Interesting Person in the Room!</div>
		<div class="title2">Read & Listen to 15-min books summaries</div>
		<div class="list">
			<div class="list-item" v-for="item in list" :key="item.id">
				<div class="list-item-left">
					<span class="list-item-day">Day {{item.id}}</span>
					<span class="list-item-bookname">{{item.text}}</span>
				</div>
				<div class="list-item-time">
					{{item.time}} min
					<img class="list-item-time-img" src="@/static/img/proof/erji.png" alt="">
				</div>
			</div>
		</div>
		<img class="awards" src="@/static/img/proof/awards.png" alt="">
		<div class="btn" @click="toAppStore">Go To App Store</div>
		<div class="star">188.0K ratings <img class="star-img" src="@/static/img/proof/5stars.png" alt=""></div>
		<div class="footer-text">Get noticed with Heardly! Access insightful ideas on various topics & bo a
			conversationalist. Download App to become more interesting!</div>
		<div class="footer-list">
			<u @click="toUrl(item.url)" class="footer-list-item" v-for="item in footer" :key="item.id">{{item.text}}
			</u>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					id: 1,
					text: 'How to Talk to Anyone',
					time: '15'
				}, {
					id: 2,
					text: 'Atomic Habits',
					time: '16'
				}, {
					id: 3,
					text: 'Rich Dad Poor Dad',
					time: '17'
				}, {
					id: 4,
					text: 'The 5 AM Club',
					time: '12'
				}, {
					id: 5,
					text: 'The 48 Laws of Power',
					time: '15'
				}, {
					id: 6,
					text: 'Thinking, Fast and Slow',
					time: '9'
				}, {
					id: 7,
					text: 'Make Your Bed',
					time: '13'
				}, {
					id: 8,
					text: 'The 80/20 Principle',
					time: '15'
				}, {
					id: 9,
					text: 'Think and Grow Rich',
					time: '17'
				}, {
					id: 10,
					text: 'The Power of Habit',
					time: '12'
				}],
				footer: [{
					id: 1,
					text: 'Legal Notice',
					url: '/privacy/service'
				}, {
					id: 2,
					text: 'Terms of Service',
					url: '/privacy/service'
				}, {
					id: 3,
					text: 'Privacy Policies',
					url: '/privacy/policy'
				}]
			}
		},
		methods: {
			toUrl(url) {
				this.$router.push({
					path: url
				})
			},
			toAppStore() {
				window.location.href = 'https://heardly.onelink.me/tjIz/gotofb';
			}
		},
		mounted() {}
	}
</script>

<style lang="less" scoped>
	@import '~/assets/css/common.less';
	.proof {
		font-family: 'C-R';
		color: #1D2A3F;

		.logo {
			display: block;
			width: auto;
			margin: 0 auto;
		}

		.title {
			font-family: 'C-B';
			text-align: center;
		}

		.title2 {
			text-align: center;
		}

		.list {
			.list-item {
				display: flex;

				.list-item-left {
					text-overflow: ellipsis;
					order: 1;
					overflow: hidden;

					.list-item-day {
						display: inline-block;
						min-width: 50px;
						font-family: 'C-B';
					}

					.list-item-bookname {
						text-align: center;
						text-overflow: ellipsis;
						letter-spacing: .087px;
						white-space: nowrap;
					}
				}


				.list-item-time {
					order: 3;

					.list-item-time-img {}
				}
			}

			.list-item::after {
				content: "";
				background-image: radial-gradient(circle, currentColor 1px, transparent 1.2px);
				background-position: bottom;
				background-repeat: space no-repeat;
				background-size: 6px 12px;
				flex-grow: 1;
				order: 2;
			}
		}

		.awards {
			height: auto;
			display: block;
			margin: 0 auto;
			width: 100%;
		}

		.btn {
			font-family: 'C-B';
			background: #3247F6;
			color: #fff;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.27);
		}

		.star {
			font-family: Helvetica;
			color: #000000;
			display: flex;
			align-items: flex-end;
			justify-content: center;
		}

		.footer-text {
			color: #252525;
		}

		.footer-list {
			text-align: center;

			.footer-list-item {
				cursor: pointer;
				position: relative;
				color: #ABABAB;
				display: inline-block;
			}

			.footer-list-item::after {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				content: '';
				background: #ABABAB;
			}

			.footer-list-item:last-child {
				margin-right: 0;
			}

			.footer-list-item:last-child::after {
				width: 0;
			}
		}
	}

	@media screen and (max-width: 829px) {
		.proof {
			padding: 1.2rem 0.9375rem;

			.logo {
				height: 1.875rem;
				margin-bottom: 1.15625rem;
			}

			.title {
				padding: 0 0.5rem;
				font-size: 1.1875rem;
				line-height: 1.5625rem;
				margin-bottom: 0.2rem;
			}

			.title2 {
				font-size: 0.9375rem;
				margin-bottom: 1.25rem;
			}

			.list {
				margin-bottom: 1.25rem;

				.list-item {
					margin-bottom: 0.41rem;

					.list-item-left {
						margin-top: -0.0625rem;

						.list-item-day {
							font-size: 0.9375rem;
						}

						.list-item-bookname {
							font-size: 0.8125rem;
						}
					}


					.list-item-time {
						font-size: 0.8125rem;

						.list-item-time-img {
							width: 0.875rem;
							height: 0.875rem;
						}
					}
				}
			}

			.awards {
				margin-bottom: 1.25rem;
			}

			.btn {
				height: 3.75rem;
				border-radius: 0.625rem;
				font-size: 1.1875rem;
				margin-bottom: 0.6rem;
			}

			.star {
				font-size: 0.6875rem;
				margin-bottom: 0.6875rem;

				.star-img {
					margin-left: 0.6875rem;
					height: 1rem;
					width: auto;
				}
			}

			.footer-text {
				font-size: 0.625rem;
				line-height: 0.71875rem;
				margin-bottom: 0.2rem;
			}

			.footer-list {
				.footer-list-item {
					font-size: 0.65625rem;
					margin-right: 0.625rem;
				}

				.footer-list-item::after {
					width: 0.0625rem;
					height: 0.4375rem;
					right: -0.3125rem;
				}
			}
		}
	}

	@media screen and (min-width: 830px) {
		.proof {
			width: 530px;
			margin: 0 auto;
			padding: 30px 0;

			.logo {
				height: 36px;
				margin-bottom: 12px;
			}

			.title {
				font-size: 20px;
				line-height: 30px;
			}

			.title2 {
				font-size: 16px;
				line-height: 24px;
				margin-bottom: 16px;
			}

			.list {
				margin-bottom: 26px;

				.list-item {
					margin-bottom: 8px;

					.list-item-left {

						.list-item-day {
							font-size: 13px;
						}

						.list-item-bookname {
							font-size: 12px;
						}
					}


					.list-item-time {
						font-size: 13px;

						.list-item-time-img {
							width: 14px;
							height: 14px;
						}
					}
				}
			}

			.awards {
				width: 352px;
				margin-bottom: 26px;
			}

			.btn {
				height: 60px;
				border-radius: 10px;
				font-size: 20px;
				margin-bottom: 14px;
			}

			.star {
				font-size: 12px;
				margin-bottom: 8px;

				.star-img {
					margin-left: 0.6875rem;
					height: 1rem;
					width: auto;
				}
			}

			.footer-text {
				text-align: center;
				font-size: 11px;
				line-height: 16px;
				margin-bottom: 8px;
			}

			.footer-list {
				.footer-list-item {
					font-size: 11px;
					margin-right: 20px;
				}

				.footer-list-item::after {
					width: 1px;
					height: 10px;
					right: -10px;
				}
			}
		}
	}
</style>