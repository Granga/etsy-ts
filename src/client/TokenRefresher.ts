import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { ISecurityDataStorage } from "../types/ISecurityDataStorage";

export class TokenRefresher {
  constructor(
    private readonly apiKey: string,
    private readonly httpClientInstance: AxiosInstance,
    private readonly securityDataStorage: ISecurityDataStorage
  ) {
  }

  init() {
    createAuthRefreshInterceptor(
      this.httpClientInstance,
      (error) => this.refreshAuthLogic(this.apiKey, error.config),
      {pauseInstanceWhileRefreshing: true}
    );
  }

  private async refreshAuthLogic(apiKey: string, failedRequest: AxiosRequestConfig) {
    const authHeader = failedRequest.headers.Authorization as string;
    const accessToken = authHeader?.replace("Bearer ", "");

    if (!accessToken) {
      return;
    }

    const etsyUserId = parseInt(accessToken.split(".")[0]);
    const {refreshToken} = await this.securityDataStorage.findAccessToken({etsyUserId});

    const response = await this.getNewToken(apiKey, refreshToken);

    await this.securityDataStorage.storeAccessToken(
      {etsyUserId},
      {
        accessToken: response.access_token,
        refreshToken: response.refresh_token,
        expiresIn: response.expires_in,
        tokenType: response.token_type
      }
    );

    failedRequest.headers.Authorization = `Bearer ${response.access_token}`;
  }

  private async getNewToken(apiKey: string, refreshToken: string) {
    let response = await axios.request<{
      access_token: string,
      refresh_token: string,
      token_type: string,
      expires_in: number
    }>({
      method: "POST",
      url: "https://api.etsy.com/v3/public/oauth/token",
      data: {
        grant_type: "refresh_token",
        client_id: apiKey,
        refresh_token: refreshToken
      }
    });

    return response.data;
  }
}
