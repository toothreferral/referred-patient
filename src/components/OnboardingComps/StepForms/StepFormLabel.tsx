import { CheckedIcon } from '@/SVGs/CustomSVGs';
import React, { ReactNode } from 'react';

interface Ilabels {
  stepLabels: { title: string; subTitle: string; icon?: ReactNode }[];
  currentStep: number;
}

const StepFormLabel: React.FC<Ilabels> = ({ stepLabels, currentStep }) => {
  return (
    <ul className='stepLabels bg-white rounded-lg py-5 px-0 lg:px-5 flex flex-wrap justify-center lg:justify-start'>
      {stepLabels.map(({ title, icon, subTitle }, index: number) => (
        <li
          key={index}
          className={`step-label ${
            index === currentStep ? 'stepFormActive' : 'stepFormInActive'
          }`}
        >
          {index <= currentStep ? (
            <div className='flex gap-2 items-start'>
              <h4 className='flex flex-row lg:flex-col items-center'>
                <CheckedIcon />
                {index < stepLabels.length - 1 && (
                  <div className=' w-[30px] lg:w-0 lg:h-[50px] border-[1.5px] border-dashed border-[#B3DEC2] '></div>
                )}
              </h4>

              <hgroup className='hidden lg:flex flex-col'>
                <h4 className='text-base'>{title} </h4>
                <p className=' text-sm text-Grey6 italic'>{subTitle}</p>
              </hgroup>
            </div>
          ) : (
            <div className='flex  gap-2'>
              <h4 className='flex flex-row lg:flex-col  items-center'>
                {icon}
                {index < stepLabels.length - 1 && (
                  <div className=' w-[30px] lg:w-0 lg:h-[50px]  border-[1.5px] border-dashed border-Grey4 '></div>
                )}
              </h4>
              <hgroup className='hidden lg:flex flex-col'>
                <h4 className='text-base'>{title} </h4>
                <p className='text-sm text-Grey6 italic'>{subTitle}</p>
              </hgroup>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default StepFormLabel;
