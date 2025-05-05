FROM node:18

WORKDIR /app

# Copy only package manager files
COPY pnpm-lock.yaml package.json ./

RUN corepack enable && corepack prepare pnpm@latest --activate
RUN npx pnpm install --frozen-lockfile

# Now copy the rest of the app
COPY . .

WORKDIR /app/packages/posts

CMD ["pnpm", "dev"]
