import { STATES /* , SYSTEM_VIEWS */ } from '@/shared/Constants';

const Registration = () => import('@/views/Registration.vue');
const ChangePassword = () => import('@/views/ChangePassword.vue');
const VerifyDetails = () => import('@/views/VerifyDetails.vue');
const ContactInfromation = () => import('@/views/ContactInfromation.vue');
const ProtectYourAccount = () => import('@/views/ProtectYourAccount.vue');

const routes = [
  {
    path: '/',
    component: Registration,
    name: STATES.NAME.REGISTRATION
  },
  {
    path: '/changePassword',
    component: ChangePassword,
    name: STATES.NAME.CHANGE_PASSWORD
  },
  {
    path: '/verifyDetails',
    component: VerifyDetails,
    name: STATES.NAME.VERIFY_DETAILS
  },
  {
    path: '/contactInforamtion',
    component: ContactInfromation,
    name: STATES.NAME.VERIFY_DETAILS
  },
  {
    path: '/protectyouraccount',
    component: ProtectYourAccount,
    name: STATES.NAME.VERIFY_DETAILS
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
