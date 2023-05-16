import React from "react";
import {View, Text, Image, ScrollView, Pressable} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStack from "./MainStack";

const Stack = createNativeStackNavigator();

const Routes =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown:false,
     
           
             
             }}>
                
                {MainStack(Stack)}
              

            </Stack.Navigator>
        </NavigationContainer>

    )
}


export default Routes