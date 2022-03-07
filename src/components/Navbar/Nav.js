import { useRef, useState } from 'react';
import './Nav.scss';
import smallBagIcon from '../../assets/images/small-bag-square.png';
import menuIcon from '../../assets/images/menu.png';
import cancelIcon from '../../assets/images/cancel.png';
import searchIcon from '../../assets/images/search.png';
import rightArrow from '../../assets/images/right-arrow.png';

const Nav = () => {
    const [menuMobileOpen, setMenuMobileOpen] = useState(true);
    const navbarResponsiveRef = useRef();

    const showResponsiveNavbar = () => {
        navbarResponsiveRef.current.classList.toggle("navbar-container-responsive");
        setMenuMobileOpen(!menuMobileOpen);
    }
    
    return (
        <nav>
            <div className='navbar-container'>
                <div className='navbar-container__logo'>
                    <h1>BALENCIAGA</h1>
                </div>
                <div className='navbar-container__list' ref={navbarResponsiveRef} >
                    <div className='navbar-container__list__item'>
                        <p>ALL</p>
                        <div className='navbar-container__list__item__mobile-right-arrow'><img src={rightArrow} alt="" /></div>
                    </div>
                    <div className='navbar-container__list__item'>
                        <p>WOMEN</p>
                        <div className='navbar-container__list__item__mobile-right-arrow'><img src={rightArrow} alt="" /></div>
                    </div>
                    <div className='navbar-container__list__item'>
                        <p>MEN</p>
                        <div className='navbar-container__list__item__mobile-right-arrow'><img src={rightArrow} alt="" /></div>
                    </div>
                    <div className='navbar-container__list__item'>
                        <p>SEARCH</p>
                        <div className='navbar-container__list__item__mobile-right-arrow'><img src={rightArrow} alt="" /></div>
                    </div>
                    <div className='navbar-container__list__wishlist navbar-container__list__item'>
                        <p>WISHLIST</p>
                        <p>[0]</p>
                        <div className='navbar-container__list__item__mobile-right-arrow'><img src={rightArrow} alt="" /></div>
                    </div>
                    <div className='navbar-container__list__bag navbar-container__list__item'>
                        <p>BAG</p>
                        <div>
                            <img src={smallBagIcon} alt="" />
                        </div>
                        <div className='navbar-container__list__item__mobile-right-arrow'><img src={rightArrow} alt="" /></div>
                    </div>
                    <div className='navbar-container__list__item'>
                        <p>LOG IN</p>
                        <div className='navbar-container__list__item__mobile-right-arrow'><img src={rightArrow} alt="" /></div>
                    </div>
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