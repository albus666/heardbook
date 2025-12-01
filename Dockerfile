# 使用 Node.js 官方镜像
FROM docker.1ms.run/library/node:16-alpine

# 设置工作目录
WORKDIR /app

# 设置 npm 镜像源（加速下载）
RUN npm config set registry https://registry.npmmirror.com

# 复制 package.json 和 package-lock.json（如果存在）
COPY package*.json ./

# 安装依赖
RUN npm install

# 暴露端口
EXPOSE 3000

# 设置环境变量
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV NODE_ENV=development

# 启动应用（开发模式）
CMD ["npm", "run", "dev"]
