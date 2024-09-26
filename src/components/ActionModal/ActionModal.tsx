import React, { ReactNode } from 'react';
import PopUp from '../popUps/PopUp';
import { MdOutlineCancel } from 'react-icons/md';

interface IRejecrOrder {
  id: string;
  close: () => void;
  action?: () => void;
  btnMainClass: string;
  btnSecClass?: string;
  title: string;
  subTitle: string;
  actionTitle: string | ReactNode;
  icon?: ReactNode;
  className?: string;
}

const ActionModal: React.FC<IRejecrOrder> = ({
  id,
  close,
  action,
  btnMainClass,
  btnSecClass,
  title,
  subTitle,
  actionTitle,
  icon,
  className,
}) => {
  return (
    <PopUp id={id}>
      <section
        className={`${className} flex flex-col bg-white w-11/12 md:w-4/12 animate__animated animate__bounceIn container rounded-lg p-4`}
      >
        <header className='flex justify-end w-full'>
          {' '}
          <button onClick={close}>
            <MdOutlineCancel
              className='text-Grey6 hover:bg-Grey6 hover:text-white rounded-full'
              size={20}
            />
          </button>
        </header>
        <article className='flex flex-col justify-center text-center '>
          <div className='mx-auto'>{icon}</div>
          <h3 className=' my-3'>{title}</h3>
          <p className=' text-Grey6'>{subTitle}</p>
        </article>

        <article className='mt-5 flex justify-center gap-3 '>
          {btnSecClass && (
            <button onClick={close} className={btnSecClass}>
              Cancel
            </button>
          )}
          <button className={btnMainClass} type='button' onClick={action}>
            {actionTitle}
          </button>
        </article>
      </section>
    </PopUp>
  );
};

export default ActionModal;
