export type SmallFilmCardType = {
  id: number;
  name: string;
  previewImage: string;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}
