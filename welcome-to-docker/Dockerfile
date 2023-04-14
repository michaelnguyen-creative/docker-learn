FROM node:18-alpine

RUN mkdir -p /app

# Set working directory
# (refer to it simply as `./`)
WORKDIR /app

COPY package*.json ./

COPY ./public ./public
COPY ./src ./src

RUN npm i \
    && npm i -g serve \
    && npm run build \
    && rm -rf node_modules

EXPOSE 3000

CMD [ "serve", "-s", "build"]