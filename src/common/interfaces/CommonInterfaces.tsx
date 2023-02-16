export interface IEmployeeSignUpForm {
  email: string
  fName: string,
  lName: string,
  pNumber: number,
  dob: string,
  address: Address,
  availability: Availability,
  verified: boolean
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
  Sunday: SingleDayAvailability,
  Monday: SingleDayAvailability,
  Tuesday: SingleDayAvailability,
  Wednesday: SingleDayAvailability,
  Thursday: SingleDayAvailability,
  Friday: SingleDayAvailability,
  Saturday: SingleDayAvailability,
}

interface SingleDayAvailability {
  isAvailable: boolean,
  timing: [timing]
}

interface timing {
  start: string,
  end: string
}
