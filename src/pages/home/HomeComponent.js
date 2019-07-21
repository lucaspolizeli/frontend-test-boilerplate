import * as React from "react";

class HomeComponent extends React.Component {
  render() {
    const { brands } = this.props;

    return <h2>{brands}</h2>;
  }
}

export default HomeComponent;
