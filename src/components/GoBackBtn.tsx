import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const GoBackBtn = ({ className }: { className?: string }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className={`${className} flex items-center gap-2 text-Grey1`}
    >
      <FaArrowLeftLong /> Go Back{' '}
    </button>
  );
};

export default GoBackBtn;
