import React from 'react';
import Container from '../Shared/Container/Container';
import womenImg from '../../assets/images/women.png'
import { BsArrowRightCircle } from 'react-icons/Bs';
import '../OurTechnology/OurTechnology.css'
const OurTechnology = () => {
    return (
        <>
            <div className=' bg-[#272727] p-8  '>
                <h1 className='text-center text-white text-2xl'>Discover the limitless potential <br />
                    of your business with our technology</h1>
            </div>
            <div className='bg-[#272727]  '>
                <Container >

                    <div className='z-0' >
                        <div className="flex flex-col  lg:flex-row items-center justify-center   ml-20">

                            <div className="lg:w-1/2 bg-[#171717] p-8  z-0 ">
                                <h1 className="text-3xl lg:text-2xl text-white ">USE CASES</h1>
                                <p className="mt-4 text-[#FC5F45] font-light text-3xl">We supported Relish <br />
                                    Child Care NGO to <br />
                                    boost up there reach.</p>
                                <p className="mt-4 text-white leading-tight	text-lg subHeading ">It is a long established fact that a reader will be distracted <br />
                                    by the readable content of a page when looking at its <br />
                                    layout. The point of using Lorem Ipsum is that it has a more <br /> or-less normal  distribution of letters, as opposed to using <br />
                                    'Content here, content here', making it look like readable <br />
                                    English.</p>

                                <button> <BsArrowRightCircle size={40} className='text-[#EAEAEC] my-12' /></button>
                            </div>

                            {/* Right side (image) */}
                            <div className="lg:w-1/2">
                                <img
                                    src={womenImg}
                                    alt="Image description"
                                    className="w-[605px] h-auto"
                                />
                            </div>
                        </div>

                    </div>
                </Container>

            </div>
        </>
    );
};

export default OurTechnology;