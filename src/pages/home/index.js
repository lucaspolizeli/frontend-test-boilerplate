import * as React from "react";
import { connect } from "../../store";

import HomeContainer from "./HomeContainer";
import HomeComponent from "./HomeComponent";

const HomeContainerWithConnect = connect(
  HomeContainer,
  ["fipeStore"]
);

function Home(props) {
  return <HomeContainerWithConnect homeComponent={HomeComponent} {...props} />;
}

export default Home;
