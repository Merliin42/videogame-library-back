FROM node:16
WORKDIR /usr/scr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "nodemon", "src/app.ts" ]