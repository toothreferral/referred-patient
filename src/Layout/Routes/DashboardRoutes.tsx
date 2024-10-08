import Analytics from '@/Pages/Analytics/Analytics';
import Appointments from '@/Pages/Appointments/Appointments';
import ViewAppointment from '@/Pages/Appointments/ViewAppointment';
import Messages from '@/Pages/Messages/Messages';
import Patients from '@/Pages/Patients/Patients';
import ViewPatient from '@/Pages/Patients/ViewPatient';
import ChangeDentist from '@/Pages/Referrals/ChangeDentist';
import Referrals from '@/Pages/Referrals/Referrals';
import ViewReferral from '@/Pages/Referrals/ViewReferral';
import AddNewMember from '@/Pages/Settings/AddNewMember';
import AddNewPlan from '@/Pages/Settings/AddNewPlan';
import EditMember from '@/Pages/Settings/EditMember';
import EditPlan from '@/Pages/Settings/EditPlan';
import Settings from '@/Pages/Settings/Settings';
import { ReactElement } from 'react';

interface Route {
  path: string;
  name: string;
  element: ReactElement;
}

const dashboardRoutes: Route[] = [
  { path: '/', name: 'Dashboard', element: <Analytics /> },
  { path: '/referrals', name: 'Referrals', element: <Referrals /> },

  {
    path: '/referrals/view/:id',
    name: 'View Referrals',
    element: <ViewReferral />,
  },
  {
    path: '/referrals/change-dentist/:id',
    name: 'Change Dentist',
    element: <ChangeDentist />,
  },

  { path: '/patients', name: 'Patients', element: <Patients /> },
  {
    path: '/patients/view/:id',
    name: 'View Patients',
    element: <ViewPatient />,
  },
  { path: '/appointments', name: 'Appointments', element: <Appointments /> },
  {
    path: '/appointments/view/:id',
    name: 'View Appointments',
    element: <ViewAppointment />,
  },
  { path: '/messages', name: 'Messages', element: <Messages /> },

  { path: '/settings', name: 'Settings', element: <Settings /> },
  { path: '/settings/add-new-plan', name: 'Settings', element: <AddNewPlan /> },
  {
    path: '/settings/edit-plan/:id',
    name: 'Settings',
    element: <EditPlan />,
  },
  {
    path: '/settings/add-new-team-member',
    name: 'Settings',
    element: <AddNewMember />,
  },
  {
    path: '/settings/edit-team-member/:id',
    name: 'Settings',
    element: <EditMember />,
  },
];

export default dashboardRoutes;
