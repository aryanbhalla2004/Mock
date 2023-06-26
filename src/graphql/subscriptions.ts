/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      Houses {
        nextToken
        startedAt
        __typename
      }
      Workorders {
        nextToken
        startedAt
        __typename
      }
      subscriptionWorkorder
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      Houses {
        nextToken
        startedAt
        __typename
      }
      Workorders {
        nextToken
        startedAt
        __typename
      }
      subscriptionWorkorder
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      Houses {
        nextToken
        startedAt
        __typename
      }
      Workorders {
        nextToken
        startedAt
        __typename
      }
      subscriptionWorkorder
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onCreateWorkorder = /* GraphQL */ `
  subscription OnCreateWorkorder(
    $filter: ModelSubscriptionWorkorderFilterInput
    $userID: String
  ) {
    onCreateWorkorder(filter: $filter, userID: $userID) {
      id
      userID
      House {
        id
        userID
        employeeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      employeeID
      completionImage
      usercompletion
      workercompletion
      money
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workorderHouseId
      __typename
    }
  }
`;
export const onUpdateWorkorder = /* GraphQL */ `
  subscription OnUpdateWorkorder(
    $filter: ModelSubscriptionWorkorderFilterInput
    $userID: String
  ) {
    onUpdateWorkorder(filter: $filter, userID: $userID) {
      id
      userID
      House {
        id
        userID
        employeeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      employeeID
      completionImage
      usercompletion
      workercompletion
      money
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workorderHouseId
      __typename
    }
  }
`;
export const onDeleteWorkorder = /* GraphQL */ `
  subscription OnDeleteWorkorder(
    $filter: ModelSubscriptionWorkorderFilterInput
    $userID: String
  ) {
    onDeleteWorkorder(filter: $filter, userID: $userID) {
      id
      userID
      House {
        id
        userID
        employeeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      employeeID
      completionImage
      usercompletion
      workercompletion
      money
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workorderHouseId
      __typename
    }
  }
`;
export const onCreateHouse = /* GraphQL */ `
  subscription OnCreateHouse(
    $filter: ModelSubscriptionHouseFilterInput
    $userID: String
  ) {
    onCreateHouse(filter: $filter, userID: $userID) {
      id
      userID
      employeeID
      address {
        address
        unit
        postalcode
        country
        state
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateHouse = /* GraphQL */ `
  subscription OnUpdateHouse(
    $filter: ModelSubscriptionHouseFilterInput
    $userID: String
  ) {
    onUpdateHouse(filter: $filter, userID: $userID) {
      id
      userID
      employeeID
      address {
        address
        unit
        postalcode
        country
        state
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteHouse = /* GraphQL */ `
  subscription OnDeleteHouse(
    $filter: ModelSubscriptionHouseFilterInput
    $userID: String
  ) {
    onDeleteHouse(filter: $filter, userID: $userID) {
      id
      userID
      employeeID
      address {
        address
        unit
        postalcode
        country
        state
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateRating = /* GraphQL */ `
  subscription OnCreateRating(
    $filter: ModelSubscriptionRatingFilterInput
    $owner: String
  ) {
    onCreateRating(filter: $filter, owner: $owner) {
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
      owner
      __typename
    }
  }
`;
export const onUpdateRating = /* GraphQL */ `
  subscription OnUpdateRating(
    $filter: ModelSubscriptionRatingFilterInput
    $owner: String
  ) {
    onUpdateRating(filter: $filter, owner: $owner) {
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
      owner
      __typename
    }
  }
`;
export const onDeleteRating = /* GraphQL */ `
  subscription OnDeleteRating(
    $filter: ModelSubscriptionRatingFilterInput
    $owner: String
  ) {
    onDeleteRating(filter: $filter, owner: $owner) {
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
      owner
      __typename
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
        __typename
      }
      workingStatus
      documents {
        type
        document
        __typename
      }
      agreement {
        type
        document
        __typename
      }
      ratingValue
      Ratings {
        nextToken
        startedAt
        __typename
      }
      systemRating
      Houses {
        nextToken
        startedAt
        __typename
      }
      Workorders {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
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
        __typename
      }
      workingStatus
      documents {
        type
        document
        __typename
      }
      agreement {
        type
        document
        __typename
      }
      ratingValue
      Ratings {
        nextToken
        startedAt
        __typename
      }
      systemRating
      Houses {
        nextToken
        startedAt
        __typename
      }
      Workorders {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
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
        __typename
      }
      workingStatus
      documents {
        type
        document
        __typename
      }
      agreement {
        type
        document
        __typename
      }
      ratingValue
      Ratings {
        nextToken
        startedAt
        __typename
      }
      systemRating
      Houses {
        nextToken
        startedAt
        __typename
      }
      Workorders {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
