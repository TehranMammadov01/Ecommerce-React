// import { shirtsCategoriesData } from './shirts-categories-data';
import violetShirt from '../../../assets/images/shirts/violet-shirt.png';
import yellowShirt from '../../../assets/images/shirts/yellow-shirt.png';
import archiveLettersShirt from '../../../assets/images/shirts/archive-letters-shirt.png';
import largeFitShirt from '../../../assets/images/shirts/large-fit-shirt.png';
import twistedShirt from '../../../assets/images/shirts/twisted-shirt.png';
import graySleeveShirt from '../../../assets/images/shirts/gray-shirt.png';
import soldierJacket from '../../../assets/images/shirts/soldier-jacket.png';
import blackSleeveShirt from '../../../assets/images/shirts/black-shirt.png';
import asimmetricModelShirt from '../../../assets/images/shirts/asimmetric-shirt.png';
import './ShirtCategories.scss';
import { useEffect, useRef } from 'react';

const ShirtCategories = () => {
    const part4Hover = useRef();
    const part8Hover = useRef();
    const part3Hover = useRef();

    const windowWidth = window.innerWidth;

    const part3HovFunc = () => {
        if (windowWidth > 486) {
            part3Hover.current.style.width = "26%";
        } else {
            part3Hover.current.style.width = "100%";
        }
    }

    const part3HovOutFunc = () => {
        if (windowWidth > 486) {
            part3Hover.current.style.width = "48%";
        } else {
            part3Hover.current.style.width = "100%";
        }
    }

    const part4HovFunc = () => {
        if (windowWidth > 486) {
            part4Hover.current.style.width = "26%";
        } else {
            part4Hover.current.style.width = "100%";
        }
    }

    const part4HovOutFunc = () => {
        if (windowWidth > 486) {
            part4Hover.current.style.width = "48%";
        } else {
            part4Hover.current.style.width = "100%";
        }
    }

    const part8HovFunc = () => {
        if (windowWidth > 486) {
            part8Hover.current.style.width = "26%";
        } else {
            part8Hover.current.style.width = "100%";
        }
    }

    const part8HovOutFunc = () => {
        if (windowWidth > 486) {
            part8Hover.current.style.width = "48%";
        } else {
            part8Hover.current.style.width = "100%";
        }
    }

    return (
        <>
            <div className='shirts-container'>
                <div className='shirts-container__section'>
                    <div className='shirts-container__section__part' id='part-1' onMouseOver={part3HovFunc} onMouseOut={part3HovOutFunc}>
                        <div className='shirts-container__section__part__image'>
                            <img className="default-img" src={violetShirt} alt="" />
                            <img className="hover-img" src={asimmetricModelShirt} alt="" />
                        </div>
                        <p className='shirts-container__section__part__description'>50/50 SHIRT IN BLACK</p>
                        <div className='shirts-container__section__part__sizes'>
                            <span>XXS</span><span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span>
                        </div>
                    </div>
                    <div className='shirts-container__section__part' id='part-2' onMouseOver={part3HovFunc} onMouseOut={part3HovOutFunc}>
                        <div className='shirts-container__section__part__image'>
                            <img className="default-img" src={yellowShirt} alt="" />
                            <img className="hover-img" src={asimmetricModelShirt} alt="" />
                        </div>
                        <p className='shirts-container__section__part__description'>50/50 SHIRT</p>
                        <div className='shirts-container__section__part__sizes'>
                            <span>XXS</span><span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span>
                        </div>
                    </div>
                    <div className='shirts-container__section__part' id='part-3' ref={part3Hover}>
                        <div className='shirts-container__section__part__image'>
                            <img className="default-img" src={archiveLettersShirt} alt="" />
                            <img className="hover-img" src={asimmetricModelShirt} alt="" />
                        </div>
                        <p className='shirts-container__section__part__description'>ASIMMETRIC SHIRT</p>
                        <div className='shirts-container__section__part__sizes'>
                            <span>XXS</span><span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span>
                        </div>
                    </div>
                    <div className='shirts-container__section__part' id='part-4' ref={part4Hover}>
                        <div className='shirts-container__section__part__image'>
                            <img className="default-img" src={archiveLettersShirt} alt="" />
                            <img className="hover-img" src={asimmetricModelShirt} alt="" />
                        </div>
                        <p className='shirts-container__section__part__description'>ARCHIVE LETTERS SHIRT</p>
                        <div className='shirts-container__section__part__sizes'>
                            <span>XXS</span><span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span>
                        </div>
                    </div>
                    <div className='shirts-container__section__part' id='part-5' onMouseOver={part4HovFunc} onMouseOut={part4HovOutFunc}>
                        <div className='shirts-container__section__part__image'>
                            <img className="default-img" src={largeFitShirt} alt="" />
                            <img className="hover-img" src={asimmetricModelShirt} alt="" />
                        </div>
                        <p className='shirts-container__section__part__description'>LARGE FIT SHIRT</p>
                        <div className='shirts-container__section__part__sizes'>
                            <span>XXS</span><span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span>
                        </div>
                    </div>
                    <div className='shirts-container__section__part' id='part-6' onMouseOver={part4HovFunc} onMouseOut={part4HovOutFunc}>
                        <div className='shirts-container__section__part__image'>
                            <img className="default-img" src={twistedShirt} alt="" />
                            <img className="hover-img" src={asimmetricModelShirt} alt="" />
                        </div>
                        <p className='shirts-container__section__part__description'>TWISTED SHIRT</p>
                        <div className='shirts-container__section__part__sizes'>
                            <span>XXS</span><span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span>
                        </div>
                    </div>
                    <div className='shirts-container__section__part' id='part-7' onMouseOver={part8HovFunc} onMouseOut={part8HovOutFunc}>
                        <div className='shirts-container__section__part__image'>
                            <img className="default-img" src={graySleeveShirt} alt="" />
                            <img className="hover-img" src={asimmetricModelShirt} alt="" />
                        </div>
                        <p className='shirts-container__section__part__description'>LARGE FIT SHORT SLeevE SHIRT</p>
                        <div className='shirts-container__section__part__sizes'>
                            <span>XXS</span><span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span>
                        </div>
                    </div>
                    <div className='shirts-container__section__part' id='part-8' ref={part8Hover}>
                        <div className='shirts-container__section__part__image'>
                            <img className="default-img" src={soldierJacket} alt="" />
                            <img className="hover-img" src={asimmetricModelShirt} alt="" />
                        </div>
                        <p className='shirts-container__section__part__description'>ONE SIZE FIT SHIRT</p>
                        <div className='shirts-container__section__part__sizes'>
                            <span>XXS</span><span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span>
                        </div>
                    </div>
                    <div className='shirts-container__section__part' id='part-9' onMouseOver={part8HovFunc} onMouseOut={part8HovOutFunc}>
                        <div className='shirts-container__section__part__image'>
                            <img className="default-img" src={blackSleeveShirt} alt="" />
                            <img className="hover-img" src={asimmetricModelShirt} alt="" />
                        </div>
                        <p className='shirts-container__section__part__description'>ONE SIZE YOUR LOGO SHORT SLEEVE SHIRT</p>
                        <div className='shirts-container__section__part__sizes'>
                            <span>XXS</span><span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='more-info-button'>
                <button>SHOW MORE</button>
            </div>
        </>
    )
}

export default ShirtCategories;


// {shirtsCategoriesData.map((categorie, index) => (
//     <div className='shirts-container__section__part' id={`part-${index}`} ref={`${index}`}>
//         <div className='shirts-container__section__part__image'>
//             <img className="default-img" src={categorie.defaultImg} alt="" key={index} />
//             <img className="hover-img" src={categorie.hoverImg} alt="" key={index} />
//         </div>
//         <p className='shirts-container__section__part__description'>{categorie.description}</p>
//         <div className='shirts-container__section__part__sizes'>
//             {categorie.sizes.map((size, index) => (
//                 <span key={index}>{size}</span>    
//             ))}
//         </div>
//     </div>
// ))}