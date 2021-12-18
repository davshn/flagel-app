import { NavigationContainer } from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import Login from './src/views/Login';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <ThemeProvider theme={{ mode: (true)?'dark':'light' }}>
          <Login />
        </ThemeProvider>
      </NavigationContainer>
    </>
  );
}