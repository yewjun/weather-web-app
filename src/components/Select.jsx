export const SelectField = (props) => (
  <div className="pt-2 my-3 relative mx-auto text-gray-600 self-center">
    <label className="font-medium text-black px-2">{props.label}</label>
    <Select {...props}>{props.children}</Select>
  </div>
);

export const Select = (props) => (
  <select
    {...props}
    className={`max-w-10xs w-auto border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none ${props.className}`}
  >
    {props.children}
  </select>
);
