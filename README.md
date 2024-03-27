# graphql-apollo-server

## Installation Process

```
npm init
npm install apollo-server@2.12
npm install nodemon@2.0
```

## Postman 
```
curl --location 'http://localhost:4000/' \
--header 'Content-Type: application/json' \
--data '{"query":"{\r\n    __schema{\r\n        types{\r\n            name\r\n        }\r\n    }\r\n}","variables":{}}'
```

## Docker

```
docker build -t graphql-server .
docker run -d -p 4000:4000 graphql-server
```