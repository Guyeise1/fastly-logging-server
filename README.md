# Fastly Logging
An HTTP server to print Fastly logs.

### Prerequirements
* Docker / K8S 
### How to install

#### Docker
```shell
docker network create fastly-logging
docker run -d --name fastly-logging --network fastly-logging guyeise5/fastly-logging
docker run -d --name ngrok-fastly-logging --network fastly-logging -e NGROK_AUTHTOKEN=<NGROK_AUTHTOKEN> ngrok/ngrok:alpine http http://fastly-logging:8080 --log=stdout
```

#### Helm Chart
```shell
git clone https://github.com/Guyeise1/fastly-logging-server && cd fastly-logging-server 
helm install ./helm/fastly-loggin --set ngrok.enabled=true --set ngrok.authToken=<NGROK_AUTHTOKEN> 
```

---

### Helm Chart Values:
| Name            | Default  | Description                                      |  
|-----------------|----------|--------------------------------------------------|
| ngrok.enabled   | false    | Weather or not starting an ngrok tunnel          |
| ngrok.authToken | ""       | Auth token for ngrok (required if ngrok.enabled) |
| ngrok.hostname  | ""       | The hostname for ngrok                           |
| ngrok.region    | us       | The region of the channel                        |
| ingress.enabled | false    | Whether or not to expose an ingress              |
| ingress.host    | ""       | Host for the ingress.                            |
