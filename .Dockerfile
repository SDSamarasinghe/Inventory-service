FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

# Install the application dependencies
RUN npm install

COPY . .

EXPOSE 3000

# Start the application
CMD [ "npm", "run", "start" ]