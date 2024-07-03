import {useParams} from 'react-router-dom';
// components
import VideoPlayer from '../../components/player/player';
// pages
import PageNotFound from '../page-not-found/page-not-found';
// hooks
import {useAppSelector} from '../../hooks';

export default function Player() {
  const {id} = useParams();

  const currentFilm = useAppSelector((state) => state.films.find((film) => (
    film.id === Number(id))
  ));

  if (!currentFilm) {
    return (
      <PageNotFound />
    );
  }

  return (
    <VideoPlayer {...currentFilm}/>
  );
}
