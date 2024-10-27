import { View, Text, Image} from "react-native";
import {styles} from "./appointment.style.js"
import icons from "../../constants/icon.js";
import Button from "../button/button.jsx"

function Appointment(props){
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
                    <Text style = {styles.bookingDate}>{props.booking_date}</Text>
                </View>

                <View style = {styles.booking}> 
                    <Image style = {styles.icon} source = {icons.clock}/>
                    <Text style = {styles.bookingHour}>{props.booking_hour}</Text>
                </View>

            </View>

            <View style = {styles.containerButton}>
                <Button text = "Cancelar reserva" theme = "danger"/>
            </View>

        </View>

    </View>
}

export default Appointment;