import * as React from "react";
import { useQueryWeatherById } from "../../../queries/weatherQueries";
import { useFormatWeather } from "../hooks/useFormatData";

const WeatherDetails = ({ locationId = "" }) => {
  const query = useQueryWeatherById(locationId);

  const displayData = useFormatWeather(query);

  return (
    <div style={{ margin: "10px" }}>
      <div>
        {displayData.city}, {displayData.country}
      </div>
      <div>{displayData.status}</div>
      <div>Description: {displayData.description}</div>
      <div>
        Temperature: {`${displayData.temp.min} ~ ${displayData.temp.max}`}
      </div>
      <div>Humidity: {displayData.humidity}%</div>
      <div>Time: {displayData.unixDatetime}</div>
    </div>
  );
};

export default WeatherDetails;
