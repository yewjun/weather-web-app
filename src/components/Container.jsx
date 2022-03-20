export const Container = (props) => (
  <div {...props} className={`container px-5 py-20 mx-auto ${props.className}`}>
    {props.children}
  </div>
);
