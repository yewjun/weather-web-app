const Card = (props) => (
  <div className="py-4 px-2 w-full max-w-xs md:max-w-none md:w-1/2 lg:w-0.75 mx-auto z-10">
    <div
      className={`flex rounded-lg h-ful p-8 flex-col shadow-lg ${props.className}`}
    >
      <div className="flex flex-col items-center">{props.children}</div>
    </div>
  </div>
);

export default Card;
