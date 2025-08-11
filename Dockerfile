# 使用ubuntu:20.04作为基础镜像
FROM ubuntu:20.04

# 设置工作目录
WORKDIR /home/work

# 配置环境变量，避免交互式安装时的配置提示
ENV DEBIAN_FRONTEND=noninteractive
# 提前设置NVM路径和Node版本，确保全局工具可被找到
ENV NVM_DIR="/root/.nvm"
ENV NODE_VERSION="18.16.0"
# 将Node和pnpm的可执行文件路径加入系统PATH
ENV PATH="${NVM_DIR}/versions/node/v${NODE_VERSION}/bin:${PATH}"

# 执行基础软件安装和环境配置
RUN apt-get update && \
    apt-get install -y curl vim git && \
    # 安装nvm
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash && \
    # 加载nvm并安装Node.js
    . "$NVM_DIR/nvm.sh" && \
    nvm install $NODE_VERSION && \
    nvm alias default $NODE_VERSION && \
    # 安装pnpm和create-vite
    npm install -g pnpm@10 create-vite@6 && \
    # 克隆项目到工作目录
    git clone https://github.com/Lucy-In-Gitbub/viteweb.git . && \
    # 安装项目依赖
    pnpm install && \
    # 清理缓存以减小镜像体积
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# 暴露vite默认端口
EXPOSE 5173

# 启动命令（运行开发服务器）
CMD ["pnpm", "run", "dev", "--host", "0.0.0.0"]