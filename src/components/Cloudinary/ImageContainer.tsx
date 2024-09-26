import React from 'react';
import placeholderImageUrl from '@/assets/noAvatar.png';
import CustomUploadToCloudinary from './CustomUploadToCloudinary';

interface IUpload {
  images?: string;
  id: string;
  btnTitle?: string;
  loading: { [key: string | number]: boolean };
  uploadFiles?: (e: any) => void;
  removeImage?: () => void;
}

const ImageContainer: React.FC<IUpload> = ({
  images,
  id,
  loading,
  uploadFiles,
  removeImage,
  btnTitle,
}) => {
  return (
    <div className='flex items-center gap-3'>
      <div className='relative'>
        <figure className='w-20 h-20 rounded-full  overflow-hidden'>
          {images ? (
            <img src={images} alt='' />
          ) : (
            <img src={placeholderImageUrl} alt='' />
          )}
        </figure>
      </div>

      <div className='flex items-center gap-3'>
        <CustomUploadToCloudinary
          id={id}
          loading={loading[id]}
          uploadChange={uploadFiles}
          btnTitle={btnTitle}
        />

        {images && (
          <button onClick={removeImage} className='negative-btn'>
            {' '}
            Delete{' '}
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageContainer;
