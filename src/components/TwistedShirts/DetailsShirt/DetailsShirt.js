import { useEffect, useRef, useState } from 'react';
import Nav from '../../Navbar/Nav';
import TwistedNavigation from '../TwistNav/TwistedNavigation';
import frontPerson from '../../../assets/images/shirts/front-person.png';
import sidePerson from '../../../assets/images/shirts/side-person.png';
import backPerson from '../../../assets/images/shirts/back-person.png';
import frontShirt from '../../../assets/images/shirts/front-shirt.png';
import backShirt from '../../../assets/images/shirts/back-shirt.png';
import minusIcon from '../../../assets/images/minus.png';
import plusIcon from '../../../assets/images/plus.png';
import arrow from '../../../assets/images/right-arrow.png';
import './DetailsShirt.scss';

const DetailsShirt = () => {
    const [haveProduct, setHaveProduct] = useState(false);
    const [prevProduct, setPrevProduct] = useState('');
    const [addToBagActive, setAddToBagActive] = useState(false);
    const [isOpenSubitem1, setIsOpenSubitem1] = useState(true);
    const [isOpenSubitem2, setIsOpenSubitem2] = useState(true);
    const [isOpenSubitem3, setIsOpenSubitem3] = useState(true);
    const [sizeModalOpen, setSizeModalOpen] = useState(false);

    const defaultColor = useRef();
    const choosenColor = useRef();

    const openSizesModal = () => {
        setSizeModalOpen(!sizeModalOpen);
    }

    const changeWeight1 = () => {
        defaultColor.current.style.fontWeight = 500;
        choosenColor.current.style.fontWeight = 400;
        setColor(defaultColor.current.textContent);
    }

    const changeWeight2 = () => {
        defaultColor.current.style.fontWeight = 400;
        choosenColor.current.style.fontWeight = 500;
        setColor(choosenColor.current.textContent);
    }
    
    const openSubitemsModalFirst = () => {
        setIsOpenSubitem1(!isOpenSubitem1);
    }
    const openSubitemsModalSecond = () => {
        setIsOpenSubitem2(!isOpenSubitem2);
    }
    const openSubitemsModalThird = () => {
        setIsOpenSubitem3(!isOpenSubitem3);
    }

    const productTitle = useRef();
    const productDescription = useRef();
    const productSize = useRef();
    const productPrice = useRef();
    const productImage = useRef();

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [color, setColor] = useState();
    const [size, setSize] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();

    const productData = [
        {
            titleData: title,
            descriptionData: description,
            colorName: color,
            sizeData: size,
            priceData: price,
            imageUrl: image
        } 
    ];

    useEffect(() => {
        setTitle(productTitle.current.textContent);
        setDescription(productDescription.current.textContent);
        setColor(defaultColor.current.textContent);
        setPrice(productPrice.current.textContent);
        setImage(productImage.current.src)
    },[])

    useEffect(() => {
        if(changeSizeGuide1 || changeSizeGuide2 || changeSizeGuide3 || changeSizeGuide4 
            || changeSizeGuide5 || changeSizeGuide6 || changeSizeGuide7) {
            setSize(productSize.current.textContent);
        }
    },[() => {}])

    const dataAddToStorage = () => {
        localStorage.setItem('productData', JSON.stringify(productData));
        setAddToBagActive(true);
    }

    useEffect(() => {
        const productDetails = JSON.parse(localStorage.getItem('productData'));
        if (productDetails) {
            productDetails.map(product => {
                setPrevProduct(product);
            })
            setHaveProduct(true)
        } else {
            setHaveProduct(false)
        }
    },[])

    const sizeItem1 = useRef();
    const sizeItem2 = useRef();
    const sizeItem3 = useRef();
    const sizeItem4 = useRef();
    const sizeItem5 = useRef();
    const sizeItem6 = useRef();
    const sizeItem7 = useRef();

    const changeSizeGuide1 = () => {
        productSize.current.textContent = sizeItem1.current.textContent;
    }
    const changeSizeGuide2 = () => {
        productSize.current.textContent = sizeItem2.current.textContent;
    }
    const changeSizeGuide3 = () => {
        productSize.current.textContent = sizeItem3.current.textContent;
    }
    const changeSizeGuide4 = () => {
        productSize.current.textContent = sizeItem4.current.textContent;
    }
    const changeSizeGuide5 = () => {
        productSize.current.textContent = sizeItem5.current.textContent;
    }
    const changeSizeGuide6 = () => {
        productSize.current.textContent = sizeItem6.current.textContent;
    }
    const changeSizeGuide7 = () => {
        productSize.current.textContent = sizeItem7.current.textContent;
    }

    const windowWidth = window.screen.width;
    const [scrolling, setScrolling] = useState()
    const elementsFixedBehavior = useRef();
    const linesBehavior = useRef();
    const imagesBehavior = useRef();
    const shirtLine1 = useRef(null);
    const shirtLine2 = useRef(null);
    const shirtLine3 = useRef(null);

    window.onscroll = () => {
        setScrolling(window.scrollY);

        if (window.scrollY > 110 && window.scrollY < 1450 && windowWidth > 1600) {
            elementsFixedBehavior.current.style.position = "fixed";
            elementsFixedBehavior.current.style.top = "75px";
            elementsFixedBehavior.current.style.marginTop = "0px";
            linesBehavior.current.style.position = "fixed";
            linesBehavior.current.style.top = "75px";
            linesBehavior.current.style.marginTop = "0px";
            imagesBehavior.current.style.marginLeft = "98px";
        } else if (window.scrollY > 1450 && windowWidth > 1600) {
            elementsFixedBehavior.current.style.position = "static";
            elementsFixedBehavior.current.style.marginTop = "1350px";
            linesBehavior.current.style.position = "static";
            linesBehavior.current.style.marginTop = "1350px";
            imagesBehavior.current.style.marginLeft = "0px";
        } else if (window.scrollY > 110 && window.scrollY < 1130 && windowWidth > 1300) {
            elementsFixedBehavior.current.style.position = "fixed";
            elementsFixedBehavior.current.style.top = "75px";
            elementsFixedBehavior.current.style.marginTop = "0px";
            linesBehavior.current.style.position = "fixed";
            linesBehavior.current.style.top = "75px";
            linesBehavior.current.style.marginTop = "0px";
            imagesBehavior.current.style.marginLeft = "98px";
        } else if (window.scrollY > 1130 && windowWidth > 1300) {
            elementsFixedBehavior.current.style.position = "static";
            elementsFixedBehavior.current.style.marginTop = "1020px";
            linesBehavior.current.style.position = "static";
            linesBehavior.current.style.marginTop = "1020px";
            imagesBehavior.current.style.marginLeft = "0px";
        } else if (window.scrollY > 110 && window.scrollY < 650 && windowWidth > 1150) {
            elementsFixedBehavior.current.style.position = "fixed";
            elementsFixedBehavior.current.style.top = "75px";
            elementsFixedBehavior.current.style.marginTop = "0px";
            linesBehavior.current.style.position = "fixed";
            linesBehavior.current.style.top = "75px";
            linesBehavior.current.style.marginTop = "0px";
            imagesBehavior.current.style.marginLeft = "98px";
        } else if (window.scrollY > 650 && windowWidth > 1150) {
            elementsFixedBehavior.current.style.position = "static";
            elementsFixedBehavior.current.style.marginTop = "540px";
            linesBehavior.current.style.position = "static";
            linesBehavior.current.style.marginTop = "540px";
            imagesBehavior.current.style.marginLeft = "0px";
        } else if (window.scrollY > 110 && window.scrollY < 450 && windowWidth > 1024) {
            elementsFixedBehavior.current.style.position = "fixed";
            elementsFixedBehavior.current.style.top = "75px";
            elementsFixedBehavior.current.style.marginTop = "0px";
            linesBehavior.current.style.position = "fixed";
            linesBehavior.current.style.top = "75px";
            linesBehavior.current.style.marginTop = "0px";
            imagesBehavior.current.style.marginLeft = "98px";
        } else if (window.scrollY > 450 && windowWidth > 1024) {
            elementsFixedBehavior.current.style.position = "static";
            elementsFixedBehavior.current.style.marginTop = "340px";
            linesBehavior.current.style.position = "static";
            linesBehavior.current.style.marginTop = "340px";
            imagesBehavior.current.style.marginLeft = "0px";
        } else if (window.scrollY > 110 && window.scrollY < 250 && windowWidth > 920) {
            elementsFixedBehavior.current.style.position = "fixed";
            elementsFixedBehavior.current.style.top = "75px";
            elementsFixedBehavior.current.style.marginTop = "0px";
            linesBehavior.current.style.position = "fixed";
            linesBehavior.current.style.top = "75px";
            linesBehavior.current.style.marginTop = "0px";
            imagesBehavior.current.style.marginLeft = "56px";
        } else if (window.scrollY > 250 && windowWidth > 920) {
            elementsFixedBehavior.current.style.position = "static";
            elementsFixedBehavior.current.style.marginTop = "140px";
            linesBehavior.current.style.position = "static";
            linesBehavior.current.style.marginTop = "140px";
            imagesBehavior.current.style.marginLeft = "0px";
        } else if (window.scrollY > 110 && window.scrollY < 250 && windowWidth > 768) {
            elementsFixedBehavior.current.style.position = "fixed";
            elementsFixedBehavior.current.style.top = "75px";
            elementsFixedBehavior.current.style.marginTop = "0px";
            linesBehavior.current.style.position = "fixed";
            linesBehavior.current.style.top = "75px";
            linesBehavior.current.style.marginTop = "0px";
            imagesBehavior.current.style.marginLeft = "56px";
        } else if (window.scrollY > 250 && windowWidth > 768) {
            elementsFixedBehavior.current.style.position = "static";
            elementsFixedBehavior.current.style.marginTop = "130px";
            linesBehavior.current.style.position = "static";
            linesBehavior.current.style.marginTop = "130px";
            imagesBehavior.current.style.marginLeft = "0px";
        } else if (window.scrollY > 110 && window.scrollY < 200 && windowWidth > 600) {
            elementsFixedBehavior.current.style.position = "fixed";
            elementsFixedBehavior.current.style.top = "75px";
            elementsFixedBehavior.current.style.marginTop = "0px";
            linesBehavior.current.style.position = "fixed";
            linesBehavior.current.style.top = "75px";
            linesBehavior.current.style.marginTop = "0px";
            imagesBehavior.current.style.marginLeft = "31px";
        } else if (window.scrollY > 200 && windowWidth > 600) {
            elementsFixedBehavior.current.style.position = "static";
            elementsFixedBehavior.current.style.marginTop = "90px";
            linesBehavior.current.style.position = "static";
            linesBehavior.current.style.marginTop = "90px";
            imagesBehavior.current.style.marginLeft = "0px";
        } else if (window.scrollY > 110 && window.scrollY < 200 && windowWidth > 486) {
            elementsFixedBehavior.current.style.position = "fixed";
            elementsFixedBehavior.current.style.top = "75px";
            elementsFixedBehavior.current.style.marginTop = "0px";
            linesBehavior.current.style.position = "fixed";
            linesBehavior.current.style.top = "75px";
            linesBehavior.current.style.marginTop = "0px";
            imagesBehavior.current.style.marginLeft = "31px";
        } else if (window.scrollY > 200 && windowWidth > 486) {
            elementsFixedBehavior.current.style.position = "static";
            elementsFixedBehavior.current.style.marginTop = "90px";
            linesBehavior.current.style.position = "static";
            linesBehavior.current.style.marginTop = "90px";
            imagesBehavior.current.style.marginLeft = "0px";
        } else if (window.scrollY > 45 && window.scrollY < 450 && windowWidth > 250) {
            linesBehavior.current.style.position = "fixed";
            linesBehavior.current.style.top = "75px";
        } else if (window.scrollY > 450 && windowWidth > 250) {
            linesBehavior.current.style.position = "absolute";
            linesBehavior.current.style.top = "450px";
        } else if (window.scrollY < 110 && windowWidth > 486) {
            elementsFixedBehavior.current.style.position = "static";
            elementsFixedBehavior.current.style.top = "65px";
            linesBehavior.current.style.position = "static";
            linesBehavior.current.style.top = "65px";
            imagesBehavior.current.style.marginLeft = "0px";
        } else if (window.scrollY < 45 && windowWidth > 250 && windowWidth < 486) {
            linesBehavior.current.style.position = "absolute";
        }
    }

    useEffect(() => {
        if (scrolling < 250 && windowWidth > 1700) {
            shirtLine1.current.style.width = "8px";
            shirtLine1.current.style.height = "120px";
            shirtLine1.current.style.background = "black";
            shirtLine2.current.style.width = "4px";
            shirtLine2.current.style.height = "50px";
            shirtLine2.current.style.background = "#C4C4C4";
            shirtLine3.current.style.width = "4px";
            shirtLine3.current.style.height = "50px";
            shirtLine3.current.style.background = "#C4C4C4";
        } 
        if (scrolling > 250 && windowWidth > 1700) {
            shirtLine1.current.style.width = "4px";
            shirtLine1.current.style.height = "50px";
            shirtLine1.current.style.background = "#C4C4C4";
            shirtLine2.current.style.width = "8px";
            shirtLine2.current.style.height = "120px";
            shirtLine2.current.style.background = "black";
            shirtLine3.current.style.width = "4px";
            shirtLine3.current.style.height = "50px";
            shirtLine3.current.style.background = "#C4C4C4";
        } 
        if (scrolling > 950 && windowWidth > 1700) {
            shirtLine2.current.style.width = "4px";
            shirtLine2.current.style.height = "50px";
            shirtLine2.current.style.background = "#C4C4C4";
            shirtLine3.current.style.width = "8px";
            shirtLine3.current.style.height = "120px";
            shirtLine3.current.style.background = "black";
        }

        if (scrolling < 180 && windowWidth > 1500) {
            shirtLine1.current.style.width = "8px";
            shirtLine1.current.style.height = "120px";
            shirtLine1.current.style.background = "black";
            shirtLine2.current.style.width = "4px";
            shirtLine2.current.style.height = "50px";
            shirtLine2.current.style.background = "#C4C4C4";
            shirtLine3.current.style.width = "4px";
            shirtLine3.current.style.height = "50px";
            shirtLine3.current.style.background = "#C4C4C4";
        } 
        if (scrolling > 180 && windowWidth > 1500) {
            shirtLine1.current.style.width = "4px";
            shirtLine1.current.style.height = "50px";
            shirtLine1.current.style.background = "#C4C4C4";
            shirtLine2.current.style.width = "8px";
            shirtLine2.current.style.height = "120px";
            shirtLine2.current.style.background = "black";
            shirtLine3.current.style.width = "4px";
            shirtLine3.current.style.height = "50px";
            shirtLine3.current.style.background = "#C4C4C4";
        } 
        if (scrolling > 670 && windowWidth > 1500) {
            shirtLine2.current.style.width = "4px";
            shirtLine2.current.style.height = "50px";
            shirtLine2.current.style.background = "#C4C4C4";
            shirtLine3.current.style.width = "8px";
            shirtLine3.current.style.height = "120px";
            shirtLine3.current.style.background = "black";
        }

        if (scrolling < 150 && windowWidth > 1300) {
            shirtLine1.current.style.width = "8px";
            shirtLine1.current.style.height = "120px";
            shirtLine1.current.style.background = "black";
            shirtLine2.current.style.width = "4px";
            shirtLine2.current.style.height = "50px";
            shirtLine2.current.style.background = "#C4C4C4";
            shirtLine3.current.style.width = "4px";
            shirtLine3.current.style.height = "50px";
            shirtLine3.current.style.background = "#C4C4C4";
        } 
        if (scrolling > 150 && windowWidth > 1300) {
            shirtLine1.current.style.width = "4px";
            shirtLine1.current.style.height = "50px";
            shirtLine1.current.style.background = "#C4C4C4";
            shirtLine2.current.style.width = "8px";
            shirtLine2.current.style.height = "120px";
            shirtLine2.current.style.background = "black";
            shirtLine3.current.style.width = "4px";
            shirtLine3.current.style.height = "50px";
            shirtLine3.current.style.background = "#C4C4C4";
        } 
        if (scrolling > 600 && windowWidth > 1300) {
            shirtLine2.current.style.width = "4px";
            shirtLine2.current.style.height = "50px";
            shirtLine2.current.style.background = "#C4C4C4";
            shirtLine3.current.style.width = "8px";
            shirtLine3.current.style.height = "120px";
            shirtLine3.current.style.background = "black";
        }

        if (scrolling < 90 && windowWidth > 1024) {
            shirtLine1.current.style.width = "8px";
            shirtLine1.current.style.height = "120px";
            shirtLine1.current.style.background = "black";
            shirtLine2.current.style.width = "4px";
            shirtLine2.current.style.height = "50px";
            shirtLine2.current.style.background = "#C4C4C4";
            shirtLine3.current.style.width = "4px";
            shirtLine3.current.style.height = "50px";
            shirtLine3.current.style.background = "#C4C4C4";
        } 
        if (scrolling > 90 && windowWidth > 1024) {
            shirtLine1.current.style.width = "4px";
            shirtLine1.current.style.height = "50px";
            shirtLine1.current.style.background = "#C4C4C4";
            shirtLine2.current.style.width = "8px";
            shirtLine2.current.style.height = "120px";
            shirtLine2.current.style.background = "black";
            shirtLine3.current.style.width = "4px";
            shirtLine3.current.style.height = "50px";
            shirtLine3.current.style.background = "#C4C4C4";
        } 
        if (scrolling > 440 && windowWidth > 1024) {
            shirtLine2.current.style.width = "4px";
            shirtLine2.current.style.height = "50px";
            shirtLine2.current.style.background = "#C4C4C4";
            shirtLine3.current.style.width = "8px";
            shirtLine3.current.style.height = "120px";
            shirtLine3.current.style.background = "black";
        }

        if (scrolling < 30 && windowWidth > 768) {
            shirtLine1.current.style.width = "6px";
            shirtLine1.current.style.height = "60px";
            shirtLine1.current.style.background = "black";
            shirtLine2.current.style.width = "4px";
            shirtLine2.current.style.height = "40px";
            shirtLine2.current.style.background = "#C4C4C4";
            shirtLine3.current.style.width = "4px";
            shirtLine3.current.style.height = "40px";
            shirtLine3.current.style.background = "#C4C4C4";
        } 
        if (scrolling > 30 && windowWidth > 768) {
            shirtLine1.current.style.width = "4px";
            shirtLine1.current.style.height = "40px";
            shirtLine1.current.style.background = "#C4C4C4";
            shirtLine2.current.style.width = "6px";
            shirtLine2.current.style.height = "60px";
            shirtLine2.current.style.background = "black";
            shirtLine3.current.style.width = "4px";
            shirtLine3.current.style.height = "40px";
            shirtLine3.current.style.background = "#C4C4C4";
        } 
        if (scrolling > 100 && windowWidth > 768) {
            shirtLine2.current.style.width = "4px";
            shirtLine2.current.style.height = "40px";
            shirtLine2.current.style.background = "#C4C4C4";
            shirtLine3.current.style.width = "6px";
            shirtLine3.current.style.height = "60px";
            shirtLine3.current.style.background = "black";
        }

        if (scrolling < 30 && windowWidth > 600) {
            shirtLine1.current.style.width = "5px";
            shirtLine1.current.style.height = "40px";
            shirtLine1.current.style.background = "black";
            shirtLine2.current.style.width = "3px";
            shirtLine2.current.style.height = "30px";
            shirtLine2.current.style.background = "#C4C4C4";
            shirtLine3.current.style.width = "3px";
            shirtLine3.current.style.height = "30px";
            shirtLine3.current.style.background = "#C4C4C4";
        } 
        if (scrolling > 30 && windowWidth > 600) {
            shirtLine1.current.style.width = "3px";
            shirtLine1.current.style.height = "30px";
            shirtLine1.current.style.background = "#C4C4C4";
            shirtLine2.current.style.width = "5px";
            shirtLine2.current.style.height = "40px";
            shirtLine2.current.style.background = "black";
            shirtLine3.current.style.width = "3px";
            shirtLine3.current.style.height = "30px";
            shirtLine3.current.style.background = "#C4C4C4";
        } 
        if (scrolling > 200 && windowWidth > 600) {
            shirtLine2.current.style.width = "3px";
            shirtLine2.current.style.height = "30px";
            shirtLine2.current.style.background = "#C4C4C4";
            shirtLine3.current.style.width = "5px";
            shirtLine3.current.style.height = "40px";
            shirtLine3.current.style.background = "black";
        }

        if (scrolling < 100 && windowWidth > 486) {
            shirtLine1.current.style.width = "5px";
            shirtLine1.current.style.height = "30px";
            shirtLine1.current.style.background = "black";
            shirtLine2.current.style.width = "3px";
            shirtLine2.current.style.height = "20px";
            shirtLine2.current.style.background = "#C4C4C4";
            shirtLine3.current.style.width = "3px";
            shirtLine3.current.style.height = "20px";
            shirtLine3.current.style.background = "#C4C4C4";
        } 
        if (scrolling > 100 && windowWidth > 486) {
            shirtLine1.current.style.width = "3px";
            shirtLine1.current.style.height = "20px";
            shirtLine1.current.style.background = "#C4C4C4";
            shirtLine2.current.style.width = "5px";
            shirtLine2.current.style.height = "30px";
            shirtLine2.current.style.background = "black";
            shirtLine3.current.style.width = "3px";
            shirtLine3.current.style.height = "20px";
            shirtLine3.current.style.background = "#C4C4C4";
        } 
        if (scrolling > 200 && windowWidth > 486) {
            shirtLine2.current.style.width = "3px";
            shirtLine2.current.style.height = "20px";
            shirtLine2.current.style.background = "#C4C4C4";
            shirtLine3.current.style.width = "5px";
            shirtLine3.current.style.height = "30px";
            shirtLine3.current.style.background = "black";
        }

        if (scrolling < 100 && windowWidth > 250) {
            shirtLine1.current.style.width = "5px";
            shirtLine1.current.style.height = "60px";
            shirtLine1.current.style.background = "black";
            shirtLine2.current.style.width = "3px";
            shirtLine2.current.style.height = "40px";
            shirtLine2.current.style.background = "#C4C4C4";
            shirtLine3.current.style.width = "3px";
            shirtLine3.current.style.height = "40px";
            shirtLine3.current.style.background = "#C4C4C4";
        } 
        if (scrolling > 100 && windowWidth > 250) {
            shirtLine1.current.style.width = "3px";
            shirtLine1.current.style.height = "40px";
            shirtLine1.current.style.background = "#C4C4C4";
            shirtLine2.current.style.width = "5px";
            shirtLine2.current.style.height = "60px";
            shirtLine2.current.style.background = "black";
            shirtLine3.current.style.width = "3px";
            shirtLine3.current.style.height = "40px";
            shirtLine3.current.style.background = "#C4C4C4";
        } 
        if (scrolling > 300 && windowWidth > 250) {
            shirtLine2.current.style.width = "3px";
            shirtLine2.current.style.height = "40px";
            shirtLine2.current.style.background = "#C4C4C4";
            shirtLine3.current.style.width = "5px";
            shirtLine3.current.style.height = "60px";
            shirtLine3.current.style.background = "black";
        }
    }, [() => {}])

    return (
        <>
            <Nav addToBagButtonActive={addToBagActive} haveProduct={haveProduct} />
            <TwistedNavigation />
            <div className='details-shirt'>
                <div className='details-shirt__lines' ref={linesBehavior}>
                    <button ref={shirtLine1}></button>
                    <button ref={shirtLine2}></button>
                    <button ref={shirtLine3}></button>
                </div>
                <div className='details-shirt__images' ref={imagesBehavior}>
                    <div className='details-shirt__images__part-1'>
                        <img ref={productImage} src={frontPerson} alt="" />
                    </div>
                    <div className='details-shirt__images__part-2' id='image-second'>
                        <div>
                            <img src={sidePerson} alt="" />
                        </div>
                        <div>
                            <img src={backPerson} alt="" />
                        </div>
                    </div>
                    <div className='details-shirt__images__part-3' id='image-third'>
                        <div>
                            <img src={frontShirt} alt="" />
                        </div>
                        <div>
                            <img src={backShirt} alt="" />
                        </div>
                    </div>
                </div>
                <div className='details-shirt__elements' ref={elementsFixedBehavior}>
                    <div className='details-shirt__elements__headers'>
                        <h1 ref={productTitle}>TWISTED SHIRT IN BLUE</h1>
                        <p ref={productDescription}>Twisted Shirt in dark blue and white striped poplin</p>
                    </div>
                    <div className='details-shirt__elements__choices'>
                        <div className='details-shirt__elements__choices__colors'>
                            <p>COLOR</p>
                            <div>
                                <span ref={defaultColor} onClick={changeWeight1}>BLUE</span>
                                <span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                                <span ref={choosenColor} onClick={changeWeight2}>WHITE</span>
                            </div>
                        </div>
                        <div className='details-shirt__elements__choices__sizes'>
                            <p>SIZE</p>
                            <div className='details-shirt__elements__choices__sizes__choose-size'>
                                <div className='details-shirt__elements__choices__sizes__choose-size__items'>
                                    <h4 ref={productSize}>XXS</h4>
                                    {!sizeModalOpen ? '' : <div >
                                        <span ref={sizeItem1} onClick={changeSizeGuide1}>XXS</span>
                                        <span ref={sizeItem2} onClick={changeSizeGuide2}>XS</span>
                                        <span ref={sizeItem3} onClick={changeSizeGuide3}>S</span>
                                        <span ref={sizeItem4} onClick={changeSizeGuide4}>M</span>
                                        <span ref={sizeItem5} onClick={changeSizeGuide5}>L</span>
                                        <span ref={sizeItem6} onClick={changeSizeGuide6}>XL</span>
                                        <span ref={sizeItem7} onClick={changeSizeGuide7}>XXL</span>
                                    </div>}
                                </div>
                                <div className='details-shirt__elements__choices__sizes__choose-size__arrow-img'>
                                    <img className={`default-img ${!sizeModalOpen ? '' : 'rotate-img'}`} onClick={openSizesModal} src={arrow} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='details-shirt__elements__choices__price'>
                            <p>PRICE</p>
                            <span><span ref={productPrice}>574</span>$</span>
                        </div>
                    </div>
                    <div className='details-shirt__elements__add-buttons'>
                        <div className='details-shirt__elements__add-buttons__bag'>
                            <button onClick={dataAddToStorage}>ADD TO BAG</button>
                        </div>
                        <div className='details-shirt__elements__add-buttons__wishlist'>
                            <button>ADD TO WISHLIST</button>
                        </div>
                    </div>
                    <div className='details-shirt__elements__products'>
                        <div className='details-shirt__elements__products__all-details'>
                            <div className='details-shirt__elements__products__all-details__header'>
                                <p>PRODUCT DETAILS</p>
                                <div onClick={openSubitemsModalFirst}>
                                    {isOpenSubitem1 ? <img src={plusIcon} alt="" /> : <img src={minusIcon} alt="" />}
                                </div>
                            </div>
                            <div className={`details-shirt__elements__products__all-details__subitems ${!isOpenSubitem1 ? "subitems-open" : ''}`}>
                                <div className={`details-shirt__elements__products__all-details__subitems__descriptions ${!isOpenSubitem1 ? "description-display" : ""}`}>
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
                                <div className={`details-shirt__elements__products__all-details__subitems__material ${!isOpenSubitem1 ? "material-display" : ""}`}>
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
                                <div onClick={openSubitemsModalSecond}>
                                    {isOpenSubitem2 ? <img src={plusIcon} alt="" /> : <img src={minusIcon} alt="" />}
                                </div>
                            </div>
                            <div className={`details-shirt__elements__products__all-details__subitems ${!isOpenSubitem2 ? "subitems-open" : ''}`}>
                                <div className={`details-shirt__elements__products__all-details__subitems__descriptions ${!isOpenSubitem2 ? "description-display" : ""}`}>
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
                                <div className={`details-shirt__elements__products__all-details__subitems__material ${!isOpenSubitem2 ? "material-display" : ""}`}>
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
                                <p>MAY WE HELP?</p>
                                <div onClick={openSubitemsModalThird}>
                                    {isOpenSubitem3 ? <img src={plusIcon} alt="" /> : <img src={minusIcon} alt="" />}
                                </div>
                            </div>
                            <div className={`details-shirt__elements__products__all-details__subitems ${!isOpenSubitem3 ? "subitems-open" : ''}`}>
                                <div className={`details-shirt__elements__products__all-details__subitems__descriptions ${!isOpenSubitem3 ? "description-display" : ""}`}>
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
                                <div className={`details-shirt__elements__products__all-details__subitems__material ${!isOpenSubitem3 ? "material-display" : ""}`}>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsShirt;