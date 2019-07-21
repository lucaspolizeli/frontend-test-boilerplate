import * as React from "react";
import { connect } from "../../store";

import HomeContainer from "./HomeContainer";
import HomeComponent from "./HomeComponent";
import { PropTypes } from "mobx-react";

const HomeContainerWithConnect = connect(
  HomeContainer,
  ["fipeStore"]
);

function Home(props) {
  return (
    <HomeContainerWithConnect
      componentToBeEncapsulated={HomeComponent}
      {...props}
    />
  );
}

Home.propTypes = {
  props: PropTypes.any
};

export default Home;
