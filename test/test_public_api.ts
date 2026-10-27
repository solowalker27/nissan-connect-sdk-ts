// Native equivalents of tests/test_public_api.py: Node metadata, exports, defaults and API documentation.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as sdk from '../src/index';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
const pkg = JSON.parse(readFileSync(join(__dirname, '../..', 'package.json'), 'utf8'));
test('test_public_api.py::test_package_version_matches_installed_metadata', () => {
  assert.equal(sdk.__version__, pkg.version);
});
test('test_public_api.py::test_client_configuration_uses_country_selector', () => {
  const client = new sdk.NissanClient({post() { throw new Error('Unexpected network'); }});
  assert.equal(client.country, sdk.Country.US);
  assert.deepEqual(Array.from(sdk.Country), [sdk.Country.US, sdk.Country.CA, sdk.Country.MX]);
  assert.equal(client.read_only, true);
});
test('test_public_api.py::test_public_classes_and_functions_have_docstrings', () => {
  const docs = JSON.parse(readFileSync(join(__dirname, '../..', 'PROVENANCE.json'), 'utf8'));
  assert.deepEqual(docs.undocumentedPublicSymbols, []);
});
test('test_public_api.py::test_transport_and_service_profiles_are_not_exported', () => {
  assert.equal('_NissanTransport' in sdk, false);
  assert.equal('_CountryProfile' in sdk, false);
  assert.equal(typeof sdk.RequestProof, 'function');
});
