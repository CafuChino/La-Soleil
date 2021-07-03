FROM node:14

WORKDIR /home/node/app

COPY . /home/node/app

EXPOSE 7000

CMD yarn docker-start
