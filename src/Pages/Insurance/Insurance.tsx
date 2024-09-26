import { insuranceColData, insuranceListData } from '@/components/AllData';
import Paginate from '@/components/Paginate';
import Search from '@/components/Search';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import useUpdatePageName from '@/Hooks/useUpdatePageName';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const Insurance = () => {
  useUpdatePageName('Insurance');
  const { handleSearch } = useGlobalHooks();
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [itemsPerPage] = useState<number>(10);

  const tableCustomStyles = {
    headCells: {
      style: {
        fontWeight: 400,
        color: '#6B7280',
        backgroundColor: '#F9FAFB',
      },
    },
    rows: {
      style: {
        // '&:nth-of-type(odd)': {
        //   backgroundColor: '#F6F6F7',
        // },
        // '&:nth-of-type(even)': {
        //   backgroundColor: '#FFFFFF',
        // },
        '&:last-of-type': {
          borderBottom: '1px solid #E5E7EB',
        },
        color: '#525252',
        fontWeight: 500,
        fontSize: '14px',
        borderColor: '#E5E7EB',
      },
    },
  };

  return (
    <main className='container py-10'>
      <p>View and add all insurance your dental office accepts</p>
      <section className='relative card !border-[1px] !border-[#E5E7EB] py-4 mt-4'>
        <header className='container my-3 flex justify-between'>
          <Search
            placeholder='Search for patients'
            className='w-full lg:w-5/12'
          />
          <div>
            <Link to={`/insurance/create`} className='main-btn'>
              New Insurance
            </Link>
          </div>
        </header>
        <DataTable
          columns={insuranceColData}
          data={filteredData}
          customStyles={tableCustomStyles}
          className='!rounded-none'
        />

        <div className='container '>
          <Paginate
            data={insuranceListData}
            handleSearch={handleSearch}
            currentPage={filteredData}
            setCurrentPage={setFilteredData}
            searchParams='coyName'
            itemsPerPage={itemsPerPage}
          />
        </div>
      </section>
    </main>
  );
};

export default Insurance;
