import { Text, TouchableOpacity } from "react-native";
import { styles } from "./ResultDisplay.styles";
import { Temperature } from "../types";

export default function ResultDisplay({
  temperature,
}: {
  temperature: Temperature;
}) {
  return (
    <Text style={styles.resultText}>
      {temperature.value.toFixed(2).toString()}{" "}
      <Text style={styles.resultText}>{temperature.unit}</Text>
    </Text>
  );
}
