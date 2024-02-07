import React, { useContext } from 'react';
import "./Checkout.css";
import Grid from '@material-ui/core/Grid';
import CheckoutItems from './CheckoutItems';
import {CartContext} from '../CartContext';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


function Checkout(props) {
    const {item,size,increment,getData} = useContext(CartContext);
    const cartValue = function(){
        let price = 0;
        for(let i = 0; i < item.length; i++){
            price+=item[i].price;
        }
        return price;
    }
    const handledelete = () =>{
        getData();
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
                                    <CheckoutItems delete={handledelete} definition = {value}/>
                                    )
                                )

                            }
                            {/* <CheckoutItems />
                            <CheckoutItems /> */}
                        </div>
                    </div>
                 </Grid>
                 <Grid item={2}>
                    <div style={{ width: "300px", padding: "20px", marginTop: "15px", backgroundColor: "white"}}>
                        <div style={{display: "flex"}}>            
                            <div style={{fontSize: "25px"}}>Subtotal ( {size} items) : <strong>{ cartValue() }</strong></div>
                            <div style={{marginLeft:"5px", fontSize:"20px", marginTop:"5px"}} >$</div>
                        </div>
                        
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