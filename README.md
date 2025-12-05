# Heardbook - Nuxt 2 SSR 应用

这是一个使用 Nuxt 2.15.8 + Vue 2.7.10 构建的 SSR（服务端渲染）应用，支持 Docker 开发和生产环境部署。

## 📋 技术栈

- **框架**: Nuxt.js 2.15.8
- **Vue**: 2.7.10
- **Node.js**: 16+ (推荐 16.x LTS)
- **UI 组件库**: Element UI 2.15.14
- **样式预处理**: Less 3.8.1
- **轮播组件**: vue-awesome-swiper 4.1.1 (Swiper 5.2.0)
- **HTTP 客户端**: @nuxtjs/axios 5.13.6
- **分析工具**: @nuxtjs/gtm 2.4.0
- **代码质量**: ESLint + @nuxtjs/eslint-config

## 📁 项目结构

```
heardbook/
├── assets/              # 资源文件（Less、图片等）
│   └── css/
├── components/          # Vue 组件
│   ├── app/            # 应用内组件
│   └── ...
├── layouts/            # 布局组件
│   ├── app.vue
│   ├── pricing.vue
│   └── settings.vue
├── pages/              # 页面路由（自动生成路由）
│   ├── app/            # /app/* 路由
│   ├── auth/           # /auth/* 路由
│   ├── books/          # /books/* 路由
│   └── collections/    # /collections/* 路由
├── plugins/            # Nuxt 插件
│   ├── api.js          # Axios 拦截器配置
│   └── main.js         # 全局插件（Element UI、Swiper 等）
├── static/             # 静态资源（直接访问）
│   ├── img/            # 图片资源
│   ├── js/             # JavaScript 文件
│   └── font/           # 字体文件
├── utils/              # 工具函数
├── nuxt.config.js      # Nuxt 配置文件
├── package.json        # 项目依赖
├── Dockerfile          # Docker 开发环境构建文件
├── docker-compose.yml  # Docker Compose 配置
└── .eslintrc.js        # ESLint 配置
```

## 🚀 快速开始

### 环境要求

- Node.js 16.x 或更高版本
- npm 7+ 或 yarn 1.x
- Docker（可选，用于容器化部署）

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

开发服务器支持：
- 热模块替换 (HMR)
- 自动代码检查
- 错误提示

### 代码检查

```bash
# 检查代码规范
npm run lint

# 自动修复可修复的问题
npm run lint:fix
```

## 🔧 环境变量配置

项目使用环境变量管理配置，请在项目根目录创建 `.env` 文件：

```bash
# API 配置
API_BASE_URL=https://bookheard.soundems.com/

# Google Tag Manager（可选）
GTM_ID=GTM-XXXXXXX

# Usermaven 追踪配置（可选）
USERMAVEN_KEY=UMFOqspdXa
USERMAVEN_HOST=https://events.usermaven.com
USERMAVEN_LIB_URL=https://t.usermaven.com/lib.js
USERMAVEN_AUTOCAPTURE=true
```

**注意**：
- 所有环境变量都有默认值，不设置会使用代码中的默认值
- GTM 模块仅在设置了 `GTM_ID` 时才会启用
- `.env` 文件不应提交到 Git（已在 `.gitignore` 中）

## 🏗️ 构建与部署

### 构建生产版本

```bash
# 构建应用（生成 .nuxt 目录）
npm run build

# 启动生产服务器
npm run start
```

构建产物：
- `.nuxt/` - 编译后的应用代码
- `.nuxt/dist/` - 客户端资源（JS、CSS）
- `static/` - 静态资源（直接复制）

### Docker 开发环境

```bash
# 启动开发容器（支持热更新）
npm run docker:up

# 查看日志
npm run docker:logs

# 停止容器
npm run docker:down
```

### 生产环境部署

#### 方式一：Docker 多阶段构建（推荐）

1. **创建生产 Dockerfile** (`Dockerfile.prod`):

```dockerfile
# 构建阶段
FROM docker.1ms.run/library/node:16-alpine AS builder
WORKDIR /app
RUN npm config set registry https://registry.npmmirror.com
COPY package*.json ./
RUN npm ci
COPY . .
ENV NODE_ENV=production
RUN npm run build

# 运行阶段
FROM docker.1ms.run/library/node:16-alpine
WORKDIR /app
RUN npm config set registry https://registry.npmmirror.com
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/.nuxt ./.nuxt
COPY --from=builder /app/nuxt.config.js ./nuxt.config.js
COPY --from=builder /app/static ./static
COPY --from=builder /app/assets ./assets
COPY --from=builder /app/plugins ./plugins
COPY --from=builder /app/layouts ./layouts
COPY --from=builder /app/pages ./pages
COPY --from=builder /app/components ./components
COPY --from=builder /app/utils ./utils
ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "run", "start"]
```

