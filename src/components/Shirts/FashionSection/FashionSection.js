import './FashionSection.scss';
import fashionMobileImg from '../../../assets/images/shirts/fashion-mobile-img.png'
import mainImg from '../../../assets/images/shirts/main-img.png';

const FashionSection = () => {
    return (
        <div className='fashion-section'>
            <p>SHIRTS</p>
            <div className='fashion-section__image-container'>
                <img src={mainImg} alt="" />
                <img src={fashionMobileImg} alt="" />
            </div>
        </div>
    )
}

export default FashionSection;