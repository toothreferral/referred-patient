/* eslint @typescript-eslint/no-explicit-any: "off" */

import { ReactNode } from 'react';
import NavBar from '@/components/Header/NavBar';
import Sidebar from '@/components/Sidebar/Sidebar';
// import { Navigate } from 'react-router-dom';
// import { useAppSelector } from '@/Redux/reduxHooks';
// import { selectUserData } from '@/Redux/Features/userAuthSlice';
// import { SelectOnboardedUser } from '@/Redux/Features/onboardingSlice';

interface Layout {
  children: ReactNode;
}
const DashboardLayout: React.FC<Layout> = ({ children }) => {
  // const { isLoggedIn } = useAppSelector(selectUserData);
  // const checkOnboarded = useAppSelector(SelectOnboardedUser);

  // if (!isLoggedIn) {
  //   return <Navigate to='/signin' replace />;
  // }

  // if (isLoggedIn && !checkOnboarded) {
  //   return <Navigate to='/onboarding' replace />;
  // }

  return (
    <main className='flex justify-between'>
      <section
        className={`w-[20%] min-h-screen border-r border-Grey5 bg-pryColor-400 p-1 transition-all duration-300 px-2 md:px-4`}
      >
        <Sidebar />
      </section>
      <aside className='flex-1 transition-all duration-300 overflow-x-hidden'>
        <NavBar />
        {children}
      </aside>
    </main>
  );
};

export default DashboardLayout;
