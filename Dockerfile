FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY . /app
RUN javac helloworld.java
CMD ["java", "helloworld"]
