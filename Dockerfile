#Dockerfile
#1st State
#FROM node:16.13.0

#RUN mkdir -p /usr/src/app/my-app
#WORKDIR /usr/src/app/my-app
#RUN npm install

FROM node:16.13.0-alpine as main-build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
#COPY package.json ./
#COPY package-lock.json ./
COPY ./web-accounting/package.json ./
COPY ./web-accounting/package-lock.json ./
RUN npm install

# add app
#COPY . ./
COPY ./web-accounting ./

# start app
CMD ["npm", "start"]