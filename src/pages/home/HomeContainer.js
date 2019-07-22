import * as React from "react";

class HomeContainer extends React.Component {
  render() {
    const HomeComponent = this.props.homeComponent;

    const {
      fipeStore: {
        brands,
        models,
        carYears,
        selectedBrand,
        selectedModel,
        carInformation,
        selectedCarYear,
        setSelectedModel,
        setSelectedBrand,
        setSelectedCarYear
      }
    } = this.props;

    const homeComponentProps = {
      brands,
      models,
      carYears,
      selectedBrand,
      selectedModel,
      carInformation,
      selectedCarYear,
      setSelectedModel,
      setSelectedBrand,
      setSelectedCarYear
    };

    return <HomeComponent {...homeComponentProps} />;
  }
}

export default HomeContainer;
