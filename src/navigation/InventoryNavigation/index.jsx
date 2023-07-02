import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';

import { CategoriesScreen, ProductsScreen, ProductDetailScreen, EditProductScreen, EditCategotyScreen, AppOptionsScreen } from "../../screens"
import { colors } from '../../constants/theme';

const Stack = createStackNavigator();

const InventoryNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
        >
            <Stack.Screen name="Categories" component={CategoriesScreen}
                options={({ navigation }) => ({
                    title: "Categorias",
                    headerRight: () => <Button color={colors.ok} title="Opciones" onPress={() => navigation.navigate("AppOptions")} />
                })}
            />
            <Stack.Screen name="Products" component={ProductsScreen}
                options={({ route }) => ({
                    title: route.params.name
                })}
            />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen}
                options={({ navigation, route }) => ({
                    title: route.params.name,
                    headerRight: () => <Button color={colors.ok} onPress={() => navigation.navigate("ProductEdit", { name: route.params.name, id: route.params.id })} title="Editar" />
                })}
            />
            <Stack.Screen name="ProductEdit" component={EditProductScreen}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
            <Stack.Screen name="CategoryEdit" component={EditCategotyScreen}
                options={({ route }) => ({
                    title: "Editar " + route.params.item.title,
                })}
            />
            <Stack.Screen name="AppOptions" component={AppOptionsScreen}
                options={{
                    title: "Opciones"
                }}
            />
        </Stack.Navigator>
    );
}

export default InventoryNavigation