import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => {
    const hoverSubheaderModal = useRef(null);

    const hoverNavigationHeader = () => {
        hoverSubheaderModal.current.style.display = "flex";
    }

    const hoverOutNavigationHeader = () => {
        hoverSubheaderModal.current.style.display = "none";
    }

    return ( 
        <div className='navigation'>
            <div className='navigation__headers'>
                <Link to="/shirts"><p onMouseOver={hoverNavigationHeader} onMouseOut={hoverOutNavigationHeader}>MEN</p></Link>
                <Link to="/twistedshirt"><p onMouseOver={hoverNavigationHeader} onMouseOut={hoverOutNavigationHeader}>WOMEN</p></Link>
                <Link to="/"><p onMouseOver={hoverNavigationHeader} onMouseOut={hoverOutNavigationHeader}>ALL</p></Link>
            </div>
            <div className='navigation__hover' ref={hoverSubheaderModal} onMouseOver={hoverNavigationHeader} onMouseOut={hoverOutNavigationHeader}>
                <div className='navigation__hover__sub-headers'>
                    <p>MEN &nbsp;/&nbsp;</p>
                    <p>READY TO WEAR &nbsp;/&nbsp;</p>
                    <p>SHIRTS</p>
                </div>
                <p className='navigation__hover__filter'>FILTERS</p>
            </div>
        </div>
    )
}

export default Navigation;