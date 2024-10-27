import { View , Text} from "react-native";
import { styles } from "./abaprofile.style";

function AbaProfile(){
    return <View style = {styles.container}>
        
        <View style = {styles.item}>
            <Text style = {styles.title}>Nome</Text>
            <Text style = {styles.text}>Joao Victor</Text>
        </View>

        <View style = {styles.item}>
            <Text style = {styles.title}>Email</Text>
            <Text style = {styles.text}>joawrt85@gmail.com</Text>
        </View>
    </View>
}

export default AbaProfile;