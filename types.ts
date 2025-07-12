export type Unit = "°C" | "°F" | "K";
export type Units = Record<string, Unit>;

export interface Temperature {
  value: number;
  unit: Unit;
}
