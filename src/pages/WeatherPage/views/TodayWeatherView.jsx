import SearchInputBar from "../components/SearchInput";
import WeatherDetails from "../components/WeatherDetails";
import { Section, Header } from "components";

const TodayWeatherView = ({
  location,
  setLocation,
  allCountry,
  queryState,
}) => (
  <Section>
    <Header title={"Today's Weather"} />
    <SearchInputBar
      setLocation={setLocation}
      allCountry={allCountry}
      queryState={queryState}
    />
    <WeatherDetails locationId={location.id} allCountry={allCountry} />
  </Section>
);

export default TodayWeatherView;
