import { FC } from 'react';

interface IPlan {
  planTitle: string;
  monthlyPay: number;
  yearlyPay: number;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  description5: string;
  className?: string;
}

const PlanCard: FC<IPlan> = ({
  planTitle,
  monthlyPay,
  yearlyPay,
  description1,
  description2,
  description3,
  description4,
  description5,
  className,
}) => {
  return (
    <section className='rounded-lg border-Grey5  bg-white overflow-hidden'>
      <hgroup className={`${className} bg-[#6B7280] text-center  py-3`}>
        <h4 className='text-base font-medium text-white'>{planTitle}</h4>
      </hgroup>
      <div className='px-2 py-8'>
        <hgroup className='text-center font-bold'>
          {monthlyPay && (
            <h3 className='font-bold'>
              {' '}
              ${monthlyPay.toFixed(2)}
              <span className='text-xs text-Grey5'>/month</span>{' '}
            </h3>
          )}

          {yearlyPay && (
            <h4 className='font-semibold'>
              ${yearlyPay.toFixed(2)}
              <span className='text-xs '>/yr </span>
            </h4>
          )}
        </hgroup>

        <ul className='mt-5 list-disc text-Grey1 pl-9 text-sm'>
          <li>{description1} </li>
          <li>{description2} </li>
          <li>{description3} </li>
          <li>{description4} </li>
          <li>{description5} </li>
        </ul>
      </div>
    </section>
  );
};

export default PlanCard;
