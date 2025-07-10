import { View, Text, TextInput } from "react-native";
import { styles } from "./TemperatureInput.styles";
import { DEFAULT_TEMPERATURE } from "../constants";

export default function TemperatureInput({
  defaultValue,
  inputUnit,
  onChangeInput,
}: {
  defaultValue: string;
  inputUnit: string;
  onChangeInput: (value: number) => void;
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        keyboardType="numeric"
        maxLength={4}
        style={styles.inputText}
        defaultValue={defaultValue}
        onChangeText={(text) => onChangeInput(Number(text))}
      />
      <Text style={styles.inputText}>{inputUnit}</Text>
    </View>
  );
}
