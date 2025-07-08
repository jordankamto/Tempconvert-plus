import { View, Text } from "react-native";
import { styles } from "./ResultDisplay.styles";

export default function ResultDisplay({ result }: { result: string }) {
  return (
    <View>
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
}
