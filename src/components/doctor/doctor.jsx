import { Image, TouchableOpacity, Text, View } from "react-native";
import { styles } from "./doctor.style";
import icon from "../../constants/icon.js";

function Doctor(props){
    return <TouchableOpacity style = {styles.doctor} onPress={()=> {
        props.onPress(props.id_doctor, props.name, props.specialty, props.icon);
    }}
    >
        <Image source = {props.icon == "F"?icon.female:icon.male} style = {styles.icon}/>
        <View>
            <Text style = {styles.name}>{props.name}</Text>
            <Text style = {styles.specialty}>{props.specialty}</Text>
        </View>
    </TouchableOpacity>
}

export default Doctor;