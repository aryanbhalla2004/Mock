// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Workorder, House, Rating, Employee, Document, Address } = initSchema(schema);

export {
  User,
  Workorder,
  House,
  Rating,
  Employee,
  Document,
  Address
};