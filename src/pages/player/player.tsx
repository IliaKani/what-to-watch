import {useEffect} from 'react';
import {useAppDispatch} from '../../hooks';
import {useParams} from 'react-router-dom';

// components
import VideoPlayer from '../../components/player/player';
// pages
import PageNotFound from '../page-not-found/page-not-found';
// hooks
import {useAppSelector} from '../../hooks';
import {getFilm, getFilmStatus} from '../../store/slices/film/selectors';
import {fetchFilm} from '../../store/thunks/film';
import {RequestsStatus} from '../../const';
import Spinner from '../../components/spinner/spinner';

export default function Player() {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const filmStatus = useAppSelector(getFilmStatus);
  const currentFilm = useAppSelector(getFilm);

  useEffect(() => {
    Promise.all([
      dispatch(fetchFilm(Number(id))),
    ]);
  }, [id, dispatch]);

  if (filmStatus === RequestsStatus.Loading) {
    return <Spinner />;
  }

  if (filmStatus === RequestsStatus.Failed || !currentFilm) {
    return (
      <PageNotFound />
    );
  }

  return (
    <VideoPlayer {...currentFilm}/>
  );
}
