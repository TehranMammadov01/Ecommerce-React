import './VideoItem.scss';
import videoImage from '../../../assets/images/video.png';

const VideoItem = () => {
    return (
        <div className='video-image'>
            <img src={videoImage} alt="" />
        </div>
    )
}

export default VideoItem;