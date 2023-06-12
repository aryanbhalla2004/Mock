// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Rating, Employee, Document, Address } = initSchema(schema);

export {
  Rating,
  Employee,
  Document,
  Address
};