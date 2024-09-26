import { IStepForm } from '@/Interfaces/GlobalInterfaces';
import { FC } from 'react';
import FormInput from '@/components/FormInput';
import * as Yup from 'yup';
// import * as API from '@/api/apis';
import { FieldArray, FormikProvider, useFormik } from 'formik';
import ImageContainer from '../Cloudinary/ImageContainer';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import ErrorMessage from '../ErrorMessage';
import { BsTrash3 } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '@/Redux/reduxHooks';
import {
  SelectStepperForms,
  updateOfficeInfo,
} from '@/Redux/Features/onboardingSlice';
import { IOfficeInfo } from '@/Interfaces/OnboardingInterfaces';
import stateData from '@/components/ukstate.json';

const initialState = {
  officeName: '',
  officePhoneNumber: '',
  officeFax: '',
  state: '',
  city: '',
  street: '',
  zipCode: '',
  website: '',
  email: '',
};

const OfficeInfo: FC<IStepForm> = ({ onPrevious, onNext }) => {
  const { loading, errors: customErrors } = useGlobalHooks();
  const { officeInfo } = useAppSelector(SelectStepperForms);
  const dispatch = useAppDispatch();

  const initialValues = {
    officeInfoValues: officeInfo.length > 0 ? officeInfo : [initialState],
  };
  const onSubmit = async (userData: { officeInfoValues: IOfficeInfo[] }) => {
    console.log(userData);

    dispatch(updateOfficeInfo(userData?.officeInfoValues));

    // if (userData?.profile === '') {
    //   handleError(true, 'Please upload profile image');
    //   return;
    // }

    // handleError(false, '');

    onNext();
  };

  const officeInfoScheme = Yup.object().shape({
    officeInfoValues: Yup.array().of(
      Yup.object().shape({
        officeName: Yup.string().required('First name is required'),
        officeFax: Yup.string().required('Last name is required'),
        officePhoneNumber: Yup.string().required('Phone number is required'),
        state: Yup.string().required('Please select your state'),
      }),
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: officeInfoScheme,
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
    setFieldValue('officeInfoValues', [
      ...values.officeInfoValues,
      initialState,
    ]);
  };

  return (
    <main>
      <hgroup>
        <h3>Office Information</h3>
        <p className='text-Grey1 text-xs'>
          Kindly provide information of your office
        </p>
      </hgroup>

      <FormikProvider value={formik}>
        <form onSubmit={handleSubmit}>
          <FieldArray name='officeInfoValues'>
            {({ remove }) => (
              <>
                {values.officeInfoValues.map(
                  (
                    {
                      officeName,
                      officeFax,
                      state,
                      city,
                      zipCode,
                      website,
                      officePhoneNumber,
                      street,
                    },
                    index,
                  ) => (
                    <div
                      key={index}
                      className={`flex flex-wrap gap-3 mb-10  ${
                        values.officeInfoValues.length >= 2
                          ? 'border-b pb-4'
                          : ''
                      }`}
                    >
                      <article className='my-6 flex flex-col gap-4 w-full'>
                        <h5 className='text-Grey1 font-medium'>Office Logo</h5>
                        <ImageContainer id='profile' loading={loading} />
                        <small className='text-Grey1'>
                          {' '}
                          Upload your photo so it can be displayed during chats
                          etc
                        </small>

                        {customErrors?.error && (
                          <ErrorMessage message={customErrors?.errMessage} />
                        )}
                      </article>
                      <FormInput
                        id={`officeInfoValues[${index}].officeName`}
                        name={`officeInfoValues[${index}].officeName`}
                        type='text'
                        label='Office Name'
                        className='inputWrapper'
                        defaultValue={officeName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={
                          touched.officeInfoValues?.[index]?.officeName &&
                          typeof errors.officeInfoValues?.[index] ===
                            'object' &&
                          errors.officeInfoValues?.[index]?.officeName
                        }
                      />
                      <FormInput
                        id={`officeInfoValues[${index}].officePhoneNumber`}
                        name={`officeInfoValues[${index}].officePhoneNumber`}
                        type='tel'
                        label='Office Telephone'
                        className='inputWrapper'
                        defaultValue={officePhoneNumber}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={
                          touched.officeInfoValues?.[index]
                            ?.officePhoneNumber &&
                          typeof errors.officeInfoValues?.[index] ===
                            'object' &&
                          errors.officeInfoValues?.[index]?.officePhoneNumber
                        }
                        onlyCountries={['gb']}
                        defaultCountry='gb'
                        telValue={officePhoneNumber?.toString()}
                      />
                      <FormInput
                        id={`officeInfoValues[${index}].officeFax`}
                        name={`officeInfoValues[${index}].officeFax`}
                        type='text'
                        label='Office Fax Number'
                        className='inputWrapper'
                        defaultValue={officeFax}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={
                          touched.officeInfoValues?.[index]?.officeFax &&
                          typeof errors.officeInfoValues?.[index] ===
                            'object' &&
                          errors.officeInfoValues?.[index]?.officeFax
                        }
                      />
                      <FormInput
                        id={`officeInfoValues[${index}].state`}
                        name={`officeInfoValues[${index}].state`}
                        type='cSelect'
                        label='State'
                        className='inputWrapper'
                        selectOptions={stateData}
                        defaultValue={state}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        keyPropertyName={'name'}
                        valuePropertyName={'name'}
                        itemPropertyName={'name'}
                        error={
                          touched.officeInfoValues?.[index]?.state &&
                          typeof errors.officeInfoValues?.[index] ===
                            'object' &&
                          errors.officeInfoValues?.[index]?.state
                        }
                      />
                      <FormInput
                        id={`officeInfoValues[${index}].city`}
                        name={`officeInfoValues[${index}].city`}
                        type='text'
                        label='City'
                        className='inputWrapper'
                        defaultValue={city}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={
                          touched.officeInfoValues?.[index]?.city &&
                          typeof errors.officeInfoValues?.[index] ===
                            'object' &&
                          errors.officeInfoValues?.[index]?.city
                        }
                      />
                      <FormInput
                        id={`officeInfoValues[${index}].street`}
                        name={`officeInfoValues[${index}].street`}
                        type='text'
                        label='Office Street Address'
                        className='inputWrapper'
                        defaultValue={street}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={
                          touched.officeInfoValues?.[index]?.street &&
                          typeof errors.officeInfoValues?.[index] ===
                            'object' &&
                          errors.officeInfoValues?.[index]?.street
                        }
                      />
                      <FormInput
                        id={`officeInfoValues[${index}].zipCode`}
                        name={`officeInfoValues[${index}].zipCode`}
                        type='text'
                        label='Zip Code'
                        className='inputWrapper'
                        defaultValue={zipCode}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={
                          touched.officeInfoValues?.[index]?.zipCode &&
                          typeof errors.officeInfoValues?.[index] ===
                            'object' &&
                          errors.officeInfoValues?.[index]?.zipCode
                        }
                      />
                      <FormInput
                        id={`officeInfoValues[${index}].website`}
                        name={`officeInfoValues[${index}].website`}
                        type='url'
                        label='Website'
                        className='inputWrapper'
                        defaultValue={website}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={
                          touched.officeInfoValues?.[index]?.website &&
                          typeof errors.officeInfoValues?.[index] ===
                            'object' &&
                          errors.officeInfoValues?.[index]?.website
                        }
                      />

                      {values.officeInfoValues.length >= 2 && (
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
                    Add another office location
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

export default OfficeInfo;
