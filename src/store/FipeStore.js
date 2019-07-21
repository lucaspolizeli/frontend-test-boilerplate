import { action, observable, decorate } from "mobx";
import remotedev from "mobx-remotedev";

const _defaultInitialState = {
  selectedBrandId: undefined,
  brands: [],

  selectedModelId: undefined,
  models: [],

  selectedCarYear: undefined,
  carYears: [],

  carInformation: undefined
};

const baseUrl = "https://parallelum.com.br/fipe/api/v1/carros";

class FipeStore {
  constructor() {
    this.setInitialState(_defaultInitialState);
    this.getBrands();
  }

  setInitialState = initialState => {
    const {
      brands,
      models,
      carYears,
      selectedBrandId,
      carInformation,
      selectedModelId,
      selectedCarYear
    } = initialState;

    this.brands = brands;
    this.models = models;
    this.carYears = carYears;
    this.carInformation = carInformation;
    this.selectedBrandId = selectedBrandId;
    this.selectedModelId = selectedModelId;
    this.selectedCarYear = selectedCarYear;
  };

  fillBrandRequest = responseFromRequest => {
    this.brands = responseFromRequest;
  };

  fillModelRequest = responseFromRequest => {
    this.models = responseFromRequest;
  };

  fillCarYearsRequest = responseFromRequest => {
    this.carYears = responseFromRequest;
  };

  setSelectedBrandId = selectedBrandId => {
    this.selectedBrandId = selectedBrandId;

    this.selectedCarYear = undefined;
    this.setSelectedModelId = undefined;

    this.models = [];
    this.carYears = [];

    this.getModels(selectedBrandId);
  };

  setSelectedModelId = selectedModelId => {
    this.setSelectedModelId = selectedModelId;
    this.selectedCarYear = undefined;

    this.carYears = [];

    this.getCarYears(this.selectedBrandId, selectedModelId);
  };

  setSelectedCarYear = selectedCarYear => {
    this.selectedCarYear = selectedCarYear;
  };

  getModels = async selectedBrandId => {
    const fetchedModels = await fetch(
      baseUrl + `/marcas/${selectedBrandId}/modelos`
    );
    const fetchedModelsInJSON = fetchedModels.json();
    this.fillModelRequest(fetchedModelsInJSON);
  };

  getBrands = async () => {
    const fetchedBrands = await fetch(baseUrl + "/marcas");
    const fetchedBrandsInJSON = await fetchedBrands.json();
    this.fillBrandRequest(fetchedBrandsInJSON);
  };

  getCarYears = async (selectedBrandId, selectedModelId) => {
    const fetchedCarYears = await fetch(
      baseUrl + `/marcas/${selectedBrandId}/modelos/${selectedModelId}`
    );
    const fetchedCarYearsInJSON = fetchedCarYears.json();
    this.fillCarYearsRequest(fetchedCarYearsInJSON);
  };
}

export default remotedev(
  decorate(FipeStore, {
    brands: observable,
    models: observable,
    carYears: observable,
    selectedBrandId: observable,
    carInformation: observable,
    selectedModelId: observable,
    selectedCarYear: observable,
    getBrands: action,
    getCarYears: action,
    getModels: action,
    setInitialState: action,
    setSelectedBrandId: action,
    setSelectedCarYear: action,
    setSelectedModelId: action,
    fillBrandRequest: action,
    fillCarYearsRequest: action,
    fillModelRequest: action
  })
);
