import { createStackNavigator } from '@react-navigation/stack';

import { CreateScreen, CreateCategoryScreen, CreateProductScreen, } from "../../screens"

const Stack = createStackNavigator();

const CreateNavigation = () => {
    return (
        <Stack.Navigator
        initialRouteName="CreateScreen"
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name="CreateScreen" component={CreateScreen} />
            <Stack.Screen name="CreateCategory" component={CreateCategoryScreen} />
            <Stack.Screen name="CreateProduct" component={CreateProductScreen} />
        </Stack.Navigator>
    );
}

export default CreateNavigation