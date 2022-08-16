import React, { useState, useEffect } from 'react';
import './Home.css';
import Footer from '../../components/footer/Footer.js';
import Axios from "axios";


function Home() {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8800/jobs/").then((response) => {
            setJobs(response.data);
            console.log("jobs", response.data)
        });
      }, []);

  return (
    <div className='Home'>
        <div className='header'>
            <div className='logoNHeader'>
                <div className='logo'>
                    <h1>GIT</h1>
                </div>
                <div className='headerH1H2'>
                    <h1>Get Into Tech</h1>
                    <h2>A resource to help you find entry-level web/tech jobs</h2>
                </div>
            </div>
        </div>
        <div className='HomeAbout'>
                <p className='Home'>Home</p>
                <p className='dot'>•</p>
                <p className='About'>About</p>
        </div>
        <div className='jobs'>
        <table>
        {jobs.map(job => (

            <tbody>
            <tr>
                <th>{job.company}  -  {job.role} |  {job.location} | <a href={job.link} target="_blank">Apply Here</a></th>
            </tr>
            </tbody>
        ))}
        </table>
        </div>
        <div className='footer'>
            <Footer />
        </div>
    </div>
  )
}

export default Home