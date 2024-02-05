import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "./banner.css";

const data = [
    "https://ik.imagekit.io/gyxs5vcin/amazon_background11.jpg?updatedAt=1706895116493",
    "https://ik.imagekit.io/gyxs5vcin/amazon_background22.jpg?updatedAt=1706895044975",
    "https://ik.imagekit.io/gyxs5vcin/amazon_background33.jpg?updatedAt=1706895044923",
    "https://ik.imagekit.io/gyxs5vcin/amazon_background44.jpg?updatedAt=1706895384731"
]

// console.log(data);

const Banner = () => {
    return (
        <>
            <Carousel
                className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 0,
                        marginTop: -22,
                        height: "104px",
                    }
                }}>
                {
                    data.map((imag, i) => {
                        return (
                            <>
                                <img src={imag} alt="img" key={i} className="banner_img" />
                            </>
                        )
                    })
                }

            </Carousel>
        </>
    )
}

export default Banner;