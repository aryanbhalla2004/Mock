/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { EmployeeProfile } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmployeeProfileUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    dob?: string;
    status?: string;
};
export declare type EmployeeProfileUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    dob?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmployeeProfileUpdateFormOverridesProps = {
    EmployeeProfileUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    dob?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type EmployeeProfileUpdateFormProps = React.PropsWithChildren<{
    overrides?: EmployeeProfileUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    employeeProfile?: EmployeeProfile;
    onSubmit?: (fields: EmployeeProfileUpdateFormInputValues) => EmployeeProfileUpdateFormInputValues;
    onSuccess?: (fields: EmployeeProfileUpdateFormInputValues) => void;
    onError?: (fields: EmployeeProfileUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmployeeProfileUpdateFormInputValues) => EmployeeProfileUpdateFormInputValues;
    onValidate?: EmployeeProfileUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EmployeeProfileUpdateForm(props: EmployeeProfileUpdateFormProps): React.ReactElement;
