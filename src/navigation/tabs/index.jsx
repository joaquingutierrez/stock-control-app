import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CreateNavigation, InventoryNavigation, CartNavigation } from '../index';

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
            <Tab.Screen name="Cart" component={CartNavigation} />
        </Tab.Navigator>
    );
}

export default MyTabs