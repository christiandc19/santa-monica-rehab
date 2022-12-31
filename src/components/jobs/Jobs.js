import React from 'react'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import './Jobs.css'

const Jobs = () => {
    return (
        <div className='jobs'>
            <div className="container">
                <div className="content">
                    <Fade top>
                    <h1>Jobs Prorgam</h1>
                    </Fade>
                    <Fade bottom>
                    <p>We strive to assist participants to acquire the knowledge and skills needed to obtain self-sufficiency through the enhancement of their capacity for civic engagement, community leadership by securing meaningful and gratifying employment that will empower themselves, their families, which will create stronger and safer communities.  
                    <br /> <br />
                    Our jobs program starts with getting an ID, to helping with a resume, to coaching for the interview, transportation to the actual work site, and coaching on how to keep the job and appropriate behavior. Work is NOT an option.  </p>
                    </Fade>
                <div>
                <Link to="/treatment">
                    <button>Learn More</button>
                </Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs