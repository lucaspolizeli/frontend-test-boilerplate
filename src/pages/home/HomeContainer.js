import * as React from "react";

class HomeContainer extends React.Component {
  render() {
    const ComponentEncapsulated = this.props.componentToBeEncapsulated;

    const {
      fipeStore: { welcome }
    } = this.props;

    const componentEncapsulatedProps = {
      welcome
    };

    return <ComponentEncapsulated {...componentEncapsulatedProps} />;
  }
}

export default HomeContainer;
