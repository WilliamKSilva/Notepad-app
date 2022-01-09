import React from "react";
import { PublicNavigation } from "./public-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { PrivateNavigation } from "./private-navigation";

export function Navigation() {    
    
    return (
       <NavigationContainer>            
            <PrivateNavigation />
       </NavigationContainer>
    );
}
