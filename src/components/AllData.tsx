import { IColData, IStoreSetup } from '@/Interfaces/GlobalInterfaces';
import a from '@/assets/10.png';
import doc1 from '@/assets/doc1.png';
import doc2 from '@/assets/doc2.png';
import doc3 from '@/assets/doc3.png';
import doc4 from '@/assets/doc4.png';
import doc5 from '@/assets/doc5.png';
import doc6 from '@/assets/doc6.png';
import doc7 from '@/assets/doc7.png';
import av1 from '@/assets/Avatar-1.png';
import av2 from '@/assets/Avatar-2.png';
import av3 from '@/assets/Avatar-3.png';
import av4 from '@/assets/Avatar-4.png';
import av5 from '@/assets/Avatar-5.png';
import av6 from '@/assets/Avatar.png';
import brand1 from '@/assets/Ellipse 3411-1.png';
import brand2 from '@/assets/Ellipse 3411-2.png';
import brand3 from '@/assets/Ellipse 3411-3.png';
import brand4 from '@/assets/Ellipse 3411.png';
import brand5 from '@/assets/Rectangle 2221.png';

import logo from '@/assets/healthLogo.png';
import { BsEyeFill, BsTrash3 } from 'react-icons/bs';
import Received from './DashboardComps/ReferralComps/Received';
import { Link } from 'react-router-dom';
import {
  ChangeDoc,
  ChatsIcon,
  ContactSupportIcon,
  GroupChatIcon,
  PersonalInfoIcon,
  ReferIcon,
  SecurityIcon,
} from '@/SVGs/CustomSVGs';
import Pending from './DashboardComps/AppointmentComp/Pending';
import { MdCancel } from 'react-icons/md';
import { ImCheckboxChecked } from 'react-icons/im';
import Chats from './DashboardComps/MessagingComps/Chats';
import Groups from './DashboardComps/MessagingComps/Groups';
import Yearly from './DashboardComps/Plans/Yearly';
import Monthly from './DashboardComps/Plans/Monthly';
import { CiEdit } from 'react-icons/ci';
import PersonalInfo from './DashboardComps/SettingsElements/PersonalInfo';
import PracticeInfo from './DashboardComps/SettingsElements/PracticeInfo';
import OfficeInfo from './DashboardComps/SettingsElements/OfficeInfo';
import InHouseDentalPlan from './DashboardComps/SettingsElements/InHouseDentalPlan';
import Security from './DashboardComps/SettingsElements/Security';
import UserRoles from './DashboardComps/SettingsElements/UserRoles';
import ContactSupport from './DashboardComps/SettingsElements/ContactSupport';

export const practiseInfoData = (
  val: any,
  typeOfDentistData: any,
  categoryData: any[],
  stateData: any[],
  roleData: any[],
): IStoreSetup[] => {
  return [
    {
      type: 'text',
      label: 'First Name',
      id: 'firstName',
      name: 'firstName',
      placeholder: 'Input first name',
      value: val?.firstName,
      require: true,
    },
    {
      type: 'text',
      label: 'Last Name',
      id: 'lastName',
      name: 'lastName',
      placeholder: 'Input last name ',
      value: val?.lastName,
      require: false,
    },
    {
      type: 'cSelect',
      label: 'Gender',
      id: 'gender',
      name: 'gender',
      placeholder: '',
      value: val?.gender,
      options: ['Male', 'Female'],
      require: true,
    },
    {
      label: 'Type of Dentist',
      id: 'typeOfDentist',
      name: 'typeOfDentist',
      type: 'cSelect',
      placeholder: '---- select store category ---',
      options: typeOfDentistData,
      value: val?.typeOfDentist,
      require: true,
      disabled: true,
    },
    {
      type: 'cSelect',
      label: 'Category',
      id: 'category',
      name: 'category',
      placeholder: 'Inpute Your store address here ',
      value: val?.category,
      options: categoryData,
      require: true,
    },
    {
      type: 'text',
      label: 'Role',
      id: 'role',
      name: 'role',
      placeholder: 'Inpute Your store address here ',
      value: val?.role,
      options: roleData,
      require: true,
    },

    {
      type: 'tel',
      label: 'Phone Number',
      id: 'phoneNumber',
      name: 'phoneNumber',
      placeholder: 'Input store phone number',
      value: val?.phoneNumber,
      require: false,
    },
    {
      type: 'cSelect',
      label: 'State',
      id: 'state',
      name: 'state',
      placeholder: '---- select your state ---',
      value: val?.state,
      options: stateData,
      require: true,
    },
    {
      type: 'text',
      label: 'City',
      id: 'city',
      name: 'city',
      placeholder: '---- select your city ---',
      value: val?.city,
      require: true,
    },
    {
      type: 'text',
      label: 'Street',
      id: 'street',
      name: 'street',
      placeholder: 'Inpute Your store address here ',
      value: val?.street,
      require: true,
    },

    {
      type: 'text',
      label: 'Zip Code',
      id: 'zipCode',
      name: 'zipCode',
      placeholder: 'Input your postal code',
      value: val?.zipCode,
      require: false,
    },
    {
      type: 'text',
      label: 'Years of experience',
      id: 'yearsofExperience',
      name: 'yearsofExperience',
      placeholder: '',
      value: val?.yearsofExperience,
      require: true,
    },

    {
      type: 'text',
      label: 'Degree',
      id: 'degree',
      name: 'degree',
      placeholder: '',
      value: val?.degree,
      require: false,
    },
  ];
};

