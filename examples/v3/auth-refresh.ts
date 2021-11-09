import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { Etsy } from "../../src/v3";

export const initAuthRefresh = (
    client: Etsy,
    apiKey: string,
    tokens: {
        accessToken: string;
        refreshToken: string;
    }
) => {
    createAuthRefreshInterceptor(
        client.httpClient.instance,
        (error) => refreshAuthLogic(apiKey, tokens),
    );
}

const refreshAuthLogic = async (
    apiKey: string,
    tokens: {
        accessToken: string;
        refreshToken: string;
    }
) => {
    let response = await axios.request<{
        access_token: string,
        refresh_token: string
    }>({
        method: "POST",
        url: "https://api.etsy.com/v3/public/oauth/token",
        data: {
            grant_type: "refresh_token",
            client_id: apiKey,
            refresh_token: tokens.refreshToken
        }
    });

    tokens.accessToken = response.data.access_token;
    tokens.refreshToken = response.data.refresh_token;
    // save tokens to database maybe?
};
