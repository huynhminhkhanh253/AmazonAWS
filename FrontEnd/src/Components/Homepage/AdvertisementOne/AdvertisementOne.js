import React from 'react';
import "./AdvertisementOne.css"

function AdvertisementOne(props) {
    return (
        <div className="AdvertisementOne_main">
            <div className="Advertisement_header">
            {props.header}
            </div>
            <div className="Advertisement_body">
                <img src={props.image} width="300px" />
            </div>
            <div className="Advertisement_footer"> 
                See more
            </div>
        </div>
    );
}

export default AdvertisementOne;
