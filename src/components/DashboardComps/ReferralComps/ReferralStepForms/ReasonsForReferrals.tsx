import { IStepForm } from '@/Interfaces/GlobalInterfaces';
import {
  SelectReferralsStepperForms,
  updateReferaalInfo,
} from '@/Redux/Features/referralsSlice';
import { useAppDispatch, useAppSelector } from '@/Redux/reduxHooks';
import { FC, useState } from 'react';
import CheckboxText from '../../CheckboxText';

const ReasonsForReferrals: FC<IStepForm> = ({ onPrevious, onNext }) => {
  const { referralsInfo } = useAppSelector(SelectReferralsStepperForms);
  const dispatch = useAppDispatch();

  const [isChecked, setIsChecked] = useState<{ [key: number]: boolean }>({});
  const [selected, setSelected] = useState<string>(
    referralsInfo ? referralsInfo.reasonForReferral : '',
  );

  const handleChange = (id: number, title: string) => {
    setIsChecked(() => ({ [id]: true }));
    setSelected(title);
  };

  const periodontistData = [
    { id: 1, title: 'Complete periodontal evaluation', checked: isChecked },
    { id: 2, title: 'Crown Lengthening', checked: isChecked },
    { id: 3, title: 'Aesthetic Crown Lengthening', checked: isChecked },
    { id: 4, title: 'Guided Tissue Regeneration', checked: isChecked },
    {
      id: 5,
      title: 'Non Responsive Periodontal Disease Management',
      checked: isChecked,
    },
    { id: 6, title: 'Dental Extractions', checked: isChecked },
    { id: 7, title: 'Gum Graft', checked: isChecked },
  ];

  const oralRadiologistData = [
    { id: 1, title: 'CBCT Interpretation', checked: isChecked },
    { id: 2, title: 'Panoramic Radiograph Interpretation', checked: isChecked },
    { id: 3, title: 'Implant Planning', checked: isChecked },
    { id: 4, title: 'Nerve Mapping', checked: isChecked },
  ];

  const tmjData = [
    { id: 1, title: 'Treatment / Consultation', checked: isChecked },
    { id: 2, title: 'TMJ Evaluation', checked: isChecked },
    { id: 3, title: 'Splint Therapy', checked: isChecked },
    { id: 4, title: 'Physical Therapy', checked: isChecked },
    { id: 5, title: 'Medication', checked: isChecked },
    { id: 6, title: 'Surgical TMJ Options', checked: isChecked },
  ];

  const pathologyData = [
    {
      id: 1,
      title:
        'Oral Mucosal Disorders (red/white lesion, nodule, mass, pigmentation, ulcer)',
      checked: isChecked,
    },
    {
      id: 2,
      title: 'Infection (bacterial, fungal, viral)',
      checked: isChecked,
    },
    {
      id: 3,
      title: 'Orofacial Pain (TMD, neuropathic pain, neuralgia)',
      checked: isChecked,
    },
    {
      id: 4,
      title:
        'Oral Pre-Cancer And Cancer Surveillance (leukoplakia, lip pre-cancer, post-cancer treatment surveillance)',
      checked: isChecked,
    },
    {
      id: 5,
      title:
        'Oral Complications from Cancer Therapy (dry mouth, jaw necrosis, mucositis, GVHD, trismus, dysgeusia)',
      checked: isChecked,
    },
    {
      id: 6,
      title:
        'Salivary Gland Pathology (Sjogren syndrome, salivary changes, taste changes)',
      checked: isChecked,
    },
  ];

  const hospitalDentistData = [
    { id: 1, title: 'Full Mouth Dental Extractions', checked: isChecked },
    { id: 2, title: 'Wisdom Teeth Removal', checked: isChecked },
    { id: 3, title: 'Dental Restorations', checked: isChecked },
    { id: 4, title: 'Pediatric Dental Needs', checked: isChecked },
    { id: 5, title: 'Dental Exam', checked: isChecked },
  ];

  const orthodontistData = [
    { id: 1, title: 'Orthodontic Evaluation', checked: isChecked },
    { id: 2, title: 'Early Interceptive Treatment', checked: isChecked },
    { id: 3, title: 'Invisalign', checked: isChecked },
    { id: 4, title: 'Aligner Therapy', checked: isChecked },
    { id: 5, title: 'Space Maintenance', checked: isChecked },
    { id: 6, title: 'Spacing', checked: isChecked },
    { id: 7, title: 'Overjet', checked: isChecked },
    {
      id: 8,
      title: 'Combined Orthodontic / Restorative Treatment',
      checked: isChecked,
    },
    { id: 9, title: 'SpacPre Prosthetic Orthodonticsing', checked: isChecked },
  ];

  const endodontistData = [
    { id: 1, title: 'Sensitivity', checked: isChecked },
    { id: 2, title: 'Spontaneous Toothache', checked: isChecked },
    {
      id: 3,
      title: 'Signs and Symptoms of a Cracked Tooth',
      checked: isChecked,
    },
    { id: 4, title: 'Unable to Diagnose', checked: isChecked },
    { id: 5, title: 'Re-treatment', checked: isChecked },
    {
      id: 6,
      title: 'Extraction: With Bone Graft, Implant',
      checked: isChecked,
    },
    { id: 7, title: 'Extraction: Refer back to Dentist', checked: isChecked },
    {
      id: 8,
      title: 'Remove Post',
      checked: isChecked,
    },
    { id: 9, title: 'Create Post Space', checked: isChecked },
    { id: 10, title: 'Apicoectomy', checked: isChecked },
  ];
  const specialityData = [
    { id: 1, title: 'Wisdom Tooth Removal', checked: isChecked },
    { id: 2, title: 'Tooth Extraction', checked: isChecked },
    { id: 3, title: 'Implants', checked: isChecked },
    { id: 4, title: 'Full Arch Implants', checked: isChecked },
    { id: 5, title: 'Full mouth dental extractions', checked: isChecked },
    { id: 6, title: 'Pathology', checked: isChecked },
    { id: 7, title: 'Expose and Bond', checked: isChecked },
  ];

  const dataKeys: any = {
    Periodontist: periodontistData,
    'Oral Radiologist': oralRadiologistData,
    'TMJ Specialists': tmjData,
    Orthodontist: orthodontistData,
    'Hospital Dentist': hospitalDentistData,
    Endodontist: endodontistData,
    'Oral Medicine/Pathology': pathologyData,
  };

  const matchedKey = Object.keys(dataKeys).find(
    (key) => key === referralsInfo?.speciality,
  );

  const dataToRender = matchedKey ? dataKeys[matchedKey] : specialityData;

  const handleNext = () => {
    dispatch(updateReferaalInfo({ reasonForReferral: selected }));
    onNext();
  };

  return (
    <main>
      <h5 className='text-center'>Reasons for Referral</h5>

      <ul className='flex flex-wrap gap-3 mt-9'>
        {dataToRender?.map(
          ({
            id,
            title,
            checked,
          }: {
            id: number;
            title: string;
            checked: { [key: number]: boolean };
          }) => (
            <li
              key={id}
              className='w-full md:w-[32%] animate__animated animate__bounceIn'
            >
              <CheckboxText
                checked={checked[id] || selected === title ? true : false}
                title={title}
                onClick={() => handleChange(id, title)}
              />
            </li>
          ),
        )}
        <div className='inputWrapper'>
          <label
            htmlFor='others'
            className='font-normal text-base w-full text-center'
          >
            Others
          </label>
          <input id='' type='text' className='!m-0 form-controls' />
        </div>
      </ul>

      <article className='flex flex-wrap items-center justify-end gap-3 mt-8'>
        <button onClick={onPrevious} className='outline-dark w-full md:w-fit '>
          Go Back
        </button>
        <button
          className='main-btn w-full md:w-fit'
          type='submit'
          onClick={handleNext}
          disabled={Object.keys(isChecked).length === 0 && selected === ''}
        >
          Continue
        </button>
      </article>
    </main>
  );
};

export default ReasonsForReferrals;
