import React from "react";

import navigationStrings from "../constants/navigationStrings";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    Home,
    Profile,
    Login,
    Signup,
    About
} from '../Screens'
import { Image } from "react-native";
import imagePath from "../constants/imagePath";
import TempProfile from "../Screens/Profile/Temp";


const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return (

        <Tab.Navigator
            initialRouteName={navigationStrings.HOME}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'green',
                tabBarShowLabel:false,
                tabBarStyle:{
             
                position:"relative",
                    backgroundColor:"#0D5C75",
            
                    
               
                }
                

            }}
        >
            <Tab.Screen
                name={navigationStrings.HOME}
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                style={{
                                    height: 30,
                                    width: 30,
                                    tintColor: focused ? '#fff' : 'gray'
                                }}
                                source={imagePath.icHome} />
                        )
                    }
                }}
            />
            <Tab.Screen
            name={navigationStrings.TEMPPROFILE}
            title="MY PROFILE" 
            component={TempProfile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                style={{
                                    height: 30,
                                    width: 30,
                                    tintColor: focused ? '#fff' : 'gray'
                                }}
                                source={imagePath.icUser} />
                        )
                    }
                }}
               
            />

            <Tab.Screen 
            name={navigationStrings.ABOUT} 
            component={About}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image
                                style={{
                                    height: 30,
                                    width: 30,
                                    tintColor: focused ? '#fff': 'gray'
                                }}
                                source={imagePath.icInfo} />
                        )
                    }
                }}
            />

        </Tab.Navigator>


    )
}


export default TabRoutes