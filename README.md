# BSALE REST API Example
A RESTful API example for simple ecommerce application with Javascript, MySQL, Node.js and Express.

It is a just simple tutorial or example for making simple RESTful API with Javascript using **mysql2** (A nice npm library) and **express**

## Installation & Run
```bash
# Download this project
git clone https://github.com/ignaciocorball/bsale-backend-api-rest.git
```

Before running API server, you should set the database config with yours or set the your database config with my values on [config.js](https://github.com/ignaciocorball/bsale-backend-api-rest/blob/main/config.js)
```javascript
const config = {
    db: {
      host: "test.c6v2un4ytu1rrl6.us-west-1.rds.amazonaws.com",
      user: "test",
      password: "test",
      database: "test",
    },
    limitPerPage: 999, // Can modify this value in the request
};
module.exports = config;
```

```bash
# Build and Run
cd bsale-backend-api-rest
npm install
npm run start

# API Endpoint : http://127.0.0.1:3333
```

## Structure
```
Bsale-backend-api-rest
├── routes                      // API routes
│   ├── categories-route.js    
│   ├── products-route.js       
├── services                    // API services
│   ├── db-connection.js        // Query to database
│   ├── helper.js               // Shared Helper Functions
│   ├── categories-service.js  
│   ├── products-service.js    
├── config.js                   // Database configuration
├── package.json
├── README.md
└── index.js                    // Main entry point
```

## API

#### /products
* `GET` : Get all products

#### /categories
* `GET` : Get all categories

#### Example Json Object Result
<img style="width:100%" src="https://i.imgur.com/Qq94VhD.png"></img>

## Todo

- [x] Support basic REST APIs.
- [ ] Support Authentication with user for securing the APIs.
- [ ] Make convenient wrappers for creating API handlers.
- [ ] Write the tests for all APIs.
- [x] Organize the code with packages
- [ ] Make docs with GoDoc
- [ ] Building a deployment process 
