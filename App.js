/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MenuBerita from './Component/MenuBerita';
import MenuGame from './Component/MenuGame';
import MenuHits from './Component/MenuHits';
import MenuUtama1 from './Component/MenuUtama';

const Header = () => {
    return(
      <Text>Halaman Header</Text>
    );
};

const Footer = () => {
    return (
      <Text>Footer @Niomic</Text>
    );
};

class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <MenuUtama1 />
        <MenuGame />
        <MenuBerita />
        <MenuHits/>
        <Footer />
      </View>
    );
  }
}

export default App;