import { useState } from 'react';

import Search from '@/components/Search';
import FavouriteDocs from '../FavouriteDocs';
import { docsData } from '@/components/AllData';
import DoctorCard from '../DoctorCard';
import { useNavigate } from 'react-router-dom';

const FindADoc = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

  const handleSelected = (id: string) => {
    setSelected((prev) => ({ [id]: !prev[id] }));
  };

  const handleNext = () => {
    navigate(-1);
  };

  return (
    <main className='container'>
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
        <button
          disabled={Object.keys(selected).length === 0}
          className='main-btn w-full md:w-fit'
          type='submit'
          onClick={handleNext}
        >
          Save
        </button>
      </article>
    </main>
  );
};

export default FindADoc;
