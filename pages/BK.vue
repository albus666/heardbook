<template>
	<div class="BK">
		<div class="heri-container">
			<img src="@/static/img/head/logo3.png" alt="" class="logo" />
			<div class="top-text">
				Conqurr your bucket list reads in <i>minutes per day</i>
			</div>
			<p class="second-text">Get Key ideas from nonfiction books each day</p>
			<div class="list">
				<div class="list-item" v-for="item in list" :key="item.id">
					<img :src="item.img" alt="" class="list-item-img">
					<p class="list-item-time">{{secondToMin(item.duration)}}</p>
				</div>
			</div>
			<div class="rating1"><i>124,000</i>Ratings <img class="rating-star" src="@/static/img/BK/star.png" alt="">
			</div>
			<div class="submit" @click="toAppStore">GO TO APP STORE</div>
			<div class="rating2"><i>124,000</i>Ratings <img class="rating-star" src="@/static/img/BK/star.png" alt="">
			</div>
		</div>
		<heri-footer :needClasscify="false"></heri-footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					id: 1,
					img: require('@/static/img/BK/book1.png'),
					duration: 180
				}, {
					id: 2,
					img: require('@/static/img/BK/book2.png'),
					duration: 120
				}, {
					id: 3,
					img: require('@/static/img/BK/book3.png'),
					duration: 420
				}, {
					id: 4,
					img: require('@/static/img/BK/book4.png'),
					duration: 240
				}, {
					id: 5,
					img: require('@/static/img/BK/book5.png'),
					duration: 300
				}, {
					id: 6,
					img: require('@/static/img/BK/book6.png'),
					duration: 360
				}, {
					id: 7,
					img: require('@/static/img/BK/book7.png'),
					duration: 420
				}]
			}
		},
		methods: {
			secondToMin(time) {
				let timestr = parseInt(time)
				let min = parseInt(timestr / 60)
				let sec = timestr % 60
				min = min == 0 ? '0min' : min + 'min'
				return min
			},
			toAppStore() {
				window.location.href = 'https://apps.apple.com/app/heardly-lesstimemoreknowledge/id6473803023';
			}
		},
		mounted() {}
	}
</script>

<style lang="less" scoped>
	.BK {
		font-family: 'C-R';
		background: #F1F6F4;
		color: #162A41;

		.logo {
			display: block;
			cursor: pointer;
			margin: 0 auto;
		}

		.top-text {
			font-family: 'C-B';
			text-align: center;

			i {
				color: #3645EC;
				font-style: normal;
			}
		}

		.second-text {
			text-align: center;
		}

		.list {
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: center;

			.list-item {
				background: url(@/static/img/BK/quickMask.png) no-repeat left bottom;
				background-size: contain;
				text-align: center;
				position: relative;

				.list-item-img {}

				.list-item-time {
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					color: #6B6B6B;
				}
			}
		}

		.rating1,
		.rating2 {
			font-family: 'C-M';
			color: #6B6B6B;
			display: flex;
			align-items: center;
			justify-content: center;

			i {
				font-style: normal;
				font-family: 'Helvetica';
			}
		}

		.submit {
			font-family: 'C-B';
			color: #fff;
			background: #3246F5;
			box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.17);
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		/deep/.list2-bottom {
			justify-content: center !important;
		}

		/deep/.list2-left {
			display: none !important;
		}
	}

	@media screen and (max-width: 829px) {
		.BK {
			padding-top: 3.875rem;

			.logo {
				height: 2rem;
				width: auto;
			}

			.top-text {
				margin: 3rem 3.125rem 0;
				line-height: 1.8125rem;
				font-size: 1.4375rem;
				color: #1D2A3F;
			}

			.second-text {
				margin: 1.3125rem 3.125rem 1.6875rem;
				font-size: 0.9375rem;
				line-height: 1.1875rem;
			}

			.list {
				width: 16rem;
				gap: 0.25rem;
				margin-bottom: 0.75rem;

				.list-item {
					width: 5.0625rem;
					height: 4.875rem;
					margin-bottom: 2rem;

					.list-item-img {
						width: 3.125rem;
						height: 4.3125rem;
					}

					.list-item-time {
						bottom: -1.25rem;
						font-size: 0.875rem;
					}
				}

				.list-item:nth-child(7),
				.list-item:nth-child(6) {
					display: none;
				}
			}

			.rating1 {
				display: none;
			}

			.rating2 {
				font-size: 0.625rem;
				line-height: 1rem;
				margin-top: 0.625rem;

				i {
					margin-right: 0.1rem;
				}

				.rating-star {
					width: 6rem;
					height: 1rem;
					margin-left: 0.875rem;
					margin-top: -0.1rem;
				}
			}

			.submit {
				margin: 0 auto;
				padding-top: 0.2rem;
				width: 20rem;
				height: 2.75rem;
				border-radius: 5rem;
				font-size: 1.1875rem;
				box-shadow: 0px 0.08rem 0px 0px rgba(0, 0, 0, 0.17);
				text-shadow: 0.06rem 0.08rem 0 rgba(0, 0, 0, 0.27);
			}

			/deep/.footer {
				padding-top: 3.625rem !important;
				padding-bottom: 0 !important;
			}

			/deep/.list2-bottom-left {
				padding-bottom: 2.5rem;
				margin-bottom: 0 !important;
				text-align: center;
			}

			/deep/.list2-bottom-item {
				color: #6B6B6B !important;
				font-size: 0.6875rem !important;
			}
		}
	}

	@media screen and (min-width: 830px) {
		.BK {
			padding-top: 56px;

			.heri-container {
				width: 560px;
			}

			.logo {
				width: 124px;
				height: auto;
			}

			.top-text {
				margin-top: 30px;
				line-height: 34px;
				font-size: 28px;
			}

			.second-text {
				margin-top: 18px;
				font-size: 19px;
				margin-bottom: 40px;
			}

			.list {
				width: 420px;
				gap: 5px;
				margin-bottom: 25px;

				.list-item {
					width: 100px;
					height: 97px;
					margin-bottom: 50px;

					.list-item-img {
						width: 62px;
						height: 85px;
					}

					.list-item-time {
						bottom: -25px;
						font-size: 18px;
					}
				}
			}

			.rating1 {
				font-size: 12px;
				line-height: 22px;

				i {
					margin-right: 4px;
				}

				.rating-star {
					width: 130px;
					height: 22px;
					margin-left: 15px;
					margin-top: -4px;
				}
			}

			.rating2 {
				display: none;
			}

			.submit {
				margin: 8px auto;
				margin-top: 32px;
				width: 370px;
				height: 50px;
				border-radius: 80px;
				font-size: 24px;
				text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.27);
			}

			/deep/.list2-bottom-item {
				font-size: 13px !important;
			}
		}
	}
</style>