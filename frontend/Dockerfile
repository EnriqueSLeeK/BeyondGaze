
FROM node:21-alpine3.17

WORKDIR /var/app

COPY src/ ./src
COPY public/ ./public
COPY package.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]
