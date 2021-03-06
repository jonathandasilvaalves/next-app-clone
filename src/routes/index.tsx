import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignInOne from '../pages/SignInOne';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
        <Auth.Screen name="SignIn" component={SignInOne} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
