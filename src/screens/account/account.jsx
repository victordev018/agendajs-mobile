import { Image, TextInput, View, Text, TouchableOpacity, Alert} from "react-native";
import Button from "../../components/button/button.jsx"
import icon from "../../constants/icon.js"
import {styles} from "./account.style.js";
import { useState } from "react";
import api from "../../constants/api.js";

function Account(props){

    // get values of the email and password with hooks
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // function to login
    async function ExecuteAccount(){
        try{
            console.log(email, password);
            const response = await api.post("/users/register", {
                name,
                email,
                password
            });

            if (response.data){
                console.log(response.data)
                Alert.alert(`Conta criada com sucesso, por favor volte para fazer login`);
            }
        }catch(error){
            if (error.response?.data.error)
                Alert.alert(error.response?.data.error);
            else
                Alert.alert("Ocorreu um erro tente novamente mais tarde");
        }
        finally{
            setName("");
            setEmail("");
            setPassword("");
        }
    }

    return <View style={styles.container}>

        <View style = {styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo} />
        </View>

        <View>
            <View style = {styles.containerInput}>
                <TextInput placeholder="Nome" style={styles.input}
                onChangeText={(currentText) => setName(currentText)}
                value={name}
                />
            </View>
            <View style = {styles.containerInput}>
                <TextInput placeholder="E-mail" style={styles.input}
                onChangeText={(currentText) => setEmail(currentText)}
                value={email}
                />
            </View>
            <View style = {styles.containerInput}>
                <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} 
                onChangeText={(currentText) => setPassword(currentText)}
                value={password}
                />   
            </View>
            <Button text="Criar Conta" onPress={ExecuteAccount}/>
        </View>

        <View style={styles.footer}>
            <Text>Já tenho conta.</Text>
            <TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
                <Text style={styles.footerLink}>
                    Fazer login
                </Text>
            </TouchableOpacity>
        </View>

    </View>
    
}

export default Account;