import { ErrorTitleText, ErrorMessageText } from "./Text";

export const ErrorBanner = (props) => (
  <div className="flex gap-4 bg-red-100 p-4 rounded-md">
    <div className="space-y-1 text-sm">
      <ErrorTitleText title={props.title} />
      <ErrorMessageText message={props.message} />
    </div>
  </div>
);
