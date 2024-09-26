import PageHeaders from '@/components/DashboardComps/PageHeaders';
import {
  PathologyStepData,
  RefStepData,
} from '@/components/DashboardComps/ReferralComps/ReferralStepForms/AllStepsFormData';
import StepFormProvider from '@/components/DashboardComps/ReferralComps/ReferralStepForms/StepFormProvider';
import RefPopUp from '@/components/popUps/RefPopUp';
import { useGlobalHooks } from '@/Hooks/globalHooks';
import { IModal } from '@/Interfaces/GlobalInterfaces';
import { SelectReferralsStepperForms } from '@/Redux/Features/referralsSlice';
import { useAppSelector } from '@/Redux/reduxHooks';
import { FC } from 'react';

const CreateReferrals: FC<IModal> = ({ id }) => {
  const { handleShow } = useGlobalHooks();
  const { referralsInfo } = useAppSelector(SelectReferralsStepperForms);

  return (
    <RefPopUp className='!bg-pryColor-400 py-20 ' id={id}>
      <main className='w-10/12 mx-auto rounded-lg p-10 bg-white overflow-y-auto h-[95vh]'>
        <PageHeaders close={() => handleShow('create-ref')} />

        <StepFormProvider
          datas={
            referralsInfo?.speciality === 'Oral Medicine/Pathology'
              ? PathologyStepData
              : RefStepData
          }
        />
      </main>
    </RefPopUp>
  );
};

export default CreateReferrals;
