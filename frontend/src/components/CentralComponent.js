import React,{useEffect, useState} from 'react'
import {FaRegStar} from "react-icons/fa";
import {TweetBoxComponent} from "./TweetBoxComponent";
import {PublishedTweet} from "./PublishedTweet";
import axios from "axios";
// import cors from 'cors';
export default function CentralComponent() 
{
  const [tweetsArray, setTweetsArray] = useState([]);
  async function fetchTweets()
  {
  
    console.log("ServerURL", process.env.REACT_APP_SERVER_URL);
    try{
      const response = await  axios.get(`${process.env.REACT_APP_SERVER_URL}/tweets/getAll`)
      const tweetsArry = response.data.result;
      console.log(tweetsArry);
      setTweetsArray(tweetsArry);
    }
    catch(err)
    {
       console.log("Error occurred", err);
    }
  }
  
  useEffect(()=> {
   fetchTweets();
  },[])

  function renderHeader()
  {
    return(
    <div className="header d-flex align-items-center px-3 fw-bold fs-3 border">
       <div>Home</div>
       <div className="ms-auto star-icon">
         <FaRegStar />
       </div>

     </div>
    )
  }
  
  function renderPublishedTweets()
  {
    return tweetsArray.map((tweetItem, index) =>
    {
      return(
        <div key={index}>
           <PublishedTweet tweetItem={tweetItem} />
          </div>
      )
    })
  }
  return (
    <div className="central-component">
     {renderHeader()}
     <TweetBoxComponent fetchTweets={fetchTweets}/>
    {renderPublishedTweets()}
    </div>
  )
}
