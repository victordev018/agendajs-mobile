import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AbaHome from "../abahome/abahome";
import AbaCalendar from "../abacalendar/abacalendar";
import AbaProfile from "../abaprofile/abaprofile";
import icon from "../../constants/icon.js";
import { Image, Text } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/theme";

const Tab = createBottomTabNavigator();

function Main(){
    return <Tab.Navigator>
                <Tab.Screen name = "Home" component={AbaHome} options={{
                    //unmountOnBlur : true,   // reassemble the screen
                    headerTitleAlign : "center",
                    headerTitle : () =>{
                        return <Image source={icon.logo} style = {{width : 125,height : 29,}}/>;
                    },
                    tabBarShowLabel : false,
                    tabBarIcon : ({focused}) => {
                        return <Image source={icon.home} style = {
                            {
                                width : 30,
                                height : 30,
                                opacity : focused ? 1 : 0.3
                            }
                        }/>;
                    }
                }}/>

                <Tab.Screen name = "Calendar" component={AbaCalendar} options={{
                    unmountOnBlur : true,   // reassemble the screen
                    headerTitleAlign : "center",
                    headerTitle : () => {
                        return <Text style = {{fontSize: FONT_SIZE.xl, color : COLORS.blue}}>Minhas Reservas</Text>;
                    },
                    tabBarShowLabel : false,
                    tabBarIcon : ({focused}) => {
                        return <Image source={icon.calendar} style = {
                            {
                                width : 30,
                                height : 30,
                                opacity : focused ? 1 : 0.3
                            }
                        } />
                    }
                }}/>

                <Tab.Screen name = "Profile" component={AbaProfile} options={{
                    unmountOnBlur : true,   // reassemble the screen
                    headerTitleAlign : "center",
                    headerTitle : () => {
                        return <Text style = {{fontSize: FONT_SIZE.xl, color : COLORS.blue}}>Meu Perfil</Text>;
                    },
                    tabBarShowLabel : false,
                    tabBarIcon : ({focused}) => {
                        return <Image source={icon.profile} style = {
                            {
                                width : 30,
                                height : 30,
                                opacity : focused ? 1 : 0.3
                            }
                        } />
                    }
                }}/>
            </Tab.Navigator>
}

export default Main;