import React from "react";
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { useTheme } from "styled-components/native";

export function PublicNavigation() {
    const Stack = createStackNavigator();  
    const { colors, constants, fontsize } = useTheme();   
    
    const options: StackNavigationOptions = {
        headerStyle: {            
            backgroundColor: colors.primary,
            height: 100
        },
        headerTitleAlign: 'center'
        
        
    }

    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{...options}}>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}                
            />
        </Stack.Navigator>
    )
}