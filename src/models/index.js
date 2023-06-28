// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { House, User, Workorder, Rating, EmployeeProfile, Employee, PaymentInfo, Document, Address } = initSchema(schema);

export {
  House,
  User,
  Workorder,
  Rating,
  EmployeeProfile,
  Employee,
  PaymentInfo,
  Document,
  Address
};