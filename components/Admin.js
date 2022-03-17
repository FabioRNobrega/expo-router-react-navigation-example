import React from 'react';
import { View, Button, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { Link } from '@react-navigation/native'

const NavigationToAdmin = props => {
  props.navigation.navigate('Dashboard')
}

const Admin = props => {
  const [text, onChangeText] = React.useState('Email');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView>
        <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Senha"
          keyboardType="numeric"
        />
        <Button title="Login" onPress={ () => NavigationToAdmin(props)} />
        <Link to="/" style={{ marginTop: '20px', color: 'blue', textAlign: 'center'}}> VOLTAR PARA MUSEU </Link>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


export default Admin;