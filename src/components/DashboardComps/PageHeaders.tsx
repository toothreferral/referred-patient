import { FaArrowLeftLong } from 'react-icons/fa6';
import BrandLogo from '../BrandLogo';

const PageHeaders = ({
  className,
  close,
}: {
  close: () => void;
  className?: string;
}) => {
  return (
    <header className={`${className} flex items-center gap-2 justify-between`}>
      <button
        onClick={close}
        className={`${className} flex items-center gap-2 text-Grey1`}
      >
        <FaArrowLeftLong /> Go Back{' '}
      </button>
      <hgroup className='flex-1 flex justify-center'>
        <BrandLogo className='w-[18%]' />
      </hgroup>
    </header>
  );
};

export default PageHeaders;
