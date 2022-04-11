import React from 'react';
import './Newsletter.scss';
import arrow from '../../assets/images/arrow.png';

const Newsletter = () => {
    return (
        <>
            <div className='newsletter-container'>
                <div className='newsletter-container__div'>
                    <p className='newsletter-container__div__header'>NEWSLETTER</p>
                    <div className='newsletter-container__div__email'>
                        <input type="text" placeholder="EMAIL"/>
                        <div className='newsletter-container__div__email__arrow'>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter;