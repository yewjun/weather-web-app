import * as React from "react";
import { config } from "constants/config";
import { useQueryWeatherById } from "queries/weatherQueries";
import { useFormatWeather } from "../hooks/useFormatData";
import Card from "components/Card";

const WeatherDetails = ({ locationId = "" }) => {
  const query = useQueryWeatherById(locationId);
  const displayData = useFormatWeather(query);
  const { openWeatherImageUrl, openWeatherImagePath } = config;
  const imageUrl = `${openWeatherImageUrl}${openWeatherImagePath}`;

  const isDay = React.useMemo(
    () =>
      displayData?.iconCode
        ? Boolean(displayData.iconCode.slice(-1) === "d")
        : false,
    [displayData]
  );

  return (
    <Card className={isDay ? "bg-amber-100" : "bg-slate-300"}>
      {query ? (
        <>
          <div
            className={`w-20 h-20 px-4 py-4 inline-flex items-center justify-center rounded-full text-white flex-shrink-0 ${
              isDay ? "bg-orange-200" : "bg-neutral-200"
            }`}
          >
            {displayData.iconCode ? (
              <img
                src={`${imageUrl}${displayData.iconCode}@2x.png`}
                alt="Weather Icon"
              />
            ) : null}
          </div>
          <h3 className="text-gray-700 my-6 text-xl title-font font-medium">
            {`${displayData.city} , ${displayData.country}`}
          </h3>
          <h2 className="text-zinc-900 my-2 text-2xl font-medium">
            {displayData.status}
          </h2>
          <div className="text-neutal-500 my-2 text-base font-normal">
            {displayData.description}
          </div>
          <hr />
          <div className="grid grid-rows-3 divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:grid-rows-1 gap-2 py-5">
            <div className="text-center">
              <p className="font-bold min-h-20 flex items-center justify-center">{`${displayData.temp.min} ~ ${displayData.temp.max}`}</p>
              <p className="text-xs">Temperature</p>
            </div>
            <div className="text-center">
              <p className="font-bold min-h-20 flex items-center justify-center">{`${displayData.humidity}%`}</p>
              <p className="text-xs">Humidity</p>
            </div>
            <div className="text-center">
              <p className="font-bold min-h-20 flex items-center justify-center">
                {displayData.unixDatetime}
              </p>
              <p className="text-xs">Date Time</p>
            </div>
          </div>
        </>
      ) : (
        <div class="flex flex-col flex-1 gap-5 sm:p-2">
          <div class="flex flex-1 flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-gray-200 animate-pulse"></div>
            <div class="bg-gray-200 w-full animate-pulse h-14 rounded-2xl"></div>
            <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
            <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
            <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
            <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl"></div>
          </div>
          <div class="mt-auto flex gap-3">
            <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full"></div>
            <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full"></div>
            <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto"></div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default WeatherDetails;
