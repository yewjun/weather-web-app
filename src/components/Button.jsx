export const RoundedButton = (props) => (
  <div
    className={`w-10 h-10 px-1 py-1 inline-flex items-center justify-center rounded-full text-white flex-shrink-0 cursor-pointer ${props.className}`}
    onClick={props.onClick}
  >
    <button className="absolute right-0 top-0 mt-5 mr-4" {...props}>
      {props.children}
    </button>
  </div>
);

export const SearchIconButton = (props) => (
  <RoundedButton {...props} className="bg-blue-300" onClick={props.onClick}>
    <svg
      className="text-gray-600 h-4 w-4 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Capa_1"
      x="0px"
      y="0px"
      viewBox="0 0 56.966 56.966"
      xmlSpace="preserve"
      width="512px"
      height="512px"
    >
      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
    </svg>
  </RoundedButton>
);

export const DeleteIconButton = (props) => (
  <RoundedButton {...props} className="bg-red-400" onClick={props.onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-trash"
      viewBox="0 0 16 16"
    >
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
      <path
        fillRule="evenodd"
        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
      />
    </svg>
  </RoundedButton>
);

export const PrimaryButton = (props) => (
  <button
    {...props}
    className="bg-blue-300 text-black text-base rounded-lg px-5 py-2"
  >
    {props.label}
  </button>
);

export const SecondaryButton = (props) => (
  <button
    {...props}
    className="bg-gray-400 text-white text-base rounded-lg px-5 py-2"
  >
    {props.label}
  </button>
);
