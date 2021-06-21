const mangoose = require('mongoose');
const TweetSchema = mongoose.schema(
    {
        tweet: String,
        userName: String,
        userHandel: String,
        isLiked: Boolean,
        timeStamp: Number,
    },
    {collection: "Tweets"}
);
module.exports = mongoose.model("Tweets", TweetSchema);
