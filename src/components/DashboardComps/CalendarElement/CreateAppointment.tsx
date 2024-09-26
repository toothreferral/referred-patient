import { Dispatch, FC, SetStateAction } from 'react';
import FormInput from '@/components/FormInput';
import { IModal } from '@/Interfaces/GlobalInterfaces';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import PopUp from '@/components/popUps/PopUp';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import dayjs from 'dayjs';

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  note: string;
  patient: string;
  place: string;
}

const CreateAppointment: FC<
  IModal & {
    data: CalendarEvent;
    setData: Dispatch<SetStateAction<CalendarEvent>>;
  }
> = ({ id, close, data, setData }) => {
  const { handleShow } = useGlobalHooks();

  // Format Date and Time using dayjs for the initial values
  const initialDate = data?.start ? dayjs(data.start).format('YYYY-MM-DD') : '';
  const initialTime = data?.start ? dayjs(data.start).format('HH:mm') : '';

  const initialValues = {
    title: data?.title || '',
    place: data?.place || '',
    date: initialDate,
    time: initialTime,
    patient: data?.patient || '',
    note: data?.note || '',
  };

  const onSubmit = async (userData: any) => {
    console.log(userData);
    // Combine the date and time into a single Date object using dayjs
    const updatedEvent = {
      ...userData,
      start: dayjs(`${userData.date}T${userData.time}`).toDate(),
      end: dayjs(`${userData.date}T${userData.time}`).toDate(), // Assuming end time is the same
    };

    // Update the state with the new event data
    setData && setData(updatedEvent);
    handleShow(id);
  };

  const signUpSchema = Yup.object().shape({
    title: Yup.string().required('Please select event title'),
  });

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit,
    });
  return (
    <PopUp id={id as string} className='!justify-end'>
      <section className='w-9/12 md:w-5/12 bg-white mx-auto animate__animated animate__bounceInRight rounded-lg'>
        <section className='my-7 container'>
          <form onSubmit={handleSubmit} className='mt-5 flex flex-wrap gap-3'>
            <FormInput
              id='title'
              name='title'
              type='text'
              placeholder='Event Titlte'
              defaultValue={values?.title}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.title && errors.title}
              className='inputWrapper'
            />

            <FormInput
              id='place'
              name='place'
              type='text'
              placeholder='Add Place'
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.place && errors.place}
              className='inputWrapper'
            />

            <FormInput
              id='date'
              name='date'
              type='date'
              placeholder='Add Date'
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.date && errors.date}
              className='inputWrapper'
            />

            <FormInput
              id='time'
              name='time'
              type='time'
              placeholder='Add Time'
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.time && errors.time}
              className='inputWrapper'
            />

            <FormInput
              id='patient'
              name='patient'
              type='text'
              placeholder='Add Patient'
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.patient && errors.patient}
              className='inputWrapper'
            />

            <FormInput
              id='note'
              name='note'
              type='text'
              placeholder='Add Notes'
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.note && errors.note}
              className='inputWrapper'
            />

            <section className='flex items-center justify-end gap-3 mt-7 w-full'>
              <button onClick={close} className='outline-btn' type='button'>
                Cancel
              </button>
              <button className='main-btn' type='submit'>
                Submit
              </button>
            </section>
          </form>
        </section>
      </section>
    </PopUp>
  );
};

export default CreateAppointment;
