FROM node:20-alpine

# Install pnpm globally
RUN corepack enable pnpm

WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install

# Copy all source code
COPY . .

# Expose port
EXPOSE 3000

# Start Next.js in dev mode (hot reload)
CMD ["pnpm", "dev"]
