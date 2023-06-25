import { createStackNavigator } from '@react-navigation/stack';

import { CreateScreen, CreateCategoryScreen, CreateProductScreen, } from "../../screens"

const Stack = createStackNavigator();

const CreateNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="CreateScreen"
        >
            <Stack.Screen name="CreateScreen" component={CreateScreen}
                options={{
                    title: "Crear"
                }}
            />
            <Stack.Screen name="CreateCategory" component={CreateCategoryScreen}
                options={{
                    title: "Crear Categoría"
                }}
            />
            <Stack.Screen name="CreateProduct" component={CreateProductScreen}
                options={{
                    title: "Crear Producto"
                }}
            />
        </Stack.Navigator>
    );
}

export default CreateNavigation