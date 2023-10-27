FROM node:16

# ENV NODE_ENV=production

# app
WORKDIR /usr/src/app

COPY ./app/package.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

COPY ./app .

RUN npm run build

# service
WORKDIR /usr/src/service

COPY ./service/package.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

COPY ./service .

RUN npm run build

# EXPOSE 8080

# CMD [ "node", "dist/index.js" ]
# CMD [ "dist/index.handler" ]

CMD [ "lambda.handler" ]