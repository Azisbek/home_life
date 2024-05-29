import { makeAutoObservable } from "mobx";

export class SidebarStore {
  visible = false;
  width = 0;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  showSidebar() {
    document.body.style.overflow = "hidden";
    this.visible = true;
  }

  hideSidebar() {
    document.body.style.overflow = "auto";
    this.visible = false;
  }
}
