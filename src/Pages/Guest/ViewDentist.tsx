import BrandLogo from '@/components/BrandLogo';
import GoBackBtn from '@/components/GoBackBtn';
import { Link } from 'react-router-dom';
import map from '@/assets/map.png';
import doc1 from '@/assets/doc1.png';

const ViewDentist = () => {
  return (
    <main className='bg-white py-10 '>
      <section className='container '>
        <header className='flex items-center justify-between'>
          <GoBackBtn />
          <div className='flex justify-center flex-1'>
            <BrandLogo className='w-2/12  ' />
          </div>
        </header>

        <div className='flex items-center justify-between mb-3'>
          <h4>Dentist Profile</h4>
          <Link
            to={`/guest/find-a-dentist/book-a-session`}
            className='main-btn'
          >
            Book a session
          </Link>
        </div>
        <hr />
        <section className='mt-6 flex flex-wrap gap-5 items-center'>
          <ul className='w-full lg:w-[47%] space-y-5'>
            {' '}
            <li className='card   text-center space-y-2 py-10 mt-10 bg-Grey4 border-Grey6'>
              <figure className='size-28 rounded-full overflow-hidden -mt-20 mx-auto'>
                <img src={doc1} alt='' />
              </figure>
              <h5 className='font-bold'>Dr. Darrell Steward</h5>
              <p className='text-Grey6'>34 years, Delaware</p>
            </li>
            <li className='card overflow-hidden  '>
              <div className='flex items-center gap-5 bg-PaleSky py-2 px-4'>
                <h5 className='font-semibold text-white'>
                  Personal Information
                </h5>
              </div>

              <ul className='flex flex-wrap gap-3 py-5 px-4'>
                <li className='flex flex-col gap-1 w-5/12'>
                  <small className='text-Grey6'>Gender</small>
                  <h5 className='font-medium'>Male</h5>
                </li>
                <li className='flex flex-col gap-1 w-5/12'>
                  <small className='text-Grey6'>Telephone</small>
                  <h5 className='font-medium'>(603) 555-0123</h5>
                </li>
                <li className='flex flex-col gap-1 w-5/12'>
                  <small className='text-Grey6'>Years of experience</small>
                  <h5 className='font-medium'>5</h5>
                </li>
                <li className='flex flex-col gap-1 w-5/12'>
                  <small className='text-Grey6'>REmail</small>

                  <h5 className='font-medium'>johnbrown@yahoo.com</h5>
                </li>
              </ul>
            </li>
            <li className='card overflow-hidden  '>
              <div className='flex items-center gap-5 bg-PaleSky py-2 px-4'>
                <h5 className='font-semibold text-white'>Skills</h5>
              </div>

              <ul className='py-5 px-4 list-decimal pl-7 font-semibold space-y-2'>
                <li>Surgical extractions </li>
                <li>Simples extractions </li>
                <li>Bone Grafts</li>
                <li>Implants </li>
              </ul>
            </li>
            <li className='card overflow-hidden  '>
              <div className='flex items-center gap-5 bg-PaleSky py-2 px-4'>
                <h5 className='font-semibold text-white'>
                  Professional Product Use
                </h5>
              </div>

              <ul className='py-5 px-4 list-decimal pl-7 font-semibold space-y-2'>
                <li>Crown milling machine </li>
                <li>In House aligner therapy</li>
              </ul>
            </li>
            <li className='card overflow-hidden  '>
              <div className='flex items-center gap-5 bg-PaleSky py-2 px-4'>
                <h5 className='font-semibold text-white'>Insurance Accepted</h5>
              </div>

              <ul className='py-5 px-4 list-decimal pl-7 font-semibold space-y-2'>
                <li>Delta dental </li>
                <li>Delta dental</li>
              </ul>
            </li>
            <li className='card overflow-hidden  '>
              <div className='flex items-center gap-5 bg-PaleSky py-2 px-4'>
                <h5 className='font-semibold text-white'>Type of Dentist</h5>
              </div>

              <ul className='py-5 px-4  font-semibold space-y-2'>
                <li>Oral Surgeon </li>
              </ul>
            </li>
          </ul>
          <ul className='w-full lg:w-[47%] space-y-5'>
            <li className=' card overflow-hidden '>
              <div className='flex items-center gap-5 bg-PaleSky py-2 px-4'>
                <h5 className='font-semibold text-white'> Office</h5>
              </div>

              <ul className='flex flex-wrap gap-3 py-5 px-4'>
                <li className='flex flex-col gap-1 w-5/12'>
                  <small className='text-Grey6'>Office Name</small>
                  <h5 className='font-medium'>Healthplus dental</h5>
                </li>
                <li className='flex flex-col gap-1 w-5/12'>
                  <small className='text-Grey6'>Telephone</small>
                  <h5 className='font-medium'>(603) 555-0123</h5>
                </li>
                <li className='flex flex-col gap-1 w-5/12'>
                  <small className='text-Grey6'>Website</small>
                  <h5 className='font-medium'>www.healthplus.com</h5>
                </li>
                <li className='flex flex-col gap-1 w-5/12'>
                  <small className='text-Grey6'>Fax number</small>
                  <h5 className='font-medium'>(603) 555-0123</h5>
                </li>

                <li className='flex flex-col gap-1 flex-1'>
                  <small className='text-Grey6'>Address</small>
                  <h5 className='font-medium '>
                    651 N Broad St, Suite 201, Middletown, DE 19709
                  </h5>
                </li>
              </ul>
            </li>
            <li className=' card overflow-hidden pb-3'>
              <div className='flex items-center gap-5 bg-PaleSky py-2 px-4 mb-4'>
                <h5 className='font-semibold text-white'> Map location</h5>
              </div>
              <figure className='container rounded-lg overflow-hidden'>
                <img src={map} alt='' />
              </figure>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
};

export default ViewDentist;
