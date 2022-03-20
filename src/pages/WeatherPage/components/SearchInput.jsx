import * as React from "react";
import { useFormik } from "formik";
import {
  PrimaryButton,
  SecondaryButton,
  ErrorBanner,
  InputField,
  SelectField,
  ErrorMessageText,
} from "components";
import { useFilterList } from "hooks/useList";
import { formikValidator } from "helper/validator";
import {
  IDefaultSearchCountryResponse,
  initialFormikValues,
  IDefaultErrorAlert,
} from "constants/constant";

// component for input country and city with search and reset buttons
const SearchInputBar = ({ setLocation, allCountry, queryState }) => {
  const { isError, error, isLoading } = queryState;
  const [alertError, setAlertError] = React.useState(IDefaultErrorAlert);
  let filtered = IDefaultSearchCountryResponse;

  React.useEffect(() => {
    if (isError) {
      setAlertError({
        isError,
        errorMessage: error?.response.data.message ?? "",
        title: "Query Error",
      });
    } else {
      setAlertError(IDefaultErrorAlert);
    }
  }, [isError, error]);

  const handleSubmit = () => {
    setLocation({
      id: filtered.id,
      country: filtered.country,
      city: filtered.name,
    });

    // display error whenever mismatch of country with city (not exists in OpenWeather list)
    if (filtered.id === 0) {
      const { country, city } = formikBag.values;
      setAlertError({
        isError: true,
        errorMessage: `${city} city doesn't exists in ${allCountry[country]} country`,
        title: "Mismatch Error",
      });
    } else {
      onReset();
    }
  };

  // use formik to handle form update, validate and submit values
  const formikBag = useFormik({
    initialValues: initialFormikValues,
    validate: (values) =>
      formikValidator(values, Object.keys(initialFormikValues)),
    onSubmit: handleSubmit,
  });

  // use hook to filter out to get ID by country and city that from OpenWeather list
  filtered = useFilterList(
    formikBag?.values.country || "",
    formikBag?.values.city || ""
  );

  const onReset = () => {
    formikBag.resetForm();
    setAlertError(IDefaultErrorAlert);
  };

  return (
    <div className="container mx-auto bg-sky-100 rounded-lg p-5 md:p-14">
      {alertError.isError && (
        <ErrorBanner
          title={alertError.title ?? ""}
          message={alertError.errorMessage ?? ""}
        />
      )}
      <form onSubmit={formikBag.handleSubmit}>
        <div className="flex md:flex-row lg:flex-nowrap flex-wrap flex-col">
          <div className="mx-3 self-center max-w-[90%] md:max-w-[40%]">
            <SelectField
              className="w-100 max-w-[90%] md:max-w-[100%]"
              name="country"
              label="Country"
              value={formikBag.values.country}
              onChange={formikBag.handleChange}
            >
              <option value="" defaultValue disabled hidden>
                Country
              </option>
              <CountryOptions data={allCountry} />
            </SelectField>
            {formikBag.touched.country && formikBag.errors.country ? (
              <ErrorMessageText
                className="indent-5"
                message={formikBag.errors.country}
              />
            ) : null}
          </div>
          <div className="mx-3 self-center">
            <InputField
              name="city"
              label="City"
              placeholder="City"
              value={formikBag.values.city}
              onChange={formikBag.handleChange}
            />
            {formikBag.touched.city && formikBag.errors.city ? (
              <ErrorMessageText
                className="indent-5"
                message={formikBag.errors.city}
              />
            ) : null}
          </div>
          <div className="md:flex my-3 mt-5 items-center px-2 rounded-lg space-x-4 mx-auto ">
            <PrimaryButton label="Search" type="submit" disabled={isLoading} />
            <SecondaryButton label="Reset" onClick={onReset} />
          </div>
        </div>
      </form>
    </div>
  );
};

// map all available countries as options
const CountryOptions = ({ data }) =>
  (Object.entries(data) || []).map(([key, value]) => (
    <option key={key} value={key}>
      {value}
    </option>
  ));

export default SearchInputBar;
