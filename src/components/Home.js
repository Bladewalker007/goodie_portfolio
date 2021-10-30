import React from 'react';
import Main from './Main';
import Portfolio from './Portfolio';

const Home = ({frontImage, imageGallery}) => {
    return (
        <>
            <Main frontImage={frontImage} />
            <Portfolio imageGallery={imageGallery} />  
        </>
    )
}

export default Home
