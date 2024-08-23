import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type TTabsNavigationProps = {
  tab: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export function TabsNavigation({
  tab,
  activeTab,
  setActiveTab,
}: TTabsNavigationProps): JSX.Element {
  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <li
      className={classNames('film-nav__item', {
        'film-nav__item--active': activeTab === tab,
      })}
    >
      <NavLink to="#" className="film-nav__link" onClick={handleTabClick}>
        {tab}
      </NavLink>
    </li>
  );
}
