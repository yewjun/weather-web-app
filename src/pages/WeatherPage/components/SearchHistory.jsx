import * as React from "react";
import { useHistory } from "providers/HistoryProvider";
import { usePrevious } from "hooks/usePrevious";
import { SearchButton, DeleteButton } from "components/Button";

export const SearchHistoryList = ({
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
      <SearchButton className="mx-3" onClick={() => onSearch(data)} />
      <DeleteButton
        className="mx-3"
        onClick={() => onDelete({ id, searchAt })}
      />
    </div>
  );
};
