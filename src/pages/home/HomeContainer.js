import * as React from "react";

class HomeContainer extends React.Component {
  render() {
    const HomeComponent = this.props.homeComponent;

    const {
      fipeStore: { brands }
    } = this.props;

    const homeComponentProps = {
      brands
    };

    return <HomeComponent {...homeComponentProps} />;
  }
}

export default HomeContainer;
