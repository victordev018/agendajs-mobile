import { View, Text, Image, Alert} from "react-native";
import {styles} from "./appointment.style.js"
import icons from "../../constants/icon.js";
import Button from "../button/button.jsx"
import api from "../../constants/api.js";

function Appointment(props){

    // 2024-11-23T08:00
    const dt = new Date(props.booking_date + "T" + props.booking_hour);

    return <View style= {styles.appointment}>

        <Text style = {styles.name}>
            {props.service} - {props.doctor}
        </Text>
        <Text style = {styles.specialty}>
            {props.specialty}
        </Text>

        <View style = {styles.container}>

            <View style = {styles.containerBooking}>

                <View style = {styles.booking}> 
                    <Image style = {styles.icon} source={icons.calendar}/>
                    <Text style = {styles.bookingDate}>{dt.toLocaleDateString()}</Text>
                </View>

                <View style = {styles.booking}> 
                    <Image style = {styles.icon} source = {icons.clock}/>
                    <Text style = {styles.bookingHour}>{props.booking_hour}h</Text>
                </View>

            </View>

            <View style = {styles.containerButton}>
                <Button text = "Cancelar reserva" theme = "danger" onPress={() => props.onPress(props.id_appointment)}/>
            </View>

        </View>

    </View>
}

export default Appointment;