import React from 'react';
import Nav from '../Navbar/Nav';
import Newsletter from '../Newsletter/Newsletter';
import Collection from './Collection/Collection';
import Header from './MainHeader/Header';
import Newness from './Newness/Newness';
import VideoItem from './VideoSection/VideoItem';

const MainAllProducts = () => {
    return (
        <>
            <Nav />
            <Header />
            {/* <VideoItem /> */}
            <Collection />
            <Newness />
            <Newsletter />
        </>
    )
}

export default MainAllProducts;