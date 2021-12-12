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

`minikube addons enable ingress metrics-server`\
`minikube addons enable metrics-server`

**Expose the application - In a separate terminal window run**: \
`minikube service ingress-nginx-controller -n ingress-nginx --url`

You will be displayed with the following information. Copy the highlighted port number. Notice: you will probably see a different value \
![Alt text](misc/Screenshot_1.png?raw=true)

Install application (as non root user):\
`helm install users-app umbrella/`

Check application installed successfuly:
`kubectl get pods`

Following pods status should be 'Running':

1. frontend-deployment
2. backend-deployment
3. mongodb-statefulset-0

Verify the IP address is set:
`kubectl get ingress`

Add the following line to the bottom of the /etc/hosts file on your computer (you will need administrator access):
`<INGRESS-ADDRESS>     users.lusha`
(If running on localhost and ingress-nginx-controller is of type NodePort, the address value in hosts file should be set to 127.0.0.1)

To view the users available by the application, Open url "http://users.lusha:<port-number>".
