import FormInput from '@/components/FormInput';
import * as Yup from 'yup';
// import * as API from '@/api/apis';
import { useFormik } from 'formik';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import ErrorMessage from '@/components/ErrorMessage';
import ImageContainer from '@/components/Cloudinary/ImageContainer';
import a from '@/assets/doc4.png';
import stateData from '@/components/ukstate.json';
import { useEffect, useState } from 'react';

const s = ['Male', 'Female'];

const PersonalInfo = () => {
  const { loading, errors: customErrors } = useGlobalHooks();
  const [edit, setEdit] = useState(false);

  const initialValues = {
    firstName: 'John',
    lastName: 'Kennedy',
    phoneNumber: '(603) 555-0123',
    email: 'johnken@yahoo.com',
    state: 'Texas',
    city: 'Texas',
    street: 'Nonberge',
    zipcode: '100023',
    gender: 'Male',
    profile: '',
    dateOfBirth: '04/24/1989',
  };

  const onSubmit = async (userData: {
    [key: string]: string | number | boolean;
  }) => {
    console.log(userData);
  };

  const personalInfoScheme = Yup.object().shape({
    role: Yup.string().required('Please select your role'),
    dateOfBirth: Yup.string().required('D.O.B is required'),
  });

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: personalInfoScheme,
    onSubmit,
  });

  useEffect(() => {
    setFieldValue('values', { ...initialValues });
  }, []);

  return (
    <main className='container py-6'>
      <hgroup>
        <h4 className='text-xl font-semibold'>Personal Information</h4>

        <h6 className='text-Grey1'>
          View your profile and update your personal profile.
        </h6>
      </hgroup>

      <article className='my-6 flex flex-col gap-4'>
        <ImageContainer
          id='profile'
          loading={loading}
          btnTitle='Upload new picture'
          images={a}
        />

        {customErrors?.error && (
          <ErrorMessage message={customErrors?.errMessage} />
        )}
      </article>

      <form onSubmit={handleSubmit}>
        <article className='flex flex-wrap gap-y-5 justify-between'>
          <FormInput
            id='firstName'
            name='firstName'
            type='text'
            label='First Name'
            selectOptions={s}
            defaultValue={values?.firstName as string}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && errors.firstName}
            placeholder='First name'
            className='inputWrapper'
            disabled={!edit}
          />
          <FormInput
            id='lastName'
            name='lastName'
            type='text'
            label='Last Name'
            selectOptions={s}
            defaultValue={values?.lastName as string}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastName && errors.lastName}
            placeholder='Last name'
            className='inputWrapper'
            disabled={!edit}
          />
          <FormInput
            id='email'
            name='email'
            type='email'
            label='Email'
            selectOptions={s}
            defaultValue={values?.email as string}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
            placeholder='email'
            className='inputWrapper'
            disabled={!edit}
          />
          <FormInput
            id='phoneNumber'
            name='phoneNumber'
            type='tel'
            label='Telephone'
            selectOptions={s}
            defaultValue={values?.phoneNumber as string}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.phoneNumber && errors.phoneNumber}
            placeholder='telephone'
            className='inputWrapper'
            disabled={!edit}
          />
          <FormInput
            id='gender'
            name='gender'
            type='cSelect'
            label='Gender'
            placeholder='gender'
            selectOptions={s}
            defaultValue={values?.gender as string}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.gender && errors.gender}
            className='inputWrapper'
            disabled={!edit}
          />
          <FormInput
            id='dateOfBirth'
            name='dateOfBirth'
            type='date'
            label='Date of birth'
            selectOptions={s}
            defaultValue={values?.dateOfBirth as string}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.dateOfBirth && errors.dateOfBirth}
            placeholder='MM/DD/YYYY'
            className='inputWrapper'
            disabled={!edit}
          />
          <FormInput
            id='street'
            name='street'
            type='text'
            label='Street'
            selectOptions={s}
            defaultValue={values?.street as string}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.street && errors.street}
            placeholder='street'
            className='inputWrapper'
            disabled={!edit}
          />
          <FormInput
            id='state'
            name='state'
            type='cSelect'
            label='State'
            placeholder='State'
            className='inputWrapper'
            disabled={!edit}
            selectOptions={stateData}
            defaultValue={values.state}
            onBlur={handleBlur}
            onChange={handleChange}
            keyPropertyName={'name'}
            valuePropertyName={'name'}
            itemPropertyName={'name'}
            error={touched.state && errors.state}
          />
          <FormInput
            id='city'
            name='city'
            type='text'
            label='City'
            placeholder='city'
            className='inputWrapper'
            disabled={!edit}
            defaultValue={values.city}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.city && errors.city}
          />
          <FormInput
            id='zipcode'
            name='zipcode'
            type='text'
            label='Zip code'
            placeholder='zipcode'
            className='inputWrapper'
            disabled={!edit}
            defaultValue={values.zipcode}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.zipcode && errors.zipcode}
          />
        </article>

        <article className='flex items-center gap-3 mt-8'>
          {edit ? (
            <button className='main-btn' type='submit'>
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setEdit(!edit)}
              className='outline-btn'
              type='button'
            >
              Edit Profile
            </button>
          )}
        </article>
      </form>
    </main>
  );
};

export default PersonalInfo;
