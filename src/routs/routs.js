import RoutesPrivate from "./routerPrivate.js";
import RoutesPublic from "./routsPublic.js";
import { AuthContext } from "../context/auth.js";
import { useContext } from "react";

function Routes(){

    const {user} = useContext(AuthContext); 
    
    return user.id_user ? <RoutesPrivate/> : <RoutesPublic />;
}

export default Routes;