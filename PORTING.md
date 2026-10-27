# Port methodology

The upstream tests are translated first, from the pinned source, preserving their payloads, expected operations, error assertions and parametrization. The initial test-only revision compiles but fails to load because no SDK implementation exists yet. This is the red baseline, not a claim that each assertion ran.

The four Python inspection tests are expressed using Node package metadata, public exports, country defaults and generated documentation metadata. All other test functions are mechanically translated. Generated code retains upstream snake_case names. Runtime helpers implement the small set of Python semantics used by the SDK (including explicit null versus omitted values, enum values, date offsets, dataclass equality and keyword arguments). This is development-time source translation, not a Python runtime or interpreter.

Never update an expected result merely to make the port pass. Unsupported AST constructs stop generation. Source and test hashes are recorded in PROVENANCE.json. The translation scripts are development tools; consumers only run JavaScript.

## Language mapping

- Models expose readonly TypeScript fields, validated constructors and shallow runtime freezing, matching frozen upstream dataclasses.
- String enums are callable value objects with typed members, `.value`, JSON string serialization and stable identity. The non-string `UNSET` enum remains a distinct sentinel.
- The generated argument binder checks required, duplicate and unknown arguments. Models accept field objects; keyword-only method arguments accept a final options object. The exported `kw()` helper supports otherwise ambiguous calls.
- Dates use a small offset-preserving value type rather than silently converting all values to JavaScript UTC dates.
- Async locks coalesce token refresh and request-proof refresh. Polling timeouts abort fetch and interrupt sleeps so an abandoned poll does not continue issuing requests.
- Multiple-inheritance method resolution is composed once when modules load. Declaration interfaces retain inherited method types.
- Tests retain their upstream expectations. The test runner's fixture adapter replaces and restores polling sleeps for the original monkeypatch tests. No Nissan network calls or vehicle commands run in the test suite.

Generated implementations have `@ts-nocheck` because their keyword-argument machinery is dynamic. Public overloads, model fields and union aliases are generated from upstream annotations. Native code and a separate strict consumer compilation validate the exposed declarations. Internal generic parser parameters use `any`; they are not assertions of runtime safety.
