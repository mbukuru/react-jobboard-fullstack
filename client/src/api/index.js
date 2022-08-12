import axios from "axios";

const url = "http://localhost:8000/jobs";

export const fetchJobs = () => axios.get(url);
export const createJob = (newJob) => axios.job(url, newJob);
export const updateJob = (id, updatedJob) =>
  axios.patch(`${url}/${id}`, updatedJob);
export const deleteJob = (id) => axios.delete(`${url}/${id}`);