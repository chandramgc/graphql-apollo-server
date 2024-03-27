FROM node:lts-alpine

# set the working directory
WORKDIR /app

# install dependencies
COPY ./package.json /app
RUN npm install apollo-server@2.12
RUN npm install nodemon@2.0
RUN npm install

# copy the scripts to the folder
COPY /src /app

# expose the port
EXPOSE 4000

# start the server
CMD ["npm", "start"]