FROM node:14

ENV PORT=8080

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

EXPOSE 8080

CMD [ "node", "dist/index.js" ]