export const countriesCallCode = [
  { name: 'Afghanistan', flag: '🇦🇫', callingCode: '+93' },
  { name: 'Albania', flag: '🇦🇱', callingCode: '+355' },
  { name: 'Algeria', flag: '🇩🇿', callingCode: '+213' },
  { name: 'Andorra', flag: '🇦🇩', callingCode: '+376' },
  { name: 'Angola', flag: '🇦🇴', callingCode: '+244' },
  { name: 'Antigua and Barbuda', flag: '🇦🇬', callingCode: '+1' },
  { name: 'Argentina', flag: '🇦🇷', callingCode: '+54' },
  { name: 'Armenia', flag: '🇦🇲', callingCode: '+374' },
  { name: 'Australia', flag: '🇦🇺', callingCode: '+61' },
  { name: 'Austria', flag: '🇦🇹', callingCode: '+43' },
  { name: 'Azerbaijan', flag: '🇦🇿', callingCode: '+994' },
  { name: 'Bahamas', flag: '🇧🇸', callingCode: '+1' },
  { name: 'Bahrain', flag: '🇧🇭', callingCode: '+973' },
  { name: 'Bangladesh', flag: '🇧🇩', callingCode: '+880' },
  { name: 'Barbados', flag: '🇧🇧', callingCode: '+1' },
  { name: 'Belarus', flag: '🇧🇾', callingCode: '+375' },
  { name: 'Belgium', flag: '🇧🇪', callingCode: '+32' },
  { name: 'Belize', flag: '🇧🇿', callingCode: '+501' },
  { name: 'Benin', flag: '🇧🇯', callingCode: '+229' },
  { name: 'Bhutan', flag: '🇧🇹', callingCode: '+975' },
  { name: 'Bolivia', flag: '🇧🇴', callingCode: '+591' },
  { name: 'Bosnia and Herzegovina', flag: '🇧🇦', callingCode: '+387' },
  { name: 'Botswana', flag: '🇧🇼', callingCode: '+267' },
  { name: 'Brazil', flag: '🇧🇷', callingCode: '+55' },
  { name: 'Brunei', flag: '🇧🇳', callingCode: '+673' },
  { name: 'Bulgaria', flag: '🇧🇬', callingCode: '+359' },
  { name: 'Burkina Faso', flag: '🇧🇫', callingCode: '+226' },
  { name: 'Burundi', flag: '🇧🇮', callingCode: '+257' },
  { name: 'Cabo Verde', flag: '🇨🇻', callingCode: '+238' },
  { name: 'Cambodia', flag: '🇰🇭', callingCode: '+855' },
  { name: 'Cameroon', flag: '🇨🇲', callingCode: '+237' },
  { name: 'Canada', flag: '🇨🇦', callingCode: '+1' },
  { name: 'Central African Republic', flag: '🇨🇫', callingCode: '+236' },
  { name: 'Chad', flag: '🇹🇩', callingCode: '+235' },
  { name: 'Chile', flag: '🇨🇱', callingCode: '+56' },
  { name: 'China', flag: '🇨🇳', callingCode: '+86' },
  { name: 'Colombia', flag: '🇨🇴', callingCode: '+57' },
  { name: 'Comoros', flag: '🇰🇲', callingCode: '+269' },
  { name: 'Congo', flag: '🇨🇬', callingCode: '+242' },
  { name: 'Costa Rica', flag: '🇨🇷', callingCode: '+506' },
  { name: 'Croatia', flag: '🇭🇷', callingCode: '+385' },
  { name: 'Cuba', flag: '🇨🇺', callingCode: '+53' },
  { name: 'Cyprus', flag: '🇨🇾', callingCode: '+357' },
  { name: 'Czech Republic', flag: '🇨🇿', callingCode: '+420' },
  { name: 'Denmark', flag: '🇩🇰', callingCode: '+45' },
  { name: 'Djibouti', flag: '🇩🇯', callingCode: '+253' },
  { name: 'Dominica', flag: '🇩🇲', callingCode: '+1' },
  { name: 'Dominican Republic', flag: '🇩🇴', callingCode: '+1' },
  { name: 'Ecuador', flag: '🇪🇨', callingCode: '+593' },
  { name: 'Egypt', flag: '🇪🇬', callingCode: '+20' },
  { name: 'El Salvador', flag: '🇸🇻', callingCode: '+503' },
  { name: 'Equatorial Guinea', flag: '🇬🇶', callingCode: '+240' },
  { name: 'Eritrea', flag: '🇪🇷', callingCode: '+291' },
  { name: 'Estonia', flag: '🇪🇪', callingCode: '+372' },
  { name: 'Eswatini', flag: '🇸🇿', callingCode: '+268' },
  { name: 'Ethiopia', flag: '🇪🇹', callingCode: '+251' },
  { name: 'Fiji', flag: '🇫🇯', callingCode: '+679' },
  { name: 'Finland', flag: '🇫🇮', callingCode: '+358' },
  { name: 'France', flag: '🇫🇷', callingCode: '+33' },
];

