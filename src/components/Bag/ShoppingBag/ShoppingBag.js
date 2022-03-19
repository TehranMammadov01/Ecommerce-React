import { useEffect, useState } from 'react';
import arrow from '../../../assets/images/right-arrow.png';
import Nav from '../../Navbar/Nav';
import TwistedNavigation from '../../TwistedShirts/TwistNav/TwistedNavigation';
import './ShoppingBag.scss';

const ShoppingBag = () => {
    const [haveProduct, setHaveProduct] = useState(true);
    const [productIndex, setProductIndex] = useState('');
    const [activeRemove, setActiveRemove] = useState(false);
    const [newProduct, setNewProduct] = useState('');

    useEffect(() => {
        const productDetails = JSON.parse(localStorage.getItem('productData'));
        if (productDetails) {
            productDetails.map((product, index) => {
                setNewProduct(product);
                setProductIndex(index);
            })
        } else {
            setHaveProduct(false)
        }
    },[])

    const removeProductFromBag = (() => {
        localStorage.removeItem('productData');
        setActiveRemove(true);
    })

    return (
        <>
            <Nav removeButtonActive={activeRemove} weHaveProduct={haveProduct} />
            <TwistedNavigation />
            <div className='shopping-bag'>
                <div className='shopping-bag__titles'>
                    <h1>SHOPPING BAG</h1>
                    <p>Continue Shopping</p>
                </div>
                <div className='shopping-bag__sections'>
                    <div className='shopping-bag__sections__products'>
                        {(!activeRemove && haveProduct) ? (
                            <div className='shopping-bag__sections__products__all-data'>
                                <div className='shopping-bag__sections__products__all-data__photo'>
                                    <img src={newProduct.imageUrl} alt="" />
                                </div>
                                <div className='shopping-bag__sections__products__all-data__about-product'>
                                    <div className='shopping-bag__sections__products__all-data__about-product__title-and-price'>
                                        <h1>{newProduct.titleData}</h1>
                                        <span>{newProduct.priceData}<span>$</span></span>
                                    </div>
                                    <p className='shopping-bag__sections__products__all-data__about-product__description'>{newProduct.descriptionData}</p>
                                    <div className='shopping-bag__sections__products__all-data__about-product__main-chosens'>
                                        <div className='shopping-bag__sections__products__all-data__about-product__main-chosens__names'>
                                            <p>COLOR</p>
                                            <p>SIZE</p>
                                            <p>QUANTITY</p>
                                        </div>
                                        <div className='shopping-bag__sections__products__all-data__about-product__main-chosens__values'>
                                            <p>{newProduct.colorName}</p>
                                            <div className='shopping-bag__sections__products__all-data__about-product__main-chosens__values__sizes'>
                                                <div>
                                                    <h4>{newProduct.sizeData}</h4>
                                                    {/* <div className='shopping-bag__sections__products__all-data__about-product__main-chosens__values__sizes__change-size'>
                                                        <span>XXS</span><span>XS</span><span>S</span><span>M</span><span>L</span><span>XL</span><span>XXL</span>
                                                    </div> */}
                                                </div>
                                                <div className='shopping-bag__sections__products__all-data__about-product__main-chosens__values__sizes__change-click'>
                                                    <img src={arrow} alt="" />
                                                </div>
                                            </div>
                                            <div className='shopping-bag__sections__products__all-data__about-product__main-chosens__values__counter'>
                                                <p>1</p>
                                                <div className='shopping-bag__sections__products__all-data__about-product__main-chosens__values__counter__click-img'>
                                                    <img src={arrow} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='shopping-bag__sections__products__all-data__about-product__remove-product'>
                                        <span onClick={removeProductFromBag}>REMOVE</span>
                                    </div>
                                </div>
                            </div>
                        ) : <p className='shopping-bag__sections__products__emty-bag'>YOUR BAG IS EMPTY</p>}
                    </div>
                    <div className='shopping-bag__sections__order-summary'>
                        <h1 className='shopping-bag__sections__order-summary__heading'>ORDER SUMMARY</h1>
                        <div className='shopping-bag__sections__order-summary__order-details'>
                            <div>
                                <p>Shipping</p>
                                <span>Express (1-2 days)</span>
                            </div>
                            <div>
                                <p>Shipping cost</p>
                                <span>0$</span>
                            </div>
                            <div>
                                <p>Sales tax</p>
                                <span>378<span>$</span></span>
                            </div>
                            <div>
                                <p>Promotional code</p>
                                <p>Enter code</p>
                                <button>APLY</button>
                            </div>
                            <div>
                                <p>Estimated total</p>
                                <span>1154<span>$</span></span>
                            </div>
                        </div>
                        <div className='shopping-bag__sections__order-summary__checkout'>
                            <button>CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingBag;