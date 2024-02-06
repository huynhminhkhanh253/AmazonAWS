import React, { createContext, useContext, useEffect, useState } from 'react';
import "./RightSide.css";
import Product from './Product';
import { Link } from 'react-router-dom';


export const Context = createContext();

function RightSidePanel(props) {
    
    const [listOfProduct,setListOfProducts] = useState([]);
    const [listOfProductApple,setListOfProductsApple] = useState([]);
    const [listOfProductSamsung,setListOfProductsSamsubg] = useState([]);
 
    const getData2=()=>{

        fetch("http://localhost:8082/amazon/products/getProductApple")
        .then(respone => respone.json())
        .then(list => {
            setListOfProductsApple(list);
        })
        .catch(error=>{

        })       
    }

    const getData3=()=>{

        fetch("http://localhost:8082/amazon/products/getProductSamsung")
        .then(respone => respone.json())
        .then(list => {
            setListOfProductsSamsubg(list);
        })
        .catch(error=>{

        })       
    }

    const getData=()=>{
        fetch("http://localhost:8082/amazon/products/getAllProducts")
        .then(respone => respone.json())
        .then(list => {
            setListOfProducts(list);
        })
        .catch(error=>{

        })
    }

    useEffect(()=>{
        getData();
        getData2();
        getData3();

        
        //console.log('hello from right' + isSubscribed)
        //api call
        // let list =[
        //     { id: 123456543, name : "Iphone10", rating: "34565", price: "4534", image:"https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583"},
        //     { id: 54342265, name : "Iphone11", rating: "656", price:"76543456", image:"https://ik.imagekit.io/amazon123/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__mSWkMhTkWnT.webp?updatedAt=1628852292388"},
        //     { id: 123453456543, name : "Iphone12", rating: "8754", price:"76543", image:"https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578"},
        //     { id: 12344545456543, name : "Iphone13", rating: "344574367565", price:"637357", image:"https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461"},
        //     { id: 123465656543, name : "Iphone12", rating: "8754", price:"76543", image:"https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578"},
        //     { id: 2356346363, name : "Iphone13", rating: "344574367565", price:"637357", image:"https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461"}
        // ]
        
        // setListOfProducts(list);

    },[]);

    
    return (
        <div className="RightSide__main">
            {/* <Product rating="234444" price="21342" name="iphone 11" image="https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578" />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product /> */}
            {
                props.istick == true && props.istick2 == false ?
                listOfProductApple.map(
                    (item)=>(
                        <Link style={{textDecoration:"none", color:"inherit"}} to={"/order/" + item.productID} >
                            <Product definition = {item} />
                        </Link>
                    )
                ) 
                : props.istick2 == true && props.istick == false ?
                listOfProductSamsung.map(
                    (item)=>(
                        <Link style={{textDecoration:"none", color:"inherit"}} to={"/order/" + item.productID} >
                            <Product definition = {item} />
                        </Link>
                    )
                )
                : 
                listOfProduct.map(
                    (item)=>(
                        <Link style={{textDecoration:"none", color:"inherit"}} to={"/order/" + item.productID} >
                            <Product definition = {item} />
                        </Link>
                    )
                )
                
            }
            
        </div>    
    );
}

export default RightSidePanel;