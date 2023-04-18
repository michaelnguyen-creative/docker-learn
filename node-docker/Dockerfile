# 1st: you need a base image for your project to build from
# analogy: building a house > 1st = foundation
FROM node:18-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm i --production

COPY . .

CMD ["node", "server.js"]