import { GluestackUIProvider, Text, Box, config, Center } from '@gluestack-ui/themed';
import { SafeAreaView, StatusBar } from 'react-native';
import Login from './src/screens/Login';
import CharacterList from './src/screens/CharacterList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      
        <NavigationContainer>      
          <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Characters' component={CharacterList}/>
          </Stack.Navigator>
         </NavigationContainer>
              
    </GluestackUIProvider>
  );
}
