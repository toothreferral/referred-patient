import { appointmentColData, appointmentListData } from '@/components/AllData';
import Paginate from '@/components/Paginate';
import Search from '@/components/Search';
import { useGlobalHooks } from '@/Hooks/globalHooks';

import { useState } from 'react';
import DataTable from 'react-data-table-component';

const Pending = () => {
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
    <section className='relative card !border-[1px] !border-[#E5E7EB] py-4'>
      <div className='container'>
        <Search
          placeholder='Search for patients'
          className='w-full lg:w-5/12'
        />
      </div>
      <DataTable
        columns={appointmentColData}
        data={filteredData}
        customStyles={tableCustomStyles}
        className='!rounded-none'
      />

      <div className='container '>
        <Paginate
          data={appointmentListData}
          handleSearch={handleSearch}
          currentPage={filteredData}
          setCurrentPage={setFilteredData}
          searchParams='name'
          itemsPerPage={itemsPerPage}
        />
      </div>
    </section>
  );
};

export default Pending;
