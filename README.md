# Intro

The app is written in node.js using express framework and MongoDB.
App purpose is to display a list of users.

## Local deployment using Minikube

Users application should be deployed on a local kubernetes instance.

Prerequisite:

1. Validate Minikube is installed on your machine.
2. Clone repository
3. Open terminal window in repository directory

Enter the following commands:

`minikube start`

`minikube addons enable ingress`

**In a separate terminal window run**: \
`minikube service ingress-nginx-controller -n ingress-nginx --url`

You will be displayed with the following information. Copy the highlighted port number. Notice: you will probably see a different value \
![Alt text](misc/Screenshot_1.png?raw=true)

Print 

Install application:\
`helm install users-app umbrella/`

Open url "http://users.lusha:copied-port". You should be prompted with a list of users.

Check application installed successfuly:
`kubectl get pods`


3 pods status should be running:

1. frontend-deployment
2. backend-deployment
3. mongodb-statefulset-0
