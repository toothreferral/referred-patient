import { IStepForm } from '@/Interfaces/GlobalInterfaces';
import { FC } from 'react';

const Notes: FC<IStepForm & { patholog?: boolean }> = ({
  patholog,
  onPrevious,
  onNext,
}) => {
  const handleSubmit = () => {
    onNext();
  };
  return (
    <main>
      <h5 className='text-center'>
        {patholog ? 'Diagnosis/Condition' : 'Notes'}
      </h5>

      <form onSubmit={handleSubmit} className='w-full lg:w-9/12 mx-auto mt-3'>
        {patholog && (
          <label htmlFor='note'> Please describe diagnosis/condition </label>
        )}
        <textarea
          name='note'
          id='note'
          className='form-controls '
          rows={4}
          placeholder='Type Message'
          required
        ></textarea>

        <article className='flex flex-wrap items-center justify-end gap-3 mt-8'>
          <button
            onClick={onPrevious}
            className='outline-dark w-full md:w-fit '
          >
            Back
          </button>
          <button className='main-btn w-full md:w-fit' type='submit'>
            Continue
          </button>
        </article>
      </form>
    </main>
  );
};

export default Notes;
