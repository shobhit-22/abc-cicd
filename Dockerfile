FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 4200
CMD ["node", "app.js"]