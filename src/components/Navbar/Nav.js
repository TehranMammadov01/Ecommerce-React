import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
import smallBagIcon from '../../assets/images/small-bag-square.png';
import menuIcon from '../../assets/images/menu.png';
import cancelIcon from '../../assets/images/cancel.png';
import searchIcon from '../../assets/images/search.png';
import rightArrow from '../../assets/images/right-arrow.png';

const Nav = () => {
    const [newProduct, setNewProduct] = useState([]);
    const [menuMobileOpen, setMenuMobileOpen] = useState(true);
    const navbarResponsiveRef = useRef();

    const showResponsiveNavbar = () => {
        navbarResponsiveRef.current.classList.toggle("navbar-container-responsive");
        setMenuMobileOpen(!menuMobileOpen);
        if (menuMobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }

    useEffect(() => {
        const checkClickOutside = (e) => {
            if (!menuMobileOpen) {
                setMenuMobileOpen(!menuMobileOpen);
                document.body.style.overflow = "visible";
                navbarResponsiveRef.current.classList.toggle("navbar-container-responsive");
            }
        }
        document.addEventListener("click", checkClickOutside);
        return () => {
            document.removeEventListener("click", checkClickOutside);
        }
    }, [!menuMobileOpen])

    useEffect(() => {
        let timer = setTimeout(() => {
            const productDetails = JSON.parse(localStorage.getItem('productData'));
            if (productDetails) {
                setNewProduct(productDetails);
            }
        }, 100)
        return () => {
            clearTimeout(timer);
        }
    },[newProduct])
    
    return (
        <nav>
            <div className='navbar-container'>
                <div className='navbar-container__logo'>
                    <h1>BALENCIAGA</h1>
                </div>
                <div className='navbar-container__list' ref={navbarResponsiveRef} >
                    <Link to="/">
                        <div onClick={showResponsiveNavbar} className='navbar-container__list__item'>
                            <p>ALL</p>
                            <div className='navbar-container__list__item__mobile-right-arrow'><img src={rightArrow} alt="" /></div>
                        </div>
                    </Link>
                    <Link to="/twistedshirt">
                        <div onClick={showResponsiveNavbar} className='navbar-container__list__item'>
                            <p>WOMEN</p>
                            <div className='navbar-container__list__item__mobile-right-arrow'><img src={rightArrow} alt="" /></div>
                        </div>
                    </Link>
                    <Link to="/shirts">
                        <div onClick={showResponsiveNavbar} className='navbar-container__list__item'>
                            <p>MEN</p>
                            <div className='navbar-container__list__item__mobile-right-arrow'><img src={rightArrow} alt="" /></div>
                        </div>
                    </Link>
                    <Link to="/search">
                        <div onClick={showResponsiveNavbar} className='navbar-container__list__item'>
                            <p>SEARCH</p>
                            <div className='navbar-container__list__item__mobile-right-arrow'><img src={rightArrow} alt="" /></div>
                        </div>
                    </Link>
                    <Link to="/wishlist">
                        <div onClick={showResponsiveNavbar} className='navbar-container__list__wishlist navbar-container__list__item'>
                            <p>WISHLIST</p>
                            <p>[{newProduct.length}]</p>
                            <div className='navbar-container__list__item__mobile-right-arrow'><img src={rightArrow} alt="" /></div>
                        </div>
                    </Link>
                    <Link to="/shopping-bag">
                        <div onClick={showResponsiveNavbar} className='navbar-container__list__bag navbar-container__list__item'>
                            <p>BAG</p>
                            {newProduct.length > 0 ? <div><img src={smallBagIcon} alt="" /></div> : ''}
                            <div className='navbar-container__list__item__mobile-right-arrow'><img src={rightArrow} alt="" /></div>
                        </div>
                    </Link>
                    <Link to="/login">
                        <div onClick={showResponsiveNavbar} className='navbar-container__list__item'>
                            <p>LOG IN</p>
                            <div className='navbar-container__list__item__mobile-right-arrow'><img src={rightArrow} alt="" /></div>
                        </div>
                    </Link>
                </div>
                <div className='navbar-container__search-mobile'>
                    <img src={searchIcon} alt="" />
                </div>
                <div className='navbar-container__burger-button' onClick={showResponsiveNavbar}>
                    {menuMobileOpen ? (<img src={menuIcon} alt="" />) : (<img src={cancelIcon} alt="" />)}
                </div>
            </div>
            <div className='navbar-bottom-line'></div>
        </nav>
    )
}

export default Nav;