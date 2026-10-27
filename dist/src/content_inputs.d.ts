import { ClientType } from "./content_models";
export { ClientType };
import { UNSET, UnsetType, optional_input_fields, serialize_enum } from "./graphql_input";
export { UNSET, UnsetType, optional_input_fields, serialize_enum };
export declare function contact_us_variables(client_type: ClientType): Record<string, unknown>;
export declare function faq_variables(categories?: ReadonlyArray<string | null> | UnsetType | null): Record<string, unknown>;
export declare function live_chat_hours_variables(departments?: ReadonlyArray<string | null> | UnsetType | null, enhanced_chat?: boolean | UnsetType | null): Record<string, unknown>;
