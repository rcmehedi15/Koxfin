import React from 'react';
import Container from '../Container/Container';
import Logo from './Logo';

import Search from './Search';
import MenuDropdown from './MenuDropDown';

const Navbar = () => {
    return (
        <>
            <div className=' w-full bg-[#272727] z-10 '>
                <div className='py-4 '>
                    <Container>
                        <div className='flex  items-center justify-between gap-3 md:gap-0 '>
                           <Logo />
                           <MenuDropdown />
                           <Search />
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Navbar;