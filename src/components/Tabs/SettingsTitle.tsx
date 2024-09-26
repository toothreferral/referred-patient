import { TabProps } from '@/Interfaces/GlobalInterfaces';
import { IoChevronForward } from 'react-icons/io5';

const SettingsTitle = ({
  id,
  title,
  activeTab,
  setActiveTab,
  activeClass,
  notActiveClass,
  icon,
}: TabProps) => {
  const handTabSwitch = (id: string) => {
    if (setActiveTab) {
      setActiveTab(id);
    }
  };

  return (
    <div
      key={id}
      onClick={() => handTabSwitch(id)}
      className={activeTab === id ? activeClass : notActiveClass}
    >
      <div id={id} className='flex justify-between items-center'>
        <hgroup className='flex gap-3 items-center'>
          <span className='w-8 h-8 rounded-xl grid place-content-center'>
            {icon}
          </span>
          <h4>{title}</h4>
        </hgroup>
        <IoChevronForward />
      </div>
    </div>
  );
};

export default SettingsTitle;
