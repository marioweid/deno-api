FROM node:12.10.0

WORKDIR /usr/app/frontend

COPY . .

RUN npm ci -qy

EXPOSE 3000

CMD ["npm", "start"]