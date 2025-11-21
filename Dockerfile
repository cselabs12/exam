FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY . /app 
RUN javac HelloWorld.java
CMD ["java", "HelloWorld"] 

