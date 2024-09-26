import { IStepForm } from '@/Interfaces/GlobalInterfaces';
import { FC } from 'react';
import a from '@/assets/doc1.png';
import b from '@/assets/healthLogo.png';
import c from '@/assets/healthLogo1.png';
import d from '@/assets/doc5.png';
import { AiOutlineMessage } from 'react-icons/ai';
import a1 from '@/assets/doc2.png';
import b1 from '@/assets/doc3.png';
import c1 from '@/assets/doc4.png';

const PreviewReferrals: FC<IStepForm> = ({ onPrevious, onNext }) => {
  return (
    <main>
      <h5>Preview Referral</h5>
      <hr className='my-5' />

      <section className='card overflow-hidden'>
        <hgroup className='p-3 bg-Grey6 '>
          <h5 className='text-white'>Referral Details</h5>
        </hgroup>

        <ul className='w-full lg:w-10/12 px-7 py-7 flex flex-wrap justify-between gap-y-5'>
          <li className='text-Grey6 w-full lg:w-[32%]'>
            Speciality:
            <h5 className='font-medium'>Oral Surgeon</h5>
          </li>
          <li className='text-Grey6 w-full lg:w-[32%]'>
            Reason for referral:
            <h5 className='font-medium'>Wisdom tooth removal</h5>
          </li>
          <li className='text-Grey6 w-full lg:w-[32%]'>
            Scheduling:
            <h5 className='font-medium'>Routine</h5>
          </li>
          <li className='text-Grey6 w-full lg:w-[32%]'>
            Insurance:
            <h5 className='font-medium'>Delta Dental</h5>
          </li>
          <li className='text-Grey6 w-full lg:w-[32%]'>
            Contact:
            <h5 className='font-medium'>Patient will Contact</h5>
          </li>
          <li className='text-Grey6 w-full lg:w-[32%]'>
            Tooth selection:
            <h5 className='font-medium'>
              1, 16, 17, 32, 30{' '}
              <span className='text-pryColor'>View x-ray diagram</span>{' '}
            </h5>
          </li>
          <li className='text-Grey6 flex-1'>
            Notes:
            <h5 className='font-medium'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h5>
          </li>
        </ul>
      </section>
      <section className='card overflow-hidden mt-8'>
        <hgroup className='p-3 bg-Grey6 '>
          <h5 className='text-white'>Doctor Selected</h5>
        </hgroup>

        <article className='flex flex-wrap items-center justify-between gap-2 px-7 py-7 '>
          <figure className='w-[14%]'>
            <img src={a} alt='' />
          </figure>
          <ul className='w-[80%] flex flex-wrap justify-between gap-y-5'>
            <li className='text-Grey6 w-full lg:w-[32%]'>
              Full Name:
              <h5 className='font-medium'>Dr. Darrell Steward, DDS</h5>
            </li>
            <li className='text-Grey6 w-full lg:w-[32%]'>
              Office Name:
              <h5 className='font-medium'>Madina Clinic</h5>
            </li>
            <li className='text-Grey6 w-full lg:w-[32%]'>
              Telephone:
              <h5 className='font-medium'>(603) 555-0123</h5>
            </li>
            <li className='text-Grey6 w-full lg:w-[32%]'>
              Next Availability:
              <h5 className='font-medium'>14/3/2024</h5>
            </li>
            <li className='text-Grey6 w-full lg:w-[32%]'>
              Fax:
              <h5 className='font-medium'>(603) 555-0123</h5>
            </li>
            <li className='text-Grey6 w-full lg:w-[32%]'>
              Office Logo:
              <figure className='w-10 h-10 overflow-hidden rounded-lg'>
                <img
                  src={b}
                  alt=''
                  className='object-cover !h-full object-center'
                />
              </figure>
            </li>
            <li className='text-Grey6 flex-1'>
              Website:
              <h5 className='font-medium'>madinaclinic.com</h5>
            </li>
          </ul>
        </article>
      </section>

      <hr className='my-5' />
      <section className='card overflow-hidden mt-8'>
        <hgroup className='p-3 bg-Grey6 '>
          <h5 className='text-white'>Referring Doctor/Hospital Information</h5>
        </hgroup>

        <article className='flex flex-wrap items-start justify-between gap-2 px-7 py-7 '>
          <figure className='w-[14%]'>
            <img src={c} alt='' />
          </figure>
          <ul className='w-[80%] flex flex-wrap justify-between gap-y-5'>
            <li className='text-Grey6 w-full lg:w-[32%]'>
              Referring Doctor:
              <h5 className='font-medium'>Dr. John Kennedy, DDS</h5>
            </li>
            <li className='text-Grey6 w-full lg:w-[32%]'>
              Referring Hospital:
              <h5 className='font-medium'>Capital Dental Group</h5>
            </li>
            <li className='text-Grey6 w-full lg:w-[32%]'>
              Doctor&apos;s Signature:
              <h5 className='font-medium'>Dr. John Kennedy, DDS</h5>
            </li>
            <article className='w-full'>
              <p>Team Member(s)</p>

              <ul className='flex flex-wrap justify-between gap-3 mt-5'>
                {[
                  {
                    id: 1,
                    name: 'Christopher Smallwood',
                    role: 'Office Manager',
                    imgUrl: a1,
                  },
                  {
                    id: 3,
                    name: 'Christopher Smallwood',
                    role: 'Office Manager',
                    imgUrl: b1,
                  },
                  {
                    id: 2,
                    name: 'Christopher Smallwood',
                    role: 'Office Manager',
                    imgUrl: c1,
                  },
                ].map(({ id, name, role, imgUrl }) => (
                  <li
                    key={id}
                    className='flex items-center justify-between card p-3 inputWrapper'
                  >
                    <div className='flex items-center gap-3'>
                      <figure className='w-10 h-10 overflow-hidden rounded-full'>
                        <img
                          src={imgUrl}
                          alt={name}
                          className='object-cover object-top'
                        />
                      </figure>
                      <div>
                        <h5 className='text-sm font-medium'> {name} </h5>
                        <small className='text-Grey6'> {role} </small>
                      </div>
                    </div>
                    <div>
                      <button>
                        <AiOutlineMessage className='text-pryColor' />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
            <li className='text-Grey6 w-full'>
              Address:
              <h5 className='font-medium'>
                651 N Broad St, Suite 201, Middletown, DE 19709{' '}
                <span className='text-pryColor'> View on Map </span>
              </h5>
            </li>
          </ul>
        </article>
      </section>

      <section className='card overflow-hidden mt-8'>
        <hgroup className='p-3 bg-Grey6 '>
          <h5 className='text-white'>Doctor Selected</h5>
        </hgroup>

        <article className='flex flex-wrap items-center justify-between gap-2 px-7 py-7 '>
          <figure className='w-[14%]'>
            <img src={d} alt='' />
          </figure>
          <ul className='w-[80%] flex flex-wrap gap-2 gap-y-5'>
            <li className='text-Grey6 w-full lg:w-[32%]'>
              Patient Name:
              <h5 className='font-medium'>
                Mike Wang <span className='text-pryColor'> View Profile</span>{' '}
              </h5>
            </li>
            <li className='text-Grey6 w-full lg:w-[32%]'>
              Date of Birth:
              <h5 className='font-medium'>19/10/1995</h5>
            </li>
            <li className='text-Grey6 w-full lg:w-[32%]'>
              Age:
              <h5 className='font-medium'>Age</h5>
            </li>
            <li className='text-Grey6 w-full lg:w-[32%]'>
              Preferred Pronoun:
              <h5 className='font-medium'>He/Him</h5>
            </li>
            <li className='text-Grey6 w-full lg:w-[32%]'>
              Email:
              <h5 className='font-medium'>wangmik@yahoo.com</h5>
            </li>

            <li className='text-Grey6 w-full lg:w-[32%]'>
              Phone:
              <h5 className='font-medium'>919-233-2200</h5>
            </li>
            <li className='text-Grey6 w-full lg:w-[32%]'>
              Preferred Method of Contact:
              <h5 className='font-medium'>Email</h5>
            </li>
            <li className='text-Grey6 w-full lg:w-[32%]'>
              Insurance:
              <h5 className='font-medium'>Delta dental</h5>
            </li>
          </ul>
        </article>
      </section>
      <article className='flex flex-wrap items-center justify-end gap-3 mt-8'>
        <button onClick={onPrevious} className='outline-dark w-full md:w-fit '>
          Back
        </button>
        <button
          className='main-btn w-full md:w-fit'
          type='submit'
          onClick={onNext}
        >
          Submit Referral
        </button>
      </article>
    </main>
  );
};

export default PreviewReferrals;
