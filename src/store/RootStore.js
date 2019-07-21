import { configure } from "mobx";
import FipeStore from "./FipeStore";

export default class RootStore {
  constructor() {
    configure({ enforceActions: "always" });
    this.fipeStore = new FipeStore();
  }
}
