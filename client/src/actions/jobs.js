import * as api from "../api";
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
} from "../constants/actionTypes";

// Action Creators (functions that return actions)
// We use redux-thunk's dispatch function since fetching data is an async process
export const getJobs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchJobs();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createJob = (job) => async (dispatch) => {
  try {
    const { data } = await api.createJob(job);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const updateJob = (id, job) => async (dispatch) => {
  try {
    const { data } = await api.updateJob(id, job);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const deleteJob = (id) => async (dispatch) => {
  try {
    await api.deleteJob(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.error(error);
  }
};

