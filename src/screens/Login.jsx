import { Center, Text, Input, InputField, Image, Button, ButtonText, Switch, Alert, AlertText, } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ImageBackground } from "react-native";

const bg = {uri: "https://i.pinimg.com/originals/61/89/21/61892182d2c104029a5c1a201f2b4afe.jpg"}
const logo = {uri: "https://www.pngmart.com/files/13/One-Piece-Logo-PNG-Image.png"}

const Login = () => {
    const [user, setUser] = useState()
    const [password, setPassword] = useState()
    const [validUser, setValidUser] = useState()
    const [switchValue, setSwitchValue] = useState(false)

    const navigation = useNavigation()

    const validateUser = () =>{
        if (user == "Admin" && password == "Senha123"){
            setValidUser(true)
        } else {
            setValidUser(false)
        }
    }

    const changeSwitchValue = () =>{
        setSwitchValue(!switchValue)
    }

    useEffect(()=>{
        validateUser()
    }, [user, password])

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

                {!validUser ? <Alert mx="$2.5" action="error" variant="solid" width="$2/3" marginTop="$5">
                        <AlertText>
                            Usuário ou senha inválidos, por favor revise suas credenciais
                        </AlertText>
                    </Alert>
                 : <></>}
                

                <Button size="md" variant="solid" marginTop="$5" 
                    onPress={() =>{
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