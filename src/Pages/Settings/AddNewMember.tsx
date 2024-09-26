import FormInput from '@/components/FormInput';
import * as Yup from 'yup';
// import * as API from '@/api/apis';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { BsTrash3 } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '@/Redux/reduxHooks';
import {
  SelectStepperForms,
  updateTeamMembers,
} from '@/Redux/Features/onboardingSlice';
import { ITeamMember } from '@/Interfaces/OnboardingInterfaces';
import ImageContainer from '@/components/Cloudinary/ImageContainer';
import ErrorMessage from '@/components/ErrorMessage';
import GoBackBtn from '@/components/GoBackBtn';
const roleData = ['Option1', 'Option2', 'Option3'];

const initialState = {
  firstName: '',
  lastName: '',
  role: '',
  email: '',
  phoneNumber: '',
};

const AddNewMember = () => {
  const { loading, errors: customErrors } = useGlobalHooks();
  const { teamMemebers } = useAppSelector(SelectStepperForms);
  const dispatch = useAppDispatch();

  const initialValues = {
    teamsValues: teamMemebers.length > 0 ? teamMemebers : [initialState],
  };
  const onSubmit = async (userData: { teamsValues: ITeamMember[] }) => {
    console.log(userData);
    dispatch(updateTeamMembers(userData?.teamsValues));

    // if (userData?.profile === '') {
    //   handleError(true, 'Please upload profile image');
    //   return;
    // }

    // handleError(false, '');
  };

  const teamsScheme = Yup.object().shape({
    teamsValues: Yup.array().of(
      Yup.object().shape({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
        role: Yup.string().required('Please select your role'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Email address is required'),
      }),
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: teamsScheme,
    onSubmit,
  });

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = formik;

  const addNewItem = () => {
    setFieldValue('teamsValues', [...values.teamsValues, initialState]);
  };
  return (
    <main className='py-6'>
      <header className='container flex flex-col justify-between gap-2 mt-2'>
        <div>
          <GoBackBtn />
        </div>

        <hgroup className=''>
          <h5 className='font-bold mb-2'>Add Team Member</h5>
          <p className='text-Grey1 text-xs'>
            Add all the insurance accepted in your dental office
          </p>
        </hgroup>
      </header>
      <hr className='my-5' />

      <section className='container'>
        <FormikProvider value={formik}>
          <form onSubmit={handleSubmit}>
            <FieldArray name='teamsValues'>
              {({ remove }) => (
                <>
                  {values.teamsValues.map(
                    (
                      { firstName, lastName, role, email, phoneNumber },
                      index,
                    ) => (
                      <div
                        key={index}
                        className={`flex flex-wrap gap-3 mb-10  ${
                          values.teamsValues.length >= 2 ? 'border-b pb-4' : ''
                        }`}
                      >
                        <article className='my-6 flex flex-col gap-4 w-full'>
                          <h5 className='text-Grey1 font-medium'>
                            Office Logo
                          </h5>
                          <ImageContainer id='profile' loading={loading} />
                          <small className='text-Grey1'>
                            {' '}
                            Upload your photo so it can be displayed during
                            chats etc
                          </small>

                          {customErrors?.error && (
                            <ErrorMessage message={customErrors?.errMessage} />
                          )}
                        </article>

                        <FormInput
                          id={`teamsValues[${index}].firstName`}
                          name={`teamsValues[${index}].firstName`}
                          type='text'
                          label='First Name'
                          className='inputWrapper'
                          defaultValue={firstName}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={
                            touched.teamsValues?.[index]?.firstName &&
                            typeof errors.teamsValues?.[index] === 'object' &&
                            errors.teamsValues?.[index]?.firstName
                          }
                        />
                        <FormInput
                          id={`teamsValues[${index}].lastName`}
                          name={`teamsValues[${index}].lastName`}
                          type='text'
                          label='Last Name'
                          className='inputWrapper'
                          defaultValue={lastName}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={
                            touched.teamsValues?.[index]?.lastName &&
                            typeof errors.teamsValues?.[index] === 'object' &&
                            errors.teamsValues?.[index]?.lastName
                          }
                        />
                        <FormInput
                          id={`teamsValues[${index}].email`}
                          name={`teamsValues[${index}].email`}
                          type='email'
                          label='Email'
                          className='inputWrapper'
                          defaultValue={email}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={
                            touched.teamsValues?.[index]?.email &&
                            typeof errors.teamsValues?.[index] === 'object' &&
                            errors.teamsValues?.[index]?.email
                          }
                        />
                        <FormInput
                          id={`teamsValues[${index}].phoneNumber`}
                          name={`teamsValues[${index}].phoneNumber`}
                          type='tel'
                          label='Telephone'
                          className='inputWrapper'
                          defaultValue={phoneNumber}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={
                            touched.teamsValues?.[index]?.phoneNumber &&
                            typeof errors.teamsValues?.[index] === 'object' &&
                            errors.teamsValues?.[index]?.phoneNumber
                          }
                          onlyCountries={['gb']}
                          defaultCountry='gb'
                          telValue={phoneNumber?.toString()}
                        />
                        <FormInput
                          id={`teamsValues[${index}].role`}
                          name={`teamsValues[${index}].role`}
                          type='cSelect'
                          label='Role'
                          className='inputWrapper'
                          selectOptions={roleData}
                          defaultValue={role}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={
                            touched.teamsValues?.[index]?.role &&
                            typeof errors.teamsValues?.[index] === 'object' &&
                            errors.teamsValues?.[index]?.role
                          }
                        />
                        {values.teamsValues.length >= 2 && (
                          <div className='flex justify-end w-full'>
                            <button
                              type='button'
                              onClick={() => remove(index)}
                              className='bg-red-500 text-white rounded-lg p-1 mt-1'
                            >
                              <BsTrash3 />
                            </button>
                          </div>
                        )}
                      </div>
                    ),
                  )}

                  <div className='mt-3'>
                    <button
                      className='outline-btn'
                      type='button'
                      onClick={addNewItem}
                    >
                      Add another team member
                    </button>
                  </div>
                </>
              )}
            </FieldArray>

            <article className='flex flex-wrap items-center gap-3 mt-8'>
              <button className='main-btn w-full md:w-fit' type='submit'>
                Save Changes
              </button>
            </article>
          </form>
        </FormikProvider>
      </section>
    </main>
  );
};

export default AddNewMember;
