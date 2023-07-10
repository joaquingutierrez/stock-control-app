import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { styles } from "./style"
import MyTabs from "./navigation/tabs"
import { store } from './store';
import { initProducts } from './store/sqlite/productsSqlite';
import { initCart } from './store/sqlite/cartSqlite';
import { initCategories } from './store/sqlite/categorySqlite';

initProducts()
    .then(() => console.log("Database products initialized"))
    .catch((err) => {
        console.log("Database fail connect")
        console.log(err.message)
    })

initCart()
    .then(() => console.log("Database cart initialized"))
    .catch((err) => {
        console.log("Database fail connect")
        console.log(err.message)
    })

initCategories()
    .then(() => console.log("Database categories initialized"))
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