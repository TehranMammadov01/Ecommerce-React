import { useEffect, useState } from 'react';
import { newnessData } from './newness-data';
import arrowIconRight from '../../../assets/images/right-arrow.png';
import arrowIconLeft from '../../../assets/images/left-arrow.png';
import './Newness.scss';

const Newness = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevImage = () => {
        const index = currentSlide > 0 ? currentSlide - 1 : newnessData.images.length -1;
        setCurrentSlide(index);
    }

    const nextImage = () => {
        const index = currentSlide < newnessData.images.length - 1 ? currentSlide + 1 : 0;
        setCurrentSlide(index);
    }

    const switchIndex = (index) => {
        setCurrentSlide(index);
    }

    // useEffect(() => {
    //     const slideInterval = setInterval(() => {
    //         setCurrentSlide(currentSlide => currentSlide < newnessData.images.length -1 ? currentSlide + 1 : 0)
    //     }, 2000)

    //     return () => clearInterval(slideInterval)
    // }, [])

    return (
        <div className='newness-section'>
            <p className='newness-section__header'>NEWNESS</p>
            <div className='newness-section__container'>
                <div className='newness-section__container__main-div'>
                    <div className='newness-section__container__main-div__image'>
                        {<img src={newnessData.images[0].img} alt="" />}
                    </div>
                    <p>{newnessData.titles}</p>
                    <div className='newness-section__container__main-div__sizes'>
                        {newnessData.sizes.map((item, index) => {
                            return <span key={index}>{item.size}</span>
                        })}
                    </div>
                </div>
                <div className='newness-section__container__main-div'>
                    <div className='newness-section__container__main-div__image'>
                        {<img src={newnessData.images[1].img} alt="" />}
                    </div>
                    <p>{newnessData.titles}</p>
                    <div className='newness-section__container__main-div__sizes'>
                        {newnessData.sizes.map((item, index) => {
                            return <span key={index}>{item.size}</span>
                        })}
                    </div>
                </div>
                <div className='newness-section__container__main-div'>
                    <div className='newness-section__container__main-div__image'>
                        {<img src={newnessData.images[2].img} alt="" />}
                    </div>
                    <p>{newnessData.titles}</p>
                    <div className='newness-section__container__main-div__sizes'>
                        {newnessData.sizes.map((item, index) => {
                            return <span key={index}>{item.size}</span>
                        })}
                    </div>
                </div>
                <div className='newness-section__container__main-div'>
                    <div className='newness-section__container__main-div__image'>
                        {<img src={newnessData.images[3].img} alt="" />}
                    </div>
                    <p>{newnessData.titles}</p>
                    <div className='newness-section__container__main-div__sizes'>
                        {newnessData.sizes.map((item, index) => {
                            return <span key={index}>{item.size}</span>
                        })}
                    </div>
                </div>
            </div>
            <div className='newness-section__mobile'>
                <div className='newness-section__mobile__carousel'>
                    <div 
                        className='newness-section__mobile__carousel__image-slider'
                        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
                    >
                        {newnessData.images.map((image, index) => {
                            return ( 
                                <div className='newness-section__mobile__carousel__image-slider__img'>
                                    <img src={image.img} alt="" key={index} />
                                </div>
                            )
                        })}
                    </div>
                    <div className='newness-section__mobile__carousel__control-arrow'>
                        <div onClick={prevImage} className='newness-section__mobile__carousel__control-arrow__left-arrow'>
                            <img src={arrowIconLeft} alt="" />
                        </div>
                        <div onClick={nextImage} className='newness-section__mobile__carousel__control-arrow__right-arrow'>
                            <img src={arrowIconRight} alt="" />
                        </div>
                    </div>
                </div>
                <p>TRACK SNEAKER IN WHITE/FLUO PINK</p>
                <div className='newness-section__mobile__line-slider'>
                    {newnessData.images.map((_, index) => (
                        <button 
                            className={`show-line${currentSlide === index ? ' active' : ''}`}
                            onClick={() => switchIndex(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Newness;