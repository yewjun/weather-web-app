import { format } from "date-fns";

export const kelvinToCelsius = (kelvin) => {
  return (kelvin - 273.15).toFixed(2);
};

export const celsiusSymbolText = (celsius) => {
  return celsius + "\xB0C.";
};

export const formatDateTime = (datetime) => {
  return format(new Date(datetime), "dd/MM/yyyy HH:mm:ssaa");
};
