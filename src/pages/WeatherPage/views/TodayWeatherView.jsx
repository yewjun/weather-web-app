import SearchInputView from "../components/SearchInput";
import WeatherDetails from "../components/WeatherDetails";
import Section from "components/Section";
import Header from "components/Header";

const TodayWeatherView = ({ location, setLocation }) => (
  <Section>
    <Header title={"Today's Weather"} />
    <SearchInputView setLocation={setLocation} />
    <WeatherDetails locationId={location.id} />
  </Section>
);

export default TodayWeatherView;
