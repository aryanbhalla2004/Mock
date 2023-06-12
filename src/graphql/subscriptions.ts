/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating($filter: ModelSubscriptionRatingFilterInput) {
    onCreateRating(filter: $filter) {
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
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating($filter: ModelSubscriptionRatingFilterInput) {
    onUpdateRating(filter: $filter) {
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
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating($filter: ModelSubscriptionRatingFilterInput) {
    onDeleteRating(filter: $filter) {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee(
    $filter: ModelSubscriptionEmployeeFilterInput
    $owner: String
  ) {
    onCreateEmployee(filter: $filter, owner: $owner) {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee(
    $filter: ModelSubscriptionEmployeeFilterInput
    $owner: String
  ) {
    onUpdateEmployee(filter: $filter, owner: $owner) {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee(
    $filter: ModelSubscriptionEmployeeFilterInput
    $owner: String
  ) {
    onDeleteEmployee(filter: $filter, owner: $owner) {
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
