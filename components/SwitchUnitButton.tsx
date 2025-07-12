import {Text, TouchableOpacity } from "react-native";
import { styles } from "./SwitchUnitButton.styles";
import { Unit } from "@/types";

export default function SwitchUnitButton({
  onPress,
  unit,
}: {
  onPress: () => void;
  unit: Unit;
}) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>Convert to {unit}</Text>
    </TouchableOpacity>
  );
}
