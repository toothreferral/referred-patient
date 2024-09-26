import BrandLogo from '@/components/BrandLogo';
import { QouteIcon } from '@/SVGs/CustomSVGs';
import docjs from '@/assets/docjs.png';

const Aside = () => {
  return (
    <section className='hidden lg:flex bg-Grey4 w-full md:w-[40%] py-4 h-[95vh] rounded-3xl'>
      <ul className=' bg-Grey4 container h-[90%] flex flex-col justify-between gap-5  pb-20 pt-4 px-6'>
        <li className='flex'>
          <BrandLogo className='w-10/12 md:w-5/12' />
        </li>
        <li>
          <h2 className='font-Karla font-bold -tracking-[0.06em] text-4xl mb-5'>
            Send Dental Referrals In Seconds
          </h2>
          <p>
            Streamline your specialist referrals with real-time provider
            information and a unified online referral system.
          </p>
        </li>

        <li className='rounded-3xl bg-pryColor-400 py-5 mt-10 px-10 relative'>
          <p className='absolute top-0'>
            <QouteIcon />
          </p>
          <p className='text-white mt-6'>
            I've been using ToothReferral for a few months now, and I'm really
            impressed with how easy it is to use. I've been able to find new
            patients quickly and easily, and I've also been able to connect with
            other dentists in my area.{' '}
          </p>

          <div className='flex items-center gap-4 mt-4'>
            <figure className='w-2/12'>
              <img src={docjs} alt='' />
            </figure>
            <div>
              <h4 className='text-white'> Dr. John Smith </h4>
              <p className='text-white'> Pediatric Dentist</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Aside;
