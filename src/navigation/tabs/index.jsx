import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { CreateNavigation, InventoryNavigation, CartNavigation } from '../index';
import { getAllProductsCloud } from '../../store/cloud/productsStoreCloud';
import { getProducts } from '../../store/reducers/productSlice';
import { getAllCategoriesCloud } from '../../store/cloud/categoryStoreCloud';
import { getCategories } from '../../store/reducers/categotySlice';
import { getCartCloud } from '../../store/cloud/cartStoreCloud';
import { getCart } from '../../store/reducers/cartSlice';
import { selectProducts } from '../../store/sqlite/productsSqlite';
import { getPersistence } from '../../store/fileStore';
import { changePersistence } from '../../store/reducers/persistenceSlice';
import { selectCart } from '../../store/sqlite/cartSqlite';
import { selectCategories } from '../../store/sqlite/categorySqlite';

const Tab = createBottomTabNavigator();


const MyTabs = () => {

    const persistence = useSelector(state => state.persistence.data)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = async () => {
            let persistenceData = await getPersistence()
            if (persistenceData) {
                persistenceData = JSON.parse(persistenceData).persistence
                dispatch(changePersistence(persistenceData))
            }
            const products = persistenceData === "local" ? await selectProducts() : await getAllProductsCloud()
            dispatch(getProducts(products))

            const categories = persistence === "local" ? await selectCategories() : await getAllCategoriesCloud()
            dispatch(getCategories(categories))

            const cart = persistence === "local" ? await selectCart() : await getCartCloud()
            dispatch(getCart(cart))
        }
        fetchData()
    }, [persistence])


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