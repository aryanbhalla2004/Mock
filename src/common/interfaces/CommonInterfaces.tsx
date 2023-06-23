export interface IEmployeeSignUpForm {
  email: string
  fName: string,
  lName: string,
  pNumber: string,
  dob: string,
  password: string,
  confirm_password:string,
}

export interface Address {
  address: string,
  unit?: string
  city: string,
  state: string
  country: string,
  postalCode: string
}

export interface Availability {
  Sunday: timing[],
  Monday: timing[],
  Tuesday: timing[],
  Wednesday: timing[],
  Thursday: timing[],
  Friday: timing[],
  Saturday: timing[],
}

export interface timing {
  start: string,
  end: string
}

export interface document {
  addressType: string,
  addressDocument: File | null,
  mainType: string,
  mainDocument: File | null,
}
