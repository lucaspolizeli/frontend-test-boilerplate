import { observer, inject } from "mobx-react";

export default function connect(component, stores = []) {
  if (!component) throw new Error("Component argument is required.");

  if (stores.length === 0) {
    throw new Error("Stores must have at least one store name.");
  }

  return inject(...stores)(observer(component));
}
