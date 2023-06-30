import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum EmployeeStatus {
  VERFIED = "VERFIED",
  WAITING = "WAITING",
  SUSPENDED = "SUSPENDED"
}

type EagerPaymentInfo = {
  readonly type: string;
  readonly email?: string | null;
  readonly accountNum?: string | null;
  readonly fin?: string | null;
  readonly branchNum?: string | null;
  readonly accountName?: string | null;
}

type LazyPaymentInfo = {
  readonly type: string;
  readonly email?: string | null;
  readonly accountNum?: string | null;
  readonly fin?: string | null;
  readonly branchNum?: string | null;
  readonly accountName?: string | null;
}

export declare type PaymentInfo = LazyLoading extends LazyLoadingDisabled ? EagerPaymentInfo : LazyPaymentInfo

export declare const PaymentInfo: (new (init: ModelInit<PaymentInfo>) => PaymentInfo)

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
  readonly address: string;
  readonly unit?: string | null;
  readonly postalCode: string;
  readonly country: string;
  readonly state: string;
  readonly city: string;
}

type LazyAddress = {
  readonly address: string;
  readonly unit?: string | null;
  readonly postalCode: string;
  readonly country: string;
  readonly state: string;
  readonly city: string;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address)

type HouseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WorkorderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RatingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EmployeeProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EmployeeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerHouse = {
  readonly id: string;
  readonly userID: string;
  readonly employeeID: string;
  readonly address?: Address | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHouse = {
  readonly id: string;
  readonly userID: string;
  readonly employeeID: string;
  readonly address?: Address | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type House = LazyLoading extends LazyLoadingDisabled ? EagerHouse : LazyHouse

export declare const House: (new (init: ModelInit<House, HouseMetaData>) => House) & {
  copyOf(source: House, mutator: (draft: MutableModel<House, HouseMetaData>) => MutableModel<House, HouseMetaData> | void): House;
}

type EagerUser = {
  readonly id: string;
  readonly Houses?: (House | null)[] | null;
  readonly Workorders?: (House | null)[] | null;
  readonly subscriptionWorkorder?: number | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly id: string;
  readonly Houses: AsyncCollection<House>;
  readonly Workorders: AsyncCollection<House>;
  readonly subscriptionWorkorder?: number | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User, UserMetaData>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

type EagerWorkorder = {
  readonly id: string;
  readonly userID: string;
  readonly House?: House | null;
  readonly employeeID: string;
  readonly completionImage?: (string | null)[] | null;
  readonly usercompletion?: boolean | null;
  readonly workercompletion?: boolean | null;
  readonly money: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly workorderHouseId?: string | null;
}

type LazyWorkorder = {
  readonly id: string;
  readonly userID: string;
  readonly House: AsyncItem<House | undefined>;
  readonly employeeID: string;
  readonly completionImage?: (string | null)[] | null;
  readonly usercompletion?: boolean | null;
  readonly workercompletion?: boolean | null;
  readonly money: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly workorderHouseId?: string | null;
}

export declare type Workorder = LazyLoading extends LazyLoadingDisabled ? EagerWorkorder : LazyWorkorder

export declare const Workorder: (new (init: ModelInit<Workorder, WorkorderMetaData>) => Workorder) & {
  copyOf(source: Workorder, mutator: (draft: MutableModel<Workorder, WorkorderMetaData>) => MutableModel<Workorder, WorkorderMetaData> | void): Workorder;
}

type EagerRating = {
  readonly id: string;
  readonly description?: string | null;
  readonly Owner?: string | null;
  readonly rating?: number | null;
  readonly employeeprofileID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRating = {
  readonly id: string;
  readonly description?: string | null;
  readonly Owner?: string | null;
  readonly rating?: number | null;
  readonly employeeprofileID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Rating = LazyLoading extends LazyLoadingDisabled ? EagerRating : LazyRating

export declare const Rating: (new (init: ModelInit<Rating, RatingMetaData>) => Rating) & {
  copyOf(source: Rating, mutator: (draft: MutableModel<Rating, RatingMetaData>) => MutableModel<Rating, RatingMetaData> | void): Rating;
}

type EagerEmployeeProfile = {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly phoneNumber?: string | null;
  readonly dob?: string | null;
  readonly Ratings?: (Rating | null)[] | null;
  readonly profilePicture?: Document | null;
  readonly status: EmployeeStatus | keyof typeof EmployeeStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmployeeProfile = {
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly phoneNumber?: string | null;
  readonly dob?: string | null;
  readonly Ratings: AsyncCollection<Rating>;
  readonly profilePicture?: Document | null;
  readonly status: EmployeeStatus | keyof typeof EmployeeStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EmployeeProfile = LazyLoading extends LazyLoadingDisabled ? EagerEmployeeProfile : LazyEmployeeProfile

export declare const EmployeeProfile: (new (init: ModelInit<EmployeeProfile, EmployeeProfileMetaData>) => EmployeeProfile) & {
  copyOf(source: EmployeeProfile, mutator: (draft: MutableModel<EmployeeProfile, EmployeeProfileMetaData>) => MutableModel<EmployeeProfile, EmployeeProfileMetaData> | void): EmployeeProfile;
}

type EagerEmployee = {
  readonly id: string;
  readonly cognitoUser?: string | null;
  readonly address?: Address | null;
  readonly workingStatus?: string | null;
  readonly documents?: Document[] | null;
  readonly agreement?: Document[] | null;
  readonly systemRating?: number | null;
  readonly payment: PaymentInfo;
  readonly Houses?: (House | null)[] | null;
  readonly Workorders?: (Workorder | null)[] | null;
  readonly EmployeeProfile?: EmployeeProfile | null;
  readonly identityId: string;
  readonly status: EmployeeStatus | keyof typeof EmployeeStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly employeeEmployeeProfileId?: string | null;
}

type LazyEmployee = {
  readonly id: string;
  readonly cognitoUser?: string | null;
  readonly address?: Address | null;
  readonly workingStatus?: string | null;
  readonly documents?: Document[] | null;
  readonly agreement?: Document[] | null;
  readonly systemRating?: number | null;
  readonly payment: PaymentInfo;
  readonly Houses: AsyncCollection<House>;
  readonly Workorders: AsyncCollection<Workorder>;
  readonly EmployeeProfile: AsyncItem<EmployeeProfile | undefined>;
  readonly identityId: string;
  readonly status: EmployeeStatus | keyof typeof EmployeeStatus;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly employeeEmployeeProfileId?: string | null;
}

export declare type Employee = LazyLoading extends LazyLoadingDisabled ? EagerEmployee : LazyEmployee

export declare const Employee: (new (init: ModelInit<Employee, EmployeeMetaData>) => Employee) & {
  copyOf(source: Employee, mutator: (draft: MutableModel<Employee, EmployeeMetaData>) => MutableModel<Employee, EmployeeMetaData> | void): Employee;
}