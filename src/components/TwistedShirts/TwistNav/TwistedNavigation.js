import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './TwistedNavigation.scss';

const Navigation = () => {
    const hoverSubheaderModal = useRef(null);

    const hoverNavigationHeader = () => {
        hoverSubheaderModal.current.style.display = "flex";
    }
    const hoverOutNavigationHeader = () => {
        hoverSubheaderModal.current.style.display = "none";
    }

    return (
        <div className='twisted-navigation'>
            <div className='twisted-navigation__headers'>
                <Link to="/shirts"><p onMouseOver={hoverNavigationHeader} onMouseOut={hoverOutNavigationHeader}>MEN</p></Link>
                <Link to="/twistedshirt"><p onMouseOver={hoverNavigationHeader} onMouseOut={hoverOutNavigationHeader}>WOMEN</p></Link>
                <Link to="/"><p onMouseOver={hoverNavigationHeader} onMouseOut={hoverOutNavigationHeader}>ALL</p></Link>
            </div>
            <div className='twisted-navigation__hover' ref={hoverSubheaderModal} onMouseOver={hoverNavigationHeader} onMouseOut={hoverOutNavigationHeader}>
                <div className='twisted-navigation__hover__sub-headers'>
                    <p>MEN &nbsp;/&nbsp; </p>
                    <p>READY TO WEAR &nbsp;/&nbsp; </p>
                    <p>SHIRTS &nbsp;/&nbsp; </p>
                    <p>TWISTED SHIRT</p>
                </div>
                <p className='twisted-navigation__hover__filter'>FILTERS</p>
            </div>
        </div>
    )
}

export default Navigation;