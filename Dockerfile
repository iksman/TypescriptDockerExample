FROM node:latest
WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . .
RUN npm run-script compile
#aaa
CMD npm run-script startNode