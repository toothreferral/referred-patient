export interface IReferrals {
  speciality: string;
  doctorId: string;
  reasonForReferral: string;
  scheduling: string;
  notes: string;
  insurance: string;
  contact: string;
}
export interface IPatientContact {
  firstName: string;
  lastName: string;
  dob: string;
  age: string;
  pronoun: string;
  email: string;
  phoneNumber: string;
  contactMethod: string;
}
