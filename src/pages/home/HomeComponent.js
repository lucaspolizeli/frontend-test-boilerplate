import * as React from "react";
import { Wrapper } from "./styles";
import DropDownList from "../../components/DropDownList";
import CarValue from "../../components/CarValue";
class HomeComponent extends React.Component {
  render() {
    const {
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
    } = this.props;

    return (
      <Wrapper>
        <h2>Procurador de Carros!</h2>
        <DropDownList
          placeholder={"Selecione uma marca..."}
          value={selectedBrand}
          options={brands}
          isLoading={!brands.length}
          onChange={selectedBrand => setSelectedBrand(selectedBrand)}
        />
        <DropDownList
          placeholder={"Selecione um modelo..."}
          value={selectedModel}
          options={models}
          isDisabled={!selectedBrand}
          isLoading={!models.length && selectedBrand}
          onChange={selectedModel => setSelectedModel(selectedModel)}
        />
        <DropDownList
          placeholder={"Selecione um ano..."}
          value={selectedCarYear}
          options={carYears}
          isDisabled={!selectedModel}
          isLoading={!carYears.length && selectedModel}
          onChange={selectedCarYear => setSelectedCarYear(selectedCarYear)}
        />
        <CarValue carValue={!carInformation || carInformation.Valor} />
      </Wrapper>
    );
  }
}

export default HomeComponent;
