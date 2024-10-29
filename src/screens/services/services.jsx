import { FlatList, View, Text, Image } from "react-native";
import { styles } from "./services.style.js";
import { doctors_services } from "../../constants/data.js";
import icons from "../../constants/icon.js";
import Service from "../../components/service/service.jsx";


function Services(props) {

    // const name = props.route.params.name
    const {id_doctor, name, specialty, iconDoctor} = props.route.params;

    function ClickSchedule(id_service){
        // open schedule screen
        props.navigation.navigate("schedule", {
            id_doctor,
            id_service
        });
    }

    return <View style = {styles.container}>

        <View style = {styles.banner}>
            <Image source = {iconDoctor == "M"?icons.female:icons.male}/>
            <Text style = {styles.name} >{name}</Text>
            <Text style = {styles.specialty}>{specialty}</Text>

        </View>

        <FlatList data={doctors_services}
                  keyExtractor={(serv) => serv.id_service} 
                  showsVerticalScrollIndicator = {false}
                  renderItem={ ({item}) => {
                        return <Service 
                        id_service={item.id_service}
                        description={item.description} 
                        price={item.price} 
                        onPress={ClickSchedule}
                        />
                  } }
                  />

    </View>
}

export default Services;