export const DEFAULT_TEMPERATURE: number = 0;
export const UNITS : Record<string, Unit> = { celcius: "°C", fahrenheit: "°F", kelvin: "K" };
export const DEFAULT_UNIT: Unit = UNITS.celcius;

export type Unit = "°C" | "°F" | "K";

export interface Temperature {
  value: number;
  unit: Unit;
}
