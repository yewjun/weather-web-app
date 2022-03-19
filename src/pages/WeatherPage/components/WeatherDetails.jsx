import * as React from "react";
import { useQueryWeatherById } from "queries/weatherQueries";
import { useFormatWeather } from "../hooks/useFormatData";
import Card from "components/Container";

const WeatherDetails = ({ locationId = "" }) => {
  const query = useQueryWeatherById(locationId);

  const displayData = useFormatWeather(query);

  return (
    <>
      <Card name={`${displayData.city}`} country={`${displayData.country}`} />
      <div>{displayData.status}</div>
      <div>Description: {displayData.description}</div>
      <div>
        Temperature: {`${displayData.temp.min} ~ ${displayData.temp.max}`}
      </div>
      <div>Humidity: {displayData.humidity}%</div>
      <div>Time: {displayData.unixDatetime}</div>
    </>
  );
};

export default WeatherDetails;
