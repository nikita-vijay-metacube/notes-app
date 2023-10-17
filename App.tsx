/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './components/home';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';

function App(): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor={'#A87714'}/>
      <Header />
      <Home />
    </>
  );
}

export default App;
