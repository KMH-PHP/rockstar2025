const jwt = require("jsonwebtoken");

const secret = "s!c#1$G9";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxpY2UiLCJiaW8iOiJqd3QgYmlvIiwiaWF0IjoxNzMyMDMyMzA1fQ.VAyTMZAlTFmuHxnYI4HQF9JSbhBOG7ij53wdBvT76pA";

const decode = jwt.verify(token, secret);
console.log(decode)