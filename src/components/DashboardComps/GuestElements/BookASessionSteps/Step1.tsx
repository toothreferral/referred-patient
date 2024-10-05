import FormInput from '@/components/FormInput';
import { FC } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '@/Redux/reduxHooks';
import {
  SelectReferralsStepperForms,
  updateBookingData,
} from '@/Redux/Features/referralsSlice';
import { useNavigate } from 'react-router-dom';

const Step1: FC<{ onNext: () => void }> = ({ onNext }) => {
  const { bookingData } = useAppSelector(SelectReferralsStepperForms);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const initialValues = bookingData || {
    date: '',
    timeFrom: '',
    timeTo: '',
  };

  const onSubmit = async (userData: {
    date: string;
    timeFrom: string;
    timeTo: string;
  }) => {
    // setLoading(true);
    console.log(userData);
    dispatch(updateBookingData(userData));
    onNext();
  };

  const bookinSchema = Yup.object().shape({
    date: Yup.string().required('Please select booking date'),
    timeFrom: Yup.string().required('Please select booking start time'),
    timeTo: Yup.string().required('Please select booking end time'),
  });

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: bookinSchema,
      onSubmit,
    });
  return (
    <main className='mt-10 '>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col h-[50vh] justify-between'
      >
        <article className='flex flex-wrap justify-between'>
          <FormInput
            name='date'
            id='date'
            type='date'
            className='inputWrapper'
            label='Date'
            defaultValue={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.date && errors.date}
          />

          <div className='inputWrapper flex flex-wrap justify-between'>
            <FormInput
              name='timeFrom'
              id='timeFrom'
              type='time'
              className='inputWrapper'
              label='Start Time'
              defaultValue={values.timeFrom}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.timeFrom && errors.timeFrom}
            />

            <FormInput
              name='timeTo'
              id='timeTo'
              type='time'
              className='inputWrapper'
              label='End Time'
              defaultValue={values.timeTo}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.timeTo && errors.timeTo}
            />
          </div>
        </article>
        <article className='flex flex-wrap items-center gap-3 mt-8 w-full'>
          <button
            className='outline-dark w-full md:w-fit'
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            className='main-btn w-full md:w-fit
            '
            type='submit'
          >
            Continue
          </button>
        </article>
      </form>
    </main>
  );
};

export default Step1;
