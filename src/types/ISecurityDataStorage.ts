import { SecurityDataFilter } from "./SecurityDataFilter";
import { Tokens } from "./Tokens";

export interface ISecurityDataStorage {
  storeAccessToken(filter: SecurityDataFilter, securityData: Tokens): Promise<void>;

  findAccessToken(params: SecurityDataFilter): Promise<Tokens>;
}
