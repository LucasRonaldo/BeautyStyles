import React, { JSXElementConstructor } from 'react';
import { Text, View } from 'react-native';
import LoginScreen from './src/login/LoginScreen';
import LoginScreenAdm from './src/login/LoginScreenAdm';
import LoginScreenCliente from './src/login/LoginScreenCliente';

function App():JSX.Element{

  return(
    //<LoginScreenAdm/>
    <LoginScreen/>
    //<LoginScreenCliente/>
  );
}

export default App;