# meetup-app-project

# Docker --------------------------------------
## Build an image
```
docker build -t meetup-app-projekt .
```
## Run docker image
```
docker run -it -p 8081:8080 --rm --name docker-container meetup-app-projekt
```
## Process status
```
docker ps
```
# Heroku --------------------------------------

## Login heroku
```
heroku login
```
## Login heroku container
```
heroku container:login
```
## Build images for heroku
```
docker build -t registry.heroku.com/meetup-app-project/web .
```
## Push images to heroku
```
docker push registry.heroku.com/meetup-app-project/web
```
## Release images on heroku
```
heroku container:release --app meetup-app-project web
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
