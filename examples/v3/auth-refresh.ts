import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import fs from "fs-extra";
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
        {pauseInstanceWhileRefreshing: true}
    );

    // Use refreshed token when retrying the failed request
    client.httpClient.instance.interceptors.request.use(async request => {
        if (request.headers.Authorization) {
            let accessToken = request.headers.Authorization.replace("Bearer ", "");
            if (accessToken !== tokens.accessToken) {
                // Read token from the the a file
                let credentials = await fs.readJson("./examples/credentials.json");

                // Or read token from database
                // let etsyUserId = accessToken.split(".")[0];
                // let {accessToken} = await userRepo.findOne({etsyUserId});

                request.headers.Authorization = `Bearer ${credentials.accessToken}`;
            }
        }

        return request;
    });
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

    // Storing refreshed tokens in file, but you should store them in cache or/and database
    let credentials = await fs.readJson("./examples/credentials.json");
    await fs.writeJSON(
        "./examples/credentials.json",
        {...credentials, ...tokens},
        {spaces: 2}
    );

    return Promise.resolve();
};
