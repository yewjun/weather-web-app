const Card = ({ country, name }) => (
  <div className="p-4 w-full mx-10 max-w-xs md:max-w-none md:w-1/2 lg:w-1/4 md:mx-auto z-10">
    <div className="flex rounded-lg h-full bg-white p-8 flex-col shadow-lg">
      <div className="flex flex-col items-center">
        <div className="w-20 px-4 py-4 inline-flex items-center justify-center rounded-full bg-blue-300 text-white flex-shrink-0">
          {country}
        </div>
        <h2 className="text-gray-900 my-6 text-lg title-font font-medium">
          {name}
        </h2>
      </div>
    </div>
  </div>
);

export default Card;
