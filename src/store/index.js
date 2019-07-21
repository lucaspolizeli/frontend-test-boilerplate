import { observer, inject } from "mobx-react";
import RootStore from "./RootStore";

const instance = new RootStore();

export default instance;

export function connect(component, stores = []) {
  if (!component) throw new Error("Component argument is required.");
  if (stores.length === 0)
    throw new Error("Stores must have at least one store name.");
  return inject(...stores)(observer(component));
}
