import * as React from "react";
import { config } from "constants/config";
import { useQueryWeatherById } from "queries/weatherQueries";
import { useFormatWeather } from "../hooks/useFormatData";
import { Card } from "components";

// component to display weather details
const WeatherDetails = ({ locationId = "" }) => {
  const query = useQueryWeatherById(locationId);
  const displayData = useFormatWeather(query);

  // to check icon belongs to day time or night time
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
        <WeatherCardData displayData={displayData} isDay={isDay} />
      ) : (
        <WeatherLoadingCard />
      )}
    </Card>
  );
};

const WeatherCardData = ({ displayData, isDay }) => {
  // get OpenWeather iamge url
  const { openWeatherImageUrl, openWeatherImagePath } = config;
  const imageUrl = `${openWeatherImageUrl}${openWeatherImagePath}`;

  return (
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
        <MeasurableDetail
          label="Temperature"
          value={`${displayData.temp.min} ~ ${displayData.temp.max}`}
        />
        <MeasurableDetail label="Humidity" value={`${displayData.humidity}%`} />
        <MeasurableDetail label="Date Time" value={displayData.unixDatetime} />
      </div>
    </>
  );
};

const MeasurableDetail = ({ label, value }) => (
  <div className="text-center">
    <p className="font-bold min-h-20 flex items-center justify-center">
      {value}
    </p>
    <p className="text-xs">{label}</p>
  </div>
);

const WeatherLoadingCard = () => (
  <div className="flex flex-col flex-1 gap-5 sm:p-2">
    <div className="flex flex-1 flex-col items-center gap-3">
      <div className="w-20 h-20 rounded-full bg-gray-200"></div>
      <div className="bg-gray-200 w-full h-14 rounded-2xl"></div>
      <div className="bg-gray-200 w-full h-3 rounded-2xl"></div>
      <div className="bg-gray-200 w-full h-3 rounded-2xl"></div>
      <div className="bg-gray-200 w-full h-3 rounded-2xl"></div>
      <div className="bg-gray-200 w-full h-3 rounded-2xl"></div>
    </div>
    <div className="mt-auto flex gap-3">
      <div className="bg-gray-200 w-20 h-8 rounded-full"></div>
      <div className="bg-gray-200 w-20 h-8 rounded-full"></div>
      <div className="bg-gray-200 w-20 h-8 rounded-full ml-auto"></div>
    </div>
  </div>
);

export default WeatherDetails;
