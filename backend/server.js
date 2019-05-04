const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
//PASTE YOUR MLAB URI STRING HERE
const url = "mongodb+srv://admin:Ryanu1123@cluster0-nswep.mongodb.net/test?retryWrites=true";

app.use(bodyParser.raw({ type: "*/*" }));

//Here we will insert new posts into our database
//when we send back our response, we can send it
//in this format:
//{status: true, message:'Success!'}

app.post("/postReview", (req, res) => {

   let review = JSON.parse(req.body);
   // let username = review.username
   // let rating = review.rating
   // let reviewComment = review.review

   MongoClient.connect(url, (err, db) => {

      if (err) {
         console.log(err)
      }

      let mainDatabase = db.db("Ryan-DB")

      let postsCollection = mainDatabase.collection("Posts")

      postsCollection.insertOne(review, (err, results) => {
         if (err) throw err;
         console.log("Successfully added Review to Posts collection in Ryan-DB")
         db.close()

         res.send(JSON.stringify({ status: true, message: "New review created" }))


      })
   })
});

//Here will get all reviews to display them on
//the frontend. We are going to respond with
//an object in this format:
//{status:true, reviews:[array of reviews]}
app.get("/getReviews", (req, res) => {

   MongoClient.connect(url, (err, db) => {

      if (err) throw err;

      let mainDatabase = db.db("Ryan-DB")

      let postsCollection = mainDatabase.collection("Posts")

      postsCollection.find({}).toArray((err, result) => {
         if (err) throw err;
         console.log(result)

         db.close()
         res.send(JSON.stringify({ status: true, reviews: result }))
      })

   })

});

app.listen(4000, () => {
   console.log("listening on port 4000");
});
