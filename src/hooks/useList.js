import * as React from "react";
import list from "../constants/city.list.json";
import { IDefaultSearchCountryResponse } from "../constants/defaults";

export const useFilterList = (inputCountry, inputCity) =>
  React.useMemo(() => {
    let filtered = [];
    if (inputCountry && inputCity) {
      filtered = list.filter(
        ({ country, name }) =>
          inputCountry.toLowerCase() === country.toLowerCase() &&
          inputCity.toLowerCase() === name.toLowerCase()
      );
    }

    return filtered.length > 0 ? filtered[0] : IDefaultSearchCountryResponse;
  }, [inputCountry, inputCity]);
