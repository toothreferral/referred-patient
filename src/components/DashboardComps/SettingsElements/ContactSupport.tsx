import FormInput from '@/components/FormInput';

const ContactSupport = () => {
  return (
    <main className='container py-6'>
      <hgroup>
        <h4 className='text-xl font-semibold'>Personal Information</h4>

        <h6 className='text-Grey1'>
          View your profile and update your personal profile.
        </h6>
      </hgroup>

      <ul className='flex flex-col gap-4 mt-6'>
        <li>
          <p className='font-semibold'>Email</p>
          Please shoot us a mail at{' '}
          <a
            href='mailto: info@toothreferral.com'
            className='font-semibold text-positive'
          >
            info@toothreferral.com
          </a>
        </li>
        <hr />
        <li>
          <FormInput
            id='email'
            name='email'
            type='email'
            label='Email address'
          />
        </li>

        <li>
          Select a topic:
          <ul className='flex flex-wrap gap-2 mt-3'>
            {[
              'Signing in',
              'Subscription',
              'Appointment',
              'Calendar',
              'Referrals',
              'Onboarding',
              'Scheduling issues',
            ].map((item) => (
              <li key={item} className='outline-dark !font-normal !text-Grey1'>
                {item}
              </li>
            ))}
          </ul>
        </li>

        <li>
          <FormInput
            id='help'
            name='help'
            type='text'
            label='Or tell us what you need help with'
          />
        </li>

        <li>
          <button className='main-btn'>Get Help</button>
        </li>
      </ul>
    </main>
  );
};

export default ContactSupport;
