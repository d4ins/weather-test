import { CELSIUS_ZERO_IN_KELVIN } from "@constants";

export default function kelvinToCelsius(kelvinTemp) {
  return Number(kelvinTemp - CELSIUS_ZERO_IN_KELVIN).toFixed(1);
}
