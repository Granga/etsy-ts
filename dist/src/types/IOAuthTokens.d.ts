import { Token } from "oauth-1.0a";
import { ApiKeyDetails } from "./ApiKeyDetails";
export interface IOAuthTokens {
    clientToken?: Token;
    apiKeys?: ApiKeyDetails;
}
