FROM node:20.11.0-alpine3.10

WORKDIR /app

COPY package.json .

RUN npm install -g yarn

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
