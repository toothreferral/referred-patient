import { Link } from 'react-router-dom';
import a from '@/assets/doc1.png';
import b from '@/assets/doc4.png';
import c from '@/assets/doc3.png';
import d from '@/assets/doc4.png';
import { useAppSelector } from '@/Redux/reduxHooks';
import { selectGlobal } from '@/Redux/Features/globalSlice';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import ActionModal from '@/components/ActionModal/ActionModal';
import { DeleteInIcon } from '@/SVGs/CustomSVGs';

export const userData = [
  {
    id: 1,
    firstName: 'John ',
    lastName: 'Cooper',
    imgUrl: a,
    role: 'Office Manager',
    phoneNumber: '(603) 555-0123',
    email: 'johnken@yahoo.com',
  },
  {
    id: 2,
    firstName: 'John ',
    lastName: 'Cooper',
    imgUrl: b,
    role: 'Sterilization Tech',
    phoneNumber: '(603) 555-0123',
    email: 'johnken@yahoo.com',
  },
  {
    id: 3,
    firstName: 'John ',
    lastName: 'Cooper',
    imgUrl: c,
    role: 'Intern',
    phoneNumber: '(603) 555-0123',
    email: 'johnken@yahoo.com',
  },
  {
    id: 3,
    firstName: 'John ',
    lastName: 'Cooper',
    imgUrl: d,
    role: 'Front Desk',
    phoneNumber: '(603) 555-0123',
    email: 'johnken@yahoo.com',
  },
];
const UserRoles = () => {
  const toggle = useAppSelector(selectGlobal);
  const { handleShow } = useGlobalHooks();
  return (
    <main className='container py-6'>
      <header className='flex items-center justify-between my-5'>
        <hgroup>
          <h4 className='text-xl font-semibold'>Users & Roles</h4>

          <h6 className='text-Grey1'>View your team members and their roles</h6>
        </hgroup>

        <Link to='/settings/add-new-team-member' className='main-btn'>
          Add team member
        </Link>
      </header>{' '}
      <ul className='flex flex-col gap-3'>
        {userData.map(({ id, firstName, lastName, role, imgUrl }) => (
          <li
            key={id}
            className='flex items-center justify-between bg-Grey4 !border border-[#E6E7E9] rounded-xl p-2'
          >
            <div className='flex items-center gap-2'>
              <figure className='messageAvatar'>
                <img src={imgUrl} alt={firstName} />
              </figure>

              <h5 className='font-semibold'>
                {firstName} {lastName}{' '}
              </h5>
            </div>

            <div>
              <p>{role} </p>
            </div>

            <div className='flex items-center gap-2'>
              <Link
                to={`/settings/edit-team-member/${id}`}
                className='outline-btn !bg-[#17813C1A] !border-positive !text-positive '
              >
                Edit
              </Link>
              <button
                onClick={() => handleShow(`mem-del-${id}`)}
                className='outline-btn !bg-[#F0F0F0] !border-Grey1 !text-Grey1'
              >
                Delete
              </button>
            </div>
            {toggle[`mem-del-${id}`] && (
              <ActionModal
                id={`mem-del-${id}`}
                title='Delete this User?'
                subTitle='Are you sure you would like to delete this User?'
                icon={<DeleteInIcon />}
                close={() => handleShow(`mem-del-${id}`)}
                actionTitle='Delete'
                btnMainClass='main-btn'
                btnSecClass='outline-dark'
              />
            )}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default UserRoles;
