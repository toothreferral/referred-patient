import { FC, useState } from 'react';
import { IStepForm } from '@/Interfaces/GlobalInterfaces';
import Search from '@/components/Search';
import FavouriteDocs from '../../FavouriteDocs';
import { docsData } from '@/components/AllData';
import DoctorCard from '../../DoctorCard';
import { useAppDispatch, useAppSelector } from '@/Redux/reduxHooks';
import {
  SelectReferralsStepperForms,
  updateReferaalInfo,
} from '@/Redux/Features/referralsSlice';

const FindADoc: FC<IStepForm> = ({ onNext }) => {
  const { referralsInfo } = useAppSelector(SelectReferralsStepperForms);
  const dispatch = useAppDispatch();

  const [getId, setGetId] = useState<any>();
  const [selected, setSelected] = useState<{ [key: string]: boolean }>(
    referralsInfo && referralsInfo?.doctorId
      ? { [referralsInfo?.doctorId]: true }
      : {},
  );

  const handleSelected = (id: string) => {
    setSelected((prev) => ({ [id]: !prev[id] }));
    setGetId(id);
  };

  const handleNext = () => {
    dispatch(updateReferaalInfo({ doctorId: getId }));
    onNext();
  };

  return (
    <main className=''>
      <h4 className='mb-3'>Find a Dentist close to you</h4>
      <hr />
      <header className='flex justify-between items-center gap-8 mt-8'>
        <div className='flex-1'>
          <p>Search</p>
          <Search placeholder='Search by zip, availability, insurance, skill' />
        </div>

        <div className='flex items-center justify-end gap-2 w-3/12'>
          <p>Sorted by</p>
          <select
            name=''
            id=''
            className='w-5/12 !m-0 font-semibold text-pryColor'
          >
            {[
              'All States',
              'Califonia',
              'Texas',
              'Florida',
              'Virginia',
              'Alaska',
              'Ohio',
            ].map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </header>

      <section className=''>
        <FavouriteDocs selected={selected} handleSelected={handleSelected} />
      </section>

      <ul className=' flex flex-wrap gap-2 justify-between'>
        {docsData.map(
          ({
            id,
            imgUrl,
            hospitalName,
            logo,
            availability,
            location,
            insurance,
            Zip,
            fullName,
          }) => (
            <li
              key={id}
              className='w-full md:w-[47%] lg:w-[32%]'
              onClick={() => handleSelected(`${id}`)}
            >
              <DoctorCard
                imgUrl={imgUrl}
                hospitalName={hospitalName}
                hospitalLogo={logo}
                availability={availability}
                location={location}
                insurance={insurance}
                zip={Zip}
                fullName={fullName}
                isSelected={selected[id]}
                id={`${id}`}
              />
            </li>
          ),
        )}
      </ul>

      <article className='flex flex-wrap items-center justify-end gap-3 mt-8'>
        {/* <button onClick={onPrevious} className='outline-dark w-full md:w-fit '>
          Back
        </button> */}
        <button
          disabled={Object.keys(selected).length === 0}
          className='main-btn w-full md:w-fit'
          type='submit'
          onClick={handleNext}
        >
          Continue
        </button>
      </article>
    </main>
  );
};

export default FindADoc;
