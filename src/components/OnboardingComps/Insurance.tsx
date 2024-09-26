import { IStepForm } from '@/Interfaces/GlobalInterfaces';
import { FC } from 'react';
import FormInput from '@/components/FormInput';
import * as Yup from 'yup';
// import * as API from '@/api/apis';
import { FieldArray, FormikProvider, useFormik } from 'formik';
// import ImageContainer from '../Cloudinary/ImageContainer';
// import { useGlobalHooks } from '@/Hooks/globalHooks';
// import ErrorMessage from '../ErrorMessage';
import { BsTrash3 } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '@/Redux/reduxHooks';
import {
  SelectStepperForms,
  updateInsurance,
} from '@/Redux/Features/onboardingSlice';

const initialState = {
  insuranceCoy: '',
  insurancePlan: '',
};

const Insurance: FC<IStepForm> = ({ onPrevious, onNext }) => {
  //   const { loading, errors: customErrors } = useGlobalHooks();
  const { insuranceInfo } = useAppSelector(SelectStepperForms);
  const dispatch = useAppDispatch();

  const initialValues = {
    insuranceValues: insuranceInfo?.length > 0 ? insuranceInfo : [initialState],
  };
  const onSubmit = async (userData: {
    insuranceValues: { [key: string]: string }[];
  }) => {
    console.log(userData);
    dispatch(updateInsurance(userData?.insuranceValues));
    // if (userData?.profile === '') {
    //   handleError(true, 'Please upload profile image');
    //   return;
    // }

    // handleError(false, '');

    onNext();
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
    <main>
      <hgroup className='mb-6'>
        <h3>Insurance</h3>
        <p className='text-Grey1 text-xs'>
          Add all the insurance accepted in your dental office
        </p>
      </hgroup>

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
                          typeof errors.insuranceValues?.[index] === 'object' &&
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
                          typeof errors.insuranceValues?.[index] === 'object' &&
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

          <article className='flex flex-wrap items-center justify-end gap-3 mt-8'>
            <button
              onClick={onPrevious}
              className='outline-dark w-full md:w-fit '
            >
              Go Back
            </button>
            <button
              className='main-btn w-full md:w-fit
    '
              type='submit'
            >
              Save & Continue
            </button>
          </article>
        </form>
      </FormikProvider>
    </main>
  );
};

export default Insurance;
