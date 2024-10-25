FROM node:20.18.0
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY .env ./
COPY . .
EXPOSE 3000
CMD ["node","server.js"]
