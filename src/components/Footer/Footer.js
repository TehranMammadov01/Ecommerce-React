import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer__element">
                    <h1>BOUTIQUES</h1>
                    <div>
                        <p>Find a store nearby</p>
                    </div>
                </div>
                <div className="footer__element">
                    <h1>CLIENT SERVICES</h1>
                    <div>
                        <p>FAQ</p>
                        <p>Returns</p>
                        <p>Shipping</p>
                        <p>Payment</p>
                    </div>
                </div>
                <div className="footer__element">
                    <h1>CONTACT US</h1>
                    <div>
                        <p>Call us: +994 50 345 64 75</p>
                        <p>Mon-Sat 9am - 6:30pm</p>
                        <p>Email us</p>
                    </div>
                </div>
                <div className="footer__element">
                    <h1>CONNECT</h1>
                    <div>
                        <p>Facebook</p>
                        <p>Twitter</p>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;