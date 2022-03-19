import * as React from "react";
import { useFormik } from "formik";
import { useFilterList } from "hooks/useList";
import { IDefaultSearchCountryResponse } from "constants/defaults";
import { PrimaryButton, SecondaryButton } from "components/Button";
import { InputField } from "components/Input";

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
    <div class="container mx-auto bg-gray-200 rounded-lg p-14">
      <form onSubmit={formikBag.handleSubmit}>
        <div className="flex md:flex-row lg:flex-nowrap flex-wrap flex-col">
          <InputField
            name="country"
            label="Country"
            placeholder="Country"
            value={formikBag.values.country}
            onChange={formikBag.handleChange}
          />
          <InputField
            name="city"
            label="City"
            placeholder="City"
            value={formikBag.values.city}
            onChange={formikBag.handleChange}
          />
          <div class="md:flex my-3 mt-5 items-center px-2 rounded-lg space-x-4 mx-auto ">
            <PrimaryButton
              label="Search"
              type="submit"
              disabled={!Boolean(filtered?.id)}
            />
            <SecondaryButton
              label="Reset"
              onClick={() => formikBag.handleReset()}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchInputView;
