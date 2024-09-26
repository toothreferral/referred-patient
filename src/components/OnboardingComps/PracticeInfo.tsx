import { IStepForm } from '@/Interfaces/GlobalInterfaces';
import React, { FC, MouseEvent, useState } from 'react';
import FormInput from '@/components/FormInput';
import * as Yup from 'yup';
// import * as API from '@/api/apis';
import { useFormik } from 'formik';
import ImageContainer from '../Cloudinary/ImageContainer';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import ErrorMessage from '../ErrorMessage';
import { practiseInfoData } from '../AllData';
import stateData from '@/components/ukstate.json';
import { MdOutlineCancel } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '@/Redux/reduxHooks';
import {
  SelectStepperForms,
  updatePracticeInfo,
  updateSkillSetData,
} from '@/Redux/Features/onboardingSlice';
import { IPracticeInfo } from '@/Interfaces/OnboardingInterfaces';

const initialValues = {
  firstName: '',
  lastName: '',
  role: '',
  gender: '',
  typeOfDentist: '',
  category: '',
  phoneNumber: '',
  state: '',
  city: '',
  street: '',
  zipCode: '',
  yearsofExperience: '',
  degree: '',
};

const typeOfDentist = ['Dentist type 1', 'Dentist type 2', 'Dentist type 3'];
const categoryData = ['Category 1', 'Category 2', 'Category 3'];
const role = ['Option1', 'Option2', 'Option3'];

const PracticeInfo: FC<IStepForm> = ({ onPrevious, onNext }) => {
  const { practiceInfo, skillsData } = useAppSelector(SelectStepperForms);
  const dispatch = useAppDispatch();
  const { loading, errors: customErrors } = useGlobalHooks();
  const [skillSet, setSkillSet] = useState({ skill: '', product: '' });

  const [skillSetData, setSkillSetData] = useState<{ [key: string]: string }[]>(
    skillsData || [],
  );

  const onSubmit = async (userData: IPracticeInfo) => {
    console.log(userData);
    dispatch(updatePracticeInfo(userData));
    dispatch(updateSkillSetData(skillSetData));
    // if (userData?.profile === '') {
    //   handleError(true, 'Please upload profile image');
    //   return;
    // }

    // handleError(false, '');

    onNext();
  };

  const handleGetSkillSetData = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSkillSetData((prev) => [...prev, skillSet]);
    setSkillSet({ skill: '', product: '' });
  };

  const practiceInfoScheme = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    gender: Yup.string().required('Gender is required'),
    role: Yup.string().required('Please select your role'),
    typeOfDentist: Yup.string().required(
      'Please select type of dentist that you are',
    ),
    category: Yup.string().required('Please select category'),
    phoneNumber: Yup.string().required('Phone number is required'),
    state: Yup.string().required('Please select your state'),
    city: Yup.string().required('Please enter your city'),
    street: Yup.string().required('Please enter your street'),
    zipCode: Yup.string().required('Please enter your zip code'),
    yearsofExperience: Yup.string().required(
      'Please enter your years of experience',
    ),
    degree: Yup.string().required('Please enter your degree'),
  });

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: practiceInfo || initialValues,
      validationSchema: practiceInfoScheme,
      onSubmit,
    });

  return (
    <main>
      <hgroup>
        <h3>Practice Information</h3>

        <p className='text-Grey1 text-xs'>
          Please provide information of the General Dentist or Dental Specialist
        </p>
      </hgroup>

      <article className='my-6 flex flex-col gap-4'>
        <h5 className='text-Grey1 font-medium'>Profile Picture</h5>
        <ImageContainer id='profile' loading={loading} />
        <small className='text-Grey1'>
          {' '}
          Upload your photo so it can be displayed during chats etc
        </small>

        {customErrors?.error && (
          <ErrorMessage message={customErrors?.errMessage} />
        )}
      </article>

      <form onSubmit={handleSubmit}>
        <article className='flex flex-wrap gap-3 justify-between mb-10'>
          {practiseInfoData(
            values,
            typeOfDentist,
            categoryData,
            stateData,
            role,
          ).map(
            ({ type, label, id, name, options, value, checked, disabled }) => {
              return (
                <React.Fragment key={id}>
                  <FormInput
                    id={id}
                    name={name}
                    type={type}
                    className={
                      id === 'description' || id === 'vendaCategoryId'
                        ? 'w-full'
                        : 'inputWrapper'
                    }
                    label={label}
                    defaultCheck={checked}
                    defaultValue={value}
                    selectOptions={options}
                    keyPropertyName={'name'}
                    valuePropertyName={'name'}
                    itemPropertyName={'name'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched[name as keyof typeof touched] &&
                      errors[name as keyof typeof errors]
                    }
                    onlyCountries={['gb']}
                    defaultCountry='gb'
                    telValue={value?.toString()}
                    disabled={disabled}
                  />
                </React.Fragment>
              );
            },
          )}
        </article>

        <article>
          <h4>Skill set</h4>
          <p>
            List the skills that make you standout. For example Sally is looking
            for a dentist that accepts Humana Insurance and can removed teeth.
            If you are comfortable removing teeth list it.{' '}
          </p>
        </article>

        <article className='flex  flex-wrap gap-5 justify-between mt-5'>
          <FormInput
            id='skill'
            name='skill'
            type='text'
            label='Skill'
            onChange={(e) =>
              setSkillSet((prev) => ({ ...prev, ['skill']: e.target.value }))
            }
            onBlur={handleBlur}
            className='inputWrapper'
            defaultValue={skillSet.skill}
          />
          <FormInput
            id='product'
            name='product'
            type='text'
            label='Professional Product Use'
            onChange={(e) =>
              setSkillSet((prev) => ({ ...prev, ['product']: e.target.value }))
            }
            onBlur={handleBlur}
            className='inputWrapper'
            defaultValue={skillSet.product}
          />
          <ul className='flex flex-wrap gap-2 items-center w-full -mt-5'>
            {skillSetData.map(({ skill, product }, index) => (
              <li className='rounded-3xl py-1 px-2 bg-Grey4 text-Grey1 flex items-center gap-2 font-medium'>
                {' '}
                <MdOutlineCancel
                  onClick={() => {
                    setSkillSetData((prev) =>
                      prev.filter((_, idx) => idx !== index),
                    );
                  }}
                  className='cursor-pointer'
                />{' '}
                {skill} - {product}{' '}
              </li>
            ))}
          </ul>
          <div>
            <button
              className='outline-btn'
              type='button'
              onClick={handleGetSkillSetData}
            >
              {' '}
              Add another skill{' '}
            </button>
          </div>
        </article>

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
    </main>
  );
};

export default PracticeInfo;
