import { enableStaticRendering } from "mobx-react-lite";
import { DevicesStore } from "./modules/DevicesStore";
import { SidebarStore } from "./modules/SidebarStore";

// Нет объекта window на сервере
enableStaticRendering(typeof window === "undefined");

export class RootStore {
  devicesStore;
  sidebarStore;

  constructor() {
    this.devicesStore = new DevicesStore();
    this.sidebarStore = new SidebarStore();
  }
}
