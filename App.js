import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/views/Login.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer >
        <ThemeProvider theme={{ mode: (false) ? 'dark' : 'light' }}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </>
  );
}