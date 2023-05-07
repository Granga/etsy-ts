import * as fs from "fs";
import * as path from "path";
import { generateApi, GenerateApiParamsFromUrl } from "swagger-typescript-api";

const config: Omit<GenerateApiParamsFromUrl, "input" | "spec"> & { typePrefix?: string } = {
  output: path.resolve(process.cwd(), "./src/v3/api"),
  url: "https://www.etsy.com/openapi/generated/oas/3.0.0.json",
  modular: true,
  httpClientType: "axios",
  defaultResponseAsSuccess: false,
  generateRouteTypes: false,
  generateResponses: true,
  toJS: false,
  extractRequestParams: true,
  extractRequestBody: true,
  singleHttpClient: true,
  cleanOutput: true,
  enumNamesAsValues: false,
  moduleNameFirstTag: true,
  generateUnionEnums: false,
  typePrefix: "I",
  templates: path.resolve(process.cwd(), `./generate/templates/`)
};

generateApi({
  ...config
})
  .then(({files, configuration}) => {
    files.forEach(({content, name}) => {
      fs.writeFileSync(path.resolve(process.cwd(), `./src/v3/api/${name}`), content);
    });
  })
  .catch(e => console.error(e))
