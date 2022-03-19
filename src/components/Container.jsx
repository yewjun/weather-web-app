const Container = (props) => (
  <div className="container px-5 py-24 mx-auto" {...props}>
    {props.children}
  </div>
);

export default Container;
