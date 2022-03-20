import { Section, Container, Header } from "components";
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
