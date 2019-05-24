# A simple dropwizard app.

**Must Use Java 8**

To run

```
mvn clean verify
./run.sh
```

Single endpoint exposed at `localhost:8080/helloworld`. No healthchecks implemented.

Accepts a get request and returns a json response.

`curl localhost:8080/helloworld`

might return 

`{"text":"Bonjour le monde"}`
