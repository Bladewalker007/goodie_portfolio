import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ItemProfile = ({imageGallery}) => {
    return (
        <div className="profile">
            <div className="carouselContainer">
                <Carousel swipeable={true} swipeScrollTolerance={40} showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true} dynamicHeight={true}>
                    {
                        imageGallery.Images.map((element, index) => {
                            return (<div key={index}>
                                <img src={element} alt="Images" />
                            </div>)
                        })
                    }
                </Carousel>
            </div>
            <div className="itemDescription">
                <h1>{imageGallery.Title}</h1>
                <p>{imageGallery.Description}</p>
            </div>
        </div>
    )
}

export default ItemProfile
