import Section from "components/Section";
import Header from "components/Header";
import { SearchHistoryList } from "../components/SearchHistory";

const SearchHistoryView = (props) => (
  <Section>
    <Header title={"Search History"} />
    <SearchHistoryList {...props} />
  </Section>
);

export default SearchHistoryView;
