# Dockerfile to create image from current node LTS-alpine version (04-16-2023)
# Using some of the good practices found at
# https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/
FROM node:18.16-alpine
WORKDIR /usr/src/app
COPY --chown=node:node .. /usr/src/app
RUN npm i -g @angular/cli@15
USER node