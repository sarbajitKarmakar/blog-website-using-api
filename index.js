const express = require("express");
const bodyParser = require('body-parser')

const routes = require("./routes/posts.js");

const app = express();
const port = 4000;


// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/posts", router);
//Write your code here//

//CHALLENGE 1: GET All posts





app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
