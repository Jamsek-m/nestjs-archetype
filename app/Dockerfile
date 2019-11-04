FROM node:13-alpine

RUN mkdir /app
WORKDIR /app

ARG NPM_TOKEN

ADD npmrc-schema /app/.npmrc
COPY package.json /app/package.json

RUN npm --silent install &> /dev/null
RUN rm -f /app/.npmrc

ADD . /app/

CMD ["npm", "run", "start:prod"]
