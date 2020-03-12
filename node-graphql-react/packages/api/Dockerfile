FROM node:12.16.1

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 4000

CMD ["yarn", "start"]