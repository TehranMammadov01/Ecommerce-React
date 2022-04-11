import React from 'react';
import Newsletter from '../Newsletter/Newsletter';
import DetailsShirt from './DetailsShirt/DetailsShirt';
import RelatedShirts from './RelatedShirts/RelatedShirts';
import TwistedNavigation from './TwistNav/TwistedNavigation';

const TwistedShirt = () => {
    return (
        <>
            <TwistedNavigation />
            <DetailsShirt />
            <RelatedShirts />
            <Newsletter />
        </>
    )
}

export default TwistedShirt;