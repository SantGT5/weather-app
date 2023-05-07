FROM node:18.16.0-alpine

WORKDIR /app

COPY ./package.json ./
COPY ./tsconfig.json ./
COPY ./tsconfig.node.json ./

RUN npm install

COPY  ./ ./

EXPOSE 5173

CMD [ "npm", "run", "dev" ]