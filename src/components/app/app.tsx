import Main from '../../pages/main/main';
import {FileCardProps} from '../file-card/file-card';

const mockProps: FileCardProps = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: '2014',
  posterUrl: 'the-grand-budapest-hotel-poster.jpg',
  pictureUrl: 'bg-the-grand-budapest-hotel.jpg',
};

function App(): JSX.Element {
  return <Main {...mockProps}/>;
}

export default App;
