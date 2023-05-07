import fs from "fs-extra";
import { SecurityData, ISecurityDataStorage } from "../../src";

export type AccessTokenModel = SecurityData & {
  etsyUserId: number;
};

/**
 * This is an example of how to implement ISecurityDataStorage interface.
 * You can use this class to store security data in a file or in a database.
 */
export class SecurityDataStorage implements ISecurityDataStorage {
  async storeAccessToken(accessToken: SecurityData) {
    const all = await fs.readJson("./examples/credentials.json") as AccessTokenModel[];
    const etsyUserId = parseInt(accessToken.accessToken.split(".")[0]);

    const index = all.findIndex(item => item.etsyUserId === etsyUserId);

    if (index === -1) {
      all.push({
        etsyUserId,
        ...accessToken
      });
    }
    else {
      all[index] = {
        etsyUserId,
        ...accessToken
      };
    }

    await fs.writeJSON("./examples/credentials.json", all, {spaces: 2});
  }

  async findAccessToken(etsyUserId: number): Promise<SecurityData> {
    const all = await fs.readJson("./examples/credentials.json") as AccessTokenModel[];
    return all.find(item => item.etsyUserId === etsyUserId);
  }
}
