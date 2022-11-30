import React from 'react'
import { Link } from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'
import './ServicesCards.css'
import './ServicesProps.css'
import Fade from 'react-reveal/Fade';
import ServicesProps from './ServicesProps';
import Services1 from '../../assets/mental-illness.png'
import Services2 from '../../assets/substance-use.png'
import Services4 from '../../assets/employment-assistance.png'


const ServicesCards = () => {
    return (
        <>
<div className='servicesCardsContainer'>
            <div className='cards-header'>
                <div className="services-container">
                    <Fade top>
                        <div className="container content">
                            <h1>OUR SERVICES</h1>
                            <p>At Santa Monica Rehab Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
                        </div>
                    </Fade>
                </div>
            </div>

{/* CARDS */}

            <div className='main'>
                <Fade bottom>
                    <ServicesProps
                        Image={Services1}
                        CardName="Mental Health Treatment​"
                        Description="Clients suffer from both mental health disorders and addiction. Therefore, we provide treatment for co-occurring disorders, addressing both conditions simultaneously."
                    />
                </Fade>

                <Fade top>
                    <ServicesProps
                        Image={Services2}
                        CardName="Substance Use Treatment"
                        Description="We treat a multitude of substance use disorders. Whether the client is suffering from an alcohol addiction, prescription drug addiction, we can help."
                    />
                </Fade>

                <Fade bottom>
                    <ServicesProps
                        Image={Services4}
                        CardName="Employment Assistance"
                        Description="There are a variety of programs and organizations that fall under the umbrella of employment-based recovery support services. Jobs Assistance is available."
                    />
                </Fade>
            </div>
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                <Link to="/treatment">
                    <div className='service-cards-btn'>
                        <button>Learn More</button>
                    </div>
                </Link>
            </LinkRoll>

            
            {/* <div className='service-3'>
                <div className='service-3-description'>
                    <Fade left>

                        <h1>What We Do</h1>
                        <br /> <br />
                        <p>At Palm Springs Mental Health Treatment Facility, we offer different levels of care based on each individual’s needs. Our programs consist of an intensive outpatient program (IOP) and a more demanding and structured partial hospitalization program (PHP). You can be confident that our caring and professional staff will recommend the right level of care for you or your loved one.                    </p><br />
                        <p>
                            Counselor and client will work together to compose a treatment plan with clear objectives and goals based on key areas intake assessment. It will include: challenges that the client may encounter during recovery process, clear methods of navigating obstacles in recovery, action steps to be taken by the program and/or client to overcome the challenges of recovery.
                        </p><br />
                    </Fade>

                </div>
                <div className='service-3-image'>
                    <img src={Service3} alt="" />
                </div>
            </div> */}

</div>
        </>
   )
}

export default ServicesCards
