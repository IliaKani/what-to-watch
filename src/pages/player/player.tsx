import VideoPlayer from '../../components/player/player';
import {useParams} from 'react-router-dom';
import {Film as FilmType} from '../../types/film';
import PageNotFound from '../page-not-found/page-not-found';

type PlayerProps = {
  films: FilmType[];
}

export default function Player({films}: PlayerProps) {
  const {id} = useParams();

  const currentFilm: FilmType | undefined = films.find((film : FilmType) => film.id === Number(id));

  if (!currentFilm) {
    return (
      <PageNotFound />
    );
  }

  return (
    <VideoPlayer {...currentFilm}/>
  );
}
