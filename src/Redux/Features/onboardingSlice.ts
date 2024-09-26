import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../Stores/store';
import {
  IOfficeInfo,
  IPracticeInfo,
  ITeamMember,
} from '@/Interfaces/OnboardingInterfaces';

const initialState = {
  stepperForms: {
    personalInfo: {} as { [keys: string]: string | number | boolean },
    practiceInfo: {} as IPracticeInfo,
    officeInfo: [] as IOfficeInfo[],
    teamMemebers: [] as ITeamMember[],
    insuranceInfo: [] as { [keys: string]: string }[],
    dentalPlan: [] as { [keys: string]: string | number }[],
    skillsData: [] as { [keys: string]: string }[],
  },
  fileName: '',
  onboarded: false,
  sessionExpiration: '',
};

const onboardingSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    updatePersonalInfo: (state, action) => {
      state.stepperForms.personalInfo = action.payload;
    },

    updatePracticeInfo: (state, action) => {
      state.stepperForms.practiceInfo = action.payload;
    },

    updateOfficeInfo: (state, action) => {
      state.stepperForms.officeInfo = action.payload;
    },

    updateTeamMembers: (state, action) => {
      state.stepperForms.teamMemebers = action.payload;
    },

    updateInsurance: (state, action) => {
      state.stepperForms.insuranceInfo = action.payload;
    },

    updateDentalPlan: (state, action) => {
      state.stepperForms.dentalPlan = action.payload;
    },

    updateSkillSetData: (state, action) => {
      state.stepperForms.skillsData = action.payload;
    },

    clearOnboardingState: (state) => {
      return {
        ...initialState,
        onboarded: state.onboarded,
      };
    },
  },
});

export const {
  updatePracticeInfo,
  updateDentalPlan,
  updateInsurance,
  updateOfficeInfo,
  updatePersonalInfo,
  updateTeamMembers,
  clearOnboardingState,
  updateSkillSetData,
} = onboardingSlice.actions;

export const SelectStepperForms = (state: RootState) =>
  state.onboardingSlice.stepperForms;
export const SelectFileName = (state: RootState) =>
  state.onboardingSlice.fileName;
export const SelectOnboardedUser = (state: RootState) =>
  state.onboardingSlice.onboarded;

export const SelectSessionTimer = (state: RootState) =>
  state.onboardingSlice.sessionExpiration;

export default onboardingSlice.reducer;
