import { STATES /* , SYSTEM_VIEWS */ } from '@/shared/Constants';

const Registration = () => import('@/views/Registration.vue');
const ChangePassword = () => import('@/views/ChangePassword.vue');
const VerifyDetails = () => import('@/views/VerifyDetails.vue');
const ContactInfromation = () => import('@/views/ContactInfromation.vue');
const ProtectYourAccount = () => import('@/views/ProtectYourAccount.vue');
const ProtectYourAccountCode = () =>
  import('@/views/ProtectYourAccountCode.vue');

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
    name: STATES.NAME.Contact_Infromation
  },
  {
    path: '/protectYourAccount',
    component: ProtectYourAccount,
    name: STATES.NAME.Protect_Your_Account
  },
  {
    path: '/protectYourAccountCode',
    component: ProtectYourAccountCode,
    name: STATES.NAME.Protect_Your_Account_Code
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
