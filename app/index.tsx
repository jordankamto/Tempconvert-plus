import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import normalBg from "../assets/images/normal.png";
import hotBg from "../assets/images/hot.png";
import coldBg from "../assets/images/cold.png";
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT, Temperature } from "../constants";
import ResultDisplay from "@/components/ResultDisplay";
import TemperatureInput from "@/components/TemperatureInput";
import { changeUnit } from "../services/temperatureConversion";
import { useState } from "react";

export default function Index() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE);
  const [inputUnit, setInputUnit] = useState(DEFAULT_UNIT);
  const inputTemperature: Temperature = {
    value: inputValue,
    unit: inputUnit,
  };
  const [outputValue, setOutputValue] = useState(inputTemperature.value);
  const [outputUnit, setOutputUnit] = useState(changeUnit(inputUnit));
  const outputTemperature: Temperature = {
    value: outputValue,
    unit: outputUnit,
  };

  console.log("Current input value", inputValue);
  console.log("Current input unit", inputUnit);
  console.log("Current output value", outputValue);
  console.log("Current output unit", outputUnit);

  return (
    <ImageBackground source={normalBg} style={styles.container}>
      <View style={styles.content}>
        <ResultDisplay value={outputValue} unit={outputUnit} />
        <TemperatureInput
          onChangeInput={setInputValue}
          defaultValue={DEFAULT_TEMPERATURE.toString()}
          inputUnit={inputUnit}
        />
        <View>
          <Text>Switch units</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  content: {
    height: 450,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 50,
  },
});