2. **构建和运行**:

```bash
docker build -f Dockerfile.prod -t heardbook:prod .
docker run -d -p 3000:3000 \
  -e API_BASE_URL=https://bookheard.soundems.com/ \
  -e GTM_ID=GTM-XXXXXXX \
  heardbook:prod
```

#### 方式二：PM2 部署

1. **安装 PM2**:
```bash
npm install -g pm2
```

2. **创建 `ecosystem.config.js`**:
```javascript
module.exports = {
  apps: [{
    name: 'heardbook',
    script: './node_modules/nuxt/bin/nuxt.js',
    args: 'start',
    instances: 2,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      NUXT_HOST: '0.0.0.0',
      NUXT_PORT: 3000
    }
  }]
}
```

3. **启动应用**:
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### 方式三：手动部署

1. **在本地构建**:
```bash
npm run build
```

2. **打包部署文件**:
```bash
tar -czf deploy.tar.gz \
  .nuxt \
  static \
  nuxt.config.js \
  package.json \
  package-lock.json \
  node_modules \
  .env
```

3. **上传到服务器并启动**:
```bash
# 上传文件
scp deploy.tar.gz user@server:/opt/heardbook/

# 在服务器上
cd /opt/heardbook
tar -xzf deploy.tar.gz
npm install --production
npm run start
```

## 🔍 功能特性

### 已修复的问题

- ✅ 添加了缺失的 `qs` 依赖
- ✅ 配置了 GTM 模块（支持环境变量）
- ✅ 修复了 Axios 响应拦截器错误处理
- ✅ 优化了请求拦截器（按方法处理 Content-Type）
- ✅ 修复了 md5.js 的 CommonJS/ESM 导入问题
- ✅ 添加了 ESLint 配置和脚本
- ✅ 移除了未使用的依赖
- ✅ 使用环境变量管理配置

### API 拦截器

- **请求拦截器**: 自动设置 baseURL、Content-Type 和数据序列化
- **响应拦截器**: 统一处理业务错误，正确 reject Promise
- **错误处理**: 友好的错误提示

### 插件系统

- **main.js**: 全局插件（Element UI、Swiper、MD5）
- **api.js**: Axios 拦截器（仅客户端）

## 📝 可用脚本

```bash
# 开发
npm run dev          # 启动开发服务器

# 构建
npm run build        # 构建生产版本
npm run start        # 启动生产服务器
npm run generate     # 生成静态站点

# 代码质量
npm run lint         # 检查代码规范
npm run lint:fix     # 自动修复代码问题

# Docker
npm run docker:up    # 启动 Docker 容器
npm run docker:down  # 停止 Docker 容器
npm run docker:logs  # 查看容器日志
```

## 🌐 Nginx 反向代理配置

```nginx
upstream nuxt {
    server 127.0.0.1:3000;
    keepalive 64;
}

server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    # 静态资源缓存
    location /_nuxt/ {
        alias /path/to/.nuxt/dist/client/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    location /img/ {
        alias /path/to/static/img/;
        expires 1y;
        add_header Cache-Control "public";
    }
    
    # 代理到 Nuxt 应用
    location / {
        proxy_pass http://nuxt;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## ⚠️ 注意事项

1. **环境变量**: 生产环境必须正确配置环境变量
2. **Node.js 版本**: 推荐使用 Node.js 16.x LTS
3. **构建产物**: `.nuxt` 目录不应提交到 Git
4. **静态资源**: `static/` 目录下的文件可直接通过 URL 访问
5. **SSR 兼容**: 部分插件设置为仅客户端（`ssr: false`），注意服务端渲染兼容性
6. **端口配置**: 默认端口 3000，可通过环境变量修改

## 🐛 故障排查

### 构建失败

```bash
# 清理缓存和重新安装依赖
rm -rf node_modules .nuxt
npm install
npm run build
```

### Docker 容器无法启动

```bash
# 查看容器日志
docker logs heardbook_app

# 检查端口占用
netstat -tulpn | grep 3000
```

### 环境变量未生效

- 确保 `.env` 文件在项目根目录
- 重启开发服务器或容器
- 检查环境变量名称是否正确

## 📚 相关文档

- [Nuxt.js 2 文档](https://nuxtjs.org/docs/2.x/get-started/installation)
- [Vue 2.7 文档](https://v2.vuejs.org/)
- [Element UI 文档](https://element.eleme.io/)
- [Docker 文档](https://docs.docker.com/)

## 📄 许可证

私有项目，保留所有权利。
