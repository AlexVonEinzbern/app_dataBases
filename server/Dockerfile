FROM node:12-alpine

WORKDIR /server

COPY package*.json /server/

RUN npm install

COPY . /server/

EXPOSE 9000

CMD ["npm", "start"]
