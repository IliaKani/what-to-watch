import { useEffect, useRef } from 'react';
import { TFilm } from '../../types/film';

type TFilmCardVideoPlayerProps = {
  previewImage: TFilm['previewImage'];
  previewVideoLink: TFilm['previewVideoLink'];
  isActive: boolean;
};

const PLAYER_DELAY = 1000;

export function FilmCardVideoPlayer({
  previewImage,
  previewVideoLink,
  isActive,
}: TFilmCardVideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    if (!videoRef.current) {
      return;
    }

    if (isActive) {
      timeout = setTimeout(() => {
        videoRef.current?.play();
      }, PLAYER_DELAY);
    } else {
      videoRef.current?.load();
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [isActive]);

  return (
    <video
      poster={previewImage}
      muted
      src={previewVideoLink}
      style={{ width: '280px', height: '175px' }}
      ref={videoRef}
    />
  );
}
