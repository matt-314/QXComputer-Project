#Dependencies
FROM node:18.16-slim AS dep

WORKDIR /app

# Dev Container
FROM dep AS dev

RUN apt update && \
    apt install -y git fish htop

USER node

SHELL [ "/usr/bin/fish" ]
