const mongoose = require('mongoose');
const TweetSchema = mongoose.Schema(
    {
        tweet: String,
        userName: String,
        userHandle: String,
        isLiked: Boolean,
        timeStamp: Number,

    },
    {collections:"Tweets"}
);
module.exports = mongoose.model("Tweets",TweetSchema);