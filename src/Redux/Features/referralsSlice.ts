import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../Stores/store';

import { IPatientContact, IReferrals } from '@/Interfaces/Referrals';

const initialState = {
  referralStepForm: {
    referralsInfo: {} as IReferrals,
    patientContactInfo: {} as IPatientContact,
    chart: [] as string[],
    bookingData: {} as { date: string; timeFrom: string; timeTo: string },
  },
};

const referralsSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    updateReferaalInfo: (state, action) => {
      state.referralStepForm.referralsInfo = {
        ...state.referralStepForm.referralsInfo,
        ...action.payload,
      };
    },

    updateBookingData: (state, action) => {
      state.referralStepForm.bookingData = {
        ...state.referralStepForm.bookingData,
        ...action.payload,
      };
    },

    updatePatientContactInfo: (state, action) => {
      state.referralStepForm.patientContactInfo = action.payload;
    },

    updateChart: (state, action) => {
      state.referralStepForm.chart = action.payload;
    },

    clearReferralState: () => initialState,
  },
});

export const {
  updateReferaalInfo,
  updateBookingData,
  updatePatientContactInfo,
  updateChart,
} = referralsSlice.actions;

export const SelectReferralsStepperForms = (state: RootState) =>
  state.referralsSlice.referralStepForm;

export default referralsSlice.reducer;
