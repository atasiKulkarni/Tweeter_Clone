const express = require('express');
const router = express.Router();
const tweetsModel = require('../Models/tweetsModel');

// Creating data using POST API
router.post('/add', function(req, res) 
{
    console.log("Request Body", req.body);
    const tweetData = new tweetsModel(req.body);
    tweetData.save(function(err)
    {
         if(err){
             console.log("Error Occurred while adding tweet", err);
         }
         else
         {
             console.log("Tweet added successfully");
             res.send("Tweets added successfully");
         }
    })
  
});

//Fetch data from database using GET API
router.get('/getAll', function(req, res) 
{
    tweetsModel.find({}, {__v:0},{sort:{timeStamp:-1}},function(err, data)
    {
        if(err){
            console.log("Error Occurred while fetching data", err);
        }
        else
        {
            console.log("Data", data);
            res.send({result: data});
        }
    });
});
module.exports = router;
