type GenreType = 'All genres' | 'Fantasy' | 'Action' | 'Adventure' | 'Comedy' | 'Crime' | 'Documentary' | 'Drama' | 'Horror' | 'Kids&Family' | 'Romance' | 'Sci-Fi' | 'Thriller';

export type Film = {
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: GenreType;
  released: number;
  id: number;
  isFavorite: boolean;
  videoLink: string;
  previewVideoLink: string;
}