export const flagCallCodes = [
  {
    name: 'United Kingdom (UK)',
    flag: '🇬🇧',
    callingCode: '+44',
  },
  {
    name: 'United States of America (USA)',
    flag: '🇺🇸',
    callingCode: '+1',
  },
  {
    name: 'Canada (CAD)',
    flag: '🇨🇦',
    callingCode: '+1',
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    callingCode: '+49',
  },
];

export const topDealersData = [
  {
    id: '1',
    title: 'Jane Cooper',
    handle: 'Consulting',
    time: '12:00',
    status: 'Ready',
    imgUrl: a,
  },
  {
    id: '2',
    title: 'Jane Cooper',
    handle: 'Consulting',
    time: '12:00',
    imgUrl: a,
    status: 'Ready',
  },
  {
    id: '3',
    title: 'Jane Cooper',
    handle: 'Consulting',
    time: '12:00',
    imgUrl: a,
    status: 'Waiting',
  },
  {
    id: '4',
    title: 'Jane Cooper',
    handle: 'Consulting',
    time: '12:00',
    imgUrl: a,
    status: 'Waiting',
  },
];

export const refData = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],

  datasets: [
    {
      data: [100, 150, 190, 145, 170, 190, 300, 100, 150, 99, 110, 170, 250],
      lineTension: 1.1,
      backgroundColor: '#17813C',
      hoverBackgroundColor: '#075DC1',
      borderRadius: '0',
      barThickness: '20',
    },
  ],
};

export const chartOptions = {
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      beginAtZero: true,
      barPercentage: 2, // Adjusts the width of the bars
      categoryPercentage: 5,
    },
    y: {
      grid: {
        display: true,
      },
      // ticks: {
      //   callback: formatYAxisLabel,
      // },
    },
  },
};

export const refListData = [
  {
    id: 1,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    refDoc: 'Dr. Cameron Williamson',
    hospital: 'Medplus Dental',
    status: 'Approved',
    imgUrl: a,
  },
  {
    id: 2,
    name: 'Jim Yellow',
    email: 'wing@yahoo.com',
    refDoc: 'Dr. Cameron Williamson',
    hospital: 'Medplus Dental',
    status: 'Approved',
    imgUrl: a,
  },
  {
    id: 3,
    name: 'John Green',
    email: 'wing@yahoo.com',
    refDoc: 'Dr. Cameron Williamson',
    hospital: 'Medplus Dental',
    status: 'Pending',
    imgUrl: a,
  },
  {
    id: 4,
    name: 'Sim Brown',
    email: 'wing@yahoo.com',
    refDoc: 'Dr. Cameron Williamson',
    hospital: 'Medplus Dental',
    status: 'Approved',
    imgUrl: a,
  },
  {
    id: 5,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    refDoc: 'Dr. Cameron Williamson',
    hospital: 'Medplus Dental',
    status: 'Pending',
    imgUrl: a,
  },
  {
    id: 6,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    refDoc: 'Dr. Cameron Williamson',
    hospital: 'Medplus Dental',
    status: 'Approved',
    imgUrl: a,
  },
  {
    id: 7,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    refDoc: 'Dr. Cameron Williamson',
    hospital: 'Medplus Dental',
    status: 'Pending',
    imgUrl: a,
  },
  {
    id: 51,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    refDoc: 'Dr. Cameron Williamson',
    hospital: 'Medplus Dental',
    status: 'Pending',
    imgUrl: a,
  },
  {
    id: 16,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    refDoc: 'Dr. Cameron Williamson',
    hospital: 'Medplus Dental',
    status: 'Pending',
    imgUrl: a,
  },
  {
    id: 71,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    refDoc: 'Dr. Cameron Williamson',
    hospital: 'Medplus Dental',
    status: 'Pending',
    imgUrl: a,
  },
  {
    id: 15,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    refDoc: 'Dr. Cameron Williamson',
    hospital: 'Medplus Dental',
    status: 'Pending',
    imgUrl: a,
  },
  {
    id: 63,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    refDoc: 'Dr. Cameron Williamson',
    hospital: 'Medplus Dental',
    status: 'Pending',
    imgUrl: a,
  },
  {
    id: 37,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    refDoc: 'Dr. Cameron Williamson',
    hospital: 'Medplus Dental',
    status: 'Pending',
    imgUrl: a,
  },
];

