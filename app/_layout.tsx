import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Index from "./index";
import { ImageBackground, StyleSheet } from "react-native";
import normalBg from "../assets/images/normal.png";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={["left", "right"]}>
        <Index />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
