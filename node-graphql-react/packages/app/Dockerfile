FROM node:12.16.1

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]