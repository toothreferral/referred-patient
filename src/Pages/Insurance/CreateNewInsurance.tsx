import GoBackBtn from '@/components/GoBackBtn';
import useUpdatePageName from '@/Hooks/useUpdatePageName';
import FormInput from '@/components/FormInput';
import * as Yup from 'yup';
// import * as API from '@/api/apis';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { BsTrash3 } from 'react-icons/bs';

const initialState = {
  insuranceCoy: '',
  insurancePlan: '',
};
const CreateNewInsurance = () => {
  useUpdatePageName('Insurance');

  const initialValues = {
    insuranceValues: [initialState],
  };

  const onSubmit = async (userData: {
    insuranceValues: { [key: string]: string }[];
  }) => {
    console.log(userData);
    // if (userData?.profile === '') {
    //   handleError(true, 'Please upload profile image');
    //   return;
    // }

    // handleError(false, '');
  };

  const teamsScheme = Yup.object().shape({
    insuranceValues: Yup.array().of(
      Yup.object().shape({
        insuranceCoy: Yup.string().required(
          'Insurance company name is required',
        ),
        insurancePlan: Yup.string().required('Insurance plan name is required'),
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
    setFieldValue('insuranceValues', [...values.insuranceValues, initialState]);
  };

  return (
    <main className=' py-4'>
      <section className='container flex flex-wrap items-center justify-between gap-3 mt-8'>
        <div>
          <GoBackBtn />
          <h5 className='font-bold mt-3'>Add New Insurance</h5>
        </div>
      </section>
      <hr className='my-5' />

      <section className='container'>
        <FormikProvider value={formik}>
          <form onSubmit={handleSubmit}>
            <FieldArray name='insuranceValues'>
              {({ remove }) => (
                <>
                  {values.insuranceValues.map(
                    ({ insuranceCoy, insurancePlan }, index) => (
                      <div
                        key={index}
                        className={`flex flex-wrap gap-3 mb-10  ${
                          values.insuranceValues.length >= 2
                            ? 'border-b pb-4'
                            : ''
                        }`}
                      >
                        <FormInput
                          id={`insuranceValues[${index}].insuranceCoy`}
                          name={`insuranceValues[${index}].insuranceCoy`}
                          type='text'
                          label='Insurance company'
                          className='inputWrapper'
                          defaultValue={insuranceCoy}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={
                            touched.insuranceValues?.[index]?.insuranceCoy &&
                            typeof errors.insuranceValues?.[index] ===
                              'object' &&
                            errors.insuranceValues?.[index]?.insuranceCoy
                          }
                        />
                        <FormInput
                          id={`insuranceValues[${index}].insurancePlan`}
                          name={`insuranceValues[${index}].insurancePlan`}
                          type='text'
                          label='Insurance plan'
                          className='inputWrapper'
                          defaultValue={insurancePlan}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          error={
                            touched.insuranceValues?.[index]?.insurancePlan &&
                            typeof errors.insuranceValues?.[index] ===
                              'object' &&
                            errors.insuranceValues?.[index]?.insurancePlan
                          }
                        />

                        {values.insuranceValues.length >= 2 && (
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
                      Add another
                    </button>
                  </div>
                </>
              )}
            </FieldArray>

            <article className='flex flex-wrap items-center gap-3 mt-8'>
              <button className='outline-dark w-full md:w-fit '>Cancel</button>
              <button
                className='main-btn w-full md:w-fit
    '
                type='submit'
              >
                Save
              </button>
            </article>
          </form>
        </FormikProvider>
      </section>
    </main>
  );
};

export default CreateNewInsurance;
