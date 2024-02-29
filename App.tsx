import React, { JSXElementConstructor } from 'react';
import { StatusBar, Text, View } from 'react-native';
import LoginScreen from './src/login/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/assets/Routes/Index';
import LoginScreenAdm from './src/login/LoginScreenAdm';
import LoginScreenCliente from './src/login/LoginScreenCliente';

function App():JSX.Element{

  return(

    <NavigationContainer>
      <StatusBar backgroundColor="#38A69D" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
    //<LoginScreenAdm/>
    //<LoginScreen/>
    //<LoginScreenCliente/>
  );
}

export default App;