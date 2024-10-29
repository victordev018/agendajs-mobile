import { FlatList, Text, View } from "react-native";
import {styles} from "./abahome.style.js";
import {doctors} from "../../constants/data.js"
import Doctor from "../../components/doctor/doctor.jsx"

function AbaHome(props){

  function ClickDoctor(id_doctor, name, specialty, icon){
    // open screen service
    props.navigation.navigate("services", {
      id_doctor,
      name, 
      specialty,
      icon
    });
  }

    return <View style = {styles.container}>
        <Text style = {styles.text}>Agende seus serviços médicos</Text>

        <FlatList data ={doctors} 
                  keyExtractor={(doctor) => doctor.id_doctor}
                  showsVerticalScrollIndicator ={false}
                  renderItem = {({item}) => {
                    return <Doctor 
                            id_doctor={item.id_doctor}
                            name = {item.name}
                            icon = {item.icon} 
                            specialty = {item.specialty}
                            onPress={ClickDoctor}
                            />
                  }}
                />

    </View>

}

export default AbaHome;