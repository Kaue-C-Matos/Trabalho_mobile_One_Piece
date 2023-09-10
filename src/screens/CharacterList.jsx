import { Box, Button, ButtonText, Center, FlatList, HStack, Input, InputField, InputIcon, SearchIcon, Text, } from "@gluestack-ui/themed";
import axios from "axios";
import { useEffect, useState } from "react";
import { ImageBackground } from "react-native";

const CharacterItem = ({character}) =>{
    return(
        <Center>
            <Box marginVertical="$3" shadowColor="$black" hardShadow="5">
                <ImageBackground source={itembg} resizeMode="stretch">
                    <Box  borderWidth="$2" alignItems="center" w="$96" h="$32" justifyContent="center">
                        <Text size="3xl" color="#422d2c" margin="$3" bold>{character.french_name}</Text>
                        {character.bounty === "" ? 
                        <Text color="#422d2c">Não procurado</Text> : 
                        <Text color="#422d2c">฿ {character.bounty}</Text>}
                    </Box>
                </ImageBackground>
            </Box>
        </Center>
    )
}

const itembg={uri: "https://img.freepik.com/free-photo/wooden-floor-background_53876-88628.jpg?w=2000"}
const bg={uri: "https://c1.wallpaperflare.com/preview/580/801/155/wall-brick-old-red-brocken-cracks.jpg"}
const CharacterList = () => {
    const [characters, setCharacters] = useState()
    const [search, setSearch] = useState()
   
    const fetchCharacters = async() =>{
        try {
            const {data} = await axios.get("https://api.api-onepiece.com/characters")
            setCharacters(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        fetchCharacters()
    }, [])

    useEffect(()=>{
        handleSearchClick()
    }, [setSearch])

    const handleSearchClick = async() =>{
        try {
            if (search !== ""){
                const {data} = await axios.get(`https://api.api-onepiece.com/characters/search/name/${search}`)
                setCharacters(data)
            } else {
                const {data} = await axios.get("https://api.api-onepiece.com/characters")
                setCharacters(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ImageBackground source={bg} resizeMode="cover">
            <Center height="$full">
                <HStack flexDirection="row">
                <Input margin="$3" borderRadius="$md"  width="$56" bgColor="#fff" >
                    <InputField onChangeText={setSearch}/>
                </Input>
                <Button margin="$3" onPress={()=>handleSearchClick()}>
                    <ButtonText>Pesquisar</ButtonText>
                </Button>
                </HStack>
                <FlatList 
                    data={characters}
                    renderItem={({item}) => <CharacterItem character={item}/>}
                />
            </Center>
        </ImageBackground>
    );
}

export default CharacterList;