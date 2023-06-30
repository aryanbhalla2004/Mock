// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const EmployeeStatus = {
  "VERFIED": "VERFIED",
  "WAITING": "WAITING",
  "SUSPENDED": "SUSPENDED"
};

const { House, User, Workorder, Rating, EmployeeProfile, Employee, PaymentInfo, Document, Address } = initSchema(schema);

export {
  House,
  User,
  Workorder,
  Rating,
  EmployeeProfile,
  Employee,
  EmployeeStatus,
  PaymentInfo,
  Document,
  Address
};