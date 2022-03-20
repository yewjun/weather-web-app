import * as React from "react";
import list from "constants/cityList.json";
import { IDefaultSearchCountryResponse } from "constants/constant";

const storageCountryList = "localWeatherCountryList";
const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

const convertCountryCodeToName = (code) => regionNames.of(code);

// filter that match existing country and city
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

// map OpenWeather list to get country name by country code
// use either storage country list (if any) or map a new list if storage no exist before
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

  // store country name and code list into local storage
  localStorage.setItem(storageCountryList, JSON.stringify(countryList));

  return countryList;
};
