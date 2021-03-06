import React, {useEffect, useRef, useState} from 'react';
import $ from 'dom7';

import {App, f7, Link, Toolbar, View, Views} from 'framework7-react';
import PWA from '../js/pwa';
import routes from '../js/routes';

window.f7 = undefined //handy global. will be set in AppComponent below
window.f7router = undefined //handy global. will be set in AppComponent below

/**
 * bootstrap framework 7 app. Has f7params
 * @returns {JSX.Element}
 * @constructor
 */
const AppComponent = () => {
  const [activeTab, setActiveTab] = useState('games');
  const previousTab = useRef(null);
  useEffect(() => {
    previousTab.current = activeTab;
  }, [activeTab]);

  // Framework7 Parameters
  // configure routes here
  const f7params = {
    name: 'auto',
    theme: 'md',
    routes,
    autoDarkTheme: true,
  };

  if (process.env.NODE_ENV === 'production') {
    // Register service worker in production mode only
    PWA.init();
  }

  function test_goto(){
    console.log(`goto pressed`)
    const f7r = window.f7router
    f7r.navigate('/games/99')
    /*f7r.navigate({
      name: 'games',
      params: {gameid: 88},
    })*/
  }

  function onTabLinkClick(tab){
    if (previousTab.current !== activeTab) return;
    if (activeTab === tab) {
      $(`#view-${tab}`)[0].f7View.router.back();
    }
  }

  return (
    <App params={f7params}>
      {<Views tabs className="safe-areas">
        <Toolbar tabbar labels bottom>
          <Link
            onClick={() => onTabLinkClick('games')}
            tabLink="#view-games"
            tabLinkActive
            iconF7="today"
            text="Games"
          />
          <Link
            onClick={() => onTabLinkClick('oldgames')}
            tabLink="#view-oldgames"
            iconF7="layers_alt_fill"
            text="Old Games"
          />

        </Toolbar>

        <View id="view-games" onTabShow={() => setActiveTab('games')} main tab tabActive url="/games/" onViewInit={() => {
          window.f7 = f7
          window.f7router = f7.views.main.router
        }} />
        <View id="view-oldgames" onTabShow={() => setActiveTab('oldgames')} tab url="/oldgames/" />

      </Views>
      }
    </App>
  );
}

export default AppComponent;
