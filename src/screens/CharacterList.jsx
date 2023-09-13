import { Box, Button, ButtonText, Center, FlatList, HStack, Input, InputField, Pressable, Text, } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";

const CharacterItem = ({character}) =>{
    const navigation = useNavigation()
    return(
        <Center>
            <Box marginVertical="$3" shadowColor="$black" hardShadow="5">
                <ImageBackground source={itembg} resizeMode="stretch">
                    <Pressable borderWidth="$2" alignItems="center" w="$96" h="$32" justifyContent="center" onPress={()=>navigation.navigate('Details', {character: character.french_name})}>
                        <Text size="3xl" color="#422d2c" margin="$3" bold>{character.french_name}</Text>
                        {character.bounty === "" ? 
                        <Text color="#422d2c">Não procurado</Text> : 
                        <Text color="#422d2c">฿ {character.bounty}</Text>}
                    </Pressable>
                </ImageBackground>
            </Box>
        </Center>
    )
}

const itembg={uri: "https://img.freepik.com/free-photo/wooden-floor-background_53876-88628.jpg?w=2000"}
const bg={uri: "https://c1.wallpaperflare.com/preview/580/801/155/wall-brick-old-red-brocken-cracks.jpg"}

const CharacterList = ({}) => {
    const [allCharacters, setAllCharacters] = useState([])
    const [search, setSearch] = useState()
    const [currentPage, setCurrentPage] = useState(1)

    const charactersPerPage = 10
   
    const fetchCharacters = async() =>{
        try {
            const {data} = await axios.get("https://api.api-onepiece.com/characters")
            setAllCharacters(data)
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
                if (currentPage > totalPages){
                    setCurrentPage(totalPages)
                }
                setAllCharacters(data)
            } else {
                const {data} = await axios.get("https://api.api-onepiece.com/characters")
                setAllCharacters(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const startIndex = (currentPage -1) * charactersPerPage
    const endIndex = startIndex + charactersPerPage
    
    const charactersToShow = allCharacters.slice(startIndex, endIndex)
    const totalPages = Math.ceil(allCharacters.length / charactersPerPage)

    const handlePreviousPage = () =>{
        if (currentPage >1 ){
            setCurrentPage(currentPage - 1)
        }
    }
    
    const handleNextPage = () =>{
        if (currentPage < totalPages){
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <ImageBackground source={bg} resizeMode="cover">
            <Center height="$full">

                <HStack flexDirection="row" >
                <Input margin="$3" borderRadius="$md"  width="$56" bgColor="#fff" >
                    <InputField onChangeText={setSearch}/>
                </Input>
                <Button margin="$3" onPress={()=>handleSearchClick()}>
                    <ButtonText>Pesquisar</ButtonText>
                </Button>
                </HStack>
                
                <FlatList 
                    data={charactersToShow}
                    renderItem={({item}) => 
                        <CharacterItem character={item}/>
                     }
                />

                <HStack>
                    <Button margin="$2" width="$1/3" onPress={()=> handlePreviousPage() }>
                        <ButtonText fontSize="$xs">Página Anterior</ButtonText>
                    </Button>
                    <Text color="#fff" marginTop="$3" bold>Página {currentPage} de {totalPages}</Text>
                    <Button margin="$2" width="$1/3" onPress={()=> handleNextPage()}>
                        <ButtonText fontSize="$xs">Próxima Página</ButtonText>
                    </Button>
                </HStack>

            </Center>
        </ImageBackground>
    );
}

export default CharacterList;