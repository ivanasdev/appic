import React from 'react';
import navigationStrings from '../constants/navigationStrings';

import TabRoutes from './TabRoutes';
import {Login, Profile, Signup} from '../Screens';
import CompleteSignup from '../Screens/Signup/CompletSignup';
import ContactData from '../Screens/Signup/ContactUserData';
import Beneficiaries from '../Screens/Beneficiaries/Beneficiaries';
import BankData from '../Screens/Signup/UserBankData';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name={navigationStrings.TABS} component={TabRoutes} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={Signup} />
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={navigationStrings.PROFILE} component={Profile} />
      <Stack.Screen name={navigationStrings.COMPLETESIGNUP} component={CompleteSignup} />
      <Stack.Screen name={navigationStrings.CONTACTDATA} component={ContactData} />
      <Stack.Screen name={navigationStrings.BENEFICIARIES} component={Beneficiaries} />
      <Stack.Screen name={navigationStrings.BANKDATA} component={BankData} />
    </>
  );
}
