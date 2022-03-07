import './Newness.scss';
import trackSneakerFirst from '../../../assets/images/track-sneaker-first.png';
import trackSneakerSecond from '../../../assets/images/track-sneaker-second.png';
import trackSneakerThrid from '../../../assets/images/track-sneaker-thrid.png';
import trackSneakerFourth from '../../../assets/images/track-sneaker-fourth.png';

const Newness = () => {
    return (
        <div className='newness-section'>
            <div>
                <p>NEWNESS</p>
                <div className='newness-section__image-container'>
                    <div>
                        <img src={trackSneakerFirst} alt="" />
                    </div>
                    <div>
                        <img src={trackSneakerSecond} alt="" />
                    </div>
                    <div>
                        <img src={trackSneakerThrid} alt="" />
                    </div>
                    <div>
                        <img src={trackSneakerFourth} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newness;