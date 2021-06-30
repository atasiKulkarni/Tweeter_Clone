import React, {useState} from 'react'
import axios from 'axios';
export function TweetBoxComponent({fetchTweets}) 
{
  const [tweetText, setTweetText] = useState("");
  async function sendTweet()
  {
     try{
          const sendTweetResponse = await axios.post(`${process.env.REACT_APP_SERVER_URL}/tweets/add`,
          {
            "tweet" : tweetText,
            "userName" :"Atasi",
            "userHandle":"Kulkarni",
            "isLiked": true,
            "timeStamp": Date.now()
          })
          console.log("Response",sendTweetResponse);
          fetchTweets();
          setTweetText("");
     }
     catch(err)
     {
         console.log("Error", err);
     }
  }
    return (
        <div className="px-4 py-4">
        <div className="d-flex">
        <div>
         <img src="images/avatar.png" alt="Avatar" className="tweet-avtar"/>
        </div>

        <div className="ms-2">
          <textarea placeholder="What's Happening?" 
                   className="tweet-textarea" 
                    value={tweetText}
                    onChange={(e) => setTweetText(e.target.value)}/>
        </div>
        </div>
        
        <div className="d-flex">
          <button className="btn btn-primary ms-auto tweet-button"
                  onClick={() => sendTweet()}>
            Tweet
          </button>
        </div>
      </div> 
    )
}
