/* eslint @typescript-eslint/no-explicit-any: "off" */

import { useRef } from 'react';
import Spinner from '@/spinner/Spinner';

const CustomUploadToCloudinary = ({
  uploadChange,
  loading,
  id,
  className,
  btnTitle,
}: {
  uploadChange?: (e?: any) => void;
  loading?: boolean;
  id?: string;
  className?: string;
  btnTitle?: string;
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className=''>
      <label
        htmlFor={id}
        className={`${className} main-btn !text-white !m-0 flex justify-center cursor-pointer`}
      >
        {loading ? <Spinner /> : <span> {btnTitle || 'Upload Image'} </span>}
      </label>
      <input
        id={id}
        ref={fileInputRef}
        type='file'
        onChange={uploadChange}
        className='hidden'
      />
    </div>
  );
};

export default CustomUploadToCloudinary;
