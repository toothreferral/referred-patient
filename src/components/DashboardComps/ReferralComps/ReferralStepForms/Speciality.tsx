import CheckboxText from '@/components/DashboardComps/CheckboxText';
import PageHeaders from '@/components/DashboardComps/PageHeaders';
import PopUp from '@/components/popUps/PopUp';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { IModal } from '@/Interfaces/GlobalInterfaces';
import {
  SelectReferralsStepperForms,
  updateReferaalInfo,
} from '@/Redux/Features/referralsSlice';
import { useAppDispatch, useAppSelector } from '@/Redux/reduxHooks';
import { FC, useState } from 'react';

const Speciality: FC<IModal> = ({ id }) => {
  const { referralsInfo } = useAppSelector(SelectReferralsStepperForms);
  const { handleShow } = useGlobalHooks();
  const [isChecked, setIsChecked] = useState<{ [key: number]: boolean }>({});
  const [selected, setSelected] = useState<string>(
    referralsInfo ? referralsInfo.speciality : '',
  );
  const dipatch = useAppDispatch();

  const handleChange = (id: number, title: string) => {
    setIsChecked(() => ({ [id]: true }));
    setSelected(title);
  };

  const specialityData = [
    { id: 1, title: 'Oral Surgeon', checked: isChecked },
    { id: 2, title: 'Periodontist', checked: isChecked },
    { id: 3, title: 'Pedodontist', checked: isChecked },
    { id: 4, title: 'Oral Radiologist', checked: isChecked },
    { id: 5, title: 'TMJ Specialists', checked: isChecked },
    { id: 6, title: 'Sleep Specialist', checked: isChecked },
    { id: 7, title: 'Orthodontist', checked: isChecked },
    { id: 8, title: 'Hospital Dentist', checked: isChecked },
    { id: 9, title: 'Endodontist', checked: isChecked },
    { id: 10, title: 'Oral Medicine/Pathology', checked: isChecked },
  ];

  return (
    <PopUp className='!bg-pryColor-400 overflow-y-auto' id={id}>
      <main className='w-9/12 mx-auto rounded-lg p-10 bg-white'>
        <PageHeaders close={() => handleShow('speciality')} />

        <section className='mt-5'>
          <h5 className='text-center'>Choose your speciality</h5>

          <ul className='flex flex-wrap gap-3 justify-between mt-9'>
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

          <div className='mt-10 flex justify-end'>
            <button
              disabled={Object.keys(isChecked).length === 0 && selected === ''}
              className='main-btn'
              onClick={() => {
                dipatch(updateReferaalInfo({ speciality: selected }));
                handleShow('speciality');
                handleShow('create-ref');
              }}
            >
              Continue
            </button>
          </div>
        </section>
      </main>
    </PopUp>
  );
};

export default Speciality;
