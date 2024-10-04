// generalRoutes.js

import Signin from '@/Pages/Auth/Signin/Signin';
import Onboarding from '@/Pages/Onboarding/Onboarding';
import { ReactElement } from 'react';
import ChangePassword from '@/Pages/Auth/ChangePassword';
import ForgotPasswordRequest from '@/Pages/Auth/ForgotPasswordRequest';
import SignupStepOne from '@/Pages/Auth/Signup/SignupStepOne';
import SignupStepTwo from '@/Pages/Auth/Signup/SignupStepTwo';
import SignupStepThree from '@/Pages/Auth/Signup/SignupStepThree';
import VerifyEmail from '@/Pages/Auth/VerifyEmail';
import Guest from '@/Pages/Guest/Guest';
import ViewDentist from '@/Pages/Guest/ViewDentist';

interface Route {
  path: string;
  element: ReactElement;
}

const generalRoutes: Route[] = [
  { path: '/signup/stepone', element: <SignupStepOne /> },
  { path: '/signup/steptwo', element: <SignupStepTwo /> },
  { path: '/signup/stepthree', element: <SignupStepThree /> },
  { path: '/verify-email', element: <VerifyEmail /> },
  { path: '/signin', element: <Signin /> },
  { path: '/onboarding', element: <Onboarding /> },
  { path: '/forgot-password', element: <ForgotPasswordRequest /> },
  { path: '/reset-password', element: <ChangePassword /> },
  { path: '/guest/find-a-dentist', element: <Guest /> },
  { path: '/guest/find-a-dentist/view-dentis/:id', element: <ViewDentist /> },
];

export default generalRoutes;
