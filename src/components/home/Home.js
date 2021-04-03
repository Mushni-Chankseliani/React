import { Fragment } from "react";
import Count from "../count/Count";
import Message from "../message/Message";

const Home = () => {
  return (
    <Fragment>
      <Message title="Hello" description="I'm Mushni" />

      <Count value={10} />
    </Fragment>
  );
};

export default Home;
