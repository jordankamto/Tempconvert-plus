import { Temperature, Unit } from "../types";
import { UNITS } from "../constants";

export function changeUnit(unit: Unit): Unit {
  return unit === UNITS.celcius
    ? UNITS.fahrenheit
    : unit === UNITS.fahrenheit
    ? UNITS.kelvin
    : UNITS.fahrenheit;
}

export function convertToCelcius(temperature: Temperature): Temperature {
  if (temperature.unit === UNITS.celcius) {
    const convertedTemperature: Temperature = {
      value: temperature.value,
      unit: UNITS.celcius,
    };
    return convertedTemperature;
  } else if (temperature.unit === UNITS.fahrenheit) {
    const convertedTemperature: Temperature = {
      value: (temperature.value - 32) / 1.8,
      unit: UNITS.celcius,
    };
    return convertedTemperature;
  } else {
    const convertedTemperature: Temperature = {
      value: temperature.value - 273.15,
      unit: UNITS.celcius,
    };
    return convertedTemperature;
  }
}

export function convertToFahrenheit(temperature: Temperature): Temperature {
  if (temperature.unit === UNITS.fahrenheit) {
    const convertedTemperature: Temperature = {
      value: temperature.value,
      unit: UNITS.fahrenheit,
    };
    return convertedTemperature;
  } else if (temperature.unit === UNITS.celcius) {
    const convertedTemperature: Temperature = {
      value: temperature.value * 1.8 + 32,
      unit: UNITS.fahrenheit,
    };
    return convertedTemperature;
  } else {
    const convertedTemperature: Temperature = {
      value: (temperature.value - 273.15) * 1.8 + 32,
      unit: UNITS.fahrenheit,
    };
    return convertedTemperature;
  }
}

export function convertToKelvin(temperature: Temperature): Temperature {
  if (temperature.unit === UNITS.kelvin) {
    const convertedTemperature: Temperature = {
      value: temperature.value,
      unit: UNITS.kelvin,
    };
    return convertedTemperature;
  } else if (temperature.unit === UNITS.celcius) {
    const convertedTemperature: Temperature = {
      value: temperature.value + 273.15,
      unit: UNITS.kelvin,
    };
    return convertedTemperature;
  } else {
    const convertedTemperature: Temperature = {
      value: (temperature.value - 32) / 1.8 + 273.15,
      unit: UNITS.kelvin,
    };
    return convertedTemperature;
  }
}
