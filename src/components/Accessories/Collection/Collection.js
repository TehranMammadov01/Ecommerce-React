import React, { useRef } from 'react';
import './Collection.scss';
import womenCollection from '../../../assets/images/women-collection.png';
import menCollection from '../../../assets/images/men-collection.png';
import scarf from '../../../assets/images/scarf.png';
import mask from '../../../assets/images/mask.png';

const Collection = () => {
    const animLineFirst = useRef(null);
    const animHiddenLineFirst = useRef(null);
    const animLineSecond = useRef(null);
    const animHiddenLineSecond = useRef(null);

    const hoverWomenCollection = () => {
        animLineFirst.current.style.display = "none"
        animHiddenLineFirst.current.style.width = "100%"
    }

    const hoverOutWomenCollection = () => {
        animLineFirst.current.style.display = "block"
        animHiddenLineFirst.current.style.width = "0%"
    }

    const hoverMenCollection = () => {
        animLineSecond.current.style.display = "none"
        animHiddenLineSecond.current.style.width = "100%"
    }

    const hoverOutMenCollection = () => {
        animLineSecond.current.style.display = "block"
        animHiddenLineSecond.current.style.width = "0%"
    }

    return (
        <div>
            <div className='woman-collection'>
                <div className='woman-collection__container'>
                    <p>WOMEN'S COLLECTION</p>
                    <div className='show-collection-item show-collection-item-left' onMouseOver={hoverWomenCollection} onMouseOut={hoverOutWomenCollection}>
                        <div className='more-info-button'>
                            <button>SHOW MORE</button>
                        </div>
                        <div className='woman-collection__container__image-item'>
                            <img src={womenCollection} alt="" />
                        </div>
                    </div>
                    <div className='collection-bottom-line-mobile'></div>
                </div>
                <div className='woman-collection__accessories'>
                    <p>ACCESSORIES</p>
                    <div className='show-collection-item show-collection-item-right' onMouseOver={hoverWomenCollection} onMouseOut={hoverOutWomenCollection}>
                        <div className='more-info-button'>
                            <button>SHOW MORE</button>
                        </div>
                        <div className='woman-collection__container__image-item right-part-hover-image'>
                            <img src={scarf} alt="" />
                        </div>
                    </div>
                    <div className='collection-bottom-line-mobile'></div>
                </div>
            </div>
            <div className='collection-bottom-line'>
                <div className='collection-bottom-line__visible' ref={animLineFirst}></div>
                <div className='collection-bottom-line__hidden' ref={animHiddenLineFirst}></div>
            </div>
            <div className='man-collection'>
                <div className='man-collection__accessories'>
                    <p>ACCESSORIES</p>
                    <div className='show-collection-item show-collection-item-left' onMouseOver={hoverMenCollection} onMouseOut={hoverOutMenCollection}>
                        <div className='more-info-button'>
                            <button>SHOW MORE</button>
                        </div>
                        <div className='man-collection__container__image-item left-part-hover-image'>
                            <img src={mask} alt="" />
                        </div>
                    </div>
                    <div className='collection-bottom-line-mobile'></div>
                </div>
                <div className='man-collection__container'>
                    <p>MEN'S COLLECTION</p>
                    <div className='show-collection-item show-collection-item-right' onMouseOver={hoverMenCollection} onMouseOut={hoverOutMenCollection}>
                        <div className='more-info-button'>
                            <button>SHOW MORE</button>
                        </div>
                        <div className='man-collection__container__image-item right-part-hover-image'>
                            <img src={menCollection} alt="" />
                        </div>
                    </div>
                    <div className='collection-bottom-line-mobile'></div>
                </div>
            </div>
            <div className='collection-bottom-line'>
                <div className='collection-bottom-line__visible' ref={animLineSecond}></div>
                <div className='collection-bottom-line__hidden' ref={animHiddenLineSecond}></div>
            </div>
        </div>
    )
}

export default Collection;