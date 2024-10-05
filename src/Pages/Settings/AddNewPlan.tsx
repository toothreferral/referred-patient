import FormInput from '@/components/FormInput';
import * as Yup from 'yup';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import { BsTrash3 } from 'react-icons/bs';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import PlanCard from '@/components/DashboardComps/GuestElements/BookASessionSteps/PlanCard';
import GoBackBtn from '@/components/GoBackBtn';

const initialState = {
  planTitle: '',
  monthlyPay: '',
  yearlyPay: '',
  description1: '',
  description2: '',
  description3: '',
  description4: '',
  description5: '',
};

const AddNewPlan = () => {
  const { handleShow } = useGlobalHooks();

  const initialValues = {
    dentalPlanValues: [initialState],
  };
  const onSubmit = async (userData: any) => {
    console.log(userData);
    handleShow('success');
    // if (userData?.profile === '') {
    //   handleError(true, 'Please upload profile image');
    //   return;
    // }

    // handleError(false, '');
  };

  const dentalPlanScheme = Yup.object().shape({
    dentalPlanValues: Yup.array().of(
      Yup.object().shape({
        planTitle: Yup.string().required('Plan title is required'),
        monthlyPay: Yup.string().required('Please enter amount per month'),
        yearlyPay: Yup.string().required('Please enter amount per yearly'),
        description1: Yup.string().required('Description is required'),
        description2: Yup.string().required('Description is required'),
        description3: Yup.string().required('Description is required'),
        description4: Yup.string().required('Description is required'),
        description5: Yup.string().required('Description is required'),
      }),
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: dentalPlanScheme,
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
    setFieldValue('dentalPlanValues', [
      ...values.dentalPlanValues,
      initialState,
    ]);
  };
  return (
    <main className=' py-6'>
      <header className='container'>
        <GoBackBtn />

        <hgroup className='mt-4'>
          <h3>In-house dental Plan</h3>
          <p className='text-Grey1 text-xs'>
            Add all the insurance accepted in your dental office
          </p>
        </hgroup>
      </header>

      <hr className='my-5' />
      <section className='container'>
        <FormikProvider value={formik}>
          <form onSubmit={handleSubmit}>
            <FieldArray name='dentalPlanValues'>
              {({ remove }) => (
                <>
                  {values.dentalPlanValues.map(
                    (
                      {
                        planTitle,
                        monthlyPay,
                        yearlyPay,
                        description1,
                        description2,
                        description3,
                        description4,
                        description5,
                      },
                      index,
                    ) => (
                      <section className='flex flex-wrap justify-between'>
                        <ul
                          key={index}
                          className={`flex-1 flex flex-col mb-10  ${
                            values.dentalPlanValues.length >= 2
                              ? 'border-b pb-4'
                              : ''
                          }`}
                        >
                          <FormInput
                            id={`dentalPlanValues[${index}].planTitle`}
                            name={`dentalPlanValues[${index}].planTitle`}
                            type='text'
                            label='Plan Title'
                            className=' w-full lg:w-9/12'
                            defaultValue={planTitle}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={
                              touched.dentalPlanValues?.[index]?.planTitle &&
                              typeof errors.dentalPlanValues?.[index] ===
                                'object' &&
                              errors.dentalPlanValues?.[index]?.planTitle
                            }
                          />
                          <FormInput
                            id={`dentalPlanValues[${index}].monthlyPay`}
                            name={`dentalPlanValues[${index}].monthlyPay`}
                            type='number'
                            label='Amount per month'
                            className=' w-full lg:w-9/12'
                            defaultValue={monthlyPay}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={
                              touched.dentalPlanValues?.[index]?.monthlyPay &&
                              typeof errors.dentalPlanValues?.[index] ===
                                'object' &&
                              errors.dentalPlanValues?.[index]?.monthlyPay
                            }
                          />
                          <FormInput
                            id={`dentalPlanValues[${index}].yearlyPay`}
                            name={`dentalPlanValues[${index}].yearlyPay`}
                            type='number'
                            label='Amount per year'
                            className=' w-full lg:w-9/12'
                            defaultValue={yearlyPay}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={
                              touched.dentalPlanValues?.[index]?.yearlyPay &&
                              typeof errors.dentalPlanValues?.[index] ===
                                'object' &&
                              errors.dentalPlanValues?.[index]?.yearlyPay
                            }
                          />
                          <FormInput
                            id={`dentalPlanValues[${index}].description1`}
                            name={`dentalPlanValues[${index}].description1`}
                            type='text'
                            label='Description 1'
                            className=' w-full lg:w-9/12'
                            defaultValue={description1}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={
                              touched.dentalPlanValues?.[index]?.description1 &&
                              typeof errors.dentalPlanValues?.[index] ===
                                'object' &&
                              errors.dentalPlanValues?.[index]?.description1
                            }
                          />
                          <FormInput
                            id={`dentalPlanValues[${index}].description2`}
                            name={`dentalPlanValues[${index}].description2`}
                            type='text'
                            label='Description 2'
                            className=' w-full lg:w-9/12'
                            defaultValue={description2}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={
                              touched.dentalPlanValues?.[index]?.description2 &&
                              typeof errors.dentalPlanValues?.[index] ===
                                'object' &&
                              errors.dentalPlanValues?.[index]?.description2
                            }
                          />
                          <FormInput
                            id={`dentalPlanValues[${index}].description3`}
                            name={`dentalPlanValues[${index}].description3`}
                            type='text'
                            label='Description 3'
                            className=' w-full lg:w-9/12'
                            defaultValue={description3}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={
                              touched.dentalPlanValues?.[index]?.description3 &&
                              typeof errors.dentalPlanValues?.[index] ===
                                'object' &&
                              errors.dentalPlanValues?.[index]?.description3
                            }
                          />
                          <FormInput
                            id={`dentalPlanValues[${index}].description4`}
                            name={`dentalPlanValues[${index}].description4`}
                            type='text'
                            label='Description 4'
                            className=' w-full lg:w-9/12'
                            defaultValue={description4}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={
                              touched.dentalPlanValues?.[index]?.description4 &&
                              typeof errors.dentalPlanValues?.[index] ===
                                'object' &&
                              errors.dentalPlanValues?.[index]?.description4
                            }
                          />
                          <FormInput
                            id={`dentalPlanValues[${index}].description5`}
                            name={`dentalPlanValues[${index}].description5`}
                            type='text'
                            label='Description 5'
                            className=' w-full lg:w-9/12'
                            defaultValue={description5}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            error={
                              touched.dentalPlanValues?.[index]?.description5 &&
                              typeof errors.dentalPlanValues?.[index] ===
                                'object' &&
                              errors.dentalPlanValues?.[index]?.description5
                            }
                          />

                          {values.dentalPlanValues.length >= 2 && (
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
                        </ul>
                        {planTitle && (
                          <article className='w-full lg:w-5/12'>
                            <PlanCard
                              planTitle={planTitle}
                              monthlyPay={parseInt(monthlyPay)}
                              yearlyPay={parseInt(yearlyPay)}
                              description1={description1}
                              description2={description2}
                              description3={description3}
                              description4={description4}
                              description5={description5}
                            />
                          </article>
                        )}
                      </section>
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

            <article className='flex flex-wrap items-center justify-end gap-3 mt-8'>
              <button
                className='main-btn w-full md:w-fit
      '
                type='submit'
              >
                Create Plan
              </button>
            </article>
          </form>
        </FormikProvider>
      </section>
    </main>
  );
};

export default AddNewPlan;
