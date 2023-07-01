import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { styles } from "./style"
import MyTabs from "./navigation/tabs"
import { store } from './store';
import { initProducts } from './store/sqlite/productsSqlite';
import { initCart } from './store/sqlite/cartSqlite';

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


export default function App() {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <MyTabs />
            </NavigationContainer>
        </Provider>
    );
}