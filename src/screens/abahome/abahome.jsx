import { FlatList, Text, View } from "react-native";
import {styles} from "./abahome.style.js";
import {doctors} from "../../constants/data.js"
import Doctor from "../../components/doctor/doctor.jsx"
import icon from "../../constants/icon.js";

function AbaHome(){

    return <View style = {styles.container}>
        <Text style = {styles.text}>Agende seus serviços médicos</Text>

        <FlatList data ={doctors} 
                  keyExtractor={(doctor) => doctor.id_doctor}
                  showsVerticalScrollIndicator ={false}
                  renderItem = {({item}) => {
                    return <Doctor name = {item.name}
                            icon = {item.icon == "M" ? icon.male : icon.female} 
                            specialty = {item.specialty}/>
                  }}
                />

    </View>

}

export default AbaHome;