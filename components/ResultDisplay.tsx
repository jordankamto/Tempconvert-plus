import { Text, TouchableOpacity } from "react-native";
import { styles } from "./ResultDisplay.styles";
import { Unit } from "@/constants";

export default function ResultDisplay({
  value,
  unit,
}: {
  value: number;
  unit: Unit;
}) {
  return (
    <Text style={styles.resultText}>
      {value.toString()}{" "}
      <TouchableOpacity>
        <Text style={styles.resultText}>{unit}</Text>
      </TouchableOpacity>
    </Text>
  );
}