export const docsData = [
  {
    id: 1,
    fullName: 'Dr. Darrell Steward',
    hospitalName: 'Healthplus dental',
    availability: '3/14/2024',
    hospital: 'Medplus Dental',
    location: '5 miles away',
    insurance: 'Delta dental',
    Zip: '203423',
    imgUrl: doc1,
    logo: logo,
  },
  {
    id: 2,
    fullName: 'Dr. Darrell Steward',
    hospitalName: 'Healthplus dental',
    availability: '3/14/2024',
    hospital: 'Medplus Dental',
    location: '5 miles away',
    insurance: 'Delta dental',
    Zip: '203423',
    imgUrl: doc2,
    logo: logo,
  },
  {
    id: 3,
    fullName: 'Dr. Darrell Steward',
    hospitalName: 'Healthplus dental',
    availability: '3/14/2024',
    hospital: 'Medplus Dental',
    location: '5 miles away',
    insurance: 'Delta dental',
    Zip: '203423',
    imgUrl: doc3,
    logo: logo,
  },
  {
    id: 4,
    fullName: 'Dr. Darrell Steward',
    hospitalName: 'Healthplus dental',
    availability: '3/14/2024',
    hospital: 'Medplus Dental',
    location: '5 miles away',
    insurance: 'Delta dental',
    Zip: '203423',
    imgUrl: doc4,
    logo: logo,
  },
  {
    id: 5,
    fullName: 'Dr. Darrell Steward',
    hospitalName: 'Healthplus dental',
    availability: '3/14/2024',
    hospital: 'Medplus Dental',
    location: '5 miles away',
    insurance: 'Delta dental',
    Zip: '203423',
    imgUrl: doc5,
    logo: logo,
  },
  {
    id: 6,
    fullName: 'Dr. Darrell Steward',
    hospitalName: 'Healthplus dental',
    availability: '3/14/2024',
    hospital: 'Medplus Dental',
    location: '5 miles away',
    insurance: 'Delta dental',
    Zip: '203423',
    imgUrl: doc6,
    logo: logo,
  },
  {
    id: 7,
    fullName: 'Dr. Darrell Steward',
    hospitalName: 'Healthplus dental',
    availability: '3/14/2024',
    hospital: 'Medplus Dental',
    location: '5 miles away',
    insurance: 'Delta dental',
    Zip: '203423',
    imgUrl: doc7,
    logo: logo,
  },
];

export const refColData: IColData[] = [
  {
    name: 'Referred Doctor',
    selector: ({ refDoc }: { refDoc: string }) => refDoc,
  },
  {
    name: 'Doctor Email',
    selector: ({ email }: { email: string }) => email,
  },
  {
    name: 'Hospital',
    selector: ({ hospital }: { hospital: string }) => hospital,
  },

  {
    name: 'Status',
    selector: ({ status }: { status: string }) => status,
    width: '100px',
    cell: ({ status }: { status: string }) => (
      <span
        className={`${
          status === 'Approved' ? 'text-positive ' : 'text-[#DF9949]'
        } `}
      >
        {status}
      </span>
    ),
  },
  {
    name: 'Action',
    grow: 1.4,
    cell: ({ id }) => (
      <div className='flex items-center gap-2'>
        <Link
          to={`/referrals/view/${id}`}
          className='rounded-3xl py-1 px-2 flex items-center gap-2 bg-[#075DC11A] text-pryColor'
        >
          <BsEyeFill /> View
        </Link>
        <Link
          to={`/referrals/change-dentist/${id}`}
          className='rounded-3xl py-1 px-2 flex items-center gap-2 bg-[#17813C1A] text-positive'
        >
          <ChangeDoc /> Change Dentist
        </Link>
      </div>
    ),
  },
];

