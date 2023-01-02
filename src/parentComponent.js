import Header from "./helpers/header";

const Parentcomponent = ({ component, title, hideLink }) => {
  return (
    <>
      <Header title={title} hideLink={hideLink} />
      {component}
    </>
  );
};

export default Parentcomponent;
