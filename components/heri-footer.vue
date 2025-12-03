<template>
	<div class="footer">
		<div class="heri-container">
			<template v-if="needClasscify">
				<h2>Discover the HeardLy catalogue</h2>
				<div class="list">
					<div class="list-item" v-for="item in list" :key="item.id">
						<div class="list-item-title">{{item.title}}</div>
						<div class="list-content" v-for="(it,ind) in item.child" :key="ind" @click="openLogin">{{it}}
						</div>
					</div>
				</div>
				<div class="list">
					<div class="list-item" v-for="item in list4" :key="item.id">
						<div class="list-item-title">{{item.title}}</div>
						<div class="list-content" v-for="(it,ind) in item.child" :key="ind" @click="openLogin">{{it}}
						</div>
					</div>
				</div>
				<div class="line"></div>
			</template>
			<div class="list2">
				<div class="list2-left">
					<img src="@/static/img/head/logo3.png" alt="" />
					<p>15-min a book ——<br>Bestseller Summaries Daily</p>
					<!-- <img src="@/static/img/footer/apple.webp" alt="" />
					<img src="@/static/img/footer/google.webp" alt="" /> -->
				</div>
				<!-- <div class="list2-right">
					<div class="list2-right-item" v-for="item in list2" :key="item.id">
						<div class="list2-item-title">{{item.title}}</div>
						<div class="list2-item-content" v-for="(it,ind) in item.child" :key="ind">{{it}}</div>
					</div>
				</div> -->
				<div class="list2-bottom">
					<div class="list2-bottom-left">
						<div @click="toUrl(item)" class="list2-bottom-item" v-for="(item,index) in list3" :key="index">
							{{item.text}}
						</div>
					</div>
					<!-- <div class="list2-bottom-right">
						<img src="@/static/img/footer/icon1.webp" alt="" />
						<img src="@/static/img/footer/icon2.webp" alt="" />
						<img src="@/static/img/footer/icon3.webp" alt="" />
						<img src="@/static/img/footer/icon4.webp" alt="" />
					</div> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			needClasscify: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				list: [{
					id: 1,
					title: 'Popular titles',
					child: ['Atomic Habits',
						'The 5 AM Club',
						'The 7 Habits of Highly Effective People',
						'Rich Dad, Poor Dad',
						'12 Rules For Life',
						'Thinking, Fast and Slow',
						'Zero to One',
						"13 Things Mentally Strong People Don't Do",
						"Think and Grow Rich",
						"The Subtle Art of Not GIving a F*ck"
					]
				}, {
					id: 2,
					title: 'Popular categories',
					child: ["Personal Development",
						"Psychology",
						"Productivity",
						"Career & Success",
						"Management & Leadership",
						"Science",
						"Motivation & Inspiration",
						"Mindfulness & Happiness",
						"Money & Investments",
						"Communication Skills"
					]
				}, {
					id: 3,
					title: 'Popular topics',
					child: ["Best Christianity Books",
						"Best Memoirs Books",
						"Best Love Books",
						"Best Self-Help Books",
						"Best Leadership Books",
						"Best Spirituality Books",
						"Best Autobiographies Books",
						"Best Biographies Books",
						"Best Inspiration Books",
						"Best Persuasion Books"
					]
				}],
				list4: [{
					id: 4,
					title: 'Trending topics',
					child: ["Natural Sciences Books",
						"Writing Books",
						"Meditation Books",
						"Mathematics Books",
						"Stoicism Books",
						"Education & Upbringing Books",
						"Sports Books",
						"Sex Books",
						"Wars Books",
						"Marketing Books"
					]
				}, {
					id: 5,
					title: 'Featured titles',
					child: ["A Court of Thorns and Roses",
						"Just Mercy",
						"Tuesdays with Morrie",
						"Into the Wild",
						"The Devil in the White City",
						"Walden",
						"The Souls of Black Folk",
						"David and Goliath",
						"The Myth of Sisyphus",
						"Genesis"
					]
				}, {
					id: 6,
					title: 'Featured topics',
					child: ["Fantasy Romance Books",
						"Survival Books",
						"Drama Books",
						"Civil War Books",
						"Mystery Romance Books",
						"US History Books",
						"Sociology Books",
						"Self-Esteem Books",
						"Existentialism Books",
						"Bipolar Books"
					]
				}],
				list2: [{
					id: 1,
					title: 'Editorial',
					child: ["Book lists",
						"What is Nonfiction?",
						"What to Read Next",
						"Benefits of Reading"
					]
				}, {
					id: 2,
					title: 'Useful links',
					child: ["Pricing",
						"Heardly Business",
						"Gift Cards",
						"Heardly Magazine",
						"Contact & Help",
						"Cancel Subscription"
					]
				}, {
					id: 3,
					title: 'Company',
					child: ["About",
						"Careers",
						"Partners",
						"Code of Conduct",
						"Press Room"
					]
				}],
				list3: [{
						id: 1,
						text: "© Heardly 2024"
					},
					// "Sitemap",
					// "Legal Notice",
					{
						id: 4,
						text: "Terms of Service",
						url: '/privacy/service'
					},
					{
						id: 5,
						text: "Privacy Policies",
						url: '/privacy/policy'
					}
				]
			}
		},
		methods: {
			openLogin() {
				this.$parent.$refs.login.showLogin = true
			},
			toUrl(item) {
				if (item.url) {
					this.$router.push({
						path: item.url
					})
				}
			}
		},
		mounted() {
			let time = new Date().getFullYear()
			this.list3[0].text = '© Heardly ' + (time - 1) + ' - ' + time
		}
	}
