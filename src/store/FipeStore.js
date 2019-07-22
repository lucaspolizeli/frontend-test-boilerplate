import { action, observable, decorate } from "mobx";
import remotedev from "mobx-remotedev";

const _defaultInitialState = {
  selectedBrand: null,
  brands: [],

  selectedModel: null,
  models: [],

  selectedCarYear: null,
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
      selectedModel,
      selectedBrand,
      carInformation,
      selectedCarYear
    } = initialState;

    this.brands = brands;
    this.models = models;
    this.carYears = carYears;
    this.carInformation = carInformation;
    this.selectedBrand = selectedBrand;
    this.selectedModel = selectedModel;
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

  fillCarInformation = responseFromRequest => {
    this.carInformation = responseFromRequest;
  };

  setSelectedBrand = selectedBrand => {
    this.selectedBrand = selectedBrand;

    this.selectedCarYear = null;
    this.selectedModel = null;
    this.carInformation = null;

    this.models = [];
    this.carYears = [];

    this.getModels(selectedBrand.value);
  };

  setSelectedModel = selectedModel => {
    this.selectedModel = selectedModel;
    this.selectedCarYear = null;
    this.carInformation = null;

    this.carYears = [];

    this.getCarYears(this.selectedBrand.value, this.selectedModel.value);
  };

  setSelectedCarYear = selectedCarYear => {
    this.selectedCarYear = selectedCarYear;

    this.getCarInformation(
      this.selectedBrand.value,
      this.selectedModel.value,
      this.selectedCarYear.value
    );
  };

  getModels = async selectedBrandId => {
    const fetchedModels = await fetch(
      baseUrl + `/marcas/${selectedBrandId}/modelos`
    );
    const fetchedModelsInJSON = await fetchedModels.json();
    this.fillModelRequest(fetchedModelsInJSON.modelos);
  };

  getBrands = async () => {
    const fetchedBrands = await fetch(baseUrl + "/marcas");
    const fetchedBrandsInJSON = await fetchedBrands.json();
    this.fillBrandRequest(fetchedBrandsInJSON);
  };

  getCarYears = async (selectedBrandId, selectedModelId) => {
    const fetchedCarYears = await fetch(
      baseUrl + `/marcas/${selectedBrandId}/modelos/${selectedModelId}/anos`
    );
    const fetchedCarYearsInJSON = await fetchedCarYears.json();
    this.fillCarYearsRequest(fetchedCarYearsInJSON);
  };

  getCarInformation = async (
    selectedBrandId,
    selectedModelId,
    selectedCarYear
  ) => {
    const fetchedCarInformation = await fetch(
      baseUrl +
        `/marcas/${selectedBrandId}/modelos/${selectedModelId}/anos/${selectedCarYear}`
    );
    const fetchedCarInformationInJSON = await fetchedCarInformation.json();
    this.fillCarInformation(fetchedCarInformationInJSON);
  };
}

export default remotedev(
  decorate(FipeStore, {
    brands: observable,
    models: observable,
    carYears: observable,
    selectedBrand: observable,
    carInformation: observable,
    selectedModel: observable,
    selectedCarYear: observable,
    getBrands: action,
    getCarYears: action,
    getModels: action,
    setInitialState: action,
    setSelectedBrand: action,
    setSelectedCarYear: action,
    setSelectedModel: action,
    fillBrandRequest: action,
    fillCarYearsRequest: action,
    fillModelRequest: action,
    fillCarInformation: action
  })
);
