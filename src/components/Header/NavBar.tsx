import './Navbar.scss';

import userIcon from '@/assets/noAvatar.png';
import Modal from '../popUps/Modal';
import { useAppSelector } from '@/Redux/reduxHooks';
import { selectGlobal, selectPageName } from '@/Redux/Features/globalSlice';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import UserCard from './UserCard';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { NotifIcon } from '@/SVGs/CustomSVGs';
import { useLocation } from 'react-router-dom';
import CreateReferralModal from '../DashboardComps/ReferralComps/CreateReferralModal';

const NavBar = () => {
  const { handleShow } = useGlobalHooks();
  const toggle = useAppSelector(selectGlobal);
  const name = useAppSelector(selectPageName);
  const { pathname } = useLocation();

  return (
    <main className='navbar flex items-center '>
      <header className='  w-full flex container justify-between items-center'>
        <div className='flex items-center gap-8 '>
          <h3>{name}</h3>
          {pathname === '/referrals' && (
            <button
              onClick={() => handleShow('ref')}
              className='main-btn flex items-center gap-2 '
            >
              New Referral {toggle['ref'] ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          )}
        </div>

        <div className='flex items-center gap-2 cursor-pointer'>
          <button
            type='button'
            onClick={() => handleShow('notif')}
            id='notif'
            className='notifs'
          >
            <NotifIcon />
            <small> </small>
          </button>
          <figure className='w-[40px] h-[40px] '>
            <img src={userIcon} alt='' />
          </figure>
          <FaChevronDown onClick={() => handleShow('user')} />
        </div>
      </header>

      {toggle['user'] && (
        <Modal id='user' className='userPopUp w-full md:w-6/12 lg:w-4/12 m-3'>
          <UserCard />
        </Modal>
      )}
      {toggle['ref'] && (
        <Modal
          id='ref'
          className='absolute top-[90%] w-full md:w-6/12 lg:w-4/12 m-3  z-50'
        >
          <CreateReferralModal />
        </Modal>
      )}
    </main>
  );
};

export default NavBar;
