import { ReactNode } from 'react';

const EmptyState = ({
  title,
  subTitle,
  icon,
}: {
  title: string;
  subTitle: string;
  icon: ReactNode;
}) => {
  return (
    <section className='flex flex-col gap-5  items-center justify-center mt-9 '>
      <div className='w-8/12 mx-auto'> {icon} </div>
      <div className='w-full text-center'>
        <h4 className='font-semibold text-xl'>{title}</h4>
        <p className='text-[var(--Grey2)]'>{subTitle}</p>
      </div>
    </section>
  );
};

export default EmptyState;
