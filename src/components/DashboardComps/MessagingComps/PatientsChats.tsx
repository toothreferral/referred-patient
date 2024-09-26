import EmptyState from '@/components/EmptyState';
import { NoConvoIcon } from '@/SVGs/CustomSVGs';

const PatientsChats = () => {
  return (
    <section className='container'>
      <EmptyState
        title='No conversation to display here'
        subTitle='Start new conversations with your connections to have them appear here'
        icon={<NoConvoIcon />}
      />

      <div className='text-center mt-5'>
        <button className='main-btn'>Start Chat</button>
      </div>
    </section>
  );
};

export default PatientsChats;
