/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RatingCreateFormInputValues = {
    description?: string;
    Owner?: string;
    rating?: number;
    employeeID?: string;
};
export declare type RatingCreateFormValidationValues = {
    description?: ValidationFunction<string>;
    Owner?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
    employeeID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RatingCreateFormOverridesProps = {
    RatingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    Owner?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    employeeID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RatingCreateFormProps = React.PropsWithChildren<{
    overrides?: RatingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RatingCreateFormInputValues) => RatingCreateFormInputValues;
    onSuccess?: (fields: RatingCreateFormInputValues) => void;
    onError?: (fields: RatingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RatingCreateFormInputValues) => RatingCreateFormInputValues;
    onValidate?: RatingCreateFormValidationValues;
} & React.CSSProperties>;
export default function RatingCreateForm(props: RatingCreateFormProps): React.ReactElement;
