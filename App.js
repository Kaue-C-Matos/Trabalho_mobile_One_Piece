import { GluestackUIProvider, Text, Box, config, Center } from '@gluestack-ui/themed';
import { SafeAreaView, StatusBar } from 'react-native';
import Login from './src/screens/Login';
import CharacterList from './src/screens/CharacterList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharacterDetails from './src/screens/CharacterDetails';

const Stack = createNativeStackNavigator()

export default function App() {
  
  return (
    <GluestackUIProvider config={config.theme}>
      
        <NavigationContainer>      
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Characters' component={CharacterList}/>
            <Stack.Screen name='Details' component={CharacterDetails} options={({route}) =>({title: route.params.character})} />
          </Stack.Navigator>
         </NavigationContainer>
              
    </GluestackUIProvider>
  );
}
