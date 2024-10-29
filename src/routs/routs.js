import { View } from "react-native";
import RoutesPrivate from "./routerPrivate.js";
import RoutesPublic from "./routsPublic.js";

function Routes(){

    const user = {
        //id_user : 17
    }
    
    return user.id_user ? <RoutesPrivate/> : <RoutesPublic />;
}

export default Routes;