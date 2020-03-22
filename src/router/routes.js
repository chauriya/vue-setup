import { STATES /* , SYSTEM_VIEWS */ } from '@/shared/Constants';

const Registration = () => import('@/views/About.vue');
//const PageNotFound = () => import('@/components/PageNotFound.vue');

const routes = [
  {
    path: '/',
    component: Registration,
    name: STATES.NAME.REGISTRATION
  } /* ,
  {
    path: '/notFound',
    component: PageNotFound,
    name: SYSTEM_VIEWS.PAGE_NOT_FOUND
  } */
  // { path: '/redirect', component: Redirect, name: 'redirect' },
  // { path: '/404', component: Error, name: '404'}
];

export default routes;
