
# Devops home task

## Intro

In this project you can find 2 folders: frontend and backend. \
This represents standard structure and web application. \
The app is written in node.js using express framework.

## The task

You need to make this app deployable to staging \ production env. \
You can use whatever language, method you konw and love to deploy the app to a local \ remote cluster.

## Architecture requirements

1. frontend service will render the site
2. backend will serve as api layer for the app
3. the stores its state in mongodb
4. (optional) mongodb and backend are hidden from outside world
5. both app are listening by default on port 8080

## Note for running the servers

- install dependencies:
  - `npm install`
- start the app:
  - `node index.js`

# Local deployment using Minikube

This application should be deployed on local kubernetes instance. 
1. Minikube should be installed on your machine.
Clone repository
`minikube start` \
`minikube addons enable ingress`

**In a separate terminal window run**: \
`minikube service ingress-nginx-controller -n ingress-nginx --url`

You will be displayed with the following information. Copy the highlighted port number. Notice: you will probably see a different value \
![Alt text](misc/Screenshot_1.png?raw=true)

`helm install users-app umbrella/`

In browser, "http://users.lusha:port"