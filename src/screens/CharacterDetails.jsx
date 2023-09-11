import { Center, FlatList, Text } from '@gluestack-ui/themed';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CharacterDetails = () => {
    const [details, setDetails] = useState({})

    const route = useRoute();
    const { character } = route.params;

    const fetchDetails = async() =>{
        try {
            const {data} = await axios.get(`https://api.api-onepiece.com/characters/search/name/${character}`)
            setDetails(data)
            console.log(details)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchDetails()
        console.log(details)
    }, [])

    return (
        <Center>
            <FlatList 
                data={details}
                renderItem={({item}) => 
                    <Center>
                        <Text>{item.french_name}</Text>
                        <Text>{item.job}</Text>
                    </Center>
                }
            />
        </Center>
    );
};

export default CharacterDetails;