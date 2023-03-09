/* eslint-disable prettier/prettier */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserProfile from '../../screens/UserProfile';
import React from 'react';
import UserPlan from '../../screens/UserPlan';

const Stack = createNativeStackNavigator();

const MainNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="UserProfile" component={UserProfile} />
      <Stack.Screen options={{headerShown: false}} name="UserPlan" component={UserPlan} />
    </Stack.Navigator>
  );
};

export default MainNav;
