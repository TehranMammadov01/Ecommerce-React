import React from 'react';
import Nav from '../Navbar/Nav';
import Newsletter from '../Newsletter/Newsletter';
import FashionSection from './FashionSection/FashionSection';
import Navigation from './Navigation/Navigation';
import ShirtCategories from './ShirtCategories/ShirtCategories';

const Shirts = () => {
    return (
        <>
            <Nav />
            <Navigation />
            <FashionSection />
            <ShirtCategories />
            <Newsletter />
        </>
    )
}

export default Shirts;