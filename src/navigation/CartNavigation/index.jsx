import { createStackNavigator } from '@react-navigation/stack';

import { CategoriesCartScreen, ProductsCartScreen } from "../../screens"

const Stack = createStackNavigator();

const CartNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="CategoriesCart"
        >
            <Stack.Screen name="CategoriesCart" component={CategoriesCartScreen}
                options={{
                    title: "Categorias"
                }}
            />
            <Stack.Screen name="ProductsCart" component={ProductsCartScreen}
                options={({ route }) => ({
                    title: route.params.name
                })}
            />
        </Stack.Navigator>
    );
}

export default CartNavigation