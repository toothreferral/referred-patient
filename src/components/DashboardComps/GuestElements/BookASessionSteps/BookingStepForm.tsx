import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';

const BookingStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const compList = [
    {
      comp: <Step1 onNext={handleNext} />,
    },
    {
      comp: <Step2 onNext={handleNext} onPrevious={handlePrevious} />,
    },
  ];

  return (
    <main className='flex flex-col justify-between bg-white p-6'>
      <div className='flex items-center justify-between mb-3'>
        <h4>Schedule a session</h4>
      </div>
      <hr />
      <section className='mt-3'>
        {compList.map(({ comp }, idx) => {
          return (
            currentStep === idx && (
              <React.Fragment key={idx}>{comp}</React.Fragment>
            )
          );
        })}
      </section>
    </main>
  );
};

export default BookingStepForm;
