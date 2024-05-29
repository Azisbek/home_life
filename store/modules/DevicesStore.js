import { makeAutoObservable } from "mobx";

const MOBILE_WIDTH = 768;

export class DevicesStore {
  isMobile = false;
  width = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    if (typeof window !== "undefined") {
      this.setWidth(window.innerWidth);
      window.addEventListener("resize", this.handleResize);
    }
  }

  handleResize = () => {
    this.setWidth(window.innerWidth);
  };

  setWidth(width) {
    this.width = width;
    this.isMobile = width <= MOBILE_WIDTH;
  }
}
