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
                        header = "Deals in Phones" 
                        image1="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/31sIL3BSrkL._AC_.jpg" 
                        image2="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/51EMBBBAuKL._AC_SX679_.jpg"
                        image3="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/61RklF9NgpL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                        image4="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71FuI8YvCNL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    />
                    </Link>
                    < AdvertisementOne header ="Most valuable book" image="https://nhasachbaoanh.com/wp-content/uploads/2022/06/duong-xua-may-trang-11.jpg" />
                    < AdvertisementFour header ="Shop deals in Books"
                        image1="https://cdn0.fahasa.com/media/catalog/product/i/m/image_53609.jpg" 
                        image2="https://cdn0.fahasa.com/media/catalog/product/9/7/9780062116932.jpg"
                        image3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6m58iMQKgR3I4xV5qHJk8dECQSMSxRUQ-m4J9Vh-qmTMQcvYAPq_srz2bsvuDOqfvJd8&usqp=CAU"
                        image4="https://images-na.ssl-images-amazon.com/images/I/51Kxh-55IrL._AC_UL600_SR600,600_.jpg"
                    />
                    < AdvertisementOne header="Up to 70% off | Electronics clearance store" image="https://ik.imagekit.io/gyxs5vcin/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1683889905413" />
                    < AdvertisementOne header="Home décor under $50" image="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_849526-T3/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg" />
                    < AdvertisementOne header="Creating business solutions" image="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_849526-T3/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/cc_359_laptop_us_v1._SY304_CB576754001_.jpg"/>
                    < AdvertisementOne header="Shop activity trackers and smartwatches" image="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_849526-T3/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"/>
                    < AdvertisementOne header="Upgrade your office furniture" image="https://images-na.ssl-images-amazon.com/images/W/MEDIAX_849526-T3/images/G/01/dex/2023/Roar/October/D_CC_Roar_OfficeDepot_1023_1X_Furnitrure_v2._SY304_CB577544739_.jpg"/>
                </div>
            </div>
         );
    }
}
 
export default MainPage;