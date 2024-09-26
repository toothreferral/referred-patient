import { selectSearch } from '@/Redux/Features/globalSlice';
import { useAppSelector } from '@/Redux/reduxHooks';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';

interface IPaginate {
  isLoading?: boolean;
  data: any[];
  currentPage: any;
  setCurrentPage: Dispatch<SetStateAction<any[]>>;
  searchParams: string;
  itemsPerPage: number;
  handleSearch: (
    data: any[],
    searchQuery: string,
    updateCurrentPage: (newData: any) => void,
    searchParams: string,
  ) => void;
}

const Paginate: React.FC<IPaginate> = ({
  isLoading,
  data,
  currentPage,
  setCurrentPage,
  searchParams,
  handleSearch,
  itemsPerPage,
}) => {
  const searchQuery = useAppSelector(selectSearch);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };

  useEffect(() => {
    const updateCurrentPage = (newData: any) => {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentPage(newData.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(newData.length / itemsPerPage));
    };

    handleSearch(data, searchQuery, updateCurrentPage, searchParams);
  }, [searchQuery, data, itemOffset, itemsPerPage, setCurrentPage]);

  return (
    <section className='mt-3 flex flex-wrap justify-between w-full  gap-4'>
      <div className='flex items-center gap-3'>
        <p className='font-medium text-xs text-grey-300'>
          {' '}
          Showing: <span className='text-pryColor'>
            {itemOffset + 1}
          </span> - {Math.min(itemOffset + itemsPerPage, data?.length)} of{' '}
          {data?.length}{' '}
        </p>
      </div>
      <div className='flex items-center gap-3'>
        {!isLoading && data && (
          <ReactPaginate
            breakLabel='...'
            nextLabel={<FaChevronRight />}
            previousLabel={<FaChevronLeft />}
            pageCount={pageCount}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName='paginContainer'
            activeClassName='activePage'
            pageClassName='pageClass'
            previousClassName={currentPage === 0 ? 'disabled' : 'prev'}
            nextClassName={currentPage === pageCount - 1 ? 'disabled' : 'next'}
            renderOnZeroPageCount={null}
          />
        )}
      </div>
    </section>
  );
};

export default Paginate;
