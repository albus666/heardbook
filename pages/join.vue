<template>
	<div class="index">
		<headnav></headnav>
		<div class="full full1">
			<div class="heri-container">
				<div class="full-left">
					<div class="top-text">
						<div class="blue">Read</div>,
						<div class="blue">Listen</div>,
						<div class="blue">Watch</div>
					</div>
					<div class="center-text">a Book in 5 Min.</div>
					<div class="bottom-text">
						dozens of <b>AI Agents</b> are behind it, helping you leave nobody behind!
					</div>

					<div class="input-view" slot="reference">
						<img src="@/static/img/index/email.png" alt="" />
						<el-autocomplete v-model="email" :fetch-suggestions="querySearchEmail" :trigger-on-focus="false"
							placeholder="Enter your email" class="input autoinput">
						</el-autocomplete>
						<input v-model="email" placeholder="Enter your email" class="input normalinput" />
						<div class="input-btn" @click="submitEmail">
							<template v-if="submiting">
								<i class="el-icon-loading"></i>
							</template>
							<template v-else>
								Get Started
							</template>
						</div>
					</div>
					<div class="swiper">
						<div v-swiper:mySwiper="swiperOption" key='1'>
							<div class="swiper-wrapper">
								<div class="swiper-slide" v-for="(item,index) in swiper1" :key="item.id">
									<img :src="item.img" alt="" />{{item.text}}
								</div>
							</div>
						</div>
					</div>
					<div class="tag">By signing up, you will also receive the free audiobook shorts from MindHub
						Newsletter in the future, opt-out anytime.</div>
				</div>
				<div class="full-right">
					<img src="@/static/img/index/peitu.png" alt="" class="img1" />
					<img src="@/static/img/index/mobile.png" alt="" class="img2" />
				</div>
			</div>
		</div>
		<div class="full2">
			<div class="full2-title big-title">
				<p>Learn Something New</p>
				<p>every day</p>
			</div>
			<div class="heri-container">
				<div class="full-left">
					<div class="full-left-item" v-for="item in full2List" :key="item.id">
						<div class="full-left-item-num">{{'0'+item.id}}</div>
						<div class="full-left-item-text">
							<div class="full-left-title">{{item.title}}</div>
							<div class="full-left-content">{{item.content}}</div>
						</div>
					</div>
				</div>
				<div class="full-right">
					<div class="full-right-player-box">
						<img class="full-right-player-bg" src="@/static/img/index/playerbg2.png" alt="" />
						<video zoom="none" :controls="!showPlayBtn" class="full-right-player" ref="videoPlayer">
							<source src="https://heardapp.soundems.com/heardlyweb/homepagevideo.mp4" type="video/mp4" />
						</video>
						<img class="full-right-player-shadow" src="@/static/img/index/playershadow.png" alt="" />
						<div class="full-right-player-btn-box" @click="playVideo" v-if="showPlayBtn">
							<img class="full-right-player-btn" src="@/static/img/index/play.png" alt="" />
							30s
						</div>
						<img class="full-right-player-mask" @click="playVideo" v-if="showPlayBtn"
							src="@/static/img/index/playermask.png" alt="">
						<div class="full-right-bottom" @click="getEmail">Get your FREE trial</div>
					</div>
				</div>
			</div>
			<div class="get-btn" @click="getEmail">Get your FREE trial</div>
		</div>
		<div class="full2-5">
			<div class="heri-container">
				<div class="top-title">
					“<b>Great app.</b> Heardly is addictive, ideal for quick breaks - morning, noon, or night. It's
					impeccably written, thorough, and user-friendly.”
					<img src="@/static/img/index/full2-star.png" alt="" />
					Jowee T.
				</div>
				<div class="list">
					<div class="list-item" v-for="item in advantageList" :key="item.id">
						<img class="list-item-img" :src="item.icon" alt="" />
						<p class="list-item-title"><i class="list-item-title-blue">{{item.title1}}</i>{{item.title2}}
						</p>
						<p class="list-item-content">{{item.content}}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="full3">
			<div class="full3-title big-title">
				<p>A world of Knowledge</p>
				<p>in your Pocket</p>
			</div>
			<div class="get-btn" @click="getEmail">Get Started</div>
			<div class="get-text">What are you interested in ?</div>
			<div class="list-box">
				<div class="list">
					<div @click="changeClasscify(item.id)"
						:class="['list-item',classcifyCurrent==item.id?'list-item-active':'']"
						v-for="(item,index) in classcifyList1" :key="item.id">
						<img :src="item.img" class="list-item-img" />
						<div class="list-item-text">{{item.text}}</div>
					</div>
				</div>
				<div class="list">
					<div @click="changeClasscify(item.id)"
						:class="['list-item',classcifyCurrent==item.id?'list-item-active':'']"
						v-for="(item,index) in classcifyList2" :key="item.id">
						<img :src="item.img" class="list-item-img" />
						<div class="list-item-text">{{item.text}}</div>
					</div>
				</div>
				<div class="list">
					<div @click="changeClasscify(item.id)"
						:class="['list-item',classcifyCurrent==item.id?'list-item-active':'']"
						v-for="(item,index) in classcifyList3" :key="item.id">
						<img :src="item.img" class="list-item-img" />
						<div class="list-item-text">{{item.text}}</div>
					</div>
				</div>
			</div>
			<div class="book-list-box">
				<div class="book-list turnLeft">
					<div class="book-list-item" v-for="item in bookList1" :key="item.id">
						<img class="book-list-item-mask" src="@/static/img/index/bookMask.png" alt="" />
						<img class="book-list-item-img"
							:src="item.bookimage+'?imageMogr2/thumbnail/360x/strip/quality/90/format/webp'" alt="" />
					</div>
				</div>
				<div class="book-list turnRight">
					<div class="book-list-item" v-for="item in bookList2" :key="item.id">
						<img class="book-list-item-mask" src="@/static/img/index/bookMask.png" alt="" />
						<img class="book-list-item-img"
							:src="item.bookimage+'?imageMogr2/thumbnail/360x/strip/quality/90/format/webp'" alt="" />
					</div>
				</div>
			</div>
		</div>
		<div class="full4">
			<div class="full4-title">
				How will you level up?
			</div>
			<div class="get-text">Whether you prefer to listen, read, watch, or chat, all right here!</div>
			<div class="get-btn" @click="getEmail">Start your FREE trial</div>
			<no-ssr>
				<swiper class="full4-swiper" :options="full4swiperOption" ref="full4swiper">
					<swiper-slide :style="'background:'+item.bg" class="full4-swiper-slide"
						v-for="(item,index) in full4swiper" :key="item.id">
						<div class="full4-swiper-item">
							<div class="full4-swiper-slide-left">
								<p class="full4-swiper-slide-title">{{item.text1}} <i>{{item.text2}}</i></p>
								<p class="full4-swiper-slide-content">{{item.text3}}</p>
							</div>
							<img class="full4-swiper-slide-img" :src="item.img" alt="" />
						</div>
					</swiper-slide>
					<div class="full4-swiper-pagination" slot="pagination"></div>
				</swiper>
			</no-ssr>
		</div>
		<div class="full5">
			<div class="big-title">
				<p>Join Smartest Mind</p>
				<p>growing with Heardly</p>
			</div>
			<div class="get-btn" @click="getEmail">Start your FREE trial</div>
			<div class="member">
				<div class="member-item" v-for="item in full5List" :key="item.id">
					<p class="member-item-num">{{item.num}}<i>%</i></p>
					<p class="member-item-text">{{item.text}}</p>
				</div>
			</div>
			<div class="free">
				<div class="free-title">Start with a 7-day free trial</div>
				<div class="free-title2">Get unlimited access to 50,000 bestsellers(Update 365 x 24 hour)</div>
				<div class="free-safe"><img src="@/static/img/index/safe.png" alt="">Cancel anytime during your trial
				</div>
				<div class="free-btn" @click="getEmail">Get Started</div>
				<div class="free-list-title">How your free trial works?</div>
				<div class="free-list">
					<div class="free-list-item" v-for="item in full5FreeList" :key="item.id">
						<p class="free-list-item-title">{{item.title}}</p>
						<p class="free-list-item-content">{{item.content}}</p>
					</div>
				</div>
			</div>
		</div>
		<div class="full6">
			<div class="full6-title">Grow wherever you are</div>
			<div class="get-text">In life's gaps—drives, waits, lunch, sleep—fill with learning, knowledge to keep. Only
				spend 1% of your time each day.</div>
			<div class="heri-container">
				<div class="list">
					<div class="list-item" v-for="item in full6List" :key="item.id">
						<p class="list-item-text">{{item.text}}</p>
						<img class="list-item-img" :src="item.img" alt="" />
					</div>
				</div>
			</div>
			<div class="get-btn" @click="getEmail">Start your FREE trial</div>
		</div>
		<login ref="login"></login>
		<heri-footer></heri-footer>
	</div>
