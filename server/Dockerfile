FROM node:20.11

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 1313

CMD ["yarn", "start"]
