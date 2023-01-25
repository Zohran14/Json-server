FROM node:lts-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
ENV NODE_ENV=production
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]