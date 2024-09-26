import { refPageData } from '@/components/AllData';
import CreateReferrals from '@/components/DashboardComps/ReferralComps/ReferralStepForms/CreateReferrals';
import Speciality from '@/components/DashboardComps/ReferralComps/ReferralStepForms/Speciality';
import TabContents from '@/components/Tabs/TabContents';
import TabTitle from '@/components/Tabs/TabTitle';
import useUpdatePageName from '@/Hooks/useUpdatePageName';
import { selectGlobal } from '@/Redux/Features/globalSlice';
import { useAppSelector } from '@/Redux/reduxHooks';
import { useState } from 'react';

const Referrals = () => {
  const toggle = useAppSelector(selectGlobal);

  useUpdatePageName('Referrals');
  const [activeTab, setActiveTab] = useState<string>('tab1');

  return (
    <main className='container py-10'>
      <ul className='flex justify-between items-center rounded-lg bg-Grey4 p-1'>
        {refPageData.TabTitle.map(({ id, title }) => (
          <li key={id} className='flex-1'>
            <TabTitle
              id={id}
              title={title}
              activeClass='active'
              notActiveClass='notActive'
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </li>
        ))}
      </ul>

      <article className=' mt-3'>
        {refPageData.TabContents.map(({ id, comp }) => (
          <div key={id}>
            <TabContents id={id} activeTab={activeTab} comps={comp} />
          </div>
        ))}
      </article>

      {toggle['speciality'] && <Speciality id='speciality' />}
      {toggle['create-ref'] && <CreateReferrals id='create-ref' />}
    </main>
  );
};

export default Referrals;
