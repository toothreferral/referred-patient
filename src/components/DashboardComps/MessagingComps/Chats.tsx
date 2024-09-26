import { messagingData } from '@/components/AllData';
import EmptyState from '@/components/EmptyState';
import Search from '@/components/Search';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { selectSearch } from '@/Redux/Features/globalSlice';
import { useAppSelector } from '@/Redux/reduxHooks';
import { NoConvoIcon } from '@/SVGs/CustomSVGs';
import { useEffect, useState } from 'react';

const Chats = () => {
  const { handleSearch } = useGlobalHooks();
  const searchQuery = useAppSelector(selectSearch);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    handleSearch(messagingData, searchQuery, setFilteredData, 'title');
  }, [searchQuery, messagingData]);

  return (
    <section className='h-screen flex flex-col'>
      <div className='container'>
        <Search placeholder='Search' />
      </div>

      <ul className='flex flex-col gap-4 h-5/6 overflow-y-auto mt-3 pb-7'>
        {filteredData.length === 0 && searchQuery !== '' ? (
          <EmptyState
            title='No data'
            subTitle='Your search does not match any data'
            icon={<NoConvoIcon />}
          />
        ) : (
          filteredData.map(({ id, title, message, imgUrl }) => (
            <li
              key={id}
              className={` ${
                id === '2' ? 'chatActive' : 'chatNotActive'
              } flex items-center gap-2 cursor-pointer`}
            >
              <figure className='messageAvatar'>
                <img src={imgUrl} alt='' />
              </figure>

              <div>
                <h5 className='font-medium text-sm'>{title} </h5>
                <p className='text-xs'>{message} </p>
              </div>

              <div className='grid place-items-center w-5 h-5 rounded-full bg-pryColor-400 '>
                <p className='text-white text-xs'>3</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default Chats;
