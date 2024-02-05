import React from 'react';
import "./Checkout.css";
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';

function CheckoutItems(props) {
    const handledelete = () =>{
        
    };
    return (
        <div>
            <div style={{ position:"relative", borderTop: "1px solid #E7E7E7", width: "98%" ,display:"flex", height: "250px", marginLeft: "10px"}}>
                <div style={{margin: "25px"}}>
                    <img src={props.definition.image} height="200px" />
                </div>
                <div style={{ marginTop: "20px"}}>
                    <div style={{fontSize: "20px"}} className="product__name">{props.definition.name}</div> 
                    <div style={{display:"flex", marginTop:"50px"}}>
                        <div style={{fontWeight:"bold"}}>Sold by</div>
                        <div style={{marginTop:"1px", marginLeft:"10px"}}>{props.definition.soldby}</div>
                    </div>
                    <div style={{display:"flex", marginTop:"30px"}}>
                        <div style={{fontWeight:"bold"}}>Rating</div>
                        <StarIcon className='star' fontSize="inherit" />
                        <div style={{marginTop:"2px", marginLeft:"5px"}}>{props.definition.rating}</div>
                    </div>

                    
                </div>
                <div className="product__price">
                    <div style={{fontSize:"15px", marginTop:"8.5px"}} >$</div>
                    <div>{props.definition.price}</div>
                </div>
                
            </div>
            <div className='delete'>
                <Button onChange={handledelete} size="small">Delete</Button>
                
            </div>
            
        </div>
    );
}

export default CheckoutItems;