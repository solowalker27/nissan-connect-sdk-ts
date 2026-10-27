import { py as $ } from "./_runtime";
export declare const NCFCustomerType: $.EnumType<{
    readonly PRIMARY: "PRIMARY";
    readonly CO_SIGNER: "CO_SIGNER";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type NCFCustomerType = ReturnType<typeof NCFCustomerType>;
export declare const NCFAccountContractType: $.EnumType<{
    readonly RETAIL: "RETAIL";
    readonly LEASE: "LEASE";
    readonly UNKNOWN_VALUE: "UNKNOWN__";
}>;
export type NCFAccountContractType = ReturnType<typeof NCFAccountContractType>;
/** Future finance union branch selected only by type name. */
export declare class UnselectedFinanceResult {
    readonly typename: string;
    static __fields: (string | symbol)[][];
    constructor(typename: string);
    constructor(options: {
        typename: string;
    });
}
/** Nullable status returned after linking an NCF account. */
export declare class NCFConnectAccountSuccess {
    readonly success: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(success: boolean | null);
    constructor(options: {
        success: boolean | null;
    });
}
/** Base for finance union branches with nullable messages. */
export declare class NCFFinanceMessageResult {
    readonly message: string | null;
    static __fields: (string | symbol)[][];
    constructor(message: string | null);
    constructor(options: {
        message: string | null;
    });
}
declare const NCFConnectAccountCoSignerAlreadyRegistered_base: any;
/** The co-signer is already registered. */
export declare class NCFConnectAccountCoSignerAlreadyRegistered extends NCFConnectAccountCoSignerAlreadyRegistered_base {
    static __fields: never[];
    constructor(message: string | null);
    constructor(options: {
        message: string | null;
    });
}
export interface NCFConnectAccountCoSignerAlreadyRegistered extends NCFFinanceMessageResult {
}
declare const NCFConnectAccountInvalidCombination_base: any;
/** VIN and account number do not form a valid combination. */
export declare class NCFConnectAccountInvalidCombination extends NCFConnectAccountInvalidCombination_base {
    static __fields: never[];
    constructor(message: string | null);
    constructor(options: {
        message: string | null;
    });
}
export interface NCFConnectAccountInvalidCombination extends NCFFinanceMessageResult {
}
declare const NCFConnectAccountInternalError_base: any;
/** Internal account-link failure. */
export declare class NCFConnectAccountInternalError extends NCFConnectAccountInternalError_base {
    static __fields: never[];
    constructor(message: string | null);
    constructor(options: {
        message: string | null;
    });
}
export interface NCFConnectAccountInternalError extends NCFFinanceMessageResult {
}
declare const NCFConnectAccountPrimaryAlreadyRegistered_base: any;
/** The primary borrower is already registered. */
export declare class NCFConnectAccountPrimaryAlreadyRegistered extends NCFConnectAccountPrimaryAlreadyRegistered_base {
    static __fields: never[];
    constructor(message: string | null);
    constructor(options: {
        message: string | null;
    });
}
export interface NCFConnectAccountPrimaryAlreadyRegistered extends NCFFinanceMessageResult {
}
export type NCFConnectAccountResult = NCFConnectAccountSuccess | NCFConnectAccountCoSignerAlreadyRegistered | NCFConnectAccountInvalidCombination | NCFConnectAccountInternalError | NCFConnectAccountPrimaryAlreadyRegistered | UnselectedFinanceResult;
declare const NCFDisconnectAccountSuccess_base: any;
/** Successful NCF account disconnection. */
export declare class NCFDisconnectAccountSuccess extends NCFDisconnectAccountSuccess_base {
    static __fields: never[];
    constructor(message: string | null);
    constructor(options: {
        message: string | null;
    });
}
export interface NCFDisconnectAccountSuccess extends NCFFinanceMessageResult {
}
declare const NCFDisconnectAccountFailure_base: any;
/** Failed NCF account disconnection. */
export declare class NCFDisconnectAccountFailure extends NCFDisconnectAccountFailure_base {
    static __fields: never[];
    constructor(message: string | null);
    constructor(options: {
        message: string | null;
    });
}
export interface NCFDisconnectAccountFailure extends NCFFinanceMessageResult {
}
export type NCFDisconnectAccountResult = NCFDisconnectAccountSuccess | NCFDisconnectAccountFailure | UnselectedFinanceResult;
/** Nullable status returned after updating an NCF account. */
export declare class NCFUpdateAccountResult {
    readonly success: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(success: boolean | null);
    constructor(options: {
        success: boolean | null;
    });
}
/** Successful NCF notification-preference update. */
export declare class NCFUpdateNotificationPreferencesSuccess {
    readonly success: boolean;
    static __fields: (string | symbol)[][];
    constructor(success: boolean);
    constructor(options: {
        success: boolean;
    });
}
declare const NCFUpdateNotificationPreferencesError_base: any;
/** Failed NCF notification-preference update. */
export declare class NCFUpdateNotificationPreferencesError extends NCFUpdateNotificationPreferencesError_base {
    static __fields: never[];
    constructor(message: string | null);
    constructor(options: {
        message: string | null;
    });
}
export interface NCFUpdateNotificationPreferencesError extends NCFFinanceMessageResult {
}
export type NCFUpdateNotificationPreferencesResult = NCFUpdateNotificationPreferencesSuccess | NCFUpdateNotificationPreferencesError | UnselectedFinanceResult;
/** Nullable upcoming, recent, and overdue payment amounts. */
export declare class NCFUpcomingPayment {
    readonly amount_due: number | null;
    readonly due_date: $.DateValue | null;
    readonly recent_payment: number | null;
    readonly recent_payment_date: $.DateValue | null;
    readonly overdue_balance: number | null;
    static __fields: (string | symbol)[][];
    constructor(amount_due: number | null, due_date: $.DateValue | null, recent_payment: number | null, recent_payment_date: $.DateValue | null, overdue_balance: number | null);
    constructor(options: {
        amount_due: number | null;
        due_date: $.DateValue | null;
        recent_payment: number | null;
        recent_payment_date: $.DateValue | null;
        overdue_balance: number | null;
    });
}
/** Nullable billing-address fields for an NCF customer. */
export declare class NCFBillingAddress {
    readonly address: string | null;
    readonly city: string | null;
    readonly zip_code: string | null;
    readonly state: string | null;
    static __fields: (string | symbol)[][];
    constructor(address: string | null, city: string | null, zip_code: string | null, state: string | null);
    constructor(options: {
        address: string | null;
        city: string | null;
        zip_code: string | null;
        state: string | null;
    });
}
/** Nullable customer fields attached to a finance contract. */
export declare class NCFFinancialCustomer {
    readonly first_name: string | null;
    readonly last_name: string | null;
    readonly buyer_type: NCFCustomerType | null;
    readonly phone_number: string | null;
    readonly billing_address: NCFBillingAddress | null;
    static __fields: (string | symbol)[][];
    constructor(first_name: string | null, last_name: string | null, buyer_type: NCFCustomerType | null, phone_number: string | null, billing_address: NCFBillingAddress | null);
    constructor(options: {
        first_name: string | null;
        last_name: string | null;
        buyer_type: NCFCustomerType | null;
        phone_number: string | null;
        billing_address: NCFBillingAddress | null;
    });
}
/** Nullable originating dealer details. */
export declare class NCFFinancialDealer {
    readonly name: string | null;
    readonly phone_number: string | null;
    static __fields: (string | symbol)[][];
    constructor(name: string | null, phone_number: string | null);
    constructor(options: {
        name: string | null;
        phone_number: string | null;
    });
}
/** Nullable values selected for a retail loan contract. */
export declare class NCFLoanDetails {
    readonly original_balance: number | null;
    readonly remaining_balance: number | null;
    readonly apr: number | null;
    readonly principle_paid_amount: number | null;
    readonly interest_paid_amount: number | null;
    readonly payment_progress_percentage: number | null;
    static __fields: (string | symbol)[][];
    constructor(original_balance: number | null, remaining_balance: number | null, apr: number | null, principle_paid_amount: number | null, interest_paid_amount: number | null, payment_progress_percentage: number | null);
    constructor(options: {
        original_balance: number | null;
        remaining_balance: number | null;
        apr: number | null;
        principle_paid_amount: number | null;
        interest_paid_amount: number | null;
        payment_progress_percentage: number | null;
    });
}
/** Nullable values selected for a lease contract. */
export declare class NCFLeaseDetails {
    readonly term: number | null;
    readonly payments_remaining: number | null;
    readonly original_mileage: number | null;
    readonly contracted_mileage: number | null;
    readonly total_mileage_allowance: number | null;
    readonly excess_mileage_charge_amount: number | null;
    readonly disposition_fee_amount: number | null;
    readonly residual_value: number | null;
    readonly adjusted_payment_amount: number | null;
    readonly total_payment_amount: number | null;
    readonly payment_tax_amount: number | null;
    readonly payment_tax_rate: number | null;
    readonly payment_progress_percentage: number | null;
    readonly security_deposit_amount: number | null;
    static __fields: (string | symbol)[][];
    constructor(term: number | null, payments_remaining: number | null, original_mileage: number | null, contracted_mileage: number | null, total_mileage_allowance: number | null, excess_mileage_charge_amount: number | null, disposition_fee_amount: number | null, residual_value: number | null, adjusted_payment_amount: number | null, total_payment_amount: number | null, payment_tax_amount: number | null, payment_tax_rate: number | null, payment_progress_percentage: number | null, security_deposit_amount: number | null);
    constructor(options: {
        term: number | null;
        payments_remaining: number | null;
        original_mileage: number | null;
        contracted_mileage: number | null;
        total_mileage_allowance: number | null;
        excess_mileage_charge_amount: number | null;
        disposition_fee_amount: number | null;
        residual_value: number | null;
        adjusted_payment_amount: number | null;
        total_payment_amount: number | null;
        payment_tax_amount: number | null;
        payment_tax_rate: number | null;
        payment_progress_percentage: number | null;
        security_deposit_amount: number | null;
    });
}
/** Common contract fields and type-specific loan or lease values. */
export declare class NCFFinancialContract {
    readonly typename: string;
    readonly maturity_date: $.DateValue | null;
    readonly start_date: $.DateValue | null;
    readonly number_of_payments_made: number | null;
    readonly customers: ReadonlyArray<NCFFinancialCustomer | null> | null;
    readonly dealer: NCFFinancialDealer | null;
    readonly loan_details: NCFLoanDetails | null;
    readonly lease_details: NCFLeaseDetails | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, maturity_date: $.DateValue | null, start_date: $.DateValue | null, number_of_payments_made: number | null, customers: ReadonlyArray<NCFFinancialCustomer | null> | null, dealer: NCFFinancialDealer | null, loan_details: NCFLoanDetails | null, lease_details: NCFLeaseDetails | null);
    constructor(options: {
        typename: string;
        maturity_date: $.DateValue | null;
        start_date: $.DateValue | null;
        number_of_payments_made: number | null;
        customers: ReadonlyArray<NCFFinancialCustomer | null> | null;
        dealer: NCFFinancialDealer | null;
        loan_details: NCFLoanDetails | null;
        lease_details: NCFLeaseDetails | null;
    });
}
/** Nullable presentation and feature rules for a finance account. */
export declare class NCFFinancialRules {
    readonly static_text: string | null;
    readonly get_payoff_quote: boolean | null;
    readonly payment_history: boolean | null;
    readonly contract_details: boolean | null;
    readonly progress_bar_maturity: boolean | null;
    static __fields: (string | symbol)[][];
    constructor(static_text: string | null, get_payoff_quote: boolean | null, payment_history: boolean | null, contract_details: boolean | null, progress_bar_maturity: boolean | null);
    constructor(options: {
        static_text: string | null;
        get_payoff_quote: boolean | null;
        payment_history: boolean | null;
        contract_details: boolean | null;
        progress_bar_maturity: boolean | null;
    });
}
/** Finance account, payment, contract, and rule details. */
export declare class NCFFinancialAccount {
    readonly account_number: string | null;
    readonly upcoming_payment: NCFUpcomingPayment | null;
    readonly customer_type: NCFCustomerType | null;
    readonly contract: NCFFinancialContract | null;
    readonly rules: NCFFinancialRules | null;
    static __fields: (string | symbol)[][];
    constructor(account_number: string | null, upcoming_payment: NCFUpcomingPayment | null, customer_type: NCFCustomerType | null, contract: NCFFinancialContract | null, rules: NCFFinancialRules | null);
    constructor(options: {
        account_number: string | null;
        upcoming_payment: NCFUpcomingPayment | null;
        customer_type: NCFCustomerType | null;
        contract: NCFFinancialContract | null;
        rules: NCFFinancialRules | null;
    });
}
/** Vehicle data linked to an NCF account. */
export declare class NCFFinancialVehicle {
    readonly vin: string;
    readonly model: string | null;
    readonly year: string | null;
    readonly image: string | null;
    readonly account: NCFFinancialAccount | null;
    static __fields: (string | symbol)[][];
    constructor(vin: string, model: string | null, year: string | null, image: string | null, account: NCFFinancialAccount | null);
    constructor(options: {
        vin: string;
        model: string | null;
        year: string | null;
        image: string | null;
        account: NCFFinancialAccount | null;
    });
}
/** Future financial-vehicle type with its universally selected VIN. */
export declare class UnselectedFinancialVehicle {
    readonly typename: string;
    readonly vin: string;
    static __fields: (string | symbol)[][];
    constructor(typename: string, vin: string);
    constructor(options: {
        typename: string;
        vin: string;
    });
}
export type FinancialVehicle = NCFFinancialVehicle | UnselectedFinancialVehicle;
/** Required account-statement document and URL. */
export declare class NCFAccountStatementPDF {
    readonly document: string;
    readonly document_url: string;
    static __fields: (string | symbol)[][];
    constructor(document: string, document_url: string);
    constructor(options: {
        document: string;
        document_url: string;
    });
}
/** Account-statement date and document number. */
export declare class NCFAccountStatementSummary {
    readonly date: $.DateValue;
    readonly document_number: string;
    static __fields: (string | symbol)[][];
    constructor(date: $.DateValue, document_number: string);
    constructor(options: {
        date: $.DateValue;
        document_number: string;
    });
}
/** Nullable credit fields attached to a vehicle. */
export declare class VehicleCredit {
    readonly current_quota: number | null;
    readonly credit_type: string | null;
    readonly credit_status: string | null;
    readonly status_text: string | null;
    readonly next_payment_amount: number | null;
    readonly next_payment_date: $.DateValue | null;
    readonly contract_number: string | null;
    readonly term: number | null;
    readonly overdue_quotas: string | null;
    readonly id: string | null;
    readonly balance: number | null;
    readonly account_domiciliation: string | null;
    readonly last_update: $.DateValue | null;
    readonly overdue_amount: number | null;
    readonly start_date: $.DateValue | null;
    readonly end_date: $.DateValue | null;
    readonly total_overdue_amount: number | null;
    readonly extended_rent: number | null;
    readonly support_email: string | null;
    readonly support_phone_number: string | null;
    readonly terms_and_conditions: string | null;
    readonly end_contract_email: string | null;
    readonly credits_portal: string | null;
    static __fields: (string | symbol)[][];
    constructor(current_quota: number | null, credit_type: string | null, credit_status: string | null, status_text: string | null, next_payment_amount: number | null, next_payment_date: $.DateValue | null, contract_number: string | null, term: number | null, overdue_quotas: string | null, id: string | null, balance: number | null, account_domiciliation: string | null, last_update: $.DateValue | null, overdue_amount: number | null, start_date: $.DateValue | null, end_date: $.DateValue | null, total_overdue_amount: number | null, extended_rent: number | null, support_email: string | null, support_phone_number: string | null, terms_and_conditions: string | null, end_contract_email: string | null, credits_portal: string | null);
    constructor(options: {
        current_quota: number | null;
        credit_type: string | null;
        credit_status: string | null;
        status_text: string | null;
        next_payment_amount: number | null;
        next_payment_date: $.DateValue | null;
        contract_number: string | null;
        term: number | null;
        overdue_quotas: string | null;
        id: string | null;
        balance: number | null;
        account_domiciliation: string | null;
        last_update: $.DateValue | null;
        overdue_amount: number | null;
        start_date: $.DateValue | null;
        end_date: $.DateValue | null;
        total_overdue_amount: number | null;
        extended_rent: number | null;
        support_email: string | null;
        support_phone_number: string | null;
        terms_and_conditions: string | null;
        end_contract_email: string | null;
        credits_portal: string | null;
    });
}
/** Vehicle VIN and its nullable credit details. */
export declare class VehicleCreditInfo {
    readonly vin: string;
    readonly credit: VehicleCredit | null;
    static __fields: (string | symbol)[][];
    constructor(vin: string, credit: VehicleCredit | null);
    constructor(options: {
        vin: string;
        credit: VehicleCredit | null;
    });
}
/** Required invoice UUID and file content. */
export declare class NCFInvoicePDF {
    readonly uuid: string;
    readonly file: string;
    static __fields: (string | symbol)[][];
    constructor(uuid: string, file: string);
    constructor(options: {
        uuid: string;
        file: string;
    });
}
/** Invoice date and UUID. */
export declare class NCFInvoiceSummary {
    readonly date: $.DateValue;
    readonly uuid: string;
    static __fields: (string | symbol)[][];
    constructor(date: $.DateValue, uuid: string);
    constructor(options: {
        date: $.DateValue;
        uuid: string;
    });
}
/** Nullable lease-only billing-statement details. */
export declare class NCFLeaseBillingStatementDetails {
    readonly prior_balance_amount: number | null;
    readonly vehicle_year: string | null;
    readonly vehicle_model: string | null;
    readonly vehicle_make: string | null;
    static __fields: (string | symbol)[][];
    constructor(prior_balance_amount: number | null, vehicle_year: string | null, vehicle_model: string | null, vehicle_make: string | null);
    constructor(options: {
        prior_balance_amount: number | null;
        vehicle_year: string | null;
        vehicle_model: string | null;
        vehicle_make: string | null;
    });
}
/** Common statement fields and optional lease details. */
export declare class NCFBillingStatement {
    readonly typename: string;
    readonly current_balance_amount: number | null;
    readonly payment_due_date: $.DateValue | null;
    readonly financial_account_id: string | null;
    readonly statement_date: $.DateValue | null;
    readonly total_amount_due: number | null;
    readonly lease_details: NCFLeaseBillingStatementDetails | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, current_balance_amount: number | null, payment_due_date: $.DateValue | null, financial_account_id: string | null, statement_date: $.DateValue | null, total_amount_due: number | null, lease_details: NCFLeaseBillingStatementDetails | null);
    constructor(options: {
        typename: string;
        current_balance_amount: number | null;
        payment_due_date: $.DateValue | null;
        financial_account_id: string | null;
        statement_date: $.DateValue | null;
        total_amount_due: number | null;
        lease_details: NCFLeaseBillingStatementDetails | null;
    });
}
/** Nullable lease-only transaction values. */
export declare class NCFLeaseTransactionDetails {
    readonly payment_total_amount: number | null;
    readonly payment_tax_amount: number | null;
    readonly payment_description: string | null;
    static __fields: (string | symbol)[][];
    constructor(payment_total_amount: number | null, payment_tax_amount: number | null, payment_description: string | null);
    constructor(options: {
        payment_total_amount: number | null;
        payment_tax_amount: number | null;
        payment_description: string | null;
    });
}
/** Common statement transaction fields and optional lease details. */
export declare class NCFStatementTransaction {
    readonly typename: string;
    readonly payment_amount: number | null;
    readonly financial_account_id: string | null;
    readonly statement_date: $.DateValue | null;
    readonly sequence_number: string | null;
    readonly lease_details: NCFLeaseTransactionDetails | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, payment_amount: number | null, financial_account_id: string | null, statement_date: $.DateValue | null, sequence_number: string | null, lease_details: NCFLeaseTransactionDetails | null);
    constructor(options: {
        typename: string;
        payment_amount: number | null;
        financial_account_id: string | null;
        statement_date: $.DateValue | null;
        sequence_number: string | null;
        lease_details: NCFLeaseTransactionDetails | null;
    });
}
/** Nullable billing statement and transaction lists. */
export declare class NCFAccountStatement {
    readonly billing_statements: ReadonlyArray<NCFBillingStatement | null> | null;
    readonly transactions: ReadonlyArray<NCFStatementTransaction | null> | null;
    static __fields: (string | symbol)[][];
    constructor(billing_statements: ReadonlyArray<NCFBillingStatement | null> | null, transactions: ReadonlyArray<NCFStatementTransaction | null> | null);
    constructor(options: {
        billing_statements: ReadonlyArray<NCFBillingStatement | null> | null;
        transactions: ReadonlyArray<NCFStatementTransaction | null> | null;
    });
}
/** Account number and nullable generated statement. */
export declare class NCFAccountStatementAccount {
    readonly account_number: string | null;
    readonly statement: NCFAccountStatement | null;
    static __fields: (string | symbol)[][];
    constructor(account_number: string | null, statement: NCFAccountStatement | null);
    constructor(options: {
        account_number: string | null;
        statement: NCFAccountStatement | null;
    });
}
export type NCFAccountStatementVehicle = NCFAccountStatementAccount | UnselectedFinanceResult;
/** Nullable payout amount, date, and lease termination amount. */
export declare class NCFPayoutQuote {
    readonly amount: number | null;
    readonly good_through_date: $.DateValue | null;
    readonly early_termination_amount: number | null;
    static __fields: (string | symbol)[][];
    constructor(amount: number | null, good_through_date: $.DateValue | null, early_termination_amount: number | null);
    constructor(options: {
        amount: number | null;
        good_through_date: $.DateValue | null;
        early_termination_amount: number | null;
    });
}
/** Required finance notification switches. */
export declare class NCFNotificationPreferences {
    readonly paperless_statement: boolean;
    readonly payment_due_in_one_day: boolean;
    readonly payment_received: boolean;
    readonly payment_past_due: boolean;
    readonly statement_available: boolean;
    static __fields: (string | symbol)[][];
    constructor(paperless_statement: boolean, payment_due_in_one_day: boolean, payment_received: boolean, payment_past_due: boolean, statement_available: boolean);
    constructor(options: {
        paperless_statement: boolean;
        payment_due_in_one_day: boolean;
        payment_received: boolean;
        payment_past_due: boolean;
        statement_available: boolean;
    });
}
/** Nullable loan-only payment allocation. */
export declare class NCFPaymentHistoryLoanDetails {
    readonly principle_amount: number | null;
    readonly interest_amount: number | null;
    static __fields: (string | symbol)[][];
    constructor(principle_amount: number | null, interest_amount: number | null);
    constructor(options: {
        principle_amount: number | null;
        interest_amount: number | null;
    });
}
/** Common payment-history fields and optional loan details. */
export declare class NCFPaymentHistoryEntry {
    readonly typename: string;
    readonly type: string | null;
    readonly description: string | null;
    readonly effective_date: $.DateValue | null;
    readonly process_date: $.DateValue | null;
    readonly total_payment_amount: number | null;
    readonly miscellaneous_fees: number | null;
    readonly base_rent_amount: number | null;
    readonly tax_amount: number | null;
    readonly late_fees: number | null;
    readonly admin_fees: number | null;
    readonly registration_fees: number | null;
    readonly loan_details: NCFPaymentHistoryLoanDetails | null;
    static __fields: (string | symbol)[][];
    constructor(typename: string, type: string | null, description: string | null, effective_date: $.DateValue | null, process_date: $.DateValue | null, total_payment_amount: number | null, miscellaneous_fees: number | null, base_rent_amount: number | null, tax_amount: number | null, late_fees: number | null, admin_fees: number | null, registration_fees: number | null, loan_details: NCFPaymentHistoryLoanDetails | null);
    constructor(options: {
        typename: string;
        type: string | null;
        description: string | null;
        effective_date: $.DateValue | null;
        process_date: $.DateValue | null;
        total_payment_amount: number | null;
        miscellaneous_fees: number | null;
        base_rent_amount: number | null;
        tax_amount: number | null;
        late_fees: number | null;
        admin_fees: number | null;
        registration_fees: number | null;
        loan_details: NCFPaymentHistoryLoanDetails | null;
    });
}
export {};
