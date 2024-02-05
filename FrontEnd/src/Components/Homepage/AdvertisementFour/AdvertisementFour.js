import React from 'react';
import "./AdvertisementFour.css"

function AdvertisementFour(props) {
    return (
        <div className="AdvertisementOne_main">
            <div className="Advertisement_header">
            Up to 70% off | Electronics clearance store
            </div>
            <div className="Advertisement_body">
                <img src={props.image1} className="ad_fourImage" /> 
                <img src={props.image2} className="ad_fourImage" /> 
                <img src={props.image3} className="ad_fourImage" /> 
                <img src={props.image4} className="ad_fourImage" /> 
            </div>
            <div className="Advertisement_footer"> 
                See more
            </div>
        </div>
    );
}

export default AdvertisementFour;
