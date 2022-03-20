import * as React from "react";
import list from "constants/cityList.json";
import { IDefaultSearchCountryResponse } from "constants/constant";

const storageCountryList = "localWeatherCountryList";
const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

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

const convertCountryCodeToName = (code) => regionNames.of(code);

export const useAllCountry = () => {
  const storage = localStorage.getItem(storageCountryList);

  if (storage) return JSON.parse(storage);

  let countryList = {};

  for (const item of list) {
    const { country } = item;
    countryList = {
      ...countryList,
      [country]: convertCountryCodeToName(country),
    };
  }

  localStorage.setItem(storageCountryList, JSON.stringify(countryList));

  return countryList;
};
