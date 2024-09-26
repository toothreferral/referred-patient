import { FC } from 'react';
import FormInput from '@/components/FormInput';
import * as Yup from 'yup';
import { IStepForm } from '@/Interfaces/GlobalInterfaces';
import { useFormik } from 'formik';
import ImageContainer from '@/components/Cloudinary/ImageContainer';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import ErrorMessage from '@/components/ErrorMessage';

const initialValues = {
  firstName: '',
  lastName: '',
  dob: '',
  age: '',
  pronoun: '',
  email: '',
  phoneNumber: '',
  contactMethod: '',
};

const PatientContactInfo: FC<IStepForm> = ({ onPrevious, onNext }) => {
  const { loading, errors: customErrors } = useGlobalHooks();

  const onSubmit = async (userData: any) => {
    console.log(userData);

    onNext();
  };

  const PatientContactInfo = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    dob: Yup.string().required('Date of birth is required'),
    age: Yup.string().required('Age is required'),
    pronoun: Yup.string().required('Pronoun is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email address is required'),
  });

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: PatientContactInfo,
      onSubmit,
    });
  return (
    <main>
      <h5 className='text-center'>Patient Contact Information</h5>

      <form onSubmit={handleSubmit} className='w-full lg:w-9/12 mx-auto mt-10'>
        <section className='my-6 flex flex-col gap-4'>
          <h5 className='text-Grey1 font-medium'>Profile Picture</h5>
          <ImageContainer id='profile' loading={loading} />
          <small className='text-Grey1'> Upload patient photo</small>

          {customErrors?.error && (
            <ErrorMessage message={customErrors?.errMessage} />
          )}
        </section>
        <section className='flex flex-wrap gap-3'>
          <FormInput
            id='firstName'
            name='firstName'
            type='text'
            label='First Name'
            defaultValue={values?.firstName}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.firstName && errors.firstName}
            className='inputWrapper'
          />
          <FormInput
            id='lastName'
            name='lastName'
            type='text'
            label='Last Name'
            defaultValue={values?.lastName}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.lastName && errors.lastName}
            className='inputWrapper'
          />
          <FormInput
            id='dob'
            name='dob'
            type='date'
            label='Date of birth'
            defaultValue={values?.dob}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.dob && errors.dob}
            className='inputWrapper'
            placeholder='MM/DD/YYYY'
          />
          <FormInput
            id='age'
            name='age'
            type='text'
            label='Age'
            defaultValue={values?.age}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.age && errors.age}
            className='inputWrapper'
          />
          <FormInput
            id='pronoun'
            name='pronoun'
            type='cSelect'
            label='Preferred Pronoun'
            selectOptions={['He/Him', 'Her/She', 'They/Them']}
            defaultValue={values?.pronoun}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.pronoun && errors.pronoun}
            className='inputWrapper'
            placeholder='Pronoun'
          />
          <FormInput
            id='email'
            name='email'
            type='email'
            label='Email'
            defaultValue={values?.email}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.email && errors.email}
            className='inputWrapper'
          />
          <FormInput
            id='phoneNumber'
            name='phoneNumber'
            type='tel'
            label='Phone'
            defaultValue={values?.phoneNumber}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.phoneNumber && errors.phoneNumber}
            className='inputWrapper'
            onlyCountries={['gb']}
            defaultCountry='gb'
            telValue={values?.phoneNumber?.toString()}
          />
          <article className='inputWrapper flex flex-col gap-2'>
            <label>Preferred Method of Contact</label>
            <FormInput
              id='contactMethod'
              name='contactMethod'
              type='radio'
              label='Text'
              defaultValue={values?.contactMethod}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.contactMethod && errors.contactMethod}
              checkboxClass='!w-4 !h-4'
            />
            <FormInput
              id='contactMethod'
              name='contactMethod'
              type='radio'
              label='Email'
              defaultValue={values?.contactMethod}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.contactMethod && errors.contactMethod}
              checkboxClass='!w-4 !h-4'
            />
            <FormInput
              id='contactMethod'
              name='contactMethod'
              type='radio'
              label='Phone'
              defaultValue={values?.contactMethod}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.contactMethod && errors.contactMethod}
              checkboxClass='!w-4 !h-4'
            />
          </article>
        </section>

        <article className='flex flex-wrap items-center justify-end gap-3 mt-8'>
          <button
            onClick={onPrevious}
            className='outline-dark w-full md:w-fit '
          >
            Back
          </button>
          <button className='main-btn w-full md:w-fit' type='submit'>
            Continue
          </button>
        </article>
      </form>
    </main>
  );
};

export default PatientContactInfo;
