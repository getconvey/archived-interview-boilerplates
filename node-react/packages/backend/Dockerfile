FROM node:17-slim

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn

COPY . .

EXPOSE 4000

CMD ["yarn", "start"]
