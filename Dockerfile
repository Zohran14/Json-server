FROM node:lts-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
ENV NODE_ENV=production
COPY . .
EXPOSE 443
CMD ["yarn", "start"]