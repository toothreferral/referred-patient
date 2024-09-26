export interface IPracticeInfo {
  firstName: string;
  lastName: string;
  role: string;
  gender: string;
  typeOfDentist: string;
  category: string;
  phoneNumber: string;
  state: string;
  city: string;
  street: string;
  zipCode: string;
  yearsofExperience: string;
  degree: string;
}
export interface IOfficeInfo {
  officeName: string;
  officePhoneNumber: string;
  officeFax: string;
  state: string;
  city: string;
  street: string;
  zipCode: string;
  website: string;
  email: string;
}
export interface ITeamMember {
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  phoneNumber: string;
}

export interface IServerResponse {
  data: { message: string };
}

export interface IServerError {
  data: { message: string };
}
