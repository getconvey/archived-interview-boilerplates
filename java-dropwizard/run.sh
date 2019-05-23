#!/bin/sh
java -jar `ls -t target/java-dropwizard-*-SNAPSHOT.jar | head -n 1` server src/main/configuration/dev.yaml