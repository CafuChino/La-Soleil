FROM node:14

RUN mkdir /home/code/laSoleil

WORKDIR /home/node/app

COPY . /home/node/app

EXPOSE 7000

CMD yarn start
