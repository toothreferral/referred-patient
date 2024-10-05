import { useNavigate, useParams } from 'react-router-dom';
import FormInput from '@/components/FormInput';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import PlanCard from '@/components/DashboardComps/GuestElements/BookASessionSteps/PlanCard';
import GoBackBtn from '@/components/GoBackBtn';
import { useEffect } from 'react';
import { subPlanData } from '@/components/AllData';

const EditPlan = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const findPlan = subPlanData.find(
    (plan) => plan?.id === parseInt(id as string),
  );

  const initialValues = {
    planTitle: findPlan?.title || '',
    monthlyPay: findPlan?.monthlyPrice || '',
    yearlyPay: findPlan?.yearlyPrice || '',
    description1: findPlan?.description1 || '',
    description2: findPlan?.description2 || '',
    description3: findPlan?.description3 || '',
    description4: findPlan?.description4 || '',
    description5: findPlan?.description5 || '',
  };

  const onSubmit = async (userData: any) => {
    console.log(userData);
    navigate('/settings');
  };

  const dentalPlanScheme = Yup.object().shape({
    planTitle: Yup.string().required('Plan title is required'),
    monthlyPay: Yup.string().required('Please enter amount per month'),
    yearlyPay: Yup.string().required('Please enter amount per yearly'),
    description1: Yup.string().required('Description is required'),
    description2: Yup.string().required('Description is required'),
    description3: Yup.string().required('Description is required'),
    description4: Yup.string().required('Description is required'),
    description5: Yup.string().required('Description is required'),
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
    validationSchema: dentalPlanScheme,
    onSubmit,
  });

  useEffect(() => {
    setFieldValue('values', { ...initialValues });
  }, []);

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
        <form onSubmit={handleSubmit}>
          <section className='flex flex-wrap justify-between'>
            <ul className={`flex-1 flex flex-col mb-10`}>
              <FormInput
                id='planTitle'
                name='planTitle'
                type='text'
                label='Plan Title'
                className=' w-full lg:w-9/12'
                defaultValue={values.planTitle}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.planTitle && errors.planTitle}
              />
              <FormInput
                id='monthlyPay'
                name='monthlyPay'
                type='number'
                label='Amount per month'
                className=' w-full lg:w-9/12'
                defaultValue={values.monthlyPay}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.monthlyPay && errors.monthlyPay}
              />
              <FormInput
                id='yearlyPay'
                name='yearlyPay'
                type='number'
                label='Amount per year'
                className=' w-full lg:w-9/12'
                defaultValue={values.yearlyPay}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.yearlyPay && errors.yearlyPay}
              />
              <FormInput
                id='description1'
                name='description1'
                type='text'
                label='Description 1'
                className=' w-full lg:w-9/12'
                defaultValue={values.description1}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.description1 && errors.description1}
              />
              <FormInput
                id='description2'
                name='description2'
                type='text'
                label='Description 2'
                className=' w-full lg:w-9/12'
                defaultValue={values.description2}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.description2 && errors.description2}
              />
              <FormInput
                id='description3'
                name='description3'
                type='text'
                label='Description 3'
                className=' w-full lg:w-9/12'
                defaultValue={values.description3}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.description3 && errors.description3}
              />
              <FormInput
                id='description4'
                name='description4'
                type='text'
                label='Description 4'
                className=' w-full lg:w-9/12'
                defaultValue={values.description4}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.description4 && errors.description4}
              />
              <FormInput
                id='description5'
                name='description5'
                type='text'
                label='Description 5'
                className=' w-full lg:w-9/12'
                defaultValue={values.description5}
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.description5 && errors.description5}
              />
            </ul>

            <article className='w-full lg:w-5/12'>
              <PlanCard
                planTitle={values.planTitle}
                monthlyPay={values.monthlyPay as number}
                yearlyPay={values.yearlyPay as number}
                description1={values.description1}
                description2={values.description2}
                description3={values.description3}
                description4={values.description4}
                description5={values.description5}
              />
            </article>
          </section>

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

export default EditPlan;
