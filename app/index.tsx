import { Text, View } from "react-native";
import { ImageBackground } from "react-native";
import normalBg from "../assets/images/normal.png";
import ResultDisplay from "@/components/ResultDisplay";
import TemperatureInput from "@/components/TemperatureInput";

export default function Index() {
  return (
    <ImageBackground
      source={normalBg}
      style={{ flex: 1, justifyContent: "center" }}
    >
      <View
        style={{
          height: 450,
          justifyContent: "space-evenly",
          alignItems: "center",
          
        }}
      >
        <ResultDisplay result="Temperature: 25°C" />
        <TemperatureInput />
        <View>
          <Text>Hello World</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
