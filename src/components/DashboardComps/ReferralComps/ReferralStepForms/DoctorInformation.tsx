import { FC } from 'react';
import FormInput from '@/components/FormInput';
import * as Yup from 'yup';
import { IStepForm } from '@/Interfaces/GlobalInterfaces';
import { useFormik } from 'formik';
import a from '@/assets/doc2.png';
import b from '@/assets/doc3.png';
import c from '@/assets/doc4.png';
import { IoIosCloseCircle } from 'react-icons/io';

const initialValues = {
  name: 'Dr. Wilenson',
  office: 'Henderson Family Dentistry',
};

const DoctorInformation: FC<IStepForm> = ({ onPrevious, onNext }) => {
  // const { loading, errors: customErrors } = useGlobalHooks();

  const onSubmit = async (userData: any) => {
    console.log(userData);

    onNext();
  };

  const practiceInfoScheme = Yup.object().shape({
    name: Yup.string().required('Doctor name is required'),
    office: Yup.string().required('Office name is required'),
  });

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: practiceInfoScheme,
      onSubmit,
    });
  return (
    <main>
      <h5 className='text-center'>Doctor Information</h5>

      <form onSubmit={handleSubmit} className='w-full lg:w-9/12 mx-auto mt-10'>
        <section className='flex flex-wrap gap-3'>
          <FormInput
            id='name'
            name='name'
            type='text'
            label='Referring Doctor'
            defaultValue={values?.name}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.name && errors.name}
            className='inputWrapper'
          />
          <FormInput
            id='name'
            name='name'
            type='text'
            label='Dental Office'
            defaultValue={values?.office}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.office && errors.office}
            className='inputWrapper'
          />

          <article>
            <p>Team Member(s)</p>

            <ul className='flex flex-wrap justify-between gap-3 mt-5'>
              {[
                {
                  id: 1,
                  name: 'Christopher Smallwood',
                  role: 'Office Manager',
                  imgUrl: a,
                },
                {
                  id: 3,
                  name: 'Christopher Smallwood',
                  role: 'Office Manager',
                  imgUrl: b,
                },
                {
                  id: 2,
                  name: 'Christopher Smallwood',
                  role: 'Office Manager',
                  imgUrl: c,
                },
              ].map(({ id, name, role, imgUrl }) => (
                <li
                  key={id}
                  className='flex items-center justify-between card p-3 inputWrapper'
                >
                  <div className='flex items-center gap-3'>
                    <figure className='w-10 h-10 overflow-hidden rounded-full'>
                      <img
                        src={imgUrl}
                        alt={name}
                        className='object-cover object-top'
                      />
                    </figure>
                    <div>
                      <h5 className='text-sm font-medium'> {name} </h5>
                      <small className='text-Grey6'> {role} </small>
                    </div>
                  </div>
                  <div>
                    <button>
                      <IoIosCloseCircle color='#f00' />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className='inputWrapper'>
            <p>Signature</p>

            <textarea name='' id='' className='form-controls w-full'></textarea>
          </article>
        </section>

        <article className='flex flex-wrap items-center justify-end gap-3 mt-8'>
          <button
            onClick={onPrevious}
            className='outline-dark w-full md:w-fit '
          >
            Back
          </button>
          <button
            className='main-btn w-full md:w-fit'
            type='submit'
            onClick={onNext}
          >
            Continue
          </button>
        </article>
      </form>
    </main>
  );
};

export default DoctorInformation;
