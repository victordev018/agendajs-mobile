import { FlatList, Text, View } from "react-native";
import {styles} from "./abacalendar.style.js";
import {appointments} from "../../constants/data.js"
import Appointment from "../../components/appointment/appointment.jsx";

function AbaCalendar(){

    return <View style = {styles.container}>

        <FlatList data ={appointments} 
                  keyExtractor={(appointment) => appointment.id_appointment}
                  showsVerticalScrollIndicator ={false}
                  renderItem = {({item}) => {
                    return <Appointment service = {item.service} 
                                        doctor = {item.doctor} 
                                        specialty = {item.specialty}
                                        booking_date = {item.booking_date} 
                                        booking_hour = {item.booking_hour}
                            />
                  }}
                />

    </View>

}

export default AbaCalendar;