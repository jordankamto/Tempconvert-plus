import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Index from "./index";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "grey" }}>
        <Index />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
