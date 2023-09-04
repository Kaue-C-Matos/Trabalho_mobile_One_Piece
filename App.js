import { GluestackUIProvider, Text, Box, config, Center } from '@gluestack-ui/themed';
import { SafeAreaView, StatusBar } from 'react-native';
import Login from './src/screens/Login';
import CharacterList from './src/screens/CharacterList';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <GluestackUIProvider config={config.theme}>
          <Login/>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
