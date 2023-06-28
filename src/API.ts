/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

<<<<<<< HEAD
export type CreateHouseInput = {
||||||| c4450da
export type CreateRatingInput = {
=======
export type CreateUserInput = {
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
  id?: string | null,
<<<<<<< HEAD
  userID: string,
  employeeID: string,
  address?: AddressInput | null,
||||||| c4450da
  description?: string | null,
  Owner?: string | null,
  rating?: number | null,
  employeeID: string,
=======
  subscriptionWorkorder?: number | null,
  name?: string | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
  _version?: number | null,
};

<<<<<<< HEAD
export type AddressInput = {
  address: string,
  unit?: string | null,
  postalCode: string,
  country: string,
  state: string,
  city: string,
||||||| c4450da
export type ModelRatingConditionInput = {
  description?: ModelStringInput | null,
  Owner?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  employeeID?: ModelIDInput | null,
  and?: Array< ModelRatingConditionInput | null > | null,
  or?: Array< ModelRatingConditionInput | null > | null,
  not?: ModelRatingConditionInput | null,
=======
export type ModelUserConditionInput = {
  subscriptionWorkorder?: ModelIntInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
};

<<<<<<< HEAD
export type ModelHouseConditionInput = {
  userID?: ModelIDInput | null,
  employeeID?: ModelIDInput | null,
  and?: Array< ModelHouseConditionInput | null > | null,
  or?: Array< ModelHouseConditionInput | null > | null,
  not?: ModelHouseConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
||||||| c4450da
export type ModelStringInput = {
=======
export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelStringInput = {
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

<<<<<<< HEAD
export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type House = {
  __typename: "House",
  id: string,
  userID: string,
  employeeID: string,
  address?: Address | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type Address = {
  __typename: "Address",
  address: string,
  unit?: string | null,
  postalCode: string,
  country: string,
  state: string,
  city: string,
};

export type UpdateHouseInput = {
  id: string,
  userID?: string | null,
  employeeID?: string | null,
  address?: AddressInput | null,
  _version?: number | null,
};

export type DeleteHouseInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  subscriptionWorkorder?: number | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  subscriptionWorkorder?: ModelIntInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
||||||| c4450da
export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
=======
export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

<<<<<<< HEAD
export type ModelStringInput = {
||||||| c4450da
export type ModelIDInput = {
=======
export type User = {
  __typename: "User",
  id: string,
  Houses?: ModelHouseConnection | null,
  Workorders?: ModelHouseConnection | null,
  subscriptionWorkorder?: number | null,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelHouseConnection = {
  __typename: "ModelHouseConnection",
  items:  Array<House | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type House = {
  __typename: "House",
  id: string,
  userID: string,
  employeeID?: string | null,
  address?: Address | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Address = {
  __typename: "Address",
  address?: string | null,
  unit?: string | null,
  postalcode?: string | null,
  country?: string | null,
  state?: string | null,
};

export type UpdateUserInput = {
  id: string,
  subscriptionWorkorder?: number | null,
  name?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateWorkorderInput = {
  id?: string | null,
  userID: string,
  employeeID?: string | null,
  completionImage?: Array< string | null > | null,
  usercompletion?: boolean | null,
  workercompletion?: boolean | null,
  money: string,
  _version?: number | null,
  workorderHouseId?: string | null,
};

export type ModelWorkorderConditionInput = {
  userID?: ModelIDInput | null,
  employeeID?: ModelIDInput | null,
  completionImage?: ModelStringInput | null,
  usercompletion?: ModelBooleanInput | null,
  workercompletion?: ModelBooleanInput | null,
  money?: ModelStringInput | null,
  and?: Array< ModelWorkorderConditionInput | null > | null,
  or?: Array< ModelWorkorderConditionInput | null > | null,
  not?: ModelWorkorderConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  workorderHouseId?: ModelIDInput | null,
};

export type ModelIDInput = {
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

<<<<<<< HEAD
export type User = {
  __typename: "User",
||||||| c4450da
export type Rating = {
  __typename: "Rating",
=======
export type Workorder = {
  __typename: "Workorder",
  id: string,
  userID: string,
  House?: House | null,
  employeeID?: string | null,
  completionImage?: Array< string | null > | null,
  usercompletion?: boolean | null,
  workercompletion?: boolean | null,
  money: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  workorderHouseId?: string | null,
};

export type UpdateWorkorderInput = {
  id: string,
  userID?: string | null,
  employeeID?: string | null,
  completionImage?: Array< string | null > | null,
  usercompletion?: boolean | null,
  workercompletion?: boolean | null,
  money?: string | null,
  _version?: number | null,
  workorderHouseId?: string | null,
};

export type DeleteWorkorderInput = {
  id: string,
  _version?: number | null,
};

export type CreateHouseInput = {
  id?: string | null,
  userID: string,
  employeeID?: string | null,
  address?: AddressInput | null,
  _version?: number | null,
};

export type AddressInput = {
  address?: string | null,
  unit?: string | null,
  postalcode?: string | null,
  country?: string | null,
  state?: string | null,
};

export type ModelHouseConditionInput = {
  userID?: ModelIDInput | null,
  employeeID?: ModelIDInput | null,
  and?: Array< ModelHouseConditionInput | null > | null,
  or?: Array< ModelHouseConditionInput | null > | null,
  not?: ModelHouseConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateHouseInput = {
  id: string,
  userID?: string | null,
  employeeID?: string | null,
  address?: AddressInput | null,
  _version?: number | null,
};

export type DeleteHouseInput = {
  id: string,
  _version?: number | null,
};

export type CreateRatingInput = {
  id?: string | null,
  description?: string | null,
  Owner?: string | null,
  rating?: number | null,
  employeeID: string,
  _version?: number | null,
};

export type ModelRatingConditionInput = {
  description?: ModelStringInput | null,
  Owner?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  employeeID?: ModelIDInput | null,
  and?: Array< ModelRatingConditionInput | null > | null,
  or?: Array< ModelRatingConditionInput | null > | null,
  not?: ModelRatingConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Rating = {
  __typename: "Rating",
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
  id: string,
<<<<<<< HEAD
  Houses?: ModelHouseConnection | null,
  Workorders?: ModelHouseConnection | null,
  subscriptionWorkorder?: number | null,
  name?: string | null,
||||||| c4450da
  description?: string | null,
  Owner?: string | null,
  rating?: number | null,
  employeeID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateRatingInput = {
  id: string,
  description?: string | null,
  Owner?: string | null,
  rating?: number | null,
  employeeID?: string | null,
  _version?: number | null,
};

export type DeleteRatingInput = {
  id: string,
  _version?: number | null,
};

export type CreateEmployeeInput = {
  id?: string | null,
  cognitoUser?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  dob?: string | null,
  address?: AddressInput | null,
  workingStatus?: string | null,
  documents?: Array< DocumentInput > | null,
  agreement?: Array< DocumentInput > | null,
  ratingValue?: number | null,
  systemRating?: number | null,
  _version?: number | null,
};

export type AddressInput = {
  address?: string | null,
  unit?: string | null,
  postalcode?: string | null,
  country?: string | null,
  state?: string | null,
};

export type DocumentInput = {
  type?: string | null,
  document?: string | null,
};

export type ModelEmployeeConditionInput = {
  cognitoUser?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  workingStatus?: ModelStringInput | null,
  ratingValue?: ModelFloatInput | null,
  systemRating?: ModelFloatInput | null,
  and?: Array< ModelEmployeeConditionInput | null > | null,
  or?: Array< ModelEmployeeConditionInput | null > | null,
  not?: ModelEmployeeConditionInput | null,
};

export type Employee = {
  __typename: "Employee",
  id: string,
  cognitoUser?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  dob?: string | null,
  address?: Address | null,
  workingStatus?: string | null,
  documents?:  Array<Document > | null,
  agreement?:  Array<Document > | null,
  ratingValue?: number | null,
  Ratings?: ModelRatingConnection | null,
  systemRating?: number | null,
=======
  description?: string | null,
  Owner?: string | null,
  rating?: number | null,
  employeeID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateRatingInput = {
  id: string,
  description?: string | null,
  Owner?: string | null,
  rating?: number | null,
  employeeID?: string | null,
  _version?: number | null,
};

export type DeleteRatingInput = {
  id: string,
  _version?: number | null,
};

export type CreateEmployeeInput = {
  id?: string | null,
  cognitoUser?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  dob?: string | null,
  address?: AddressInput | null,
  workingStatus?: string | null,
  documents?: Array< DocumentInput > | null,
  agreement?: Array< DocumentInput > | null,
  ratingValue?: number | null,
  systemRating?: number | null,
  _version?: number | null,
};

export type DocumentInput = {
  type?: string | null,
  document?: string | null,
};

export type ModelEmployeeConditionInput = {
  cognitoUser?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  workingStatus?: ModelStringInput | null,
  ratingValue?: ModelFloatInput | null,
  systemRating?: ModelFloatInput | null,
  and?: Array< ModelEmployeeConditionInput | null > | null,
  or?: Array< ModelEmployeeConditionInput | null > | null,
  not?: ModelEmployeeConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Employee = {
  __typename: "Employee",
  id: string,
  cognitoUser?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  dob?: string | null,
  address?: Address | null,
  workingStatus?: string | null,
  documents?:  Array<Document > | null,
  agreement?:  Array<Document > | null,
  ratingValue?: number | null,
  Ratings?: ModelHouseConnection | null,
  systemRating?: number | null,
  Houses?: ModelHouseConnection | null,
  Workorders?: ModelHouseConnection | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

<<<<<<< HEAD
export type ModelHouseConnection = {
  __typename: "ModelHouseConnection",
  items:  Array<House | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateUserInput = {
  id: string,
  subscriptionWorkorder?: number | null,
  name?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateWorkorderInput = {
  id?: string | null,
  userID: string,
  employeeID: string,
  completionImage?: Array< string | null > | null,
  usercompletion?: boolean | null,
  workercompletion?: boolean | null,
  money: string,
  _version?: number | null,
  workorderHouseId?: string | null,
};

export type ModelWorkorderConditionInput = {
  userID?: ModelIDInput | null,
  employeeID?: ModelIDInput | null,
  completionImage?: ModelStringInput | null,
  usercompletion?: ModelBooleanInput | null,
  workercompletion?: ModelBooleanInput | null,
  money?: ModelStringInput | null,
  and?: Array< ModelWorkorderConditionInput | null > | null,
  or?: Array< ModelWorkorderConditionInput | null > | null,
  not?: ModelWorkorderConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  workorderHouseId?: ModelIDInput | null,
};

export type Workorder = {
  __typename: "Workorder",
  id: string,
  userID: string,
  House?: House | null,
  employeeID: string,
  completionImage?: Array< string | null > | null,
  usercompletion?: boolean | null,
  workercompletion?: boolean | null,
  money: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  workorderHouseId?: string | null,
};

export type UpdateWorkorderInput = {
  id: string,
  userID?: string | null,
  employeeID?: string | null,
  completionImage?: Array< string | null > | null,
  usercompletion?: boolean | null,
  workercompletion?: boolean | null,
  money?: string | null,
  _version?: number | null,
  workorderHouseId?: string | null,
};

export type DeleteWorkorderInput = {
  id: string,
  _version?: number | null,
};

export type CreateRatingInput = {
  id?: string | null,
  description?: string | null,
  Owner?: string | null,
  rating?: number | null,
  employeeprofileID: string,
  _version?: number | null,
};

export type ModelRatingConditionInput = {
  description?: ModelStringInput | null,
  Owner?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  employeeprofileID?: ModelIDInput | null,
  and?: Array< ModelRatingConditionInput | null > | null,
  or?: Array< ModelRatingConditionInput | null > | null,
  not?: ModelRatingConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Rating = {
  __typename: "Rating",
  id: string,
  description?: string | null,
  Owner?: string | null,
  rating?: number | null,
  employeeprofileID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateRatingInput = {
  id: string,
  description?: string | null,
  Owner?: string | null,
  rating?: number | null,
  employeeprofileID?: string | null,
  _version?: number | null,
};

export type DeleteRatingInput = {
  id: string,
  _version?: number | null,
};

export type CreateEmployeeProfileInput = {
  id?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  dob?: string | null,
  _version?: number | null,
};

export type ModelEmployeeProfileConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  and?: Array< ModelEmployeeProfileConditionInput | null > | null,
  or?: Array< ModelEmployeeProfileConditionInput | null > | null,
  not?: ModelEmployeeProfileConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type EmployeeProfile = {
  __typename: "EmployeeProfile",
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  dob?: string | null,
  Ratings?: ModelRatingConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
||||||| c4450da
export type Address = {
  __typename: "Address",
  address?: string | null,
  unit?: string | null,
  postalcode?: string | null,
  country?: string | null,
  state?: string | null,
};

export type Document = {
  __typename: "Document",
  type?: string | null,
  document?: string | null,
=======
export type Document = {
  __typename: "Document",
  type?: string | null,
  document?: string | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
};

<<<<<<< HEAD
export type ModelRatingConnection = {
  __typename: "ModelRatingConnection",
  items:  Array<Rating | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateEmployeeProfileInput = {
||||||| c4450da
export type ModelRatingConnection = {
  __typename: "ModelRatingConnection",
  items:  Array<Rating | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateEmployeeInput = {
=======
export type UpdateEmployeeInput = {
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  phoneNumber?: string | null,
  dob?: string | null,
  _version?: number | null,
};

export type DeleteEmployeeProfileInput = {
  id: string,
  _version?: number | null,
};

export type CreateEmployeeInput = {
  id?: string | null,
  cognitoUser?: string | null,
  address?: AddressInput | null,
  workingStatus?: string | null,
  documents?: Array< DocumentInput > | null,
  agreement?: Array< DocumentInput > | null,
  systemRating?: number | null,
  payment?: PaymentInfoInput | null,
  _version?: number | null,
  employeeEmployeeProfileId?: string | null,
};

export type DocumentInput = {
  type?: string | null,
  document?: string | null,
};

export type PaymentInfoInput = {
  type: string,
  email?: string | null,
  accountNum?: string | null,
  fin?: string | null,
  branchNum?: string | null,
  accountName?: string | null,
};

export type ModelEmployeeConditionInput = {
  cognitoUser?: ModelIDInput | null,
  workingStatus?: ModelStringInput | null,
  systemRating?: ModelFloatInput | null,
  and?: Array< ModelEmployeeConditionInput | null > | null,
  or?: Array< ModelEmployeeConditionInput | null > | null,
  not?: ModelEmployeeConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  employeeEmployeeProfileId?: ModelIDInput | null,
};

export type Employee = {
  __typename: "Employee",
  id: string,
  cognitoUser?: string | null,
  address?: Address | null,
  workingStatus?: string | null,
  documents?:  Array<Document > | null,
  agreement?:  Array<Document > | null,
  systemRating?: number | null,
  payment?: PaymentInfo | null,
  Houses?: ModelHouseConnection | null,
  Workorders?: ModelWorkorderConnection | null,
  EmployeeProfile?: EmployeeProfile | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  employeeEmployeeProfileId?: string | null,
};

export type Document = {
  __typename: "Document",
  type?: string | null,
  document?: string | null,
};

export type PaymentInfo = {
  __typename: "PaymentInfo",
  type: string,
  email?: string | null,
  accountNum?: string | null,
  fin?: string | null,
  branchNum?: string | null,
  accountName?: string | null,
};

export type ModelWorkorderConnection = {
  __typename: "ModelWorkorderConnection",
  items:  Array<Workorder | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateEmployeeInput = {
  id: string,
  cognitoUser?: string | null,
  address?: AddressInput | null,
  workingStatus?: string | null,
  documents?: Array< DocumentInput > | null,
  agreement?: Array< DocumentInput > | null,
  systemRating?: number | null,
  payment?: PaymentInfoInput | null,
  _version?: number | null,
  employeeEmployeeProfileId?: string | null,
};

export type DeleteEmployeeInput = {
  id: string,
  _version?: number | null,
};

<<<<<<< HEAD
export type ModelHouseFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  employeeID?: ModelIDInput | null,
  and?: Array< ModelHouseFilterInput | null > | null,
  or?: Array< ModelHouseFilterInput | null > | null,
  not?: ModelHouseFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  subscriptionWorkorder?: ModelIntInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWorkorderFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  employeeID?: ModelIDInput | null,
  completionImage?: ModelStringInput | null,
  usercompletion?: ModelBooleanInput | null,
  workercompletion?: ModelBooleanInput | null,
  money?: ModelStringInput | null,
  and?: Array< ModelWorkorderFilterInput | null > | null,
  or?: Array< ModelWorkorderFilterInput | null > | null,
  not?: ModelWorkorderFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  workorderHouseId?: ModelIDInput | null,
};

||||||| c4450da
=======
export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  subscriptionWorkorder?: ModelIntInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWorkorderFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  employeeID?: ModelIDInput | null,
  completionImage?: ModelStringInput | null,
  usercompletion?: ModelBooleanInput | null,
  workercompletion?: ModelBooleanInput | null,
  money?: ModelStringInput | null,
  and?: Array< ModelWorkorderFilterInput | null > | null,
  or?: Array< ModelWorkorderFilterInput | null > | null,
  not?: ModelWorkorderFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  workorderHouseId?: ModelIDInput | null,
};

export type ModelWorkorderConnection = {
  __typename: "ModelWorkorderConnection",
  items:  Array<Workorder | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelHouseFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  employeeID?: ModelIDInput | null,
  and?: Array< ModelHouseFilterInput | null > | null,
  or?: Array< ModelHouseFilterInput | null > | null,
  not?: ModelHouseFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
export type ModelRatingFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  Owner?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  employeeprofileID?: ModelIDInput | null,
  and?: Array< ModelRatingFilterInput | null > | null,
  or?: Array< ModelRatingFilterInput | null > | null,
  not?: ModelRatingFilterInput | null,
<<<<<<< HEAD
  _deleted?: ModelBooleanInput | null,
};

export type ModelEmployeeProfileFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  and?: Array< ModelEmployeeProfileFilterInput | null > | null,
  or?: Array< ModelEmployeeProfileFilterInput | null > | null,
  not?: ModelEmployeeProfileFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelEmployeeProfileConnection = {
  __typename: "ModelEmployeeProfileConnection",
  items:  Array<EmployeeProfile | null >,
  nextToken?: string | null,
  startedAt?: number | null,
||||||| c4450da
=======
  _deleted?: ModelBooleanInput | null,
};

export type ModelRatingConnection = {
  __typename: "ModelRatingConnection",
  items:  Array<Rating | null >,
  nextToken?: string | null,
  startedAt?: number | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDInput | null,
  cognitoUser?: ModelIDInput | null,
  workingStatus?: ModelStringInput | null,
  systemRating?: ModelFloatInput | null,
  and?: Array< ModelEmployeeFilterInput | null > | null,
  or?: Array< ModelEmployeeFilterInput | null > | null,
  not?: ModelEmployeeFilterInput | null,
<<<<<<< HEAD
  _deleted?: ModelBooleanInput | null,
  employeeEmployeeProfileId?: ModelIDInput | null,
||||||| c4450da
=======
  _deleted?: ModelBooleanInput | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
};

export type ModelEmployeeConnection = {
  __typename: "ModelEmployeeConnection",
  items:  Array<Employee | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

<<<<<<< HEAD
export type ModelSubscriptionHouseFilterInput = {
||||||| c4450da
export type ModelSubscriptionRatingFilterInput = {
=======
export type ModelSubscriptionUserFilterInput = {
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
  id?: ModelSubscriptionIDInput | null,
<<<<<<< HEAD
  userID?: ModelSubscriptionIDInput | null,
  employeeID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionHouseFilterInput | null > | null,
  or?: Array< ModelSubscriptionHouseFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
||||||| c4450da
  description?: ModelSubscriptionStringInput | null,
  Owner?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  employeeID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionRatingFilterInput | null > | null,
  or?: Array< ModelSubscriptionRatingFilterInput | null > | null,
=======
  subscriptionWorkorder?: ModelSubscriptionIntInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

<<<<<<< HEAD
export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  subscriptionWorkorder?: ModelSubscriptionIntInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

||||||| c4450da
=======
export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

<<<<<<< HEAD
export type ModelSubscriptionWorkorderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  employeeID?: ModelSubscriptionIDInput | null,
  completionImage?: ModelSubscriptionStringInput | null,
  usercompletion?: ModelSubscriptionBooleanInput | null,
  workercompletion?: ModelSubscriptionBooleanInput | null,
  money?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWorkorderFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkorderFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionRatingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  Owner?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  employeeprofileID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionRatingFilterInput | null > | null,
  or?: Array< ModelSubscriptionRatingFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

||||||| c4450da
=======
export type ModelSubscriptionWorkorderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  employeeID?: ModelSubscriptionIDInput | null,
  completionImage?: ModelSubscriptionStringInput | null,
  usercompletion?: ModelSubscriptionBooleanInput | null,
  workercompletion?: ModelSubscriptionBooleanInput | null,
  money?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWorkorderFilterInput | null > | null,
  or?: Array< ModelSubscriptionWorkorderFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionHouseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  employeeID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionHouseFilterInput | null > | null,
  or?: Array< ModelSubscriptionHouseFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionRatingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  Owner?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  employeeID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionRatingFilterInput | null > | null,
  or?: Array< ModelSubscriptionRatingFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionEmployeeProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  dob?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEmployeeProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionEmployeeProfileFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionEmployeeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  workingStatus?: ModelSubscriptionStringInput | null,
  systemRating?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionEmployeeFilterInput | null > | null,
  or?: Array< ModelSubscriptionEmployeeFilterInput | null > | null,
<<<<<<< HEAD
  _deleted?: ModelBooleanInput | null,
};

export type CreateHouseMutationVariables = {
  input: CreateHouseInput,
  condition?: ModelHouseConditionInput | null,
};

export type CreateHouseMutation = {
  createHouse?:  {
    __typename: "House",
    id: string,
    userID: string,
    employeeID: string,
    address?:  {
      __typename: "Address",
      address: string,
      unit?: string | null,
      postalCode: string,
      country: string,
      state: string,
      city: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateHouseMutationVariables = {
  input: UpdateHouseInput,
  condition?: ModelHouseConditionInput | null,
};

export type UpdateHouseMutation = {
  updateHouse?:  {
    __typename: "House",
    id: string,
    userID: string,
    employeeID: string,
    address?:  {
      __typename: "Address",
      address: string,
      unit?: string | null,
      postalCode: string,
      country: string,
      state: string,
      city: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteHouseMutationVariables = {
  input: DeleteHouseInput,
  condition?: ModelHouseConditionInput | null,
};

export type DeleteHouseMutation = {
  deleteHouse?:  {
    __typename: "House",
    id: string,
    userID: string,
    employeeID: string,
    address?:  {
      __typename: "Address",
      address: string,
      unit?: string | null,
      postalCode: string,
      country: string,
      state: string,
      city: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subscriptionWorkorder?: number | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subscriptionWorkorder?: number | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subscriptionWorkorder?: number | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateWorkorderMutationVariables = {
  input: CreateWorkorderInput,
  condition?: ModelWorkorderConditionInput | null,
};

export type CreateWorkorderMutation = {
  createWorkorder?:  {
    __typename: "Workorder",
    id: string,
    userID: string,
    House?:  {
      __typename: "House",
      id: string,
      userID: string,
      employeeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    employeeID: string,
    completionImage?: Array< string | null > | null,
    usercompletion?: boolean | null,
    workercompletion?: boolean | null,
    money: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    workorderHouseId?: string | null,
  } | null,
};

export type UpdateWorkorderMutationVariables = {
  input: UpdateWorkorderInput,
  condition?: ModelWorkorderConditionInput | null,
};

export type UpdateWorkorderMutation = {
  updateWorkorder?:  {
    __typename: "Workorder",
    id: string,
    userID: string,
    House?:  {
      __typename: "House",
      id: string,
      userID: string,
      employeeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    employeeID: string,
    completionImage?: Array< string | null > | null,
    usercompletion?: boolean | null,
    workercompletion?: boolean | null,
    money: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    workorderHouseId?: string | null,
  } | null,
};

export type DeleteWorkorderMutationVariables = {
  input: DeleteWorkorderInput,
  condition?: ModelWorkorderConditionInput | null,
};

export type DeleteWorkorderMutation = {
  deleteWorkorder?:  {
    __typename: "Workorder",
    id: string,
    userID: string,
    House?:  {
      __typename: "House",
      id: string,
      userID: string,
      employeeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    employeeID: string,
    completionImage?: Array< string | null > | null,
    usercompletion?: boolean | null,
    workercompletion?: boolean | null,
    money: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    workorderHouseId?: string | null,
  } | null,
||||||| c4450da
=======
  _deleted?: ModelBooleanInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subscriptionWorkorder?: number | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subscriptionWorkorder?: number | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subscriptionWorkorder?: number | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreateWorkorderMutationVariables = {
  input: CreateWorkorderInput,
  condition?: ModelWorkorderConditionInput | null,
};

export type CreateWorkorderMutation = {
  createWorkorder?:  {
    __typename: "Workorder",
    id: string,
    userID: string,
    House?:  {
      __typename: "House",
      id: string,
      userID: string,
      employeeID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    employeeID?: string | null,
    completionImage?: Array< string | null > | null,
    usercompletion?: boolean | null,
    workercompletion?: boolean | null,
    money: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    workorderHouseId?: string | null,
  } | null,
};

export type UpdateWorkorderMutationVariables = {
  input: UpdateWorkorderInput,
  condition?: ModelWorkorderConditionInput | null,
};

export type UpdateWorkorderMutation = {
  updateWorkorder?:  {
    __typename: "Workorder",
    id: string,
    userID: string,
    House?:  {
      __typename: "House",
      id: string,
      userID: string,
      employeeID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    employeeID?: string | null,
    completionImage?: Array< string | null > | null,
    usercompletion?: boolean | null,
    workercompletion?: boolean | null,
    money: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    workorderHouseId?: string | null,
  } | null,
};

export type DeleteWorkorderMutationVariables = {
  input: DeleteWorkorderInput,
  condition?: ModelWorkorderConditionInput | null,
};

export type DeleteWorkorderMutation = {
  deleteWorkorder?:  {
    __typename: "Workorder",
    id: string,
    userID: string,
    House?:  {
      __typename: "House",
      id: string,
      userID: string,
      employeeID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    employeeID?: string | null,
    completionImage?: Array< string | null > | null,
    usercompletion?: boolean | null,
    workercompletion?: boolean | null,
    money: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    workorderHouseId?: string | null,
  } | null,
};

export type CreateHouseMutationVariables = {
  input: CreateHouseInput,
  condition?: ModelHouseConditionInput | null,
};

export type CreateHouseMutation = {
  createHouse?:  {
    __typename: "House",
    id: string,
    userID: string,
    employeeID?: string | null,
    address?:  {
      __typename: "Address",
      address?: string | null,
      unit?: string | null,
      postalcode?: string | null,
      country?: string | null,
      state?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateHouseMutationVariables = {
  input: UpdateHouseInput,
  condition?: ModelHouseConditionInput | null,
};

export type UpdateHouseMutation = {
  updateHouse?:  {
    __typename: "House",
    id: string,
    userID: string,
    employeeID?: string | null,
    address?:  {
      __typename: "Address",
      address?: string | null,
      unit?: string | null,
      postalcode?: string | null,
      country?: string | null,
      state?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteHouseMutationVariables = {
  input: DeleteHouseInput,
  condition?: ModelHouseConditionInput | null,
};

export type DeleteHouseMutation = {
  deleteHouse?:  {
    __typename: "House",
    id: string,
    userID: string,
    employeeID?: string | null,
    address?:  {
      __typename: "Address",
      address?: string | null,
      unit?: string | null,
      postalcode?: string | null,
      country?: string | null,
      state?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
};

export type CreateRatingMutationVariables = {
  input: CreateRatingInput,
  condition?: ModelRatingConditionInput | null,
};

export type CreateRatingMutation = {
  createRating?:  {
    __typename: "Rating",
    id: string,
    description?: string | null,
    Owner?: string | null,
    rating?: number | null,
    employeeprofileID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateRatingMutationVariables = {
  input: UpdateRatingInput,
  condition?: ModelRatingConditionInput | null,
};

export type UpdateRatingMutation = {
  updateRating?:  {
    __typename: "Rating",
    id: string,
    description?: string | null,
    Owner?: string | null,
    rating?: number | null,
    employeeprofileID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteRatingMutationVariables = {
  input: DeleteRatingInput,
  condition?: ModelRatingConditionInput | null,
};

export type DeleteRatingMutation = {
  deleteRating?:  {
    __typename: "Rating",
    id: string,
    description?: string | null,
    Owner?: string | null,
    rating?: number | null,
    employeeprofileID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
<<<<<<< HEAD
    owner?: string | null,
  } | null,
};

export type CreateEmployeeProfileMutationVariables = {
  input: CreateEmployeeProfileInput,
  condition?: ModelEmployeeProfileConditionInput | null,
};

export type CreateEmployeeProfileMutation = {
  createEmployeeProfile?:  {
    __typename: "EmployeeProfile",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    dob?: string | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateEmployeeProfileMutationVariables = {
  input: UpdateEmployeeProfileInput,
  condition?: ModelEmployeeProfileConditionInput | null,
};

export type UpdateEmployeeProfileMutation = {
  updateEmployeeProfile?:  {
    __typename: "EmployeeProfile",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    dob?: string | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteEmployeeProfileMutationVariables = {
  input: DeleteEmployeeProfileInput,
  condition?: ModelEmployeeProfileConditionInput | null,
};

export type DeleteEmployeeProfileMutation = {
  deleteEmployeeProfile?:  {
    __typename: "EmployeeProfile",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    dob?: string | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
||||||| c4450da
=======
    owner?: string | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
  } | null,
};

export type CreateEmployeeMutationVariables = {
  input: CreateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type CreateEmployeeMutation = {
  createEmployee?:  {
    __typename: "Employee",
    id: string,
    cognitoUser?: string | null,
    address?:  {
      __typename: "Address",
      address: string,
      unit?: string | null,
      postalCode: string,
      country: string,
      state: string,
      city: string,
    } | null,
    workingStatus?: string | null,
    documents?:  Array< {
      __typename: "Document",
      type?: string | null,
      document?: string | null,
    } > | null,
    agreement?:  Array< {
      __typename: "Document",
      type?: string | null,
      document?: string | null,
    } > | null,
<<<<<<< HEAD
    systemRating?: number | null,
    payment?:  {
      __typename: "PaymentInfo",
      type: string,
      email?: string | null,
      accountNum?: string | null,
      fin?: string | null,
      branchNum?: string | null,
      accountName?: string | null,
    } | null,
    Houses?:  {
      __typename: "ModelHouseConnection",
||||||| c4450da
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
=======
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelHouseConnection",
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
<<<<<<< HEAD
    Workorders?:  {
      __typename: "ModelWorkorderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EmployeeProfile?:  {
      __typename: "EmployeeProfile",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
||||||| c4450da
    systemRating?: number | null,
=======
    systemRating?: number | null,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    employeeEmployeeProfileId?: string | null,
  } | null,
};

export type UpdateEmployeeMutationVariables = {
  input: UpdateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type UpdateEmployeeMutation = {
  updateEmployee?:  {
    __typename: "Employee",
    id: string,
    cognitoUser?: string | null,
    address?:  {
      __typename: "Address",
      address: string,
      unit?: string | null,
      postalCode: string,
      country: string,
      state: string,
      city: string,
    } | null,
    workingStatus?: string | null,
    documents?:  Array< {
      __typename: "Document",
      type?: string | null,
      document?: string | null,
    } > | null,
    agreement?:  Array< {
      __typename: "Document",
      type?: string | null,
      document?: string | null,
    } > | null,
<<<<<<< HEAD
    systemRating?: number | null,
    payment?:  {
      __typename: "PaymentInfo",
      type: string,
      email?: string | null,
      accountNum?: string | null,
      fin?: string | null,
      branchNum?: string | null,
      accountName?: string | null,
    } | null,
    Houses?:  {
      __typename: "ModelHouseConnection",
||||||| c4450da
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
=======
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelHouseConnection",
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
<<<<<<< HEAD
    Workorders?:  {
      __typename: "ModelWorkorderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EmployeeProfile?:  {
      __typename: "EmployeeProfile",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
||||||| c4450da
    systemRating?: number | null,
=======
    systemRating?: number | null,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    employeeEmployeeProfileId?: string | null,
  } | null,
};

export type DeleteEmployeeMutationVariables = {
  input: DeleteEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type DeleteEmployeeMutation = {
  deleteEmployee?:  {
    __typename: "Employee",
    id: string,
    cognitoUser?: string | null,
    address?:  {
      __typename: "Address",
      address: string,
      unit?: string | null,
      postalCode: string,
      country: string,
      state: string,
      city: string,
    } | null,
    workingStatus?: string | null,
    documents?:  Array< {
      __typename: "Document",
      type?: string | null,
      document?: string | null,
    } > | null,
    agreement?:  Array< {
      __typename: "Document",
      type?: string | null,
      document?: string | null,
    } > | null,
<<<<<<< HEAD
    systemRating?: number | null,
    payment?:  {
      __typename: "PaymentInfo",
      type: string,
      email?: string | null,
      accountNum?: string | null,
      fin?: string | null,
      branchNum?: string | null,
      accountName?: string | null,
    } | null,
    Houses?:  {
      __typename: "ModelHouseConnection",
||||||| c4450da
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
=======
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelHouseConnection",
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
<<<<<<< HEAD
    Workorders?:  {
      __typename: "ModelWorkorderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EmployeeProfile?:  {
      __typename: "EmployeeProfile",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    employeeEmployeeProfileId?: string | null,
  } | null,
};

export type GetHouseQueryVariables = {
  id: string,
};

export type GetHouseQuery = {
  getHouse?:  {
    __typename: "House",
    id: string,
    userID: string,
    employeeID: string,
    address?:  {
      __typename: "Address",
      address: string,
      unit?: string | null,
      postalCode: string,
      country: string,
      state: string,
      city: string,
    } | null,
||||||| c4450da
    systemRating?: number | null,
=======
    systemRating?: number | null,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

<<<<<<< HEAD
export type ListHousesQueryVariables = {
  filter?: ModelHouseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHousesQuery = {
  listHouses?:  {
    __typename: "ModelHouseConnection",
    items:  Array< {
      __typename: "House",
      id: string,
      userID: string,
      employeeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncHousesQueryVariables = {
  filter?: ModelHouseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncHousesQuery = {
  syncHouses?:  {
    __typename: "ModelHouseConnection",
    items:  Array< {
      __typename: "House",
      id: string,
      userID: string,
      employeeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subscriptionWorkorder?: number | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      subscriptionWorkorder?: number | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      subscriptionWorkorder?: number | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWorkorderQueryVariables = {
  id: string,
};

export type GetWorkorderQuery = {
  getWorkorder?:  {
    __typename: "Workorder",
    id: string,
    userID: string,
    House?:  {
      __typename: "House",
      id: string,
      userID: string,
      employeeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    employeeID: string,
    completionImage?: Array< string | null > | null,
    usercompletion?: boolean | null,
    workercompletion?: boolean | null,
    money: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    workorderHouseId?: string | null,
  } | null,
};

export type ListWorkordersQueryVariables = {
  filter?: ModelWorkorderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkordersQuery = {
  listWorkorders?:  {
    __typename: "ModelWorkorderConnection",
    items:  Array< {
      __typename: "Workorder",
      id: string,
      userID: string,
      employeeID: string,
      completionImage?: Array< string | null > | null,
      usercompletion?: boolean | null,
      workercompletion?: boolean | null,
      money: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      workorderHouseId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWorkordersQueryVariables = {
  filter?: ModelWorkorderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWorkordersQuery = {
  syncWorkorders?:  {
    __typename: "ModelWorkorderConnection",
    items:  Array< {
      __typename: "Workorder",
      id: string,
      userID: string,
      employeeID: string,
      completionImage?: Array< string | null > | null,
      usercompletion?: boolean | null,
      workercompletion?: boolean | null,
      money: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      workorderHouseId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

||||||| c4450da
=======
export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subscriptionWorkorder?: number | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      subscriptionWorkorder?: number | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      subscriptionWorkorder?: number | null,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWorkorderQueryVariables = {
  id: string,
};

export type GetWorkorderQuery = {
  getWorkorder?:  {
    __typename: "Workorder",
    id: string,
    userID: string,
    House?:  {
      __typename: "House",
      id: string,
      userID: string,
      employeeID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    employeeID?: string | null,
    completionImage?: Array< string | null > | null,
    usercompletion?: boolean | null,
    workercompletion?: boolean | null,
    money: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    workorderHouseId?: string | null,
  } | null,
};

export type ListWorkordersQueryVariables = {
  filter?: ModelWorkorderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWorkordersQuery = {
  listWorkorders?:  {
    __typename: "ModelWorkorderConnection",
    items:  Array< {
      __typename: "Workorder",
      id: string,
      userID: string,
      employeeID?: string | null,
      completionImage?: Array< string | null > | null,
      usercompletion?: boolean | null,
      workercompletion?: boolean | null,
      money: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      workorderHouseId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWorkordersQueryVariables = {
  filter?: ModelWorkorderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWorkordersQuery = {
  syncWorkorders?:  {
    __typename: "ModelWorkorderConnection",
    items:  Array< {
      __typename: "Workorder",
      id: string,
      userID: string,
      employeeID?: string | null,
      completionImage?: Array< string | null > | null,
      usercompletion?: boolean | null,
      workercompletion?: boolean | null,
      money: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      workorderHouseId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetHouseQueryVariables = {
  id: string,
};

export type GetHouseQuery = {
  getHouse?:  {
    __typename: "House",
    id: string,
    userID: string,
    employeeID?: string | null,
    address?:  {
      __typename: "Address",
      address?: string | null,
      unit?: string | null,
      postalcode?: string | null,
      country?: string | null,
      state?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListHousesQueryVariables = {
  filter?: ModelHouseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHousesQuery = {
  listHouses?:  {
    __typename: "ModelHouseConnection",
    items:  Array< {
      __typename: "House",
      id: string,
      userID: string,
      employeeID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncHousesQueryVariables = {
  filter?: ModelHouseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncHousesQuery = {
  syncHouses?:  {
    __typename: "ModelHouseConnection",
    items:  Array< {
      __typename: "House",
      id: string,
      userID: string,
      employeeID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
export type GetRatingQueryVariables = {
  id: string,
};

export type GetRatingQuery = {
  getRating?:  {
    __typename: "Rating",
    id: string,
    description?: string | null,
    Owner?: string | null,
    rating?: number | null,
    employeeprofileID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListRatingsQueryVariables = {
  filter?: ModelRatingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRatingsQuery = {
  listRatings?:  {
    __typename: "ModelRatingConnection",
    items:  Array< {
      __typename: "Rating",
      id: string,
      description?: string | null,
      Owner?: string | null,
      rating?: number | null,
      employeeprofileID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRatingsQueryVariables = {
  filter?: ModelRatingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRatingsQuery = {
  syncRatings?:  {
    __typename: "ModelRatingConnection",
    items:  Array< {
      __typename: "Rating",
      id: string,
      description?: string | null,
      Owner?: string | null,
      rating?: number | null,
      employeeprofileID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
<<<<<<< HEAD
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEmployeeProfileQueryVariables = {
  id: string,
};

export type GetEmployeeProfileQuery = {
  getEmployeeProfile?:  {
    __typename: "EmployeeProfile",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    dob?: string | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListEmployeeProfilesQueryVariables = {
  filter?: ModelEmployeeProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmployeeProfilesQuery = {
  listEmployeeProfiles?:  {
    __typename: "ModelEmployeeProfileConnection",
    items:  Array< {
      __typename: "EmployeeProfile",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEmployeeProfilesQueryVariables = {
  filter?: ModelEmployeeProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEmployeeProfilesQuery = {
  syncEmployeeProfiles?:  {
    __typename: "ModelEmployeeProfileConnection",
    items:  Array< {
      __typename: "EmployeeProfile",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
||||||| c4450da
=======
      owner?: string | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEmployeeQueryVariables = {
  id: string,
};

export type GetEmployeeQuery = {
  getEmployee?:  {
    __typename: "Employee",
    id: string,
    cognitoUser?: string | null,
    address?:  {
      __typename: "Address",
      address: string,
      unit?: string | null,
      postalCode: string,
      country: string,
      state: string,
      city: string,
    } | null,
    workingStatus?: string | null,
    documents?:  Array< {
      __typename: "Document",
      type?: string | null,
      document?: string | null,
    } > | null,
    agreement?:  Array< {
      __typename: "Document",
      type?: string | null,
      document?: string | null,
    } > | null,
<<<<<<< HEAD
    systemRating?: number | null,
    payment?:  {
      __typename: "PaymentInfo",
      type: string,
      email?: string | null,
      accountNum?: string | null,
      fin?: string | null,
      branchNum?: string | null,
      accountName?: string | null,
    } | null,
    Houses?:  {
      __typename: "ModelHouseConnection",
||||||| c4450da
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
=======
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelHouseConnection",
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
<<<<<<< HEAD
    Workorders?:  {
      __typename: "ModelWorkorderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EmployeeProfile?:  {
      __typename: "EmployeeProfile",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
||||||| c4450da
    systemRating?: number | null,
=======
    systemRating?: number | null,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    employeeEmployeeProfileId?: string | null,
  } | null,
};

export type ListEmployeesQueryVariables = {
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmployeesQuery = {
  listEmployees?:  {
    __typename: "ModelEmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      id: string,
      cognitoUser?: string | null,
      workingStatus?: string | null,
      systemRating?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      employeeEmployeeProfileId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEmployeesQueryVariables = {
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEmployeesQuery = {
  syncEmployees?:  {
    __typename: "ModelEmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      id: string,
      cognitoUser?: string | null,
      workingStatus?: string | null,
      systemRating?: number | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      employeeEmployeeProfileId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

<<<<<<< HEAD
export type OnCreateHouseSubscriptionVariables = {
  filter?: ModelSubscriptionHouseFilterInput | null,
  owner?: string | null,
};

export type OnCreateHouseSubscription = {
  onCreateHouse?:  {
    __typename: "House",
    id: string,
    userID: string,
    employeeID: string,
    address?:  {
      __typename: "Address",
      address: string,
      unit?: string | null,
      postalCode: string,
      country: string,
      state: string,
      city: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateHouseSubscriptionVariables = {
  filter?: ModelSubscriptionHouseFilterInput | null,
  owner?: string | null,
};

export type OnUpdateHouseSubscription = {
  onUpdateHouse?:  {
    __typename: "House",
    id: string,
    userID: string,
    employeeID: string,
    address?:  {
      __typename: "Address",
      address: string,
      unit?: string | null,
      postalCode: string,
      country: string,
      state: string,
      city: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteHouseSubscriptionVariables = {
  filter?: ModelSubscriptionHouseFilterInput | null,
  owner?: string | null,
};

export type OnDeleteHouseSubscription = {
  onDeleteHouse?:  {
    __typename: "House",
    id: string,
    userID: string,
    employeeID: string,
    address?:  {
      __typename: "Address",
      address: string,
      unit?: string | null,
      postalCode: string,
      country: string,
      state: string,
      city: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subscriptionWorkorder?: number | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subscriptionWorkorder?: number | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subscriptionWorkorder?: number | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateWorkorderSubscriptionVariables = {
  filter?: ModelSubscriptionWorkorderFilterInput | null,
  userID?: string | null,
};

export type OnCreateWorkorderSubscription = {
  onCreateWorkorder?:  {
    __typename: "Workorder",
    id: string,
    userID: string,
    House?:  {
      __typename: "House",
      id: string,
      userID: string,
      employeeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    employeeID: string,
    completionImage?: Array< string | null > | null,
    usercompletion?: boolean | null,
    workercompletion?: boolean | null,
    money: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    workorderHouseId?: string | null,
  } | null,
};

export type OnUpdateWorkorderSubscriptionVariables = {
  filter?: ModelSubscriptionWorkorderFilterInput | null,
  userID?: string | null,
};

export type OnUpdateWorkorderSubscription = {
  onUpdateWorkorder?:  {
    __typename: "Workorder",
    id: string,
    userID: string,
    House?:  {
      __typename: "House",
      id: string,
      userID: string,
      employeeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    employeeID: string,
    completionImage?: Array< string | null > | null,
    usercompletion?: boolean | null,
    workercompletion?: boolean | null,
    money: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    workorderHouseId?: string | null,
  } | null,
};

export type OnDeleteWorkorderSubscriptionVariables = {
  filter?: ModelSubscriptionWorkorderFilterInput | null,
  userID?: string | null,
};

export type OnDeleteWorkorderSubscription = {
  onDeleteWorkorder?:  {
    __typename: "Workorder",
    id: string,
    userID: string,
    House?:  {
      __typename: "House",
      id: string,
      userID: string,
      employeeID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    employeeID: string,
    completionImage?: Array< string | null > | null,
    usercompletion?: boolean | null,
    workercompletion?: boolean | null,
    money: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    workorderHouseId?: string | null,
  } | null,
};

||||||| c4450da
=======
export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subscriptionWorkorder?: number | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subscriptionWorkorder?: number | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    subscriptionWorkorder?: number | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreateWorkorderSubscriptionVariables = {
  filter?: ModelSubscriptionWorkorderFilterInput | null,
  userID?: string | null,
};

export type OnCreateWorkorderSubscription = {
  onCreateWorkorder?:  {
    __typename: "Workorder",
    id: string,
    userID: string,
    House?:  {
      __typename: "House",
      id: string,
      userID: string,
      employeeID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    employeeID?: string | null,
    completionImage?: Array< string | null > | null,
    usercompletion?: boolean | null,
    workercompletion?: boolean | null,
    money: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    workorderHouseId?: string | null,
  } | null,
};

export type OnUpdateWorkorderSubscriptionVariables = {
  filter?: ModelSubscriptionWorkorderFilterInput | null,
  userID?: string | null,
};

export type OnUpdateWorkorderSubscription = {
  onUpdateWorkorder?:  {
    __typename: "Workorder",
    id: string,
    userID: string,
    House?:  {
      __typename: "House",
      id: string,
      userID: string,
      employeeID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    employeeID?: string | null,
    completionImage?: Array< string | null > | null,
    usercompletion?: boolean | null,
    workercompletion?: boolean | null,
    money: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    workorderHouseId?: string | null,
  } | null,
};

export type OnDeleteWorkorderSubscriptionVariables = {
  filter?: ModelSubscriptionWorkorderFilterInput | null,
  userID?: string | null,
};

export type OnDeleteWorkorderSubscription = {
  onDeleteWorkorder?:  {
    __typename: "Workorder",
    id: string,
    userID: string,
    House?:  {
      __typename: "House",
      id: string,
      userID: string,
      employeeID?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    employeeID?: string | null,
    completionImage?: Array< string | null > | null,
    usercompletion?: boolean | null,
    workercompletion?: boolean | null,
    money: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    workorderHouseId?: string | null,
  } | null,
};

export type OnCreateHouseSubscriptionVariables = {
  filter?: ModelSubscriptionHouseFilterInput | null,
  userID?: string | null,
};

export type OnCreateHouseSubscription = {
  onCreateHouse?:  {
    __typename: "House",
    id: string,
    userID: string,
    employeeID?: string | null,
    address?:  {
      __typename: "Address",
      address?: string | null,
      unit?: string | null,
      postalcode?: string | null,
      country?: string | null,
      state?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateHouseSubscriptionVariables = {
  filter?: ModelSubscriptionHouseFilterInput | null,
  userID?: string | null,
};

export type OnUpdateHouseSubscription = {
  onUpdateHouse?:  {
    __typename: "House",
    id: string,
    userID: string,
    employeeID?: string | null,
    address?:  {
      __typename: "Address",
      address?: string | null,
      unit?: string | null,
      postalcode?: string | null,
      country?: string | null,
      state?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteHouseSubscriptionVariables = {
  filter?: ModelSubscriptionHouseFilterInput | null,
  userID?: string | null,
};

export type OnDeleteHouseSubscription = {
  onDeleteHouse?:  {
    __typename: "House",
    id: string,
    userID: string,
    employeeID?: string | null,
    address?:  {
      __typename: "Address",
      address?: string | null,
      unit?: string | null,
      postalcode?: string | null,
      country?: string | null,
      state?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
export type OnCreateRatingSubscriptionVariables = {
  filter?: ModelSubscriptionRatingFilterInput | null,
  owner?: string | null,
};

export type OnCreateRatingSubscription = {
  onCreateRating?:  {
    __typename: "Rating",
    id: string,
    description?: string | null,
    Owner?: string | null,
    rating?: number | null,
    employeeprofileID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateRatingSubscriptionVariables = {
  filter?: ModelSubscriptionRatingFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRatingSubscription = {
  onUpdateRating?:  {
    __typename: "Rating",
    id: string,
    description?: string | null,
    Owner?: string | null,
    rating?: number | null,
    employeeprofileID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteRatingSubscriptionVariables = {
  filter?: ModelSubscriptionRatingFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRatingSubscription = {
  onDeleteRating?:  {
    __typename: "Rating",
    id: string,
    description?: string | null,
    Owner?: string | null,
    rating?: number | null,
    employeeprofileID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
<<<<<<< HEAD
    owner?: string | null,
  } | null,
};

export type OnCreateEmployeeProfileSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateEmployeeProfileSubscription = {
  onCreateEmployeeProfile?:  {
    __typename: "EmployeeProfile",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    dob?: string | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateEmployeeProfileSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateEmployeeProfileSubscription = {
  onUpdateEmployeeProfile?:  {
    __typename: "EmployeeProfile",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    dob?: string | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteEmployeeProfileSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteEmployeeProfileSubscription = {
  onDeleteEmployeeProfile?:  {
    __typename: "EmployeeProfile",
    id: string,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    dob?: string | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
||||||| c4450da
=======
    owner?: string | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
  } | null,
};

export type OnCreateEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeFilterInput | null,
  cognitoUser?: string | null,
};

export type OnCreateEmployeeSubscription = {
  onCreateEmployee?:  {
    __typename: "Employee",
    id: string,
    cognitoUser?: string | null,
    address?:  {
      __typename: "Address",
      address: string,
      unit?: string | null,
      postalCode: string,
      country: string,
      state: string,
      city: string,
    } | null,
    workingStatus?: string | null,
    documents?:  Array< {
      __typename: "Document",
      type?: string | null,
      document?: string | null,
    } > | null,
    agreement?:  Array< {
      __typename: "Document",
      type?: string | null,
      document?: string | null,
    } > | null,
<<<<<<< HEAD
    systemRating?: number | null,
    payment?:  {
      __typename: "PaymentInfo",
      type: string,
      email?: string | null,
      accountNum?: string | null,
      fin?: string | null,
      branchNum?: string | null,
      accountName?: string | null,
    } | null,
    Houses?:  {
      __typename: "ModelHouseConnection",
||||||| c4450da
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
=======
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelHouseConnection",
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
<<<<<<< HEAD
    Workorders?:  {
      __typename: "ModelWorkorderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EmployeeProfile?:  {
      __typename: "EmployeeProfile",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
||||||| c4450da
    systemRating?: number | null,
=======
    systemRating?: number | null,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    employeeEmployeeProfileId?: string | null,
  } | null,
};

export type OnUpdateEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeFilterInput | null,
  cognitoUser?: string | null,
};

export type OnUpdateEmployeeSubscription = {
  onUpdateEmployee?:  {
    __typename: "Employee",
    id: string,
    cognitoUser?: string | null,
    address?:  {
      __typename: "Address",
      address: string,
      unit?: string | null,
      postalCode: string,
      country: string,
      state: string,
      city: string,
    } | null,
    workingStatus?: string | null,
    documents?:  Array< {
      __typename: "Document",
      type?: string | null,
      document?: string | null,
    } > | null,
    agreement?:  Array< {
      __typename: "Document",
      type?: string | null,
      document?: string | null,
    } > | null,
<<<<<<< HEAD
    systemRating?: number | null,
    payment?:  {
      __typename: "PaymentInfo",
      type: string,
      email?: string | null,
      accountNum?: string | null,
      fin?: string | null,
      branchNum?: string | null,
      accountName?: string | null,
    } | null,
    Houses?:  {
      __typename: "ModelHouseConnection",
||||||| c4450da
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
=======
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelHouseConnection",
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
<<<<<<< HEAD
    Workorders?:  {
      __typename: "ModelWorkorderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EmployeeProfile?:  {
      __typename: "EmployeeProfile",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
||||||| c4450da
    systemRating?: number | null,
=======
    systemRating?: number | null,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    employeeEmployeeProfileId?: string | null,
  } | null,
};

export type OnDeleteEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeFilterInput | null,
  cognitoUser?: string | null,
};

export type OnDeleteEmployeeSubscription = {
  onDeleteEmployee?:  {
    __typename: "Employee",
    id: string,
    cognitoUser?: string | null,
    address?:  {
      __typename: "Address",
      address: string,
      unit?: string | null,
      postalCode: string,
      country: string,
      state: string,
      city: string,
    } | null,
    workingStatus?: string | null,
    documents?:  Array< {
      __typename: "Document",
      type?: string | null,
      document?: string | null,
    } > | null,
    agreement?:  Array< {
      __typename: "Document",
      type?: string | null,
      document?: string | null,
    } > | null,
<<<<<<< HEAD
    systemRating?: number | null,
    payment?:  {
      __typename: "PaymentInfo",
      type: string,
      email?: string | null,
      accountNum?: string | null,
      fin?: string | null,
      branchNum?: string | null,
      accountName?: string | null,
    } | null,
    Houses?:  {
      __typename: "ModelHouseConnection",
||||||| c4450da
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
=======
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelHouseConnection",
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
<<<<<<< HEAD
    Workorders?:  {
      __typename: "ModelWorkorderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    EmployeeProfile?:  {
      __typename: "EmployeeProfile",
      id: string,
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      dob?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
||||||| c4450da
    systemRating?: number | null,
=======
    systemRating?: number | null,
    Houses?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Workorders?:  {
      __typename: "ModelHouseConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
>>>>>>> ea0b38ab51142ea05bc23083aa4faad9b4246ed6
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    employeeEmployeeProfileId?: string | null,
  } | null,
};
