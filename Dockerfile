# Use Node 20
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy dependency files first (better caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy rest of the project
COPY . .

# Expose Next.js dev port
EXPOSE 3000

# Start dev server
CMD ["pnpm", "dev"]
