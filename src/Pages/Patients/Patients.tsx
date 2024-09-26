import { patientColData, patientListData } from '@/components/AllData';
import Paginate from '@/components/Paginate';
import Search from '@/components/Search';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import useUpdatePageName from '@/Hooks/useUpdatePageName';
import { DownloadIcon } from '@/SVGs/CustomSVGs';
import { useState } from 'react';
import DataTable from 'react-data-table-component';

export const tableCustomStyles = {
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

const Patients = () => {
  useUpdatePageName('Patients');
  const { handleSearch } = useGlobalHooks();
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [itemsPerPage] = useState<number>(10);

  return (
    <main className='container'>
      <h4 className='mt-4'>All Patients</h4>
      <p className='text-sm text-Grey6'>View all your patients below</p>
      <section className='relative card !border-[1px] !border-[#E5E7EB] py-4 mt-10'>
        <div className='container flex items-center justify-between gap-2'>
          <Search
            placeholder='Search for patients'
            className='w-full lg:w-5/12'
          />
          <button className='outline-btn flex items-center gap-1'>
            {' '}
            <DownloadIcon /> Export{' '}
          </button>
        </div>
        <DataTable
          columns={patientColData}
          data={filteredData}
          customStyles={tableCustomStyles}
          className='!rounded-none'
        />

        <div className='container '>
          <Paginate
            data={patientListData}
            handleSearch={handleSearch}
            currentPage={filteredData}
            setCurrentPage={setFilteredData}
            searchParams='name'
            itemsPerPage={itemsPerPage}
          />
        </div>
      </section>
    </main>
  );
};

export default Patients;
