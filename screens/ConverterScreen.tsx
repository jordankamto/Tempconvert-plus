import { View, Text } from "react-native";
import { ConverterScreenStyles } from "./ConverterScreen.styles";

export default function ConverterScreen() {
  return (
    <View style={ConverterScreenStyles.container}>
      <Text style={ConverterScreenStyles.header}>Temperature Converter App</Text>
    </View>
  );
}
