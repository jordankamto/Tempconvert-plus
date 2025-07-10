import { Unit, UNITS } from "@/constants";

export function changeUnit(unit: Unit): Unit {
  return unit === UNITS.celcius
    ? UNITS.fahrenheit
    : unit === UNITS.fahrenheit
    ? UNITS.kelvin
    : UNITS.celcius;
}