</template>

<script>
	const datajs = require('@/static/js/data')
	import {
		Swiper,
		SwiperSlide
	} from 'swiper';
	export default {
		data() {
			return {
				email: '',
				submiting: false,
				swiper1: [{
					id: 1,
					img: require('@/static/img/index/star.png'),
					text: '25K+ smartest minds are ahead of the curve.'
				}, {
					id: 2,
					img: require('@/static/img/index/aislogo.png'),
					text: 'AIS Rated #1 AI Way to Save Time Reading Product'
				}],
				swiperCurrent1: 0,
				swiperOption: {
					// 循环点击
					loop: true,
					// 配置分页
					autoplay: true,
					direction: "vertical",
					height: '30'
				},
				full2List: [{
					id: 1,
					title: 'Listen & Watch Key Points',
					content: 'Elevate your personal growth with summaries of bestsellers.'
				}, {
					id: 2,
					title: 'Satisfy your curiosity',
					content: 'Explore over 50,000 titles with personalized recommendations.'
				}, {
					id: 3,
					title: 'An expert at your fingertips',
					content: 'Learn expert insights with step-by-step guides.'
				}],
				showPlayBtn: true,
				advantageList: [{
					id: 1,
					icon: require('@/static/img/index/full2-icon1.png'),
					title1: '5000+ ',
					title2: 'Titles',
					content: 'The most extensive library of its kind'
				}, {
					id: 2,
					icon: require('@/static/img/index/full2-icon2.png'),
					title1: 'Al',
					title2: 'ways Fresh',
					content: 'Al Agents manage the rankings 24hrs'
				}, {
					id: 3,
					icon: require('@/static/img/index/full2-icon3.png'),
					title1: '36+ ',
					title2: 'Languages',
					content: 'Native-level translation and voice.'
				}],
				classcifyList1: datajs.classcifyList1,
				classcifyList2: datajs.classcifyList2,
				classcifyList3: datajs.classcifyList3,
				classcifyCurrent: 0,
				bookList1: [],
				bookList2: [],
				full4swiperOption: {
					loop: true,
					autoplay: true,
					slidesPerView: 'auto',
					spaceBetween: '3%',
					delay: 1000,
					pagination: {
						el: ".full4-swiper-pagination"
					},
				},
				full4swiper: [{
					id: 1,
					text1: 'Bestsellers condensed into',
					text2: 'bite-sized summaries.',
					text3: 'Discover powerful insights in just minutes, not hours or days, with our summaries of today’s most impactful books.',
					img: require('@/static/img/index/full4-1.png'),
					bg: '#E9E2FD'
				}, {
					id: 2,
					text1: 'Celebrity Book Lists:',
					text2: 'Becoming Your Guide.',
					text3: "Let experts/industry leaders quide you through today's latest topics and apply your learning immediately.Based on our Al-social media radar Agents.",
					img: require('@/static/img/index/full4-2.png'),
					bg: '#D6E8FC'
				}, {
					id: 3,
					text1: 'Books are the ticket!',
					text2: 'High-quality book clubs.',
					text3: 'The most time-efficient method is, of course, to find out how readers who have finished a book rate it! No ads, justauthentic short videos featuring real people.',
					img: require('@/static/img/index/full4-3.png'),
					bg: '#FEF2D8'
				}],
				full5List: [{
					id: 1,
					num: '92',
					text: 'of members read more than ever*'
				}, {
					id: 2,
					num: '95',
					text: 'of our members maintain better habits*'
				}, {
					id: 3,
					num: '85',
					text: 'of our active members use Heardly more than 100 days a year*'
				}],
				full5FreeList: [{
					id: 1,
					title: 'Today: trial starts',
					content: 'Enjoy the entire library,free for 7 days'
				}, {
					id: 2,
					title: 'Day 5: email reminder',
					content: 'You receive a notice email.'
				}, {
					id: 3,
					title: 'Day 7: Subscription starts',
					content: 'Your trial ends.ENJOY!'
				}],
				full6List: [{
					id: 1,
					text: 'Doing chores',
					img: require('@/static/img/index/full6-1.png')
				}, {
					id: 2,
					text: 'Driving',
					img: require('@/static/img/index/full6-2.png')
				}, {
					id: 3,
					text: 'Commuting',
					img: require('@/static/img/index/full6-3.png')
				}, {
					id: 4,
					text: 'Training',
					img: require('@/static/img/index/full6-4.png')
				}]
			}
		},
		computed: {

		},
		methods: {
			playVideo() {
				this.showPlayBtn = false
				this.$nextTick(() => {
					this.$refs.videoPlayer.play()
				})
			},
			toDownload() {
				this.$router.push({
					path: '/download'
				})
			},
			getEmail() {
				this.$refs.login.showLogin = true
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
			changeClasscify(id) {
				this.classcifyCurrent = id
				this.$axios.$post('Api/Web/BookList', {
					sign: this.$md5(id + '&Sending_SMS!@#$%^!'),
					classify: id
				}).then(res => {
					this.bookList1 = res.data.booklist1
					this.bookList2 = res.data.booklist2
				})
			}
		},
		mounted() {
			this.changeClasscify(0)
			this.swiper1[1].text = this.swiper1[1].text + ' ' + new Date().getFullYear()
		}
	}
</script>
<style lang="less" scoped>
	@import '~/assets/css/common.less';
	.index {
		font-family: 'C-R';
		overflow: hidden;
		width: 100%;

		.big-title {
			width: 100%;
			text-align: center;
			font-family: 'C-B';

			p:first-child {
				background: linear-gradient(to bottom, #50AADA 1%, #0037f5);
				-webkit-background-clip: text;
				/*将设置的背景颜色限制在文字中*/
				-webkit-text-fill-color: transparent;
			}

			p:last-child {
				background: linear-gradient(to bottom, #0037f5, #370fa7);
				-webkit-background-clip: text;
				/*将设置的背景颜色限制在文字中*/
				-webkit-text-fill-color: transparent;
			}
		}

		.full1 {
			background: linear-gradient(to bottom, #fff 40%, #FBE1FF);
			box-sizing: border-box;

			.full-left {
				font-family: 'C-B';

				.top-text {

					.blue {
						display: inline-block;
						color: #FFFFFF;
						font-style: italic;
						background: linear-gradient(0deg, #8D9495 0%, #0037F5 86%, #FFFFFF 100%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}

					.blue:first-child {
						margin-left: 0;
					}
				}

				.center-text {
					color: #101010;
					line-height: 1;
				}

				.bottom-text {
					font-family: 'C-R';
					color: #424242;
				}

				.input-view {
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: center;
					overflow: hidden;
					position: relative;

					.input {
						background: #fff;
						height: 100%;
						box-sizing: border-box;
						border: 4px solid #0037F5;
						border-right: none;

						/deep/.el-input,
						/deep/.el-input__inner {
							height: 100%;
							width: 100%;
							border: none;
							padding: 0;
						}

						/deep/.el-input__inner::placeholder {
							color: #A7A7A7;
						}
					}

					img {
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
						z-index: 2;
					}

					.input-btn {
						background: #0037F5;
						color: #fff;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						cursor: pointer;
						text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.27);
					}
				}

				.swiper {
					overflow: hidden;

					.swiper-wrapper {

						.swiper-slide {
							color: #1F1F1F;

							img {
								vertical-align: middle;
							}
						}
					}
				}

				.tag {
					color: #9C9B9A;
					font-family: 'C-R';
				}
			}

			.full-right {
				position: relative;

				img {
					width: auto;
					position: absolute;
				}
			}
		}

		.full2 {
			background: url(@/static/img/index/bg2.png) no-repeat;
			background-size: 100% 100%;
			position: relative;
			box-sizing: border-box;

			.top-text {
				height: auto;
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
				z-index: 2;
			}

			.full-left {

				.full-left-item {

					.full-left-item-num {
						color: #D8C1F8;
						font-family: 'C-B';
					}

					.full-left-title {
						color: #171717;
						font-family: 'C-B';
					}

					.full-left-content {
						color: #424242;
						font-family: 'C-L';
					}
				}
			}
		}

		.full2-5 {
			.top-title {
				color: #1C2850;
				text-align: center;
				font-family: 'Charter';
				font-style: italic;

				b {
					font-style: normal;
					font-family: 'Charter';
				}

				img {
					display: block;
				}
			}

			.list {

				.list-item {
					text-align: center;


					.list-item-img {
						height: auto;
					}

					.list-item-title {
						font-family: 'C-B';

						i {
							color: #3246F5;
							font-style: normal;
						}
					}

					.list-item-content {
						font-family: 'C-L';
					}
				}
			}
		}

		.full3 {
			.get-btn {
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: center;
				font-family: 'C-B';
			}

			.get-text {
				text-align: center;
				color: #2B2B2B;
			}

			.list-box {
				overflow: scroll;
				scrollbar-width: none;
				display: flex;
				align-items: flex-start;
				flex-direction: column;

				.list {
					width: 100%;
					display: flex;
					flex-direction: row;

					.list-item {
						color: #424242;
						background: #F1F6F4;
						display: flex;
						align-items: center;
						justify-content: center;
						font-family: 'C-R';

						.list-item-text {
							white-space: nowrap;
						}
					}

					.list-item-active {
						background: #D6E8FC;
					}
				}
			}

			.list-box::-webkit-scrollbar {
				display: none;
				width: 0;
				height: 0;
			}

			.book-list-box {
				.book-list {
					white-space: nowrap;

					.book-list-item {
						display: inline-block;
						position: relative;

						.book-list-item-mask {
							position: absolute;
						}

						.book-list-item-img {
							height: 100%;
							width: 100%;
						}
					}
				}
			}

			.turnLeft {
				animation: turnLeft 80s linear infinite;
			}

			.turnRight {
				animation: turnRight 200s linear infinite;
			}

			@keyframes turnLeft {
				0% {
					transform: translateX(0);
				}

				100% {
					transform: translateX(-100%);
				}
			}

			@keyframes turnRight {
				0% {
					transform: translateX(-100%);
				}

				100% {
					transform: translateX(0);
				}
			}
		}

		.full4 {
			.full4-title {
				width: 100%;
				text-align: center;
				font-family: 'C-B';
				background: linear-gradient(to bottom, #50AADA 1%, #0037f5, #370fa7);
				-webkit-background-clip: text;
				/*将设置的背景颜色限制在文字中*/
				-webkit-text-fill-color: transparent;
			}

			.get-text {
				text-align: center;
				color: #2B2B2B;
			}

			.get-btn {
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: center;
				font-family: 'C-B';
			}

			.full4-swiper-pagination {
				text-align: center;

				/deep/.swiper-pagination-bullet {
					background: #BAC8CE;
				}

				/deep/.swiper-pagination-bullet-active {
					background: #3B4649;
				}
			}
		}

		.full5 {
			.get-text {
				text-align: center;
				color: #2B2B2B;
			}

			.get-btn {
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: center;
				font-family: 'C-B';
			}

			.member {
				.member-item {
					text-align: center;
					color: #04304B;

					.member-item-num {
						font-family: 'C-B';

						i {
							vertical-align: bottom;
						}
					}

					.member-item-text {}
				}
			}

			.free {
				background: #FEF6E0;
				text-align: center;

				.free-title {
					color: #05314C;
					font-family: 'C-B';
				}

				.free-title2 {
					color: #04304B;
				}

				.free-safe {
					color: #0F74E9;
					font-family: 'C-M';

					img {
						vertical-align: middle;
					}
				}

				.free-btn {
					margin: 0 auto;
					display: flex;
					align-items: center;
					justify-content: center;
					font-family: 'C-B';
				}

				.free-list-title {
					color: #0F0E0D;
					font-family: 'C-B';
				}

				.free-list {
					position: relative;

					.free-list-item {
						text-align: left;

						.free-list-item-title {
							color: #0F0E0D;
							font-family: 'C-B';
						}

						.free-list-item-content {
							color: #04304B;
						}
					}
				}

				.free-list::after {
					position: absolute;
					left: 0;
					top: 0;
					content: '';
					height: 100%;
					background: url(@/static/img/index/line.png) no-repeat;
					background-size: 100% 100%;
				}
			}
		}

		.full6 {
			.full6-title {
				background: linear-gradient(to bottom, #50AADA 1%, #0037f5, #370fa7);
				-webkit-background-clip: text;
				/*将设置的背景颜色限制在文字中*/
				-webkit-text-fill-color: transparent;
				text-align: center;
				font-family: 'C-B';
			}

			.get-text {
				text-align: center;
				color: #2B2B2B;
				width: 50%;
				margin: 0 auto;
			}

			.get-btn {
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: center;
				font-family: 'C-B';
			}

			.list {
				.list-item {
					position: relative;

					.list-item-img {
						width: 100%;
						height: auto;
						border-radius: 10px;
						z-index: 1;
					}

					.list-item-text {
						font-family: 'C-M';
						position: absolute;
						left: 50%;
						top: -1rem;
						transform: translateX(-50%);
						z-index: 2;
						font-size: 1rem;
						line-height: 1.5rem;
						margin-bottom: -1rem;
						background: #F1F6F4;
						padding: 0.25rem 0.5rem;
						border-radius: .5rem;
					}
				}

				.list-item:nth-child(2n-1) {
					margin-top: 3rem;
				}
			}

			.list::-webkit-scrollbar {
				display: none;
				width: 0;
				height: 0;
			}
		}
	}

	@media screen and (max-width: 829px) {
		.index {
			padding-top: 4.5rem;

			.big-title {
				font-size: 2rem;
				margin-bottom: 2rem;
			}

			.get-btn {
				font-size: 1.25rem;
				color: #fff;
				background: #3246F5;
				font-family: 'C-B';
				text-align: center;
				height: 3.4rem;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 0.4rem;
				margin-top: 2rem;
				text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.27);
			}

			.full1 {
				.full-left {
					text-align: center;
					padding-top: 2.5rem;

					.top-text {
						font-size: 2rem;
						line-height: 1.1;

						.blue {
							padding-right: 0.4rem;
						}
					}

					.center-text {
						font-size: 2.3rem;
						line-height: 1.2;
					}

					.bottom-text {
						width: 90%;
						font-size: 1rem;
						line-height: 1.5;
						padding-bottom: 0.95rem;
						margin: 0 auto;
					}

					.input-view {
						width: 90%;
						height: 3.4rem;
						margin: 0 auto;

						.input {
							width: 60%;
							padding-left: 2.5rem;
							border-radius: 1rem 0 0 1rem;
							font-size: 1rem;
						}

						.autoinput {
							display: none;
						}

						img {
							width: 1.5rem;
							height: 1.5rem;
							left: .7rem;
						}

						.input-btn {
							width: 40%;
							font-size: 1.25rem;
							border-radius: 0 1rem 1rem 0;
						}
					}

					.swiper {
						display: none;
					}

					.tag {
						width: 90%;
						margin: 1rem auto;
						font-size: 0.7rem;
					}
				}

				.full-right {
					width: 100%;
					height: 20rem;

					img {
						width: 80%;
						height: auto;
						top: 1.4rem;
						left: 50%;
						transform: translateX(-50%);
					}

					.img1 {
						display: none;
					}
				}
			}

			.full2 {
				padding: 4rem 1rem 2rem;

				.full-right {
					display: none;
				}

				.top-text {
					width: 80%;
					top: 2.8125rem;
				}

				.full-left {
					.full-left-item {
						display: flex;
						margin-bottom: 1rem;

						.full-left-item-num {
							font-size: 5rem;
							margin-right: 1rem;
						}

						.full-left-item-text {
							margin-top: 1.1rem;

							.full-left-title {
								font-size: 1.125rem;
								line-height: 1.5rem;
								margin-bottom: .5rem;
							}

							.full-left-content {
								font-size: 1rem;
								line-height: 1.5rem;
							}
						}
					}
				}
			}

			.full2-5 {
				padding-bottom: 2.6rem;

				.top-title {
					text-align: center;
					width: calc(100% - 2rem);
					font-size: 1rem;
					margin: 0 auto;

					img {
						width: 6rem;
						height: auto;
						margin: 0.4rem auto;
					}
				}

				.list {
					margin-top: 1rem;
					margin-bottom: 1rem;

					.list-item {
						margin: 0 auto;
						padding: 1.6rem 0 0.4rem;
						width: 22.5rem;

						.list-item-img {
							width: 2rem;
							height: auto;
						}

						.list-item-title {
							font-size: 2rem;
							line-height: 2.5rem;
						}

						.list-item-content {
							font-size: 1rem;
							line-height: 1.5rem;
						}
					}
				}
			}

			.full3 {
				.get-btn {
					margin: 0 1rem;
				}

				.get-text {
					margin: 1rem 0 2rem;
					font-size: 1rem;
				}

				.list-box {
					gap: 0.6rem;

					.list {
						padding-left: 1rem;
						padding-right: 1rem;
						gap: 0.6rem;

						.list-item {
							gap: .5rem;
							padding-top: .75rem;
							padding-bottom: .75rem;
							padding-left: 1.5rem;
							padding-right: 1.5rem;
							border-radius: 0.2rem;
							font-family: 'C-M';

							.list-item-img {
								width: 1.5rem;
								height: 1.5rem;
							}

							.list-item-text {}
						}
					}
				}

				.book-list-box {
					margin-top: 2rem;
					margin-bottom: 3.6rem;

					.book-list {
						margin-bottom: 0.5rem;

						.book-list-item {
							width: 5.5625rem;
							height: 7.6875rem;
							margin-right: 0.5rem;

							.book-list-item-mask {
								left: -0.15rem;
								top: 0;
								width: 5.875rem;
								height: 8rem;
							}
						}
					}
				}
			}

			.full4 {
				.full4-title {
					font-size: 2rem;
					margin-bottom: 2rem;
				}

				.get-text {
					width: calc(100% - 2rem);
					margin: 2rem auto;
					font-size: 1rem;
				}

				.get-btn {
					margin: 0 1rem 2rem;
				}

				.full4-swiper {
					flex-direction: row;
					gap: 1rem;
					padding-left: 1rem;
					padding-right: 1rem;

					.full4-swiper-slide {
						border-radius: 1rem;
						width: 90%;

						.full4-swiper-item {
							width: 100%;
							display: grid;
							gap: 1rem;
							height: 34rem;
							padding: 1rem;
							box-sizing: border-box;
						}

						.full4-swiper-slide-left {
							.full4-swiper-slide-title {
								font-size: 1.5rem;
								line-height: 2rem;
								font-family: 'C-B';
								margin-bottom: 1rem;

								i {
									color: #0037F5;
									font-style: initial;
								}
							}

							.full4-swiper-slide-content {
								font-family: 'C-L';
								color: #2B2B2B;
								font-size: 1rem;
								line-height: 1.5rem;
							}
						}

						.full4-swiper-slide-img {
							height: auto;
							width: 80%;
							display: block;
							margin: 0 auto;
						}
					}

					.full4-swiper-pagination {
						margin-top: 1rem;
						margin-bottom: 3.6rem;

						/deep/.swiper-pagination-bullet {
							width: 6rem;
							height: 0.2rem;
							border-radius: 2px;
						}
					}
				}
			}

			.full5 {
				.get-btn {
					margin: 0 1rem 2rem;
				}

				.member {
					padding: 0 1rem;
					gap: 2rem;
					display: grid;
					margin-bottom: 3.6rem;

					.member-item {
						.member-item-num {
							font-size: 3rem;
							line-height: 3.75rem;
						}

						.member-item-text {
							font-size: 1.25rem;
							line-height: 1.75rem;
						}
					}
				}

				.free {
					padding: 4rem 1rem;

					.free-title {
						font-size: 2rem;
						line-height: 2.5rem;
						margin-bottom: 1rem;
					}

					.free-title2 {
						font-size: 1.25rem;
						line-height: 1.75rem;
						margin-bottom: 1rem;
					}

					.free-safe {
						flex-direction: row;
						gap: .5rem;
						align-items: center;
						display: flex;
						justify-content: center;
						margin-bottom: 2rem;

						img {
							width: 1rem;
							height: auto;
						}
					}

					.free-btn {
						margin: 0 1rem 2rem;
						font-size: 1rem;
						color: #fff;
						background: #3246F5;
						font-family: 'C-B';
						text-align: center;
						height: 3.4rem;
						display: flex;
						justify-content: center;
						align-items: center;
						border-radius: 0.4rem;
						text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.27);
					}

					.free-list-title {
						font-size: 1.125rem;
						text-align: left;
						margin: 0 1rem 1rem;
					}

					.free-list {
						padding-left: 2rem;

						.free-list-item {
							.free-list-item-title {
								font-size: 1.125rem;
								line-height: 1.5rem;
							}

							.free-list-item-content {
								font-size: 1rem;
								line-height: 1.5rem;
								margin-bottom: 1rem;
							}
						}
					}

					.free-list::after {
						width: 0.3rem;
						left: 1rem;
						height: 94%;
						top: 50%;
						transform: translateY(-50%);
					}
				}
			}

			.full6 {
				padding: 3.6rem 0;

				.full6-title {
					font-size: 2rem;
					margin: 0 1rem 1rem;
				}

				.get-text {
					padding: 0 1rem;
					width: 100%;
					box-sizing: border-box;
				}

				.list {
					padding-left: 1rem;
					white-space: nowrap;
					overflow: scroll;
					margin-bottom: 2rem;
					scrollbar-width: none;

					.list-item {
						display: inline-block;
						width: 20rem;
						margin-right: 1rem;

						.list-item-img {
							width: 100%;
						}
					}
				}

				.list::-webkit-scrollbar {
					width: 0;
					height: 0;
				}

				.get-btn {
					margin: 0 1rem 2rem;
					font-size: 1.25rem;
				}
			}
		}
	}

	@media screen and (min-width: 830px) {
		.index {
			padding-top: 74px;

			.big-title {
				font-size: 90px;
			}

			.full1 {
				padding-top: 100px;
				height: 690px;

				.heri-container {
					display: flex;
				}

				.full-left {
					width: 530px;
					padding-top: 40px;

					.top-text {
						font-size: 56px;

						.blue {
							padding-right: 10px;
							margin-left: -16px;
						}
					}

					.center-text {
						font-size: 64px;
						margin-top: 10px;
					}

					.bottom-text {
						font-size: 23px;
						width: 500px;
						line-height: 33px;
					}



					.input-view {
						width: 530px;
						height: 70px;
						margin-top: 50px;

						.input {
							width: 330px;
							padding-left: 74px;
							border-radius: 8px 0 0 8px;

							/deep/.el-input,
							/deep/.el-input__inner {
								font-size: 20px;
							}

							/deep/.el-input__inner::placeholder {
								font-size: 26px;
							}
						}

						.normalinput {
							display: none;
						}

						img {
							left: 24px;
							width: 34px;
							height: 34px;
						}

						.input-btn {
							border-radius: 0 8px 8px 0;
							font-size: 30px;
							width: 200px;
							transition: background .3s;
						}

						.input-btn:hover {
							background: #0052cc;
						}
					}

					.swiper {
						margin-left: 8px;
						margin-top: 12px;
						margin-bottom: 12px;
						height: 30px;
						overflow: hidden;

						.swiper-wrapper {

							.swiper-slide {
								font-size: 16px;
								color: #1F1F1F;

								img {
									width: 30px;
									height: 30px;
									vertical-align: middle;
									margin-right: 5px;
								}
							}
						}
					}

					.tag {
						font-size: 15px;
					}
				}

				.full-right {
					width: 680px;

					img {
						height: 460px;
						width: auto;
						left: 0;
						top: 0;
					}

					.img2 {
						display: none;
					}
				}
			}

			.full2 {
				background: url(@/static/img/index/bg2.png) no-repeat;
				background-size: 100% 100%;
				padding-bottom: 40px;
				padding-top: 250px;
				position: relative;

				.full2-title {
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					top: 40px;
				}

				.get-btn {
					display: none;
				}

				.heri-container {
					display: flex;
				}

				.top-text {
					width: 1060px;
					top: 45px;
				}

				.full-left {
					width: 380px;

					.full-left-item {
						margin-bottom: 50px;

						.full-left-item-num {
							font-size: 102px;
						}

						.full-left-title {
							font-size: 23px;
						}

						.full-left-content {
							margin-top: 14px;
							font-size: 22px;
							line-height: 33px;
						}
					}
				}

				.full-right {
					width: 890px;

					.full-right-player-box {
						position: relative;
						width: 100%;
						height: 100%;
					}

					.full-right-player-bg {
						position: absolute;
						right: -200px;
						top: -180px;
						width: 110%;
						height: 105%;
						z-index: 1;
					}

					.full-right-player {
						position: absolute;
						right: 0;
						top: 74px;
						z-index: 3;
						width: 760px;
						height: 430px;
						border-radius: 20px;
						object-fit: cover;
						border: 1px solid #fff;
					}

					.full-right-player-shadow {
						position: absolute;
						width: 900px;
						height: 615px;
						left: 60px;
						top: 6px;
						z-index: 2;
					}

					.full-right-player-btn-box {
						height: 80px;
						width: 154px;
						position: absolute;
						left: 150px;
						top: 96px;
						z-index: 4;
						cursor: pointer;
						background: url(@/static/img/index/playbtn.png) no-repeat;
						background-size: 100% 100%;
						display: flex;
						align-items: center;
						color: #fff;
						font-family: 'C-B';
						font-size: 22px;

						.full-right-player-btn {
							width: 20px;
							height: auto;
							margin: 0 26px;
						}
					}

					.full-right-player-btn-box:hover {
						background: url(@/static/img/index/playbtn2.png) no-repeat;
						background-size: 100% 100%;
					}

					.full-right-player-mask {
						cursor: pointer;
						width: 906px;
						height: 627px;
						position: absolute;
						right: -73px;
						top: 0px;
						z-index: 3;
					}

					.full-right-bottom {
						position: absolute;
						right: 100px;
						bottom: 80px;
						z-index: 3;
						cursor: pointer;
						width: 560px;
						height: 80px;
						background: linear-gradient(to bottom, #7559ff, #5636f3);
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 16px;
						box-shadow: 0px 4px 14px 0 rgba(0, 0, 0, 0.16);
						color: #fff;
						font-family: 'C-B';
						font-size: 32px;
						text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.27);

						.full-right-bottom-img {
							margin-top: 4px;
							width: 320px;
							height: auto;
						}
					}

					.full-right-bottom:hover {
						background: linear-gradient(to bottom, #8f78ff, #5a3cee);
					}
				}
			}

			.full2-5 {
				margin-top: 10px;

				.top-title {
					font-size: 19px;
					width: 800px;
					margin: 0 auto;

					img {
						width: 100px;
						height: auto;
						margin: 16px auto;
					}
				}

				.list {
					display: flex;
					margin-top: 20px;

					.list-item {
						flex: 1;
						padding-top: 26px;
						padding-bottom: 40px;
						background: url(@/static/img/index/bg3.png) no-repeat;
						background-size: 100% 100%;

						.list-item-img {
							width: 66px;
						}

						.list-item-title {
							font-size: 32px;
							margin: 16px auto 12px;
							text-shadow: 0px 2px 0px rgba(216, 193, 248, 0.27);
						}

						.list-item-content {
							margin-bottom: 10px;
							font-size: 19px;
						}
					}

					.list-item:last-child {
						margin-right: 0;
					}
				}
			}

			.full3 {
				margin-top: 80px;

				.get-btn {
					cursor: pointer;
					width: 488px;
					height: 80px;
					background: linear-gradient(to bottom, #7559ff, #5636f3);
					border-radius: 16px;
					text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.27);
					box-shadow: 0px 4px 14px 0 rgba(0, 0, 0, 0.16);
					color: #fff;
					font-size: 32px;
					margin-top: 50px;
					margin-bottom: 40px;
				}

				.get-btn:hover {
					background: linear-gradient(to bottom, #8f78ff, #5a3cee);
				}

				.get-text {
					font-size: 23px;
					margin-bottom: 55px;
				}

				.list-box {
					padding-left: 16%;
					margin-bottom: 96px;

					.list {
						margin-bottom: 16px;
						gap: 14px;

						.list-item {
							border-radius: 4px;
							padding: 0 20px;
							height: 64px;
							line-height: 64px;
							cursor: pointer;
							font-size: 23px;

							.list-item-img {
								width: 34px;
								height: 34px;
								margin-right: 15px;
							}
						}
					}
				}

				.book-list-box {
					margin-bottom: 150px;

					.book-list {
						margin-bottom: 23px;

						.book-list-item {
							width: 178px;
							height: 246px;
							margin-right: 14px;

							.book-list-item-mask {
								left: -5px;
								top: 0;
								width: 188px;
								height: 256px;
							}
						}
					}
				}
			}

			.full4 {
				.full4-title {
					font-size: 90px;
				}

				.get-text {
					font-size: 23px;
					margin-top: 50px;
					margin-bottom: 45px;
				}

				.get-btn {
					cursor: pointer;
					width: 488px;
					height: 80px;
					background: linear-gradient(to bottom, #7559ff, #5636f3);
					border-radius: 16px;
					text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.27);
					box-shadow: 0px 4px 14px 0 rgba(0, 0, 0, 0.16);
					color: #fff;
					font-size: 32px;
					margin-top: 50px;
					margin-bottom: 40px;
				}

				.get-btn:hover {
					background: linear-gradient(to bottom, #8f78ff, #5a3cee);
				}

				.full4-swiper {
					height: 570px;
					padding: 3rem;

					.full4-swiper-slide {
						width: 90%;
						border-radius: 30px;

						.full4-swiper-item {
							width: 100%;
							height: 100%;
							display: flex;
							align-items: center;
							justify-content: space-between;
							padding: 0 60px;
							box-sizing: border-box;
						}

						img {
							width: 415px;
							height: auto;
						}

						.full4-swiper-slide-left {
							width: 650px;
							color: #1C2850;

							.full4-swiper-slide-title {
								font-family: 'C-B';
								font-size: 46px;
								line-height: 50px;
								width: 582px;

								i {
									color: #0037F5;
									font-style: initial;
								}
							}

							.full4-swiper-slide-content {
								margin-top: 20px;
								font-family: 'C-L';
								font-size: 23px;
								color: #2B2B2B;
								line-height: 33px;
							}
						}
					}

					.full4-swiper-pagination {
						margin-top: 30px;

						/deep/.swiper-pagination-bullet {
							width: 98px;
							height: 4px;
							border-radius: 2px;
						}
					}
				}
			}

			.full5 {
				margin-top: 130px;

				.big-title {
					margin-bottom: 90px;
				}

				.get-text {
					font-size: 23px;
					margin-top: 50px;
					margin-bottom: 45px;
				}

				.get-btn {
					cursor: pointer;
					width: 488px;
					height: 80px;
					background: linear-gradient(to bottom, #7559ff, #5636f3);
					border-radius: 16px;
					text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.27);
					box-shadow: 0px 4px 14px 0 rgba(0, 0, 0, 0.16);
					color: #fff;
					font-size: 32px;
					margin-top: 50px;
					margin-bottom: 98px;
				}

				.get-btn:hover {
					background: linear-gradient(to bottom, #8f78ff, #5a3cee);
				}

				.member {
					display: flex;

					.member-item {
						flex: 1;

						.member-item-num {
							font-size: 90px;

							i {
								font-size: 60px;
							}
						}

						.member-item-text {
							font-size: 23px;
							margin-top: 20px;
							margin-bottom: 108px;
							padding: 0 36px;
						}
					}
				}

				.free {
					padding-top: 98px;
					padding-bottom: 57px;

					.free-title {
						font-size: 67px;
						margin-bottom: 33px;
					}

					.free-title2 {
						font-size: 23px;
						margin-bottom: 28px;
					}

					.free-safe {
						font-size: 18px;

						img {
							width: 22px;
							height: auto;
							margin-right: 13px;
							margin-top: -4px;
						}
					}

					.free-btn {
						cursor: pointer;
						width: 488px;
						height: 80px;
						background: linear-gradient(to bottom, #7559ff, #5636f3);
						border-radius: 16px;
						text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.27);
						box-shadow: 0px 4px 14px 0 rgba(0, 0, 0, 0.16);
						color: #fff;
						font-size: 32px;
						margin-top: 33px;
						margin-bottom: 33px;
					}

					.free-list-title {
						margin-bottom: 24px;
						font-size: 18px;
					}

					.free-list {
						width: 284px;
						margin: 0 auto;
						padding-left: 30px;

						.free-list-item {
							margin-left: 24px;

							.free-list-item-title {
								font-size: 18px;
								margin-bottom: 11px;
							}

							.free-list-item-content {
								font-size: 15px;
								margin-bottom: 28px;
							}
						}

						.free-list-item:last-child {
							.free-list-item-content {
								margin-bottom: 0;
							}
						}
					}

					.free-list::after {
						width: 5px;
						left: 34px;
					}
				}
			}

			.full6 {
				.full6-title {
					font-size: 90px;
					margin-top: 184px;
					margin-bottom: 50px;
				}

				.get-text {
					font-size: 23px;
					margin-top: 50px;
					margin-bottom: 45px;
				}

				.get-btn {
					cursor: pointer;
					width: 488px;
					height: 80px;
					background: linear-gradient(to bottom, #7559ff, #5636f3);
					border-radius: 16px;
					text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.27);
					box-shadow: 0px 4px 14px 0 rgba(0, 0, 0, 0.16);
					color: #fff;
					font-size: 32px;
					margin-top: 50px;
					margin-bottom: 40px;
				}

				.get-btn:hover {
					background: linear-gradient(to bottom, #8f78ff, #5a3cee);
				}

				.list {
					display: grid;
					grid-template-columns: repeat(4, minmax(0, 1fr));
					align-items: center;
					gap: 20px;

					.list-item {

						.list-item-img {}

						.list-item-text {}
					}
				}
			}
		}
	}
</style>