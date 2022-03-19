import * as React from "react";
import { useFormik } from "formik";
import { useQueryWeather } from "../hooks/useQueryWeather";
import { useFilterList } from "../../../hooks/useList";
import { IDefaultLocation } from "../../../constants/defaults";

const SearchInputView = () => {
  const [location, setLocation] = React.useState(IDefaultLocation);
  const refLocation = React.useRef(IDefaultLocation);

  const initialValues = {
    city: "",
    country: "",
  };

  useQueryWeather(refLocation.current);

  const handleSubmit = () => {
    refLocation.current = location;
  };

  const formikBag = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });

  const filtered = useFilterList(
    formikBag?.values.country || "",
    formikBag?.values.city || ""
  );

  React.useEffect(() => {
    setLocation({
      id: filtered.id,
      country: filtered.country,
      city: filtered.name,
    });
  }, [filtered]);

  return (
    <form onSubmit={formikBag.handleSubmit}>
      <input
        name="country"
        placeholder="Country"
        value={formikBag.values.country}
        onChange={formikBag.handleChange}
      />
      <input
        name="city"
        placeholder="City"
        value={formikBag.values.city}
        onChange={formikBag.handleChange}
      />
      <button type="submit" disabled={!Boolean(filtered?.id)}>
        Search
      </button>
      <button onClick={() => formikBag.handleReset()}>Reset</button>
    </form>
  );
};

export default SearchInputView;
