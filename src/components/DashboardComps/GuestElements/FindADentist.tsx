import Search from '@/components/Search';
import { docsData } from '@/components/AllData';
import DentistCard from './DentistCard';
import FavouriteDentist from './FavouriteDentist';

const FindADentist = () => {
  return (
    <>
      <header className='flex justify-between items-center gap-8'>
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
        <FavouriteDentist />
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
            <li key={id} className='w-full md:w-[47%] lg:w-[32%]'>
              <DentistCard
                imgUrl={imgUrl}
                hospitalName={hospitalName}
                hospitalLogo={logo}
                availability={availability}
                location={location}
                insurance={insurance}
                zip={Zip}
                fullName={fullName}
                id={`${id}`}
              />
            </li>
          ),
        )}
      </ul>
    </>
  );
};

export default FindADentist;
