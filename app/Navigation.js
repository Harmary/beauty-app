import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SalonsScreen from "../screens/SalonsScreen";
import ServiceScreen from "../screens/ServiceScreen";

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Salons' component={SalonsScreen} />
        <Stack.Screen name='Services' component={ServiceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
