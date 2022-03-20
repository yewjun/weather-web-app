import * as React from "react";
import {
  kelvinToCelsius,
  celsiusSymbolText,
  formatDateTime,
} from "helper/convertor";
import { useAllCountry } from "hooks/useList";

export const useFormatWeather = (queryData) => {
  const allCountry = useAllCountry();

  return React.useMemo(() => {
    const data = queryData?.data || {};
    const main = data?.main || {};
    const sys = data?.sys || {};
    const weather = data?.weather?.["0"] || {};

    return {
      unixDatetime: data?.dt ? formatDateTime(data.dt) : "-",
      city: data?.name || "-",
      country: sys?.country ? allCountry[sys.country] : "-",
      temp: {
        min: main?.temp_min
          ? celsiusSymbolText(kelvinToCelsius(main.temp_min))
          : "-",
        max: main?.temp_max
          ? celsiusSymbolText(kelvinToCelsius(main.temp_max))
          : "-",
      },
      humidity: main?.humidity || 0,
      status: weather?.main || "-",
      description: weather?.description || "-",
      iconCode: weather?.icon || "",
    };
  }, [queryData, allCountry]);
};
