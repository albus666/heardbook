<template>
	<div class="auth-page">
		<!-- Main Content -->
		<div class="auth-main">
			<div class="reset-password">
				<div class="reset-password__section">
					<h1 class="reset-password__headline">
						Forgot your password?
					</h1>
					<p class="reset-password__subheadline">
						No problem—it happens to everyone!
					</p>
					<form 
						class="reset-password__form" 
						action="/en/nc/forgot_password" 
						accept-charset="UTF-8" 
						method="post"
						@submit.prevent="handleReset"
					>
						<!-- TODO: 根据后端 API 调整 action 路径 -->
						<input name="utf8" type="hidden" value="✓" autocomplete="off" />
						<!-- TODO: 从后端获取 authenticity_token -->
						<input type="hidden" name="authenticity_token" :value="authenticityToken" autocomplete="off" />
						<input type="hidden" name="authenticity_token" :value="authenticityToken" autocomplete="off" />
						
						<label class="form__label" for="forgot-password_forgot-password-email">
							Email
						</label>
						<div class="form__field-container reset-password__field">
							<input 
								id="forgot-password_forgot-password-email" 
								v-model="email"
								placeholder="Enter your email" 
								class="form__input js-reset-password-email" 
								required="required" 
								type="text" 
								name="reset_password[email]"
							/>
						</div>
						<input 
							type="submit" 
							name="commit" 
							value="Reset password" 
							class="button reset-password__button js-reset-password-submit"
							data-disable-with="Reset password"
						/>
					</form>
				</div>
			</div>
		</div>

		<!-- Footer -->
		<heri-footer />
	</div>
</template>

<script>
import HeriFooter from '@/components/heri-footer.vue'

export default {
	layout: 'auth',
	components: {
		HeriFooter
	},
	data() {
		return {
			email: '',
			// TODO: 从后端 API 获取 authenticity_token
			authenticityToken: ''
		}
	},
	// TODO: 添加 created/mounted 生命周期钩子，从后端获取 authenticity_token
	methods: {
		// TODO: 接入后端 API - 发送重置密码请求
		handleReset() {
			// TODO: 调用后端 API POST /en/nc/forgot_password
			// TODO: 处理成功响应（显示成功提示）
			// TODO: 处理错误响应（显示错误信息）
			// TODO: 添加表单验证
			// TODO: 添加加载状态（禁用按钮，显示加载动画）
			console.log('Reset password for:', this.email)
		}
	}
}
</script>

<style lang="less" scoped>
@import '~/assets/css/common.less';

.auth-page {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background: #f5f9f7;
}

.auth-header {
	background: white;
	border-bottom: 1px solid #e5e7eb;
	
	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0;
	}
	
	.header-left {
		display: flex;
		align-items: center;
		gap: 2rem;
	}
	
	.logo {
		img {
			height: 2.5rem;
			width: auto;
		}
	}
	
	.explore-link {
		color: #0f2830;
		font-size: 1rem;
		text-decoration: none;
		
		&:hover {
			color: #0365f2;
		}
	}
	
	.header-right {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	
	.btn-trial {
		background: #03ce7c;
		color: white;
		border: none;
		padding: 0.625rem 1.5rem;
		border-radius: 0.375rem;
		font-weight: 500;
		cursor: pointer;
		
		&:hover {
			background: #02b56d;
		}
	}
	
	.login-link {
		color: #0f2830;
		font-weight: 500;
		text-decoration: none;
		
		&:hover {
			color: #0365f2;
		}
	}
}

.auth-main {
	flex: 1;
	display: flex;
  background-color: #FFFFFF;
	align-items: center;
	justify-content: center;
	padding: 4rem 1rem;
}

.reset-password {
	width: 100%;
	max-width: 28rem;
}

.reset-password__section {
	width: 100%;
}

.reset-password__headline {
	font-size: 32px;
	font-weight: 700;
	color: #0f2830;
	text-align: center;
	margin-bottom: 1rem;
  line-height: 40px;
  font-family: 'CeraPRO',sans-serif;
}

.reset-password__subheadline {
	font-size: 1rem;
  font-weight: 500;
  font-family: 'CeraPRO',sans-serif;
	color: #0f2830;
	text-align: center;
	margin-bottom: 2rem;
}

.reset-password__form {
	max-width: 19rem;
	margin: 2rem auto 0 auto;
}

.form__label {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  color: #6d787e;
  display: block;
  margin-bottom: .25rem;
  font-family: "CeraPRO", sans-serif;
}

.form__field-container {
	box-sizing: border-box;
	width: 100%;
	border: 2px solid #bac8ce;
	border-radius: 0.25rem;
	line-height: 1rem;
	color: #042330;
	font-size: 1rem;
	-webkit-font-smoothing: antialiased;
	font-family: "CeraPRO", sans-serif;
	user-select: text !important;
}

.reset-password__field {
	margin-bottom: 1rem;
}


.form__input {
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  height: 40px;
  padding: 10px 14px;
  color: #042330;
  font-weight: 500;
  font-size: 16px;
  font-family: "CeraPRO", sans-serif;
  line-height: 20px;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  outline: 0;
  display: block;
  cursor: text;
  -webkit-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  user-select: text;
  
  &:focus {
    outline: 0;
  }
  
  &::placeholder {
    color: #bac8ce;
  }
}

.button {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  color: #03314b;
  font-family: "CeraPRO", sans-serif;
  display: inline-block;
  box-sizing: border-box;
  padding: .6875rem 1rem .8125rem;
  text-align: center;
  text-decoration: none;
  background-color: #2ce080;
  border: #2ce080 .125rem solid;
  border-radius: .25rem;
  outline: none;
  cursor: pointer;
  width: 100%;
}

.reset-password__button {
}


@media screen and (max-width: 768px) {
	.reset-password__headline {
		font-size: 1.875rem;
	}
	
	.header-left {
		gap: 1rem !important;
	}
	
	.explore-link {
		font-size: 0.875rem;
	}
}
</style>
