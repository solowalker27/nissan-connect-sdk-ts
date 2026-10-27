# Port methodology

The upstream tests are translated first, from the pinned source, preserving their payloads, expected operations, error assertions and parametrization. The initial test-only revision compiles but fails to load because no SDK implementation exists yet. This is the red baseline, not a claim that each assertion ran.

The four Python inspection tests are expressed using Node package metadata, public exports, country defaults and generated documentation metadata. All other test functions are mechanically translated. Generated code retains upstream snake_case names. Runtime helpers implement the small set of Python semantics used by the SDK (including explicit null versus omitted values, enum values, date offsets, dataclass equality and keyword arguments). This is development-time source translation, not a Python runtime or interpreter.

Never update an expected result merely to make the port pass. Unsupported AST constructs stop generation. Source and test hashes are recorded in PROVENANCE.json. The translation scripts are development tools; consumers only run JavaScript.
