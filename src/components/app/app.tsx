import Main from '../../pages/main/main';
import {films} from '../../mocks/films';
import {FilmCardProps} from '../film-card/film-card';

const filmCardMock: FilmCardProps = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: '2014',
  posterUrl: 'the-grand-budapest-hotel-poster.jpg',
  pictureUrl: 'bg-the-grand-budapest-hotel.jpg',
};

function App(): JSX.Element {
  return <Main films={films} filmCardProps={filmCardMock} />;
}

export default App;
