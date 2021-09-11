FROM node:14-alpine as build

ARG BRANCH=master

RUN mkdir /app

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install ci

COPY . /app

RUN npm run build:$BRANCH --prod

FROM nginx:alpine

COPY --from=build /app/dist/a4-website-frontend /usr/share/nginx/html

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

LABEL org.opencontainers.image.source=https://github.com/dsc-upt/a4-website-frontend
