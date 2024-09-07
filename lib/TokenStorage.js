class TokenStorageService {
  storageKeys = {
    access: "homeLife_access",
  };

  getToken() {
    return localStorage.getItem(this.storageKeys.access) || "";
  }

  setToken(access) {
    localStorage.setItem(this.storageKeys.access, access);
  }

  clearToken() {
    localStorage.removeItem(this.storageKeys.access);
  }
}

const tokenStorageService = new TokenStorageService();

export default tokenStorageService;
