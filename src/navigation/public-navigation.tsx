import React from "react";
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { useTheme } from "styled-components/native";
import { ChangePassword } from "../screens/ChangePassword";

export function PublicNavigation() {
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
                options={{
                    title: 'Registro'
                }}                
            />
            <Stack.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={{
                    title: 'Atualização de senha'
                }}                
            />
        </Stack.Navigator>
    )
}