import { useState } from 'react';
import { TabsNavigation } from '../tabs-navigation/tabs-navigation';
import { TabDetails } from '../tab-details/tab-details';
import { TabOverview } from '../tab-overview/tab-overview';
import { TabReviews } from '../tab-reviews/tab-reviews';
import { TFilm } from '../../../types/film';
import { Tab } from '../../../const';

type TTabsProps = {
  film: TFilm;
};

export function Tabs({ film }: TTabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>(Tab.Overview);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.values(Tab).map((tab) => (
            <TabsNavigation
              key={tab}
              tab={tab}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))}
        </ul>
      </nav>
      {activeTab === Tab.Overview && <TabOverview film={film} />}
      {activeTab === Tab.Details && <TabDetails film={film} />}
      {activeTab === Tab.Reviews && <TabReviews />}
    </div>
  );
}
