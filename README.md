# Heardbook - Nuxt 2 Demo Project

这是一个使用 Nuxt 2.15.8 和 Vue 2.7.10 构建的标准 Nuxt.js 项目，支持 Docker 部署。

## 技术栈

- **Nuxt.js**: 2.15.8
- **Vue.js**: 2.7.10
- **Node.js**: 18+

## 项目结构

```
heardbook/
├── pages/          # 页面目录
├── components/     # 组件目录
├── layouts/        # 布局目录
├── static/         # 静态资源目录
├── nuxt.config.js  # Nuxt 配置文件
├── package.json    # 项目依赖
├── Dockerfile      # Docker 构建文件
└── docker-compose.yml # Docker Compose 配置
```

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
npm start
```

## Docker 部署

### 方式一：开发模式（推荐，代码变化自动生效）

```bash
# 使用开发模式（Volume 挂载，代码变化立即生效）
npm run docker:dev
# 或
docker compose -f docker-compose.dev.yml up
```

### 方式二：生产模式（每次自动重新构建）

```bash
# 每次启动时自动重新构建（推荐）
npm run docker:up
# 或
docker compose up --build -d

# 强制重新构建（不使用缓存）
npm run docker:rebuild
# 或
npm run docker:build
docker compose up -d
```

### 方式三：使用批处理脚本（Windows）

```bash
# 双击运行 rebuild.bat 或在命令行执行
rebuild.bat
```

### 常用命令

```bash
# 查看日志
docker compose logs -f

# 停止服务
npm run docker:down
# 或
docker compose down
```

### 方式二：使用 Docker 命令

```bash
# 构建镜像
docker build -t heardbook-nuxt .

# 运行容器
docker run -d -p 3000:3000 --name heardbook-nuxt heardbook-nuxt

# 查看日志
docker logs -f heardbook-nuxt

# 停止容器
docker stop heardbook-nuxt
docker rm heardbook-nuxt
```

## 访问应用

部署成功后，访问 http://localhost:3000

## 注意事项

1. 确保 Docker 和 Docker Compose 已正确安装
2. 生产环境请确保设置了正确的环境变量
3. 如需修改端口，请同时更新 `docker-compose.yml` 和 `nuxt.config.js`
