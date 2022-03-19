import * as React from "react";
import { useHistory } from "providers/HistoryProvider";
import { usePrevious } from "hooks/usePrevious";
import { SearchIconButton, DeleteIconButton } from "components/Button";
import { formatDateTime } from "helper/convertor";

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

  return values
    .slice(0)
    .reverse()
    .map((value, index) => (
      <HistoryListView
        key={value.searchAt}
        index={index}
        data={value}
        onDelete={removeHistory}
        onSearch={onSearch}
      />
    ));
};

const HistoryListView = ({ index, data, onDelete, onSearch }) => {
  const { id = "", country = "", city = "", searchAt = "" } = data;

  return (
    <div class="bg-white shadow-md rounded-lg px-3 py-2 mb-4 hover:bg-gray-100">
      <div className="flex justify-start text-gray-700 rounded-md px-2 py-2 my-2">
        <span className="w-2 m-2 self-center">{`${index + 1}.`}</span>
        <div className="flex-grow font-medium px-2 self-center">
          <span>{city}</span>
          <span className="mx-3">-</span>
          <span>{country}</span>
        </div>
        <div className="flex flex-col justify-end md:flex-row text-sm font-normal text-gray-500 tracking-wide items-center">
          <span className="my-2 mx-4 text-right">
            {formatDateTime(searchAt)}
          </span>
          <div className="mx-5 w-100 self-end flex flex-row space-x-1 md:space-x-4">
            <SearchIconButton className="mx-3" onClick={() => onSearch(data)} />
            <DeleteIconButton
              className="px-3"
              onClick={() => onDelete({ id, searchAt })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
