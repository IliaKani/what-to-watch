import {useEffect} from 'react';
import {useAppDispatch} from '../../hooks';
import {useParams} from 'react-router-dom';
import VideoPlayer from '../../components/player/player';
import PageNotFound from '../page-not-found/page-not-found';
import {useAppSelector} from '../../hooks';
import {getFilm, getFilmStatus} from '../../store/slices/film/selectors';
import {fetchFilm} from '../../store/thunks/film';
import {RequestsStatus} from '../../const';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';
import HelmetComponent from '../../components/helmet-component/helmet-component';

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
    return <LoadingSpinner/>;
  }

  if (filmStatus === RequestsStatus.Failed) {
    return (
      <PageNotFound />
    );
  }

  return (
    currentFilm && (
      <>
        <HelmetComponent
          title='wtw: player'
          description="This player page."
        />
        <VideoPlayer {...currentFilm}/>
      </>
    )
  );
}
