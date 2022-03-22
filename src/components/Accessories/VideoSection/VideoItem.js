import './VideoItem.scss';
import videoItem from '../../../assets/images/video-react.mp4';
import { useEffect, useRef, useState } from 'react';

const VideoItem = () => {
    const [playing, setPlaying] = useState();
    const [muted, setMuted] = useState(true);
    const [videoTime, setVideoTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);

    const videoHandler = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setPlaying(false);
        } else {
            videoRef.current.pause();
            setPlaying(true);
        }
    }

    const videoMutedHandler = () => {
        if (videoRef.current.muted) {
            videoRef.current.muted = false;
            setMuted(false);
        } else {
            videoRef.current.muted = true;
            setMuted(true);
        }
    }

    window.setInterval(function () {
        setVideoTime(videoRef.current?.duration);
        setCurrentTime(videoRef.current?.currentTime);
        setProgress((videoRef.current?.currentTime / videoTime) * 100)
    }, 1000);

    return (
        <div className='video-container'>
            <video
                ref={videoRef}
                id='video-id'
                className='video-container__vid-item' 
                src={videoItem} type='video/mp4' 
                autoPlay muted playsInline loop
            ></video>
            <div className='video-container__vid-control'>
                <div className="video-container__vid-control__time-line">
                    <div style={{ width: `${progress}%` }}></div>
                </div>
                <div className='video-container__vid-control__tools'>
                    <div className='video-container__vid-control__tools__left-part'>
                        <div className='video-container__vid-control__tools__left-part__play-video'>
                            {playing ? (
                                <svg onClick={videoHandler} fill="white" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M327.3,98.9l-2.1,1.8l-156.5,136c-5.3,4.6-8.6,11.5-8.6,19.2c0,7.7,3.4,14.6,8.6,19.2L324.9,411l2.6,2.3  c2.5,1.7,5.5,2.7,8.7,2.7c8.7,0,15.8-7.4,15.8-16.6h0V112.6h0c0-9.2-7.1-16.6-15.8-16.6C332.9,96,329.8,97.1,327.3,98.9z"/>
                                </svg>
                            ) : (
                                <svg onClick={videoHandler} fill="white" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 38h8V10h-8v28zm16-28v28h8V10h-8z"/><path d="M0 0h48v48H0z" fill="none"/>
                                </svg>
                            )}
                        </div>
                        <div className='video-container__vid-control__tools__left-part__revert-video'>
                            <svg onClick={() => videoRef.current.currentTime -= 5} fill="white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.58,15.19l-14-10A1,1,0,0,0,14,6v6.63L3.58,5.19A1,1,0,0,0,2,6V26a1,1,0,0,0,.54.89A1.07,1.07,0,0,0,3,27a1,1,0,0,0,.58-.19L14,19.37V26a1,1,0,0,0,.54.89A1.07,1.07,0,0,0,15,27a1,1,0,0,0,.58-.19l14-10a1,1,0,0,0,0-1.62Z"/>
                            </svg>
                            <svg onClick={() => videoRef.current.currentTime += 5} fill="white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.58,15.19l-14-10A1,1,0,0,0,14,6v6.63L3.58,5.19A1,1,0,0,0,2,6V26a1,1,0,0,0,.54.89A1.07,1.07,0,0,0,3,27a1,1,0,0,0,.58-.19L14,19.37V26a1,1,0,0,0,.54.89A1.07,1.07,0,0,0,15,27a1,1,0,0,0,.58-.19l14-10a1,1,0,0,0,0-1.62Z"/>
                            </svg>
                        </div>
                        <div className='video-container__vid-control__tools__left-part__video-time'>
                            <span>{Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)}</span>
                            <span>&nbsp;/&nbsp;</span>
                            <span>{Math.floor(videoTime / 60) + ":" + ("0" + Math.floor(videoTime % 60)).slice(-2)}</span>
                        </div>
                    </div>
                    <div className='video-container__vid-control__tools__right-part'>
                        <div className='video-container__vid-control__tools__right-part__sound-video'>
                            {muted ? (
                                <svg onClick={videoMutedHandler} fill="white" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="10,16 10,0 3,5 0,5 0,11 3,11 "/><polygon points="14.646,5.646 13,7.293 11.354,5.646 10.646,6.354 12.293,8 10.646,9.646 11.354,10.354 13,8.707 14.646,10.354   15.354,9.646 13.707,8 15.354,6.354 "/>
                                </svg>
                            ) : (
                                <svg onClick={videoMutedHandler} fill="white" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="10,16 10,0 3,5 0,5 0,11 3,11 "/>
                                    <path d="M11,13.91c2.837-0.477,5-2.938,5-5.91s-2.163-5.433-5-5.91v1.011C13.279,3.566,15,5.585,15,8s-1.721,4.434-4,4.899V13.91z"/>
                                    <path d="M11,9.722v1.094c1.163-0.413,2-1.512,2-2.816s-0.837-2.403-2-2.816v1.094C11.595,6.625,12,7.263,12,8  C12,8.737,11.595,9.375,11,9.722z"/>
                                </svg>
                            )}
                        </div>
                        <div className='video-container__vid-control__tools__right-part__video-screen'>
                            <svg onClick={() => videoRef.current.requestFullscreen()} fill="white" version="1.1" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2,9 L0,9 L0,14 L5,14 L5,12 L2,12 L2,9 L2,9 Z M0,5 L2,5 L2,2 L5,2 L5,0 L0,0 L0,5 L0,5 Z M12,12 L9,12 L9,14 L14,14 L14,9 L12,9 L12,12 L12,12 Z M9,0 L9,2 L12,2 L12,5 L14,5 L14,0 L9,0 L9,0 Z" id="Shape"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoItem;