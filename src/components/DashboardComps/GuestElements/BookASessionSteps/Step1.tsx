import { Calendar, DatePicker } from 'antd';
import { FC } from 'react';

const Step1: FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <main>
      <h2>step 1 </h2>

      <DatePicker />
      <Calendar fullscreen={false} className='w-4/12 card my-5' />
      <article className='flex flex-wrap items-center gap-3 mt-8'>
        <button className='outline-dark w-full md:w-fit '>Back</button>
        <button
          className='main-btn w-full md:w-fit
            '
          type='submit'
        >
          Continue
        </button>
      </article>
    </main>
  );
};

export default Step1;
