FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

WORKDIR /app/client

COPY client/package*.json ./

RUN npm install

WORKDIR /app

EXPOSE 5000

RUN npm run build
CMD ["npm", "start"]
