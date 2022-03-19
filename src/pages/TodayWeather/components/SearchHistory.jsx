import * as React from "react";
import { useHistory } from "providers/HistoryProvider";
import { usePrevious } from "hooks/usePrevious";

const SearchHistoryView = (props) => (
  <div>
    Search History
    <SearchHistoryList {...props} />
  </div>
);

const SearchHistoryList = ({
  selectedHistory,
  setSelectedHistory,
  refetch,
}) => {
  const { values, removeHistory } = useHistory();
  const prevValues = usePrevious(selectedHistory);

  const onSearch = (values) => {
    if (prevValues !== values) {
      setSelectedHistory(values);
    } else {
      refetch(); // ensure refetch repeatly clicking on same search
    }
  };

  return values.map((value) => (
    <HistoryListView
      key={value.searchAt}
      data={value}
      onDelete={removeHistory}
      onSearch={onSearch}
    />
  ));
};

const HistoryListView = ({ data, onDelete, onSearch }) => {
  const { id = "", country = "", city = "", searchAt = "" } = data;

  return (
    <div>
      <span>{city}</span>
      <span>{country}</span>
      <span>{searchAt}</span>
      <button onClick={() => onSearch(data)}>Search</button>
      <button onClick={() => onDelete({ id, searchAt })}>Delete</button>
    </div>
  );
};

export default SearchHistoryView;
