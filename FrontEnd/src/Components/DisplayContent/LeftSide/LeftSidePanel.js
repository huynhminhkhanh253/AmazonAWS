import React, { Children, createContext, useContext, useEffect, useState } from 'react';
import "./LeftSide.css"



function LeftSidePanel(props) {
    const [isSubscribed, setIsSubscribed] = useState(true);
    const [isSubscribed2, setIsSubscribed2] = useState(true);
    const handleChange = (event) => {
        setIsSubscribed(current => !current)
        props.getData(isSubscribed);
        
    };
    const handleChange2 = (event) => {
        setIsSubscribed2(current => !current)
        props.getData2(isSubscribed2);
    };

    
    useEffect(() => {
        getData();
       
    });
    const getData=()=>{
        fetch("http://amazonproductdetails-1304216633.ap-southeast-1.elb.amazonaws.com/amazon/products/getProductApple")
            .then(respone => respone.json())
            .then(data => {
                
            })
            .catch(error=>{
                
            })
    }
    return ( 
        <div className="LeftSide_main">
            <div className="leftSide_header">
                Brand
            </div>
            <div className="leftSide_brandName">
                <label className="BrandName">
                    <input value="Apple" onChange={handleChange} type="checkbox"/>Apple                    
                </label>
                <label className="BrandName">
                    <input onChange={handleChange2} type="checkbox" value="Samsung"/>Samsung
                </label>
            </div> 
        </div> 
    );
}

export default LeftSidePanel;