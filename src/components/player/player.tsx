import {useEffect , useRef, useState} from 'react';
import {Film} from '../../types/film';
import {useNavigate} from 'react-router-dom';
import {FullScreen, Play, Pause} from '../icons/icons';


export default function Player({videoLink, posterImage, runTime, name}: Film) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState([0, 0]);
  const [currentTime, setCurrentTime] = useState([0, 0]);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null!);
  const onClickHandler = () => {
    navigate(-1);
  };

  const sec2Min = (sec: number): {min: number; sec: number} => {
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    return {
      min: min,
      sec: secRemain,
    };
  };

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = () => {
    const durationProp = videoRef.current.duration;
    const currentTimeProp = videoRef.current.currentTime;
    const progressProp = (currentTimeProp / durationProp) * 100;
    setProgress(progressProp);
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  useEffect(() => {
    if (canPlay) {
      const {min, sec} = sec2Min(videoRef.current.duration);
      setDuration([min, sec]);
      setIsPlaying(true);
    }
  }, [canPlay]);

  useEffect(() => {
    const interval = setInterval(() => {
      const { min, sec } = sec2Min(videoRef.current.currentTime);
      setCurrentTime([min, sec]);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);


  return (
    <div className="player">
      <video
        ref={videoRef}
        src={videoLink}
        className="player__video"
        poster={posterImage}
        onTimeUpdate={handleProgress}
        onCanPlay={() => setCanPlay(true)}
        muted
        autoPlay
      />
      <button type="button" className="player__exit" onClick={onClickHandler}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={progress}
              max={100}
            />
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">
            {duration[0] - currentTime[0] < 10 && 0}
            {duration[0] - currentTime[0]}:
            {duration[1] - currentTime[1] < 10 && 0}
            {duration[1] - currentTime[1]}
          </div>
        </div>
        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={togglePlay}
          >
            {isPlaying ? <Play/> : <Pause/>}
            <span>{isPlaying ? 'Play' : 'Pause'}</span>
          </button>
          <div className="player__name">{name}</div>
          <button
            onClick={handleFullScreen}
            type="button"
            className="player__full-screen"
          >
            <FullScreen/>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
