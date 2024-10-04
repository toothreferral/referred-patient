import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IDocCard {
  id: string;
  fullName: string;
  imgUrl: string;
  hospitalName: string;
  hospitalLogo: string;
  availability: string;
  location: string;
  insurance: string;
  zip: string;
}

const DentistCard: FC<IDocCard> = ({
  id,
  fullName,
  imgUrl,
  hospitalName,
  hospitalLogo,
  availability,
  location,
  insurance,
  zip,
}) => {
  return (
    <article className='w-full min-h-[500px] relative'>
      <figure className='h-[500px] overflow-hidden rounded-lg'>
        <img
          src={imgUrl}
          alt={fullName}
          className='object-cover !h-full object-center zoomImg'
        />
      </figure>

      <ul className='absolute bottom-2 left-0 right-0 container flex flex-col gap-2'>
        <li className='flex items-center gap-3 bg-white rounded-lg w-full p-2'>
          <figure className='w-10 h-10 overflow-hidden rounded-lg'>
            <img
              src={hospitalLogo}
              alt={fullName}
              className='object-cover !h-full object-center'
            />
          </figure>
          <h5 className='text-Grey1 font-medium'>{hospitalName} </h5>
        </li>
        <li className='flex flex-col gap-1 bg-white rounded-lg w-full p-2'>
          <div className='flex gap-5 items-center'>
            <small className='text-Grey6 w-4/12 '>Full name</small>{' '}
            <h5 className='font-medium flex-1'> {fullName}</h5>
          </div>
          <div className='flex gap-5 items-center'>
            <small className='text-Grey6 w-4/12 '>Next availability</small>{' '}
            <h5 className='font-medium flex-1'> {availability}</h5>
          </div>
          <div className='flex gap-5 items-center'>
            <small className='text-Grey6 w-4/12 '>Location</small>{' '}
            <h5 className='font-medium flex-1'> {location}</h5>
          </div>
          <div className='flex gap-5 items-center'>
            <small className='text-Grey6 w-4/12 '>Insurance</small>{' '}
            <h5 className='font-medium flex-1'> {insurance}</h5>
          </div>
          <div className='flex gap-5 items-center'>
            <small className='text-Grey6 w-4/12 '>Zip</small>{' '}
            <h5 className='font-medium flex-1'> {zip}</h5>
          </div>
        </li>
        <li className='flex justify-between w-full'>
          <Link
            to={`/guest/find-a-dentist/view-dentis/${id}`}
            className='rounded-[48px] text-center !bg-white font-semibold text-Grey1 py-2 w-[47%]'
          >
            View Profile
          </Link>
          <Link
            to={`/book-a-session/${id}`}
            className='flex justify-center gap-1 rounded-[48px] text-center !bg-pryColor text-white font-semibold py-2 w-[47%]'
          >
            Schedule now
          </Link>
        </li>
      </ul>
    </article>
  );
};

export default DentistCard;
