FROM node:14

RUN mkdir /home/code/laSoleil

WORKDIR /home/code/laSoleil

COPY . /home/code/laSoleil

RUN yarn start
