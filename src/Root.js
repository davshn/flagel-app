import { ThemeProvider } from 'styled-components/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './views/Login';
import CreateAcount from './views/CreateAcount';
import ForgotPass from './views/ForgotPass';
import Home from './views/Home';
import ThreadDetails from './views/ThreadDetails';
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
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="ThreadDetails" component={ThreadDetails}/>                         
                    </Stack.Navigator>
                </ThemeProvider>
            </NavigationContainer>
        </>
    )
}