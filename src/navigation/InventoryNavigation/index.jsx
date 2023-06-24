import { createStackNavigator } from '@react-navigation/stack';

import { CategoriesScreen, ProductsScreen, ProductDetailScreen, } from "../../screens"

const Stack = createStackNavigator();

const InventoryNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
        >
            <Stack.Screen name="Categories" component={CategoriesScreen}
                options={{
                    title: "Categorias"
                }}
            />
            <Stack.Screen name="Products" component={ProductsScreen}
                options={({ route }) => ({
                    title: route.params.name
                })}
            />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen}
                options={({ route }) => ({
                    title: route.params.name
                })}
            />
        </Stack.Navigator>
    );
}

export default InventoryNavigation