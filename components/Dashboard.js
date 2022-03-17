import React from 'react';
import { View, Text } from 'react-native';
import { Link } from '@react-navigation/native'

const NavigationToAdmin = props => {
  props.navigation.navigate('Dashboard')
}

const Dashboard = props => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text  style={{ fontWeight: 'bold', fontSize: '32px', color: '#000' }} > ADMIN DASHBOARD </Text>
        <Link to="/" style={{ marginTop: '20px', color: 'blue', textAlign: 'center'}}> VOLTAR PARA MUSEU </Link>
      </View>
    );
  }

export default Dashboard;