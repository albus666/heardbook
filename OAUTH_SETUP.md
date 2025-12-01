# OAuth 社交登录配置指南

## 概述

本项目已实现 Facebook 和 Google 社交登录功能。当用户点击登录按钮时，会弹出 OAuth 授权窗口，用户授权后完成登录。

## 实现原理

1. **弹出窗口**：使用 `window.open()` 打开 OAuth 授权页面
2. **OAuth 2.0 流程**：使用授权码模式（Authorization Code Flow）
3. **回调处理**：授权完成后，回调页面将授权码发送回父窗口
4. **Token 交换**：后端 API 将授权码交换为访问令牌并完成登录

## 配置步骤

### 1. Google OAuth 配置

#### 1.1 创建 Google OAuth 应用

1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建新项目或选择现有项目
3. 启用 "Google+ API" 或 "Google Identity API"
4. 进入 "凭据" → "创建凭据" → "OAuth 客户端 ID"
5. 应用类型选择 "Web 应用"
6. 添加授权的重定向 URI：`http://localhost:3000/auth/callback`（开发环境）
7. 添加生产环境的重定向 URI：`https://yourdomain.com/auth/callback`
8. 保存后获得 **Client ID**

#### 1.2 配置环境变量

在项目根目录创建 `.env` 文件（如果不存在）：

```env
GOOGLE_CLIENT_ID=your_google_client_id_here
OAUTH_REDIRECT_URI=http://localhost:3000/auth/callback
```

### 2. Facebook OAuth 配置

#### 2.1 创建 Facebook 应用

1. 访问 [Facebook Developers](https://developers.facebook.com/)
2. 创建新应用，选择 "消费者" 类型
3. 添加 "Facebook 登录" 产品
4. 在设置中配置：
   - **应用域名**：你的域名
   - **有效的 OAuth 重定向 URI**：`http://localhost:3000/auth/callback`（开发环境）
   - **有效的 OAuth 重定向 URI**：`https://yourdomain.com/auth/callback`（生产环境）
5. 保存后获得 **App ID**

#### 2.2 配置环境变量

在 `.env` 文件中添加：

```env
FACEBOOK_APP_ID=your_facebook_app_id_here
```

### 3. 后端 API 实现

需要在后端实现以下 API 端点：

#### 3.1 OAuth 回调 API

**端点**：`POST /api/auth/oauth/callback`

**请求体**：
```json
{
  "provider": "google" | "facebook",
  "code": "授权码",
  "redirect_uri": "回调 URI"
}
```

**响应**：
```json
{
  "success": true,
  "token": "JWT token",
  "user": {
    "id": "用户ID",
    "email": "用户邮箱",
    "name": "用户名称"
  }
}
```

#### 3.2 后端实现示例（Node.js/Express）

```javascript
// 安装依赖
// npm install axios

const axios = require('axios');

app.post('/api/auth/oauth/callback', async (req, res) => {
  const { provider, code, redirect_uri } = req.body;

  try {
    let tokenResponse;
    
    if (provider === 'google') {
      // 交换 Google 授权码为访问令牌
      tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri
      });
      
      // 使用访问令牌获取用户信息
      const userResponse = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
          Authorization: `Bearer ${tokenResponse.data.access_token}`
        }
      });
      
      // 创建或更新用户，返回 JWT token
      const user = await createOrUpdateUser({
        provider: 'google',
        providerId: userResponse.data.id,
        email: userResponse.data.email,
        name: userResponse.data.name,
        picture: userResponse.data.picture
      });
      
      res.json({
        success: true,
        token: generateJWT(user),
        user
      });
      
    } else if (provider === 'facebook') {
      // 交换 Facebook 授权码为访问令牌
      tokenResponse = await axios.get('https://graph.facebook.com/v18.0/oauth/access_token', {
        params: {
          client_id: process.env.FACEBOOK_APP_ID,
          client_secret: process.env.FACEBOOK_APP_SECRET,
          code,
          redirect_uri
        }
      });
      
      // 使用访问令牌获取用户信息
      const userResponse = await axios.get('https://graph.facebook.com/me', {
        params: {
          fields: 'id,name,email,picture',
          access_token: tokenResponse.data.access_token
        }
      });
      
      // 创建或更新用户，返回 JWT token
      const user = await createOrUpdateUser({
        provider: 'facebook',
        providerId: userResponse.data.id,
        email: userResponse.data.email,
        name: userResponse.data.name,
        picture: userResponse.data.picture?.data?.url
      });
      
      res.json({
        success: true,
        token: generateJWT(user),
        user
      });
    }
  } catch (error) {
    console.error('OAuth callback error:', error);
    res.status(400).json({
      success: false,
      message: error.message || '登录失败'
    });
  }
});
```

## 文件说明

### 前端文件

- `pages/auth/login.vue` - 登录页面，包含社交登录按钮和处理逻辑
- `pages/auth/callback.vue` - OAuth 回调页面，处理授权码并发送给父窗口

### 关键方法

1. **handleGoogleLogin()** - 打开 Google OAuth 弹出窗口
2. **handleFacebookLogin()** - 打开 Facebook OAuth 弹出窗口
3. **handleOAuthCallback()** - 接收来自回调页面的授权码
4. **exchangeCodeForToken()** - 调用后端 API 交换 token

## 安全注意事项

1. **客户端密钥（Client Secret）**：永远不要暴露在前端代码中，必须在后端使用
2. **HTTPS**：生产环境必须使用 HTTPS
3. **状态参数（State）**：建议添加 state 参数防止 CSRF 攻击
4. **Token 存储**：使用 httpOnly cookie 或安全的 localStorage 存储
5. **Token 验证**：后端必须验证 token 的有效性

## 测试步骤

1. 配置好 Google 和 Facebook 的应用
2. 设置环境变量
3. 启动开发服务器：`npm run dev`
4. 访问登录页面，点击 Google 或 Facebook 登录按钮
5. 在弹出的窗口中完成授权
6. 检查是否成功登录并跳转

## 常见问题

### Q: 弹出窗口被浏览器阻止怎么办？
A: 确保点击事件是由用户直接触发的，不要使用异步操作。

### Q: 回调页面无法发送消息给父窗口？
A: 确保回调页面的域名与主页面相同，且使用 `window.opener.postMessage()`。

### Q: 授权后没有反应？
A: 检查浏览器控制台是否有错误，确认后端 API 是否正常工作。

### Q: 如何添加更多社交登录提供商？
A: 参考 `handleGoogleLogin()` 的实现，添加新的处理方法，并配置相应的 OAuth 应用。

## 参考资料

- [Google OAuth 2.0 文档](https://developers.google.com/identity/protocols/oauth2)
- [Facebook 登录文档](https://developers.facebook.com/docs/facebook-login/web)
- [OAuth 2.0 规范](https://oauth.net/2/)




