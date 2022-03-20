// validate form in formik
export const formikValidator = (values = {}, fields = []) => {
  const errors = {};

  if (!Array.isArray(fields)) return errors;

  fields.forEach((field) => {
    if (!values[field]) errors[field] = `${field} is required`;
  });

  return errors;
};
