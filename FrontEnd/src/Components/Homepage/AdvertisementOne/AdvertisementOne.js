import React from 'react';
import "./AdvertisementOne.css"

function AdvertisementOne(props) {
    return (
        <div className="AdvertisementOne_main">
            <div className="Advertisement_header">
            Up to 70% off | Electronics clearance store
            </div>
            <div className="Advertisement_body">
                <img src="https://ik.imagekit.io/gyxs5vcin/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1683889905413" width="300px" />
            </div>
            <div className="Advertisement_footer"> 
                See more
            </div>
        </div>
    );
}

export default AdvertisementOne;
