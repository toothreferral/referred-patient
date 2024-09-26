import Contact from './Contact';
import DoctorInformation from './DoctorInformation';
import FindADoc from './FindADoc';
import Insurance from './Insurance';
import Notes from './Notes';
import PatientCharts from './PatientCharts';
import PatientContactInfo from './PatientContactInfo';
import PreviewReferrals from './PreviewReferral';
import ReasonsForReferrals from './ReasonsForReferrals';
import ScheduleAppointment from './ScheduleAppointment';
import Scheduling from './Scheduling';

export const RefStepData = (
  handleNext: () => void,
  handlePrevious: () => void,
) => {
  return [
    {
      comp: <FindADoc onNext={handleNext} onPrevious={handlePrevious} />,
    },
    {
      comp: (
        <ReasonsForReferrals onNext={handleNext} onPrevious={handlePrevious} />
      ),
    },
    {
      comp: <PatientCharts onNext={handleNext} onPrevious={handlePrevious} />,
    },
    {
      comp: <Scheduling onNext={handleNext} onPrevious={handlePrevious} />,
    },
    {
      comp: <Notes onNext={handleNext} onPrevious={handlePrevious} />,
    },
    {
      comp: <Insurance onNext={handleNext} onPrevious={handlePrevious} />,
    },
    {
      comp: <Contact onNext={handleNext} onPrevious={handlePrevious} />,
    },
    {
      comp: (
        <ScheduleAppointment onNext={handleNext} onPrevious={handlePrevious} />
      ),
    },
    {
      comp: (
        <DoctorInformation onNext={handleNext} onPrevious={handlePrevious} />
      ),
    },
    {
      comp: (
        <PatientContactInfo onNext={handleNext} onPrevious={handlePrevious} />
      ),
    },
    {
      comp: (
        <PreviewReferrals onNext={handleNext} onPrevious={handlePrevious} />
      ),
    },
  ];
};
export const PathologyStepData = (
  handleNext: () => void,
  handlePrevious: () => void,
) => {
  return [
    {
      comp: (
        <PatientContactInfo onNext={handleNext} onPrevious={handlePrevious} />
      ),
    },
    {
      comp: (
        <ReasonsForReferrals onNext={handleNext} onPrevious={handlePrevious} />
      ),
    },
    {
      comp: <Notes patholog onNext={handleNext} onPrevious={handlePrevious} />,
    },
    {
      comp: <PatientCharts onNext={handleNext} onPrevious={handlePrevious} />,
    },
    {
      comp: <FindADoc onNext={handleNext} onPrevious={handlePrevious} />,
    },

    {
      comp: (
        <PreviewReferrals onNext={handleNext} onPrevious={handlePrevious} />
      ),
    },
  ];
};
