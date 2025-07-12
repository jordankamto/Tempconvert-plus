import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import ResultDisplay from "@/components/ResultDisplay";
import TemperatureInput from "@/components/TemperatureInput";
import SwitchUnitButton from "@/components/SwitchUnitButton";
import normalBg from "../assets/images/normal.png";
import hotBg from "../assets/images/hot.png";
import coldBg from "../assets/images/cold.png";
import { DEFAULT_TEMPERATURE, UNITS } from "../constants";
import { Temperature, Unit } from "../types";
import {
  changeUnit,
  convertToFahrenheit,
  convertToCelcius,
  convertToKelvin,
} from "../services/temperatureConversion";

export default function Index() {
  const [inputValue, setInputValue] = useState(DEFAULT_TEMPERATURE.value);
  const [inputUnit, setInputUnit] = useState(DEFAULT_TEMPERATURE.unit);
  const inputTemperature: Temperature = {
    value: inputValue,
    unit: inputUnit,
  };
  const [targetUnit, setTargetUnit] = useState<Unit>(UNITS.fahrenheit);
  const [buttonUnit, setButtonUnit] = useState(UNITS.kelvin);

  const handlePress = () => {
    const newUnit = changeUnit(targetUnit);
    setTargetUnit(newUnit);
    setButtonUnit(changeUnit(newUnit));
  };

  const getConvertedTemperature = (
    TemperatureInput: Temperature,
    targetUnit: Unit
  ): Temperature => {
    switch (targetUnit) {
      case UNITS.fahrenheit:
        return convertToFahrenheit(TemperatureInput);
      case UNITS.kelvin:
        return convertToKelvin(TemperatureInput);
      default:
        return TemperatureInput;
    }
  };

  return (
    <ImageBackground source={normalBg} style={styles.container}>
      <View style={styles.content}>
        <ResultDisplay
          temperature={getConvertedTemperature(inputTemperature, targetUnit)}
        />
        <TemperatureInput
          onChangeInput={setInputValue}
          defaultValue={DEFAULT_TEMPERATURE.value.toString()}
          inputUnit={inputUnit}
        />
        <SwitchUnitButton onPress={handlePress} unit={buttonUnit} />
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
