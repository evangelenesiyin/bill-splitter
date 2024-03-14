import { useState, useEffect } from "react";
import LoadingScreen from "./src/screens/LoadingScreen";
import FormScreen from "./src/screens/FormScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SummaryScreen from "./src/screens/SummaryScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Form"
          component={FormScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Summary"
          component={SummaryScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