export const refPageData = {
  TabTitle: [
    {
      id: 'tab1',
      title: 'Received',
    },

    {
      id: 'tab2',
      title: 'Referral Changed',
    },
    {
      id: 'tab3',
      title: 'Scheduled',
    },
    {
      id: 'tab4',
      title: 'Completed',
    },
  ],

  TabContents: [
    { id: 'tab1', comp: <Received /> },
    { id: 'tab2', comp: <Received /> },
    { id: 'tab3', comp: <Received /> },
    { id: 'tab4', comp: <Received /> },
  ],
};

export const appointmentPageData = {
  TabTitle: [
    {
      id: 'tab1',
      title: 'Pending',
    },

    {
      id: 'tab2',
      title: 'Accepted',
    },
    {
      id: 'tab3',
      title: 'Cancelled',
    },

    {
      id: 'tab4',
      title: 'Completed',
    },
  ],

  TabContents: [
    { id: 'tab1', comp: <Pending /> },
    { id: 'tab2', comp: <Pending /> },
    { id: 'tab3', comp: <Pending /> },
    { id: 'tab4', comp: <Pending /> },
  ],
};

export const patientColData: IColData[] = [
  {
    name: 'Full Name',
    selector: ({ name }: { name: string }) => name,
    grow: 2,
    cell: ({ imgUrl, name }) => (
      <div className='flex items-center gap-5'>
        <figure className='h-8 w-8 overflow-hidden rounded-full'>
          <img src={imgUrl} alt={name} />
        </figure>
        <span>{name}</span>
      </div>
    ),
  },
  {
    name: 'Email',
    selector: ({ email }: { email: string }) => email,
  },
  {
    name: 'Gender',
    selector: ({ gender }: { gender: string }) => gender,
    width: '100px',
  },
  {
    name: 'Date of birth',
    selector: ({ dob }: { dob: string }) => dob,
  },
  {
    name: 'Phone',
    selector: ({ phone }: { phone: string }) => phone,
  },

  {
    name: 'Action',
    grow: 1.7,
    cell: ({ id }) => (
      <div className='flex items-center gap-3'>
        <Link
          to={`/patients/view/${id}`}
          className='rounded-3xl py-1 px-2 flex items-center gap-1 bg-[#075DC11A] text-pryColor'
        >
          <BsEyeFill /> View
        </Link>
        <Link
          to={`/patients/view/${id}`}
          className='rounded-3xl py-1 px-2 flex items-center gap-1 bg-pryColor text-white'
        >
          <ReferIcon /> Refer
        </Link>
      </div>
    ),
  },
];

export const patientListData = [
  {
    id: 1,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    gender: 'Female',
    dob: 'October 19, 1993',
    phone: '(252) 555-0126',
    imgUrl: doc1,
  },
  {
    id: 2,
    name: 'Jim Yellow',
    email: 'wing@yahoo.com',
    gender: 'Male',
    dob: 'October 19, 1993',
    phone: '(252) 555-0126',
    imgUrl: doc2,
  },
  {
    id: 3,
    name: 'John Green',
    email: 'wing@yahoo.com',
    gender: 'Female',
    dob: 'October 19, 1993',
    phone: '(252) 555-0126',
    imgUrl: doc1,
  },
  {
    id: 4,
    name: 'Sim Brown',
    email: 'wing@yahoo.com',
    gender: 'Male',
    dob: 'October 19, 1993',
    phone: '(252) 555-0126',
    imgUrl: doc1,
  },
  {
    id: 5,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    gender: 'Female',
    dob: 'October 19, 1993',
    phone: '(252) 555-0126',
    imgUrl: doc2,
  },
  {
    id: 6,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    gender: 'Male',
    dob: 'October 19, 1993',
    phone: '(252) 555-0126',
    imgUrl: doc1,
  },
  {
    id: 7,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    gender: 'Female',
    dob: 'October 19, 1993',
    phone: '(252) 555-0126',
    imgUrl: doc2,
  },
  {
    id: 51,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    gender: 'Female',
    dob: 'October 19, 1993',
    phone: '(252) 555-0126',
    imgUrl: doc1,
  },
  {
    id: 16,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    gender: 'Male',
    dob: 'October 19, 1993',
    phone: '(252) 555-0126',
    imgUrl: doc2,
  },
  {
    id: 71,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    gender: 'Female',
    dob: 'October 19, 1993',
    phone: '(252) 555-0126',
    imgUrl: doc1,
  },
  {
    id: 15,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    gender: 'Male',
    dob: 'October 19, 1993',
    phone: '(252) 555-0126',
    imgUrl: doc2,
  },
  {
    id: 63,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    gender: 'Female',
    dob: 'October 19, 1993',
    phone: '(252) 555-0126',
    imgUrl: doc1,
  },
  {
    id: 37,
    name: 'John Brown',
    email: 'wing@yahoo.com',
    gender: 'Male',
    dob: 'October 19, 1993',
    phone: '(252) 555-0126',
    imgUrl: doc2,
  },
];

