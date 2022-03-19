import Section from "components/Section";
import Container from "components/Container";
import Header from "components/Header";
import { SearchHistoryList } from "../components/SearchHistory";

const SearchHistoryView = (props) => (
  <Section>
    <Header title={"Search History"} />
    <Container className="pt-0">
      <SearchHistoryList {...props} />
    </Container>
  </Section>
);

export default SearchHistoryView;
