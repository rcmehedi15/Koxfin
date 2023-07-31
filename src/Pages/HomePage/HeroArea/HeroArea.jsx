import React from 'react';
import { Link } from 'react-router-dom';
import navarrow from '../../../assets/images/navarrow.png'
import '../HeroArea/HeroArea.css'
import Container from '../../Shared/Container/Container';
const HeroArea = () => {
    return (
        <>
           

                <div className="hero place-content-start flex   min-h-screen bg-[#272727]  ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={navarrow} className='w-56 md:w-96 rounded-lg absolute top-0 right-0' />
                        <Container>
                            <h1 className="HeroAreaHeading ml-20 ">

                                we enable your Business  <br />
                                with Secure & <br />
                                Automated Innovation </h1>
                            <p className="text-[#F8F8F8] py-4 ml-20 ">Securing Your Business and Streamlining Operations <br />
                                with Integrated Payment, Automation, Data, and Security Solutions</p>
                            <Link to="/signup" className="ml-20 btn bg-[#FF42A5] text-white border-none">Get Started </Link>
                        </Container>
                    </div>
                </div>
            
        </>
    );
};

export default HeroArea;