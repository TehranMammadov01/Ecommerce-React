import React from 'react';
import './Collection.scss';
import womenCollection from '../../../assets/images/women-collection.png';
import menCollection from '../../../assets/images/men-collection.png';
import scarf from '../../../assets/images/scarf.png';
import mask from '../../../assets/images/mask.png';

const Collection = () => {
    return (
        <div>
            <div className='woman-collection'>
                <div className='woman-collection__container'>
                    <p>WOMEN'S COLLECTION</p>
                    <div className='show-collection-item'>
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
                    <div className='show-collection-item'>
                        <div className='more-info-button'>
                            <button>SHOW MORE</button>
                        </div>
                        <div className='woman-collection__container__image-item'>
                            <img src={scarf} alt="" />
                        </div>
                    </div>
                    <div className='collection-bottom-line-mobile'></div>
                </div>
            </div>
            <div className='collection-bottom-line'></div>
            <div className='man-collection'>
                <div className='man-collection__accessories'>
                    <p>ACCESSORIES</p>
                    <div className='show-collection-item'>
                        <div className='more-info-button'>
                            <button>SHOW MORE</button>
                        </div>
                        <div className='woman-collection__container__image-item'>
                            <img src={mask} alt="" />
                        </div>
                    </div>
                    <div className='collection-bottom-line-mobile'></div>
                </div>
                <div className='man-collection__container'>
                    <p>MEN'S COLLECTION</p>
                    <div className='show-collection-item'>
                        <div className='more-info-button'>
                            <button>SHOW MORE</button>
                        </div>
                        <div className='woman-collection__container__image-item'>
                            <img src={menCollection} alt="" />
                        </div>
                    </div>
                    <div className='collection-bottom-line-mobile'></div>
                </div>
            </div>
            <div className='collection-bottom-line'></div>
        </div>
    )
}

export default Collection;