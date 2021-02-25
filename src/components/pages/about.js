import React from 'react';
// import profilePicture from "../../static/assets/images/bio/"

export default function() {
    return(
        <div className="content-page-wrapper">
            <div 
            className="left-colum" 
            style= {{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />
            <div className="right-colum">i'm raquel, an 18 y/o highschool graduate studying Food Science and Nutrition at the university of Leeds, UK</div>
        </div>
    )
}