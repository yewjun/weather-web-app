export const InputField = (props) => (
  <div className="pt-2 my-3 relative mx-auto text-gray-600 self-center">
    <label className="font-medium text-black px-2">{props.label}</label>
    <Input {...props} />
  </div>
);

export const Input = (props) => (
  <input
    {...props}
    className="w-100 max-w-[90%] border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
  />
);
