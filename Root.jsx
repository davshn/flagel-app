import { ThemeProvider } from 'styled-components/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/views/Login.jsx';
import CreateAcount from './src/views/CreateAcount.jsx';
import ForgotPass from './src/views/ForgotPass.jsx';
import Home from './src/views/Home.jsx';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function Root() { 
    const modes = useSelector(state=>state.darkModeReducer.darkMode);
    return (
        <>
            <NavigationContainer >
                <ThemeProvider theme={{ mode: (modes) ? 'dark' : 'light' }}>
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="CreateAccount" component={CreateAcount} />
                        <Stack.Screen name="ForgotPassword" component={ForgotPass} />
                        <Stack.Screen name="Home" component={Home}/> 
                    </Stack.Navigator>
                </ThemeProvider>
            </NavigationContainer>
        </>
    )
}