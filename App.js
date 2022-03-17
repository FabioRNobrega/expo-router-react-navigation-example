import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Admin from './components/Admin';
import Dashboard from './components/Dashboard';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['https://mychat.com', 'mychat://'],
  config: {
    screens: {
      Home: '',
      Admin: 'admin',
      Dashboard: 'admin/dashboard'
    }
  },
};


export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Admin" component={Admin} options={{ headerShown: false }}  />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
