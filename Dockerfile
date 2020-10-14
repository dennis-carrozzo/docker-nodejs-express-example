FROM node:latest

WORKDIR /app

#not necessary if using volumes
# COPY . .

ENV PORT=3000

RUN npm i

EXPOSE $PORT

ENTRYPOINT ["npm","start"]