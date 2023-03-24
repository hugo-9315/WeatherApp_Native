import React from 'react';
import Header from './components/Header';
import Cities from './components/Cities';
import Search from './components/Search';
import {ScrollView, Text} from 'react-native';

const App = () => {
  return (
    <>
      <ScrollView>
        <Header />
        <Search />
        <Cities />
      </ScrollView>
    </>
  );
};

export default App;
