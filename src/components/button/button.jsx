import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";

function Button(props){

    function cliclAlert(){
        Alert.alert("you're click in me");
    }

    return <TouchableOpacity
            style={ [styles.btn, props.theme == "danger" ? styles.danger : styles.primary] }
            onPress={cliclAlert} 
            >    
            <Text style = {styles.text}
                > {props.text} 
            </Text>
        </TouchableOpacity>
}

export default Button;