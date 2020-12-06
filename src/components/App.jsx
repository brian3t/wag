import React, {useEffect, useRef, useState} from 'react';
import $ from 'dom7';

import {App,} from 'framework7-react';

import PWA from '../js/pwa';
import routes from '../js/routes';
import HomePage from "./Test"

/**
 * bootstrap framework 7 app. Has f7params
 * @returns {JSX.Element}
 * @constructor
 */
const AppComponent = () => {
  const [activeTab, setActiveTab] = useState('today');
  const previousTab = useRef(null);
  useEffect(() => {
    previousTab.current = activeTab;
  }, [activeTab]);

  // Framework7 Parameters
  const f7params = {
    name: 'App Store',
    theme: 'ios',
    routes,
    autoDarkTheme: true,
  };
  if (process.env.NODE_ENV === 'production') {
    // Register service worker in production mode only
    PWA.init();
  }

  function onTabLinkClick(tab){
    if (previousTab.current !== activeTab) return;
    if (activeTab === tab) {
      $(`#view-${tab}`)[0].$f7.dialog.alert('link clicked');//Object(dom7__WEBPACK_IMPORTED_MODULE_2__["default"])("#view-".concat(tab))[0].f7View.app
      $(`#view-${tab}`)[0].f7View.router.back();
    }
  }

  return (
    <App params={f7params}>

      {
        <HomePage />
        /*<Views tabs className="safe-areas">
          <Toolbar tabbar labels bottom>
            <Link
              onClick={() => onTabLinkClick('today')}
              tabLink="#view-today"
              tabLinkActive
              iconF7="today"
              text="Today"
            />
            <Link
              onClick={() => onTabLinkClick('games')}
              tabLink="#view-games"
              iconF7="rocket_fill"
              text="Games"
            />
            <Link
              onClick={() => onTabLinkClick('apps')}
              tabLink="#view-apps"
              iconF7="layers_alt_fill"
              text="Apps"
            />
            <Link
              onClick={() => onTabLinkClick('arcade')}
              tabLink="#view-arcade"
              iconF7="gamecontroller_alt_fill"
              text="Arcade"
            />
            <Link
              onClick={() => onTabLinkClick('search')}
              tabLink="#view-search"
              iconF7="search"
              text="Search"
            />
          </Toolbar>

          <View id="view-today" onTabShow={() => setActiveTab('today')} main tab tabActive url="/today/" />
          <View id="view-games" onTabShow={() => setActiveTab('games')} tab url="/games/" />
          <View id="view-apps" onTabShow={() => setActiveTab('apps')} tab url="/apps/" />
          <View id="view-arcade" onTabShow={() => setActiveTab('arcade')} tab url="/arcade/" />
          <View id="view-search" onTabShow={() => setActiveTab('search')} tab url="/search/" />

        </Views>*/
      }
    </App>
  );
};

export default AppComponent;
