import * as React from "react";
import { useFormik } from "formik";
import { useFilterList } from "hooks/useList";
import { IDefaultSearchCountryResponse } from "constants/defaults";

const SearchInputView = ({ setLocation }) => {
  const initialValues = {
    city: "",
    country: "",
  };

  let filtered = IDefaultSearchCountryResponse;

  const handleSubmit = () => {
    setLocation({
      id: filtered.id,
      country: filtered.country,
      city: filtered.name,
    });
  };

  const formikBag = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });

  filtered = useFilterList(
    formikBag?.values.country || "",
    formikBag?.values.city || ""
  );

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
