const Header = ({ title }) => (
  <div className="text-center mb-10">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
      {title}
    </h1>
    <div className="flex mt-6 justify-center">
      <div className="w-16 h-1 rounded-full bg-blue-300 inline-flex"></div>
    </div>
  </div>
);

export default Header;
