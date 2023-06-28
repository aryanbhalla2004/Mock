/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHouse = /* GraphQL */ `
  subscription OnCreateHouse(
    $filter: ModelSubscriptionHouseFilterInput
    $owner: String
  ) {
    onCreateHouse(filter: $filter, owner: $owner) {
      id
      userID
      employeeID
      address {
        address
        unit
        postalCode
        country
        state
        city
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
export const onUpdateHouse = /* GraphQL */ `
  subscription OnUpdateHouse(
    $filter: ModelSubscriptionHouseFilterInput
    $owner: String
  ) {
    onUpdateHouse(filter: $filter, owner: $owner) {
      id
      userID
      employeeID
      address {
        address
        unit
        postalCode
        country
        state
        city
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
export const onDeleteHouse = /* GraphQL */ `
  subscription OnDeleteHouse(
    $filter: ModelSubscriptionHouseFilterInput
    $owner: String
  ) {
    onDeleteHouse(filter: $filter, owner: $owner) {
      id
      userID
      employeeID
      address {
        address
        unit
        postalCode
        country
        state
        city
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
        owner
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
        owner
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
        owner
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
      employeeprofileID
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
      employeeprofileID
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
      employeeprofileID
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
export const onCreateEmployeeProfile = /* GraphQL */ `
  subscription OnCreateEmployeeProfile(
    $filter: ModelSubscriptionEmployeeProfileFilterInput
    $owner: String
  ) {
    onCreateEmployeeProfile(filter: $filter, owner: $owner) {
      id
      firstName
      lastName
      phoneNumber
      dob
      Ratings {
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
export const onUpdateEmployeeProfile = /* GraphQL */ `
  subscription OnUpdateEmployeeProfile(
    $filter: ModelSubscriptionEmployeeProfileFilterInput
    $owner: String
  ) {
    onUpdateEmployeeProfile(filter: $filter, owner: $owner) {
      id
      firstName
      lastName
      phoneNumber
      dob
      Ratings {
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
export const onDeleteEmployeeProfile = /* GraphQL */ `
  subscription OnDeleteEmployeeProfile(
    $filter: ModelSubscriptionEmployeeProfileFilterInput
    $owner: String
  ) {
    onDeleteEmployeeProfile(filter: $filter, owner: $owner) {
      id
      firstName
      lastName
      phoneNumber
      dob
      Ratings {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee(
    $filter: ModelSubscriptionEmployeeFilterInput
    $cognitoUser: String
  ) {
    onCreateEmployee(filter: $filter, cognitoUser: $cognitoUser) {
      id
      cognitoUser
      address {
        address
        unit
        postalCode
        country
        state
        city
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
      systemRating
      payment {
        type
        email
        accountNum
        fin
        branchNum
        accountName
        __typename
      }
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
      EmployeeProfile {
        id
        firstName
        lastName
        phoneNumber
        dob
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      employeeEmployeeProfileId
      __typename
    }
  }
`;
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee(
    $filter: ModelSubscriptionEmployeeFilterInput
    $cognitoUser: String
  ) {
    onUpdateEmployee(filter: $filter, cognitoUser: $cognitoUser) {
      id
      cognitoUser
      address {
        address
        unit
        postalCode
        country
        state
        city
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
      systemRating
      payment {
        type
        email
        accountNum
        fin
        branchNum
        accountName
        __typename
      }
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
      EmployeeProfile {
        id
        firstName
        lastName
        phoneNumber
        dob
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      employeeEmployeeProfileId
      __typename
    }
  }
`;
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee(
    $filter: ModelSubscriptionEmployeeFilterInput
    $cognitoUser: String
  ) {
    onDeleteEmployee(filter: $filter, cognitoUser: $cognitoUser) {
      id
      cognitoUser
      address {
        address
        unit
        postalCode
        country
        state
        city
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
      systemRating
      payment {
        type
        email
        accountNum
        fin
        branchNum
        accountName
        __typename
      }
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
      EmployeeProfile {
        id
        firstName
        lastName
        phoneNumber
        dob
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      employeeEmployeeProfileId
      __typename
    }
  }
`;
