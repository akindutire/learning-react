FROM node:alpine as frontend
WORKDIR /app/
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV production
COPY package*.json ./
RUN npm install
#RUN npm ci --only=production
COPY . .
RUN npm run build


FROM nginx:1.21.0-alpine as server
ENV NODE_ENV production

COPY --from=frontend /app/build/. /usr/share/nginx/html/
COPY --from=frontend /app/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


#EXPOSE 3000
#CMD ["node", "server.js"]