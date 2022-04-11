import { useEffect, useState } from 'react';
import arrow from '../../../assets/images/right-arrow.png';
import './ShoppingBag.scss';

const ShoppingBag = () => {
    const [activeRemove, setActiveRemove] = useState(false);
    const [newProduct, setNewProduct] = useState([]);

    let totalProductPrice = newProduct.reduce((prev, current) => {
        return prev + +current.priceData
    }, 0);
    let salesTax = (totalProductPrice * 10) / 100;
    let shippingCost;
    if (totalProductPrice > 2000) {
        shippingCost = (totalProductPrice * 1) / 100;
    } else {
        shippingCost = 0;
    }
    let estimatedPrice = totalProductPrice + salesTax + shippingCost;

    useEffect(() => {
        let timer = setTimeout(() => {
            const productDetails = JSON.parse(localStorage.getItem('productData'));
            if (productDetails ) {
                setNewProduct(productDetails);
            }
        }, 100)
        return () => {
            clearTimeout(timer);
        }
    },[])

    useEffect(() => {
        if (activeRemove) {
            let timer = setTimeout(() => {
                const productDetails = JSON.parse(localStorage.getItem('productData'));
                if (productDetails) {
                    setNewProduct(productDetails);
                }
            }, 300)
            return () => {
                clearTimeout(timer);
            }
        }
    },[activeRemove, newProduct])

    const removeProductFromBag = (selectProductId) => {
        const filteredNewProduct = newProduct.filter(product => product.productId !== selectProductId);
        localStorage.setItem('productData', JSON.stringify(filteredNewProduct));
        setActiveRemove(true);
    }

    return (
        <>
            <div className='shopping-bag'>
                <div className='shopping-bag__titles'>
                    <h1>SHOPPING BAG</h1>
                    <p>Continue Shopping</p>
                </div>
                <div className='shopping-bag__sections'>
                    <div className='shopping-bag__sections__products'>
                        {(newProduct.length !== 0) ? (
                            newProduct.map((productItem, index) => (
                                <div className='shopping-bag__sections__products__all-data' key={index}>
                                    <div className='shopping-bag__sections__products__all-data__photo'>
                                        <img src={productItem.imageUrl} alt="" />
                                    </div>
                                    <div className='shopping-bag__sections__products__all-data__about-product'>
                                        <div className='shopping-bag__sections__products__all-data__about-product__title-and-price'>
                                            <h1>{productItem.titleData}</h1>
                                            <span>{productItem.priceData}<span>$</span></span>
                                        </div>
                                        <p className='shopping-bag__sections__products__all-data__about-product__description'>{productItem.descriptionData}</p>
                                        <div className='shopping-bag__sections__products__all-data__about-product__main-chosens'>
                                            <div className='shopping-bag__sections__products__all-data__about-product__main-chosens__names'>
                                                <p>COLOR</p>
                                                <p>SIZE</p>
                                                <p>QUANTITY</p>
                                            </div>
                                            <div className='shopping-bag__sections__products__all-data__about-product__main-chosens__values'>
                                                <p>{productItem.colorName}</p>
                                                <div className='shopping-bag__sections__products__all-data__about-product__main-chosens__values__sizes'>
                                                    <div>
                                                        <h4>{productItem.sizeData}</h4>
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
                                            <span onClick={() => removeProductFromBag(productItem.productId)}>REMOVE</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (<p className='shopping-bag__sections__products__emty-bag'>YOUR BAG IS EMPTY</p>)}
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
                                <span>{shippingCost}<span>$</span></span>
                            </div>
                            <div>
                                <p>Sales tax</p>
                                <span>{salesTax}<span>$</span></span>
                            </div>
                            <div>
                                <p>Promotional code</p>
                                <p>Enter code</p>
                                <button>APLY</button>
                            </div>
                            <div>
                                <p>Estimated total</p>
                                <span>{estimatedPrice}<span>$</span></span>
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