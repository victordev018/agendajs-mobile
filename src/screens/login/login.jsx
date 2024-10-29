import { Image, TextInput, View, Text, TouchableOpacity, Alert} from "react-native";
import Button from "../../components/button/button.jsx"
import icon from "../../constants/icon.js"
import {styles} from "./login.style.js";
import { useState } from "react";
import api from "../../constants/api.js"

function Login(props){

    // get values of the email and password with hooks
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // function to login
    async function ExecuteLogin(){
        try{
            console.log(email, password);
            const response = await api.post("/users/login", {
                email,
                password
            });

            if (response.data){
                console.log(response.data)
            }
        }catch(error){
            if (error.response?.data.error)
                Alert.alert(error.response?.data.error);
            else
                Alert.alert("Ocorreu um erro tente novamente mais tarde");
        }
        finally{
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
                <TextInput placeholder="E-mail" style={styles.input}
                onChangeText={(currentText) => setEmail(currentText)}
                />
            </View>
            <View style = {styles.containerInput}>
                <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} 
                onChangeText={(currentText) => setPassword(currentText)}
                value={password}
                />   
            </View>
            <Button text="Acessar" onPress={ExecuteLogin}/>
        </View>

        <View style={styles.footer}>
            <Text>Não tenho conta.</Text>
            <TouchableOpacity onPress={()=>{props.navigation.navigate("account")}}>
                <Text style={styles.footerLink}>
                    Criar conta agora</Text>
            </TouchableOpacity>
        </View>

    </View>
    
}

export default Login;