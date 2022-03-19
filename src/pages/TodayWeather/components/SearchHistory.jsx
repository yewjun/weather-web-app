import * as React from "react";
import { useQueryWeather } from "../hooks/useQueryWeather";
import { useHistory } from "./../providers/HistoryProvider";
import { IDefaultLocation } from "../../../constants/defaults";
import { usePrevious } from "../../../hooks/usePrevious";

const SearchHistoryView = () => (
  <div>
    Search History
    <SearchHistoryList />
  </div>
);

const SearchHistoryList = () => {
  const [selectedHistory, setSelectedHistory] =
    React.useState(IDefaultLocation);

  const { values, removeHistory } = useHistory();
  const prevValues = usePrevious(selectedHistory);

  const { refetch } = useQueryWeather(selectedHistory);

  const onSearch = (values) => {
    if (prevValues === values) return refetch(); // refetch same id when select the same history
    setSelectedHistory(values);
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
