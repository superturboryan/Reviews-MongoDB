# mongo-workshop

run npm install in both frontend and backend folders
`cd /frontend && npm start`
use the debugger to launch our `backend/server.js` file

the react page has a form where users can submit reviews.
Right now when we submit a review, nothing happens.
When we click Show Reviews, no reviews appear....

look at /backend/server.js

Some essential code is missing.

set the url to your own mongodb

Fix our endpoints so the POST endpoint will write reviews to your mongo database, 
and the GET endpoint will read the reviews from the database

```
app.post('/getADog', (req,res)=>{
    let dog =''
    MongoClient.connect(url, (err,db)=>{
        if (err) throw err;
        var dbo = db.db("dog-data")
        dbo.collection("pups").findOne({}, (err,result)=>{
            if (err) throw err;
            dog = result
            db.close
        })
    })
    res.send(JSON.stringify({dog}))
})
```

