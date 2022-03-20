import * as React from "react";
import { useHistory } from "providers/HistoryProvider";
import { usePrevious } from "hooks/usePrevious";
import { SearchIconButton, DeleteIconButton, Card } from "components";
import { formatDateTime } from "helper/convertor";

export const SearchHistoryList = ({
  selectedHistory,
  setSelectedHistory,
  refetch,
  allCountry,
}) => {
  const { values, removeHistory } = useHistory();
  const prevValues = usePrevious(selectedHistory);

  // to handle refetch history country and also handle continuos click on same history
  const onSearch = (values) => {
    if (prevValues !== values) {
      setSelectedHistory(values);
    } else {
      refetch(); // ensure refetch repeatly clicking on same search
    }
  };

  // display latest history data first
  return values.length ? (
    values
      .slice(0)
      .reverse()
      .map((value, index) => (
        <HistoryListView
          key={value.searchAt}
          index={index}
          data={value}
          onDelete={removeHistory}
          onSearch={onSearch}
          allCountry={allCountry}
        />
      ))
  ) : (
    <Card className="bg-gray-200">
      <span>No History Showed</span>
    </Card>
  );
};

const HistoryListView = ({ index, data, onDelete, onSearch, allCountry }) => {
  const { id = "", country = "", city = "", searchAt = "" } = data;

  return (
    <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4 hover:bg-gray-100">
      <div className="flex justify-start text-gray-700 rounded-md px-2 py-2 my-2">
        <span className="w-2 m-2 self-center">{`${index + 1}.`}</span>
        <div className="flex-grow font-medium px-2 self-center">
          <span>{city}</span>
          <span className="mx-3">-</span>
          <span>{allCountry[country] ?? "-"}</span>
        </div>
        <div className="flex flex-col justify-end md:flex-row text-sm font-normal text-gray-500 tracking-wide items-center">
          <span className="my-2 mx-4 text-right">
            {formatDateTime(searchAt / 1000)}
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
