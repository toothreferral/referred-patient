import { IStepForm } from '@/Interfaces/GlobalInterfaces';
import { FC } from 'react';

const Step2: FC<IStepForm> = ({ onPrevious, onNext }) => {
  return (
    <main>
      <h2>step 2 </h2>
      <article className='flex flex-wrap items-center justify-end gap-3 mt-8'>
        <button onClick={onPrevious} className='outline-dark w-full md:w-fit '>
          Go Back
        </button>
        <button
          className='main-btn w-full md:w-fit
            '
          type='submit'
        >
          Save & Continue
        </button>
      </article>
    </main>
  );
};

export default Step2;