export const refHistoryColData: IColData[] = [
  {
    name: 'Appointment Date',
    selector: ({ date }: { date: string }) => date,
  },
  {
    name: 'Time',
    selector: ({ time }: { time: string }) => time,
  },
  {
    name: 'Reason',
    selector: ({ reason }: { reason: string }) => reason,
    minWidth: '200px',
    grow: 2,
  },
  {
    name: 'Dentist',
    selector: ({ dentist }: { dentist: string }) => dentist,
  },
  {
    name: 'Referred by',
    selector: ({ referredBy }: { referredBy: string }) => referredBy,
  },
];

export const refHistoryListData = [
  {
    id: 1,
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    dentist: 'Annette Black',
    referredBy: 'Ralph Edwards',
  },
  {
    id: 2,
    date: '8/15/24',
    time: '13:00',
    reason: 'Consultation',
    dentist: 'Annette Black',
    referredBy: 'Ralph Edwards',
  },
  {
    id: 3,
    date: '8/15/24',
    time: '13:00',
    reason: 'Consultation',
    dentist: 'Annette Black',
    referredBy: 'Ralph Edwards',
  },
  {
    id: 4,
    date: '8/15/24',
    time: '13:00',
    reason: 'Consultation',
    dentist: 'Annette Black',
    referredBy: 'Ralph Edwards',
  },
  {
    id: 5,
    date: '8/15/24',
    time: '13:00',
    reason: 'Consultation',
    dentist: 'Annette Black',
    referredBy: 'Ralph Edwards',
  },
  {
    id: 6,
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    dentist: 'Annette Black',
    referredBy: 'Ralph Edwards',
  },
  {
    id: 7,
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    dentist: 'Annette Black',
    referredBy: 'Ralph Edwards',
  },
  {
    id: 51,
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    dentist: 'Annette Black',
    referredBy: 'Ralph Edwards',
  },
  {
    id: 16,
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    dentist: 'Annette Black',
    referredBy: 'Ralph Edwards',
  },
  {
    id: 71,
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    dentist: 'Annette Black',
    referredBy: 'Ralph Edwards',
  },
  {
    id: 15,
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    dentist: 'Annette Black',
    referredBy: 'Ralph Edwards',
  },
  {
    id: 63,
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    dentist: 'Annette Black',
    referredBy: 'Ralph Edwards',
  },
  {
    id: 37,
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    dentist: 'Annette Black',
    referredBy: 'Ralph Edwards',
  },
];

export const appointmentColData: IColData[] = [
  {
    name: 'Full Name',
    selector: ({ name }: { name: string }) => name,
    grow: 1.8,
    cell: ({ imgUrl, name }) => (
      <div className='flex items-center gap-5'>
        <figure className='h-8 w-8 overflow-hidden rounded-full'>
          <img src={imgUrl} alt={name} />
        </figure>
        <span>{name}</span>
      </div>
    ),
  },
  {
    name: 'Time',
    selector: ({ time }: { time: string }) => time,
    width: '70px',
  },
  {
    name: 'Date',
    selector: ({ date }: { date: string }) => date,
    width: '90px',
  },
  {
    name: 'Reason',
    selector: ({ reason }: { reason: string }) => reason,
    grow: 1.8,
  },

  {
    name: 'Action',
    grow: 5,
    cell: ({ id }) => (
      <div className='flex items-center gap-2'>
        <Link
          to={`/appointments/view/${id}`}
          className='rounded-3xl py-2 px-2.5 flex items-center gap-1 bg-[#075DC11A] text-pryColor'
        >
          <BsEyeFill /> View
        </Link>
        <button className='rounded-3xl py-2 px-3 flex items-center gap-1 bg-[#17813C1A] text-positive'>
          <ImCheckboxChecked /> Approve
        </button>
        <button className='rounded-3xl py-2 px-3 flex items-center gap-1 bg-[#6B72801A] text-[#6B7280]'>
          <ImCheckboxChecked /> Referred out
        </button>
        <button className='rounded-3xl py-2 px-3 flex items-center gap-1 bg-[#FF3A441A] text-negative'>
          <MdCancel /> Decline
        </button>
      </div>
    ),
  },
];

