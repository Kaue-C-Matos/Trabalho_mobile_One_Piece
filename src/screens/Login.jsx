import { Center, Text, Input, InputField, Image, Button, ButtonText } from "@gluestack-ui/themed";
import { ImageBackground } from "react-native";

const bg = {uri: "https://i.pinimg.com/originals/61/89/21/61892182d2c104029a5c1a201f2b4afe.jpg"}
const logo = {uri: "https://www.pngmart.com/files/13/One-Piece-Logo-PNG-Image.png"}

const Login = () => {
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
                <Input variant="rounded" size="md" width="$2/3">
                    <InputField bg="#fff"/>
                </Input>
                
                <Text color="#fff"bold marginTop="$5">Senha:</Text>
                <Input variant="rounded" size="md" width="$2/3">
                    <InputField type="password" bg="#fff"/>
                </Input>

                <Button size="md" variant="solid" marginTop="$5">
                <ButtonText>Entrar </ButtonText>
                </Button>
      
            </Center>
        </ImageBackground>
    );
}

export default Login;