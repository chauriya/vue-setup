import { STATES /* , SYSTEM_VIEWS */ } from '@/shared/Constants';

const Registration = () => import('@/views/Registration.vue');
const ChangePassword = () => import('@/views/ChangePassword.vue');
const VerifyDetails = () => import('@/views/VerifyDetails.vue');

const routes = [
  {
    path: '/',
    component: Registration,
    name: STATES.NAME.REGISTRATION
  },
  {
    path: '/changePassword',
    component: ChangePassword,
    name: STATES.NAME.CHANGEPASSWORD
  },
  {
    path: '/verifyDetails',
    component: VerifyDetails,
    name: STATES.NAME.CHANGEPASSWORD
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
