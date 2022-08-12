import React from 'react';
import './Home.css';
import Footer from '../../components/footer/Footer.js'

function Home() {
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
                <tr>
                    <th>Company Inc - Jr Web Developer | Remote, US | Apply Here</th>
                </tr>
                <tr>
                    <th>Company Inc - Jr Web Developer | Remote, US | Apply Here</th>
                </tr>
                <tr>
                    <th>Company Inc - Jr Web Developer | Remote, US | Apply Here</th>
                </tr>
                <tr>
                    <th>Company Inc - Jr Web Developer | Remote, US | Apply Here</th>
                </tr>
                <tr>
                    <th>Company Inc - Jr Web Developer | Remote, US | Apply Here</th>
                </tr>
                <tr>
                    <th>Company Inc - Jr Web Developer | Remote, US | Apply Here</th>
                </tr>
                <tr>
                    <th>Company Inc - Jr Web Developer | Remote, US | Apply Here</th>
                </tr>
                <tr>
                    <th>Company Inc - Jr Web Developer | Remote, US | Apply Here</th>
                </tr>
            </table>
        </div>
        <div className='footer'>
            <Footer />
        </div>
    </div>
  )
}

export default Home