# etsy-ts

Etsy API wrapper written in TypeScript. Includes types for all Etsy API endpoints.

## Installation:

`npm install etsy-ts --save`  
`yarn add etsy-ts`

## Etsy API v3

See example in [examples/v3/run.ts](examples/example.ts)  
Find full [API v3 documentation](https://developer.etsy.com) on Etsy.

### Breaking changes when migrating from 3.x.x to 4.x.x

- All v3 modules are now imported from the root of the package, e.g. `import { Etsy } from 'etsy-ts'` instead
  of `import { Etsy } from 'etsy-ts/v3'`
- `Etsy` class constructor now requires `SecurityDataStorage` instance that
  implements [`ISecurityDataStorage`](src/types/ISecurityDataStorage.ts) interface. See a sample implementation
  in [examples/v3/SecurityDataStorage.ts](examples/SecurityDataStorage.ts).
- For methods that require oauth, now you need to pass `etsyUserId` instead of `accessToken`. This client will
  use `SecurityDataStorage` instance to get, refresh and save `accessToken` for the given `etsyUserId`.

## Credits

Most of the code is _generated_ from [Swagger specs](https://www.etsy.com/openapi/generated/oas/3.0.0.json) provided by
Etsy fed to [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api).