export const appointmentListData = [
  {
    id: 1,
    name: 'John Brown',
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    imgUrl: doc1,
  },
  {
    id: 2,
    name: 'Jim Yellow',
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    imgUrl: doc2,
  },
  {
    id: 3,
    name: 'John Green',
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    imgUrl: doc1,
  },
  {
    id: 4,
    name: 'Sim Brown',
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    imgUrl: doc1,
  },
  {
    id: 5,
    name: 'John Brown',
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    imgUrl: doc2,
  },
  {
    id: 6,
    name: 'John Brown',
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    imgUrl: doc1,
  },
  {
    id: 7,
    name: 'John Brown',
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    imgUrl: doc2,
  },
  {
    id: 51,
    name: 'John Brown',
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    imgUrl: doc1,
  },
  {
    id: 16,
    name: 'John Brown',
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    imgUrl: doc2,
  },
  {
    id: 71,
    name: 'John Brown',
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    imgUrl: doc1,
  },
  {
    id: 15,
    name: 'John Brown',
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    imgUrl: doc2,
  },
  {
    id: 63,
    name: 'John Brown',
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    imgUrl: doc1,
  },
  {
    id: 37,
    name: 'John Brown',
    date: '8/15/24',
    time: '13:00',
    reason: 'Scaling',
    imgUrl: doc2,
  },
];

export const msgTypeData = {
  TabTitle: [
    {
      id: 'tab1',
      title: 'Chats',
      icon: <ChatsIcon />,
    },

    {
      id: 'tab2',
      title: 'Groups',
      icon: <GroupChatIcon />,
    },
  ],

  TabContents: [
    { id: 'tab1', comp: <Chats /> },
    { id: 'tab2', comp: <Groups /> },
  ],
};

export const planData = {
  TabTitle: [
    {
      id: 'tab1',
      title: 'Bill Yearly (Save up to 20%)',
    },

    {
      id: 'tab2',
      title: 'Bill Monthly',
    },
  ],

  TabContents: [
    { id: 'tab1', comp: <Yearly /> },
    { id: 'tab2', comp: <Monthly /> },
  ],
};

export const subTypeData = [
  {
    id: '1',
    title: 'Basic',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    amount: 0,
    isCurrent: true,
  },
  {
    id: '2',
    title: 'Professional',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    amount: 100,
    isCurrent: false,
  },
  {
    id: '3',
    title: 'Teams',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
    amount: 450,
    isCurrent: false,
  },
];

export const messagingData = [
  {
    id: '1',
    title: 'David Odafe',
    message: 'Hello, how is your experience in the ...',
    imgUrl: av1,
    status: 'Open',
  },
  {
    id: '2',
    title: 'Mark Spence',
    message: 'Hello, how is your experience in the ...',
    imgUrl: av2,
    status: 'New',
  },
  {
    id: '3',
    title: 'Rebecca Anthony',
    message: 'Hello, how is your experience in the ...',
    imgUrl: av3,
    status: 'New',
  },
  {
    id: '7',
    title: 'Rebecca Anthony',
    message: 'Hello, how is your experience in the ...',
    imgUrl: av6,
    status: 'New',
  },
  {
    id: '4',
    title: 'Rebecca Fool',
    message: 'Hello, how is your experience in the ...',
    imgUrl: av4,
    status: 'Closed',
  },
  {
    id: '5',
    title: 'Rebecca More',
    message: 'Hello, how is your experience in the ...',
    imgUrl: av5,
    status: 'Closed',
  },
  {
    id: '8',
    title: 'Rebecca More',
    message: 'Hello, how is your experience in the ...',
    imgUrl: av1,
    status: 'Closed',
  },
  {
    id: '6',
    title: 'Rebecca More',
    message: 'Hello, how is your experience in the ...',
    imgUrl: av6,
    status: 'Closed',
  },
];

export const groupChatData = [
  {
    id: '1',
    title: 'Dental Service in LA',
    message: 'Hello, how is your experience in the ...',
    imgUrl: brand1,
    status: 'Open',
  },
  {
    id: '2',
    title: 'Dentist in LA',
    message: 'Hello, how is your experience in the ...',
    imgUrl: brand2,
    status: 'New',
  },
  {
    id: '3',
    title: 'Project Topics Forum',
    message: 'Hello, how is your experience in the ...',
    imgUrl: brand3,
    status: 'New',
  },
  {
    id: '7',
    title: 'Technology Gist',
    message: 'Hello, how is your experience in the ...',
    imgUrl: brand1,
    status: 'New',
  },
  {
    id: '4',
    title: 'Technology Gist',
    message: 'Hello, how is your experience in the ...',
    imgUrl: brand4,
    status: 'Closed',
  },
  {
    id: '5',
    title: 'Dentist in LA',
    message: 'Hello, how is your experience in the ...',
    imgUrl: brand5,
    status: 'Closed',
  },
  {
    id: '8',
    title: 'Project Topics Forum',
    message: 'Hello, how is your experience in the ...',
    imgUrl: brand3,
    status: 'Closed',
  },
  {
    id: '6',
    title: 'RProject Topics Forum',
    message: 'Hello, how is your experience in the ...',
    imgUrl: brand2,
    status: 'Closed',
  },
];

