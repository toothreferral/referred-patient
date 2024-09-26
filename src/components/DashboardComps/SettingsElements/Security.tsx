import FormInput from '@/components/FormInput';
import { FormEvent, useState } from 'react';

const Security = () => {
  const [data, setData] = useState({
    newPassword: '',
    OldPassword: '',
  });
  console.log(data);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handlePasswordChange = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <main className='container py-6'>
      <hgroup>
        <h4 className='text-xl font-semibold'>Security</h4>

        <h6 className='text-Grey1'>Update your security settings</h6>
      </hgroup>

      <form
        onSubmit={handlePasswordChange}
        className=' mb-3 flex flex-col gap-4 mt-3'
      >
        <FormInput
          id='currentPassword'
          name='currentPassword'
          placeholder='current password'
          className='w-full'
          label='Old Password'
          onChange={handleChange}
        />
        <FormInput
          id='newPassword'
          name='newPassword'
          placeholder='New password'
          label='New Password'
          className='w-full'
          onChange={handleChange}
        />
        <FormInput
          id='confirmNewPassword'
          name='confirmNewPassword'
          placeholder='confirm password'
          label='Confirm new password'
          className='w-full'
          onChange={handleChange}
        />
        <article className='flex flex-row justify-between mt-5 gap-3 w-full'>
          <button type='submit' className='main-btn '>
            Reset Password
          </button>
        </article>
      </form>
    </main>
  );
};

export default Security;
