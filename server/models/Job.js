import mongoose from "mongoose";

const jobSchema = mongoose.Schema({
  company: String,
  role: String,
  location: String,
  link: String,
  postedAt: {
    type: Date,
    default: new Date()
  }
});

const Job = mongoose.model("Job", jobSchema);

export default Job;