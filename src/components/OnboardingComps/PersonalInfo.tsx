import { IStepForm } from '@/Interfaces/GlobalInterfaces';
import { FC } from 'react';
import FormInput from '@/components/FormInput';
import * as Yup from 'yup';
// import * as API from '@/api/apis';
import { useFormik } from 'formik';
import ImageContainer from '../Cloudinary/ImageContainer';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import ErrorMessage from '../ErrorMessage';
import { useAppDispatch, useAppSelector } from '@/Redux/reduxHooks';
import {
  SelectStepperForms,
  updatePersonalInfo,
} from '@/Redux/Features/onboardingSlice';

const s = ['Option1', 'Option2', 'Option3'];

const PersonalInfo: FC<IStepForm> = ({ onPrevious, onNext }) => {
  const { personalInfo } = useAppSelector(SelectStepperForms);
  const dispatch = useAppDispatch();
  const { loading, errors: customErrors } = useGlobalHooks();

  const initialValues = personalInfo || {
    profile: '',
    dateOfBirth: '',
    role: '',
    agreed: false,
  };

  const onSubmit = async (userData: {
    [key: string]: string | number | boolean;
  }) => {
    console.log(userData);

    dispatch(updatePersonalInfo(userData));
    // if (userData?.profile === '') {
    //   handleError(true, 'Please upload profile image');
    //   return;
    // }

    // handleError(false, '');

    onNext();
  };

  const personalInfoScheme = Yup.object().shape({
    role: Yup.string().required('Please select your role'),
    dateOfBirth: Yup.string().required('D.O.B is required'),
    agreeed: Yup.boolean(),
  });

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: personalInfoScheme,
      onSubmit,
    });

  return (
    <main>
      <h3>Personal Information</h3>

      <article className='my-6 flex flex-col gap-4'>
        <h5 className='text-Grey1 font-medium'>Profile Picture</h5>
        <ImageContainer id='profile' loading={loading} />
        <small className='text-Grey1'>
          {' '}
          Upload your photo so it can be displayed during chats etc
        </small>

        {customErrors?.error && (
          <ErrorMessage message={customErrors?.errMessage} />
        )}
      </article>

      <form onSubmit={handleSubmit}>
        <article className='flex flex-wrap gap-y-5 justify-between'>
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
          />
          <FormInput
            id='role'
            name='role'
            type='cSelect'
            label='Role'
            selectOptions={s}
            defaultValue={values?.role as string}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.role && errors.role}
            className='inputWrapper'
          />

          <FormInput
            id='agreed'
            name='agreed'
            type='checkbox'
            label='By signing up, you agree to be the administrator of your office account'
            selectOptions={s}
            defaultCheck={values?.agreed as boolean}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.agreed && errors.agreed}
            labelClassName='text-Grey1'
            required
          />
        </article>

        <article className='flex items-center justify-end gap-3 mt-8'>
          <button disabled onClick={onPrevious} className='outline-dark'>
            Go Back
          </button>
          <button className='main-btn' type='submit'>
            Save & Continue
          </button>
        </article>
      </form>
    </main>
  );
};

export default PersonalInfo;
