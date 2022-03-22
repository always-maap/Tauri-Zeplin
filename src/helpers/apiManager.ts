import { getAccessToken } from "../helpers/getAccessToken";

export class ApiManager {
  accessToken: string | null;
  private static instance: ApiManager;

  private constructor() {
    this.accessToken = getAccessToken();
  }

  static getInstance() {
    if (!ApiManager.instance) {
      ApiManager.instance = new ApiManager();
    }

    return ApiManager.instance;
  }

  fetchApi(endpoint: string, config?: RequestInit) {
    const baseConfig: RequestInit = {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    };

    return fetch(endpoint, {
      ...baseConfig,
      ...config,
    });
  }
}
