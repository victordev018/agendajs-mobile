import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";

function Button(props){

    function cliclAlert(){
        Alert.alert("you're click in me");
    }

    return <TouchableOpacity onPress={cliclAlert} style={styles.btn}>    
            <Text style = {styles.text}> {props.text} </Text>
        </TouchableOpacity>
}

export default Button;