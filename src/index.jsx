import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { styles } from "./style"
import MyTabs from "./navigation/tabs"
import { store } from './store';
import { init } from './store/sqlite/productsSqlite';

init()
    .then(() => console.log("Database initialized"))
    .catch((err) => {
        console.log("Database fail connect")
        console.log(err.message)
    })

export default function App() {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <MyTabs />
            </NavigationContainer>
        </Provider>
    );
}