import { Center, Text, Input, InputField, Image, Button, ButtonText, Alert, AlertIcon, AlertText, InfoIcon, Box, InputIcon, EyeIcon, EyeOffIcon, Icon, Switch, } from "@gluestack-ui/themed";
import { useState } from "react";
import { ImageBackground } from "react-native";

const bg = {uri: "https://i.pinimg.com/originals/61/89/21/61892182d2c104029a5c1a201f2b4afe.jpg"}
const logo = {uri: "https://www.pngmart.com/files/13/One-Piece-Logo-PNG-Image.png"}

const Login = ({ navigation }) => {
    const [user, setUser] = useState()
    const [password, setPassword] = useState()
    const [validUser, setValidUser] = useState()
    const [switchValue, setSwitchValue] = useState(false)

    const validateUser = () =>{
        if (user == "admin" && password == "senha123"){
            setValidUser(true)
        } else {
            setValidUser(false)
        }
    }

    const changeSwitchValue = () =>{
        setSwitchValue(!switchValue)
    }

    return (
        

        <ImageBackground source={bg} resizeMode="cover">
            <Center h="$full">
                <Image 
                    h="$1/4"
                    w="$80"
                    source={logo}
                    marginBottom="$4"
                />

                <Text color="#fff" bold>Nome:</Text>
                <Input variant="rounded" size="md" width="$2/3" >
                    <InputField bg="#fff" onChangeText={setUser}/>
                </Input>
                
                
                <Text color="#fff"bold marginTop="$5">Senha:</Text>
                <Input variant="rounded" size="md" width="$2/3" >
                    <InputField type={switchValue ? "text" : "password"} bg="#fff" onChangeText={setPassword}/>
                    <Switch value={switchValue} onValueChange={changeSwitchValue} bgColor="#fff"/>
                </Input>

                {!validUser ? <Box bg='$yellow100' marginHorizontal="$12" marginVertical="$5">
                    <Text color="red" bold italic  hardShadow="$5" padding="$1">Usuário ou senha incorretos, por favor revise suas credenciais</Text>
                    </Box>
                 : <></>}
                

                <Button size="md" variant="solid" marginTop="$5" 
                    onPress={() =>{validateUser(); 
                        if(validUser){
                            navigation.navigate("Characters")
                        }
                    }}
                >
                <ButtonText>Entrar </ButtonText>
                </Button>
      
            </Center>
        </ImageBackground>
    );
}

export default Login;