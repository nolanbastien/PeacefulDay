import { NativeBaseProvider } from "native-base";
import HomePage from "./pages/HomePage";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <NativeBaseProvider>
      <HomePage />
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
