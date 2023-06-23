import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CartScreen } from "../../screens"
import { CreateNavigation, InventoryNavigation } from '../index';

const Tab = createBottomTabNavigator();


const MyTabs = () => {
    return (
        <Tab.Navigator 
        initialRouteName="Inventory"
        screenOptions={{
            headerShown: false
        }}
        >
            <Tab.Screen name="Create" component={CreateNavigation} />
            <Tab.Screen name="Inventory" component={InventoryNavigation} />
            <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
    );
}

export default MyTabs