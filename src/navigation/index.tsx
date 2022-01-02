import React from "react";
import { PublicNavigation } from "./public-navigation";
import { NavigationContainer } from "@react-navigation/native";

export function Navigation() {    
    return (
       <NavigationContainer>
            <PublicNavigation />
       </NavigationContainer>
    );
}
