FROM node:18

WORKDIR /watcher_magazine
COPY ./watcher_magazine/package*.json ./

RUN npm install
COPY ./watcher_magazine/ .
EXPOSE 3000

CMD ["npm", "start"]