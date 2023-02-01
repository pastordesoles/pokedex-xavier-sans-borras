import LoaderStyle from "./LoaderStyle";

const Loader = (): JSX.Element => {
  return (
    <>
      <LoaderStyle data-testid="custom-loading">
        <span className="loader"></span>
      </LoaderStyle>
    </>
  );
};

export default Loader;
