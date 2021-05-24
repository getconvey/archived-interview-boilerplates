# A simple dropwizard app.

**Requires Java 14 or greater**

pom.xml is configured to use java 14.

To run

```
mvn clean verify
./run.sh
```

The boilerplate code exposes a single endpoint at `localhost:8080/helloworld` and a health check
at `localhost:8081/healthcheck`. The endpoint accepts a get request and returns a json response.

`curl -i localhost:8080/helloworld`

will return (excepting the dates)

    HTTP/1.1 200 OK
    Date: Sat, 22 May 2021 18:55:16 GMT
    Content-Type: application/json
    Vary: Accept-Encoding
    Content-Length: 27
    
    {"text":"Bonjour le monde"}%

The healthcheck just returns that all is ok.

    % curl -i localhost:8081/healthcheck
    HTTP/1.1 200 OK
    Date: Sat, 22 May 2021 18:56:11 GMT
    Content-Type: application/json
    Cache-Control: must-revalidate,no-cache,no-store
    Vary: Accept-Encoding
    Content-Length: 178

    {"AppHealthCheck":{"healthy":true,"duration":0,"timestamp":"2021-05-22T13:56:11.689-05:00"},"deadlocks":{"healthy":true,"duration":0,"timestamp":"2021-05-22T13:56:11.690-05:00"}}%