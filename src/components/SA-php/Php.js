import React from 'react'
import Fade from 'react-reveal/Fade';

import Wave from '../../assets/waves.svg'

import './Php.css'

const PHP = () => {
    return (
        <>
        <div className='php submenu'>

            <div className='hero-divider'>
                <img src={Wave} loading="lazy" alt="wave divider" repeat-x/>
            </div>

                <div className="php-content">
                    <Fade top>
                    <h2>- SUBSTANCE ABUSE</h2>
                    <h1>Partial Hospitalization Program</h1>
                    </Fade>
                </div>
            </div>
        </>
    )
}

export default PHP


