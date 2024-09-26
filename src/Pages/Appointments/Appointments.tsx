import { appointmentPageData } from '@/components/AllData';
import TabContents from '@/components/Tabs/TabContents';
import TabTitle from '@/components/Tabs/TabTitle';
import useUpdatePageName from '@/Hooks/useUpdatePageName';
import { useState } from 'react';

const Appointments = () => {
  useUpdatePageName('Appointments');
  const [activeTab, setActiveTab] = useState<string>('tab1');

  return (
    <main className='container py-10'>
      <ul className='flex justify-between items-center rounded-lg bg-Grey4 p-1'>
        {appointmentPageData.TabTitle.map(({ id, title }) => (
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
        {appointmentPageData.TabContents.map(({ id, comp }) => (
          <div key={id}>
            <TabContents id={id} activeTab={activeTab} comps={comp} />
          </div>
        ))}
      </article>
    </main>
  );
};

export default Appointments;
