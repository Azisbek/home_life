import { enableStaticRendering } from "mobx-react-lite";
import { DevicesStore } from "./modules/DevicesStore";

enableStaticRendering(typeof window === "undefined");

export class RootStore {
  devicesStore;

  constructor() {
    this.devicesStore = new DevicesStore();
  }
}
