import { FlatList, View, Text, Image, Alert } from "react-native";
import { styles } from "./services.style.js";
import icons from "../../constants/icon.js";
import Service from "../../components/service/service.jsx";
import api from "../../constants/api.js";
import { useEffect, useState } from "react";

function Services(props) {


    const [doctorsServices, setDoctorsServices] = useState([]); 

    // const name = props.route.params.name
    const {id_doctor, name, specialty, iconDoctor} = props.route.params;

    function ClickSchedule(id_service){
        // open schedule screen
        props.navigation.navigate("schedule", {
            id_doctor,
            id_service
        });
    }

    async function LoadServices(){

        try{

            const response = await api.get(`/doctors/${id_doctor}/services`);

            if (response.data)
                setDoctorsServices(response.data);
            
        }
        catch(error){
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro tente novamente mais tarde");
        }

    }

    // run when screen loads
    useEffect(()=>{
        LoadServices();
    }, [])

    return <View style = {styles.container}>

        <View style = {styles.banner}>
            <Image source = {iconDoctor == "M"?icons.female:icons.male}/>
            <Text style = {styles.name} >{name}</Text>
            <Text style = {styles.specialty}>{specialty}</Text>

        </View>

        <FlatList data={doctorsServices}
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