/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRating = /* GraphQL */ `
  mutation CreateRating(
    $input: CreateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    createRating(input: $input, condition: $condition) {
      id
      description
      Owner
      rating
      employeeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateRating = /* GraphQL */ `
  mutation UpdateRating(
    $input: UpdateRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    updateRating(input: $input, condition: $condition) {
      id
      description
      Owner
      rating
      employeeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteRating = /* GraphQL */ `
  mutation DeleteRating(
    $input: DeleteRatingInput!
    $condition: ModelRatingConditionInput
  ) {
    deleteRating(input: $input, condition: $condition) {
      id
      description
      Owner
      rating
      employeeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      cognitoUser
      firstName
      lastName
      phoneNumber
      dob
      address {
        address
        unit
        postalcode
        country
        state
      }
      workingStatus
      documents {
        type
        document
      }
      agreement {
        type
        document
      }
      ratingValue
      Ratings {
        nextToken
        startedAt
      }
      systemRating
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      cognitoUser
      firstName
      lastName
      phoneNumber
      dob
      address {
        address
        unit
        postalcode
        country
        state
      }
      workingStatus
      documents {
        type
        document
      }
      agreement {
        type
        document
      }
      ratingValue
      Ratings {
        nextToken
        startedAt
      }
      systemRating
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      cognitoUser
      firstName
      lastName
      phoneNumber
      dob
      address {
        address
        unit
        postalcode
        country
        state
      }
      workingStatus
      documents {
        type
        document
      }
      agreement {
        type
        document
      }
      ratingValue
      Ratings {
        nextToken
        startedAt
      }
      systemRating
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
