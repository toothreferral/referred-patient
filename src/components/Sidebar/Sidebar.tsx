import BrandLogo from '../BrandLogo';
import './Sidebar.scss';
import { SidebarData } from './SidebarData';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <main className=' sidebarContainer'>
      <section className='mb-5 mt-3 flex gap-3 '>
        <div className='flex items-center '>
          <BrandLogo side />
        </div>
      </section>
      <section className=' w-full mx-auto flex flex-col'>
        <ul className='flex flex-col gap-3'>
          {SidebarData.map(({ id, url, title, icon }) => (
            <NavLink
              key={id}
              to={url}
              className={({ isActive }) =>
                isActive ? 'sidebarActive' : 'sidebarNotActive '
              }
            >
              <hgroup className=' flex gap-2 items-center '>
                <h4>{icon} </h4>
                <h4>{title}</h4>
              </hgroup>
            </NavLink>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Sidebar;
