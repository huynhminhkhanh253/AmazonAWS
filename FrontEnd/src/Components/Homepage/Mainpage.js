import React, { Component } from 'react';
import "./Mainpage.css";
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';


class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="mainpage">
                <div style={{paddingTop: "250px", display: "flex", flexWrap: "wrap"}}>
                    < AdvertisementOne />
                    < AdvertisementFour />
                    < AdvertisementOne />
                    < AdvertisementOne />
                    < AdvertisementOne />
                    < AdvertisementOne />
                    < AdvertisementFour />
                    < AdvertisementFour />
                    < AdvertisementFour />
                </div>
            </div>
         );
    }
}
 
export default MainPage;