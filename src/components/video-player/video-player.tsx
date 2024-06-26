import {Film} from '../../types/film';
import {useNavigate} from 'react-router-dom';


export default function VideoPlayer({videoLink, posterImage, runTime, name}: Film) {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(-1);
  };
  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster={posterImage}/>
      <button type="button" className="player__exit" onClick={onClickHandler}>Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={30} max={100}/>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">{runTime}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref="#play-s"/>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{name}</div>
          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
