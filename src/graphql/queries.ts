/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getWorkorder = /* GraphQL */ `
  query GetWorkorder($id: ID!) {
    getWorkorder(id: $id) {
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
export const listWorkorders = /* GraphQL */ `
  query ListWorkorders(
    $filter: ModelWorkorderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkorders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncWorkorders = /* GraphQL */ `
  query SyncWorkorders(
    $filter: ModelWorkorderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkorders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getHouse = /* GraphQL */ `
  query GetHouse($id: ID!) {
    getHouse(id: $id) {
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
export const listHouses = /* GraphQL */ `
  query ListHouses(
    $filter: ModelHouseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHouses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncHouses = /* GraphQL */ `
  query SyncHouses(
    $filter: ModelHouseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHouses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getRating = /* GraphQL */ `
  query GetRating($id: ID!) {
    getRating(id: $id) {
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
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncRatings = /* GraphQL */ `
  query SyncRatings(
    $filter: ModelRatingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRatings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoUser
        firstName
        lastName
        phoneNumber
        dob
        workingStatus
        ratingValue
        systemRating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncEmployees = /* GraphQL */ `
  query SyncEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEmployees(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        cognitoUser
        firstName
        lastName
        phoneNumber
        dob
        workingStatus
        ratingValue
        systemRating
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
