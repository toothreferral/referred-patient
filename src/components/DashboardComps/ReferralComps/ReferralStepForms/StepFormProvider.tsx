import React, { FC, useState } from 'react';

interface IFormData {
  datas: (
    handleNext: () => void,
    handlePrevious: () => void,
  ) => { comp: JSX.Element }[];
}

const StepFormProvider: FC<IFormData> = ({ datas }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    // Math.min and the array lengths will preven it from going beyound the array length
    setCurrentStep((prev) =>
      Math.min(prev + 1, datas(handleNext, handlePrevious).length - 1),
    );
  };
  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <main className=' '>
      <article className='w-full mt-10'>
        {datas(handleNext, handlePrevious).map(({ comp }, idx) => {
          return (
            currentStep === idx && (
              <React.Fragment key={idx}>{comp}</React.Fragment>
            )
          );
        })}
      </article>
    </main>
  );
};

export default StepFormProvider;
