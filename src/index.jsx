import { NavigationContainer } from '@react-navigation/native';


import { styles } from "./style"
import MyTabs from "./navigation/tabs"

export default function App() {

    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}