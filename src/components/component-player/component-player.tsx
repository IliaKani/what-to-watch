import {useRef} from 'react';

type DemoPlayerProps = {
  isPlaying: boolean;
  previewVideoLink: string;
  posterImage: string;
}

export default function ComponentPlayer({isPlaying, previewVideoLink, posterImage}: DemoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null!);
  //
  // useEffect(() => {
  //   if (!isPlaying) {
  //     return;
  //   }
  //   videoRef.current && videoRef.current !== null && videoRef?.current?.play();
  // }, []);

  return (
    <video
      width={280}
      height={175}
      className="videoPlayer"
      src={previewVideoLink}
      poster={posterImage}
      autoPlay
      muted
      ref={videoRef}
    />
  );
}
