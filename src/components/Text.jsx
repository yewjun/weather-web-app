export const ErrorTitleText = (props) => (
  <h6 className={`font-medium text-red-900 ${props.className}`}>
    {props.title}
  </h6>
);

export const ErrorMessageText = (props) => (
  <p className={`text-red-700 leading-tight ${props.className}`}>
    {props.message}
  </p>
);
