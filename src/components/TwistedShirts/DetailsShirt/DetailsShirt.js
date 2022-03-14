import frontPerson from '../../../assets/images/shirts/front-person.png';
import sidePerson from '../../../assets/images/shirts/side-person.png';
import backPerson from '../../../assets/images/shirts/back-person.png';
import frontShirt from '../../../assets/images/shirts/front-shirt.png';
import backShirt from '../../../assets/images/shirts/back-shirt.png';
import minusIcon from '../../../assets/images/minus.png';
import plusIcon from '../../../assets/images/plus.png';
import './DetailsShirt.scss';

const DetailsShirt = () => {
    return (
        <div className='details-shirt'>
            <div className='details-shirt__lines'>
                <button></button>
                <button></button>
                <button></button>
            </div>
            <div className='details-shirt__images'>
                <div className='details-shirt__images__part-1'>
                    <img src={frontPerson} alt="" />
                </div>
                <div className='details-shirt__images__part-2'>
                    <div>
                        <img src={sidePerson} alt="" />
                    </div>
                    <div>
                        <img src={backPerson} alt="" />
                    </div>
                </div>
                <div className='details-shirt__images__part-3'>
                    <div>
                        <img src={frontShirt} alt="" />
                    </div>
                    <div>
                        <img src={backShirt} alt="" />
                    </div>
                </div>
            </div>
            <div className='details-shirt__elements'>
                <div className='details-shirt__elements__headers'>
                    <h1>TWISTED SHIRT IN BLUE</h1>
                    <p>Twisted Shirt in dark blue and white striped poplin</p>
                </div>
                <div className='details-shirt__elements__choices'>
                    <div className='details-shirt__elements__choices__colors'>
                        <p>COLOR</p>
                        <div>
                            <span>BLUE &nbsp;/&nbsp; </span>
                            <span>WHITE</span>
                        </div>
                    </div>
                    <div className='details-shirt__elements__choices__sizes'>
                        <p>SIZE</p>
                        <div>
                            <span>XXS</span>
                        </div>
                    </div>
                    <p className='details-shirt__elements__choices__guide'>Size guide</p>
                </div>
                <div className='details-shirt__elements__add-buttons'>
                    <div className='details-shirt__elements__add-buttons__bag'>
                        <button>ADD TO BAG</button>
                    </div>
                    <div className='details-shirt__elements__add-buttons__wishlist'>
                        <button>ADD TO WISHLIST</button>
                    </div>
                </div>
                <div className='details-shirt__elements__products'>
                    <div className='details-shirt__elements__products__all-details'>
                        <div className='details-shirt__elements__products__all-details__header'>
                            <p>PRODUCT DETAILS</p>
                            <div>
                                <img className='plusIcon' src={plusIcon} alt="" />
                                <img className='minusIcon' src={minusIcon} alt="" />
                            </div>
                        </div>
                        <div className='details-shirt__elements__products__all-details__subitems'>
                            <div className='details-shirt__elements__products__all-details__subitems__descriptions'>
                                <p>– Organic striped poplin</p>
                                <p>– Asymetrical shape</p>
                                <p>– 6 buttons front</p>
                                <p>– Asymmetric bottom line</p>
                                <p>– Rounded bottom</p>
                                <p>– 1 patch pocket at chest</p>
                                <p>– Balenciaga logo embroidered at chest</p>
                                <p>– Made in France</p>
                                <p>– Model is 185 cm / 6'10" and is wearing a FR size S</p>
                            </div>
                            <div className='details-shirt__elements__products__all-details__subitems__material'>
                                <div className='details-shirt__elements__products__all-details__subitems__material__names'>
                                    <p>Material:</p>
                                    <p>Product ID:</p>
                                </div>
                                <div className='details-shirt__elements__products__all-details__subitems__material__values'>
                                    <p>100% cotton</p>
                                    <p>663034TIM368502</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='details-shirt__elements__products__all-details'>
                        <div className='details-shirt__elements__products__all-details__header'>
                            <p>PRODDELIVERY & SHIPPING</p>
                            <div>
                                <img className='plusIcon' src={plusIcon} alt="" />
                                <img className='minusIcon' src={minusIcon} alt="" />
                            </div>
                        </div>
                        <div className='details-shirt__elements__products__all-details__subitems'>
                            <div className='details-shirt__elements__products__all-details__subitems__descriptions'>
                                <p>– Organic striped poplin</p>
                                <p>– Asymetrical shape</p>
                                <p>– Rounded bottom</p>
                                <p>– 1 patch pocket at chest</p>
                                <p>– Balenciaga logo embroidered at chest</p>
                                <p>– Made in France</p>
                                <p>– Model is 185 cm / 6'10" and is wearing a FR size S</p>
                            </div>
                        </div>
                    </div>
                    <div className='details-shirt__elements__products__all-details'>
                        <div className='details-shirt__elements__products__all-details__header'>
                            <p>MAY WE HELP?</p>
                            <div>
                                <img className='plusIcon' src={plusIcon} alt="" />
                                <img className='minusIcon' src={minusIcon} alt="" />
                            </div>
                        </div>
                        <div className='details-shirt__elements__products__all-details__subitems'>
                            <div className='details-shirt__elements__products__all-details__subitems__descriptions'>
                                <p>– Organic striped poplin</p>
                                <p>– Asymetrical shape</p>
                                <p>– 6 buttons front</p>
                                <p>– Asymmetric bottom line</p>
                                <p>– Rounded bottom</p>
                                <p>– 1 patch pocket at chest</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsShirt;