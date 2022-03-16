import React from 'react';
import { View, Button } from 'react-native';

const NavigationToAdmin = props => {
  props.navigation.navigate('Admin')
}

const Home = props => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="GO TO ADMIN" onPress={ () => NavigationToAdmin(props)} />
      </View>
    );
  }

export default Home;