import React, { FormEvent, ReactNode } from 'react';
import PopUp from '@/components/popUps/PopUp';

interface IRejecrOrder {
  id: number | string;
  title: string | ReactNode;
  placeholder: string;
  close: () => void;
  action: (e: FormEvent) => void;
  actionTitle: ReactNode | string;
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
}

const ResponseCard: React.FC<IRejecrOrder> = ({
  id,
  title,
  placeholder,
  close,
  action,
  actionTitle,
  handleChange,
}) => {
  return (
    <PopUp id={id}>
      <form
        onSubmit={action}
        className='bg-[#fff] py-5 mx-auto w-11/12 md:w-7/12 rounded-lg h-3/6 flex place-items-center  animate__animated animate__bounceIn'
      >
        <div className='flex flex-col mx-auto px-8'>
          <h3 className='text-[var(--secColor)] font-bold'>{title}</h3>

          <input
            id='rejectReason'
            name='rejectReason'
            type='text'
            className='my-3 mt-7 form-controls'
            placeholder={placeholder}
            onChange={handleChange}
            required
          />
          <div className='mt-5 flex flex-col md:flex-row gap-3 '>
            <button onClick={close} className='outline-btn'>
              Go Back
            </button>
            <button className='main-btn' type='submit'>
              {actionTitle}
            </button>
          </div>
        </div>
      </form>
    </PopUp>
  );
};

export default ResponseCard;
