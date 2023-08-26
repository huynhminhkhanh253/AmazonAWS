import React, { Component } from 'react';
import "./NavBar.css"
import { CartContext } from '../CartContext';

class NavBar extends Component {
    static contextType = CartContext;
    constructor(props) {
        super(props);
        this.state ={};
    }
    state = {  }
    render() { 
        let {item,size, increment} = this.context;
        return (
            <div>
                <div className="navbar_component">
                <div className="navbar_logo"></div>
                <div className="navbar_locator">
                        <div className="navbar_locatorImage"></div>
                        <div className="navbar_location">
                            Vietnam
                        </div>
                </div>
                <div className="navbar_searchcomponent">
                    <div>
                        <select className="navbar_dropdown">
                            <option value1="All">All</option>
                            <option value2="Alexa">Alexa</option>
                            <option value3="Books">Books</option>
                            <option value4="Baby">Baby</option>
                            <option value5="Beauty">Beauty</option>
                            <option value6="Clothes">Clothes</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" className="navbar_searchbox"/>
                    </div>
                    <div className="navbar_text navbar_searchboxdiv" >
                        <div className="navbar_searchicon"></div>
                    </div>
                    <div className="navbar_text navbar_signin">
                        <div style={{ fontSize: "12px" }}>Hello, Sign in</div>
                        <div style={{fontSize:"14px", fontWeight: "Bold" }}>Account & list</div>
                    </div>
                    <div className="navbar_text navbar_return">
                        <div style={{ fontSize: "12px" }}>Return</div>
                        <div style={{fontSize:"14px", fontWeight: "Bold" }}>&Oder</div>
                    </div>
                    <div className="navbar_text navbar_cart">
                        <div className="cart_image"></div>
                        <div className="cart_item">{ size }</div>
                        <div className="cart_text">Cart</div>
                    </div>
                </div>
                </div>
                <div className="navbar_footer">
                    <div className="navbar_footer_text">All</div>
                    <div className="navbar_footer_text">Today's Deal</div>
                    <div className="navbar_footer_text">Customer Service</div>
                    <div className="navbar_footer_text">Registry</div>
                    <div className="navbar_footer_text">Gift cards</div>
                    <div className="navbar_footer_text">Sell</div>
                </div>
            </div>
         );
    }
}
 
export default NavBar ;