import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CreateScreen, InventoryScreen, CartScreen } from "../../screens"

const Tab = createBottomTabNavigator();


const MyTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Inventory">
            <Tab.Screen name="Create" component={CreateScreen} />
            <Tab.Screen name="Inventory" component={InventoryScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
    );
}

export default MyTabs