import { settingsPageData } from '@/components/AllData';
import SettingsTitle from '@/components/Tabs/SettingsTitle';
import TabContents from '@/components/Tabs/TabContents';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import useUpdatePageName from '@/Hooks/useUpdatePageName';
import { selectGlobal } from '@/Redux/Features/globalSlice';
import { useAppSelector } from '@/Redux/reduxHooks';
import { LogoutIcon } from '@/SVGs/CustomSVGs';
import { useState } from 'react';
import Logout from '../Logout/Logout';

const Settings = () => {
  useUpdatePageName('Settings');
  const { handleShow } = useGlobalHooks();
  const toggle = useAppSelector(selectGlobal);
  const [activeTab, setActiveTab] = useState<string>('tab1');

  return (
    <main className='bg-Grey4 py-10  min-h-screen'>
      <section className='container flex justify-between gap-3'>
        <ul className='flex flex-col justify-between text-start rounded-lg bg-white p-1 card divide-y w-full lg:w-3/12 h-full'>
          {settingsPageData.TabTitle.map(({ id, title, icon }) => (
            <li key={id} className='flex-1'>
              <SettingsTitle
                id={id}
                title={title}
                icon={icon}
                activeClass='settingsActive'
                notActiveClass='settingsNotActive'
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </li>
          ))}

          <li
            onClick={() => handleShow('logout')}
            className='flex-1 settingsNotActive'
          >
            <hgroup className={'flex gap-3 items-center'}>
              <span className='w-8 h-8 rounded-xl grid place-content-center'>
                {' '}
                <LogoutIcon />{' '}
              </span>
              <h4>Logout</h4>
            </hgroup>
          </li>
        </ul>

        <article className='flex-1 card h-full bg-white p-2'>
          {settingsPageData.TabContents.map(({ id, comp }) => (
            <div key={id}>
              <TabContents id={id} activeTab={activeTab} comps={comp} />
            </div>
          ))}
        </article>
      </section>

      {toggle['logout'] && (
        <Logout id='logout' close={() => handleShow('logout')} />
      )}
    </main>
  );
};

export default Settings;
