import {Film} from '../../types/film';
import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';

type ChooseSectionProp = {
  film: Film;
  activeSection: string;
}

const renderSwitch = (film: Film, prop: string) => {
  switch(prop) {
    case 'Overview':
      return <Overview {...film}/>;
    case 'Details':
      return <Details {...film}/>;
    case 'Reviews':
      return <Reviews/>;
    default:
      return <Overview {...film}/>;
  }
};

export default function ChooseSection({film, activeSection}: ChooseSectionProp) {
  return (
    renderSwitch(film, activeSection)
  );
}
