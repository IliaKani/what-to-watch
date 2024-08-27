import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFilmAction } from '../../store/api-actions';
import { getFilm, getFilmFetchingStatus,} from '../../store/films-data/films-data-selectors';
import { PageNotFound } from '../page-not-found/page-not-found';
import { Loader } from '../../components/loader/loader';
import { getVideoTimeFormat } from '../../utils';
import { AppRoute, RequestStatus } from '../../const';

export function Player(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
    }
  }, [id, dispatch]);

  const fetchingStatus = useAppSelector(getFilmFetchingStatus);

  const film = useAppSelector(getFilm);

  if (fetchingStatus === RequestStatus.Pending) {
    return <Loader />;
  }

  if (!film || !id) {
    return <PageNotFound />;
  }

  const { videoLink, backgroundImage, name } = film;

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      setTimeLeft(videoRef.current.duration - videoRef.current.currentTime);
      setCurrentTime(
        (videoRef.current.currentTime * 100) / videoRef.current.duration
      );
    }
  };

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  };

  const handleFullScreenClick = () => {
    videoRef.current?.requestFullscreen();
  };

  const handleExitClick = () => {
    navigate(`${AppRoute.Film}/${id}`);
  };

  return (
    <div className="player">
      <video
        src={videoLink}
        ref={videoRef}
        autoPlay
        className="player__video"
        poster={backgroundImage}
        onTimeUpdate={handleVideoTimeUpdate}
      />

      <button type="button" className="player__exit" onClick={handleExitClick}>
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value={currentTime}
              max="100"
            />
            <div
              className="player__toggler"
              style={{ left: `${currentTime}%` }}
            >
              Toggler
            </div>
          </div>
          <div className="player__time-value">
            {getVideoTimeFormat(timeLeft)}
          </div>
        </div>
        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={handlePlayClick}
          >
            {isPlaying ? (
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#pause" />
              </svg>
            ) : (
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#play-s" />
              </svg>
            )}
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <div className="player__name">{name}</div>
          <button
            type="button"
            className="player__full-screen"
            onClick={handleFullScreenClick}
          >
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
