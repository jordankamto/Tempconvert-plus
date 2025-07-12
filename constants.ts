import { Unit, Units, Temperature } from "./types";

export const DEFAULT_TEMPERATURE: Temperature = {value: 25, unit: "°C"};
export const UNITS : Units = { celcius: "°C", fahrenheit: "°F", kelvin: "K" };
export const DEFAULT_UNIT: Unit = UNITS.celcius;