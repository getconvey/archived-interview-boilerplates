# A simple springboot app.

**Requires Java 14 or greater**

The pom.xml is configured to use Java 11. We've tested with 11, 14, 17 and 18 so you can choose a version that's
convenient.

To run

```
mvn spring-boot:run
```

The boilerplate code exposes a single endpoint at `localhost:8080/helloworld` and a health check
at `localhost:8081/actuator/health`. The endpoint accepts a get request and returns a json response.

`curl -i localhost:8080/helloworld`

will return (excepting the dates)

    HTTP/1.1 200 OK
    Date: Sat, 22 May 2021 18:55:16 GMT
    Content-Type: application/json
    Vary: Accept-Encoding
    Content-Length: 27
    
    {"text":"Bonjour le monde"}%

The healthcheck just returns that all is ok.

    % curl -i localhost:8080/actuator/health
    {"status":"UP"}