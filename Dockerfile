FROM node:16
WORKDIR /app/
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
#RUN npm ci --only=production
COPY . .
#RUN npm run build
RUN ls .

CMD ["npm", "start"]

#EXPOSE 3000
#CMD ["node", "server.js"]