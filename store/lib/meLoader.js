import store from "../store-redux/store";
import { accountApi } from "../../components/Account/api";
import tokenStorageService from "../../lib/TokenStorage";

export async function meLoader() {
  try {
    await store.dispatch(accountApi.endpoints.getMe.initiate());

    return null;
  } catch (e) {
    tokenStorageService.clearToken();
  }
}
