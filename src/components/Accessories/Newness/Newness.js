import {useRef, useState } from 'react';
import { newnessData } from './newness-data';
import arrowIconRight from '../../../assets/images/right-arrow.png';
import arrowIconLeft from '../../../assets/images/left-arrow.png';
import './Newness.scss';

const Newness = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevImage = () => {
        const index = currentSlide > 0 ? currentSlide - 1 : newnessData.length -1;
        setCurrentSlide(index);
    }

    const nextImage = () => {
        const index = currentSlide < newnessData.length - 1 ? currentSlide + 1 : 0;
        setCurrentSlide(index);
    }

    const switchIndex = (index) => {
        setCurrentSlide(index);
    }

    const overlayMain0 = useRef();
    const overlayMain1 = useRef();
    const overlayMain2 = useRef();
    const overlayMain3 = useRef();
    const elementsSection0 = useRef();
    const elementsSection1 = useRef();
    const elementsSection2 = useRef();
    const elementsSection3 = useRef();
    const [overlayActive0, setOverlayActive0] = useState(false);
    const [overlayActive1, setOverlayActive1] = useState(false);
    const [overlayActive2, setOverlayActive2] = useState(false);
    const [overlayActive3, setOverlayActive3] = useState(false);
    const [activeElement, setActiveElement] = useState(false);

    const hovFunc0 = () => {
        elementsSection0.current.style.opacity = "1"
        if (!overlayActive1 && !overlayActive2 && !overlayActive3 && !activeElement) {
            overlayMain0.current.style.border = "2px solid black"
            setOverlayActive0(true)
        }
        else if (overlayActive0 && activeElement) {
            overlayMain0.current.style.left = "0%"
        }
        else if (overlayActive1) {
            overlayMain1.current.style.left = "0%";
        }
        else if (overlayActive2) {
            overlayMain2.current.style.left = "0%";
        }
        else if (overlayActive3) {
            overlayMain3.current.style.left = "0%";
        }
    }
    const hovFunc1 = () => {
        elementsSection1.current.style.opacity = "1"
        if (!overlayActive0 && !overlayActive2 && !overlayActive3 && !activeElement) {
            overlayMain1.current.style.border = "2px solid black"
            setOverlayActive1(true)
        }
        else if (overlayActive0) {
            overlayMain0.current.style.left = "25%"
        }
        else if (overlayActive1 && activeElement) {
            overlayMain1.current.style.left = "25%"
        }
        else if (overlayActive2) {
            overlayMain2.current.style.left = "25%";
        }
        else if (overlayActive3) {
            overlayMain3.current.style.left = "25%";
        }
    }
    const hovFunc2 = () => {
        elementsSection2.current.style.opacity = "1"
        if (!overlayActive0 && !overlayActive1 && !overlayActive3 && !activeElement) {
            overlayMain2.current.style.border = "2px solid black"
            setOverlayActive2(true)
        }
        else if (overlayActive0) {
            overlayMain0.current.style.left = "50%";
        }
        else if (overlayActive1) {
            overlayMain1.current.style.left = "50%";
        }
        else if (overlayActive2 && activeElement) {
            overlayMain2.current.style.left = "50%";
        }
        else if (overlayActive3) {
            overlayMain3.current.style.left = "50%";
        }
    }
    const hovFunc3 = () => {
        elementsSection3.current.style.opacity = "1"
        if (!overlayActive0 && !overlayActive1 && !overlayActive2 && !activeElement) {
            overlayMain3.current.style.border = "2px solid black"
            setOverlayActive3(true)
        }
        else if (overlayActive0) {
            overlayMain0.current.style.left = "75%";
        }
        else if (overlayActive1) {
            overlayMain1.current.style.left = "75%";
        }
        else if (overlayActive2) {
            overlayMain2.current.style.left = "75%";
        }
        else if (overlayActive3 && activeElement) {
            overlayMain3.current.style.left = "75%";
        }
    }

    const OutFunc0 = () => {
        elementsSection0.current.style.opacity = "0"
        setActiveElement(true)
    }
    const OutFunc1 = () => {
        elementsSection1.current.style.opacity = "0"
        setActiveElement(true)
    }
    const OutFunc2 = () => {
        elementsSection2.current.style.opacity = "0"
        setActiveElement(true)
    }
    const OutFunc3 = () => {
        elementsSection3.current.style.opacity = "0"
        setActiveElement(true)
    }

    const hovOutCommonSection = () => {
        setActiveElement(false)
        elementsSection0.current.style.opacity = "0"
        elementsSection1.current.style.opacity = "0"
        elementsSection2.current.style.opacity = "0"
        elementsSection3.current.style.opacity = "0"
        if (overlayActive0) {
            overlayMain0.current.style.border = "2px solid transparent";
            setTimeout(() => {
                overlayMain0.current.style.left = "0%";
            },400)
            setOverlayActive0(false)
        }
        if (overlayActive1) {
            overlayMain1.current.style.border = "2px solid transparent";
            setTimeout(() => {
                overlayMain0.current.style.left = "25%";
            },400)
            setOverlayActive1(false)
        }
        if (overlayActive2) {
            overlayMain2.current.style.border = "2px solid transparent";
            setTimeout(() => {
                overlayMain0.current.style.left = "50%";
            },400)
            setOverlayActive2(false)
        }
        if (overlayActive3) {
            overlayMain3.current.style.border = "2px solid transparent";
            setTimeout(() => {
                overlayMain0.current.style.left = "75%";
            },400)
            setOverlayActive3(false)
        }
    }

    return (
        <>
            <div className='newness-section'>
                <p className='newness-section__header'>NEWNESS</p>
                <div className='newness-section__main-div' onMouseLeave={hovOutCommonSection}>
                    <div className='newness-section__main-div__image'>
                        <div className='newness-section__main-div__image__overlay-hover-main' id="overlay-main-0" ref={overlayMain0} onMouseMove={hovFunc0} onMouseLeave={OutFunc0}></div>                        
                        <div className='newness-section__main-div__image__img-div' onMouseMove={hovFunc0}>
                            <img src={newnessData[0].image} alt=""/>
                        </div>
                        <div className='newness-section__main-div__image__overlay-hover-main' id="overlay-main-1" ref={overlayMain1} onMouseMove={hovFunc1} onMouseLeave={OutFunc1}></div> 
                        <div className='newness-section__main-div__image__img-div' onMouseMove={hovFunc1}>
                            <img src={newnessData[1].image} alt=""/>
                        </div>
                        <div className='newness-section__main-div__image__overlay-hover-main' id="overlay-main-2" ref={overlayMain2} onMouseMove={hovFunc2} onMouseLeave={OutFunc2}></div> 
                        <div className='newness-section__main-div__image__img-div' onMouseMove={hovFunc2}>
                            <img src={newnessData[2].image} alt=""/>
                        </div>
                        <div className='newness-section__main-div__image__overlay-hover-main' id="overlay-main-3" ref={overlayMain3} onMouseMove={hovFunc3} onMouseLeave={OutFunc3}></div> 
                        <div className='newness-section__main-div__image__img-div' onMouseMove={hovFunc3}>
                            <img src={newnessData[3].image} alt=""/>
                        </div>
                    </div>
                    <div className='newness-section__main-div__elements'>
                        <div ref={elementsSection0} className='newness-section__main-div__elements__section' onMouseMove={hovFunc0} onMouseLeave={OutFunc0}>
                            <p>{newnessData[0].title}</p>
                            <div className='newness-section__main-div__elements__section__sizes'>
                                {newnessData[0].sizes.map((size, index) => (
                                    <span key={index}>{size}</span>
                                ))}
                            </div>
                        </div>
                        <div ref={elementsSection1} className='newness-section__main-div__elements__section' onMouseMove={hovFunc2} onMouseLeave={OutFunc1}>
                            <p>{newnessData[1].title}</p>
                            <div className='newness-section__main-div__elements__section__sizes'>
                                {newnessData[1].sizes.map((size, index) => (
                                    <span key={index}>{size}</span>
                                ))}
                            </div>
                        </div>
                        <div ref={elementsSection2} className='newness-section__main-div__elements__section' onMouseMove={hovFunc2} onMouseLeave={OutFunc2}>
                            <p>{newnessData[2].title}</p>
                            <div className='newness-section__main-div__elements__section__sizes'>
                                {newnessData[2].sizes.map((size, index) => (
                                    <span key={index}>{size}</span>
                                ))}
                            </div>
                        </div>
                        <div ref={elementsSection3} className='newness-section__main-div__elements__section' onMouseMove={hovFunc3} onMouseLeave={OutFunc3}>
                            <p>{newnessData[3].title}</p>
                            <div className='newness-section__main-div__elements__section__sizes'>
                                {newnessData[3].sizes.map((size, index) => (
                                    <span key={index}>{size}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='newness-section__mobile'>
                    <div className='newness-section__mobile__carousel'>
                        <div 
                            className='newness-section__mobile__carousel__image-slider'
                            style={{ transform: `translateX(${-currentSlide * 100}%)` }}
                        >
                            {newnessData.map((data, index) => ( 
                                <div className='newness-section__mobile__carousel__image-slider__img' key={index}>
                                    <img src={data.image} alt="" key={index} />
                                </div>
                            ))}
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
                        {newnessData.map((_, index) => (
                            <button 
                                className={`show-line${currentSlide === index ? ' active' : ''}`}
                                onClick={() => switchIndex(index)}
                                key={index}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
            <div className='newness-bottom-line'></div>
        </>
    )
}

export default Newness;