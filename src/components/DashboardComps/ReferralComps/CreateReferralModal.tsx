import { useGlobalHooks } from '@/Hooks/globalHooks';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CreateReferralModal = () => {
  const { handleShow } = useGlobalHooks();

  return (
    <section className='bg-white flex flex-col gap-5 rounded-3xl shadow-2xl p-6'>
      <button
        className='flex items-center justify-between'
        onClick={() => {
          handleShow('ref');
          handleShow('speciality');
        }}
      >
        {' '}
        Create New Referral <FaChevronRight className='text-Grey6' />
      </button>
      <Link
        to='#'
        className='flex items-center justify-between'
        onClick={() => handleShow('ref')}
      >
        {' '}
        Send Referral Form <FaChevronRight className='text-Grey6' />
      </Link>
    </section>
  );
};

export default CreateReferralModal;
