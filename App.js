import Routes from "./src/routs/routs.js";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/auth.js";

function App() {

  return <NavigationContainer>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </NavigationContainer>;

}

export default App;
