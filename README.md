# Nissan Connect SDK for TypeScript

An **auto-generated TypeScript translation** of [pynissan by Vadim Belov](https://github.com/bvdcode/nissan-connect-sdk), pinned to commit `828bde6cb1e04b7a25003534e376c84d23e1be75` (version 0.2.1).

This is an unofficial community client for MyNISSAN in the United States, Canada and Mexico. It is not affiliated with Nissan. Vehicle and subscription capabilities vary.

The upstream MIT copyright is preserved in `UPSTREAM-LICENSE` and `LICENSE`. Python is used only by the development-time translator. The library, installation and tests run entirely in Node.js 22 or later. There are **no production dependencies or installation scripts**.

## Usage

```ts
import { NissanClient, Tokens, TemperatureUnit } from '@solowalker27/nissan-connect-sdk';

const client = new NissanClient({
  tokens: new Tokens({ access_token: '...', refresh_token: '...', id_token: null }),
  token_listener: async tokens => { /* securely persist refreshed tokens */ },
});
try {
  const vehicles = await client.async_get_vehicles();
  const status = await client.async_get_vehicle_status(vehicles[0].vin, {
    temperature_unit: TemperatureUnit.CELSIUS,
  });
  console.log(status.battery?.level);
} finally {
  client.close();
}
```

For initial authentication call `await client.async_authenticate(email, password)` with a stable `oauth_device_id` if you already have one. Persist the resulting `client.tokens` and `client.oauth_device_id` securely. Do not store the password. Optional request proof and a proof-provider callback are supported; the SDK does not manufacture or bypass Nissan verification.

The API retains upstream `snake_case` names. Supply keyword-only parameters as a final options object. Dataclass-style models accept either positional parameters or a named fields object. `UNSET` means omitted; `null` means explicit null. Enum members expose `.value`. Models are immutable. `dateTime(isoOrDate)` and `dateOnly(iso)` create date values and preserve explicit offsets. A custom `HttpSession` can be supplied as the first constructor argument for testing or custom networking.

State-changing operations are blocked by default. Explicitly set `read_only: false` to enable them. A returned service-request ID means accepted for processing; use `async_wait_for_service_request` to confirm completion. A method's presence does not establish availability for a particular car.

## Provenance and validation

The first repository commit contains the translated tests, before the implementation. All 341 upstream test functions are represented, including native equivalents for four Python introspection contracts. Parametrization and imported test helpers expand the suite to 701 cases. Additional tests cover the native fetch transport, cancellation, declarations and full public API inventory.

All 147 Python source modules are translated, including 285 byte-preserved GraphQL documents and their operation hashes. `PROVENANCE.json` records upstream file hashes, 277 async client methods and 670 public exports. See `PORTING.md` for language semantics and limitations.

```sh
npm ci
npm test
npm run test:types
```

To regenerate, clone the upstream repo at the commit above and run these development-only commands with Python 3.13+:

```sh
python scripts/translate.py /path/to/nissan-connect-sdk tests
python scripts/translate.py /path/to/nissan-connect-sdk source
python scripts/provenance.py /path/to/nissan-connect-sdk
npm test
npm run test:types
```

Generated implementation bodies use a dynamic adapter for Python keyword arguments; their public declarations preserve annotated input/output types. Native transport and integration code are checked with strict TypeScript settings. Consumer tests check the emitted declarations without skipping library checks.

Tests use synthetic payloads and local HTTP servers. Passing them verifies translation behavior; it does not verify every Nissan endpoint against a live account. Source inventory checks ensure untested upstream features are included, but cannot establish Nissan's current server behavior.
