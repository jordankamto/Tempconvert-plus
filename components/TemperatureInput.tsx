import { View, Text, TextInput } from "react-native";
import { useState } from "react";

export default function TemperatureInput() {
  const [number, onChangeNumber] = useState("");
  return (
    <View>
      <Text>Temperature Input</Text>
      <TextInput
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  );
}
