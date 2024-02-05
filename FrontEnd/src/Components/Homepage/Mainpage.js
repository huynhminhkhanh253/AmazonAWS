import React, { Component } from 'react';
import "./Mainpage.css";
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';
import { Link } from 'react-router-dom';
import Banner from './Banner';


class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="mainpage">
                <div className='banner_part'>
                    <Banner/>
                </div>
                <div className='displayad'>
                    <Link style={{textDecoration:"none", color:"inherit"}} to={"/display"}>
                    < AdvertisementFour 
                        image1="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/31sIL3BSrkL._AC_.jpg" 
                        image2="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/51EMBBBAuKL._AC_SX679_.jpg"
                        image3="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61RklF9NgpL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                        image4="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71FuI8YvCNL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    />
                    </Link>
                    < AdvertisementOne image="https://nhasachbaoanh.com/wp-content/uploads/2022/06/duong-xua-may-trang-11.jpg" />
                    < AdvertisementFour 
                        image1="https://nhasachbaoanh.com/wp-content/uploads/2022/06/duong-xua-may-trang-11.jpg" 
                        image2="https://cdn0.fahasa.com/media/catalog/product/9/7/9780062116932.jpg"
                        image3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6m58iMQKgR3I4xV5qHJk8dECQSMSxRUQ-m4J9Vh-qmTMQcvYAPq_srz2bsvuDOqfvJd8&usqp=CAU"
                        image4="https://images-na.ssl-images-amazon.com/images/I/51Kxh-55IrL._AC_UL600_SR600,600_.jpg"
                    />
                    < AdvertisementOne image="https://ik.imagekit.io/gyxs5vcin/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1683889905413" />
                    < AdvertisementOne image="https://ik.imagekit.io/gyxs5vcin/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1683889905413" />
                    < AdvertisementOne />
                    < AdvertisementOne />
                    < AdvertisementOne />
                    < AdvertisementFour />
                    < AdvertisementFour />
                </div>
            </div>
         );
    }
}
 
export default MainPage;