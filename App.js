import { NativeBaseProvider } from "native-base";
import { StyleSheet } from "react-native";
import HomePage from "./pages/HomePage";
import DayDetailsPage from "./pages/DayDetailsPage";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={HomePage}
          />
          <Stack.Screen name="Day" component={DayDetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

/*
Example de changement de page sur Web. Comment faire pour React Native ?

<Browser>
  <Route link="/" element={<HomePage />} />
  <Route link="/inventory" element={<Inventory />} />
  <Route link="/..." element={<... />} />
</Broser>

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
