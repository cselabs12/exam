FROM open jdk:17-jdk-alpine
WORKDIR /app
COPY . /app 
RUN javac HelloWorld.java
CMD ["java", "HelloWorld"] 
