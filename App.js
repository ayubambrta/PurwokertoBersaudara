import React from 'react';
import {Text, View, Image} from 'react-native';
import {AppHeader, AppContent, AppFooter} from './AppCustomComponents'
import style from './AppStyle'

const HelloWorldApp = () => {
  return (
    <View style={style.container}>
      <AppHeader/>
      <AppContent/>
      <AppFooter/>
    </View>
  )
}

export default HelloWorldApp;