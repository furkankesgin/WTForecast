# Prepare app
FROM node:latest as build-step

# install npm packages
RUN mkdir /WTForecast
WORKDIR /WTForecast
COPY package.json /WTForecast
RUN npm install

# create build
COPY . /WTForecast
# pass the env key to app before build
ARG OPENWEATHERMAP_API_KEY
ENV REACT_APP_OPENWEATHERMAP_API_KEY=$OPENWEATHERMAP_API_KEY 
RUN npm run build

# Preapare server
# FROM nginx:1.17.1-alpine
FROM nginx:alpine
COPY --from=build-step /WTForecast/build /usr/share/nginx/html