import React from 'react'
import {FaTwitter, FaHome, FaHashtag} from "react-icons/fa";

import {MdNotifications} from "react-icons/md";
export default function LeftSideBar() 
{
    function renderHome()
    {
        return(
            <div className="d-flex fs-4 align-items-center active-item ms-3 mt-3">
             <div className="d-flex align-items-center">
                 <FaHome />
            </div>
            <div className="ps-4 fw-bold">HOME</div>
           </div>
            
        )
    }
    function renderExplore()
    {
        return(
            <div className="d-flex fs-4 align-items-center ms-3">
             <div className="d-flex align-items-center">
             <FaHashtag />
            </div>
            <div className="ps-4 fw-bold">EXPLORER</div>
           </div>
        )
    }
    function renderNotification()
    {
        return(
            <div className="d-flex fs-4 align-items-center ms-3">
             <div className="d-flex align-items-center">
             <MdNotifications />
            </div>
            <div className="ps-4 fw-bold">NOTIFICATION</div>
           </div>  
        )
    }
    
    return (
        <div className="left-sidebar">
            <div className="twitter-bird ms-3 mt-4 fw-bold fs-3"><FaTwitter /></div>
            {renderHome()}
            {renderExplore()}
            {renderNotification()}
        </div>
    )
}
