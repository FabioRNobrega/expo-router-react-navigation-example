import React from 'react';
import { View, Button } from 'react-native';

const NavigationToAdmin = props => {
  props.navigation.navigate('Home')
}

const Admin = props => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="GO TO HOME" onPress={ () => NavigationToAdmin(props)} />
      </View>
    );
  }

export default Admin;