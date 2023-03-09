import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNav from './src/Components/Navigation/MainNav';

const MyComponent = () => {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  );
};

export default MyComponent;