export const insuranceColData: IColData[] = [
  {
    name: 'S/N',
    selector: ({ id }: { id: string }) => id,
    width: '100px',
  },
  {
    name: 'Insurance Company',
    selector: ({ coyName }: { coyName: string }) => coyName,
  },

  {
    name: 'Insurance Plans',
    selector: ({ plan }: { plan: string }) => plan,
    grow: 2,
  },

  {
    name: 'Action',

    cell: () => (
      <div className='flex items-center gap-3'>
        <button
          // to={`/insurance/view/${id}`}
          className='rounded-3xl py-2 px-3 flex items-center gap-1 bg-[#075DC11A] text-pryColor'
        >
          <CiEdit /> Edit
        </button>

        <button className='rounded-3xl py-2 px-3 flex items-center gap-1 bg-[#F0F0F0] text-Grey1'>
          <BsTrash3 /> Delete
        </button>
      </div>
    ),
  },
];

export const insuranceListData = [
  {
    id: 1,
    coyName: 'Delta Dental',
    plan: 'PPO Dentist - Preventive Plan',
  },
  {
    id: 2,
    coyName: 'Delta Dental',
    plan: 'PPO Dentist - Preventive Plan',
  },
  {
    id: 3,
    coyName: 'Delta Dental',
    plan: 'PPO Dentist - Preventive Plan',
  },
  {
    id: 4,
    coyName: 'Delta Dental',
    plan: 'PPO Dentist - Preventive Plan',
  },
  {
    id: 5,
    coyName: 'Delta Dental',
    plan: 'PPO Dentist - Preventive Plan',
  },
  {
    id: 6,
    coyName: 'Delta Dental',
    plan: 'PPO Dentist - Preventive Plan',
  },
  {
    id: 7,
    coyName: 'Delta Dental',
    plan: 'PPO Dentist - Preventive Plan',
  },
  {
    id: 51,
    coyName: 'Delta Dental',
    plan: 'PPO Dentist - Preventive Plan',
  },
  {
    id: 16,
    coyName: 'Delta Dental',
    plan: 'PPO Dentist - Preventive Plan',
  },
  {
    id: 71,
    coyName: 'Delta Dental',
    plan: 'PPO Dentist - Preventive Plan',
  },
  {
    id: 15,
    coyName: 'Delta Dental',
    plan: 'PPO Dentist - Preventive Plan',
  },
  {
    id: 63,
    coyName: 'Delta Dental',
    plan: 'PPO Dentist - Preventive Plan',
  },
  {
    id: 37,
    coyName: 'Delta Dental',
    plan: 'PPO Dentist - Preventive Plan',
  },
];

export const settingsPageData = {
  TabTitle: [
    {
      id: 'tab1',
      title: 'Personal Information',
      icon: <PersonalInfoIcon />,
    },

    {
      id: 'tab5',
      title: 'Security',
      icon: <SecurityIcon />,
    },

    {
      id: 'tab7',
      title: 'Contact Support',
      icon: <ContactSupportIcon />,
    },
  ],

  TabContents: [
    { id: 'tab1', comp: <PersonalInfo /> },
    { id: 'tab2', comp: <PracticeInfo /> },
    { id: 'tab3', comp: <OfficeInfo /> },
    { id: 'tab4', comp: <InHouseDentalPlan /> },
    { id: 'tab5', comp: <Security /> },
    { id: 'tab6', comp: <UserRoles /> },
    { id: 'tab7', comp: <ContactSupport /> },
  ],
};

export const subPlanData = [
  {
    id: 1,
    title: 'Standard Adult Plan',
    monthlyPrice: 30,
    yearlyPrice: 325,

    description1: '1 basic cleaning every 6 months',
    description2: 'Oral cancer screening with cleaning',
    description3: '1-2 exams/year',
    description4: 'X-rays as determined necessary',
    description5: '1 emergency exam with X-ray/year',
    bg: '',
  },
  {
    id: 2,
    title: 'Standard Child Plan',
    monthlyPrice: 30,
    yearlyPrice: 325,

    description1: '1 basic cleaning every 6 months',
    description2: 'Oral cancer screening with cleaning',
    description3: '1-2 exams/year',
    description4: 'X-rays as determined necessary',
    description5: '1 emergency exam with X-ray/year',
    bg: '!bg-[#17813C]',
  },
  {
    id: 3,
    title: 'Periodonal Plan',
    monthlyPrice: 30,
    yearlyPrice: 325,

    description1: '1 basic cleaning every 6 months',
    description2: 'Oral cancer screening with cleaning',
    description3: '1-2 exams/year',
    description4: 'X-rays as determined necessary',
    description5: '1 emergency exam with X-ray/year',
    bg: '!bg-[#00A1FF]',
  },
];
