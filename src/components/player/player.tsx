import {useEffect , useRef, useState, MouseEvent} from 'react';
import {Film} from '../../types/film';
import {useNavigate} from 'react-router-dom';
import {FullScreen, Play, Pause} from '../icons/icons';
import {formatDuration} from '../../helpers/formatDuration';
import {sec2Min} from '../../helpers/sec2Min';

export default function Player({videoLink, posterImage, name}: Film) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const [mouseIsDown, setMouseIsDown] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState([0, 0, 0]);
  const [currentTime, setCurrentTime] = useState([0, 0, 0]);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null!);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  const onClickHandler = () => {
    navigate(-1);
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
    const progressProp = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(progressProp);
  };

  const handleFullScreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  const seekingFn = (e: MouseEvent<HTMLDivElement>) => {
    if (timelineRef.current && videoRef.current) {
      const updatedTime = (e.nativeEvent.offsetX / timelineRef.current.offsetWidth) * videoRef.current.duration;
      videoRef.current.currentTime = updatedTime;
      const {hour, min, sec } = sec2Min(updatedTime);
      setCurrentTime([hour, min, sec]);
    }
  };

  useEffect(() => {
    if (canPlay) {
      const {hour, min, sec} = sec2Min(videoRef.current.duration);
      setDuration([hour, min, sec]);
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [canPlay]);

  useEffect(() => {
    const interval = setInterval(() => {
      const {hour, min, sec } = sec2Min(videoRef.current.currentTime);
      setCurrentTime([hour, min, sec]);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="player">
      <video
        ref={videoRef}
        src={videoLink}
        muted
        className="player__video"
        poster={posterImage}
        onTimeUpdate={handleProgress}
        onCanPlay={() => setCanPlay(true)}
      />
      <button type="button" className="player__exit" onClick={onClickHandler}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div
            ref={timelineRef}
            className="player__time"
            onMouseDown={() => setMouseIsDown(true)}
            onMouseUp={() => setMouseIsDown(false)}
            onClick={seekingFn}
            onMouseMove={(e) => mouseIsDown && seekingFn(e)}
          >
            <progress
              className="player__progress"
              value={progress}
              max={100}
            />
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">
            {
              formatDuration(videoRef?.current?.duration, duration, currentTime)
            }
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
