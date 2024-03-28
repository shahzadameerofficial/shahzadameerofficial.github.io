import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  about: {},
  services: {
    allServices: []
  },
  projects: {
    allProjects: []
  },
  faqs: {
    allFaqs: []
  },
  toLoad: 5,
  loaded: 0
}

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    updateAbout: (state, action) => {
      state.about = action.payload;
    },
    updateServices: (state, action) => {
      state.services = action.payload;
    },
    updateProjects: (state, action) => {
      state.projects = action.payload;
    },
    updateFaqs: (state, action) => {
      state.faqs = action.payload;
    },
    setToLoad: (state, action) => {
      state.toLoad = action.payload;
    },
    setLoaded: (state, action) => {
      state.loaded = action.payload;
    },
    // updateServices: (state, action) => {
    //   state.searchFiltersForm = { ...state.searchFiltersForm, ...action.payload };
    // },
  },
})

// Action creators are generated for each case reducer function
export const { updateAbout , updateServices , updateProjects , updateFaqs , setToLoad, setLoaded } = portfolioSlice.actions

export default portfolioSlice.reducer