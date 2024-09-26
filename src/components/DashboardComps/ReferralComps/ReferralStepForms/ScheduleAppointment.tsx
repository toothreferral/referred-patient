import { IStepForm } from '@/Interfaces/GlobalInterfaces';
import { FC, useState } from 'react';
import CheckboxText from '../../CheckboxText';

const ScheduleAppointment: FC<IStepForm> = ({ onPrevious, onNext }) => {
  const [isChecked, setIsChecked] = useState<{ [key: number]: boolean }>({
    1: true,
  });
  const [selected, setSelected] = useState<string>('');

  const handleChange = (id: number, title: string) => {
    setIsChecked(() => ({ [id]: true }));
    setSelected(title);
  };

  const specialityData = [
    { id: 1, title: 'Schedule Now', checked: isChecked },
    { id: 2, title: 'Schedule Later', checked: isChecked },
  ];

  console.log(selected);
  return (
    <main>
      <h5 className='text-center'>Schedule Appointment</h5>

      <ul className='flex flex-wrap gap-3 justify-center  w-full lg:w-9/12 mx-auto mt-10'>
        {specialityData?.map(({ id, title, checked }) => (
          <li
            key={id}
            className='w-full md:w-[32%] animate__animated animate__bounceIn'
          >
            <CheckboxText
              checked={checked[id] || selected === title ? true : false}
              title={title}
              onClick={() => handleChange(id, title)}
            />
          </li>
        ))}
      </ul>

      <article className='flex flex-wrap items-center justify-end gap-3 mt-20'>
        <button onClick={onPrevious} className='outline-dark w-full md:w-fit '>
          Go Back
        </button>
        <button
          className='main-btn w-full md:w-fit'
          type='submit'
          onClick={onNext}
          disabled={Object.keys(isChecked).length === 0}
        >
          Continue
        </button>
      </article>
    </main>
  );
};

export default ScheduleAppointment;
