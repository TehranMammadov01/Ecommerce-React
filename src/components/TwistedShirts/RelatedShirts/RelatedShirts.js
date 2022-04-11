import React, { useRef } from 'react';
import './RelatedShirts.scss';
import relatedShirts1 from '../../../assets/images/shirts/related-shirts1.png';
import relatedShirts2 from '../../../assets/images/shirts/gray-shirt.png';
import relatedShirts3 from '../../../assets/images/shirts/related-shirt3.png';
import asimmetricModelShirt from '../../../assets/images/shirts/asimmetric-shirt.png';

const RelatedShirts = () => { 
    const part1Hover = useRef();

    const windowWidth = window.innerWidth;

    const HovFunc = () => {
        if (windowWidth > 486) {
            part1Hover.current.style.width = "26%";
        } else {
            part1Hover.current.style.width = "100%";
        }
    }

    const HovOutFunc = () => {
        if (windowWidth > 486) {
            part1Hover.current.style.width = "48%";
        } else {
            part1Hover.current.style.width = "100%";
        }
    }

    return (
        <div className='related-shirts'>
            <p className='related-shirts__header'>RELATED PRODUCTS</p>
            <div className='related-shirts__section'>
                <div className='related-shirts__section__part' id='part-1' ref={part1Hover}>
                    <div className='related-shirts__section__part__image'>
                        <img className="default-img" src={relatedShirts1} alt="" />
                        <img className="hover-img" src={asimmetricModelShirt} alt="" />
                    </div>
                    <p className='related-shirts__section__part__description'>LARGE FIT SHIRT</p>
                    <div className='related-shirts__section__part__sizes'>
                        <span>XXS</span><span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span>
                    </div>
                </div>
                <div className='related-shirts__section__part' id='part-2' onMouseOver={HovFunc} onMouseOut={HovOutFunc}>
                    <div className='related-shirts__section__part__image'>
                        <img className="default-img" src={relatedShirts2} alt="" />
                        <img className="hover-img" src={asimmetricModelShirt} alt="" />
                    </div>
                    <p className='related-shirts__section__part__description'>OVERSIZE BUTTON-DOWN SHIRT</p>
                    <div className='related-shirts__section__part__sizes'>
                        <span>XXS</span><span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span>
                    </div>
                </div>
                <div className='related-shirts__section__part' id='part-3' onMouseOver={HovFunc} onMouseOut={HovOutFunc}>
                    <div className='related-shirts__section__part__image'>
                        <img className="default-img" src={relatedShirts3} alt="" />
                        <img className="hover-img" src={asimmetricModelShirt} alt="" />
                    </div>
                    <p className='related-shirts__section__part__description'>ASYMMETRIC SHIRT</p>
                    <div className='related-shirts__section__part__sizes'>
                        <span>XXS</span><span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedShirts;