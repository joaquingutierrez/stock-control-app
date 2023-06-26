import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { styles } from "./style"
import MyTabs from "./navigation/tabs"
import { store } from './store';

export default function App() {

    return (
        <Provider store={store}>
            <NavigationContainer>
                <MyTabs />
            </NavigationContainer>
        </Provider>
    );
}