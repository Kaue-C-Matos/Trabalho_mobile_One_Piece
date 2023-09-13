import { Alert,  AlertText, Button, ButtonText, Center, FormControl, FormControlLabel, FormControlLabelText, 
    Input, InputField, Text, Textarea, TextareaInput, View } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";

const Contact = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [numero, setNumero] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [validContact, setValidContact] = useState(false)

    const checkContact = () =>{
        if(nome == "" || email == "" || numero == "" || mensagem == ""){
            setValidContact(false)
        } else{
            setValidContact(true)
        }
    }

    useEffect(()=>{
        checkContact()
        console.log(validContact)
    }, [nome, email, numero, mensagem])

    const handlePress = () =>{
        setNome("")
        setEmail("")
        setNumero("")
        setMensagem("")
    }

    return (
        <View justifyContent="flex-start" alignItems="flex-start"   bg='#edf3fc' width="$full" height="$full">
            <Center marginHorizontal="$5" justifyContent="flex-start" alignItems="flex-start">
                <Text size="3xl" marginBottom="$5">Entre em contato</Text>

                    <FormControl size="md">
                        <FormControlLabel>
                            <FormControlLabelText>Nome</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField bgColor="#fff" onChangeText={setNome} value={nome}/>
                        </Input>
                        
                        <FormControlLabel>
                            <FormControlLabelText>Email</FormControlLabelText>
                        </FormControlLabel>
                        <Input >
                            <InputField bgColor="#fff" onChangeText={setEmail} value={email}/>
                        </Input>

                        <FormControlLabel>
                            <FormControlLabelText>Número</FormControlLabelText>
                        </FormControlLabel>
                        <Input>
                            <InputField bgColor="#fff" onChangeText={setNumero} value={numero}/>
                        </Input>

                        <FormControlLabel>
                            <FormControlLabelText>Mensagem</FormControlLabelText>
                        </FormControlLabel>
                        <Textarea>
                            <TextareaInput bgColor="#fff" width="$96" onChangeText={setMensagem} value={mensagem}/>
                        </Textarea>

                    </FormControl>

                    {!validContact ? <Alert mx="$2.5" action="error" variant="solid" width="$2/3" marginTop="$5">
                        <AlertText>
                            Por favor, preencha os campos acima
                        </AlertText>
                    </Alert>
                    : <></>}

                    <Button size="md" variant="solid" marginTop="$5" onPress={()=>{
                        if (validContact){
                            handlePress()
                        }
                    }}>
                        <ButtonText>Enviar</ButtonText>
                    </Button>

            </Center>

        </View>
    );
}

export default Contact;