import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { CreateNavigation, InventoryNavigation, CartNavigation } from '../index';
import { getAllProductsCloud } from '../../store/cloud/productsStoreCloud';
import { getProducts } from '../../store/reducers/productSlice';
import { getAllCategoriesCloud } from '../../store/cloud/categoryStoreCloud';
import { getCategories } from '../../store/reducers/categotySlice';
import { getCartCloud } from '../../store/cloud/cartStoreCloud';
import { getCart } from '../../store/reducers/cartSlice';

const Tab = createBottomTabNavigator();


const MyTabs = () => {

    const dispatch = useDispatch()

    useEffect(()=> {
        const fetchData = async () => {
            const products = await getAllProductsCloud()
            dispatch(getProducts(products))

            const categories = await getAllCategoriesCloud()
            dispatch(getCategories(categories))

            const cart = await getCartCloud()
            dispatch(getCart(cart))
        }
        fetchData()
    }, [])


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