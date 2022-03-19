import Container from "./Container";

const Section = ({ children }) => (
  <div className="relative bg-gray-50 overflow-x-hidden">
    <section className="text-gray-600 body-font">
      <Container>{children}</Container>
    </section>
  </div>
);

export default Section;
