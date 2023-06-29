import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';

import { CreateNavigation, InventoryNavigation, CartNavigation } from '../index';
import { getAllProductsCloud } from '../../store/cloud';
import { getProducts } from '../../store/reducers/productSlice';
import { useEffect } from 'react';

const Tab = createBottomTabNavigator();


const MyTabs = () => {

    const dispatch = useDispatch()

    useEffect(()=> {
        const fetchData = async () => {
            const products = await getAllProductsCloud()
            dispatch(getProducts(products))
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