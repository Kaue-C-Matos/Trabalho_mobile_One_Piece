import { Box, Center, FlatList, Text, VStack } from '@gluestack-ui/themed';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ImageBackground } from 'react-native';

const boxBg = { uri: "https://img.freepik.com/free-photo/wooden-floor-background_53876-88628.jpg?w=2000" }
const bg = { uri: "https://c1.wallpaperflare.com/preview/580/801/155/wall-brick-old-red-brocken-cracks.jpg" }

const CharacterDetails = () => {
    const [details, setDetails] = useState({})
    const [crewName, setCrewName] = useState("")
    const [fruitName, setFruitName] = useState("")
    const [secFruitName, setSecFruitName] = useState("")

    const route = useRoute()
    const { character } = route.params;

    const fetchDetails = async () => {
        try {
        const { data } = await axios.get(`https://api.api-onepiece.com/characters/search/name/${character}`);
        const characterData = data[0];
        setDetails(characterData);

        const crewResponse = await axios.get(`https://api.api-onepiece.com/crews/${characterData.crew_id}`);
        setCrewName(crewResponse.data.french_name)
            
        const fruitResponse = await axios.get(`https://api.api-onepiece.com/fruits/${characterData.fruit_id}`);
        setFruitName(fruitResponse.data.roman_name)
        
        const secFruitResponse = await axios.get(`https://api.api-onepiece.com/fruits/${characterData.second_fruit_id}`);
        setSecFruitName(secFruitResponse.data.roman_name)
        
        } catch (error) {
        console.log(error);
        }
    }
  
  useEffect(() => {
    fetchDetails()
  }, [])

  return (
    <ImageBackground source={bg} resizeMode='cover'>
      <Center h="$full">
        <FlatList
          data={[details]}
          renderItem={({ item }) =>
            <Box marginTop="$48">

              <ImageBackground source={boxBg} resizeMode='cover'>
                <Box borderWidth="$2" alignItems="center" justifyContent="center" w="$80">
                  <Text color='#422d2c' bold size='4xl' marginBottom="$10">{item.french_name}</Text>

                  <VStack space='sm' alignItems='center'>
                    <Text color='#422d2c' bold>Cargo: {item.job}</Text>
                    <Text color='#422d2c' bold>Altura: {item.size}</Text>
                    <Text color='#422d2c' bold>Idade: {item.age}</Text>
                    <Text color='#422d2c' bold>Status: {item.status}</Text>
                    <Text color='#422d2c' bold>Bando: {crewName}</Text>
                    {fruitName !== "" ?  
                      <Text color='#422d2c' bold>Akuma no mi: {fruitName}</Text> : 
                      <Text color='#422d2c' bold>Não possui akuma no mi</Text>
                    }
                    {secFruitName !== "" ?
                      <Text color='#422d2c' bold>Segunda akuma no mi: {secFruitName}</Text> : 
                      <></>
                    }  
                  </VStack>

                  {item.bounty === "" ? 
                    <Text color="#422d2c" bold size='2xl' marginTop="$10">Não procurado</Text> : 
                    <Text color='#422d2c' bold size='2xl' marginTop="$10">฿ {item.bounty}</Text>
                  }
                </Box>
          </ImageBackground>
            </Box>
          }
          />
      </Center>
    </ImageBackground>
  );
};

export default CharacterDetails;
