import './Newness.scss';
import trackSneakerFirst from '../../../assets/images/track-sneaker-first.png';
import trackSneakerSecond from '../../../assets/images/track-sneaker-second.png';
import trackSneakerThrid from '../../../assets/images/track-sneaker-thrid.png';

const Newness = () => {
    return (
        <div className='newness-section'>
            <div>
                <p className='newness-section__header'>NEWNESS</p>
                <div className='newness-section__container'>
                    <div className='newness-section__container__main-div'>
                        <div className='newness-section__container__main-div__image'>
                            <img src={trackSneakerFirst} alt="" />
                        </div>
                        <div className='newness-section__container__main-div__sizes'>
                            <p>TRACK SNEAKER IN WHITE/FLUO PINK</p>
                            <div className='newness-section__container__main-div__sizes__characters'>
                                <span>38</span>
                                <span>39</span>
                                <span>40</span>
                                <span>41</span>
                                <span>42</span>
                                <span>43</span>
                                <span>44</span>
                            </div>
                        </div>
                    </div>
                    <div className='newness-section__container__main-div'>
                        <div className='newness-section__container__main-div__image'>
                            <img src={trackSneakerSecond} alt="" />
                        </div>
                        <div className='newness-section__container__main-div__sizes'>
                            <p>TRACK SNEAKER IN WHITE/FLUO PINK</p>
                            <div className='newness-section__container__main-div__sizes__characters'>
                                <span>38</span>
                                <span>39</span>
                                <span>40</span>
                                <span>41</span>
                                <span>42</span>
                                <span>43</span>
                                <span>44</span>
                            </div>
                        </div>
                    </div>
                    <div className='newness-section__container__main-div'>
                        <div className='newness-section__container__main-div__image'>
                            <img src={trackSneakerThrid} alt="" />
                        </div>
                        <div className='newness-section__container__main-div__sizes'>
                            <p>TRACK SNEAKER IN WHITE/FLUO PINK</p>
                            <div className='newness-section__container__main-div__sizes__characters'>
                                <span>38</span>
                                <span>39</span>
                                <span>40</span>
                                <span>41</span>
                                <span>42</span>
                                <span>43</span>
                                <span>44</span>
                            </div>
                        </div>
                    </div>
                    <div className='newness-section__container__main-div'>
                        <div className='newness-section__container__main-div__image'>
                            <img src={trackSneakerThrid} alt="" />
                        </div>
                        <div className='newness-section__container__main-div__sizes'>
                            <p>TRACK SNEAKER IN WHITE/FLUO PINK</p>
                            <div className='newness-section__container__main-div__sizes__characters'>
                                <span>38</span>
                                <span>39</span>
                                <span>40</span>
                                <span>41</span>
                                <span>42</span>
                                <span>43</span>
                                <span>44</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newness;