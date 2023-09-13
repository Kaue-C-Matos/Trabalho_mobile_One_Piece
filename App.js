import { GluestackUIProvider, config, Button, ButtonText } from '@gluestack-ui/themed';
import Login from './src/screens/Login';
import CharacterList from './src/screens/CharacterList';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharacterDetails from './src/screens/CharacterDetails';
import Contact from './src/screens/Contact';

const Stack = createNativeStackNavigator()

const ContactButton = () =>{
  const navigation = useNavigation()

  const handlePress = () =>{
    navigation.navigate('Contato')
  }

  return(
    <Button onPress={handlePress}>
      <ButtonText>Contato</ButtonText>
    </Button>
  )
}

export default function App() {
  
  return (
    <GluestackUIProvider config={config.theme}>
      
        <NavigationContainer>      
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Characters' component={CharacterList} options={{headerRight: ()=><ContactButton/>}}/>
            <Stack.Screen name='Details' component={CharacterDetails} options={({route}) =>({title: route.params.character})} />
            <Stack.Screen name='Contato' component={Contact} />
          </Stack.Navigator>
         </NavigationContainer>
              
    </GluestackUIProvider>
  );
}
