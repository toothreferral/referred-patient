import React, { useState } from 'react';
import StepFormLabel from './StepFormLabel';
import BrandLogo from '@/components/BrandLogo';
import PersonalInfo from '../PersonalInfo';
import PracticeInfo from '../PracticeInfo';
import OfficeInfo from '../OfficeInfo';
import TeamMembers from '../TeamMembers';
import Insurance from '../Insurance';
import InHousePlan from '../InHousePlan';

const StepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const StepLabels = [
    {
      title: 'Personal Information',
      subTitle: 'Tell us about yourself',
      icon: (
        <div className='h-[33px] w-[33px] bg-Grey4 rounded-full grid place-items-center'>
          {' '}
          1{' '}
        </div>
      ),
    },
    {
      title: 'Practice Information',
      subTitle: 'Tell us about your dental practice',
      icon: (
        <div className='h-[33px] w-[33px] bg-Grey4 rounded-full grid place-items-center'>
          {' '}
          2{' '}
        </div>
      ),
    },
    {
      title: 'Office Information',
      subTitle: 'Add your office information',
      icon: (
        <div className='h-[33px] w-[33px] bg-Grey4 rounded-full grid place-items-center'>
          {' '}
          3{' '}
        </div>
      ),
    },
    {
      title: 'Team Members',
      subTitle: 'Add other members of your team',
      icon: (
        <div className='h-[33px] w-[33px] bg-Grey4 rounded-full grid place-items-center'>
          {' '}
          4{' '}
        </div>
      ),
    },
    {
      title: 'Insurance',

      subTitle: 'Add all insurance accepted in your office',
      icon: (
        <div className='h-[33px] w-[33px] bg-Grey4 rounded-full grid place-items-center'>
          {' '}
          5{' '}
        </div>
      ),
    },
    {
      title: 'In-house dental Plas',

      subTitle: 'Create in house dental plans',
      icon: (
        <div className='h-[33px] w-[33px] bg-Grey4 rounded-full grid place-items-center'>
          {' '}
          6{' '}
        </div>
      ),
    },
  ];

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const compList = [
    {
      comp: <PersonalInfo onNext={handleNext} onPrevious={handlePrevious} />,
    },
    {
      comp: <PracticeInfo onNext={handleNext} onPrevious={handlePrevious} />,
    },
    {
      comp: <OfficeInfo onNext={handleNext} onPrevious={handlePrevious} />,
    },
    {
      comp: <TeamMembers onNext={handleNext} onPrevious={handlePrevious} />,
    },
    {
      comp: <Insurance onNext={handleNext} onPrevious={handlePrevious} />,
    },
    {
      comp: <InHousePlan onPrevious={handlePrevious} />,
    },
  ];

  return (
    <main className='flex flex-wrap justify-between '>
      <aside className='flex flex-col w-full lg:w-4/12 lg:px-10 bg-white lg:bg-pryColor-400 h-auto lg:min-h-screen py-6 lg:py-0 '>
        <div className='lg:hidden flex justify-center'>
          <BrandLogo className='w-5/12 md:w-2/12' />
        </div>
        <hgroup className='my-3 lg:my-8 text-center lg:text-start'>
          <h2 className='font-Karla -tracking-[.05em] font-extrabold text-Grey1 lg:text-white'>
            Account Set up
          </h2>
          <p className=' text-Grey1 font-normal lg:text-white'>
            Finish setting up your account in minutes
          </p>
        </hgroup>
        <StepFormLabel stepLabels={StepLabels} currentStep={currentStep} />
      </aside>
      <section className='flex-1 py-10 bg-white'>
        <div className='flex flex-col container'>
          <BrandLogo className='w-5/12 md:w-2/12 mb-8' />
          {compList.map(({ comp }, idx) => {
            return (
              currentStep === idx && (
                <React.Fragment key={idx}>{comp}</React.Fragment>
              )
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default StepForm;
