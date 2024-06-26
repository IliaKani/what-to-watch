import {useParams} from 'react-router-dom';
import Header from '../../components/header/header';
import ReviewForm from '../../components/review-form/review-form';
import PageNotFound from '../page-not-found/page-not-found';
import {Film as FilmType} from '../../types/film';

type AddReviewProps = {
  films: FilmType[];
}

export default function AddReview({films}: AddReviewProps) {
  const {id} = useParams();
  const currentFilm: FilmType | undefined = films.find((film : FilmType) => film.id === Number(id));

  if (!currentFilm) {
    return (
      <PageNotFound />
    );
  }

  const {
    name,
    posterImage,
    previewImage,
  } = currentFilm;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={previewImage} alt={name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header/>
        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width={218} height={327} />
        </div>
      </div>
      <div className="add-review">
        <ReviewForm/>
      </div>
    </section>
  );
}
