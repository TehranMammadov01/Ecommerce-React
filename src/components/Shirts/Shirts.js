import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import FashionSection from './FashionSection/FashionSection';
import Navigation from './Navigation/Navigation';
import ShirtCategories from './ShirtCategories/ShirtCategories';

const Shirts = () => {
    return (
        <>
            <Navigation />
            <FashionSection />
            <ShirtCategories />
            <Newsletter />
        </>
    )
}

export default Shirts;