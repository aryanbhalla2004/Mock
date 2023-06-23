/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Workorder } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type WorkorderUpdateFormInputValues = {
    userID?: string;
    employeeID?: string;
    completionImage?: string[];
    usercompletion?: boolean;
    workercompletion?: boolean;
    money?: string;
};
export declare type WorkorderUpdateFormValidationValues = {
    userID?: ValidationFunction<string>;
    employeeID?: ValidationFunction<string>;
    completionImage?: ValidationFunction<string>;
    usercompletion?: ValidationFunction<boolean>;
    workercompletion?: ValidationFunction<boolean>;
    money?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkorderUpdateFormOverridesProps = {
    WorkorderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    employeeID?: PrimitiveOverrideProps<TextFieldProps>;
    completionImage?: PrimitiveOverrideProps<TextFieldProps>;
    usercompletion?: PrimitiveOverrideProps<SwitchFieldProps>;
    workercompletion?: PrimitiveOverrideProps<SwitchFieldProps>;
    money?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type WorkorderUpdateFormProps = React.PropsWithChildren<{
    overrides?: WorkorderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    workorder?: Workorder;
    onSubmit?: (fields: WorkorderUpdateFormInputValues) => WorkorderUpdateFormInputValues;
    onSuccess?: (fields: WorkorderUpdateFormInputValues) => void;
    onError?: (fields: WorkorderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkorderUpdateFormInputValues) => WorkorderUpdateFormInputValues;
    onValidate?: WorkorderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WorkorderUpdateForm(props: WorkorderUpdateFormProps): React.ReactElement;
