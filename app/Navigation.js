import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SalonsScreen from "../screens/SalonsScreen";
import ServiceScreen from "../screens/ServiceScreen";
import { SalonInfoScreen } from "../screens/SalonInfoScreen";

const Stack = createNativeStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name='Services' component={ServiceScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Salons' component={SalonsScreen} options={{ headerShown: false }} />
        <Stack.Screen name='SalonInfo' component={SalonInfoScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
