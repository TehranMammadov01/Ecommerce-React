import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Accessories from './components/Accessories/Accessories';
import Footer from './components/Footer/Footer';
import Shirts from './components/Shirts/Shirts';
import Nav from './components/Navbar/Nav';
import Policy from './components/Policy/Policy';
import TwistedShirt from './components/TwistedShirts/TwistedShirt';
import Bag from './components/Bag/Bag';

const App = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Accessories />} />
                <Route path="/shirts" element={<Shirts />} />
                <Route path="/twistedshirt" element={<TwistedShirt />} />
                <Route path="/shopping-bag" element={<Bag />} />
            </Routes>
            <Footer />
            <Policy />
        </>
    )
}

export default App;