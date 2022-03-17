import React from 'react';
import { View, Button } from 'react-native';

const NavigationToAdmin = props => {
  props.navigation.navigate('Admin')
}

const Home = props => {
    return (
      <View style={{ width: '100%', height: '100vh'}}>
        <iframe src='https://museucomputacao.github.io' width={'100%'} height={'100%'} frameborder={0} />
      </View>
    );
  }

export default Home;