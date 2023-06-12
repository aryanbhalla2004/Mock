/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

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
};

export type ModelStringInput = {
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


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
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

export type ModelIDInput = {
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

export type Rating = {
  __typename: "Rating",
  id: string,
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
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

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
};

export type ModelRatingConnection = {
  __typename: "ModelRatingConnection",
  items:  Array<Rating | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateEmployeeInput = {
  id: string,
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

export type DeleteEmployeeInput = {
  id: string,
  _version?: number | null,
};

export type ModelRatingFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  Owner?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  employeeID?: ModelIDInput | null,
  and?: Array< ModelRatingFilterInput | null > | null,
  or?: Array< ModelRatingFilterInput | null > | null,
  not?: ModelRatingFilterInput | null,
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDInput | null,
  cognitoUser?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  dob?: ModelStringInput | null,
  workingStatus?: ModelStringInput | null,
  ratingValue?: ModelFloatInput | null,
  systemRating?: ModelFloatInput | null,
  and?: Array< ModelEmployeeFilterInput | null > | null,
  or?: Array< ModelEmployeeFilterInput | null > | null,
  not?: ModelEmployeeFilterInput | null,
};

export type ModelEmployeeConnection = {
  __typename: "ModelEmployeeConnection",
  items:  Array<Employee | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionRatingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  Owner?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  employeeID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionRatingFilterInput | null > | null,
  or?: Array< ModelSubscriptionRatingFilterInput | null > | null,
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

export type ModelSubscriptionEmployeeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cognitoUser?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  dob?: ModelSubscriptionStringInput | null,
  workingStatus?: ModelSubscriptionStringInput | null,
  ratingValue?: ModelSubscriptionFloatInput | null,
  systemRating?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionEmployeeFilterInput | null > | null,
  or?: Array< ModelSubscriptionEmployeeFilterInput | null > | null,
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
    employeeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    employeeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    employeeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    dob?: string | null,
    address?:  {
      __typename: "Address",
      address?: string | null,
      unit?: string | null,
      postalcode?: string | null,
      country?: string | null,
      state?: string | null,
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
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    systemRating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    dob?: string | null,
    address?:  {
      __typename: "Address",
      address?: string | null,
      unit?: string | null,
      postalcode?: string | null,
      country?: string | null,
      state?: string | null,
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
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    systemRating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    dob?: string | null,
    address?:  {
      __typename: "Address",
      address?: string | null,
      unit?: string | null,
      postalcode?: string | null,
      country?: string | null,
      state?: string | null,
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
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    systemRating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

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
    employeeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
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
      employeeID: string,
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
      employeeID: string,
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

export type GetEmployeeQueryVariables = {
  id: string,
};

export type GetEmployeeQuery = {
  getEmployee?:  {
    __typename: "Employee",
    id: string,
    cognitoUser?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    dob?: string | null,
    address?:  {
      __typename: "Address",
      address?: string | null,
      unit?: string | null,
      postalcode?: string | null,
      country?: string | null,
      state?: string | null,
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
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    systemRating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      dob?: string | null,
      workingStatus?: string | null,
      ratingValue?: number | null,
      systemRating?: number | null,
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
      firstName?: string | null,
      lastName?: string | null,
      phoneNumber?: string | null,
      dob?: string | null,
      workingStatus?: string | null,
      ratingValue?: number | null,
      systemRating?: number | null,
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

export type OnCreateRatingSubscriptionVariables = {
  filter?: ModelSubscriptionRatingFilterInput | null,
};

export type OnCreateRatingSubscription = {
  onCreateRating?:  {
    __typename: "Rating",
    id: string,
    description?: string | null,
    Owner?: string | null,
    rating?: number | null,
    employeeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateRatingSubscriptionVariables = {
  filter?: ModelSubscriptionRatingFilterInput | null,
};

export type OnUpdateRatingSubscription = {
  onUpdateRating?:  {
    __typename: "Rating",
    id: string,
    description?: string | null,
    Owner?: string | null,
    rating?: number | null,
    employeeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteRatingSubscriptionVariables = {
  filter?: ModelSubscriptionRatingFilterInput | null,
};

export type OnDeleteRatingSubscription = {
  onDeleteRating?:  {
    __typename: "Rating",
    id: string,
    description?: string | null,
    Owner?: string | null,
    rating?: number | null,
    employeeID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeFilterInput | null,
  owner?: string | null,
};

export type OnCreateEmployeeSubscription = {
  onCreateEmployee?:  {
    __typename: "Employee",
    id: string,
    cognitoUser?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    dob?: string | null,
    address?:  {
      __typename: "Address",
      address?: string | null,
      unit?: string | null,
      postalcode?: string | null,
      country?: string | null,
      state?: string | null,
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
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    systemRating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeFilterInput | null,
  owner?: string | null,
};

export type OnUpdateEmployeeSubscription = {
  onUpdateEmployee?:  {
    __typename: "Employee",
    id: string,
    cognitoUser?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    dob?: string | null,
    address?:  {
      __typename: "Address",
      address?: string | null,
      unit?: string | null,
      postalcode?: string | null,
      country?: string | null,
      state?: string | null,
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
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    systemRating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeFilterInput | null,
  owner?: string | null,
};

export type OnDeleteEmployeeSubscription = {
  onDeleteEmployee?:  {
    __typename: "Employee",
    id: string,
    cognitoUser?: string | null,
    firstName?: string | null,
    lastName?: string | null,
    phoneNumber?: string | null,
    dob?: string | null,
    address?:  {
      __typename: "Address",
      address?: string | null,
      unit?: string | null,
      postalcode?: string | null,
      country?: string | null,
      state?: string | null,
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
    ratingValue?: number | null,
    Ratings?:  {
      __typename: "ModelRatingConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    systemRating?: number | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
