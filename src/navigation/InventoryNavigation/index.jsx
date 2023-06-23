import { createStackNavigator } from '@react-navigation/stack';

import { CategoriesScreen, ProductsScreen, ProductDetailScreen, } from "../../screens"

const Stack = createStackNavigator();

const InventoryNavigation = () => {
    return (
        <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name="Categories" component={CategoriesScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        </Stack.Navigator>
    );
}

export default InventoryNavigation