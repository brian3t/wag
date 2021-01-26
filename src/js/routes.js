import Today from '../pages/Today';
import Games from '../pages/Games';
import Oldgames from "../pages/Oldgames"

const routes = [
  {
    path: '/today/',
    component: Today,
  },
  {
    name: 'games',
    path: '/games/:gameid?',
    component: Games,
  },
  {
    path: '/oldgames/',
    component: Oldgames,
  },
  {
    path: '/app/:id',
    asyncComponent: () => import(/* webpackChunkName: "app-details" *//* webpackPreload: true */ '../pages/AppDetails'),
  },
  {
    path: '/account/',
    popup: {
      asyncComponent: () => import(/* webpackChunkName: "account" *//* webpackPreload: true */ '../pages/Account'),
    },
  },
  {
    path: '(.*)',
    asyncComponent: () => import(/* webpackChunkName: "404" */ '../pages/404'),
  },
];

export default routes;
