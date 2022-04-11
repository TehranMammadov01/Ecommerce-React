import { useRef } from 'react';
import './ScrollModalTop.scss';
import scrollUpArrow from '../../assets/images/up-arrow.png';

const ScrollModalTop = () => {
    const windowScrollModal = useRef();

    window.onscroll = () => {
        if (window.scrollY > 800) {
            windowScrollModal.current.style.display = "block"
        } else {
            windowScrollModal.current.style.display = "none"
        }
    }
    const windowScrollTo = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    return (
        <div className="scroll-top" ref={windowScrollModal} onClick={windowScrollTo}>
            <img src={scrollUpArrow} alt="" />
        </div>
    )
}

export default ScrollModalTop;