</script>

<style lang="less" scoped>
	@import '~/assets/css/common.less';
	.footer {
		background: rgb(241, 246, 244);
		line-height: 1.4;
		font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;

		h2 {
			font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
		}


		.list {


			.list-item {

				.list-item-title {
					font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
					font-weight: 700; /* CeraPRO-Bold */
					color: #03314b;
				}

				.list-content {
					cursor: pointer;
				}

				.list-content:last-child {}

				.list-content:hover {
					color: rgb(3, 101, 242);
				}
			}
		}

		.line {
			width: 100%;
			height: 1px;
			background: rgb(186, 200, 206);
		}

		.list2 {
			vertical-align: top;

			.list2-left {
				vertical-align: top;
				font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
				color: rgb(3, 101, 242);


				img:first-child {
					margin-top: 0;
				}
			}

			.list2-right {
				vertical-align: top;

				.list2-right-item {
					vertical-align: top;

					.list2-item-title {
						font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
					}

					.list2-item-content {
						cursor: pointer;
					}

					.list2-item-content:hover {
						color: rgb(3, 101, 242);
					}
				}

				.list2-right-item:last-child {
					margin-right: 0;
				}
			}

			.list2-bottom {

				.list2-bottom-left {
					.list2-bottom-item {
						color: #3A4649;
						position: relative;
						cursor: pointer;
					}

					.list2-bottom-item:hover {
						color: rgb(3, 101, 242);
					}

					.list2-bottom-item::after {
						position: absolute;
						right: -10px;
						top: 50%;
						transform: translateY(-50%);
						height: 60%;
						width: 1px;
						background: #3A4649;
						content: '';
					}

					.list2-bottom-item:last-child::after {
						width: 0;
					}
				}
			}
		}
	}

	@media screen and (max-width: 829px) {
		.footer {
			padding: 4rem 1rem;

			h2 {
				font-size: 1.375rem;
				margin-bottom: 1.5rem;
				// display: none;
			}

			.list {
				width: 100%;
				overflow-x: scroll;
				display: flex;
				flex-wrap: nowrap;

				.list-item {
					flex-shrink: 0;
					width: 16rem;
					margin-right: 2rem;

					.list-item-title {
						font-size: 1.125rem;
						line-height: 1.5rem;
						margin-bottom: 1.5rem;
						font-weight: 700; /* CeraPRO-Bold */
						color: #03314b;
					}

					.list-content {
						font-size: .875rem;
						line-height: 1.25rem;
						margin-bottom: 1.2rem;
					}
				}

				// display: none;
			}

			.list::-webkit-scrollbar {
				display: none;
				width: 0;
			}

			.line {
				margin-bottom: 2.3rem;
			}

			.list2 {

				.list2-left {
					img {
						height: 2.2rem;
						width: auto;
					}
				}

				.list2-right {
					margin: 1.4rem 0;
					border-top: 1px solid rgb(186, 200, 206);

					.list2-right-item {
						padding: 1.4rem 0;
						border-bottom: 1px solid rgb(186, 200, 206);

						.list2-item-title {
							font-size: 1rem;
							line-height: 1.5rem;
							margin-bottom: 0.75rem;
						}

						.list2-item-content {
							font-size: .875rem;
							line-height: 1.25rem;
							margin-bottom: 1rem;
						}
					}
				}

				.list2-bottom {
					.list2-bottom-left {
						margin-bottom: 2.5rem;

						.list2-bottom-item {
							display: inline-block;
							margin-right: 20px;
							font-size: .875rem;
							line-height: 1.25rem;
						}
					}

					.list2-bottom-right {
						img {
							width: 1.5rem;
							height: 1.5rem;
							margin-left: 0.25rem;
						}
					}
				}
			}
		}
	}

	@media screen and (min-width: 830px) {
		.footer {
			padding-top: 64px;
			line-height: 1.4;

			h2 {
				padding: 0 48px;
				font-size: 24px;
				margin-bottom: 24px;
			}

			.list {
				margin: 0 48px;
				margin-bottom: 50px;

				.list-item {
					display: inline-block;
					width: calc((100% - 10px) / 3);

					.list-item-title {
						font-size: 20px;
						font-family: "CeraPro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
						font-weight: 700; /* CeraPRO-Bold */
						color: #03314b;
						margin-bottom: 24px;
					}

					.list-content {
						font-size: 14px;
						margin-bottom: 20px;
						cursor: pointer;
					}

					.list-content:last-child {
						margin-bottom: 0;
					}

					.list-content:hover {
						color: rgb(3, 101, 242);
					}
				}
			}

			.line {
				margin-bottom: 48px;
			}

			.list2 {
				padding-left: 48px;

				.list2-left {
					display: inline-block;
					width: 49%;
					vertical-align: top;
					font-size: 18px;
					font-family: 'C-B';
					color: rgb(3, 101, 242);


					img {
						width: 133px;
						height: auto;
						margin-top: 130px;
					}

					img:first-child {
						margin-top: 0;
						width: 195px;
						height: auto;
					}
				}

				.list2-right {
					display: inline-block;
					width: 49%;

					.list2-right-item {
						display: inline-block;
						width: calc((100% - 130px) / 3);
						margin-right: 60px;

						.list2-item-title {
							font-size: 20px;
							margin-bottom: 24px;
						}

						.list2-item-content {
							font-size: 14px;
							margin-bottom: 20px;
							cursor: pointer;
						}

						.list2-item-content:hover {
							color: rgb(3, 101, 242);
						}
					}

					.list2-right-item:last-child {
						margin-right: 0;
					}
				}

				.list2-bottom {
					margin-top: 80px;
					display: flex;
					justify-content: space-between;
					padding-bottom: 80px;
					padding-right: 48px;

					.list2-bottom-left {
						.list2-bottom-item {
							font-size: 14px;
							display: inline-block;
							margin-right: 20px;
						}
					}

					.list2-bottom-right {
						img {
							width: 24px;
							height: 24px;
							margin-left: 4px;
						}
					}
				}
			}
		}
	}
</style>