import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import Collection from './Collection/Collection';
import Header from './MainHeader/Header';
import Newness from './Newness/Newness';
import VideoItem from './VideoSection/VideoItem';

const MainAllProducts = () => {
    return (
        <>
            <Header />
            <VideoItem />
            <Collection />
            <Newness />
            <Newsletter />
        </>
    )
}

export default MainAllProducts;