import { useState } from "react";
import { Alert, Text, View } from "react-native";
import {styles} from "./schedule.style.js";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "../../constants/calendar.js";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button.jsx";
import api from "../../constants/api.js";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";


function Schedule(props){

    // data of the doctor and service to confirm schedule
    const {id_doctor, id_service} = props.route.params;
    
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
    const [selectedHour, setSelectedHour] = useState("");


    // function to confirm schedule
    async function ConfirmSchedule(){
        try{

            const response = await api.post("/appointments", {
                id_doctor,
                id_service,
                booking_date : selectedDate,
                booking_hour : selectedHour
            })
    
            if (response.data?.id_appointment)
                props.navigation.popToTop();
        }
        catch(error){
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro tente novamente mais tarde");
        }
    }

    return <View style = {styles.container}>

        <View>
            <Calendar theme={styles.theme} 
                    onDayPress={(day) =>{
                        setSelectedDate(day.dateString)
                    }}
                    markedDates={{
                        [selectedDate] : {selected:true}
                    }}

                    minDate= {new Date().toDateString()}
            />

            <View>
                <Text style={styles.textHour}>Horário</Text>
            </View>

            <View style = {styles.picker}>
                <Picker selectedValue={selectedHour} 
                        onValueChange={(value, index) => {
                            setSelectedHour(value);
                        }}
                        >

                    <Picker.Item label="09:00" value="09:00" />
                    <Picker.Item label="09:30" value="09:30" />
                    <Picker.Item label="10:00" value="10:00" />

                </Picker>
            </View>
        </View>
        

        <View>
            <Button text = "Confirmar Reserva" onPress={ConfirmSchedule}/>
        </View>

    </View>
}

export default Schedule;