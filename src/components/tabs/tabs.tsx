import {TABS} from '../../const';
import Tab from '../tab/tab';

type TabsProp = {
  activeTab: string;
  onClick: (value: string) => void;
}

export default function Tabs({activeTab, onClick}: TabsProp) {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {
          TABS.map((item) => <Tab key={item} value={item} isActive={item === activeTab} onClick={onClick} />)
        }
      </ul>
    </nav>
  );
}

