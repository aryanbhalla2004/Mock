import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type EagerDocument = {
  readonly type?: string | null;
  readonly document?: string | null;
}

type LazyDocument = {
  readonly type?: string | null;
  readonly document?: string | null;
}

export declare type Document = LazyLoading extends LazyLoadingDisabled ? EagerDocument : LazyDocument

export declare const Document: (new (init: ModelInit<Document>) => Document)

type EagerAddress = {
  readonly address?: string | null;
  readonly unit?: string | null;
  readonly postalcode?: string | null;
  readonly country?: string | null;
  readonly state?: string | null;
}

type LazyAddress = {
  readonly address?: string | null;
  readonly unit?: string | null;
  readonly postalcode?: string | null;
  readonly country?: string | null;
  readonly state?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address)

type RatingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EmployeeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerRating = {
  readonly id: string;
  readonly description?: string | null;
  readonly Owner?: string | null;
  readonly rating?: number | null;
  readonly employeeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRating = {
  readonly id: string;
  readonly description?: string | null;
  readonly Owner?: string | null;
  readonly rating?: number | null;
  readonly employeeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Rating = LazyLoading extends LazyLoadingDisabled ? EagerRating : LazyRating

export declare const Rating: (new (init: ModelInit<Rating, RatingMetaData>) => Rating) & {
  copyOf(source: Rating, mutator: (draft: MutableModel<Rating, RatingMetaData>) => MutableModel<Rating, RatingMetaData> | void): Rating;
}

type EagerEmployee = {
  readonly id: string;
  readonly cognitoUser?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly phoneNumber?: string | null;
  readonly dob?: string | null;
  readonly address?: Address | null;
  readonly workingStatus?: string | null;
  readonly documents?: Document[] | null;
  readonly agreement?: Document[] | null;
  readonly ratingValue?: number | null;
  readonly Ratings?: (Rating | null)[] | null;
  readonly systemRating?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmployee = {
  readonly id: string;
  readonly cognitoUser?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly phoneNumber?: string | null;
  readonly dob?: string | null;
  readonly address?: Address | null;
  readonly workingStatus?: string | null;
  readonly documents?: Document[] | null;
  readonly agreement?: Document[] | null;
  readonly ratingValue?: number | null;
  readonly Ratings: AsyncCollection<Rating>;
  readonly systemRating?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Employee = LazyLoading extends LazyLoadingDisabled ? EagerEmployee : LazyEmployee

export declare const Employee: (new (init: ModelInit<Employee, EmployeeMetaData>) => Employee) & {
  copyOf(source: Employee, mutator: (draft: MutableModel<Employee, EmployeeMetaData>) => MutableModel<Employee, EmployeeMetaData> | void): Employee;
}