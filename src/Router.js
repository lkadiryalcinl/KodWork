import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Pages/Home';
import Detail from './Pages/Detail';
import FavouritedJobs from './Pages/FavouritedJobs';
import { Context } from './Context/Context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Jobs () {
    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{headerShown:false}}
            />
            <Stack.Screen 
                name="Detail" 
                component={Detail}
                options={{headerTintColor:'#c31432',headerTitleAlign:'center'}}
            />
        </Stack.Navigator>
    )
}

function FavouriteJobs() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='FavJobs'
               component={FavouritedJobs}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
    
}

export default() => {
    const[favoriteJobsId,setFavoriteJobsId] = React.useState([]);
    return(
        <Context.Provider value={{favoriteJobsId,setFavoriteJobsId}}>
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name='Jobs'
                    component={Jobs}
                    options={
                        {
                            headerShown:false,
                            drawerActiveTintColor:'#c31432'
                        }
                    }
                />

                <Drawer.Screen
                    name='FavouritedJobs'
                    component={FavouriteJobs}
                    options={
                        {
                            headerShown:false,
                            drawerActiveTintColor:'#c31432'
                            
                        }
                    }
                />
            </Drawer.Navigator>
        </NavigationContainer>           
        </Context.Provider>
    ) 
}