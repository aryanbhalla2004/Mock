/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHouse = /* GraphQL */ `
  mutation CreateHouse(
    $input: CreateHouseInput!
    $condition: ModelHouseConditionInput
  ) {
    createHouse(input: $input, condition: $condition) {
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
export const updateHouse = /* GraphQL */ `
  mutation UpdateHouse(
    $input: UpdateHouseInput!
    $condition: ModelHouseConditionInput
  ) {
    updateHouse(input: $input, condition: $condition) {
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
export const deleteHouse = /* GraphQL */ `
  mutation DeleteHouse(
    $input: DeleteHouseInput!
    $condition: ModelHouseConditionInput
  ) {
    deleteHouse(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createWorkorder = /* GraphQL */ `
  mutation CreateWorkorder(
    $input: CreateWorkorderInput!
    $condition: ModelWorkorderConditionInput
  ) {
    createWorkorder(input: $input, condition: $condition) {
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
export const updateWorkorder = /* GraphQL */ `
  mutation UpdateWorkorder(
    $input: UpdateWorkorderInput!
    $condition: ModelWorkorderConditionInput
  ) {
    updateWorkorder(input: $input, condition: $condition) {
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
export const deleteWorkorder = /* GraphQL */ `
  mutation DeleteWorkorder(
    $input: DeleteWorkorderInput!
    $condition: ModelWorkorderConditionInput
  ) {
    deleteWorkorder(input: $input, condition: $condition) {
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
export const createEmployeeProfile = /* GraphQL */ `
  mutation CreateEmployeeProfile(
    $input: CreateEmployeeProfileInput!
    $condition: ModelEmployeeProfileConditionInput
  ) {
    createEmployeeProfile(input: $input, condition: $condition) {
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
export const updateEmployeeProfile = /* GraphQL */ `
  mutation UpdateEmployeeProfile(
    $input: UpdateEmployeeProfileInput!
    $condition: ModelEmployeeProfileConditionInput
  ) {
    updateEmployeeProfile(input: $input, condition: $condition) {
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
export const deleteEmployeeProfile = /* GraphQL */ `
  mutation DeleteEmployeeProfile(
    $input: DeleteEmployeeProfileInput!
    $condition: ModelEmployeeProfileConditionInput
  ) {
    deleteEmployeeProfile(input: $input, condition: $condition) {
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
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
