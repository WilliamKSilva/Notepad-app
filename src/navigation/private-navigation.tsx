import React from "react";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { useTheme } from "styled-components";
import { Home } from "../screens/Home";

export function PrivateNavigation() {
    const Stack = createStackNavigator();  
    const { colors, constants, fontsize } = useTheme();   
    
    const options: StackNavigationOptions = {
        headerStyle: {            
            backgroundColor: colors.primary,
            height: 90
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
            color: colors.background,
            
        },
        headerTintColor: colors.background                       
    }
    
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ 
                    headerShown: false               
                }}
        />
        </Stack.Navigator>
    );
}