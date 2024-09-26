import React, { MouseEvent, useEffect, useState } from 'react';
import FormInput from '@/components/FormInput';
import * as Yup from 'yup';
// import * as API from '@/api/apis';
import { useFormik } from 'formik';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import stateData from '@/components/ukstate.json';
import { MdOutlineCancel } from 'react-icons/md';
import { IPracticeInfo } from '@/Interfaces/OnboardingInterfaces';
import ImageContainer from '@/components/Cloudinary/ImageContainer';
import ErrorMessage from '@/components/ErrorMessage';
import { practiseInfoData } from '@/components/AllData';
import a from '@/assets/doc4.png';

const typeOfDentist = ['Dentist type 1', 'Dentist type 2', 'Dentist type 3'];
const categoryData = ['Category 1', 'Category 2', 'Category 3'];
const role = ['Option1', 'Option2', 'Option3'];

const PracticeInfo = () => {
  const { loading, errors: customErrors } = useGlobalHooks();
  const [skillSet, setSkillSet] = useState({ skill: '', product: '' });
  const [edit, setEdit] = useState(false);

  const initialValues = {
    firstName: 'John',
    lastName: 'Kennedy',
    phoneNumber: '(603) 555-0123',
    email: 'johnken@yahoo.com',
    state: 'Texas',
    city: 'Texas',
    street: 'Nonberge',
    zipCode: '100023',
    gender: 'Male',
    role: 'Option1',
    typeOfDentist: 'Dentist type 1',
    category: 'Category 1',
    yearsofExperience: '5',
    degree: 'Phd',
  };
  const [skillSetData, setSkillSetData] = useState<{ [key: string]: string }[]>(
    [
      { skill: 'Therapy Dog' },
      { skill: 'Surgical Extractions' },
      { skill: 'IV Sedation' },
      { product: 'Therapy Dog' },
      { product: 'Surgical Extractions' },
      { product: 'IV Sedation' },
    ],
  );

  const onSubmit = async (userData: IPracticeInfo) => {
    console.log(userData);
    setEdit(!edit);
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
    validationSchema: practiceInfoScheme,
    onSubmit,
  });

  useEffect(() => {
    setFieldValue('values', { ...initialValues });
  }, []);

  return (
    <main className='container py-6'>
      <hgroup>
        <h3>Practice Information</h3>

        <p className='text-Grey1 text-xs'>
          Please provide information of the General Dentist or Dental Specialist
        </p>
      </hgroup>

      <article className='my-6 flex flex-col gap-4'>
        <ImageContainer
          id='profile'
          loading={loading}
          btnTitle='Upload new picture'
          images={a}
        />

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
                    disabled={disabled || !edit}
                  />
                </React.Fragment>
              );
            },
          )}
        </article>

        {edit && (
          <article className='flex  flex-wrap gap-5 justify-between mt-5'>
            <hgroup className='w-full'>
              <h4>Skill set</h4>
              <p>
                List the skills that make you standout. For example Sally is
                looking for a dentist that accepts Humana Insurance and can
                removed teeth. If you are comfortable removing teeth list it.{' '}
              </p>
            </hgroup>
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
                setSkillSet((prev) => ({
                  ...prev,
                  ['product']: e.target.value,
                }))
              }
              onBlur={handleBlur}
              className='inputWrapper'
              defaultValue={skillSet.product}
            />
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
        )}
        <article className='mt-3'>
          <div>
            <h5 className='text-sl font-semibold'>Skills</h5>
            <ul className='flex flex-wrap gap-2 items-center w-full mt-1'>
              {skillSetData.map(({ skill }, index) => (
                <>
                  {skill && (
                    <li
                      key={index}
                      className='rounded-3xl py-1 px-2 bg-Grey4 text-Grey1 flex items-center gap-2 font-medium'
                    >
                      {' '}
                      <MdOutlineCancel
                        onClick={() => {
                          setSkillSetData((prev) =>
                            prev.filter((_, idx) => idx !== index),
                          );
                        }}
                        className='cursor-pointer'
                      />{' '}
                      {skill}
                    </li>
                  )}
                </>
              ))}
            </ul>
          </div>
          <div className='mt-6'>
            <h5 className='text-sl font-semibold'>Professional Product Use</h5>
            <ul className='flex flex-wrap gap-2 items-center w-full mt-1'>
              {skillSetData.map(({ product }, index) => (
                <>
                  {product && (
                    <li
                      key={index}
                      className='rounded-3xl py-1 px-2 bg-Grey4 text-Grey1 flex items-center gap-2 font-medium'
                    >
                      {' '}
                      <MdOutlineCancel
                        onClick={() => {
                          setSkillSetData((prev) =>
                            prev.filter((_, idx) => idx !== index),
                          );
                        }}
                        className='cursor-pointer'
                      />
                      {product}{' '}
                    </li>
                  )}
                </>
              ))}
            </ul>
          </div>
        </article>

        <article className='flex items-center gap-3 mt-8'>
          {edit ? (
            <button className='main-btn' type='submit'>
              Save Changes
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                setEdit(!edit);
              }}
              className='outline-btn'
              type='button'
            >
              Edit Practice
            </button>
          )}
        </article>
      </form>
    </main>
  );
};

export default PracticeInfo;
