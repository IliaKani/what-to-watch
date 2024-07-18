import {Film} from '../../types/film';
import Overview from '../overview/overview';
import Details from '../details/details';
import Reviews from '../reviews/reviews';
import {Comment} from '../../types/comment';

type ChooseSectionProp = {
  film: Film;
  comments: Comment[];
  activeSection: string;
}

const renderSwitch = ({film, comments, activeSection}: ChooseSectionProp) => {
  switch(activeSection) {
    case 'Overview':
      return <Overview {...film}/>;
    case 'Details':
      return <Details {...film}/>;
    case 'Reviews':
      return <Reviews comments={comments}/>;
    default:
      return <Overview {...film}/>;
  }
};

export default function ChooseSection({film, comments, activeSection}: ChooseSectionProp) {
  return (
    renderSwitch({film, comments, activeSection})
  );
}
