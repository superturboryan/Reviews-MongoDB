const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
//PASTE YOUR MLAB URI STRING HERE
const url = "";

app.use(bodyParser.raw({ type: "*/*" }));

//Here we will insert new posts into our database
//when we send back our response, we can send it
//in this format:
//{status: true, message:'Success!'}
app.post("/postReview", (req, res) => {
  let review = JSON.parse(req.body);
});

//Here will get all reviews to display them on
//the frontend. We are going to respond with
//an object in this format:
//{status:true, reviews:[array of reviews]}
app.get("/getReviews", (req, res) => {
  
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});
