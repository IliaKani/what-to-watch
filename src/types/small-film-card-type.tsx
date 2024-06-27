export type SmallFilmCardType = {
  id: number;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  posterImage: string;
  isPlaying: boolean;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}
