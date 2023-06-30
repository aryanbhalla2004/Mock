/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmployeeProfileCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    dob?: string;
    status?: string;
};
export declare type EmployeeProfileCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    dob?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmployeeProfileCreateFormOverridesProps = {
    EmployeeProfileCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    dob?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type EmployeeProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: EmployeeProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EmployeeProfileCreateFormInputValues) => EmployeeProfileCreateFormInputValues;
    onSuccess?: (fields: EmployeeProfileCreateFormInputValues) => void;
    onError?: (fields: EmployeeProfileCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmployeeProfileCreateFormInputValues) => EmployeeProfileCreateFormInputValues;
    onValidate?: EmployeeProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function EmployeeProfileCreateForm(props: EmployeeProfileCreateFormProps): React.ReactElement;
