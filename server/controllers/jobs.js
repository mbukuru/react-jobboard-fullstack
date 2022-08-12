import Job from "../models/Job.js";
import mongoose from "mongoose";

// GET ALL JOBS

export const getJobs = async (req, res) => {
    try {
      const jobs = await Job.find();
      res.status(200).json(jobs); // 200 OK
    } catch (error) {
      res.status(404).json({ message: error.message }); // 404 Not Found
    }
};

// GET A SINGLE JOB

export const getJob = async (req, res) => {
    const { id: _id } = req.params;
     try {
       const job = await Job.findById(_id);
       res.status(200).json(job);
     } catch (err) {
       res.status(404).json({ message: error.message }); // 404 Not Found
     }
   };

// CREATE A JOB

export const createJob = async (req, res) => {
    const job = req.body;
    const newJob = new Job(job);
  
    try {
      await newJob.save();
      res.status(201).json(newJob); // 201 Created
    } catch (error) {
      res.status(409).json({ message: error.message }); // 409 Conflict
    }
};

// UPDATE A JOB

export const updateJob = async (req, res) => {
    const { id: _id } = req.params;
    const job = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send(`No job with the id ${_id} exists`); // 404 Not Found
    }
  
    const updatedJob = await Job.findByIdAndUpdate(
      _id,
      { ...job, _id },
      {
        new: true,
      }
    );
  
    res.json(updatedJob);
};

// DELETE A JOB

export const deleteJob = async (req, res) => {
    const { id: _id } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).send(`No job with the id ${_id} exists`); // 404 Not Found
    }
  
    await Job.findByIdAndRemove(_id);
  
    res.json({ message: "Job deleted successfully" });
};