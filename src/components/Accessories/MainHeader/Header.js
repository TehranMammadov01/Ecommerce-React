import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const subtitleHeaderMen = useRef(null);
    const subtitleHeaderWomen = useRef(null);
    const subtitleHeaderAll = useRef(null);

    const hoverSubtitleMen = () => {
        subtitleHeaderMen.current.style.display = "flex"
    }
    const hoverOutSubtitleMen = () => {
        subtitleHeaderMen.current.style.display = "none"
    }

    const hoverSubtitleWomen = () => {
        subtitleHeaderWomen.current.style.display = "flex"
    }
    const hoverOutSubtitleWomen = () => {
        subtitleHeaderWomen.current.style.display = "none"
    }

    const hoverSubtitleAll = () => {
        subtitleHeaderAll.current.style.display = "flex"
    }
    const hoverOutSubtitleAll = () => {
        subtitleHeaderAll.current.style.display = "none"
    }

    return (
        <div className='main-header'>
            <div className='main-header__title'>
                <Link to="/shirts"><p onMouseOver={hoverSubtitleMen} onMouseOut={hoverOutSubtitleMen}>MEN</p></Link>
                <Link to="/twistedshirt"><p onMouseOver={hoverSubtitleWomen} onMouseOut={hoverOutSubtitleWomen}>WOMEN</p></Link>
                <Link to="/"><p onMouseOver={hoverSubtitleAll} onMouseOut={hoverOutSubtitleAll}>ALL</p></Link>
            </div>
            <div className='main-header__subtitle' ref={subtitleHeaderMen} onMouseOver={hoverSubtitleMen} onMouseOut={hoverOutSubtitleMen}>
                <div className='main-header__subtitle__content'>
                    <p className='main-header__subtitle__title'>Geyim</p>
                    <div className='main-header__subtitle__items'>
                        <p>Köynək</p>
                        <p>Şort</p>
                        <p>Eşofman</p>
                        <p>Şalvar</p>
                        <p>Gödəkçə</p>
                        <p>Cins şalvar</p>
                        <p>Paltolar</p>
                        <p>Kostyum</p>
                        <p>Svitter</p>
                        <p>Uniforma</p>
                    </div>
                </div>
                <div className='main-header__subtitle__content'>
                    <p className='main-header__subtitle__title'>Ayaqqabı</p>
                    <div className='main-header__subtitle__items'>
                        <p>İdman ayaqqabıları</p>
                        <p>Gündəlik Ayaqqabılar</p>
                        <p>Gəzinti ayaqqabısı</p>
                        <p>Sünbüllər</p>
                        <p>idman ayaqqabısı</p>
                        <p>Klassik</p>
                        <p>Qaçış və Təlim</p>
                    </div>
                </div>
                <div className='main-header__subtitle__content'>
                    <p className='main-header__subtitle__title'>Saatlar və Aksesuarlar</p>
                    <div className='main-header__subtitle__items'>
                        <p>Saat</p>
                        <p>Günəş eynəyi</p>
                        <p>Pul kisəsi</p>
                        <p>Kəmər</p>
                        <p>Çanta</p>
                        <p>Şapka</p>
                        <p>Bilərzik</p>
                    </div>
                </div>
                <div className='main-header__subtitle__content'>
                    <p className='main-header__subtitle__title'>Şəxsi qayğı</p>
                    <div className='main-header__subtitle__items'>
                        <p>Ətir</p>
                        <p>Təraşdan Sonra Məhsullar</p>
                        <p>Ülgüc bıçağı</p>
                    </div>
                </div>
            </div>
            <div className='main-header__subtitle' ref={subtitleHeaderWomen} onMouseOver={hoverSubtitleWomen} onMouseOut={hoverOutSubtitleWomen}>
                <div className='main-header__subtitle__content'>
                    <p className='main-header__subtitle__title'>Geyim</p>
                    <div className='main-header__subtitle__items'>
                        <p>Köynək</p>
                        <p>Şort</p>
                        <p>Eşofman</p>
                        <p>Şalvar</p>
                        <p>Gödəkçə</p>
                        <p>Cins şalvar</p>
                        <p>Paltolar</p>
                        <p>Kostyum</p>
                        <p>Svitter</p>
                        <p>Uniforma</p>
                    </div>
                </div>
                <div className='main-header__subtitle__content'>
                    <p className='main-header__subtitle__title'>Ayaqqabı</p>
                    <div className='main-header__subtitle__items'>
                        <p>İdman ayaqqabıları</p>
                        <p>Gündəlik Ayaqqabılar</p>
                        <p>Gəzinti ayaqqabısı</p>
                        <p>Sünbüllər</p>
                        <p>idman ayaqqabısı</p>
                        <p>Klassik</p>
                        <p>Qaçış və Təlim</p>
                    </div>
                </div>
                <div className='main-header__subtitle__content'>
                    <p className='main-header__subtitle__title'>Saatlar və Aksesuarlar</p>
                    <div className='main-header__subtitle__items'>
                        <p>Saat</p>
                        <p>Günəş eynəyi</p>
                        <p>Pul kisəsi</p>
                        <p>Kəmər</p>
                        <p>Çanta</p>
                        <p>Şapka</p>
                        <p>Bilərzik</p>
                    </div>
                </div>
                <div className='main-header__subtitle__content'>
                    <p className='main-header__subtitle__title'>Kosmetik</p>
                    <div className='main-header__subtitle__items'>
                        <p>Ətir</p>
                        <p>Göz makiyajı</p>
                        <p>Dəriyə qulluq</p>
                        <p>Saça qulluq</p>
                        <p>Makiyaj</p>
                        <p>Ağız Baxımı</p>
                        <p>Bədən Baxımı</p>
                        <p>Sanitariya dəsti</p>
                        <p>Duş Gelleri və Kremləri</p>
                        <p>Epilyasiya Məhsulları</p>
                        <p>Pomada</p>
                        <p>Günəş kremi</p>
                    </div>
                </div>
            </div>
            <div className='main-header__subtitle' ref={subtitleHeaderAll} onMouseOver={hoverSubtitleAll} onMouseOut={hoverOutSubtitleAll}>
                <div className='main-header__subtitle__content'>
                    <p className='main-header__subtitle__title'>Geyim</p>
                    <div className='main-header__subtitle__items'>
                        <p>Köynək</p>
                        <p>Şort</p>
                        <p>Eşofman</p>
                        <p>Şalvar</p>
                        <p>Gödəkçə</p>
                        <p>Cins şalvar</p>
                        <p>Paltolar</p>
                        <p>Kostyum</p>
                        <p>Svitter</p>
                        <p>Uniforma</p>
                    </div>
                </div>
                <div className='main-header__subtitle__content'>
                    <p className='main-header__subtitle__title'>Ayaqqabı</p>
                    <div className='main-header__subtitle__items'>
                        <p>İdman ayaqqabıları</p>
                        <p>Gündəlik Ayaqqabılar</p>
                        <p>Gəzinti ayaqqabısı</p>
                        <p>Sünbüllər</p>
                        <p>idman ayaqqabısı</p>
                        <p>Klassik</p>
                        <p>Qaçış və Təlim</p>
                    </div>
                    <p className='main-header__subtitle__title'>Şəxsi qayğı</p>
                    <div className='main-header__subtitle__items'>
                        <p>Ətir</p>
                        <p>Təraşdan Sonra Məhsullar</p>
                        <p>Ülgüc bıçağı</p>
                    </div>
                </div>
                <div className='main-header__subtitle__content'>
                    <p className='main-header__subtitle__title'>Saatlar və Aksesuarlar</p>
                    <div className='main-header__subtitle__items'>
                        <p>Saat</p>
                        <p>Günəş eynəyi</p>
                        <p>Pul kisəsi</p>
                        <p>Kəmər</p>
                        <p>Çanta</p>
                        <p>Şapka</p>
                        <p>Bilərzik</p>
                    </div>
                </div>
                <div className='main-header__subtitle__content'>
                    <p className='main-header__subtitle__title'>Kosmetik</p>
                    <div className='main-header__subtitle__items'>
                        <p>Ətir</p>
                        <p>Göz makiyajı</p>
                        <p>Dəriyə qulluq</p>
                        <p>Saça qulluq</p>
                        <p>Makiyaj</p>
                        <p>Ağız Baxımı</p>
                        <p>Bədən Baxımı</p>
                        <p>Sanitariya dəsti</p>
                        <p>Duş Gelleri və Kremləri</p>
                        <p>Epilyasiya Məhsulları</p>
                        <p>Pomada</p>
                        <p>Günəş kremi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;