FROM node:23-bookworm-slim

WORKDIR /app

COPY package*.json /app/package.json

RUN npm install 

COPY --chown=node:node . /app

EXPOSE 3000

CMD ["node", "./index.js"]



