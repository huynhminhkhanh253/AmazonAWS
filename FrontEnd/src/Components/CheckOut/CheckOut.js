import React, { useContext } from 'react';
import "./Checkout.css";
import Grid from '@material-ui/core/Grid';
import CheckoutItems from './CheckoutItems';
import {CartContext} from '../CartContext';


function Checkout(props) {
    const {item,size,increment} = useContext(CartContext);
    const cartValue = function(){
        let price = 0;
        for(let i = 0; i < item.length; i++){
            price+=parseInt(item[i].price);
        }
        return price;
    }
    return (
        <div className="checkout__body">
             <Grid container >
                 <Grid item={10}>
                    <div className="checkout__container">
                        <div style={{fontSize: "30px" , fontWeight: "500", marginLeft:"10px"}}>Shopping Cart</div>
                        <div style={{marginTop:"30px"}}> 
                            {
                                item.map((value)=>(
                                    <CheckoutItems definition = {value}/>
                                    )
                                )

                            }
                            {/* <CheckoutItems />
                            <CheckoutItems /> */}
                        </div>
                    </div>
                 </Grid>
                 <Grid item={2}>
                    <div style={{ width: "290px", padding: "20px", marginTop: "15px", backgroundColor: "white"}}>
                        <div style={{fontSize: "26px"}}>Subtotal ( {size} items) : <strong>{ cartValue() }</strong></div>
                        <div style={{marginTop:"10px"}}>
                            <label>
                                <input type="checkbox" />This order contains a gift
                            </label>
                        </div>
                        <div style={{paddingTop : "0px "}}>
                            <button className="placeorder__button2" >Proceed to Checkout</button>
                        </div>
                    </div>
                 </Grid>
             </Grid>
        </div>
    );
}

export default Checkout;