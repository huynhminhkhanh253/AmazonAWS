import React, { Component, createContext, useEffect } from 'react';


export const CartContext = createContext();
class CartContextProvider extends Component {
    
    constructor(props) {
        super(props);
        // let existingCart = localStorage.getItem('myCart') != undefined ? JSON.parse(localStorage.getItem('myCart')) : [];
        
        // let existingCart = [];
        // let cardAmount = existingCart.length;
        this.state = {
            data : null, 
            item: [],
            size: 0,
            
            increment: (value, id) => {
                
                let payload = {
                    "userId" : "9b31316d-03d4-41bf-b779-72900a6aebfd",
                    "productId" : id      
                }
                const requestOptions = {
                    method: "POST",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(payload),
                }
                fetch("http://localhost:8081/amazon/addToCart/add", requestOptions)
                .then()
                .then(data => {
                    // this.setState({item : this.state.cartreturn()});
                    
                    // this.setState( { item: itemList } );
                    // this.setState( { size: this.state.item.list.length });
                    this.state.getData();
                    
                    // this.state.saveToLocalCache();
                })
                .catch(error=>{
                    
                }) 
                
            },
            saveToLocalCache: ()=>{
                localStorage.setItem('myCart', JSON.stringify(this.state.item));

            },
            getData:()=>{
                fetch("http://localhost:8081/amazon/addToCart/show/9b31316d-03d4-41bf-b779-72900a6aebfd")
                    .then(respone => respone.json())
                    .then(json => {
                        this.setState( { size: json.list.length });
                        this.setState({item : json.list })
                    })
                    .catch(error=>{
                        
                    })
            },
            // cartreturn: () =>{
            //     let list = [];
            //     fetch("http://localhost:8081/amazon/addToCart/show/9b31316d-03d4-41bf-b779-72900a6aebfd", {method:"GET"})
            //     .then(respone => respone.json())
            //     .then(data => {
            //         list = data.list;
            //     })
            //     .catch(error=>{
                    
            //     })
            //     return list;
            // }
         }
         
    }
    
    // getData=()=>{
    //     fetch("http://localhost:8081/amazon/addToCart/show/9b31316d-03d4-41bf-b779-72900a6aebfd")
    //         .then(respone => respone.json())
    //         .then(json => {
    //             this.setState( { size: json.list.length });
    //             this.setState({item : json.list })
    //         })
    //         .catch(error=>{
                
    //         })
    // }
    componentDidMount() {
        this.state.getData();
    }

    render() { 
        return ( 
            <CartContext.Provider value={{ ...this.state,...this.increment,...this.getData}} >
                {this.props.children}
            </CartContext.Provider>
         );
    }
}
 
export default CartContextProvider;