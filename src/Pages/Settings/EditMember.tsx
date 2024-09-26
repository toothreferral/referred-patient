import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { ITeamMember } from '@/Interfaces/OnboardingInterfaces';
import ImageContainer from '@/components/Cloudinary/ImageContainer';
import ErrorMessage from '@/components/ErrorMessage';
const roleData = ['Option1', 'Option2', 'Option3'];
import GoBackBtn from '@/components/GoBackBtn';
import FormInput from '@/components/FormInput';
import { useNavigate, useParams } from 'react-router-dom';
import { userData } from '@/components/DashboardComps/SettingsElements/UserRoles';

const EditMember = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, errors: customErrors } = useGlobalHooks();

  const findMember = userData.find(
    (member) => member?.id === parseInt(id as string),
  );

  const initialValues = {
    firstName: findMember?.firstName || '',
    lastName: findMember?.lastName || '',
    role: findMember?.role || '',
    email: findMember?.email || '',
    phoneNumber: findMember?.phoneNumber || '',
  };

  const onSubmit = async (userData: ITeamMember) => {
    console.log(userData);
    navigate('/settings');
  };

  const teamsScheme = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    role: Yup.string().required('Please select your role'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email address is required'),
  });

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: teamsScheme,
      onSubmit,
    });

  return (
    <main className='py-6'>
      <header className='container flex flex-wrap items-center justify-between gap-3 mt-8'>
        <div>
          <GoBackBtn />
          <h5 className='font-bold mt-3'>Edit Team Member</h5>
        </div>
      </header>
      <hr className='my-5' />

      <section className='container'>
        <form onSubmit={handleSubmit}>
          <article className='my-6 flex flex-col gap-4 w-full'>
            <h5 className='text-Grey1 font-medium'>Office Logo</h5>
            <ImageContainer id='profile' loading={loading} />
            <small className='text-Grey1'>
              {' '}
              Upload your photo so it can be displayed during chats etc
            </small>

            {customErrors?.error && (
              <ErrorMessage message={customErrors?.errMessage} />
            )}
          </article>
          <article className='flex flex-wrap gap-3 w-full lg:w-8/12'>
            <FormInput
              id='firstName'
              name='firstName'
              type='text'
              label='First Name'
              className='inputWrapper'
              defaultValue={values.firstName}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.firstName && errors.firstName}
            />
            <FormInput
              id='lastName'
              name='lastName'
              type='text'
              label='Last Name'
              className='inputWrapper'
              defaultValue={values.lastName}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.lastName && errors.lastName}
            />
            <FormInput
              id='email'
              name='email'
              type='email'
              label='Email'
              className='inputWrapper'
              defaultValue={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.email && errors.email}
            />
            <FormInput
              id='phoneNumber'
              name='phoneNumber'
              type='tel'
              label='Telephone'
              className='inputWrapper'
              defaultValue={values.phoneNumber}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.phoneNumber && errors.phoneNumber}
              onlyCountries={['gb']}
              defaultCountry='gb'
              telValue={values.phoneNumber?.toString()}
            />
            <FormInput
              id='role'
              name='role'
              type='cSelect'
              label='Role'
              className='inputWrapper'
              selectOptions={roleData}
              defaultValue={values.role}
              onBlur={handleBlur}
              onChange={handleChange}
              error={touched.role && errors.role}
            />
          </article>

          <article className='flex flex-wrap items-center gap-3 mt-8'>
            <button className='main-btn w-full md:w-fit' type='submit'>
              Save Changes
            </button>
          </article>
        </form>
      </section>
    </main>
  );
};

export default EditMember;
