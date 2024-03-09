import { SecurityDataFilter } from "./SecurityDataFilter";
import { Tokens } from "./Tokens";

export interface ISecurityDataStorage {
  /**
   * Save access token
   * @param filter
   * @param securityData
   */
  storeAccessToken(
    filter: SecurityDataFilter,
    securityData: Tokens
  ): Promise<void>;

  /**
   * Find existing access token
   * @param params
   * @returns token, or undefined when not found
   */
  findAccessToken(params: SecurityDataFilter): Promise<Tokens | undefined>;
}
