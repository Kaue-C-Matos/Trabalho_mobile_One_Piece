import { Center, Text, } from "@gluestack-ui/themed";
import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";

const CharacterItem = ({character}) =>{
    return(
        <Center>
            <Text>Nome: {character.french_name}</Text>
        </Center>
    )
}

const CharacterList = () => {
    const [characters, setCharacters] = useState()

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

    return (
        <Center>
            <FlatList 
                data={characters}
                renderItem={({item}) => <CharacterItem character={item}/>}
            />
        </Center>
    );
}

export default CharacterList;