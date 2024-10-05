import { IStepForm } from '@/Interfaces/GlobalInterfaces';
import {
  SelectReferralsStepperForms,
  updateBookingData,
} from '@/Redux/Features/referralsSlice';
import { readableDateTime, readableTime } from '@/Utils';
import { FC, useState } from 'react';
import FormInput from '@/components/FormInput';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '@/Redux/reduxHooks';
import CheckboxText from '../../CheckboxText';
import InHouseDentalPlan from './InHouseDentalPlan';
import BookingSuccessfully from './BookingSuccessfully';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { selectGlobal } from '@/Redux/Features/globalSlice';
import ImageContainer from '@/components/Cloudinary/ImageContainer';
import ErrorMessage from '@/components/ErrorMessage';

const Step2: FC<IStepForm> = ({ onPrevious }) => {
  const { bookingData } = useAppSelector(SelectReferralsStepperForms);
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState<string>('Use Insurance');
  const { loading, errors: customErrors, handleShow } = useGlobalHooks();

  const toggle = useAppSelector(selectGlobal);

  const initialValues = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    reason: '',
    insuranceName: '',
    memberId: '',
    insurancePhone: '',
    groupNumber: '',
  };

  const onSubmit = async (userData: { [key: string]: string }) => {
    // setLoading(true);
    console.log(userData);
    dispatch(updateBookingData(userData));
    handleShow('book-success');
  };

  const handleIsChecked = (id: string) => {
    setIsChecked(id);
  };

  const bookinSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    dateOfBirth: Yup.string().required('D.O.B is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email address is required'),
    reason: Yup.string().required(
      'Please enter the reason for this appoinment',
    ),
  });

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: bookinSchema,
      onSubmit,
    });

  return (
    <main className='flex flex-wrap gap-4 divide-x  '>
      <section className='w-3/12'>
        <h5>Appointment details</h5>
        <ul className=' mt-5 space-y-5'>
          <li className='flex justify-between'>
            <small className='text-Grey6'>Dentist</small>
            <b>John Brown</b>
          </li>
          <li className='flex justify-between'>
            <small className='text-Grey6'>Time</small>
            <b>
              {readableTime(bookingData?.timeFrom)} -{' '}
              {readableTime(bookingData?.timeTo)}
            </b>
          </li>
          <li className='flex justify-between'>
            <small className='text-Grey6'>Date</small>
            <b> {readableDateTime(bookingData?.date)} </b>
          </li>
        </ul>
      </section>
      <aside className='flex-1 px-5'>
        <form onSubmit={handleSubmit}>
          <article className='flex flex-wrap gap-y-5 justify-between'>
            <FormInput
              id='firstName'
              name='firstName'
              type='text'
              label='First Name'
              defaultValue={values?.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.firstName && errors.firstName}
              className='inputWrapper'
            />

            <FormInput
              id='lastName'
              name='lastName'
              type='text'
              label='Last Name'
              defaultValue={values?.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.lastName && errors.lastName}
              className='inputWrapper'
            />

            <FormInput
              id='dateOfBirth'
              name='dateOfBirth'
              type='date'
              label='Date of birth'
              defaultValue={values?.dateOfBirth}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.dateOfBirth && errors.dateOfBirth}
              placeholder='MM/DD/YYYY'
              className='inputWrapper'
            />
            <FormInput
              id='email'
              name='email'
              type='email'
              label='Email Address'
              defaultValue={values?.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email}
              className='inputWrapper'
            />
            <FormInput
              id='reason'
              name='reason'
              type='textarea'
              label='Reason for appointment'
              defaultValue={values?.reason}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.reason && errors.reason}
              className='inputWrapper'
            />
          </article>

          <article className='flex gap-4 w-full md:w-7/12 my-6'>
            <CheckboxText
              title='Use Insurance'
              onClick={() => handleIsChecked('Use Insurance')}
              checked={isChecked === 'Use Insurance'}
            />
            <CheckboxText
              title='Use In-house Dental Plan'
              onClick={() => handleIsChecked('Use In-house Dental Plan')}
              checked={isChecked === 'Use In-house Dental Plan'}
            />
          </article>

          {isChecked === 'Use Insurance' ? (
            <article className='flex flex-wrap gap-y-5 justify-between'>
              <FormInput
                id='insuranceName'
                name='insuranceName'
                type='text'
                label='Insurance name'
                defaultValue={values?.insuranceName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.insuranceName && errors.insuranceName}
                className='inputWrapper'
              />

              <FormInput
                id='memberId'
                name='memberId'
                type='text'
                label='Insurance plan number (Member ID)'
                defaultValue={values?.memberId}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.memberId && errors.memberId}
                className='inputWrapper'
              />

              <FormInput
                id='insurancePhone'
                name='insurancePhone'
                type='tel'
                label='Insurance phone number at the back of card'
                defaultValue={values?.insurancePhone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.insurancePhone && errors.insurancePhone}
                className='inputWrapper'
              />
              <FormInput
                id='groupNumber'
                name='groupNumber'
                type='number'
                label='Group number'
                defaultValue={values?.groupNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.groupNumber && errors.groupNumber}
                className='inputWrapper'
              />
              <article className='space-y-2 inputWrapper'>
                <h5 className='text-Grey1 font-medium'>
                  Insurance Card: Front
                </h5>
                <ImageContainer id='profile' loading={loading} />

                {customErrors?.error && (
                  <ErrorMessage message={customErrors?.errMessage} />
                )}
              </article>
              <article className='space-y-2 inputWrapper'>
                <h5 className='text-Grey1 font-medium'>Insurance Card: Back</h5>
                <ImageContainer id='profile' loading={loading} />

                {customErrors?.error && (
                  <ErrorMessage message={customErrors?.errMessage} />
                )}
              </article>
            </article>
          ) : (
            <InHouseDentalPlan />
          )}

          <article className='flex items-center justify-end gap-3 mt-10'>
            <button onClick={onPrevious} className='outline-dark'>
              Go Back
            </button>
            <button className='main-btn' type='submit'>
              Schedule Appointment
            </button>
          </article>
        </form>
      </aside>

      {toggle['book-success'] && <BookingSuccessfully id='book-success' />}
    </main>
  );
};

export default Step2;
