FROM node:16

# Create app dir
WORKDIR /app

# Copy package.json etc. (app blueprint) into container
COPY package*.json .

# Install app dependencies
RUN npm i

# Bundle app src code
COPY . .

# Expose port 8080 on container to the outside world
EXPOSE 8080

# Run server
CMD ["node", "server.js"]