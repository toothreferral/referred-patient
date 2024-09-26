import GoBackBtn from '@/components/GoBackBtn';
import doc1 from '@/assets/doc1.png';
import { Link } from 'react-router-dom';
import { ReferIcon } from '@/SVGs/CustomSVGs';
import DataTable from 'react-data-table-component';
import { refHistoryColData, refHistoryListData } from '@/components/AllData';
import Paginate from '@/components/Paginate';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { useState } from 'react';
import { tableCustomStyles } from './Patients';

const ViewPatient = () => {
  const { handleSearch } = useGlobalHooks();
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [itemsPerPage] = useState<number>(10);
  return (
    <main className=''>
      <section className='container flex flex-wrap items-center justify-between gap-3 mt-8'>
        <div>
          <GoBackBtn />
          <h5 className='font-bold mt-3'>View Patient</h5>
        </div>
      </section>
      <hr className='my-5' />

      <section className='container'>
        <div className='flex items-center gap-5'>
          <figure className='h-8 w-8 overflow-hidden rounded-full'>
            <img src={doc1} alt='John Brown' />
          </figure>
          <h5 className='font-semibold'>John Brown</h5>
        </div>

        <ul className='flex flex-col gap-3 mt-7'>
          <li className='flex items-center gap-4'>
            <small className='text-Grey6 w-2/12'>Date of birth</small>
            <h5 className='font-medium w6/12'>10/19/1995</h5>
          </li>
          <li className='flex items-center gap-4'>
            <small className='text-Grey6 w-2/12'>Gender</small>
            <h5 className='font-medium w6/12'>Male</h5>
          </li>
          <li className='flex items-center gap-4'>
            <small className='text-Grey6 w-2/12'>Phone</small>
            <h5 className='font-medium w6/12'>(603) 555-0123</h5>
          </li>
          <li className='flex items-center gap-4'>
            <small className='text-Grey6 w-2/12'>Email</small>
            <h5 className='font-medium w6/12'>johnbrown@yahoo.com</h5>
          </li>
        </ul>

        <div className='flex  mt-6'>
          <Link to='#' className='main-btn flex items-center gap-2'>
            <ReferIcon /> Refer Patient
          </Link>
        </div>
      </section>

      <section className='container relative card !border-[1px] !border-[#E5E7EB] overflow-y-hidden my-10'>
        <DataTable
          columns={refHistoryColData}
          data={filteredData}
          customStyles={tableCustomStyles}
          className='!rounded-none'
        />

        <div className='container '>
          <Paginate
            data={refHistoryListData}
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

export default ViewPatient;
