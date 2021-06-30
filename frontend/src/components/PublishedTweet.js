import React from 'react'
import {FaRegCommentAlt, FaRegHeart, FaRetweet, FaHeart} from "react-icons/fa";
import {FiShare} from "react-icons/fi";
export function PublishedTweet({tweetItem}) 
{
    console.log("TWEET",tweetItem);
    function renderHeartIcon()
    {
        if(tweetItem.isLiked === true)
        {
            return(
                <div>
                   <FaHeart />
                </div>
            ) 
        }
        else{
            return(
                <div>
                    <FaRegHeart />
                </div>
            ) 
        }
          
    }
    
    return (
        <div className="published-tweet-container d-flex p-4  border">
            <div>
            <img src="images/avatar.png" alt="Avatar" className="tweet-avtar"/>
            </div>
            <div className="ms-2">
                <div className="d-flex">
                    <div className="fw-bold">
                        <span>{tweetItem.userName}</span>
                    </div>
                    <div className="ms-2 user-handle">
                         <span>@{tweetItem.userHandle}</span>
                    </div>
                    </div>
                 <div>
                    {tweetItem.tweet}
                 </div>

                 <div className="action-button-container d-flex mt-2 ms-2">
                     <div className="tweetbox-action-icon">
                          <FaRegCommentAlt />
                     </div>
                     <div className="tweetbox-action-icon">
                         {renderHeartIcon()}
                         
                     </div>
                     <div className="tweetbox-action-icon">
                     <FaRetweet/>
                     </div>
                     <div className="tweetbox-action-icon">
                         <FiShare />
                     </div>
                 </div>
            </div>
        </div>
    )
}
